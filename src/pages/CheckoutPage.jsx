import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import { SkipCashCheckoutButton } from "../components/SkipCashCheckoutButton";

export function CheckoutPage() {
  const [searchParams] = useSearchParams();
  const itemTitle =
    searchParams.get("title") ||
    searchParams.get("item") ||
    "Raising Safe, Aware and Resilient Children in a Digital World";
  const defaultAmount = searchParams.get("amount") || "1.00";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("+974 ");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(defaultAmount);
  const [orderId] = useState(
    () => `ORD-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`
  );

  return (
    <div
      style={{
        backgroundColor: "#F4EDE2",
        minHeight: "100vh",
        padding: "120px 20px 80px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "560px",
          margin: "0 auto",
          backgroundColor: "#FFFFFF",
          borderRadius: "12px",
          border: "1px solid #D9CBBA",
          boxShadow: "0 12px 36px rgba(20, 31, 21, 0.08)",
          overflow: "hidden",
        }}
      >
        {/* Top gold accent line */}
        <div
          style={{
            height: "5px",
            background: "linear-gradient(90deg, #9E7E2E 0%, #C9A84C 50%, #DFC07A 100%)",
          }}
        />

        <div style={{ padding: "32px 36px" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#9E7E2E",
                fontWeight: 700,
                display: "block",
                marginBottom: "6px",
              }}
            >
              SkipCash Qatar Gateway &bull; بوابة الدفع الآمن
            </span>
            <h1
              style={{
                margin: "0 0 8px",
                fontFamily: "'Georgia', serif",
                fontSize: "26px",
                color: "#141F15",
                fontWeight: 600,
              }}
            >
              Express Checkout
            </h1>
            <p style={{ margin: 0, fontSize: "14px", color: "#667068" }}>
              Secure direct checkout with Card, Apple Pay, or NAPS.
            </p>
          </div>

          {/* Order Details Card */}
          <div
            style={{
              background: "#FAF7F2",
              border: "1px solid #EAE3D6",
              borderRadius: "8px",
              padding: "16px 20px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "12px",
                marginBottom: "10px",
              }}
            >
              <span style={{ fontSize: "12px", color: "#7B857E", textTransform: "uppercase" }}>
                Publication / Item:
              </span>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#141F15", textAlign: "right", maxWidth: "65%" }}>
                {itemTitle}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <span style={{ fontSize: "12px", color: "#7B857E", textTransform: "uppercase" }}>
                Order Reference:
              </span>
              <span style={{ fontFamily: "monospace", fontSize: "13px", fontWeight: 700, color: "#141F15" }}>
                {orderId}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: "1px dashed #D9CBBA",
                paddingTop: "8px",
              }}
            >
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#141F15" }}>
                Payable Total:
              </span>
              <span style={{ fontFamily: "'Georgia', serif", fontSize: "18px", fontWeight: 700, color: "#141F15" }}>
                {Number(amount || 0).toFixed(2)} QAR
              </span>
            </div>
          </div>

          {/* Form */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#141F15",
                    marginBottom: "6px",
                  }}
                >
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Fatima"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    border: "1px solid #C8C0B4",
                    borderRadius: "6px",
                    fontSize: "14px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#141F15",
                    marginBottom: "6px",
                  }}
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Al-Kuwari"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    border: "1px solid #C8C0B4",
                    borderRadius: "6px",
                    fontSize: "14px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#141F15",
                  marginBottom: "6px",
                }}
              >
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+974 5500 0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #C8C0B4",
                  borderRadius: "6px",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#141F15",
                  marginBottom: "6px",
                }}
              >
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="client@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #C8C0B4",
                  borderRadius: "6px",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#141F15",
                  marginBottom: "6px",
                }}
              >
                Amount (QAR) *
              </label>
              <input
                type="number"
                step="0.01"
                min="0.50"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #C8C0B4",
                  borderRadius: "6px",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
              <span style={{ fontSize: "11px", color: "#7B857E", marginTop: "4px", display: "block" }}>
                Payable amount in Qatari Riyals (QAR).
              </span>
            </div>

            <div style={{ marginTop: "12px" }}>
              <SkipCashCheckoutButton
                amount={amount}
                firstName={firstName}
                lastName={lastName}
                phone={phone}
                email={email}
                orderId={orderId}
              />
            </div>

            {/* Badges / Assurance */}
            <div
              style={{
                textAlign: "center",
                marginTop: "16px",
                fontSize: "11px",
                color: "#7B857E",
                lineHeight: "1.5",
              }}
            >
              🔒 Settled securely via SkipCash Qatar under Qatar Central Bank standards.
              <div style={{ marginTop: "6px" }}>
                <Link to="/book" style={{ color: "#9E7E2E", textDecoration: "none" }}>
                  &larr; Return to Consultations & Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
