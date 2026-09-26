// Checkout for bookings and events. The /api/commerce endpoint is provided by the hosting
// platform (GoDaddy Airo); it must exist wherever the site is deployed.

const STORE_ID = "6238e2d0-80fd-4a2e-92de-53cb0e3da426";

function getPreviewUrl() {
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  return "https://placeholder.godaddy.com";
}

export async function startOneTimeCommerceCheckout(params) {
  const previewUrl = getPreviewUrl();
  const quantity = params.quantity ?? 1;
  const storeId = params.storeId ?? STORE_ID;
  if (!storeId || storeId === "REPLACE_WITH_STORE_ID") {
    return {
      success: false,
      error: "Store ID is not configured. Update STORE_ID in src/lib/commerce/payment-flow.ts",
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
    returnUrl: `${previewUrl}/checkout/cancel`,
    successUrl: `${previewUrl}/checkout/success`,
  });
}

async function createCheckoutSession(params) {
  try {
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
        error: errorData.error || `HTTP error: ${response.status} ${response.statusText}`,
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
