import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Factory,
  Settings,
  Cog,
  CheckCircle,
  Building2,
  Flame,
  ShieldCheck,
  ArrowUpRight,
  Award,
  CheckCircle2,
  ArrowRight,
  Mail,
  MessageSquare,
} from "lucide-react";
import omPrakash from "../assets/om-prakash.avif";
import bhupendra from "../assets/bhupendra-kundra.jpeg";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const ref = useRef(null);

  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // 🎥 video zoom
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // 📝 text animation
  const textY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // ✅ ADDED SMOOTHING (nothing removed)
  const smoothY = useSpring(textY, {
    stiffness: 60,
    damping: 25,
    mass: 0.8,
  });

  const smoothOpacity = useSpring(textOpacity, {
    stiffness: 60,
    damping: 25,
  });

  // about section animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const featureContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const featureCard = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.8, 0.25, 1], // smooth premium easing
      },
    },
  };

  // WHY BSPC features
  const features = [
    {
      icon: <Building2 size={24} />,
      title: "Bhiwadi Hub",
      desc: "Strategically located in India's premier industrial casting corridor.",
    },
    {
      icon: <Factory size={24} />,
      title: "OEM Expertise",
      desc: "Delivering high-precision components to global and domestic OEMs.",
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Certified Quality",
      desc: "Rigorous inspection systems ensuring 100% process compliance.",
    },
    {
      icon: <Settings size={24} />,
      title: "Single Window",
      desc: "Complete solution from raw casting to final precision machining.",
    },
  ];

  // CApabilities section

  const data = [
    {
      icon: "🏭",
      title: "Investment Casting",
      desc: "Producing near-net shape components with excellent surface finish and dimensional accuracy.",
    },
    {
      icon: "🎯",
      title: "Precision Machining",
      desc: "CNC turning and milling centers delivering tolerances up to ±0.05mm for high-performance needs.",
    },
    {
      icon: "🔬",
      title: "Quality Inspection",
      desc: "Equipped with Spectrometers, CMM, and NDT facilities for 100% material & dimensional verification.",
    },
  ];

  const team = [
    {
      name: "OM Prakash",
      role: "Founder & Director",
      exp: "20+ years in precision casting industry",
      image: omPrakash,
    },
    {
      name: "Bhupendra Singh Kundra",
      role: "Founder & CEO",
      exp: "8+ Years in precision casting industry",
      image: bhupendra,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Stagger each card animation
      },
    },
  };

  // Industries section

  const fadeInRight = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 20, duration: 0.8 },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 20, duration: 0.8 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  //Industriess we serve
  const industries = [
    "Bathware Products",
    "Automobile Products",
    "Civil Industrial Products",
    "Fire Fighting Equipment",
    "Precision Casting",
  ];

  // Animation for the infinite marquee
  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="bg-transparent text-gray-100">
      <div>
        {/* HERO */}

        <section
          ref={ref}
          className="relative h-[80vh] flex items-center justify-center text-center px-4 overflow-hidden"
        >
          {/* LIGHTWEIGHT BACKGROUND */}
          <motion.div
            style={{ scale }}
            className="hero-cloudflare-bg absolute inset-0"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* ORANGE GLOW */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-transparent"></div>

          {/* 🔥 REALISTIC SPARK EFFECT */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(25)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: -200, opacity: [0, 1, 0] }}
                transition={{
                  duration: 2 + ((i * 7) % 10) / 5,
                  repeat: Infinity,
                  delay: ((i * 11) % 20) / 10,
                }}
                className="absolute w-[2px] h-[2px] bg-orange-400 rounded-full"
                style={{
                  left: `${(i * 37) % 100}%`,
                  bottom: "0%",
                }}
              ></motion.span>
            ))}
          </div>

          {/* CONTENT (ONLY STYLE CHANGED) */}
          <motion.div
            style={{ y: smoothY, opacity: smoothOpacity }} // ✅ changed here
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 sticky top-0 h-screen flex flex-col items-center justify-center will-change-transform"
          >
            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              B.S PRECISION{" "}
              <span className="text-red-600 drop-shadow-[0_0_12px_rgba(255,115,0,0.9)]">
                CASTING
              </span>
            </h1>

            {/* 🔥 TYPING ANIMATION */}
            <p className="mt-4 text-lg text-gray-200">
              <Typewriter
                words={[
                  "Near Net Shape Manufacturing",
                  "Cost Effective Solutions",
                  "High Quality Engineering",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </p>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-orange-500 px-6 py-3 rounded-lg text-white hover:bg-orange-600 transition shadow-lg shadow-orange-500/30"
              onClick={() => navigate("/contact")}
            >
              Get a Quote
            </motion.button>
          </motion.div>

          {/* SCROLL INDICATOR */}
          <div className="absolute bottom-6 flex flex-col items-center text-white animate-bounce">
            <span className="text-sm">Scroll</span>
            <div className="w-[2px] h-6 bg-white mt-1"></div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="relative overflow-hidden bg-black/20 py-24 px-4 text-white">
          {/* Steel / Foundry background accents */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Industrial Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Strong vertical steel lines */}

            {/* 🔥 NEW: Glowing red vertical lines */}
            {/* 🔥 Heat glow overlay */}
            <div
              className="absolute inset-0 
  bg-[linear-gradient(to_right,rgba(220,38,38,0.15),transparent,rgba(220,38,38,0.15))]
  blur-3xl opacity-40"
            />

            {/* Molten metal glows (Matching the mob-glow from your navbar) */}
            <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-red-600/10 blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-900/10 blur-[120px]" />

            {/* Subtle texture overlay */}
            <div className="absolute inset-0 bg-[url('//assets.steel-texture-1.png')] opacity-[0.02] mix-blend-overlay" />
          </div>

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
            {/* LEFT CONTENT */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-2xl"
            >
              {/* Tag */}
              <motion.div
                variants={item}
                className="mb-5 flex items-center gap-3"
              >
                <div className="h-[2px] w-12 bg-red-600" />
                <p className="text-sm font-semibold tracking-[0.25em] text-red-500">
                  ABOUT BSPC
                </p>
              </motion.div>

              {/* Heading */}
              <motion.h2
                variants={item}
                className="mb-6 text-4xl font-black leading-tight md:text-6xl text-white"
              >
                Engineering Strength <br />
                Through{" "}
                <span className="relative inline-block text-red-600">
                  Precision Casting
                  <span className="absolute left-0 -bottom-2 h-1 w-full rounded-full bg-red-600/50" />
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={item}
                className="mb-5 max-w-xl text-[15px] leading-8 text-gray-400 md:text-base"
              >
                B.S Precision Casting (BSPC), established in 2025 at Bhiwadi, is
                a trusted manufacturer of precision investment castings. We
                specialize in producing high-performance engineering components
                with near net shape technology, ensuring reduced machining and
                cost efficiency.
              </motion.p>

              {/* Sub text */}
              <motion.div
                variants={item}
                className="border-l-4 border-red-600 pl-4"
              >
                <p className="text-sm leading-7 text-gray-500">
                  Our focus on quality, innovation, and reliability makes us a
                  preferred partner across multiple industrial sectors.
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div
                variants={item}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <button
                  className="group relative overflow-hidden rounded-full bg-white px-7 py-3.5 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(220,38,38,0.2)]"
                  onClick={() => navigate("/about")}
                >
                  <span className="relative z-10 group-hover:text-white">
                    Learn More
                  </span>
                  <span className="absolute inset-0 translate-y-full bg-red-600 transition-transform duration-300 group-hover:translate-y-0" />
                </button>

                <button
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-red-600 hover:text-red-600"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </motion.div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              variants={featureContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-6"
            >
              {/* Card 1 - Dark Glassmorphism */}
              <motion.div
                variants={featureCard}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-[24px] border border-white/5 bg-white/[0.03] p-6 backdrop-blur-sm"
              >
                <div className="relative z-10 flex items-start gap-4">
                  <div className="rounded-2xl border border-red-600/20 bg-red-600/10 p-3 transition-all duration-300 group-hover:bg-red-600">
                    <Cog className="h-6 w-6 text-red-500 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white">
                      Precision Engineering
                    </h3>
                    <p className="text-sm leading-7 text-gray-400">
                      High dimensional accuracy with advanced casting processes.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - Red Accent Card */}
              <motion.div
                variants={featureCard}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-[24px] border border-red-600/20 bg-[#121212] p-6 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="rounded-2xl bg-red-600 p-3">
                    <Flame className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white">
                      Efficient Production
                    </h3>
                    <p className="text-sm leading-7 text-gray-300">
                      Cost-effective manufacturing with optimized workflows.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 - Minimal Dark */}
              <motion.div
                variants={featureCard}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-[24px] border border-white/5 bg-white/[0.03] p-6"
              >
                <div className="relative z-10 flex items-start gap-4">
                  <div className="rounded-2xl bg-white/10 p-3 group-hover:bg-red-600">
                    <ShieldCheck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white">
                      Quality Assurance
                    </h3>
                    <p className="text-sm leading-7 text-gray-400">
                      Strict inspection ensures durability and performance.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ─── LEADERSHIP TEAM ─── */}
        <section className="relative overflow-hidden bg-black/20 py-12 px-4">
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black text-white"
              >
                Our <span className="text-red-600">Leadership</span>
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-visible rounded-2xl border border-white/5 bg-white/[0.03] cursor-default transition-all hover:border-red-600/30"
                >
                  {/* Image wrapper — overflow hidden only here */}
                  <div className="relative w-full aspect-[3/3] overflow-hidden rounded-t-2xl bg-white/5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Red gradient bar at bottom of image */}
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-600 to-transparent" />
                  </div>

                  {/* Initials badge — sits OUTSIDE image div, overlapping both */}
                  {/* Content */}
                  <div className="px-6 pt-8 pb-6 rounded-b-2xl">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red-500 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-red-600 text-xs font-bold tracking-[0.15em] uppercase mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm">{member.exp}</p>
                    <div className="mt-4 h-[2px] w-0 bg-red-600 group-hover:w-1/2 transition-all duration-500 rounded-full" />
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-red-600/10 via-transparent to-transparent transition-opacity pointer-events-none rounded-2xl" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY BSPC */}
        <section className="relative overflow-hidden bg-transparent px-4 ">
          {/* --- BACKGROUND EFFECTS --- */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Subtle Dark Grid */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:45px_45px]" />

            {/* Pulsing Red Heat Glows */}
            <div className="absolute top-[-10%] left-[5%] w-[450px] h-[450px] bg-red-600/10 blur-[130px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[5%] w-[400px] h-[400px] bg-red-900/10 blur-[110px] rounded-full" />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* HEADER */}
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black text-white tracking-tight"
              >
                Why <span className="text-red-600">BSPC</span>
              </motion.h2>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "120px" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mt-5 h-[3px] mx-auto rounded-full bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_15px_rgba(220,38,38,0.6)]"
              />
            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative flex items-start gap-6 rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-md transition-all duration-300 hover:border-red-600/30 hover:bg-white/[0.04]"
                >
                  {/* Icon - Glows on Hover */}
                  <div className="flex-shrink-0 text-white bg-red-600 p-4 rounded-xl shadow-[0_8px_20px_rgba(220,38,38,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:bg-red-500 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                    {item.icon}
                  </div>

                  {/* Text Content */}
                  <div className="relative flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white mb-2 transition-colors group-hover:text-red-500">
                        {item.title}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        className="text-white/20 transition-all group-hover:text-red-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                    <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300">
                      {item.desc}
                    </p>
                  </div>

                  {/* Decorative Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-tr-2xl" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="relative overflow-hidden bg-transparent py-24 px-4">
          {/* --- PREMIUM DYNAMIC BACKGROUND --- */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Subtle Dark Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.05]" />

            {/* Dynamic Pulsing "Foundry Glow" Gradients */}
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-red-600/10 blur-[130px] animate-pulse" />
            <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-red-900/15 blur-[150px]" />
          </div>

          {/* --- CONTENT LAYER --- */}
          <div className="relative z-10 mx-auto max-w-7xl">
            {/* Modern Centered Heading */}
            <div className="text-center mb-20">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
              >
                Manufacturing{" "}
                <span className="relative inline-block text-red-600">
                  Capabilities
                  {/* Decorative Underline */}
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                    className="absolute left-0 bottom-[-10px] h-1 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.7)]"
                  />
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8 max-w-2xl mx-auto text-xl text-gray-400"
              >
                Leveraging cutting-edge casting technology and precision
                machining to deliver superior quality engineering components.
              </motion.p>
            </div>

            {/* --- CARDS GRID (Animated on Scroll) --- */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Animate once, when 20% visible
              className="grid md:grid-cols-3 gap-10"
            >
              {data.map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative rounded-3xl border border-white/5 bg-black/40 p-10 text-center shadow-xl backdrop-blur-xl transition duration-300 ease-in-out hover:border-red-600/30 hover:shadow-[0_0_60px_-15px_rgba(220,38,38,0.3)] cursor-pointer"
                >
                  {/* Internal Glow on Hover */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.15),transparent_60%)] pointer-events-none" />

                  {/* Advanced Icon Container */}
                  <div className="flex justify-center mb-8 relative">
                    <div className="absolute inset-0 bg-red-600/20 blur-2xl rounded-full scale-110 opacity-60 group-hover:opacity-100 group-hover:scale-125 transition duration-500" />
                    <div className="relative z-10 rounded-2xl border border-red-600/30 bg-red-600 p-6 text-white shadow-[0_10px_20px_rgba(220,38,38,0.3)] transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110 group-hover:shadow-[0_15px_30px_rgba(220,38,38,0.5)]">
                      {/* Using Lucide Icon or Placeholder */}
                      {/* <Zap className="w-10 h-10" /> */}
                      <div className="text-5xl">{item.icon}</div>
                    </div>
                  </div>

                  {/* Main Title */}
                  <h3 className="text-3xl font-extrabold text-white tracking-tight transition group-hover:text-red-500 group-hover:shadow-[0_0_10px_#dc2626]">
                    {item.title}
                  </h3>

                  {/* Description (Higher contrast text) */}
                  <p className="mt-5 text-base leading-relaxed text-gray-300 transition group-hover:text-gray-200">
                    {item.desc}
                  </p>

                  {/* Decorative Red Line at Bottom (appears on hover) */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 bg-red-600 group-hover:w-1/2 transition-all duration-500 rounded-full shadow-[0_0_15px_#dc2626]" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FACTORY IMAGE SECTION */}
        <section className="relative bg-transparent py-24 px-4 overflow-hidden">
          {/* Dynamic Background Glows */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.08, 0.15, 0.08],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-600 rounded-full blur-[150px]"
            />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-900/10 blur-[120px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* LEFT SIDE: IMAGE WITH CONTINUOUS FLOATING ANIMATION */}
              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                {/* Main Image Wrapper */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                  <img
                    src="https://lh3.googleusercontent.com/p/AF1QipOWKl-AwEFDTFEAUy6QlhOfnYUf-iZgXyTDzzh7=s680-w680-h510-rw"
                    alt="BSPC Plant"
                    className="w-full h-[450px] object-cover"
                  />
                </motion.div>

                {/* Red Corner Border - Animated */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-red-600 rounded-tl-2xl z-20"
                />

                {/* Floating Glass Stat Card - Counter Float Animation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  animate={{ y: [0, 15, 0] }}
                  transition={{
                    initial: { delay: 0.7 },
                    animate: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    },
                  }}
                  className="absolute -bottom-8 -right-8 bg-black/60 backdrop-blur-xl border border-white/10 p-7 rounded-2xl shadow-2xl z-20 hidden md:block"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-red-600 p-3 rounded-lg text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                      <Award size={24} />
                    </div>
                    <div>
                      <p className="text-3xl font-black text-white">50+</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                        Monthly Tons
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* RIGHT SIDE: STAGGERED TEXT CONTENT */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  variants={listItem}
                  className="flex items-center gap-3 mb-6"
                >
                  <span className="h-[2px] w-8 bg-red-600"></span>
                  <span className="text-red-500 font-bold tracking-widest uppercase text-sm">
                    Our Presence
                  </span>
                </motion.div>

                <motion.h2
                  variants={listItem}
                  className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight"
                >
                  A Legacy of <br />
                  <span className="text-red-600">Casting Excellence</span>
                </motion.h2>

                <motion.p
                  variants={listItem}
                  className="text-gray-400 text-lg leading-relaxed mb-8"
                >
                  B.S Precision Casting (BSPC) operates out of a
                  state-of-the-art facility in Bhiwadi, delivering
                  mission-critical components with near-net-shape accuracy.
                </motion.p>

                {/* Animated List Items */}
                <div className="space-y-5 mb-10">
                  {[
                    "ISO 9001:2015 Certified Operations",
                    "Advanced NDT & Chemical Analysis Lab",
                    "Global Export Network across 12+ Countries",
                  ].map((text, idx) => (
                    <motion.div
                      key={idx}
                      variants={listItem}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 text-white font-medium group cursor-default"
                    >
                      <div className="bg-red-600/10 p-1 rounded-full text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <CheckCircle2 size={20} />
                      </div>
                      {text}
                    </motion.div>
                  ))}
                </div>

                {/* Button with Hover Slide Effect */}
                <motion.button
                  variants={listItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center gap-3 bg-red-600 overflow-hidden text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg shadow-red-600/30"
                >
                  <span className="relative z-10">Download Brochure</span>
                  <ArrowRight
                    className="relative z-10 transition-transform group-hover:translate-x-2"
                    size={20}
                  />
                  <div className="absolute inset-0 bg-red-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="relative overflow-hidden bg-transparent px-4">
          {/* Background Decorative Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-600/5 blur-[100px] rounded-full" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl">
            {/* Header */}
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black text-white tracking-tight"
              >
                Industries We <span className="text-red-600">Serve</span>
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 1 }}
                className="h-1 bg-red-600 mx-auto mt-4 rounded-full shadow-[0_0_10px_#dc2626]"
              />
            </div>

            {/* --- INFINITE MARQUEE ROW --- */}
            <div className="relative flex overflow-hidden py-10 mask-gradient">
              <motion.div
                className="flex whitespace-nowrap gap-6"
                variants={marqueeVariants}
                animate="animate"
              >
                {[...industries, ...industries].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative group cursor-default overflow-hidden rounded-xl border border-white/10 bg-black/40 px-10 py-6 backdrop-blur-xl transition-all duration-300 hover:border-red-600/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]"
                  >
                    {/* Scanning Light Effect on Hover */}
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

                    <span className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors">
                      {item}
                    </span>

                    {/* Top Red Indicator Line */}
                    <div className="absolute top-0 left-0 h-[2px] w-0 bg-red-600 group-hover:w-full transition-all duration-500" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Fade edges for the marquee */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
            </div>

            {/* --- SUB-TAGS SECTION --- */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
            >
              {["CIVIL", "FIREARMS", "RAILWAYS", "MACHINES"].map((sub, idx) => (
                <span
                  key={idx}
                  className="text-xs font-bold uppercase tracking-widest text-gray-500 border border-white/5 px-4 py-2 rounded-full hover:text-red-500 hover:border-red-500/30 transition-all cursor-pointer"
                >
                  • {sub}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Custom Fade CSS for Marquee (Add to global CSS or Style Tag) */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `,
            }}
          />
        </section>

        {/* CTA */}
        <section className="relative py-24 px-4 overflow-hidden">
          {/* --- BACKGROUND ANCHOR --- */}
          <div className="absolute inset-0 z-0">
            {/* Deep Red Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[140px] rounded-full animate-pulse" />
            {/* Subtle Grid dots */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(#ffffff 0.5px, transparent 0.5px)",
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 md:p-16 text-center backdrop-blur-2xl shadow-2xl"
            >
              {/* Animated Top Red Line */}
              <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_15px_#dc2626]" />

              {/* Icon Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-red-600 shadow-[0_0_30px_rgba(220,38,38,0.4)]"
              >
                <MessageSquare size={36} className="text-white" />
              </motion.div>

              {/* Heading */}
              <h2 className="mb-6 text-4xl md:text-6xl font-black text-white leading-tight">
                Ready to Cast Your <br />
                <span className="text-red-600">Next Big Project?</span>
              </h2>

              <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 leading-relaxed">
                Get high-quality, cost-effective components tailored to your
                needs. Our engineering team is ready to transform your designs
                into precision-cast reality.
              </p>

              {/* BUTTON GROUP */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center gap-3 bg-red-600 px-10 py-5 rounded-full font-bold text-white shadow-[0_15px_30px_rgba(220,38,38,0.3)] transition-all hover:bg-red-700"
                  onClick={() => navigate("/contact")}
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight
                    className="transition-transform group-hover:translate-x-2"
                    size={20}
                  />
                </motion.button>

                <motion.button
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-2 text-white font-semibold hover:text-red-500 transition-colors"
                  onClick={() =>
                    window.open("mailto:b.sprecasting7878@gmai.com", "_blank")
                  }
                >
                  <Mail size={18} className="text-red-600" />
                  Email our Experts
                </motion.button>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-600/5 blur-3xl rounded-full" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/5 blur-3xl rounded-full" />
            </motion.div>

            {/* TRUST TAGS */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
            >
              {[
                "ISO 9001:2015",
                "NABL ACCREDITED",
                "OEM APPROVED",
                "EXPORT CERTIFIED",
              ].map((cert) => (
                <span
                  key={cert}
                  className="text-xs font-bold tracking-[0.3em] text-white"
                >
                  {cert}
                </span>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      {/* BLUR FOOTER (unchanged) */}
    </div>
  );
}
