import { useState } from "react";

/**
 * SkipCashCheckoutButton
 * Client component that triggers the SkipCash payment gateway session creation.
 *
 * Props:
 * - amount: number | string (e.g. 1.00)
 * - firstName: string
 * - lastName: string
 * - phone: string
 * - email: string
 * - orderId: string
 * - onValidate?: () => boolean (optional custom validation before submit)
 * - className?: string
 * - style?: React.CSSProperties
 * - children?: React.ReactNode
 */
export function SkipCashCheckoutButton({
  amount,
  firstName,
  lastName,
  phone,
  email,
  orderId,
  onValidate,
  className = "",
  style = {},
  children,
}) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckout = async (e) => {
    if (e) e.preventDefault();
    setErrorMessage("");

    if (onValidate && !onValidate()) {
      return;
    }

    if (!amount || !firstName || !lastName || !phone || !email || !orderId) {
      setErrorMessage("Please complete all required fields before proceeding to payment.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/skipcash/create-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: Number(amount).toFixed(2),
          firstName: String(firstName).trim(),
          lastName: String(lastName).trim(),
          phone: String(phone).trim(),
          email: String(email).trim(),
          orderId: String(orderId).trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.payUrl) {
        throw new Error(data.error || "Unable to initiate payment with SkipCash. Please try again.");
      }

      // Redirect client to the official SkipCash payment gateway
      window.location.href = data.payUrl;
    } catch (err) {
      console.error("[SkipCash Checkout Error]:", err);
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {errorMessage && (
        <div
          role="alert"
          style={{
            background: "#FFF5F5",
            border: "1px solid #FEB2B2",
            color: "#9B2C2C",
            borderRadius: "6px",
            padding: "10px 14px",
            fontSize: "13px",
            marginBottom: "12px",
            lineHeight: "1.4",
          }}
        >
          {errorMessage}
        </div>
      )}

      <button
        type="button"
        onClick={handleCheckout}
        disabled={loading}
        className={`w-full flex items-center justify-center transition-all ${className}`}
        style={{
          background: loading ? "#7B8E7D" : "#141F15",
          color: "#FAF7F2",
          border: "1px solid #C9A84C",
          borderRadius: "6px",
          padding: "14px 24px",
          fontFamily: "'Georgia', serif",
          fontSize: "15px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          fontWeight: 600,
          cursor: loading ? "not-allowed" : "pointer",
          boxShadow: "0 4px 15px rgba(20, 31, 21, 0.15)",
          ...style,
        }}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4 text-[#C9A84C]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            Connecting to SkipCash...
          </span>
        ) : (
          children || `Pay ${Number(amount || 1).toFixed(2)} QAR via SkipCash`
        )}
      </button>
    </div>
  );
}
