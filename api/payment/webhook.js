// SkipCash Payment Webhook Handler (Vercel Serverless Function)
// Receives payment status updates from SkipCash, triggers invoice generation,
// emails the customer, and logs transaction to Awakened Admin Panel.

import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const rawBody = typeof req.body === "string" ? req.body : JSON.stringify(req.body);
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});

    // Webhook secret validation if configured
    const webhookSecret = process.env.SKIPCASH_WEBHOOK_SECRET;
    const incomingSignature = req.headers["x-skipcash-signature"] || req.headers["signature"];

    if (webhookSecret && incomingSignature) {
      const computed = crypto.createHmac("sha256", webhookSecret).update(rawBody).digest("hex");
      if (computed !== incomingSignature) {
        console.warn("[SkipCash Webhook] Invalid signature match");
        return res.status(401).json({ error: "Invalid signature" });
      }
    }

    const {
      statusId,
      status,
      paymentId,
      transactionId = paymentId || `TXN-${Date.now()}`,
      amount,
      currency = "QAR",
      customerEmail,
      customerName,
      customerPhone,
      metadata = {},
      custom1,
    } = body;

    // Check if status is Paid / Successful (SkipCash StatusId 2 = Paid)
    const isPaid = statusId === 2 || status === "PAID" || status === "COMPLETED" || body.StatusId === 2 || body.Status === "PAID";

    if (!isPaid) {
      console.log(`[SkipCash Webhook] Non-paid status received (${status || statusId}). Acknowledged.`);
      return res.status(200).json({ received: true, status: "ignored" });
    }

    // Extract customer info from body or custom metadata
    let parsedCustom = {};
    if (typeof custom1 === "string" && custom1.startsWith("{")) {
      try { parsedCustom = JSON.parse(custom1); } catch (e) {}
    }

    const email = customerEmail || parsedCustom.email || body.email;
    const name = customerName || parsedCustom.name || body.name || "Valued Client";
    const phone = customerPhone || parsedCustom.phone || body.phone || "";
    const organization = parsedCustom.organization || "";

    const totalQar = amount !== undefined && amount !== null ? Number(amount) : (parsedCustom.priceQar !== undefined ? Number(parsedCustom.priceQar) : 1747);
    const totalUsd = totalQar <= 10 ? 1 : Math.round(totalQar / 3.64);

    const isBooklet =
      parsedCustom.itemType === "publication" ||
      totalQar <= 10 ||
      (parsedCustom.itemTitle && (
        parsedCustom.itemTitle.toLowerCase().includes("children") ||
        parsedCustom.itemTitle.toLowerCase().includes("booklet") ||
        parsedCustom.itemTitle.toLowerCase().includes("parent")
      ));

    const itemTitle =
      parsedCustom.itemTitle && !parsedCustom.itemTitle.includes("Consultation")
        ? parsedCustom.itemTitle
        : (isBooklet ? "Raising Safe, Aware and Resilient Children in a Digital World" : (parsedCustom.itemTitle || "Awakened Strategic Consultation"));

    const itemTitleAr =
      parsedCustom.itemTitleAr ||
      (isBooklet ? "تنشئة أطفال آمنين وواعين وقادرين على التكيف في عالم رقمي" : "جلسة استشارية أوايكند");

    const itemDescription =
      parsedCustom.itemDescription ||
      (isBooklet ? "Official 3-leaflet publication folder • National Parent Conference on Digital Safety (PDF 3.9 MB)" : "Consultation Session");

    const downloadUrl =
      parsedCustom.downloadUrl ||
      (isBooklet ? "https://gotawakened.com/documents/Awakened_Parent_Digital_Safety_Guide_Qatar.pdf" : undefined);

    const invoiceNum = parsedCustom.invoiceNumber || `INV-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;

    // Call internal invoice sender to email client
    const origin = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://gotawakened.com";
    try {
      await fetch(`${origin}/api/invoice/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          invoiceNumber: invoiceNum,
          transactionId,
          customer: { name, email, phone, organization },
          items: [
            {
              name: itemTitle,
              nameAr: itemTitleAr,
              description: itemDescription,
              quantity: 1,
              priceQar: totalQar,
              priceUsd: totalUsd,
            },
          ],
          subtotalQar: totalQar,
          subtotalUsd: totalUsd,
          totalQar: totalQar,
          totalUsd: totalUsd,
          paymentMethod: "SkipCash Qatar Gateway",
          itemType: isBooklet ? "publication" : "consultation",
          downloadUrl: isBooklet ? downloadUrl : undefined,
        }),
      });
    } catch (sendErr) {
      console.error("[SkipCash Webhook] Error triggering invoice send:", sendErr);
    }

    // Also notify Awakened Admin panel
    const adminApiBase = process.env.VITE_ADMIN_API_URL || "https://awakened-admin.vercel.app";
    try {
      await fetch(`${adminApiBase}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: name,
          email: email || "unknown@client.com",
          phone: phone || undefined,
          inquiry_type: isBooklet ? "publication_purchase" : "order",
          subject: `[SkipCash PAID] ${itemTitle} — ${name} (${totalQar} QAR)`,
          message: [
            `SKIPCASH PAYMENT SETTLED IN FULL:`,
            `• Type: ${isBooklet ? "Digital Publication / Booklet" : "Consultation / Service"}`,
            `• Item: ${itemTitle}`,
            `• Transaction ID: ${transactionId}`,
            `• Invoice #: ${invoiceNum}`,
            `• Customer: ${name} (${email})`,
            phone ? `• Phone: ${phone}` : null,
            organization ? `• Organization: ${organization}` : null,
            `• Amount: ${totalQar} QAR (Pegged $${totalUsd} USD)`,
            `• Status: SETTLED & INVOICE EMAILED`,
          ].filter(Boolean).join("\n"),
          source_page: isBooklet ? "/library" : "/api/payment/webhook",
          preferred_contact: "email",
        }),
      });
    } catch (adminErr) {
      console.warn("[SkipCash Webhook] Admin log warning:", adminErr);
    }

    return res.status(200).json({
      received: true,
      processed: true,
      invoiceNumber: invoiceNum,
      transactionId,
    });
  } catch (err) {
    console.error("[SkipCash Webhook Error]:", err);
    return res.status(500).json({ error: "Webhook internal error" });
  }
}
