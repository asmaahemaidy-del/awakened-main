// Serverless function deployed on Vercel to automatically generate and email
// the official Awakened luxury client onboarding & session coordination email
// after a successful advisory/consultation package payment.

function sanitizeFromEmail(raw) {
  if (!raw || typeof raw !== "string") {
    return "Awakened for Consultations <info@gotawakened.com>";
  }
  let cleaned = raw.trim().replace(/^["']+|["']+$/g, "").trim();
  if (!cleaned.includes("@")) {
    return "Awakened for Consultations <info@gotawakened.com>";
  }
  if (!cleaned.includes("<") && cleaned.includes("@")) {
    return `Awakened for Consultations <${cleaned}>`;
  }
  const match = cleaned.match(/^(.*?)\s*<([^>]+)>$/);
  if (match) {
    const name = match[1].replace(/["']/g, "").trim() || "Awakened for Consultations";
    const email = match[2].trim();
    return `${name} <${email}>`;
  }
  return cleaned;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const body = req.body || {};
    const {
      customer = {},
      itemTitle = "Awakened Advisory Programme",
      itemTitleAr = "برنامج أوايكند الاستشاري",
      transactionId = `SC-${Date.now()}`,
      invoiceNumber = `INV-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`,
      totalQar = 1747,
    } = body;

    const customerEmail = customer.email;
    const customerName = customer.name || "Valued Client";
    const customerPhone = customer.phone || "";

    if (!customerEmail) {
      return res.status(400).json({ error: "Customer email is required for onboarding." });
    }

    const emailSubject = `Welcome to Awakened — Your Onboarding & Next Steps (${itemTitle})`;

    // Luxury Responsive HTML Email
    const emailHtml = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Awakened &bull; مرحباً بك في أوايكند</title>
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
                      <img src="https://gotawakened.com/images/awakened-gold-logo.png" alt="Awakened for Consultations" width="220" style="display: block; border: 0; max-width: 220px; height: auto;" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top: 14px;">
                    <div style="font-family: 'Georgia', serif; font-size: 15px; color: #141F15; letter-spacing: 0.05em; font-weight: 600;">
                      Awakened for Consultations LLC
                    </div>
                    <div style="font-family: 'Arial', sans-serif; font-size: 13px; color: #3D6B44; margin-top: 2px;">
                      شركة أوايكند للاستشارات ذ.م.م &bull; CR No. 189422
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- WELCOME HERO BANNER -->
          <tr>
            <td style="padding: 32px 36px 20px; background-color: #141F15; color: #FAF7F2; text-align: center;">
              <span style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #C9A84C; font-weight: 700; display: block; margin-bottom: 8px;">
                CONFIRMED REGISTRATION &bull; تم تأكيد التسجيل بنجاح
              </span>
              <h1 style="margin: 0 0 10px; font-family: 'Georgia', serif; font-size: 26px; color: #FFFFFF; font-weight: normal; line-height: 1.3;">
                Welcome to Awakened, ${customerName}
              </h1>
              <p style="margin: 0; font-family: 'Georgia', serif; font-size: 15px; color: #D4E0D6; line-height: 1.6;">
                مرحباً بك في أوايكند. تم تأكيد حجز برنامجك الاستشاري بنجاح
              </p>
            </td>
          </tr>

          <!-- PROGRAM SUMMARY CARD -->
          <tr>
            <td style="padding: 24px 36px; background-color: #FFFFFF;">
              <div style="background-color: #FAF7F2; border: 1px solid #C9A84C; border-radius: 8px; padding: 18px 22px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td>
                      <span style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.12em; color: #9E7E2E; font-weight: 700;">
                        SELECTED PROGRAMME &bull; البرنامج المعتمد
                      </span>
                      <div style="font-family: 'Georgia', serif; font-size: 18px; color: #141F15; font-weight: 600; margin-top: 4px;">
                        ${itemTitle}
                      </div>
                      <div style="font-size: 13px; color: #3D6B44; margin-top: 2px;">
                        ${itemTitleAr}
                      </div>
                    </td>
                    <td align="right" valign="top">
                      <div style="font-family: 'Georgia', serif; font-size: 18px; color: #141F15; font-weight: 700;">
                        ${Number(totalQar).toLocaleString()} QAR
                      </div>
                      <span style="display: inline-block; background-color: #EBF3EC; color: #1F4225; font-size: 10px; font-weight: 700; padding: 3px 8px; border-radius: 12px; margin-top: 4px; border: 1px solid #8FB896;">
                        PAID &bull; مدفوع
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <!-- ONBOARDING ROADMAP (4 STEPS) -->
          <tr>
            <td style="padding: 0 36px 28px; background-color: #FFFFFF;">
              <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #141F15; font-weight: 700; margin-bottom: 18px; border-bottom: 2px solid #C9A84C; padding-bottom: 8px;">
                YOUR ONBOARDING ROADMAP &bull; خارطة طريق البدء والجلسات
              </div>

              <!-- Step 1 -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
                <tr>
                  <td width="36" valign="top">
                    <div style="width: 28px; height: 28px; background-color: #141F15; color: #C9A84C; border-radius: 50%; text-align: center; line-height: 28px; font-size: 13px; font-weight: bold; font-family: 'Georgia', serif;">
                      1
                    </div>
                  </td>
                  <td valign="top" style="padding-left: 12px;">
                    <div style="font-family: 'Georgia', serif; font-size: 15px; color: #141F15; font-weight: 600;">
                      Coaching Needs Assessment & Diagnostic Review
                    </div>
                    <div style="font-size: 13px; color: #3D6B44; margin-top: 2px; font-weight: 500;">
                      جلسة تقييم الاحتياجات التدريبية والمواءمة
                    </div>
                    <p style="margin: 6px 0 0; font-size: 13px; color: #555E57; line-height: 1.5;">
                      Your programme begins with a comprehensive 1:1 needs assessment to examine your personal wellbeing pillars, professional trajectory, and transformational priorities.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Step 2 -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
                <tr>
                  <td width="36" valign="top">
                    <div style="width: 28px; height: 28px; background-color: #141F15; color: #C9A84C; border-radius: 50%; text-align: center; line-height: 28px; font-size: 13px; font-weight: bold; font-family: 'Georgia', serif;">
                      2
                    </div>
                  </td>
                  <td valign="top" style="padding-left: 12px;">
                    <div style="font-family: 'Georgia', serif; font-size: 15px; color: #141F15; font-weight: 600;">
                      Advisor Matching & Methodology Alignment
                    </div>
                    <div style="font-size: 13px; color: #3D6B44; margin-top: 2px; font-weight: 500;">
                      المواءمة مع المستشار وتحديد منهجية العمل
                    </div>
                    <p style="margin: 6px 0 0; font-size: 13px; color: #555E57; line-height: 1.5;">
                      Based on your needs assessment, you are paired with our certified international advisors who design your customized advisory roadmap.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Step 3 -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
                <tr>
                  <td width="36" valign="top">
                    <div style="width: 28px; height: 28px; background-color: #141F15; color: #C9A84C; border-radius: 50%; text-align: center; line-height: 28px; font-size: 13px; font-weight: bold; font-family: 'Georgia', serif;">
                      3
                    </div>
                  </td>
                  <td valign="top" style="padding-left: 12px;">
                    <div style="font-family: 'Georgia', serif; font-size: 15px; color: #141F15; font-weight: 600;">
                      Session Scheduling & Executive Venue Options
                    </div>
                    <div style="font-size: 13px; color: #3D6B44; margin-top: 2px; font-weight: 500;">
                      تحديد المواعيد وخيارات الجلسات (حضورياً أو عن بُعد)
                    </div>
                    <p style="margin: 6px 0 0; font-size: 13px; color: #555E57; line-height: 1.5;">
                      Sessions are held in absolute privacy — in-person at executive partner suites in Doha, Qatar, or virtually via encrypted high-definition video link.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Step 4 -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="36" valign="top">
                    <div style="width: 28px; height: 28px; background-color: #141F15; color: #C9A84C; border-radius: 50%; text-align: center; line-height: 28px; font-size: 13px; font-weight: bold; font-family: 'Georgia', serif;">
                      4
                    </div>
                  </td>
                  <td valign="top" style="padding-left: 12px;">
                    <div style="font-family: 'Georgia', serif; font-size: 15px; color: #141F15; font-weight: 600;">
                      Executive Concierge Coordination (Within 24 Hours)
                    </div>
                    <div style="font-size: 13px; color: #3D6B44; margin-top: 2px; font-weight: 500;">
                      تواصل الاستقبال التنفيذي لتنسيق المواعيد (خلال ٢٤ ساعة)
                    </div>
                    <p style="margin: 6px 0 0; font-size: 13px; color: #555E57; line-height: 1.5;">
                      Our concierge team will reach out directly to coordinate your calendar and answer any questions.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CONCIERGE DIRECT CONTACT BUTTONS -->
          <tr>
            <td align="center" style="padding: 10px 36px 32px; background-color: #FAF7F2; border-top: 1px solid #EAE3D6;">
              <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #9E7E2E; font-weight: 700; margin-bottom: 12px;">
                NEED IMMEDIATE COORDINATION? &bull; هل ترغب بالتنسيق الفوري؟
              </div>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding: 0 6px;">
                    <a href="mailto:info@gotawakened.com?subject=Session%20Coordination%20-%20${encodeURIComponent(customerName)}%20(${encodeURIComponent(transactionId)})" style="display: inline-block; background-color: #141F15; color: #FAF7F2; font-family: 'Arial', sans-serif; font-size: 12px; font-weight: 600; text-decoration: none; padding: 12px 24px; border-radius: 6px; letter-spacing: 0.05em; text-transform: uppercase; border: 1px solid #C9A84C;">
                      Email Concierge &bull; مراسلة الاستقبال
                    </a>
                  </td>
                  <td style="padding: 0 6px;">
                    <a href="https://gotawakened.com/invoice?id=${encodeURIComponent(invoiceNumber)}" target="_blank" style="display: inline-block; background-color: #FFFFFF; color: #141F15; font-family: 'Arial', sans-serif; font-size: 12px; font-weight: 600; text-decoration: none; padding: 12px 24px; border-radius: 6px; letter-spacing: 0.05em; text-transform: uppercase; border: 1px solid #D9CBBA;">
                      View Tax Invoice &bull; الفاتورة الضريبية
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CONFIDENTIALITY & PRIVACY NOTICE -->
          <tr>
            <td style="padding: 20px 36px; background-color: #FFFFFF; border-top: 1px solid #EAE3D6;">
              <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: #9E7E2E; font-weight: 700; margin-bottom: 4px;">
                CONFIDENTIALITY & LEGAL COMPLIANCE &bull; السرية والامتثال القانوني
              </div>
              <p style="margin: 0; font-size: 11px; color: #667068; line-height: 1.5;">
                All consultations, notes, and diagnostic materials are held under strict non-disclosure pursuant to Qatar Law No. 13 of 2016. Client records are never shared with third parties.
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

    // Send via Resend API (HTTP REST — completely independent of Microsoft SMTP Security Defaults)
    let emailResult = { sent: false, note: "RESEND_API_KEY pending configuration" };
    const rawResendApiKey = process.env.RESEND_API_KEY;
    const resendApiKey = rawResendApiKey ? rawResendApiKey.trim().replace(/^["']|["']$/g, "") : null;

    if (resendApiKey) {
      try {
        let fromEmail = sanitizeFromEmail(process.env.RESEND_FROM_EMAIL);
        let resendRes = await fetch("https://api.resend.com/emails", {
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
        let resendData = await resendRes.json();

        // If primary sender failed due to domain verification or format, fallback gracefully
        if (!resendRes.ok && (resendRes.status === 403 || resendRes.status === 422 || resendData?.name === "validation_error")) {
          console.warn("[Onboarding Send] Resend primary from rejected, attempting fallback sender:", resendData);
          const fallbackFrom = "Awakened for Consultations <onboarding@resend.dev>";
          const fallbackRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${resendApiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: fallbackFrom,
              to: [customerEmail],
              reply_to: "info@gotawakened.com",
              subject: emailSubject,
              html: emailHtml,
            }),
          });
          if (fallbackRes.ok) {
            resendRes = fallbackRes;
            resendData = await fallbackRes.json();
          }
        }

        emailResult = {
          sent: resendRes.ok,
          keyHint: `${resendApiKey.slice(0, 4)}...${resendApiKey.slice(-3)} (${resendApiKey.length} chars)`,
          data: resendData,
        };
      } catch (err) {
        console.error("[Onboarding Send] Resend dispatch error:", err);
        emailResult = { sent: false, error: err.message };
      }
    }

    return res.status(200).json({
      success: true,
      emailResult,
      message: "Onboarding email dispatched successfully",
    });
  } catch (error) {
    console.error("[Onboarding Handler Error]:", error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Internal error while processing onboarding email.",
    });
  }
}
