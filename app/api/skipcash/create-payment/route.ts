import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";

/**
 * POST /app/api/skipcash/create-payment/route.ts
 * Next.js App Router payment initiation handler for SkipCash Qatar.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
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
      return NextResponse.json(
        {
          error:
            "Missing required fields. All of the following are required: amount, firstName, lastName, phone, email, orderId.",
        },
        { status: 400 }
      );
    }

    const baseUrl = (process.env.SKIPCASH_BASE_URL || "").trim().replace(/\/+$/, "");
    const keyId = (process.env.SKIPCASH_KEY_ID || "").trim();
    const keySecret = (process.env.SKIPCASH_KEY_SECRET || "").trim();

    if (!baseUrl || !keyId || !keySecret) {
      console.error(
        "[SkipCash] Missing required server environment variables (SKIPCASH_BASE_URL, SKIPCASH_KEY_ID, or SKIPCASH_KEY_SECRET)."
      );
      return NextResponse.json(
        { error: "SkipCash payment gateway is not configured on the server." },
        { status: 500 }
      );
    }

    const uid = crypto.randomUUID();
    const numAmount = Number(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      return NextResponse.json(
        { error: "Invalid amount. Must be a positive number." },
        { status: 400 }
      );
    }
    const amountStr = numAmount.toFixed(2);
    const transactionId = String(orderId).trim();

    const payload: Record<string, string> = {
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

    const dataPairs: string[] = [];
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
      return NextResponse.json(
        {
          error:
            responseData?.errorMessage ||
            responseData?.message ||
            "Failed to create payment session with SkipCash.",
        },
        { status: 500 }
      );
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
      return NextResponse.json(
        {
          error:
            responseData?.errorMessage ||
            responseData?.message ||
            "SkipCash did not return a checkout payment URL.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ payUrl }, { status: 200 });
  } catch (err: any) {
    console.error("[SkipCash Create Payment Exception]:", err?.message || err);
    return NextResponse.json(
      { error: "Internal server error while processing payment." },
      { status: 500 }
    );
  }
}
