import { motion } from "framer-motion";
import contactBanner from "../assets/contact-banne.png";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  ChevronDown,
  Upload,
  Send,
  Headphones,
} from "lucide-react";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const contactDetails = [
  {
    icon: <MapPin size={22} />,
    label: "Factory Address",
    value:
      "H1-757, RIICO Industrial Area, Khushkhera, Tapukara-301707, Rajasthan, India",
    href: "https://maps.app.goo.gl/PcA2McJiLdJgcf5P8",
    cta: "Get Directions →",
  },
  {
    icon: <Phone size={22} />,
    label: "Call Us",
    value: "+7878149147",
    href: "tel:+917878149147",
    cta: "Click to Call →",
  },
  {
    icon: <Mail size={22} />,
    label: "Email",
    value: "b.sprecasting7878@gmail.com",
    href: "mailto:b.sprecasting7878@gmail.com",
    cta: "Send Email →",
  },
  {
    icon: <Clock size={22} />,
    label: "Working Hours",
    value: "Monday – Saturday: 8:00 AM – 8:00 PM",
    href: null,
    cta: null,
  },
];

const trustPoints = [
  "Established Casting Facility in Bhiwadi",
  "Custom Iron Casting Based on Drawings",
  "Serving OEMs Across Automotive & Industrial Sectors",
  "ISO 9001:2015 Certified Quality Systems",
  "Fast Turnaround with Competitive Pricing",
];

const faqs = [
  {
    q: "What is your minimum order quantity?",
    a: "Our MOQ varies by component complexity. For standard investment castings, we typically start from 100 pieces. Contact us with your drawings for a precise quote.",
  },
  {
    q: "Do you provide custom casting based on drawings?",
    a: "Yes. We accept 2D drawings, 3D CAD models (STEP / IGES), and samples. Our engineering team will review feasibility and suggest the optimal casting process.",
  },
  {
    q: "What materials do you work with?",
    a: "We primarily work with Carbon Steel, Stainless Steel, Alloy Steel, and Duplex grades. Specific grades can be discussed based on application requirements.",
  },
  {
    q: "What is your typical delivery timeline?",
    a: "First article samples (FAI) are usually ready in 3–5 weeks. Repeat production runs vary from 4–8 weeks depending on quantity and complexity.",
  },
  {
    q: "Do you export internationally?",
    a: "Yes, BSPC exports to 12+ countries. We handle all export documentation, NABL lab reports, and can meet buyer-specified quality norms.",
  },
];

