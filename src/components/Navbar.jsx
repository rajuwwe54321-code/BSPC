import { Link, NavLink } from "react-router-dom";
import { Home, Info, Boxes, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { preloadRoute } from "../utils/routePreload";
import logo from "../assets/LOGO-removebg-preview.png";

const NAV_ITEMS = [
  { to: "/", icon: Home, label: "Home", num: "01" },
  { to: "/about", icon: Info, label: "About", num: "02" },
  { to: "/products", icon: Boxes, label: "Products", num: "03" },
  { to: "/contact", icon: Phone, label: "Contact", num: "04" },
];

/* ─────────────────────────────────────────
   Scroll phases:
   0–60px   → top   | 60–180px → mid | 180px+ → float
───────────────────────────────────────── */
export default function Navbar() {
  const [phase, setPhase] = useState("top");
  const [mOpen, setMOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 60) setPhase("top");
      else if (y < 180) setPhase("mid");
      else setPhase("float");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600&display=swap');

        .nb  { font-family: 'Barlow', sans-serif; }
        .brand { font-family: 'Bebas Neue', sans-serif; }

        /* ── Phase wrappers ── */
        .nb-top {
          position: sticky; top: 0; z-index: 100; width: 100%;
          background: #080808; border-bottom: 1px solid #1c1c1c;
          transition: all 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .nb-mid {
          position: sticky; top: 0; z-index: 100; width: 100%;
          background: rgba(8,8,8,0.92); backdrop-filter: blur(14px);
          border-bottom: 1px solid #2a1010;
          box-shadow: 0 4px 32px rgba(220,38,38,0.12);
          transition: all 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .nb-float {
          position: fixed; top: 10px;
          left: 50%; transform: translateX(-50%);
          z-index: 100;
          background: rgba(10,10,10,0.97); backdrop-filter: blur(22px);
          border: 1px solid rgba(220,38,38,0.25); border-radius: 50px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04);
          transition: all 0.5s cubic-bezier(0.4,0,0.2,1); overflow: hidden;
        }

        /* Desktop float width */
        .nb-desktop.nb-float { min-width: min(680px, 92vw); }

        /* ── Inner shell ── */
        .nb-inner {
          display: flex; align-items: center; justify-content: space-between;
          transition: padding 0.5s ease, height 0.5s ease;
        }
        .nb-desktop.nb-top .nb-inner   { height: 64px; padding: 0 40px; }
        .nb-desktop.nb-mid .nb-inner   { height: 50px; padding: 0 28px; }
        .nb-desktop.nb-float .nb-inner { height: 48px; padding: 0 10px 0 14px; }
        .nb-mobile.nb-top .nb-inner    { height: 56px; padding: 0 16px; }
        .nb-mobile.nb-mid .nb-inner    { height: 46px; padding: 0 14px; }
        .nb-mobile.nb-float .nb-inner  { height: 44px; padding: 0 10px 0 14px; }

        /* Mobile float — full width pill */
        .nb-mobile.nb-float {
          width: calc(100vw - 24px); left: 12px; transform: none;
        }

        /* ── Red accent line (top only) ── */
        .nb-redline {
          height: 2px;
          background: linear-gradient(90deg,transparent 0%,#dc2626 20%,#dc2626 80%,transparent 100%);
          transition: opacity 0.4s ease, height 0.4s ease;
        }
        .nb-mid .nb-redline, .nb-float .nb-redline { opacity: 0; height: 0; }

        /* ── Logo ── */
        .nb-logo { display: flex; align-items: center; gap: 9px; flex-shrink: 0; }
        .nb-float .nb-logo { gap: 6px; }
        .nb-icon-box {
          display: flex; align-items: center; justify-content: center;
          background: #fff;
          border: 1px solid rgba(255,255,255,0.18); border-radius: 8px; flex-shrink: 0;
          transition: all 0.5s ease;
          overflow: hidden;
        }
        .nb-logo-img {
          width: 100%; height: 100%; object-fit: contain; padding: 3px;
          display: block; transition: padding 0.5s ease;
        }
        .nb-desktop.nb-top .nb-icon-box   { width: 48px; height: 48px; }
        .nb-desktop.nb-mid .nb-icon-box   { width: 38px; height: 38px; }
        .nb-desktop.nb-float .nb-icon-box { width: 32px; height: 32px; }
        .nb-mobile.nb-top .nb-icon-box    { width: 42px; height: 42px; }
        .nb-mobile.nb-mid .nb-icon-box    { width: 34px; height: 34px; }
        .nb-mobile.nb-float .nb-icon-box  { width: 30px; height: 30px; }
        .nb-float .nb-logo-img { padding: 2px; }

        .nb-brandname {
          color: #fff; line-height: 1; letter-spacing: 0.18em;
          transition: font-size 0.5s ease;
        }
        .nb-desktop.nb-top .nb-brandname   { font-size: 22px; }
        .nb-desktop.nb-mid .nb-brandname   { font-size: 18px; }
        .nb-desktop.nb-float .nb-brandname { font-size: 14px; }
        .nb-mobile.nb-top .nb-brandname    { font-size: 18px; }
        .nb-mobile.nb-mid .nb-brandname    { font-size: 16px; }
        .nb-mobile.nb-float .nb-brandname  { font-size: 13px; }

        .nb-subtitle {
          font-size: 8px; letter-spacing: 0.15em; color: #555; text-transform: uppercase;
          overflow: hidden; transition: opacity 0.35s ease, max-height 0.35s ease;
        }
        .nb-top .nb-subtitle  { opacity: 1; max-height: 20px; }
        .nb-mid .nb-subtitle  { opacity: 0; max-height: 0; }
        .nb-float .nb-subtitle{ opacity: 0; max-height: 0; }

        /* ── Desktop nav links ── */
        .nb-links { display: flex; align-items: center; gap: 2px; }
        .nb-float .nb-links { gap: 1px; }
        .nb-link {
          position: relative; display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-decoration: none; cursor: pointer;
          transition: all 0.35s ease; border: 1px solid transparent;
        }
        .nb-desktop.nb-top .nb-link   { padding: 6px 14px; min-width: 68px; border-radius: 6px; }
        .nb-desktop.nb-mid .nb-link   { padding: 5px 12px; min-width: 60px; border-radius: 6px; }
        .nb-desktop.nb-float .nb-link { padding: 5px 13px; flex-direction: row; gap: 6px; border-radius: 50px; }
        .nb-link:hover { background: rgba(220,38,38,0.08); }
        .nb-link.is-active { background: rgba(220,38,38,0.11); border-color: rgba(220,38,38,0.2); }
        .nb-ico { transition: color 0.25s ease, filter 0.25s ease, transform 0.25s ease; flex-shrink: 0; }
        .nb-link:hover .nb-ico { transform: translateY(-1px); }
        .nb-lbl {
          font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; white-space: nowrap;
          transition: color 0.25s ease;
        }
        .nb-desktop.nb-top .nb-lbl   { font-size: 9px;  margin-top: 3px; }
        .nb-desktop.nb-mid .nb-lbl   { font-size: 9px;  margin-top: 2px; }
        .nb-desktop.nb-float .nb-lbl { font-size: 10px; margin-top: 0; }
        .nb-bar {
          position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
          height: 2px; border-radius: 2px;
          background: #dc2626; box-shadow: 0 0 8px rgba(220,38,38,0.8);
          transition: width 0.3s ease, opacity 0.3s ease;
        }
        .nb-float .nb-bar { display: none; }

        /* ── Divider ── */
        .nb-div {
          width: 1px; flex-shrink: 0;
          background: linear-gradient(to bottom, transparent, #2a2a2a, transparent);
          transition: height 0.5s ease, opacity 0.5s ease;
        }
        .nb-top .nb-div  { height: 26px; opacity: 1; }
        .nb-mid .nb-div  { height: 20px; opacity: 1; }
        .nb-float .nb-div{ height: 0;    opacity: 0; }

        /* ── Desktop CTA ── */
        .nb-right { display: flex; align-items: center; flex-shrink: 0; gap: 8px; }
        .nb-cta {
          font-weight: 600; letter-spacing: 0.13em; text-transform: uppercase;
          color: #fff; text-decoration: none;
          background: linear-gradient(135deg, #dc2626, #991b1b);
          border: 1px solid #b91c1c; cursor: pointer; flex-shrink: 0;
          transition: all 0.4s ease;
        }
        .nb-desktop.nb-top .nb-cta   { font-size: 10px; padding: 8px 18px; border-radius: 4px; }
        .nb-desktop.nb-mid .nb-cta   { font-size: 10px; padding: 6px 14px; border-radius: 4px; }
        .nb-desktop.nb-float .nb-cta { font-size: 9px;  padding: 5px 14px; border-radius: 50px; }
        .nb-cta:hover { box-shadow: 0 0 18px rgba(220,38,38,0.45); transform: translateY(-1px); }

        /* ── Pulse dot ── */
        .nb-pulse {
          width: 6px; height: 6px; border-radius: 50%;
          background: #dc2626; flex-shrink: 0;
          transition: opacity 0.4s ease, width 0.4s ease;
        }
        .nb-top .nb-pulse, .nb-mid .nb-pulse { opacity: 0; width: 0; overflow: hidden; }
        .nb-float .nb-pulse { opacity: 1; animation: pulse-r 1.8s ease-in-out infinite; }
        @keyframes pulse-r {
          0%,100% { box-shadow: 0 0 0 0 rgba(220,38,38,0.7); }
          50%      { box-shadow: 0 0 0 5px rgba(220,38,38,0); }
        }

        /* ══════════════════════════════════════
           HAMBURGER BUTTON
        ══════════════════════════════════════ */
        .ham-btn {
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; gap: 5px;
          width: 40px; height: 40px; border-radius: 8px;
          background: transparent; border: 1px solid #2a2a2a;
          cursor: pointer; flex-shrink: 0; transition: all 0.3s ease;
          position: relative; z-index: 200;
        }
        .ham-btn:hover { border-color: #dc2626; background: rgba(220,38,38,0.08); }
        .ham-btn.open  { border-color: rgba(220,38,38,0.4); background: rgba(220,38,38,0.1); }

        .ham-line {
          width: 20px; height: 1.5px; background: #aaa; border-radius: 2px;
          transform-origin: center; transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .ham-btn.open .ham-line-1 {
          transform: translateY(6.5px) rotate(45deg); background: #dc2626;
        }
        .ham-btn.open .ham-line-2 {
          opacity: 0; transform: scaleX(0);
        }
        .ham-btn.open .ham-line-3 {
          transform: translateY(-6.5px) rotate(-45deg); background: #dc2626;
        }

        /* ══════════════════════════════════════
           FULLSCREEN MOBILE OVERLAY
        ══════════════════════════════════════ */
        .mob-overlay {
          position: fixed; inset: 0; z-index: 150;
          background: #060606;
          display: flex; flex-direction: column;
          pointer-events: none;
          /* Clip from top using clip-path */
          clip-path: circle(0% at calc(100% - 36px) 28px);
          transition: clip-path 0.65s cubic-bezier(0.4,0,0.2,1);
        }
        .mob-overlay.open {
          clip-path: circle(160% at calc(100% - 36px) 28px);
          pointer-events: all;
        }

        /* Overlay texture grid */
        .mob-overlay::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(220,38,38,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220,38,38,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        /* Overlay header */
        .mob-overlay-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 20px; height: 56px; flex-shrink: 0;
          border-bottom: 1px solid #1a1a1a;
        }

        /* Big nav items */
        .mob-nav-list {
          flex: 1; display: flex; flex-direction: column;
          justify-content: center; padding: 0 28px; gap: 4px;
        }

        .mob-nav-item {
          display: flex; align-items: center; gap: 20px;
          padding: 18px 20px; border-radius: 12px;
          text-decoration: none; cursor: pointer;
          border: 1px solid transparent;
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
          position: relative; overflow: hidden;
          /* Staggered entrance */
          opacity: 0; transform: translateX(40px);
          transition: opacity 0.4s ease, transform 0.4s ease, background 0.25s ease, border-color 0.25s ease;
        }
        .mob-overlay.open .mob-nav-item { opacity: 1; transform: translateX(0); }
        .mob-overlay.open .mob-nav-item:nth-child(1) { transition-delay: 0.18s; }
        .mob-overlay.open .mob-nav-item:nth-child(2) { transition-delay: 0.26s; }
        .mob-overlay.open .mob-nav-item:nth-child(3) { transition-delay: 0.34s; }
        .mob-overlay.open .mob-nav-item:nth-child(4) { transition-delay: 0.42s; }

        .mob-nav-item:hover {
          background: rgba(220,38,38,0.06);
          border-color: rgba(220,38,38,0.15);
          transform: translateX(4px) !important;
        }
        .mob-nav-item.is-active {
          background: rgba(220,38,38,0.1);
          border-color: rgba(220,38,38,0.25);
        }

        /* Left red accent bar on active */
        .mob-nav-item.is-active::before {
          content: '';
          position: absolute; left: 0; top: 20%; bottom: 20%;
          width: 3px; border-radius: 0 3px 3px 0;
          background: #dc2626; box-shadow: 0 0 10px rgba(220,38,38,0.7);
        }

        .mob-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 11px; letter-spacing: 0.1em;
          color: #333; flex-shrink: 0; width: 22px;
          transition: color 0.25s ease;
        }
        .mob-nav-item.is-active .mob-num,
        .mob-nav-item:hover .mob-num { color: rgba(220,38,38,0.5); }

        .mob-ico-wrap {
          width: 44px; height: 44px; border-radius: 10px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: #111; border: 1px solid #222;
          transition: all 0.25s ease;
        }
        .mob-nav-item.is-active .mob-ico-wrap {
          background: rgba(220,38,38,0.12);
          border-color: rgba(220,38,38,0.3);
          box-shadow: 0 0 14px rgba(220,38,38,0.2);
        }
        .mob-nav-item:hover .mob-ico-wrap {
          background: rgba(220,38,38,0.08);
          border-color: rgba(220,38,38,0.2);
        }

        .mob-text { flex: 1; }
        .mob-link-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px; letter-spacing: 0.06em; line-height: 1;
          color: #fff; display: block;
          transition: color 0.25s ease;
        }
        .mob-nav-item.is-active .mob-link-label { color: #dc2626; }
        .mob-nav-item:hover .mob-link-label { color: #f87171; }

        .mob-link-sub {
          font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;
          color: #444; margin-top: 2px; display: block;
          font-family: 'Barlow', sans-serif; font-weight: 500;
        }
        .mob-nav-item.is-active .mob-link-sub { color: rgba(220,38,38,0.5); }

        .mob-arrow {
          flex-shrink: 0; color: #2a2a2a;
          transition: color 0.25s ease, transform 0.25s ease;
        }
        .mob-nav-item:hover .mob-arrow { color: #dc2626; transform: translateX(3px); }
        .mob-nav-item.is-active .mob-arrow { color: rgba(220,38,38,0.4); }

        /* Bottom section */
        .mob-overlay-foot {
          padding: 20px 28px 36px;
          border-top: 1px solid #141414; flex-shrink: 0;
          display: flex; align-items: center; justify-content: space-between;
          opacity: 0; transform: translateY(16px);
          transition: opacity 0.4s ease 0.5s, transform 0.4s ease 0.5s;
        }
        .mob-overlay.open .mob-overlay-foot { opacity: 1; transform: translateY(0); }

        .mob-tagline {
          font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
          color: #333; font-family: 'Barlow', sans-serif;
          line-height: 1.6;
        }
        .mob-tagline span { display: block; color: #555; }

        .mob-quote-btn {
          font-size: 10px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase;
          color: #fff; text-decoration: none;
          background: linear-gradient(135deg, #dc2626, #991b1b);
          border: 1px solid #b91c1c; padding: 10px 20px; border-radius: 6px;
          transition: all 0.3s ease; white-space: nowrap;
        }
        .mob-quote-btn:hover { box-shadow: 0 0 20px rgba(220,38,38,0.4); }

        /* Close btn (X) inside overlay header reuses ham-btn styles */
        .mob-close-btn {
          width: 36px; height: 36px; border-radius: 8px; border: 1px solid #2a2a2a;
          background: transparent; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: #555; transition: all 0.25s ease;
        }
        .mob-close-btn:hover { border-color: #dc2626; color: #dc2626; }

        /* Decorative red glow in overlay */
        .mob-glow {
          position: absolute; bottom: -60px; right: -60px;
          width: 240px; height: 240px; border-radius: 50%;
          background: radial-gradient(circle, rgba(220,38,38,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .mob-glow-2 {
          position: absolute; top: 80px; left: -80px;
          width: 200px; height: 200px; border-radius: 50%;
          background: radial-gradient(circle, rgba(220,38,38,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
      `}</style>

      {/* ── Spacer for float phase ── */}
      {phase === "float" && <div style={{ height: 64 }} aria-hidden="true" />}

      {/* ════════════ DESKTOP navbar ════════════ */}
      <nav className={`nb nb-desktop nb-${phase} hidden md:block`}>
        <div className="nb-redline" />
        <div className="nb-inner">
          <Logo phase={phase} />
          <DesktopLinks phase={phase} />
          <div className="nb-right">
            <div className="nb-div" />
            <Link
              to="/contact"
              className="nb-cta"
              onMouseEnter={() => preloadRoute("/contact")}
              onFocus={() => preloadRoute("/contact")}
              onTouchStart={() => preloadRoute("/contact")}
            >
              {phase === "float" ? "Quote" : "Get Quote"}
            </Link>
          </div>
        </div>
      </nav>

      {/* ════════════ MOBILE navbar ════════════ */}
      <nav className={`nb nb-mobile nb-${phase} block md:hidden`}>
        <div className="nb-redline" />
        <div className="nb-inner">
          {/* Logo */}
          <Logo phase={phase} isMobile />

          {/* Hamburger button */}
          <button
            className={`ham-btn${mOpen ? " open" : ""}`}
            onClick={() => setMOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="ham-line ham-line-1" />
            <span className="ham-line ham-line-2" />
            <span className="ham-line ham-line-3" />
          </button>
        </div>
      </nav>

      {/* ════════════ MOBILE FULLSCREEN OVERLAY ════════════ */}
      <div className={`mob-overlay${mOpen ? " open" : ""}`}>
        <div className="mob-glow" />
        <div className="mob-glow-2" />

        {/* Overlay header */}
        <div className="mob-overlay-head">
          <div className="nb-logo" style={{ gap: 8 }}>
            <div className="nb-icon-box" style={{ width: 38, height: 38 }}>
              <img src={logo} alt="BSPC logo" className="nb-logo-img" />
            </div>
            <span
              className="brand"
              style={{ fontSize: 16, color: "#fff", letterSpacing: "0.18em" }}
            >
              BSP<span style={{ color: "#dc2626" }}>C</span>
            </span>
          </div>
          <button
            className="mob-close-btn"
            onClick={() => setMOpen(false)}
            aria-label="Close menu"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav items list */}
        <nav className="mob-nav-list">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `mob-nav-item${isActive ? " is-active" : ""}`
              }
              onClick={() => setMOpen(false)}
              onMouseEnter={() => preloadRoute(item.to)}
              onFocus={() => preloadRoute(item.to)}
              onTouchStart={() => preloadRoute(item.to)}
            >
              {({ isActive }) => (
                <>
                  <span className="mob-num">{item.num}</span>

                  <div className="mob-ico-wrap">
                    <item.icon
                      size={20}
                      style={{
                        color: isActive ? "#dc2626" : "#555",
                        filter: isActive
                          ? "drop-shadow(0 0 5px rgba(220,38,38,0.6))"
                          : "none",
                      }}
                    />
                  </div>

                  <div className="mob-text">
                    <span className="mob-link-label">{item.label}</span>
                    <span className="mob-link-sub">
                      {item.to === "/" && "Start here"}
                      {item.to === "/about" && "Our story & team"}
                      {item.to === "/products" && "Iron cast range"}
                      {item.to === "/contact" && "Get in touch"}
                    </span>
                  </div>

                  {/* Arrow */}
                  <svg
                    className="mob-arrow"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Footer strip */}
        <div className="mob-overlay-foot">
          <div className="mob-tagline">
            <span>Precision Iron Casting</span>
            <span>Est. 2013 · Trusted Quality</span>
          </div>
          <Link
            to="/contact"
            className="mob-quote-btn"
            onClick={() => setMOpen(false)}
            onMouseEnter={() => preloadRoute("/contact")}
            onFocus={() => preloadRoute("/contact")}
            onTouchStart={() => preloadRoute("/contact")}
          >
            Get Quote
          </Link>
        </div>
      </div>
    </>
  );
}

/* ── Logo ── */
function Logo() {
  return (
    <div className="nb-logo">
      <div className="nb-icon-box">
        <img src={logo} alt="BSPC logo" className="nb-logo-img" />
      </div>
      <div>
        <h1 className="brand nb-brandname">
          BSP<span style={{ color: "#dc2626" }}>C</span>
        </h1>
        <p className="nb-subtitle">Iron Casting · Est. 2013</p>
      </div>
      <div className="nb-pulse" />
    </div>
  );
}

/* ── Desktop nav links ── */
function DesktopLinks({ phase }) {
  const iconSize = phase === "top" ? 17 : 15;
  return (
    <div className="nb-links">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) => `nb-link${isActive ? " is-active" : ""}`}
          onMouseEnter={() => preloadRoute(item.to)}
          onFocus={() => preloadRoute(item.to)}
          onTouchStart={() => preloadRoute(item.to)}
        >
          {({ isActive }) => (
            <>
              <item.icon
                size={iconSize}
                className="nb-ico"
                style={{
                  color: isActive ? "#dc2626" : "#555",
                  filter: isActive
                    ? "drop-shadow(0 0 5px rgba(220,38,38,0.6))"
                    : "none",
                }}
              />
              <span
                className="nb-lbl"
                style={{
                  color: isActive ? "#dc2626" : "#555",
                  textShadow: isActive
                    ? "0 0 10px rgba(220,38,38,0.5)"
                    : "none",
                }}
              >
                {item.label}
              </span>
              <div
                className="nb-bar"
                style={{
                  width: isActive ? "75%" : "0%",
                  opacity: isActive ? 1 : 0,
                }}
              />
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
}
