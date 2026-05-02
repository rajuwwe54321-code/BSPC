import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Check,
} from "lucide-react";
import logo from "../assets/LOGO-removebg-preview.png";

const FacebookIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H17V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V11H7.5v3h2.8v8h3.2Z" />
  </svg>
);

const XIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.3L6.6 22H3.5l7.3-8.3L1 2h6.2l4.3 5.7L18.9 2Zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20Z" />
  </svg>
);

const LinkedInIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M6.9 8.7H3.7V20h3.2V8.7ZM5.3 7.3A1.9 1.9 0 1 0 5.3 3.5a1.9 1.9 0 0 0 0 3.8ZM20 13.1c0-3.4-1.8-5-4.3-5-2 0-2.9 1.1-3.4 1.9v-1.6H9.1c0 1 .1 11.6 0 11.6h3.2v-6.5c0-.4 0-.7.2-1 .3-.7 1-1.4 2.1-1.4 1.5 0 2.1 1.1 2.1 2.8V20H20v-6.9Z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 1.9A3.9 3.9 0 0 0 3.9 7.8v8.4a3.9 3.9 0 0 0 3.9 3.9h8.4a3.9 3.9 0 0 0 3.9-3.9V7.8a3.9 3.9 0 0 0-3.9-3.9H7.8Zm8.9 1.5a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Z" />
  </svg>
);

// Animated counter hook
function useCountUp(target, duration = 1200, delay = 400) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const step = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        setCount(Math.round(current));
        if (current >= target) clearInterval(timer);
      }, 16);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(timeout);
  }, [target, duration, delay]);
  return count;
}

