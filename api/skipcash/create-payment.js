import crypto from "node:crypto";

/**
 * POST /api/skipcash/create-payment
 * Initiates a payment session with SkipCash Qatar payment gateway.
 *
 * Required body: { amount, firstName, lastName, phone, email, orderId }
 */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
    const { amount, firstName, lastName, phone, email, orderId } = body;

    // Validate that all required fields are present
    if (
      amount === undefined ||
      amount === null ||
      String(amount).trim() === "" ||
      !firstName ||
      !lastName ||
      !phone ||
      !email ||
      !orderId
    ) {
      return res.status(400).json({
        error: "Missing required fields. All of the following are required: amount, firstName, lastName, phone, email, orderId.",
      });
    }

    const baseUrl = (process.env.SKIPCASH_BASE_URL || "").trim().replace(/\/+$/, "");
    const keyId = (process.env.SKIPCASH_KEY_ID || "").trim();
    const keySecret = (process.env.SKIPCASH_KEY_SECRET || "").trim();

    if (!baseUrl || !keyId || !keySecret) {
      console.error("[SkipCash] Missing required server environment variables (SKIPCASH_BASE_URL, SKIPCASH_KEY_ID, or SKIPCASH_KEY_SECRET).");
      return res.status(500).json({ error: "SkipCash payment gateway is not configured on the server." });
    }

    const uid = crypto.randomUUID();
    const numAmount = Number(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      return res.status(400).json({ error: "Invalid amount. Must be a positive number." });
    }
    const amountStr = numAmount.toFixed(2);
    const transactionId = String(orderId).trim();

    const payload = {
      Uid: uid,
      KeyId: keyId,
      Amount: amountStr,
      FirstName: String(firstName).trim(),
      LastName: String(lastName).trim(),
      Phone: String(phone).trim(),
      Email: String(email).trim(),
      TransactionId: transactionId,
    };

    // Non-empty fields in exact order required by SkipCash
    const orderedFields = [
      "Uid",
      "KeyId",
      "Amount",
      "FirstName",
      "LastName",
      "Phone",
      "Email",
      "Street",
      "City",
      "State",
      "Country",
      "PostalCode",
      "TransactionId",
      "Custom1",
    ];

    const dataPairs = [];
    for (const field of orderedFields) {
      const val = payload[field];
      if (val !== undefined && val !== null && String(val).trim() !== "") {
        dataPairs.push(`${field}=${String(val).trim()}`);
      }
    }

    const stringToSign = dataPairs.join(",");
    const signature = crypto
      .createHmac("sha256", keySecret)
      .update(stringToSign)
      .digest("base64");

    const skipCashResponse = await fetch(`${baseUrl}/api/v1/payments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: signature,
      },
      body: JSON.stringify(payload),
    });

    const responseData = await skipCashResponse.json().catch(() => null);

    if (!skipCashResponse.ok || !responseData) {
      console.error(
        "[SkipCash Payment Creation Error] Status:",
        skipCashResponse.status,
        "Response:",
        JSON.stringify(responseData)
      );
      return res.status(500).json({
        error: responseData?.errorMessage || responseData?.message || "Failed to create payment session with SkipCash.",
      });
    }

    const payUrl =
      responseData.resultObj?.payUrl ||
      responseData.payUrl ||
      responseData.resultObj?.paymentUrl ||
      responseData.paymentUrl;

    if (!payUrl) {
      console.error(
        "[SkipCash Payment Creation Missing payUrl] Response:",
        JSON.stringify(responseData)
      );
      return res.status(500).json({
        error: responseData?.errorMessage || responseData?.message || "SkipCash did not return a checkout payment URL.",
      });
    }

    return res.status(200).json({ payUrl });
  } catch (err) {
    console.error("[SkipCash Create Payment Exception]:", err?.message || err);
    return res.status(500).json({ error: "Internal server error while processing payment." });
  }
}
