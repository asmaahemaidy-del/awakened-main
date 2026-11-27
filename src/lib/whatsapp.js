export function sanitizePhoneNumberForWhatsApp(phone) {
  if (!phone) return "";
  const cleaned = phone.replace(/[^\d]/g, "");
  if (cleaned.length === 8 && /^[3567]/.test(cleaned)) {
    return `974${cleaned}`;
  }
  return cleaned;
}

export function buildWhatsAppWelcomeText({ toPhone, clientName, topic, sourcePage, language }) {
  const isAr = language === "ar";
  const name = clientName?.trim() || (isAr ? "ضيفنا الكريم" : "Valued Guest");
  const topicName = topic?.trim() || (isAr ? "الاستشارات العامة" : "Executive Advisory");

  if (isAr) {
    return (
      `مرحباً ${name}،\n\n` +
      `نشكركم على تواصلكم واهتمامكم بـ أوايكند للاستشارات بخصوص: *${topicName}*.\n\n` +
      `يسعدنا تقديم كامل الدعم والإجابة عن استفساراتكم وترتيب موعدكم الاستشاري الخاص.\n\n` +
      `لأي استفسار عاجل، يسعدنا تواصلكم المباشر معنا هنا عبر واتساب أو الاتصال على الرقم: +974 7710 6177.\n\n` +
      `أوايكند للاستشارات ذ.م.م · الدوحة، قطر\n` +
      `gotawakened.com`
    );
  }

  return (
    `Hello ${name},\n\n` +
    `Thank you for connecting with Awakened for Consultations regarding: *${topicName}*.\n\n` +
    `Our advisory desk has received your details and we are delighted to assist you with your personalized consultation and scheduling.\n\n` +
    `For immediate assistance, you can reply directly to this message or call our concierge line at +974 7710 6177.\n\n` +
    `Awakened for Consultations LLC · Doha, State of Qatar\n` +
    `gotawakened.com`
  );
}

export function getWhatsAppDirectUrl({ toPhone, clientName, topic, sourcePage, language }) {
  const cleanPhone = sanitizePhoneNumberForWhatsApp(toPhone);
  const text = buildWhatsAppWelcomeText({ toPhone, clientName, topic, sourcePage, language });
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

export async function sendAutomatedWhatsAppMessage(payload) {
  const cleanPhone = sanitizePhoneNumberForWhatsApp(payload.toPhone);
  const messageText = buildWhatsAppWelcomeText(payload);
  const directUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(messageText)}`;

  if (!cleanPhone || cleanPhone.length < 8) {
    return { success: false, directUrl, error: "Invalid phone number" };
  }

  // 1. Meta WhatsApp Cloud API (if configured)
  const metaToken = process.env.WHATSAPP_API_TOKEN;
  const metaPhoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;

  if (metaToken && metaPhoneId) {
    try {
      const res = await fetch(`https://graph.facebook.com/v21.0/${metaPhoneId}/messages`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${metaToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          recipient_type: "individual",
          to: cleanPhone,
          type: "text",
          text: { body: messageText },
        }),
      });

      if (res.ok) {
        return { success: true, provider: "meta", directUrl };
      }
    } catch (err) {
      console.error("[WhatsApp Automation Error] Meta dispatch failed:", err.message);
    }
  }

  // 2. Twilio WhatsApp API (if configured)
  const twilioSid = process.env.TWILIO_ACCOUNT_SID;
  const twilioAuth = process.env.TWILIO_AUTH_TOKEN;
  const twilioFrom = process.env.TWILIO_WHATSAPP_NUMBER || "whatsapp:+97477106177";

  if (twilioSid && twilioAuth) {
    try {
      const authHeader = Buffer.from(`${twilioSid}:${twilioAuth}`).toString("base64");
      const params = new URLSearchParams();
      params.append("From", twilioFrom.startsWith("whatsapp:") ? twilioFrom : `whatsapp:${twilioFrom}`);
      params.append("To", `whatsapp:+${cleanPhone}`);
      params.append("Body", messageText);

      const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`, {
        method: "POST",
        headers: {
          Authorization: `Basic ${authHeader}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      if (res.ok) {
        return { success: true, provider: "twilio", directUrl };
      }
    } catch (err) {
      console.error("[WhatsApp Automation Error] Twilio dispatch failed:", err.message);
    }
  }

  return { success: true, provider: "wa.me_direct", directUrl };
}