const tickerItems = [
  "Investment Casting Experts",
  "ISO Certified Facility",
  "Bhiwadi, Rajasthan",
  "Automobile Parts",
  "Industrial Valves",
  "Bathware & Custom Castings",
  "Engineering Excellence",
  "Global Export Ready",
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const yearsCount = useCountUp(13);
  const clientsCount = useCountUp(50);
  const partsCount = useCountUp(2);

  const handleSubscribe = (event) => {
    event?.preventDefault();

    if (email.includes("@")) {
      const whatsappNumber = "7878149147";
      const message = `Hello B.S Precision Casting, I want to know more about your company and casting items. Please share details about investment casting products, custom casting options, quality standards, pricing, and delivery. My email is ${email}.`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 2500);
    }
  };

  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "Home", to: "/" },
        { label: "About Us", to: "/about" },
        { label: "Products", to: "/products" },
        { label: "Contact Us", to: "/contact" },
      ],
    },
    {
      title: "Products",
      links: [
        "Automobile Parts",
        "Bathware",
        "Industrial Valves",
        "Custom Castings",
      ],
    },
    {
      title: "Support",
      links: ["Get a Quote", "Technical Specs", "Privacy Policy", "Sitemap"],
    },
  ];

  const socialIcons = [FacebookIcon, XIcon, LinkedInIcon, InstagramIcon];
  const socialLabels = ["Facebook", "X / Twitter", "LinkedIn", "Instagram"];

  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden w-full">
      {/* Scanline overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.025] overflow-hidden">
        <div
          className="absolute left-0 w-full h-[2px] bg-white/50"
          style={{ animation: "scanline 6s linear infinite" }}
        />
      </div>

      {/* Glow backgrounds */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[350px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(220,38,38,0.09) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-16 -left-20 w-[300px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(220,38,38,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Dot grid right */}
      <div
        className="absolute right-0 top-0 w-[220px] h-full opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* ── Ticker ── */}
      <div
        className="relative z-10 overflow-hidden py-[10px]"
        style={{ background: "linear-gradient(90deg, #dc2626, #991b1b)" }}
      >
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "tickerScroll 22s linear infinite" }}
        >
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 px-12 text-[11px] font-bold uppercase tracking-widest opacity-95"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-white/40 inline-block" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Main grid ── */}
      <div
        className="relative z-10 grid grid-cols-1 gap-8 px-5 pt-12 pb-10
        sm:grid-cols-2 sm:px-8
        lg:grid-cols-4 lg:gap-12 lg:px-10 lg:pt-14"
      >
        {/* Brand col */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div
              className="relative h-9 w-9 rounded-[10px] flex items-center justify-center overflow-hidden flex-shrink-0 bg-white"
              style={{ animation: "shimmerLogo 3s infinite" }}
            >
              <img
                src={logo}
                alt="BSPC logo"
                className="h-full w-full object-contain p-1"
              />
              <span
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(45deg,transparent 30%,rgba(255,255,255,0.12) 50%,transparent 70%)",
                  backgroundSize: "200% auto",
                  animation: "shimmer 3s infinite",
                }}
              />
            </div>
            <span className="text-2xl font-black tracking-tighter">
              BS<span className="text-red-600">PC</span>
            </span>
          </div>

          <p className="text-sm leading-relaxed text-gray-400">
            Leading the way in high-precision investment casting. Engineering
            excellence from Bhiwadi to the world.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {["ISO Certified", "Since 2013", "Export Ready"].map((b) => (
              <span
                key={b}
                className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-red-600/30 text-red-300 bg-red-600/8"
              >
                {b}
              </span>
            ))}
          </div>

          {/* Subscribe */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-red-500 mb-2">
              Subscribe to updates
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex rounded-[10px] overflow-hidden border border-white/8 bg-white/3 focus-within:border-red-600/45 transition-all"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your email address"
                className="w-full bg-transparent px-4 py-[10px] text-sm outline-none text-white placeholder-gray-600"
              />
              <button
                type="submit"
                className="px-4 py-[10px] flex items-center justify-center transition-colors flex-shrink-0"
                style={{ background: subscribed ? "#16a34a" : "#dc2626" }}
                aria-label="Send update request on WhatsApp"
              >
                {subscribed ? <Check size={16} /> : <ArrowRight size={16} />}
              </button>
            </form>
          </div>
        </div>

        {/* Link columns */}
        {footerLinks.map((section, idx) => (
          <div key={idx} className="space-y-5">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500 flex items-center gap-2 after:flex-1 after:h-px after:bg-white/6">
              {section.title}
            </h4>
            <ul className="space-y-1">
              {section.title === "Company"
                ? section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        to={link.to}
                        className="group flex items-center gap-0 py-[7px] text-[13.5px] text-gray-400 hover:text-white transition-colors"
                      >
                        <span className="h-[1.5px] w-0 bg-red-600 group-hover:w-[14px] group-hover:mr-2 transition-all duration-200 flex-shrink-0" />
                        {link.label}
                        <span className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-red-600 text-xs">
                          ›
                        </span>
                      </Link>
                    </li>
                  ))
                : section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                        className="group flex items-center gap-0 py-[7px] text-[13.5px] text-gray-400 hover:text-white transition-colors"
                      >
                        <span className="h-[1.5px] w-0 bg-red-600 group-hover:w-[14px] group-hover:mr-2 transition-all duration-200 flex-shrink-0" />
                        {link}
                        <span className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-red-600 text-xs">
                          ›
                        </span>
                      </a>
                    </li>
                  ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Divider ── */}
      <div
        className="mx-5 sm:mx-8 lg:mx-10 h-px relative z-10"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />

      {/* ── Stats bar ── */}
      <div className="relative z-10 grid grid-cols-3 divide-x divide-white/6 px-5 sm:px-8 lg:px-10">
        {[
          { num: yearsCount, suffix: "+", label: "Years of Excellence" },
          { num: clientsCount, suffix: "+", label: "Global Clients" },
          { num: partsCount, suffix: "M+", label: "Parts Delivered" },
        ].map((s, i) => (
          <div key={i} className="py-7 text-center">
            <div className="text-2xl sm:text-3xl font-black tracking-tight leading-none">
              {s.num}
              <span className="text-red-600">{s.suffix}</span>
            </div>
            <div className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-widest text-gray-500 font-medium">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* ── Divider ── */}
      <div
        className="mx-5 sm:mx-8 lg:mx-10 h-px relative z-10"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />

      {/* ── Contact strip ── */}
      <div className="relative z-10 mx-5 my-8 sm:mx-8 lg:mx-10 grid grid-cols-1 sm:grid-cols-3 gap-[1px] rounded-2xl overflow-hidden bg-white/5">
        {[
          {
            Icon: Phone,
            label: "Call Us",
            value: "+7878149147",
            delay: "0s",
          },
          { Icon: Mail, label: "Email", value: "b.sprecasting7878@gmai.com", delay: "1s" },
          {
            Icon: MapPin,
            label: "Location",
            value: "H1-757, RIICO Industrial Area, Khushkhera, Tapukara-301707, Rajasthan, India",
            delay: "2s",
          },
        ].map(({ Icon, label, value, delay }, i) => (
          <div
            key={i}
            className="group relative flex items-center gap-4 bg-[#0f0f0f] px-7 py-6 overflow-hidden transition-transform hover:-translate-y-[1px] cursor-pointer"
          >
            <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-[0.06] transition-opacity" />
            <div
              className="relative z-10 flex-shrink-0 w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 group-hover:bg-red-600 group-hover:border-red-600"
              style={{
                background: "rgba(220,38,38,0.1)",
                borderColor: "rgba(220,38,38,0.2)",
                animation: `pulseRing 3s ${delay} infinite`,
              }}
            >
              <Icon
                size={20}
                className="text-red-600 group-hover:text-white transition-colors"
              />
            </div>
            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                {label}
              </p>
              <p className="mt-[2px] text-sm font-semibold text-gray-100">
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="relative z-10 border-t border-white/5 px-5 py-6 sm:px-8 lg:px-10
        flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="text-xs text-gray-500">
          © {currentYear} B.S Precision Casting. All rights reserved.
        </p>

        {/* Social icons */}
        <div className="flex gap-[10px]">
          {socialIcons.map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              title={socialLabels[i]}
              whileHover={{ y: -3, color: "#dc2626" }}
              className="w-[38px] h-[38px] rounded-full border border-white/8 bg-white/4 flex items-center justify-center text-gray-500 transition-all hover:border-red-600/50 hover:bg-red-600/7"
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-2 text-[11px] text-gray-500 border border-white/6 bg-white/2 rounded-full px-4 py-[6px]">
          <ShieldCheck size={13} className="text-red-600" />
          Secure ISO Certified Facility
        </div>
      </div>

      {/* ── Global keyframes ── */}
      <style>{`
        @keyframes tickerScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes pulseRing {
          0%,100% { box-shadow: 0 0 0 0 rgba(220,38,38,0); }
          50%      { box-shadow: 0 0 0 6px rgba(220,38,38,0.12); }
        }
        @keyframes scanline {
          0%   { top: -8px; }
          100% { top: 100%; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
