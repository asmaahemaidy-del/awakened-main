import crypto from "node:crypto";

/**
 * POST /api/skipcash/webhook
 * Handles payment status updates from SkipCash Qatar payment gateway.
 *
 * Status IDs:
 * 0: New
 * 1: Pending
 * 2: Paid
 * 3: Canceled
 * 4: Failed
 * 5: Rejected
 * 6: Refunded
 */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const rawBody = typeof req.body === "string" ? req.body : JSON.stringify(req.body || {});
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});

    const webhookKey = (process.env.SKIPCASH_WEBHOOK_KEY || "").trim();
    const incomingAuth = (
      req.headers["authorization"] ||
      req.headers["Authorization"] ||
      req.headers["x-skipcash-signature"] ||
      ""
    ).trim();

    if (!webhookKey) {
      console.error("[SkipCash Webhook] Server missing SKIPCASH_WEBHOOK_KEY environment variable.");
      return res.status(500).json({ error: "Webhook key is not configured on server." });
    }

    // Helper to safely extract field values regardless of casing
    const getVal = (key) => {
      const lowerKey = key.charAt(0).toLowerCase() + key.slice(1);
      const v = body[key] !== undefined ? body[key] : body[lowerKey];
      return v !== undefined && v !== null && String(v).trim() !== "" ? String(v).trim() : null;
    };

    // Take non-empty fields in this exact order:
    // PaymentId, Amount, StatusId, TransactionId, Custom1, VisaId
    const orderedFields = ["PaymentId", "Amount", "StatusId", "TransactionId", "Custom1", "VisaId"];
    const pairs = [];
    for (const field of orderedFields) {
      const val = getVal(field);
      if (val !== null) {
        pairs.push(`${field}=${val}`);
      }
    }

    const dataToSign = pairs.join(",");
    const expectedSignature = crypto
      .createHmac("sha256", webhookKey)
      .update(dataToSign)
      .digest("base64");

    // Secure timingSafeEqual verification (prevent timing attacks and length-mismatch throw)
    const expectedBuf = Buffer.from(expectedSignature, "utf8");
    const incomingBuf = Buffer.from(incomingAuth, "utf8");

    if (
      expectedBuf.length !== incomingBuf.length ||
      !crypto.timingSafeEqual(expectedBuf, incomingBuf)
    ) {
      console.warn("[SkipCash Webhook] Invalid Authorization signature received.");
      return res.status(401).json({ error: "Invalid signature" });
    }

    const statusId = Number(getVal("StatusId"));
    const transactionId = getVal("TransactionId");
    const paymentId = getVal("PaymentId");

    // StatusId == 2 represents PAID
    if (statusId === 2) {
      console.log(`ORDER PAID: ${transactionId}`);
      // TODO: Update order in database to mark as PAID
      // Example: await db.orders.update({ where: { id: transactionId }, data: { status: 'PAID', paymentId } });
    } else {
      console.log(`[SkipCash Webhook] Payment ${paymentId} (Trans: ${transactionId}) received status: ${statusId}`);
    }

    // Always return 200 for valid webhooks
    return res.status(200).json({ received: true, status: statusId });
  } catch (err) {
    console.error("[SkipCash Webhook Exception]:", err?.message || err);
    return res.status(500).json({ error: "Internal server error processing webhook." });
  }
}
