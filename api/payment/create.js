// Serverless function deployed on Vercel to create a payment link with SkipCash Qatar
// Supports both Sandbox (https://skipcashtest.azurewebsites.net) and Production (https://api.skipcash.app).

import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const body = req.body || {};
    const customer = body.customer || {};
    const consents = body.consents || {};
    let item = body.item || {};

    // SKU fallback lookup if item details were omitted
    const sku = body.skuId || item.skuId || body.lineItems?.[0]?.skuId;
    if (sku && (!item.priceQar && !item.price && !item.amountQar && !body.amount)) {
      if (sku === "doc-parent-digital-safety-1qar") {
        item = {
          ...item,
          skuId: sku,
          title: "Raising Safe, Aware and Resilient Children in a Digital World",
          priceQar: 1.0,
          isBooklet: true,
          itemType: "publication",
        };
      } else if (sku === "019dce10-c3f0-7669-ac04-e245507ba5c0" || sku === "sku-pkg-starter-4947qar") {
        item = {
          ...item,
          skuId: sku,
          title: "Starter Advisory Package (3 Sessions)",
          priceQar: 4947,
        };
      } else if (sku === "019dce10-cd64-7799-ae81-3b479a68c7b4" || sku === "sku-pkg-core-9697qar") {
        item = {
          ...item,
          skuId: sku,
          title: "Core Advisory Package (6 Sessions)",
          priceQar: 9697,
        };
      } else if (sku === "019dce10-d42f-737d-bd6d-dce6efe7d464" || sku === "sku-pkg-immersive-18797qar") {
        item = {
          ...item,
          skuId: sku,
          title: "Immersive Advisory Package (12 Sessions)",
          priceQar: 18797,
        };
      } else if (sku === "019dce10-primary-session-1747qar" || sku === "sku-primary-session-1747qar") {
        item = {
          ...item,
          skuId: sku,
          title: "Primary Coaching Needs Assessment & Matching",
          priceQar: 1747,
        };
      }
    }

    const keyId = (process.env.SKIPCASH_KEY_ID || "").trim();
    const keySecret = (process.env.SKIPCASH_KEY_SECRET || "").trim();
    const isSandbox = process.env.SKIPCASH_ENV === "sandbox" || process.env.SKIPCASH_ENV === "test";
    const baseUrl = (
      process.env.SKIPCASH_BASE_URL ||
      process.env.SKIPCASH_URL ||
      (isSandbox ? "https://skipcashtest.azurewebsites.net" : "https://api.skipcash.app")
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

    // Format Amount (respects item package price, body amount, or fallback)
    let amountNumber = null;
    if (item.priceQar !== undefined && item.priceQar !== null && !isNaN(Number(item.priceQar))) {
      amountNumber = Number(item.priceQar);
    } else if (item.amountQar !== undefined && item.amountQar !== null && !isNaN(Number(item.amountQar))) {
      amountNumber = Number(item.amountQar);
    } else if (body.amount !== undefined && body.amount !== null && !isNaN(Number(body.amount))) {
      amountNumber = Number(body.amount);
    } else if (body.priceQar !== undefined && body.priceQar !== null && !isNaN(Number(body.priceQar))) {
      amountNumber = Number(body.priceQar);
    } else if (body.amountQar !== undefined && body.amountQar !== null && !isNaN(Number(body.amountQar))) {
      amountNumber = Number(body.amountQar);
    } else if (item.price !== undefined && item.price !== null && !isNaN(Number(item.price))) {
      const num = Number(item.price);
      amountNumber = num >= 100 ? num / 100 : num;
    } else if (typeof item.priceQAR === "string") {
      const parsed = parseFloat(item.priceQAR.replace(/[^0-9.]/g, ""));
      if (!isNaN(parsed) && parsed > 0) amountNumber = parsed;
    }

    if (amountNumber === null || isNaN(amountNumber) || amountNumber <= 0) {
      amountNumber = 1747;
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

    const isBooklet =
      Boolean(item.isBooklet) ||
      item.itemType === "publication" ||
      item.skuId?.startsWith("doc-") ||
      amountNumber <= 10;

    const itemTitle =
      item.title ||
      item.name ||
      item.titleEn ||
      item.nameEn ||
      item.tier ||
      (isBooklet ? "Raising Safe, Aware and Resilient Children in a Digital World" : "Awakened Consultation");

    const itemTitleAr =
      item.titleAr ||
      item.nameAr ||
      item.tierAr ||
      (isBooklet ? "تنشئة أطفال آمنين وواعين وقادرين على التكيف في عالم رقمي" : "جلسة استشارية أوايكند");

    const itemDescription =
      item.description ||
      item.descEn ||
      item.subtitleEn ||
      (isBooklet ? "Official Publication Booklet • High-Resolution Vector PDF (3.9 MB)" : "Consultation Session");

    const itemDescriptionAr =
      item.descriptionAr ||
      item.descAr ||
      item.subtitleAr ||
      (isBooklet ? "الكتيب التوعوي الرسمي • ملف فائق الدقة (٣.٩ ميجابايت)" : "جلسة استشارية");

    const custom1 = JSON.stringify({
      invoiceNumber: transactionId,
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      organization: customer.organization,
      itemTitle,
      itemTitleAr,
      itemDescription,
      itemDescriptionAr,
      itemType: isBooklet ? "publication" : (item.itemType || "consultation"),
      downloadUrl: isBooklet ? (item.downloadUrl || "https://gotawakened.com/documents/Awakened_Parent_Digital_Safety_Guide_Qatar.pdf") : undefined,
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
