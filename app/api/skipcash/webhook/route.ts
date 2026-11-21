import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";

/**
 * POST /app/api/skipcash/webhook/route.ts
 * Next.js App Router Webhook endpoint for SkipCash Qatar.
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
export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    let body: Record<string, any> = {};
    try {
      body = JSON.parse(rawBody || "{}");
    } catch {
      body = {};
    }

    const webhookKey = (process.env.SKIPCASH_WEBHOOK_KEY || "").trim();
    const incomingAuth = (req.headers.get("authorization") || "").trim();

    if (!webhookKey) {
      console.error("[SkipCash Webhook] Server missing SKIPCASH_WEBHOOK_KEY environment variable.");
      return NextResponse.json({ error: "Webhook key is not configured on server." }, { status: 500 });
    }

    const getVal = (key: string): string | null => {
      const lowerKey = key.charAt(0).toLowerCase() + key.slice(1);
      const v = body[key] !== undefined ? body[key] : body[lowerKey];
      return v !== undefined && v !== null && String(v).trim() !== "" ? String(v).trim() : null;
    };

    // Take non-empty fields in this exact order:
    // PaymentId, Amount, StatusId, TransactionId, Custom1, VisaId
    const orderedFields = ["PaymentId", "Amount", "StatusId", "TransactionId", "Custom1", "VisaId"];
    const pairs: string[] = [];
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

    // Timing-safe comparison
    const expectedBuf = Buffer.from(expectedSignature, "utf8");
    const incomingBuf = Buffer.from(incomingAuth, "utf8");

    if (
      expectedBuf.length !== incomingBuf.length ||
      !crypto.timingSafeEqual(expectedBuf, incomingBuf)
    ) {
      console.warn("[SkipCash Webhook] Invalid Authorization signature received.");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
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
    return NextResponse.json({ received: true, status: statusId }, { status: 200 });
  } catch (err: any) {
    console.error("[SkipCash Webhook Exception]:", err?.message || err);
    return NextResponse.json({ error: "Internal server error processing webhook." }, { status: 500 });
  }
}
