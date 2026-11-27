// Serverless function: sends an automated luxury confirmation email to a client
// who submits an enquiry via the Awakened for Consultations contact form.
// Also logs the enquiry to the Awakened Admin panel.
// Triggered by the contact form submit handler in ContactPage.jsx.

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
      name = "Valued Guest",
      email,
      phone = "",
      interest = "",
      message = "",
      language = "en",
    } = body;

    if (!email) {
      return res.status(400).json({ error: "Client email is required." });
    }

    const isArabic = language === "ar";
    const year = new Date().getFullYear();

    // ── Context-Aware Subject & Content Resolution ─────────────────────────────
    const interestStr = (interest || "").toLowerCase();
    const messageStr = (message || "").toLowerCase();
    const combined = `${interestStr} ${messageStr}`;

    let topicType = "general";
    let emailHeadingEn = "Consultation & Guidance Inquiry";
    let emailHeadingAr = "استفسار الاستشارات والتوجيه";
    let nextStep1En = "Our advisory team reviews your enquiry and stated goals.";
    let nextStep1Ar = "يراجع فريقنا الاستشاري تفاصيل استفساركم وتطلعاتكم بعناية.";
    let nextStep2En = "A senior consultant connects via your preferred channel within 24 business hours.";
    let nextStep2Ar = "يتواصل معكم أحد كبار المستشارين عبر وسيلتكم المفضلة خلال ٢٤ ساعة عمل.";
    let nextStep3En = "We coordinate an introductory alignment call or private consultation.";
    let nextStep3Ar = "ننسق معكم محادثة مواءمة تمهيدية أو جلسة استشارية خاصة.";
    let ctaUrl = "https://gotawakened.com/book";
    let ctaTextEn = "Explore Offerings";
    let ctaTextAr = "استكشف الخدمات";

    if (combined.includes("retreat") || combined.includes("خلوة") || combined.includes("sanctuary")) {
      topicType = "retreat";
      emailHeadingEn = "Signature Retreat & Sanctuary Application";
      emailHeadingAr = "طلب المشاركة في رحلات العافية الخاصة";
      nextStep1En = "Our Sanctuary Retreat Committee reviews your dates and wellness intentions.";
      nextStep1Ar = "تقوم لجنة رحلات العافية بمراجعة التواريخ المفضلة وتطلعاتكم الصحية.";
      nextStep2En = "Our concierge coordinates a brief 15-minute alignment conversation.";
      nextStep2Ar = "يرتب منسق الرحلات مكالمة مواءمة موجزة لمدة ١٥ دقيقة للإجابة عن تطلعاتكم.";
      nextStep3En = "You receive exclusive encrypted booking access and itinerary dossier.";
      nextStep3Ar = "تستلمون رابط الحجز الخاص ودليل المسار والملاذ المعتمد.";
      ctaUrl = "https://gotawakened.com/retreats";
      ctaTextEn = "View Signature Retreats";
      ctaTextAr = "استعراض رحلات العافية";
    } else if (
      combined.includes("corporate") ||
      combined.includes("organisation") ||
      combined.includes("organization") ||
      combined.includes("مؤسس") ||
      combined.includes("شركة")
    ) {
      topicType = "corporate";
      emailHeadingEn = "Corporate & Institutional Leadership Advisory";
      emailHeadingAr = "استفسار البرامج المؤسسية والقيادية";
      nextStep1En = "Our Head of Institutional Practice conducts an executive needs review.";
      nextStep1Ar = "يقوم رئيس قطاع البرامج المؤسسية بمراجعة احتياجات مؤسستكم.";
      nextStep2En = "We schedule an exploratory discovery meeting and provide our institutional briefing.";
      nextStep2Ar = "نرتب اجتماعاً استكشافياً موجزاً ونزودكم بملف القدرات المؤسسية.";
      nextStep3En = "Mutual engagement framework, NDA, and tailored roadmap proposal.";
      nextStep3Ar = "صياغة إطار العمل المشترك واتفاقية السرية والمقترح التنفيذي.";
      ctaUrl = "https://gotawakened.com/organizations";
      ctaTextEn = "Review Corporate Programs";
      ctaTextAr = "استعراض البرامج المؤسسية";
    } else if (combined.includes("membership") || combined.includes("community") || combined.includes("عضوية")) {
      topicType = "membership";
      emailHeadingEn = "Private Membership Circle Application";
      emailHeadingAr = "طلب الانضمام إلى العضوية الخاصة";
      nextStep1En = "Our Membership Admissions Council reviews your candidacy.";
      nextStep1Ar = "يقوم مجلس قبول العضويات بمراجعة بياناتكم وتطلعاتكم الاستشارية.";
      nextStep2En = "Our executive concierge arranges a private 20-minute alignment conversation.";
      nextStep2Ar = "يتواصل معكم المنسق التنفيذي لترتيب مكالمة مواءمة مدتها ٢٠ دقيقة.";
      nextStep3En = "Upon mutual alignment, you receive your membership prospectus and dossier.";
      nextStep3Ar = "بعد استيفاء المواءمة، يتم إرسال ميثاق العضوية وملف التفعيل الخاص بكم.";
      ctaUrl = "https://gotawakened.com/community";
      ctaTextEn = "Discover Membership Circle";
      ctaTextAr = "استكشف العضوية الخاصة";
    } else if (combined.includes("partner") || combined.includes("alliance") || combined.includes("شراكة") || combined.includes("تعاون")) {
      topicType = "partnership";
      emailHeadingEn = "Strategic Alliance & Partnership Inquiry";
      emailHeadingAr = "استفسار الشراكات والتعاون الاستراتيجي";
      nextStep1En = "Our Strategic Partnerships Directorate evaluates institutional synergy.";
      nextStep1Ar = "تقوم إدارة الشراكات بتقييم مقترح التعاون ومدى توافقه الاستراتيجي.";
      nextStep2En = "We schedule an introductory video conference or in-person briefing in Doha.";
      nextStep2Ar = "نرتب اجتماعاً استكشافياً عبر الفيديو أو حضورياً في الدوحة خلال ٤٨ ساعة.";
      nextStep3En = "Mutual NDA execution and joint Letter of Intent (LOI) formulation.";
      nextStep3Ar = "توقيع اتفاقية الحفاظ على السرية وصياغة مذكرة تفاهم مشتركة.";
      ctaUrl = "https://gotawakened.com/partners";
      ctaTextEn = "Explore Alliances";
      ctaTextAr = "استعراض مجالات الشراكة";
    } else if (combined.includes("session") || combined.includes("coaching") || combined.includes("استشارة") || combined.includes("جلسة")) {
      topicType = "session";
      emailHeadingEn = "Private Consultation & Mentorship Inquiry";
      emailHeadingAr = "استفسار الجلسات والاستشارات الفردية";
      nextStep1En = "A senior practitioner evaluates your schedule and focus areas.";
      nextStep1Ar = "يراجع أحد كبار المستشارين تطلعاتكم ومواعيدكم المفضلة خلال ٢٤ ساعة عمل.";
      nextStep2En = "Our concierge coordinates your session time (In-Person in Doha or Encrypted Virtual Video).";
      nextStep2Ar = "ينسق مكتب الاستقبال موعدكم المناسب (حضورياً في الدوحة أو عبر الاتصال المرئي).";
      nextStep3En = "You receive our foundational pre-session preparation guide.";
      nextStep3Ar = "تستلمون دليل التحضير التمهيدي لضمان أقصى استفادة من جلستكم الأولى.";
      ctaUrl = "https://gotawakened.com/book";
      ctaTextEn = "Reserve Consultation Slot";
      ctaTextAr = "حجز موعد الجلسة";
    }

    const emailSubject = isArabic
      ? `${emailHeadingAr} · أوايكند للاستشارات`
      : `${emailHeadingEn} · Awakened for Consultations`;

    // ── Auto-reply HTML email ──────────────────────────────────────────────────
    const emailHtml = `<!DOCTYPE html>
<html lang="${isArabic ? "ar" : "en"}" dir="${isArabic ? "rtl" : "ltr"}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You — Awakened for Consultations</title>
</head>
<body style="margin:0;padding:0;background-color:#F4EDE2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F4EDE2;">
    <tr>
      <td align="center" style="padding:30px 15px 40px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
          style="max-width:640px;background-color:#FFFFFF;border-radius:12px;border:1px solid #D9CBBA;box-shadow:0 10px 30px rgba(20,31,21,0.08);overflow:hidden;">

          <!-- GOLD TOP BAR -->
          <tr>
            <td height="6" style="background:linear-gradient(90deg,#9E7E2E 0%,#C9A84C 50%,#DFC07A 100%);"></td>
          </tr>

          <!-- HEADER -->
          <tr>
            <td align="center" style="padding:36px 32px 24px;background:#FAF7F2;border-bottom:1px solid #EAE3D6;">
              <a href="https://gotawakened.com" target="_blank" style="text-decoration:none;">
                <img src="https://gotawakened.com/images/awakened-gold-logo.png"
                  alt="Awakened for Consultations" width="200"
                  style="display:block;border:0;max-width:200px;height:auto;" />
              </a>
              <div style="font-family:'Georgia',serif;font-size:13px;color:#3D6B44;margin-top:10px;letter-spacing:0.06em;">
                أوايكند للاستشارات &nbsp;•&nbsp; Awakened for Consultations
              </div>
            </td>
          </tr>

          <!-- GREETING -->
          <tr>
            <td style="padding:32px 36px 20px;background:#FFFFFF;">
              <p style="margin:0 0 6px;font-size:11px;text-transform:uppercase;letter-spacing:0.14em;color:#9E7E2E;font-weight:700;">
                ${isArabic ? emailHeadingAr : emailHeadingEn}
              </p>
              <h1 style="margin:0 0 16px;font-family:'Georgia',serif;font-size:26px;color:#141F15;font-weight:normal;line-height:1.3;">
                ${isArabic ? `مرحباً، ${name}` : `Dear ${name},`}
              </h1>
              <p style="margin:0 0 14px;font-size:15px;color:#3D3D3D;line-height:1.7;">
                ${isArabic
                  ? "نشكركم على تواصلكم مع <strong>أوايكند للاستشارات</strong>. لقد تلقّينا استفساركم باهتمام وسرية تامة، وسيتواصل معكم فريقنا الاستشاري خلال <strong>٢٤ ساعة عمل</strong>."
                  : "Thank you for reaching out to <strong>Awakened for Consultations</strong>. We have received your inquiry with complete discretion, and our advisory circle will be in touch within <strong>24 business hours</strong>."}
              </p>
              ${interest ? `
              <div style="background:#FAF7F2;border-left:3px solid #C9A84C;border-radius:4px;padding:14px 18px;margin:18px 0;">
                <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#9E7E2E;font-weight:700;margin-bottom:4px;">
                  ${isArabic ? "موضوع الاستفسار" : "Your Interest"}
                </div>
                <div style="font-size:14px;color:#141F15;font-weight:600;">${interest}</div>
              </div>` : ""}
              ${message ? `
              <div style="background:#F7F4EF;border:1px solid #EAE3D6;border-radius:6px;padding:14px 18px;margin:12px 0 20px;">
                <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#7B857E;font-weight:700;margin-bottom:6px;">
                  ${isArabic ? "رسالتك" : "Your Message"}
                </div>
                <div style="font-size:13px;color:#555;line-height:1.6;">${message}</div>
              </div>` : ""}
            </td>
          </tr>

          <!-- WHAT HAPPENS NEXT -->
          <tr>
            <td style="padding:0 36px 28px;background:#FFFFFF;">
              <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.12em;color:#3D6B44;font-weight:700;margin-bottom:14px;">
                ${isArabic ? "ماذا يحدث بعد ذلك؟" : "WHAT HAPPENS NEXT?"}
              </div>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:8px 0;vertical-align:top;width:28px;">
                    <div style="width:22px;height:22px;background:#EBF3EC;border-radius:50%;text-align:center;line-height:22px;font-size:12px;font-weight:700;color:#1F4225;">1</div>
                  </td>
                  <td style="padding:8px 0 8px 10px;font-size:13px;color:#3D3D3D;line-height:1.6;">
                    ${isArabic ? nextStep1Ar : nextStep1En}
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;vertical-align:top;width:28px;">
                    <div style="width:22px;height:22px;background:#EBF3EC;border-radius:50%;text-align:center;line-height:22px;font-size:12px;font-weight:700;color:#1F4225;">2</div>
                  </td>
                  <td style="padding:8px 0 8px 10px;font-size:13px;color:#3D3D3D;line-height:1.6;">
                    ${isArabic ? nextStep2Ar : nextStep2En}
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;vertical-align:top;width:28px;">
                    <div style="width:22px;height:22px;background:#EBF3EC;border-radius:50%;text-align:center;line-height:22px;font-size:12px;font-weight:700;color:#1F4225;">3</div>
                  </td>
                  <td style="padding:8px 0 8px 10px;font-size:13px;color:#3D3D3D;line-height:1.6;">
                    ${isArabic ? nextStep3Ar : nextStep3En}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA BUTTON -->
          <tr>
            <td align="center" style="padding:10px 36px 32px;background:#FFFFFF;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:#141F15;border-radius:8px;">
                    <a href="${ctaUrl}" target="_blank"
                      style="display:inline-block;padding:13px 30px;font-size:13px;font-weight:600;color:#FAF7F2;text-decoration:none;letter-spacing:0.08em;text-transform:uppercase;">
                      ${isArabic ? ctaTextAr : ctaTextEn} &rarr;
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:14px 0 0;font-size:12px;color:#7B857E;">
                ${isArabic ? "أو تواصل معنا مباشرةً:" : "Or reach us directly:"}
                <a href="mailto:info@gotawakened.com" style="color:#9E7E2E;text-decoration:none;font-weight:600;">info@gotawakened.com</a>
              </p>
            </td>
          </tr>

          <!-- LEGAL FOOTER -->
          <tr>
            <td style="padding:20px 36px;background:#FAF7F2;border-top:1px solid #EAE3D6;">
              <p style="margin:0;font-size:10px;color:#9B9B9B;line-height:1.5;">
                This email was sent because you submitted an enquiry at <a href="https://gotawakened.com" style="color:#9E7E2E;text-decoration:none;">gotawakened.com</a>.
                Your information is handled in accordance with Qatar Law No. 13 of 2016 (Personal Data Protection) and will never be shared or sold.
              </p>
            </td>
          </tr>

          <!-- DARK FOOTER -->
          <tr>
            <td align="center" style="padding:22px 32px;background:#141F15;">
              <div style="font-family:'Georgia',serif;font-size:13px;letter-spacing:0.08em;color:#C9A84C;font-weight:600;">
                AWAKENED FOR CONSULTATIONS &bull; أوايكند للاستشارات
              </div>
              <div style="font-size:11px;color:#A8B5AA;margin-top:4px;">
                Doha, State of Qatar &bull;
                <a href="mailto:info@gotawakened.com" style="color:#DFC07A;text-decoration:none;">info@gotawakened.com</a>
              </div>
              <div style="font-size:10px;color:#6C7A6E;margin-top:6px;">
                &copy; ${year} Awakened for Consultations LLC. All rights reserved.
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    // ── 1. Send auto-reply via Resend ──────────────────────────────────────────
    let emailResult = { sent: false, note: "RESEND_API_KEY not configured" };
    const rawResendApiKey = process.env.RESEND_API_KEY;
    const resendApiKey = rawResendApiKey ? rawResendApiKey.trim().replace(/^["']|["']$/g, "") : null;

    if (resendApiKey) {
      try {
        let fromEmail = sanitizeFromEmail(process.env.RESEND_FROM_EMAIL);
        let resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [email],
            bcc: ["info@gotawakened.com"],
            reply_to: "info@gotawakened.com",
            subject: emailSubject,
            html: emailHtml,
          }),
        });
        let data = await resendRes.json();

        // If domain verification or formatting failed, fallback to verified Resend sender
        if (!resendRes.ok && (resendRes.status === 403 || resendRes.status === 422 || data?.name === "validation_error")) {
          console.warn("[Enquiry Reply] Resend primary from rejected, attempting fallback sender:", data);
          const fallbackFrom = "Awakened for Consultations <onboarding@resend.dev>";
          const fallbackRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${resendApiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: fallbackFrom,
              to: [email],
              reply_to: "info@gotawakened.com",
              subject: emailSubject,
              html: emailHtml,
            }),
          });
          if (fallbackRes.ok) {
            resendRes = fallbackRes;
            data = await fallbackRes.json();
          }
        }

        emailResult = {
          sent: resendRes.ok,
          keyHint: `${resendApiKey.slice(0, 4)}...${resendApiKey.slice(-3)} (${resendApiKey.length} chars)`,
          data,
        };
      } catch (err) {
        emailResult = { sent: false, error: err.message };
      }
    }

    // ── 2. Log to Admin Panel ─────────────────────────────────────────────────
    const adminBase =
      process.env.VITE_ADMIN_API_URL || "https://awakened-admin.vercel.app";
    try {
      await fetch(`${adminBase}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: name,
          email,
          phone: phone || undefined,
          inquiry_type: topicType,
          subject: interest || emailHeadingEn,
          message: [
            `ENQUIRY RECEIVED — AUTO-REPLY ${emailResult.sent ? "SENT" : "PENDING_KEY"}`,
            `• Topic: ${emailHeadingEn} / ${emailHeadingAr}`,
            `• Language: ${language}`,
            `• Name: ${name}`,
            `• Email: ${email}`,
            phone ? `• Phone: ${phone}` : null,
            interest ? `• Interest: ${interest}` : null,
            message ? `• Message: ${message}` : null,
          ]
            .filter(Boolean)
            .join("\n"),
          source_page: "/contact",
          preferred_contact: language === "ar" ? "العربية" : "English",
        }),
      });
    } catch (adminErr) {
      console.warn("[Enquiry Reply] Admin log warning:", adminErr);
    }

    return res.status(200).json({
      success: true,
      emailResult,
      message: "Enquiry received and auto-reply dispatched.",
    });
  } catch (error) {
    console.error("[Enquiry Reply Error]:", error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Internal server error",
    });
  }
}
