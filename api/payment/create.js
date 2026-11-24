// Serverless function deployed on Vercel to create a payment link with SkipCash Qatar
// Supports both Sandbox (https://skipcashtest.azurewebsites.net) and Production (https://api.skipcash.app).

import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const body = req.body || {};
    const { customer = {}, item = {}, consents = {} } = body;

    const keyId = (process.env.SKIPCASH_KEY_ID || "").trim();
    const keySecret = (process.env.SKIPCASH_KEY_SECRET || "").trim();
    const isProd = process.env.SKIPCASH_ENV === "production";
    const baseUrl = (
      process.env.SKIPCASH_BASE_URL ||
      process.env.SKIPCASH_URL ||
      (isProd ? "https://api.skipcash.app" : "https://skipcashtest.azurewebsites.net")
    )
      .trim()
      .replace(/\/+$/, "");

    if (!keyId || !keySecret) {
      return res.status(400).json({
        success: false,
        error: "SkipCash credentials not configured. Please add SKIPCASH_KEY_ID and SKIPCASH_KEY_SECRET in Vercel Environment Variables or .env.local",
      });
    }

    const hostOrigin = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://gotawakened.com";

    // Format Amount (e.g. 1.00 for testing or full package amount)
    let amountNumber = 1747;
    if (item.priceQar !== undefined && item.priceQar !== null) {
      amountNumber = Number(item.priceQar);
    } else if (item.amountQar !== undefined && item.amountQar !== null) {
      amountNumber = Number(item.amountQar);
    } else if (item.price !== undefined && item.price !== null) {
      amountNumber = item.price >= 100 ? item.price / 100 : item.price;
    }
    const amountStr = Number(amountNumber).toFixed(2);

    // Split customer name into first and last
    const nameParts = (customer.name || "Valued Client").trim().split(/\s+/);
    const firstName = nameParts[0] || "Valued";
    const lastName = nameParts.slice(1).join(" ") || "Client";
    const phone = (customer.phone || "+97400000000").replace(/\s+/g, "");
    const email = customer.email || "client@gotawakened.com";

    const uid = crypto.randomUUID();
    const transactionId = `INV-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;

    const custom1 = JSON.stringify({
      invoiceNumber: transactionId,
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      organization: customer.organization,
      itemTitle: item.title || item.tier || "Awakened Consultation",
      priceQar: amountNumber,
    });

    // Exact required order for SkipCash HMAC signature:
    // Uid, KeyId, Amount, FirstName, LastName, Phone, Email, Street, City, State, Country, PostalCode, TransactionId, Custom1
    // Note: State must be 2 characters or fewer (or empty). We leave State empty to prevent SkipCash validation errors.
    const orderedParams = [
      ["Uid", uid],
      ["KeyId", keyId],
      ["Amount", amountStr],
      ["FirstName", firstName],
      ["LastName", lastName],
      ["Phone", phone],
      ["Email", email],
      ["Street", ""],
      ["City", "Doha"],
      ["State", ""],
      ["Country", "QA"],
      ["PostalCode", ""],
      ["TransactionId", transactionId],
      ["Custom1", custom1],
    ];

    // Filter non-empty and join with comma
    const signatureParts = orderedParams
      .filter(([, v]) => v !== undefined && v !== null && v !== "")
      .map(([k, v]) => `${k}=${v}`);
    const stringToSign = signatureParts.join(",");

    // HMAC-SHA256 in Base64
    const signature = crypto
      .createHmac("sha256", keySecret)
      .update(stringToSign)
      .digest("base64");

    const payload = {
      Uid: uid,
      KeyId: keyId,
      Amount: amountStr,
      FirstName: firstName,
      LastName: lastName,
      Phone: phone,
      Email: email,
      City: "Doha",
      Country: "QA",
      TransactionId: transactionId,
      Custom1: custom1,
    };

    const skipCashResponse = await fetch(`${baseUrl}/api/v1/payments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: signature,
      },
      body: JSON.stringify(payload),
    });

    const responseData = await skipCashResponse.json();

    if (!skipCashResponse.ok) {
      console.error("[SkipCash Create Error]:", responseData);
      return res.status(skipCashResponse.status).json({
        success: false,
        error: responseData.errorMessage || responseData.message || "Failed to create payment session with SkipCash",
        details: responseData,
      });
    }

    // Extract redirect pay URL
    const payUrl =
      responseData.resultObj?.payUrl ||
      responseData.payUrl ||
      responseData.resultObj?.paymentUrl ||
      responseData.paymentUrl;

    return res.status(200).json({
      success: true,
      checkoutUrl: payUrl,
      transactionId,
      result: responseData,
    });
  } catch (err) {
    console.error("[SkipCash API Handler Exception]:", err);
    return res.status(500).json({
      success: false,
      error: err instanceof Error ? err.message : "Internal error connecting to SkipCash gateway",
    });
  }
}
