// Checkout for bookings, packages, and corporate services.
// Connects to hosting commerce endpoint and syncs customer details to Awakened Admin Panel.

const STORE_ID = "6238e2d0-80fd-4a2e-92de-53cb0e3da426";

export const ADMIN_API_URL =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_ADMIN_API_URL) ||
  "https://awakened-admin.vercel.app";

function getPreviewUrl() {
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  return "https://gotawakened.com";
}

/**
 * Saves customer and checkout data to sessionStorage so CheckoutSuccessPage and InvoicePage can access it.
 */
export function persistPendingOrder(checkoutData) {
  if (typeof window === "undefined" || !window.sessionStorage) return;
  try {
    const invoiceNumber = `INV-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    const record = {
      ...checkoutData,
      invoiceNumber,
      createdAt: new Date().toISOString(),
    };
    window.sessionStorage.setItem("awakened_current_order", JSON.stringify(record));
    return invoiceNumber;
  } catch (e) {
    console.warn("[Commerce] Could not persist pending order:", e);
  }
}

/**
 * Retrieves the latest stored checkout order.
 */
export function getStoredOrder() {
  if (typeof window === "undefined" || !window.sessionStorage) return null;
  try {
    const raw = window.sessionStorage.getItem("awakened_current_order");
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

/**
 * Syncs the customer details, package, and consent choices directly to the Awakened Admin Panel
 * so that administrators can view incoming bookings and customer contacts in real-time.
 */
export async function syncCustomerToAdmin(checkoutData) {
  const customer = checkoutData.customer || {};
  const item = checkoutData.item || {};
  const consents = checkoutData.consents || {};

  const isPublication =
    item.isBooklet ||
    item.itemType === "publication" ||
    item.skuId?.startsWith("doc-") ||
    (item.priceQar !== undefined && Number(item.priceQar) <= 10) ||
    (item.price !== undefined && Number(item.price) <= 1000);

  const itemTitle =
    item.title ||
    item.titleEn ||
    item.name ||
    item.nameEn ||
    item.tier ||
    item.en ||
    (isPublication
      ? "Raising Safe, Aware and Resilient Children in a Digital World"
      : "Awakened Consultation");

  const itemScope =
    item.subtitleEn ||
    item.sessions ||
    item.tagEn ||
    (isPublication ? "Official Publication Booklet • 1 QAR" : "Direct Consultation");

  const invoiceNum = checkoutData.invoiceNumber || `INV-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;

  const priceQar = item.price ? (item.price / 100).toLocaleString() : (item.priceQar ? item.priceQar.toLocaleString() : "—");
  const priceUsd = item.priceUsd ? item.priceUsd.toLocaleString() : "—";

  const messageLines = [
    `═══════════════════════════════════════════`,
    isPublication ? `AWAKENED PUBLICATION ORDER RECORD` : `AWAKENED CUSTOMER BOOKING & CHECKOUT RECORD`,
    `═══════════════════════════════════════════`,
    `• Invoice Reference: ${invoiceNum}`,
    `• Customer Name: ${customer.name || "N/A"}`,
    `• Email: ${customer.email || "N/A"}`,
    `• Phone: ${customer.phone || "N/A"}`,
    customer.organization ? `• Organization / Company: ${customer.organization}` : null,
    ``,
    `ITEM & BILLING DETAILS:`,
    `• Item Name: ${itemTitle}`,
    `• Scope: ${itemScope}`,
    `• Amount (Fixed QAR): ${priceQar} QAR`,
    `• Amount (Fixed USD): $${priceUsd} USD (Peg 1 USD = 3.64 QAR)`,
    ``,
    `LEGAL & PRIVACY CONSENTS RECORD:`,
    `• Terms & Refund Policy: ${consents.terms ? "ACCEPTED [Yes]" : "NOT ACCEPTED"}`,
    `• Non-Medical / Digital Delivery Acknowledgment: ${consents.nonMedical ? "ACKNOWLEDGED [Yes]" : "NOT ACKNOWLEDGED"}`,
    `• Qatar Law No. 13/2016 Privacy: ${consents.privacy ? "CONSENTED [Yes]" : "NOT CONSENTED"}`,
    item.isCorporate ? `• Corporate Authorization: ${consents.corporateAuth ? "CONFIRMED [Yes]" : "NO"}` : null,
    `• Wellbeing Research & Methodology Development: ${consents.research ? "OPTED IN [Yes]" : "DECLINED [No]"}`,
    `• Marketing & Executive Updates: ${consents.marketing ? "SUBSCRIBED [Yes]" : "DECLINED [No]"}`,
    ``,
    `• Timestamp: ${new Date().toLocaleString("en-GB", { timeZone: "Asia/Qatar" })} AST`,
    `• Source Page: ${isPublication ? "/library" : "/book"}`,
  ].filter(Boolean);

  const payload = {
    full_name: customer.name || "Customer Order",
    email: customer.email || "client@gotawakened.com",
    phone: customer.phone || undefined,
    inquiry_type: isPublication ? "publication_purchase" : (item.isCorporate ? "corporate" : "consultation"),
    subject: `[${isPublication ? "Publication Order" : "Booking Checkout"}] ${itemTitle} — ${customer.name} (${priceQar} QAR)`,
    message: messageLines.join("\n"),
    source_page: isPublication ? "/library" : "/book",
    preferred_contact: "email",
    referrer: typeof document !== "undefined" ? document.referrer || undefined : undefined,
  };

  try {
    const res = await fetch(`${ADMIN_API_URL}/api/inquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    // Auto-reply booking confirmation email to client ONLY for advisory consultations, NOT publications
    if (customer.email && !isPublication && !item.isCorporate) {
      fetch("/api/enquiry/reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: customer.name || "Valued Client",
          email: customer.email,
          phone: customer.phone || undefined,
          interest: `Booking: ${itemTitle}`,
          message: `Your booking for ${itemTitle} has been received. Our concierge team will confirm your session details within 24 hours.`,
        }),
      }).catch(() => {});
    }
    return { success: res.ok, data };
  } catch (err) {
    console.warn("[Commerce] Admin panel sync warning:", err);
    return { success: false, error: err.message };
  }
}

export async function startOneTimeCommerceCheckout(params) {
  const previewUrl = getPreviewUrl();
  const quantity = params.quantity ?? 1;
  const storeId = params.storeId ?? STORE_ID;

  // Persist order locally for instant invoice & confirmation rendering
  persistPendingOrder(params);

  // Sync to Admin panel immediately so administrators see the customer inquiry & booking
  syncCustomerToAdmin(params).catch(() => {});

  if (!storeId || storeId === "REPLACE_WITH_STORE_ID") {
    return {
      success: false,
      error: "Store ID is not configured. Update STORE_ID in src/lib/commerce.js",
    };
  }

  return createCheckoutSession({
    storeId,
    lineItems: [
      {
        skuId: params.skuId,
        quantity,
      },
    ],
    customer: params.customer,
    consents: params.consents,
    returnUrl: `${previewUrl}/checkout/cancel`,
    successUrl: `${previewUrl}/checkout/success`,
  });
}

async function createCheckoutSession(params) {
  try {
    // 1. Primary: SkipCash Qatar payment gateway endpoint
    const skipCashRes = await fetch("/api/payment/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });
    const skipCashData = await skipCashRes.json().catch(() => ({}));
    if (skipCashRes.ok && skipCashData.checkoutUrl) {
      return {
        success: true,
        checkoutUrl: skipCashData.checkoutUrl,
        transactionId: skipCashData.transactionId,
      };
    }

    // 2. Fallback to /api/commerce if SkipCash keys are pending configuration
    const response = await fetch("/api/commerce/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        error:
          skipCashData.error ||
          errorData.error ||
          `HTTP error: ${response.status} ${response.statusText}`,
      };
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create checkout session",
    };
  }
}
