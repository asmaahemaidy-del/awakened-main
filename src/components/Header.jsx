import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { useLanguage } from "../i18n/LanguageContext";

function LangSwitcher({ dark = true }) {
  const { lang, setLang } = useLanguage();
  const base = {
    fontFamily: "var(--font-sans)",
    fontSize: "0.7rem",
    letterSpacing: "0.12em",
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: "2px 6px",
    lineHeight: 1,
    transition: "color 0.3s",
  };
  const activeColor = dark ? "#C9A84C" : "#1A2B1C";
  const inactiveColor = dark ? "#7A9E7E" : "#9B8E7E";
  const dividerColor = dark ? "#4A6B4E" : "#C0B8A8";
  return (
    <div
      className="flex items-center gap-0"
      role="group"
      aria-label="Language selection"
      style={{
        userSelect: "none",
      }}
    >
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        aria-label="Switch to English"
        style={{
          ...base,
          color: lang === "en" ? activeColor : inactiveColor,
          fontWeight: lang === "en" ? 600 : 400,
          textTransform: "uppercase",
        }}
      >
        EN
      </button>
      <span
        style={{
          color: dividerColor,
          fontSize: "0.6rem",
          lineHeight: 1,
        }}
      >
        |
      </span>
      <button
        onClick={() => setLang("ar")}
        aria-pressed={lang === "ar"}
        aria-label="Switch to Arabic"
        style={{
          ...base,
          fontFamily: "var(--font-arabic)",
          fontSize: "0.82rem",
          letterSpacing: 0,
          color: lang === "ar" ? activeColor : inactiveColor,
          fontWeight: lang === "ar" ? 600 : 400,
        }}
      >
        ع
      </button>
    </div>
  );
}

