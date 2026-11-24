/**
 * Awakened for Consultations — Official Luxury Invoice & Email Generator
 * Matches brand identity:
 * - Brand Forest: #141F15
 * - Brand Gold: #C9A84C / #DFC07A / #9E7E2E
 * - Brand Cream: #FAF7F2 / #F5F0E8
 * - Brand Sage: #3D6B44
 * Qatar Central Bank Peg: 1 USD = 3.64 QAR
 */

export const COMPANY_INFO = {
  nameEn: "Awakened for Consultations LLC",
  nameAr: "شركة أوايكند للاستشارات ذ.م.م",
  crNumber: "CR No. 241070",
  taxCard: "TIN: 000109482100001",
  addressEn: "Doha, State of Qatar",
  addressAr: "الدوحة، دولة قطر",
  email: "info@gotawakened.com",
  phone: "+974 4400 0000",
  website: "https://gotawakened.com",
  logoUrl: "https://gotawakened.com/images/awakened-gold-logo.png",
};

/**
 * Generates an email-safe, ultra-luxury responsive HTML invoice.
 * Designed for standard email clients (Apple Mail, Gmail, Outlook, iOS, Android).
 */
export function generateInvoiceEmailHtml(invoice) {
  const {
    invoiceNumber = `INV-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`,
    date = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
    time = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
    transactionId = `SC-${Math.floor(10000000 + Math.random() * 90000000)}`,
    paymentMethod = "SkipCash Gateway (Debit / Credit / Apple Pay)",
    customer = {},
    items = [],
    subtotalQar = 1747,
    subtotalUsd = 480,
    taxQar = 0,
    totalQar = 1747,
    totalUsd = 480,
    viewUrl = `https://gotawakened.com/invoice?id=${invoiceNumber}`,
  } = invoice;

  const customerName = customer.name || "Valued Client";
  const customerEmail = customer.email || "client@example.com";
  const customerPhone = customer.phone || "—";
  const companyName = customer.company || "";

  const isBooklet =
    invoice.isBooklet ||
    totalQar <= 10 ||
    items.some((it) => it.name && (it.name.includes("Children") || it.name.includes("Booklet") || it.name.includes("Parent")));

  // Render items rows
  const itemsHtml = items.length > 0
    ? items.map((item, idx) => `
      <tr style="border-bottom: 1px solid #EAE3D6;">
        <td style="padding: 16px 12px; font-family: 'Georgia', serif; font-size: 14px; color: #141F15; vertical-align: top;">
          <strong style="color: #141F15; font-size: 15px;">${item.name}</strong>
          ${item.nameAr ? `<div style="font-family: 'Arial', sans-serif; font-size: 13px; color: #5C8A62; margin-top: 3px;">${item.nameAr}</div>` : ""}
          ${item.description ? `<div style="font-family: 'Arial', sans-serif; font-size: 12px; color: #667068; margin-top: 4px;">${item.description}</div>` : ""}
        </td>
        <td style="padding: 16px 12px; font-family: 'Arial', sans-serif; font-size: 13px; color: #141F15; text-align: center; vertical-align: top;">
          ${item.quantity || 1}
        </td>
        <td style="padding: 16px 12px; font-family: 'Arial', sans-serif; font-size: 13px; color: #141F15; text-align: right; vertical-align: top; white-space: nowrap;">
          <strong>${item.priceQar?.toLocaleString()} QAR</strong>
          <div style="font-size: 11px; color: #7B857E;">$${item.priceUsd?.toLocaleString()} USD</div>
        </td>
        <td style="padding: 16px 12px; font-family: 'Arial', sans-serif; font-size: 14px; color: #141F15; text-align: right; vertical-align: top; white-space: nowrap;">
          <strong style="color: #141F15;">${((item.priceQar || 0) * (item.quantity || 1)).toLocaleString()} QAR</strong>
          <div style="font-size: 11px; color: #7B857E;">$${((item.priceUsd || 0) * (item.quantity || 1)).toLocaleString()} USD</div>
        </td>
      </tr>
    `).join("")
    : (isBooklet
      ? `
      <tr style="border-bottom: 1px solid #EAE3D6;">
        <td style="padding: 16px 12px; font-family: 'Georgia', serif; font-size: 14px; color: #141F15;">
          <strong>Raising Safe, Aware and Resilient Children in a Digital World</strong>
          <div style="font-size: 12px; color: #5C8A62;">تنشئة أطفال آمنين وواعين وقادرين على التكيف في عالم رقمي</div>
        </td>
        <td style="padding: 16px 12px; font-family: 'Arial', sans-serif; font-size: 13px; color: #141F15; text-align: center;">1</td>
        <td style="padding: 16px 12px; font-family: 'Arial', sans-serif; font-size: 13px; color: #141F15; text-align: right;">
          <strong>${totalQar} QAR</strong><div style="font-size: 11px; color: #7B857E;">$${totalUsd} USD</div>
        </td>
        <td style="padding: 16px 12px; font-family: 'Arial', sans-serif; font-size: 14px; color: #141F15; text-align: right;">
          <strong>${totalQar} QAR</strong><div style="font-size: 11px; color: #7B857E;">$${totalUsd} USD</div>
        </td>
      </tr>
      `
      : `
      <tr style="border-bottom: 1px solid #EAE3D6;">
        <td style="padding: 16px 12px; font-family: 'Georgia', serif; font-size: 14px; color: #141F15;">
          <strong>Foundational Awakening Consultation</strong>
          <div style="font-size: 12px; color: #5C8A62;">جلسة استشارية تشخيصية استراتيجية (٩٠ دقيقة)</div>
        </td>
        <td style="padding: 16px 12px; font-family: 'Arial', sans-serif; font-size: 13px; color: #141F15; text-align: center;">1</td>
        <td style="padding: 16px 12px; font-family: 'Arial', sans-serif; font-size: 13px; color: #141F15; text-align: right;">
          <strong>1,747 QAR</strong><div style="font-size: 11px; color: #7B857E;">$480 USD</div>
        </td>
        <td style="padding: 16px 12px; font-family: 'Arial', sans-serif; font-size: 14px; color: #141F15; text-align: right;">
          <strong>1,747 QAR</strong><div style="font-size: 11px; color: #7B857E;">$480 USD</div>
        </td>
      </tr>
    `);

  return `<!DOCTYPE html>
<html lang="en" dir="ltr" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Official Invoice & Receipt — Awakened for Consultations</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #F4EDE2; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%;">
  
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #F4EDE2; width: 100%;">
    <tr>
      <td align="center" style="padding: 30px 15px 40px;">
        
        <!-- MAIN INVOICE CARD -->
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
                    <a href="${COMPANY_INFO.website}" target="_blank" style="text-decoration: none; display: inline-block;">
                      <img src="${COMPANY_INFO.logoUrl}" alt="Awakened for Consultations | أوايكند للاستشارات" width="220" style="display: block; border: 0; max-width: 220px; height: auto;" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top: 14px;">
                    <div style="font-family: 'Georgia', serif; font-size: 15px; color: #141F15; letter-spacing: 0.05em; font-weight: 600;">
                      ${COMPANY_INFO.nameEn}
                    </div>
                    <div style="font-family: 'Arial', sans-serif; font-size: 13px; color: #3D6B44; margin-top: 2px;">
                      ${COMPANY_INFO.nameAr}
                    </div>
                    <div style="font-family: 'Arial', sans-serif; font-size: 11px; color: #7B857E; margin-top: 4px; letter-spacing: 0.05em;">
                      ${COMPANY_INFO.crNumber} &bull; ${COMPANY_INFO.addressEn} &bull; ${COMPANY_INFO.website}
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
                    <!-- PAID BADGE -->
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="display: inline-block; background-color: #EBF3EC; border: 1px solid #8FB896; border-radius: 20px;">
                      <tr>
                        <td style="padding: 6px 14px; font-family: 'Arial', sans-serif; font-size: 12px; font-weight: 700; color: #1F4225; letter-spacing: 0.08em; text-transform: uppercase;">
                          &#10003; PAID &bull; مدفوعة
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
                    ${companyName ? `<div style="font-family: 'Arial', sans-serif; font-size: 13px; color: #3D6B44; font-weight: 500; margin-top: 2px;">${companyName}</div>` : ""}
                    <div style="font-family: 'Arial', sans-serif; font-size: 13px; color: #555E57; margin-top: 4px;">
                      ${customerEmail}
                    </div>
                    ${customerPhone && customerPhone !== "—" ? `<div style="font-family: 'Arial', sans-serif; font-size: 13px; color: #555E57; margin-top: 2px;">${customerPhone}</div>` : ""}
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
                        <td align="right" style="font-family: 'Arial', sans-serif; font-size: 12px; color: #141F15; font-weight: 600; padding-bottom: 4px;">SkipCash Qatar</td>
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
                  <!-- EMPTY LEFT COLUMN -->
                  <td width="45%" valign="top">
                    <div style="background-color: #FAF7F2; border: 1px solid #EAE3D6; border-radius: 8px; padding: 12px 14px; margin-top: 8px;">
                      <div style="font-size: 11px; font-weight: 700; color: #141F15; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.05em;">
                        Payment Confirmation &bull; تأكيد الدفع
                      </div>
                      <div style="font-size: 11px; color: #555E57; line-height: 1.4;">
                        Processed securely via SkipCash Qatar. Settled in full under Qatar banking regulations.
                      </div>
                    </div>
                  </td>

                  <!-- TOTALS BREAKDOWN -->
                  <td width="55%" valign="top" style="padding-left: 20px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding: 6px 0; font-size: 13px; color: #555E57;">Subtotal (المجموع الفرعي):</td>
                        <td align="right" style="padding: 6px 0; font-size: 13px; color: #141F15; font-weight: 600;">
                          ${subtotalQar.toLocaleString()} QAR <span style="font-size: 11px; color: #7B857E;">($${subtotalUsd.toLocaleString()})</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; font-size: 13px; color: #555E57;">VAT / Tax (ضريبة القيمة المضافة):</td>
                        <td align="right" style="padding: 6px 0; font-size: 13px; color: #3D6B44; font-weight: 600;">
                          0.00 QAR <span style="font-size: 11px; color: #7B857E;">(0% Exempt)</span>
                        </td>
                      </tr>
                      <tr style="border-top: 2px solid #C9A84C;">
                        <td style="padding: 12px 0 4px; font-family: 'Georgia', serif; font-size: 16px; color: #141F15; font-weight: 700;">
                          Total Paid &bull; الإجمالي:
                        </td>
                        <td align="right" style="padding: 12px 0 4px; font-family: 'Georgia', serif; font-size: 20px; color: #141F15; font-weight: 700;">
                          ${totalQar.toLocaleString()} QAR
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td align="right" style="font-size: 12px; color: #9E7E2E; font-weight: 600;">
                          Fixed USD: $${totalUsd.toLocaleString()} USD
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

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
                LEGAL & REGULATORY ACKNOWLEDGMENTS &bull; الإقرارات والشروط القانونية
              </div>
              <p style="margin: 0 0 6px; font-size: 11px; color: #667068; line-height: 1.5;">
                &bull; <strong>Qatar Law No. 13 of 2016:</strong> Your personal data is held in strict compliance with the Personal Data Protection Law of the State of Qatar and is never sold or shared.
              </p>
              <p style="margin: 0 0 6px; font-size: 11px; color: #667068; line-height: 1.5;">
                &bull; <strong>Non-Medical Disclaimer:</strong> Services provided by Awakened for Consultations are educational, strategic, and wellness-focused, and do not constitute clinical psychological or medical treatment.
              </p>
              <p style="margin: 0 0 6px; font-size: 11px; color: #667068; line-height: 1.5;">
                &bull; <strong>Rescheduling Policy:</strong> Private sessions may be rescheduled with at least 72 hours prior notice. Corporate services are governed by the agreed Statement of Work (SOW).
              </p>
              <p style="margin: 0; font-size: 11px; color: #667068; line-height: 1.5;">
                &bull; <strong>Qatar Central Bank Exchange Peg:</strong> All payments settled in QAR and USD are bound to the official parity rate of 1 USD = 3.64 QAR.
              </p>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td align="center" style="padding: 24px 32px; background-color: #141F15; color: #FAF7F2;">
              <div style="font-family: 'Georgia', serif; font-size: 14px; letter-spacing: 0.08em; color: #C9A84C; font-weight: 600;">
                AWAKENED FOR CONSULTATIONS &bull; أوايكند للاستشارات
              </div>
              <div style="font-size: 11px; color: #A8B5AA; margin-top: 4px;">
                Doha, State of Qatar &bull; Concierge: <a href="mailto:${COMPANY_INFO.email}" style="color: #DFC07A; text-decoration: none;">${COMPANY_INFO.email}</a>
              </div>
              <div style="font-size: 10px; color: #6C7A6E; margin-top: 8px;">
                &copy; ${new Date().getFullYear()} Awakened for Consultations LLC. All rights reserved.
              </div>
            </td>
          </tr>

        </table>
        <!-- END INVOICE CARD -->

      </td>
    </tr>
  </table>

</body>
</html>`;
}
