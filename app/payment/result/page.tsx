import Link from "next/link";

interface PaymentResultProps {
  searchParams: Promise<{
    id?: string;
    statusId?: string;
    transId?: string;
  }>;
}

export default async function PaymentResultPage({ searchParams }: PaymentResultProps) {
  const params = await searchParams;
  const id = params.id || "";
  const statusId = params.statusId || "";
  const transId = params.transId || "";

  const isSuccess = String(statusId).trim() === "2";

  return (
    <div
      style={{
        backgroundColor: "#F4EDE2",
        minHeight: "100vh",
        padding: "130px 20px 80px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "580px",
          margin: "0 auto",
          backgroundColor: "#FFFFFF",
          borderRadius: "12px",
          border: "1px solid #D9CBBA",
          boxShadow: "0 12px 36px rgba(20, 31, 21, 0.08)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "6px",
            background: isSuccess
              ? "linear-gradient(90deg, #9E7E2E 0%, #C9A84C 50%, #4A7A50 100%)"
              : "linear-gradient(90deg, #C53030 0%, #E53E3E 100%)",
          }}
        />

        <div style={{ padding: "40px 36px", textAlign: "center" }}>
          {isSuccess ? (
            <>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "#EBF3EC",
                  border: "2px solid #8FB896",
                  color: "#1F4225",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  fontSize: "30px",
                  fontWeight: 700,
                }}
              >
                &#10003;
              </div>

              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#3D6B44",
                  fontWeight: 700,
                  display: "block",
                  marginBottom: "6px",
                }}
              >
                SkipCash Qatar &bull; الدفع مؤكد
              </span>

              <h1
                style={{
                  margin: "0 0 12px",
                  fontFamily: "'Georgia', serif",
                  fontSize: "28px",
                  color: "#141F15",
                  fontWeight: 600,
                }}
              >
                Payment successful
              </h1>

              <p style={{ margin: "0 0 24px", fontSize: "15px", color: "#555E57", lineHeight: "1.6" }}>
                Thank you. Your transaction has been approved and securely settled via SkipCash Qatar.
              </p>

              <div
                style={{
                  background: "#FAF7F2",
                  border: "1px solid #EAE3D6",
                  borderRadius: "8px",
                  padding: "18px 20px",
                  marginBottom: "28px",
                  textAlign: "left",
                }}
              >
                {transId && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                      fontSize: "13px",
                    }}
                  >
                    <span style={{ color: "#7B857E" }}>Transaction ID:</span>
                    <strong style={{ fontFamily: "monospace", color: "#141F15" }}>{transId}</strong>
                  </div>
                )}
                {id && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                      fontSize: "13px",
                    }}
                  >
                    <span style={{ color: "#7B857E" }}>Payment ID:</span>
                    <span style={{ fontFamily: "monospace", color: "#555" }}>{id}</span>
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "13px",
                    borderTop: "1px dashed #D9CBBA",
                    paddingTop: "8px",
                  }}
                >
                  <span style={{ color: "#7B857E" }}>Status:</span>
                  <span style={{ color: "#1F4225", fontWeight: 700 }}>PAID (Status 2)</span>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Link
                  href="/"
                  style={{
                    display: "block",
                    padding: "13px 24px",
                    backgroundColor: "#141F15",
                    color: "#FAF7F2",
                    borderRadius: "6px",
                    fontFamily: "'Georgia', serif",
                    fontSize: "14px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  Return to Homepage
                </Link>
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "#FFF5F5",
                  border: "2px solid #FEB2B2",
                  color: "#C53030",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  fontSize: "30px",
                  fontWeight: 700,
                }}
              >
                &times;
              </div>

              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#C53030",
                  fontWeight: 700,
                  display: "block",
                  marginBottom: "6px",
                }}
              >
                SkipCash Qatar &bull; لم تكتمل العملية
              </span>

              <h1
                style={{
                  margin: "0 0 12px",
                  fontFamily: "'Georgia', serif",
                  fontSize: "26px",
                  color: "#141F15",
                  fontWeight: 600,
                }}
              >
                Payment failed or cancelled
              </h1>

              <p style={{ margin: "0 0 24px", fontSize: "14px", color: "#555E57", lineHeight: "1.6" }}>
                The transaction was not completed. You can try again with another payment method.
              </p>

              {transId && (
                <div
                  style={{
                    background: "#FAF7F2",
                    border: "1px solid #EAE3D6",
                    borderRadius: "8px",
                    padding: "16px 20px",
                    marginBottom: "28px",
                    textAlign: "left",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                    <span style={{ color: "#7B857E" }}>Transaction Reference:</span>
                    <strong style={{ fontFamily: "monospace", color: "#141F15" }}>{transId}</strong>
                  </div>
                </div>
              )}

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Link
                  href="/checkout"
                  style={{
                    display: "block",
                    padding: "13px 24px",
                    backgroundColor: "#141F15",
                    color: "#FAF7F2",
                    borderRadius: "6px",
                    border: "1px solid #C9A84C",
                    fontFamily: "'Georgia', serif",
                    fontSize: "14px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  Try Again
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