export function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [bookDropdownOpen, setBookDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, t } = useLanguage();
  const bookSections = [
    {
      id: "discovery",
      en: "Discovery Call",
      ar: "مكالمة الاكتشاف",
    },
    {
      id: "sessions",
      en: "Advisory Sessions",
      ar: "الجلسات الاستشارية",
    },
    {
      id: "corporate",
      en: "Corporate Wellness",
      ar: "العافية المؤسسية",
    },
    {
      id: "retreats",
      en: "Wellness Retreats",
      ar: "خلوات العافية",
    },
    {
      id: "events",
      en: "Events",
      ar: "الفعاليات",
    },
    {
      id: "membership",
      en: "Community Membership",
      ar: "عضوية المجتمع",
    },
  ];
  const servicesDropItems = [
    {
      href: "/services",
      en: "All Services",
      ar: "جميع الخدمات",
    },
    {
      href: "/individuals",
      en: "Individual Coaching",
      ar: "التوجيه الفردي",
    },
    {
      href: "/organizations",
      en: "Corporate Wellness",
      ar: "العافية المؤسسية",
    },
    {
      href: "/retreats",
      en: "Retreats",
      ar: "الخلوات",
    },
    {
      href: "/events",
      en: "Events",
      ar: "الفعاليات",
    },
    {
      href: "/community",
      en: "Community",
      ar: "المجتمع",
    },
  ];
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const headerIsDark = true;
  const headerBg = scrolled
    ? "var(--brand-forest-overlay-deep)"
    : "var(--brand-forest-overlay-dark)";
  const headerBorderBottom = "1px solid var(--brand-gold-border)";
  const servicesChildPaths = [
    "/services",
    "/individuals",
    "/organizations",
    "/retreats",
    "/community",
  ];
  const isServicesActive = servicesChildPaths.some(
    (p) => location.pathname === p || (p !== "/" && location.pathname.startsWith(p)),
  );
  const isActive = (href) => {
    const path = href.split("#")[0];
    return location.pathname === path || (path !== "/" && location.pathname.startsWith(path));
  };
  const navTextColor = (active) => (active ? "var(--brand-sage-light)" : "var(--brand-sage-pale)");
  const labelStyle = {
    fontFamily: lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)",
    fontSize: lang === "ar" ? "0.78rem" : "0.58rem",
    letterSpacing: lang === "ar" ? 0 : "0.12em",
    textTransform: lang === "ar" ? "none" : "uppercase",
    fontWeight: lang === "ar" ? 600 : 400,
  };
  const underlineStyle = (active) => ({
    position: "absolute",
    bottom: -4,
    height: 1,
    width: active ? "100%" : "0%",
    insetInlineStart: 0,
    background: "var(--brand-sage-light)",
    transition: "width 0.5s ease",
  });
  const flatLinkStyle = (active) => ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "color 0.3s",
    color: navTextColor(active),
    textDecoration: "none",
    whiteSpace: "nowrap",
  });
  const aboutDropItems = [
    {
      href: "/about",
      en: "About Us",
      ar: "من نحن",
    },
    {
      href: "/experts",
      en: "Our Team",
      ar: "فريقنا",
    },
    {
      href: "/partners",
      en: "Partners",
      ar: "الشركاء",
    },
  ];
  const isAboutActive = aboutDropItems.some((i) => isActive(i.href));
  return (
    <>
      <style>{`
        #hdr-desktop { display: none !important; }
        #hdr-mobile  { display: flex !important; }
        #hdr-drawer  { display: block; }
        @media (min-width: 1024px) {
          #hdr-desktop { display: flex !important; }
          #hdr-mobile  { display: none !important; }
          #hdr-drawer  { display: none !important; }
        }
        .nav-link:hover { color: #FFFFFF !important; }
        .nav-link:hover .nav-underline { width: 100% !important; }
        .drop-item:hover { background: var(--brand-forest-light) !important; }
        .drop-item:hover span { color: #FFFFFF !important; }
        .mob-sub-label { white-space: normal; word-break: break-word; text-align: start; line-height: 1.4; }
        .mob-svc-sub:hover { background: var(--brand-forest-light) !important; }
      `}</style>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1e3,
          background: headerBg,
          borderBottom: headerBorderBottom,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          transition: "background 0.7s ease, border-color 0.7s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
          }}
        >
          <div
            id="hdr-desktop"
            style={{
              height: 68,
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: lang === "ar" ? "row-reverse" : "row",
              gap: 16,
            }}
          >
            <Link
              to="/"
              aria-label="Awakened — Home"
              style={{
                flexShrink: 0,
                width: 140,
              }}
            >
              <img
                src="/images/logo-160.webp"
                srcSet="/images/logo-160.webp 160w, /images/logo-320.webp 320w"
                sizes="72px"
                width={1536}
                height={1024}
                decoding="async"
                alt="Awakened"
                style={{
                  height: 48,
                  width: "auto",
                  objectFit: "contain",
                  filter:
                    "brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(5deg) brightness(1.1)",
                  transition: "filter 0.5s ease",
                }}
              />
            </Link>
            <nav
              aria-label="Main navigation"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(8px, 1.2vw, 20px)",
                flex: 1,
                justifyContent: "center",
                flexDirection: lang === "ar" ? "row-reverse" : "row",
                flexWrap: "nowrap",
                overflow: "visible",
              }}
            >
              <Link to="/" className="nav-link" style={flatLinkStyle(isActive("/"))}>
                <span style={labelStyle}>{t("Home", "الرئيسية")}</span>
                <span className="nav-underline" style={underlineStyle(isActive("/"))} />
              </Link>
              <div
                style={{
                  position: "relative",
                }}
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <Link to="/about" className="nav-link" style={flatLinkStyle(isAboutActive)}>
                  <span
                    style={{
                      ...labelStyle,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    {t("About", "من نحن")}
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transition: "transform 0.25s",
                        transform: aboutDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                        opacity: 0.7,
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                  <span className="nav-underline" style={underlineStyle(isAboutActive)} />
                </Link>
                {aboutDropdownOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 12px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      minWidth: 200,
                      background: "var(--brand-forest)",
                      border: "1px solid var(--brand-gold-border)",
                      boxShadow: "0 16px 40px var(--brand-forest-overlay-dark)",
                      zIndex: 2e3,
                      padding: "6px 0",
                      borderRadius: 4,
                    }}
                  >
                    {aboutDropItems.map((s, i) => (
                      <Link
                        key={s.href}
                        to={s.href}
                        onClick={() => setAboutDropdownOpen(false)}
                        className="drop-item"
                        style={{
                          display: "block",
                          padding: "11px 28px",
                          textDecoration: "none",
                          textAlign: "center",
                          borderBottom:
                            i < aboutDropItems.length - 1
                              ? "1px solid var(--brand-border-faint)"
                              : "none",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)",
                            fontSize: lang === "ar" ? "0.85rem" : "0.72rem",
                            letterSpacing: lang === "ar" ? 0 : "0.1em",
                            textTransform: lang === "ar" ? "none" : "uppercase",
                            fontWeight: lang === "ar" ? 500 : 400,
                            color: isActive(s.href)
                              ? "var(--brand-gold)"
                              : "var(--brand-sage-light)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {t(s.en, s.ar)}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div
                style={{
                  position: "relative",
                }}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <Link to="/services" className="nav-link" style={flatLinkStyle(isServicesActive)}>
                  <span
                    style={{
                      ...labelStyle,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    {t("Services", "الخدمات")}
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transition: "transform 0.25s",
                        transform: servicesDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                        opacity: 0.7,
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                  <span className="nav-underline" style={underlineStyle(isServicesActive)} />
                </Link>
                {servicesDropdownOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 12px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      minWidth: 220,
                      background: "var(--brand-forest)",
                      border: "1px solid var(--brand-gold-border)",
                      boxShadow: "0 16px 40px var(--brand-forest-overlay-dark)",
                      zIndex: 2e3,
                      padding: "6px 0",
                      borderRadius: 4,
                    }}
                  >
                    {servicesDropItems.map((s, i) => (
                      <Link
                        key={s.href}
                        to={s.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="drop-item"
                        style={{
                          display: "block",
                          padding: "11px 28px",
                          textDecoration: "none",
                          textAlign: "center",
                          borderBottom:
                            i < servicesDropItems.length - 1
                              ? "1px solid var(--brand-border-faint)"
                              : "none",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)",
                            fontSize: lang === "ar" ? "0.85rem" : "0.72rem",
                            letterSpacing: lang === "ar" ? 0 : "0.1em",
                            textTransform: lang === "ar" ? "none" : "uppercase",
                            fontWeight: lang === "ar" ? 500 : 400,
                            color: isActive(s.href)
                              ? "var(--brand-gold)"
                              : "var(--brand-sage-light)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {t(s.en, s.ar)}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/contact" className="nav-link" style={flatLinkStyle(isActive("/contact"))}>
                <span style={labelStyle}>{t("Contact", "تواصل معنا")}</span>
                <span className="nav-underline" style={underlineStyle(isActive("/contact"))} />
              </Link>
              <div
                style={{
                  position: "relative",
                }}
                onMouseEnter={() => setBookDropdownOpen(true)}
                onMouseLeave={() => setBookDropdownOpen(false)}
              >
                <Link to="/book" className="nav-link" style={flatLinkStyle(isActive("/book"))}>
                  <span
                    style={{
                      ...labelStyle,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    {t("Book", "احجز")}
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transition: "transform 0.25s",
                        transform: bookDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                        opacity: 0.7,
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                  <span className="nav-underline" style={underlineStyle(isActive("/book"))} />
                </Link>
                {bookDropdownOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 12px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      minWidth: 220,
                      background: "var(--brand-forest)",
                      border: "1px solid var(--brand-gold-border)",
                      boxShadow: "0 16px 40px var(--brand-forest-overlay-dark)",
                      zIndex: 2e3,
                      padding: "6px 0",
                      borderRadius: 4,
                    }}
                  >
                    {bookSections.map((s, i) => (
                      <Link
                        key={s.id}
                        to={`/book#${s.id}`}
                        onClick={() => {
                          setBookDropdownOpen(false);
                          setTimeout(() => {
                            const el = document.getElementById(s.id);
                            if (el)
                              window.scrollTo({
                                top: el.getBoundingClientRect().top + window.scrollY - 120,
                                behavior: "smooth",
                              });
                          }, 80);
                        }}
                        className="drop-item"
                        style={{
                          display: "block",
                          padding: "11px 28px",
                          textDecoration: "none",
                          textAlign: "center",
                          borderBottom:
                            i < bookSections.length - 1
                              ? "1px solid var(--brand-border-faint)"
                              : "none",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)",
                            fontSize: lang === "ar" ? "0.85rem" : "0.72rem",
                            letterSpacing: lang === "ar" ? 0 : "0.1em",
                            textTransform: lang === "ar" ? "none" : "uppercase",
                            fontWeight: lang === "ar" ? 500 : 400,
                            color: "var(--brand-sage-light)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {t(s.en, s.ar)}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>
            <div
              style={{
                flexShrink: 0,
                width: 140,
                display: "flex",
                justifyContent: lang === "ar" ? "flex-start" : "flex-end",
              }}
            >
              <LangSwitcher dark={headerIsDark} />
            </div>
          </div>
          <div
            id="hdr-mobile"
            style={{
              height: 64,
              alignItems: "center",
              flexDirection: lang === "ar" ? "row-reverse" : "row",
              position: "relative",
            }}
          >
            <Link
              to="/"
              aria-label="Awakened — Home"
              style={{
                flexShrink: 0,
                zIndex: 1,
              }}
            >
              <img
                src="/images/logo-160.webp"
                srcSet="/images/logo-160.webp 160w, /images/logo-320.webp 320w"
                sizes="72px"
                width={1536}
                height={1024}
                decoding="async"
                alt="Awakened"
                style={{
                  height: 42,
                  width: "auto",
                  objectFit: "contain",
                  filter:
                    "brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(5deg) brightness(1.1)",
                  transition: "filter 0.5s ease",
                }}
              />
            </Link>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginInlineStart: "auto",
                zIndex: 1,
              }}
            >
              <LangSwitcher dark={headerIsDark} />
              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 42,
                  height: 42,
                  borderRadius: 6,
                  flexShrink: 0,
                  background: "var(--brand-gold-bg)",
                  border: "1px solid var(--brand-gold-border)",
                  color: "var(--brand-gold)",
                  cursor: "pointer",
                  transition: "background 0.2s, border-color 0.2s",
                }}
              >
                {isMobileMenuOpen ? (
                  <X size={20} strokeWidth={1.8} />
                ) : (
                  <span
                    style={{
                      fontSize: "1.35rem",
                      lineHeight: 1,
                      fontFamily: "sans-serif",
                    }}
                  >
                    ☰
                  </span>
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div
              id="hdr-drawer"
              style={{
                position: "absolute",
                top: "100%",
                left: -24,
                right: -24,
                background: "var(--brand-forest-overlay-deep)",
                borderTop: "1px solid var(--brand-gold-border)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                maxHeight: "calc(100dvh - 64px)",
                overflowY: "auto",
                direction: lang === "ar" ? "rtl" : "ltr",
                zIndex: 200,
              }}
            >
              <nav
                aria-label="Mobile navigation"
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {[
                  {
                    href: "/",
                    en: "Home",
                    ar: "الرئيسية",
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "16px 24px",
                      textDecoration: "none",
                      borderBottom: "1px solid var(--brand-forest-mid)",
                      color: isActive(item.href) ? "var(--brand-gold)" : "var(--brand-cream)",
                      transition: "color 0.15s",
                    }}
                  >
                    <span
                      className="mob-sub-label"
                      style={{
                        fontFamily: lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)",
                        fontSize: lang === "ar" ? "1rem" : "0.72rem",
                        letterSpacing: lang === "ar" ? 0 : "0.18em",
                        textTransform: lang === "ar" ? "none" : "uppercase",
                        fontWeight: lang === "ar" ? 600 : 500,
                      }}
                    >
                      {t(item.en, item.ar)}
                    </span>
                  </Link>
                ))}
                <div
                  style={{
                    borderBottom: "1px solid var(--brand-forest-mid)",
                  }}
                >
                  <button
                    onClick={() => setMobileAboutOpen((prev) => !prev)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      padding: "16px 24px",
                      background: "transparent",
                      border: "none",
                      color: isAboutActive ? "var(--brand-gold)" : "var(--brand-cream)",
                      cursor: "pointer",
                      transition: "color 0.15s",
                    }}
                  >
                    <span
                      className="mob-sub-label"
                      style={{
                        fontFamily: lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)",
                        fontSize: lang === "ar" ? "1rem" : "0.72rem",
                        letterSpacing: lang === "ar" ? 0 : "0.18em",
                        textTransform: lang === "ar" ? "none" : "uppercase",
                        fontWeight: lang === "ar" ? 600 : 500,
                      }}
                    >
                      {t("About", "من نحن")}
                    </span>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transition: "transform 0.25s",
                        transform: mobileAboutOpen ? "rotate(180deg)" : "rotate(0deg)",
                        opacity: 0.7,
                        flexShrink: 0,
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {mobileAboutOpen && (
                    <div
                      style={{
                        background: "var(--brand-forest-overlay-dark)",
                      }}
                    >
                      {aboutDropItems.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="mob-svc-sub"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "13px 24px",
                            textDecoration: "none",
                            borderTop: "1px solid var(--brand-border-faint)",
                            color: isActive(item.href)
                              ? "var(--brand-gold)"
                              : "var(--brand-sage-light)",
                            transition: "color 0.15s",
                          }}
                        >
                          <span
                            className="mob-sub-label"
                            style={{
                              fontFamily: lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)",
                              fontSize: lang === "ar" ? "0.9rem" : "0.65rem",
                              letterSpacing: lang === "ar" ? 0 : "0.15em",
                              textTransform: lang === "ar" ? "none" : "uppercase",
                              fontWeight: lang === "ar" ? 500 : 400,
                            }}
                          >
                            {t(item.en, item.ar)}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div
                  style={{
                    borderBottom: "1px solid var(--brand-forest-mid)",
                  }}
                >
                  <button
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      padding: "16px 24px",
                      background: "transparent",
                      border: "none",
                      color: isServicesActive ? "var(--brand-gold)" : "var(--brand-cream)",
                      cursor: "pointer",
                      transition: "color 0.15s",
                    }}
                  >
                    <span
                      className="mob-sub-label"
                      style={{
                        fontFamily: lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)",
                        fontSize: lang === "ar" ? "1rem" : "0.72rem",
                        letterSpacing: lang === "ar" ? 0 : "0.18em",
                        textTransform: lang === "ar" ? "none" : "uppercase",
                        fontWeight: lang === "ar" ? 600 : 500,
                      }}
                    >
                      {t("Services", "الخدمات")}
                    </span>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transition: "transform 0.25s",
                        transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                        opacity: 0.7,
                        flexShrink: 0,
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <div
                      style={{
                        background: "var(--brand-forest-overlay-dark)",
                      }}
                    >
                      {servicesDropItems.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="mob-svc-sub"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "13px 24px",
                            textDecoration: "none",
                            borderTop: "1px solid var(--brand-border-faint)",
                            color: isActive(item.href)
                              ? "var(--brand-gold)"
                              : "var(--brand-sage-light)",
                            transition: "color 0.15s",
                          }}
                        >
                          <span
                            className="mob-sub-label"
                            style={{
                              fontFamily: lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)",
                              fontSize: lang === "ar" ? "0.9rem" : "0.65rem",
                              letterSpacing: lang === "ar" ? 0 : "0.15em",
                              textTransform: lang === "ar" ? "none" : "uppercase",
                              fontWeight: lang === "ar" ? 500 : 400,
                            }}
                          >
                            {t(item.en, item.ar)}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                {[
                  {
                    href: "/contact",
                    en: "Contact",
                    ar: "تواصل معنا",
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "16px 24px",
                      textDecoration: "none",
                      borderBottom: "1px solid var(--brand-forest-mid)",
                      color: isActive(item.href) ? "var(--brand-gold)" : "var(--brand-cream)",
                      transition: "color 0.15s",
                    }}
                  >
                    <span
                      className="mob-sub-label"
                      style={{
                        fontFamily: lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)",
                        fontSize: lang === "ar" ? "1rem" : "0.72rem",
                        letterSpacing: lang === "ar" ? 0 : "0.18em",
                        textTransform: lang === "ar" ? "none" : "uppercase",
                        fontWeight: lang === "ar" ? 600 : 500,
                      }}
                    >
                      {t(item.en, item.ar)}
                    </span>
                  </Link>
                ))}
                <div
                  style={{
                    padding: "20px 24px",
                    borderTop: "1px solid var(--brand-gold-border)",
                  }}
                >
                  <Link
                    to="/book#discovery"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      display: "block",
                      textAlign: "center",
                      border: "1px solid var(--brand-gold)",
                      padding: "13px 24px",
                      borderRadius: 4,
                      fontFamily: lang === "ar" ? "var(--font-arabic)" : "var(--font-sans)",
                      fontSize: lang === "ar" ? "0.95rem" : "0.68rem",
                      letterSpacing: lang === "ar" ? 0 : "0.16em",
                      textTransform: lang === "ar" ? "none" : "uppercase",
                      color: "var(--brand-gold)",
                      textDecoration: "none",
                    }}
                  >
                    {t("Book", "احجز")}
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