const contactEmail = "b.sprecasting7878@gmail.com";
const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      layout
      onClick={() => setOpen(!open)}
      className="group cursor-pointer rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-md transition-all duration-300 hover:border-red-600/30 hover:bg-white/[0.04]"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-base font-semibold text-white group-hover:text-red-400 transition-colors">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-red-500"
        >
          <ChevronDown size={20} />
        </motion.span>
      </div>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <p className="mt-4 text-sm leading-7 text-gray-400">{a}</p>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Contact() {
  const [fileName, setFileName] = useState(null);

  const handleFile = (e) => {
    if (e.target.files[0]) setFileName(e.target.files[0].name);
  };

  return (
    <div className="bg-transparent text-gray-100">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-4 py-32 text-center">
        {/* Background Image */}
        <img
          src={contactBanner}
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ objectPosition: "center" }}
        />
        {/* Background Glows */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-600/10 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-900/10 blur-[120px] rounded-full" />
        </div>

        {/* Sparks */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.span
              key={i}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: -180, opacity: [0, 1, 0] }}
              transition={{
                duration: 2 + ((i * 7) % 10) / 5,
                repeat: Infinity,
                delay: ((i * 13) % 30) / 10,
              }}
              className="absolute w-[2px] h-[2px] bg-orange-400 rounded-full"
              style={{ left: `${(i * 37) % 100}%`, bottom: "0%" }}
            />
          ))}
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-4xl mx-auto"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-10 bg-red-600" />
            <span className="text-sm font-semibold tracking-[0.25em] text-red-500 uppercase">
              Contact BSPC
            </span>
            <div className="h-[2px] w-10 bg-red-600" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-7xl font-black text-white leading-tight mb-6"
          >
            Talk With Our{" "}
            <span className="relative inline-block text-red-600">
              Casting Experts
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="absolute left-0 -bottom-2 h-1 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.7)]"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Share your component drawings, target quantities, and quality
            expectations — we'll help shape the right production path.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact-form"
              className="group relative flex items-center gap-3 bg-red-600 px-8 py-4 rounded-full font-bold text-white shadow-[0_15px_30px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all overflow-hidden"
            >
              <span className="relative z-10">Request a Quote</span>
              <ArrowRight
                className="relative z-10 transition-transform group-hover:translate-x-1"
                size={18}
              />
              <div className="absolute inset-0 bg-red-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            <a
              href="tel:+917878149147"
              className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-4 text-sm font-semibold text-white hover:border-red-600 hover:text-red-500 transition-all"
            >
              <Phone size={16} /> Call Now
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── CONTACT DETAILS + FORM ────────────────────────────────────────── */}
      <section
        id="contact-form"
        className="relative py-24 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-0 w-80 h-80 bg-red-600/8 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-red-900/8 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT: Contact Details */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              variants={fadeLeft}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-8 bg-red-600" />
              <span className="text-red-500 font-bold tracking-widest uppercase text-sm">
                Get In Touch
              </span>
            </motion.div>

            <motion.h2
              variants={fadeLeft}
              className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
            >
              We're Ready to{" "}
              <span className="text-red-600">Support Your Project</span>
            </motion.h2>

            <motion.p
              variants={fadeLeft}
              className="text-gray-400 leading-relaxed mb-10"
            >
              From custom casting to bulk production, our team in Bhiwadi is
              ready to review your requirements and align the right casting,
              machining, and finishing approach for your parts.
            </motion.p>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactDetails.map((c, i) => (
                <motion.div
                  key={i}
                  variants={fadeLeft}
                  whileHover={{ x: 6 }}
                  className="group flex items-start gap-5 rounded-2xl border border-white/5 bg-white/[0.02] p-5 backdrop-blur-sm transition-all hover:border-red-600/30 hover:bg-white/[0.04]"
                >
                  <div className="flex-shrink-0 rounded-xl bg-red-600/10 border border-red-600/20 p-3 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                      {c.label}
                    </p>
                    <p className="text-white font-medium text-sm leading-relaxed">
                      {c.value}
                    </p>
                    {c.href && (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-red-500 hover:text-red-400 transition-colors mt-1 inline-block"
                      >
                        {c.cta}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp Quick Action */}
            <motion.a
              variants={fadeLeft}
              href="https://wa.me/917878149147?text=Hello%20BSPC%2C%20I%20would%20like%20to%20inquire%20about%20your%20casting%20services.%20Please%20let%20me%20know%20how%20I%20can%20share%20my%20component%20drawings%20and%20requirements."
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 flex items-center gap-4 rounded-2xl border border-green-500/20 bg-green-500/5 p-5 group hover:bg-green-500/10 hover:border-green-500/40 transition-all"
            >
              <div className="rounded-xl bg-green-500 p-3 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                {/* WhatsApp icon via SVG inline */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-5 h-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  Chat on WhatsApp
                </p>
                <p className="text-gray-400 text-xs">
                  Quick responses during business hours
                </p>
              </div>
              <ArrowRight
                size={16}
                className="ml-auto text-green-400 transition-transform group-hover:translate-x-1"
              />
            </motion.a>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              variants={fadeRight}
              className="relative rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 md:p-10 backdrop-blur-xl shadow-2xl overflow-hidden"
            >
              {/* Top Glow Line */}
              <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />

              <div className="flex items-center gap-3 mb-8">
                <div className="rounded-xl bg-red-600 p-3 shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                  <Headphones size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">
                    Send Us Your Requirements
                  </h3>
                  <p className="text-gray-500 text-xs">
                    We respond within 24 business hours
                  </p>
                </div>
              </div>

              <form
                action={
                  web3FormsAccessKey
                    ? "https://api.web3forms.com/submit"
                    : `https://formsubmit.co/${contactEmail}`
                }
                method="POST"
                encType="multipart/form-data"
                className="space-y-5"
              >
                {web3FormsAccessKey && (
                  <input
                    type="hidden"
                    name="access_key"
                    value={web3FormsAccessKey}
                  />
                )}
                <input
                  type="hidden"
                  name="_subject"
                  value="New BSPC Requirement Form Submission"
                />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="from_name" value="BSPC Website" />
                <input type="checkbox" name="botcheck" className="hidden" />
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      label: "Full Name *",
                      placeholder: "Your name",
                      type: "text",
                      name: "Full Name",
                      required: true,
                    },
                    {
                      label: "Company Name",
                      placeholder: "Your company",
                      type: "text",
                      name: "Company Name",
                      required: false,
                    },
                  ].map((f, i) => (
                    <div key={i}>
                      <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        name={f.name}
                        placeholder={f.placeholder}
                        required={f.required}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-600/50 focus:bg-white/[0.06] transition-all"
                      />
                    </div>
                  ))}
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      label: "Email Address *",
                      placeholder: "you@company.com",
                      type: "email",
                      name: "email",
                      required: true,
                    },
                    {
                      label: "Phone Number *",
                      placeholder: "+91 XXXXX XXXXX",
                      type: "tel",
                      name: "Phone Number",
                      required: true,
                    },
                  ].map((f, i) => (
                    <div key={i}>
                      <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        name={f.name}
                        placeholder={f.placeholder}
                        required={f.required}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-600/50 focus:bg-white/[0.06] transition-all"
                      />
                    </div>
                  ))}
                </div>

                {/* Row 3 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                      Product Requirement
                    </label>
                    <select
                      name="Product Requirement"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-red-600/50 transition-all appearance-none"
                    >
                      <option value="" className="bg-[#111]">
                        Select type
                      </option>
                      <option className="bg-[#111]">Investment Casting</option>
                      <option className="bg-[#111]">Precision Machining</option>
                      <option className="bg-[#111]">Complete Component</option>
                      <option className="bg-[#111]">Prototype / Sample</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                      Quantity Needed
                    </label>
                    <input
                      type="text"
                      name="Quantity Needed"
                      placeholder="e.g. 500 pcs / month"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-600/50 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Project Details / Message
                  </label>
                  <textarea
                    rows={4}
                    name="Project Details / Message"
                    placeholder="Describe your component, material grade, tolerances, or any special requirements…"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-600/50 focus:bg-white/[0.06] transition-all resize-none"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Upload Drawing / CAD File
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer rounded-xl border border-dashed border-white/10 bg-white/[0.02] px-4 py-4 hover:border-red-600/30 hover:bg-white/[0.04] transition-all group">
                    <Upload
                      size={18}
                      className="text-red-500 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-sm text-gray-500">
                      {fileName ? (
                        <span className="text-red-400">{fileName}</span>
                      ) : (
                        "Drop file or click to upload (DWG, STEP, PDF)"
                      )}
                    </span>
                    <input
                      type="file"
                      name="Drawing / CAD File"
                      className="hidden"
                      onChange={handleFile}
                      accept=".pdf,.dwg,.step,.stp,.iges,.igs"
                    />
                  </label>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="group w-full relative flex items-center justify-center gap-3 bg-red-600 rounded-xl py-4 font-bold text-white overflow-hidden shadow-[0_10px_30px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all"
                >
                  <span className="relative z-10">Send My Requirements</span>
                  <Send
                    size={16}
                    className="relative z-10 transition-transform group-hover:translate-x-1"
                  />
                </motion.button>

                <p className="text-center text-xs text-gray-600">
                  Your information is confidential and never shared.
                </p>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── GOOGLE MAP ──────────────────────────────────────────────────────── */}
      <section className="relative px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl"
          >
            <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-red-600 to-transparent z-10" />
            <iframe
              title="BSPC Factory Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56278.314319782374!2d76.7675179!3d28.1649111!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d4bac3ed4fb09%3A0x205c1be5ebd2dfde!2sB.S%20PRECISION%20CASTING!5e0!3m2!1sen!2sin!4v1777198562852!5m2!1sen!2sin"
            
              width="100%"
              height="380"
              style={{
                border: 0,
                filter: "invert(90%) hue-rotate(180deg) saturate(0.4)",
              }}
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* ── WHY CONTACT US (TRUST SECTION) ──────────────────────────────── */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/8 blur-[150px] rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-3 mb-4"
              >
                <div className="h-[2px] w-8 bg-red-600" />
                <span className="text-red-500 font-bold tracking-widest uppercase text-sm">
                  Why Choose Us
                </span>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight"
              >
                Trusted by{" "}
                <span className="text-red-600">OEMs Across India</span>
              </motion.h2>

              <div className="space-y-4">
                {trustPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    <div className="flex-shrink-0 bg-red-600/10 p-1 rounded-full text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stat Cards */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: "1500+", label: "Monthly Tons Produced" },
                { value: "12+", label: "Countries Exported To" },
                { value: "ISO", label: "9001:2015 Certified" },
                { value: "100%", label: "Quality Inspection" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-7 text-center backdrop-blur-sm transition-all hover:border-red-600/30 hover:shadow-[0_0_40px_-10px_rgba(220,38,38,0.3)] overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.12),transparent_70%)] transition-opacity" />
                  <p className="text-4xl font-black text-red-500 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    {stat.label}
                  </p>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-red-600 group-hover:w-1/2 transition-all duration-500 rounded-full" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/8 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white"
            >
              Frequently Asked <span className="text-red-600">Questions</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 1 }}
              className="h-1 bg-red-600 mx-auto mt-4 rounded-full shadow-[0_0_10px_#dc2626]"
            />
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FAQItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-16 text-center backdrop-blur-2xl shadow-2xl"
          >
            <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_15px_#dc2626]" />

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-red-600 shadow-[0_0_30px_rgba(220,38,38,0.4)]"
            >
              <MessageSquare size={36} className="text-white" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight">
              Ready to Start Your{" "}
              <span className="text-red-600">Next Casting Project?</span>
            </h2>

            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Get high-quality, cost-effective components tailored to your
              needs. Our team is ready to turn your designs into precision-cast
              reality.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 bg-red-600 px-10 py-5 rounded-full font-bold text-white shadow-[0_15px_30px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all"
              >
                Get a Free Quote
                <ArrowRight
                  className="transition-transform group-hover:translate-x-2"
                  size={18}
                />
              </motion.a>

              <motion.a
                href={`mailto:${contactEmail}`}
                whileHover={{ y: -3 }}
                className="flex items-center gap-2 text-white font-semibold hover:text-red-500 transition-colors"
              >
                <Mail size={18} className="text-red-600" />
                Email Our Experts
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4 opacity-40 hover:opacity-70 transition-opacity"
            >
              {[
                "ISO 9001:2015",
                "NABL Accredited",
                "OEM Approved",
                "Export Certified",
              ].map((c) => (
                <span
                  key={c}
                  className="text-xs font-bold tracking-[0.3em] text-white"
                >
                  {c}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
