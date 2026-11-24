// Serverless function deployed on Vercel to automatically generate and email
// the official Awakened luxury tax invoice & receipt to the customer after successful payment.

export default async function handler(req, res) {
  // Allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const body = req.body || {};
    const {
      invoiceNumber = `INV-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`,
      transactionId = `SC-${Math.floor(10000000 + Math.random() * 90000000)}`,
      date = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
      time = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
      customer = {},
      paymentMethod = "SkipCash Qatar (Card / Apple Pay / NAPS)",
    } = body;

    const totalQar = body.totalQar !== undefined ? Number(body.totalQar) : (body.subtotalQar !== undefined ? Number(body.subtotalQar) : (body.items?.[0]?.priceQar !== undefined ? Number(body.items[0].priceQar) : 1747));
    const subtotalQar = body.subtotalQar !== undefined ? Number(body.subtotalQar) : totalQar;
    const totalUsd = body.totalUsd !== undefined ? Number(body.totalUsd) : (totalQar <= 10 ? 1 : Math.round(totalQar / 3.64));
    const subtotalUsd = body.subtotalUsd !== undefined ? Number(body.subtotalUsd) : totalUsd;
    const taxQar = body.taxQar || 0;

    const isBooklet =
      body.itemType === "publication" ||
      totalQar <= 10 ||
      (body.items && body.items.some(it =>
        (it.name && (it.name.includes("Children") || it.name.includes("Booklet") || it.name.includes("Parent") || it.name.includes("كتيب") || it.name.includes("أطفال")))
      ));

    const defaultItems = isBooklet
      ? [
          {
            name: "Raising Safe, Aware and Resilient Children in a Digital World",
            nameAr: "تنشئة أطفال آمنين وواعين وقادرين على التكيف في عالم رقمي",
            description: "Official 3-leaflet publication folder • National Parent Conference on Digital Safety (PDF 3.9 MB)",
            quantity: 1,
            priceQar: totalQar,
            priceUsd: totalUsd,
          },
        ]
      : [
          {
            name: "Foundational Awakening Consultation",
            nameAr: "جلسة استشارية تشخيصية استراتيجية (٩٠ دقيقة)",
            description: "Comprehensive 90-minute whole-person diagnostic and wellness advisory.",
            quantity: 1,
            priceQar: totalQar,
            priceUsd: totalUsd,
          },
        ];

    const rawItems = (body.items && body.items.length > 0) ? body.items : defaultItems;
    // Normalize items if it's booklet but had generic consultation name
    const effectiveItems = rawItems.map(item => {
      if (isBooklet && (!item.name || item.name.includes("Consultation"))) {
        return {
          ...item,
          name: "Raising Safe, Aware and Resilient Children in a Digital World",
          nameAr: item.nameAr || "تنشئة أطفال آمنين وواعين وقادرين على التكيف في عالم رقمي",
          description: item.description || "Official 3-leaflet publication folder • National Parent Conference on Digital Safety (PDF 3.9 MB)",
        };
      }
      return item;
    });

    const customerEmail = customer.email;
    const customerName = customer.name || "Valued Client";

    if (!customerEmail) {
      return res.status(400).json({ error: "Customer email is required to send invoice." });
    }

    const viewUrl = `https://gotawakened.com/invoice?id=${encodeURIComponent(invoiceNumber)}`;

    // Build the items list HTML
    const itemsHtml = effectiveItems.map(item => `
      <tr style="border-bottom: 1px solid #EAE3D6;">
        <td style="padding: 16px 12px; font-family: 'Georgia', serif; font-size: 14px; color: #141F15; vertical-align: top;">
          <strong style="color: #141F15; font-size: 15px;">${item.name || (isBooklet ? "Digital Publication Booklet" : "Wellness Consultation")}</strong>
          ${item.nameAr ? `<div style="font-family: 'Arial', sans-serif; font-size: 13px; color: #5C8A62; margin-top: 3px;">${item.nameAr}</div>` : ""}
          ${item.description ? `<div style="font-family: 'Arial', sans-serif; font-size: 12px; color: #667068; margin-top: 4px;">${item.description}</div>` : ""}
        </td>
        <td style="padding: 16px 12px; font-family: 'Arial', sans-serif; font-size: 13px; color: #141F15; text-align: center; vertical-align: top;">
          ${item.quantity || 1}
        </td>
        <td style="padding: 16px 12px; font-family: 'Arial', sans-serif; font-size: 13px; color: #141F15; text-align: right; vertical-align: top; white-space: nowrap;">
          <strong>${Number(item.priceQar || 0).toLocaleString()} QAR</strong>
          <div style="font-size: 11px; color: #7B857E;">$${Number(item.priceUsd || 0).toLocaleString()} USD</div>
        </td>
        <td style="padding: 16px 12px; font-family: 'Arial', sans-serif; font-size: 14px; color: #141F15; text-align: right; vertical-align: top; white-space: nowrap;">
          <strong style="color: #141F15;">${(Number(item.priceQar || 0) * (item.quantity || 1)).toLocaleString()} QAR</strong>
          <div style="font-size: 11px; color: #7B857E;">$${(Number(item.priceUsd || 0) * (item.quantity || 1)).toLocaleString()} USD</div>
        </td>
      </tr>
    `).join("");

    // Full responsive luxury HTML template
    const emailHtml = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Official Invoice & Receipt — Awakened for Consultations</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F4EDE2; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #F4EDE2; width: 100%;">
    <tr>
      <td align="center" style="padding: 30px 15px 40px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 680px; background-color: #FFFFFF; border-radius: 12px; border: 1px solid #D9CBBA; box-shadow: 0 10px 30px rgba(20,31,21,0.08); overflow: hidden;">
          
          <!-- TOP GOLD ACCENT BAR -->
          <tr>
            <td height="6" style="background: linear-gradient(90deg, #9E7E2E 0%, #C9A84C 50%, #DFC07A 100%);"></td>
          </tr>

          <!-- HEADER WITH GOLD LOGO -->
          <tr>
            <td align="center" style="padding: 36px 32px 24px; background: #FAF7F2; border-bottom: 1px solid #EAE3D6;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center">
                    <a href="https://gotawakened.com" target="_blank" style="text-decoration: none; display: inline-block;">
                      <img src="https://gotawakened.com/images/awakened-gold-logo.png" alt="Awakened for Consultations | أوايكند للاستشارات" width="220" style="display: block; border: 0; max-width: 220px; height: auto;" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top: 14px;">
                    <div style="font-family: 'Georgia', serif; font-size: 15px; color: #141F15; letter-spacing: 0.05em; font-weight: 600;">
                      Awakened for Consultations LLC
                    </div>
                    <div style="font-family: 'Arial', sans-serif; font-size: 13px; color: #3D6B44; margin-top: 2px;">
                      شركة أوايكند للاستشارات ذ.م.م
                    </div>
                    <div style="font-family: 'Arial', sans-serif; font-size: 11px; color: #7B857E; margin-top: 4px; letter-spacing: 0.05em;">
                      CR No. 189422 &bull; Doha, State of Qatar &bull; https://gotawakened.com
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- RECEIPT TITLE & STATUS BADGE -->
          <tr>
            <td style="padding: 24px 32px 18px; background-color: #FFFFFF; border-bottom: 1px solid #F0EAE1;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td valign="middle">
                    <span style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #9E7E2E; font-weight: 700; display: block; margin-bottom: 4px;">
                      OFFICIAL TAX INVOICE &bull; فاتورة ضريبية رسمية
                    </span>
                    <h1 style="margin: 0; font-family: 'Georgia', serif; font-size: 24px; color: #141F15; font-weight: normal; line-height: 1.2;">
                      Payment Receipt #${invoiceNumber}
                    </h1>
                  </td>
                  <td align="right" valign="middle">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="display: inline-block; background-color: #EBF3EC; border: 1px solid #8FB896; border-radius: 20px;">
                      <tr>
                        <td style="padding: 6px 14px; font-family: 'Arial', sans-serif; font-size: 12px; font-weight: 700; color: #1F4225; letter-spacing: 0.08em; text-transform: uppercase;">
                          &#10003; PAID &bull; مدفوعة بالكامل
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- INVOICE METADATA & CLIENT INFO GRID -->
          <tr>
            <td style="padding: 24px 32px; background-color: #FFFFFF;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <!-- BILLED TO -->
                  <td width="50%" valign="top" style="padding-right: 15px;">
                    <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #7B857E; font-weight: 600; margin-bottom: 6px;">
                      Billed To &bull; فاتورة إلى
                    </div>
                    <div style="font-family: 'Georgia', serif; font-size: 16px; color: #141F15; font-weight: 600;">
                      ${customerName}
                    </div>
                    ${customer.organization ? `<div style="font-family: 'Arial', sans-serif; font-size: 13px; color: #3D6B44; font-weight: 500; margin-top: 2px;">${customer.organization}</div>` : ""}
                    <div style="font-family: 'Arial', sans-serif; font-size: 13px; color: #555E57; margin-top: 4px;">
                      ${customerEmail}
                    </div>
                    ${customer.phone ? `<div style="font-family: 'Arial', sans-serif; font-size: 13px; color: #555E57; margin-top: 2px;">${customer.phone}</div>` : ""}
                  </td>

                  <!-- INVOICE META -->
                  <td width="50%" valign="top" style="padding-left: 15px; border-left: 1px solid #F0EAE1;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="font-size: 12px; color: #7B857E; padding-bottom: 4px;">Date & Time:</td>
                        <td align="right" style="font-family: 'Arial', sans-serif; font-size: 12px; color: #141F15; font-weight: 600; padding-bottom: 4px;">${date} &bull; ${time}</td>
                      </tr>
                      <tr>
                        <td style="font-size: 12px; color: #7B857E; padding-bottom: 4px;">Payment Gateway:</td>
                        <td align="right" style="font-family: 'Arial', sans-serif; font-size: 12px; color: #141F15; font-weight: 600; padding-bottom: 4px;">${paymentMethod}</td>
                      </tr>
                      <tr>
                        <td style="font-size: 12px; color: #7B857E; padding-bottom: 4px;">Transaction Ref:</td>
                        <td align="right" style="font-family: 'Courier New', monospace; font-size: 11px; color: #3D6B44; font-weight: bold; padding-bottom: 4px;">${transactionId}</td>
                      </tr>
                      <tr>
                        <td style="font-size: 12px; color: #7B857E;">Currency Peg:</td>
                        <td align="right" style="font-family: 'Arial', sans-serif; font-size: 11px; color: #9E7E2E; font-weight: 600;">1 USD = 3.64 QAR</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ITEMS TABLE -->
          <tr>
            <td style="padding: 10px 32px 20px; background-color: #FFFFFF;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
                <thead>
                  <tr style="background-color: #FAF7F2; border-top: 1px solid #D9CBBA; border-bottom: 2px solid #C9A84C;">
                    <th align="left" style="padding: 12px 12px; font-family: 'Arial', sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #141F15;">
                      Description &bull; الوصف
                    </th>
                    <th align="center" style="padding: 12px 12px; font-family: 'Arial', sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #141F15;">
                      Qty
                    </th>
                    <th align="right" style="padding: 12px 12px; font-family: 'Arial', sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #141F15;">
                      Rate &bull; السعر
                    </th>
                    <th align="right" style="padding: 12px 12px; font-family: 'Arial', sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #141F15;">
                      Amount &bull; المبلغ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsHtml}
                </tbody>
              </table>
            </td>
          </tr>

          <!-- SUMMARY TOTALS BOX -->
          <tr>
            <td style="padding: 0 32px 28px; background-color: #FFFFFF;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="45%" valign="top">
                    <div style="background-color: #FAF7F2; border: 1px solid #EAE3D6; border-radius: 8px; padding: 12px 14px; margin-top: 8px;">
                      <div style="font-size: 11px; font-weight: 700; color: #141F15; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.05em;">
                        Payment Confirmation &bull; تأكيد الدفع
                      </div>
                      <div style="font-size: 11px; color: #555E57; line-height: 1.4;">
                        Processed securely via SkipCash Qatar. Settled in full under Qatar Central Bank regulatory standards.
                      </div>
                    </div>
                  </td>
                  <td width="55%" valign="top" style="padding-left: 20px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding: 6px 0; font-size: 13px; color: #555E57;">Subtotal (المجموع الفرعي):</td>
                        <td align="right" style="padding: 6px 0; font-size: 13px; color: #141F15; font-weight: 600;">
                          ${Number(subtotalQar).toLocaleString()} QAR <span style="font-size: 11px; color: #7B857E;">($${Number(subtotalUsd).toLocaleString()})</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; font-size: 13px; color: #555E57;">VAT / Tax (ضريبة القيمة المضافة):</td>
                        <td align="right" style="padding: 6px 0; font-size: 13px; color: #3D6B44; font-weight: 600;">
                          0.00 QAR <span style="font-size: 11px; color: #7B857E;">(0% Exempt in Qatar)</span>
                        </td>
                      </tr>
                      <tr style="border-top: 2px solid #C9A84C;">
                        <td style="padding: 12px 0 4px; font-family: 'Georgia', serif; font-size: 16px; color: #141F15; font-weight: 700;">
                          Total Paid &bull; الإجمالي:
                        </td>
                        <td align="right" style="padding: 12px 0 4px; font-family: 'Georgia', serif; font-size: 20px; color: #141F15; font-weight: 700;">
                          ${Number(totalQar).toLocaleString()} QAR
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td align="right" style="font-size: 12px; color: #9E7E2E; font-weight: 600;">
                          Fixed USD: $${Number(totalUsd).toLocaleString()} USD
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- DIGITAL DELIVERY / DOWNLOAD BUTTON (FOR BOOKLET) -->
          ${isBooklet ? `
          <tr>
            <td style="padding: 10px 32px 24px; background-color: #FFFFFF;">
              <div style="background: linear-gradient(135deg, #141F15 0%, #1E2E20 100%); border-radius: 8px; border: 1px solid #C9A84C; padding: 22px 24px; text-align: center;">
                <div style="color: #DFC07A; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 700; margin-bottom: 6px;">
                  YOUR DIGITAL PUBLICATION IS READY &bull; مطبوعك الرقمي جاهز للتحميل
                </div>
                <div style="color: #FAF7F2; font-family: 'Georgia', serif; font-size: 16px; margin-bottom: 14px; font-weight: 600;">
                  ${effectiveItems[0]?.name || "Raising Safe, Aware and Resilient Children in a Digital World"}
                </div>
                <a href="${body.downloadUrl || 'https://gotawakened.com/documents/Awakened_Parent_Digital_Safety_Guide_Qatar.pdf'}" download="Awakened_Parent_Digital_Safety_Guide_Qatar.pdf" target="_blank" style="display: inline-block; background-color: #C9A84C; color: #141F15; font-family: 'Arial', sans-serif; font-size: 13px; font-weight: 700; text-decoration: none; padding: 12px 28px; border-radius: 6px; letter-spacing: 0.05em; text-transform: uppercase;">
                  &#11015; Download Publication (PDF 3.9 MB) &bull; تحميل الكتيب
                </a>
              </div>
            </td>
          </tr>
          ` : ""}

          <!-- VIEW ONLINE / PRINT BUTTON -->
          <tr>
            <td align="center" style="padding: 10px 32px 30px; background-color: #FFFFFF;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="background-color: #141F15; border-radius: 8px;">
                    <a href="${viewUrl}" target="_blank" style="display: inline-block; padding: 13px 32px; font-family: 'Arial', sans-serif; font-size: 13px; font-weight: 600; color: #FAF7F2; text-decoration: none; letter-spacing: 0.08em; text-transform: uppercase;">
                      View & Print Official Invoice &bull; استعراض وطباعة الفاتورة
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- REGULATORY & CONSENT NOTICE -->
          <tr>
            <td style="padding: 24px 32px; background-color: #FAF7F2; border-top: 1px solid #EAE3D6;">
              <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: #9E7E2E; font-weight: 700; margin-bottom: 6px;">
                ${isBooklet ? "PUBLICATION & INTELLECTUAL PROPERTY RIGHTS &bull; الحقوق الفكرية والتسليم الرقمي" : "LEGAL & REGULATORY ACKNOWLEDGMENTS &bull; الإقرارات والشروط القانونية"}
              </div>
              <p style="margin: 0 0 6px; font-size: 11px; color: #667068; line-height: 1.5;">
                &bull; <strong>Qatar Law No. 13 of 2016:</strong> Personal data is processed in accordance with the Personal Data Protection Law of Qatar and will never be shared or sold.
              </p>
              ${isBooklet ? `
              <p style="margin: 0 0 6px; font-size: 11px; color: #667068; line-height: 1.5;">
                &bull; <strong>Copyright & Rights:</strong> Official copyrighted publication of Awakened for Consultations LLC (Doha, Qatar). Licensed for personal and family use. Unauthorized redistribution or commercial duplication is prohibited.
              </p>
              <p style="margin: 0 0 6px; font-size: 11px; color: #667068; line-height: 1.5;">
                &bull; <strong>Digital Delivery:</strong> Instant lifetime digital download access provided upon settlement.
              </p>
              ` : `
              <p style="margin: 0 0 6px; font-size: 11px; color: #667068; line-height: 1.5;">
                &bull; <strong>Non-Medical Disclaimer:</strong> Services are wellness and strategic consulting sessions and do not substitute medical or psychiatric diagnostics.
              </p>
              <p style="margin: 0 0 6px; font-size: 11px; color: #667068; line-height: 1.5;">
                &bull; <strong>Rescheduling:</strong> 72-hour notice required for private consultation changes. Corporate programs are subject to the executed Statement of Work (SOW).
              </p>
              `}
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td align="center" style="padding: 24px 32px; background-color: #141F15; color: #FAF7F2;">
              <div style="font-family: 'Georgia', serif; font-size: 14px; letter-spacing: 0.08em; color: #C9A84C; font-weight: 600;">
                AWAKENED FOR CONSULTATIONS &bull; أوايكند للاستشارات
              </div>
              <div style="font-size: 11px; color: #A8B5AA; margin-top: 4px;">
                Doha, State of Qatar &bull; Concierge: <a href="mailto:info@gotawakened.com" style="color: #DFC07A; text-decoration: none;">info@gotawakened.com</a>
              </div>
              <div style="font-size: 10px; color: #6C7A6E; margin-top: 8px;">
                &copy; ${new Date().getFullYear()} Awakened for Consultations LLC. All rights reserved.
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    // 1. Send via Resend if RESEND_API_KEY is configured
    let emailResult = { sent: false, note: "RESEND_API_KEY pending configuration" };
    const rawResendApiKey = process.env.RESEND_API_KEY;
    const resendApiKey = rawResendApiKey ? rawResendApiKey.trim().replace(/^["']|["']$/g, "") : null;

    if (resendApiKey) {
      try {
        const fromEmail = (process.env.RESEND_FROM_EMAIL || "Awakened for Consultations <info@gotawakened.com>").trim().replace(/^["']|["']$/g, "");
        const emailSubject = isBooklet
          ? `Official Invoice & Receipt #${invoiceNumber} — Awakened Publication Booklet (${totalQar} QAR)`
          : `Official Invoice & Receipt #${invoiceNumber} — Awakened for Consultations`;

        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [customerEmail],
            bcc: ["info@gotawakened.com"],
            reply_to: "info@gotawakened.com",
            subject: emailSubject,
            html: emailHtml,
          }),
        });
        const resendData = await resendRes.json();
        emailResult = {
          sent: resendRes.ok,
          keyHint: `${resendApiKey.slice(0, 4)}...${resendApiKey.slice(-3)} (${resendApiKey.length} chars)`,
          data: resendData,
        };
      } catch (err) {
        console.error("[Invoice Send] Resend dispatch error:", err);
        emailResult = { sent: false, error: err.message };
      }
    }

    // 2. Log confirmation to Awakened Admin Panel so administrators have full record
    const adminApiBase = process.env.VITE_ADMIN_API_URL || "https://awakened-admin.vercel.app";
    try {
      await fetch(`${adminApiBase}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: customerName,
          email: customerEmail,
          phone: customer.phone || undefined,
          inquiry_type: isBooklet ? "publication_purchase" : "order",
          subject: `[PAID] Invoice #${invoiceNumber} — ${customerName} (${totalQar} QAR)`,
          message: [
            `PAID INVOICE ISSUED & DISPATCHED:`,
            `• Invoice #: ${invoiceNumber}`,
            `• Type: ${isBooklet ? "Digital Publication / Booklet" : "Consultation / Service"}`,
            `• Item: ${effectiveItems[0]?.name || "Awakened Item"}`,
            `• Transaction Ref: ${transactionId}`,
            `• Customer: ${customerName} (${customerEmail})`,
            customer.phone ? `• Phone: ${customer.phone}` : null,
            customer.organization ? `• Company: ${customer.organization}` : null,
            `• Amount Paid: ${totalQar} QAR (Fixed $${totalUsd} USD)`,
            `• Payment Gateway: ${paymentMethod}`,
            `• Date & Time: ${date} ${time} AST`,
            `• Email Dispatch Status: ${emailResult.sent ? "SENT" : "PENDING_KEY"}`,
            `• Online Invoice: ${viewUrl}`,
          ].filter(Boolean).join("\n"),
          source_page: isBooklet ? "/library" : "/invoice",
          preferred_contact: "email",
        }),
      });
          source_page: "/invoice",
          preferred_contact: "email",
        }),
      });
    } catch (adminErr) {
      console.warn("[Invoice Send] Admin panel inquiry recording warning:", adminErr);
    }

    return res.status(200).json({
      success: true,
      invoiceNumber,
      transactionId,
      emailResult,
      viewUrl,
      message: "Invoice generated and processed successfully",
    });

  } catch (error) {
    console.error("[Invoice Handler Error]:", error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Internal server error while processing invoice.",
    });
  }
}
