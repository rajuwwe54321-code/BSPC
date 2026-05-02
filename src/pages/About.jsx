import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  Users,
  Target,
  Eye,
  Heart,
  Cpu,
  Globe,
  Microscope,
  Wrench,
  BarChart3,
  Clock,
  Star,
  TrendingUp,
  MessageSquare,
  Layers,
  Zap,
  Shield,
} from "lucide-react";
import aboutBanner from "../assets/aout-banner.png";
import omPrakash from "../assets/om-prakash.AVIF"; // ← update filename
import bhupendra from "../assets/bhupendra-kundra.jpeg"; // ← update filename
const CountUp = ({ target, suffix = "", prefix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1.5;
    const increment = target / (duration * 60);

    const counter = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export default function About() {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const smoothY = useSpring(heroTextY, {
    stiffness: 60,
    damping: 25,
    mass: 0.8,
  });
  const smoothOpacity = useSpring(heroOpacity, { stiffness: 60, damping: 25 });

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.93 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  // Data
  const milestones = [
    {
      year: "2013",
      event: "Company Founded",
      desc: "BSPC established in Bhiwadi Khushkhera with a vision for precision excellence",
    },
    {
      year: "2026",
      event: "ISO 9001:2015",
      desc: "Achieved international quality management certification",
    },
    {
      year: "2026",
      event: "OEM Partnerships",
      desc: "Signed first-tier supplier agreements with leading OEMs",
    },
    {
      year: "2025",
      event: "Export Expansion",
      desc: "Began shipping to 2+ countries across global markets",
    },
  ];

  const values = [
    {
      icon: <Shield size={22} />,
      title: "Quality First",
      desc: "Zero-compromise approach to dimensional accuracy and material integrity in every part we produce.",
    },
    {
      icon: <Zap size={22} />,
      title: "Innovation",
      desc: "Continuously investing in advanced technology to stay ahead of manufacturing challenges.",
    },
    {
      icon: <Heart size={22} />,
      title: "Integrity",
      desc: "Transparent communication and honest partnerships built on trust and consistent delivery.",
    },
    {
      icon: <Globe size={22} />,
      title: "Reliability",
      desc: "On-time delivery commitment backed by robust production planning and capacity management.",
    },
  ];

  const capabilities = [
    {
      icon: <Factory size={28} />,
      title: "Investment Casting",
      desc: "Near-net shape components with excellent surface finish and dimensional accuracy using advanced wax pattern and ceramic shell processes.",
      stat: "±0.05mm",
      statLabel: "Dimensional Tolerance",
    },
    {
      icon: <Cog size={28} />,
      title: "Precision Machining",
      desc: "CNC turning and milling centers delivering tolerances up to ±0.01mm for the most demanding engineering applications.",
      stat: "±0.01mm",
      statLabel: "Machining Tolerance",
    },
    {
      icon: <Microscope size={28} />,
      title: "Quality Inspection",
      desc: "Spectrometers, CMM, and full NDT facilities for 100% material and dimensional verification on every production batch.",
      stat: "100%",
      statLabel: "Inspection Coverage",
    },
    {
      icon: <Layers size={28} />,
      title: "Material Range",
      desc: "Expertise across stainless steel, carbon steel, alloy steel, duplex, and super duplex grades for diverse application needs.",
      stat: "20+",
      statLabel: "Material Grades",
    },
    {
      icon: <Settings size={28} />,
      title: "Surface Finishing",
      desc: "Shot blasting, passivation, electropolishing, and heat treatment capabilities for complete part readiness.",
      stat: "Ra 1.6",
      statLabel: "Surface Finish",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Production Scale",
      desc: "High-volume casting capability with consistent quality maintained across every production run and shift.",
      stat: "1500+",
      statLabel: "Monthly Tons",
    },
  ];

  const industries = [
    { name: "Bathware Products", icon: "🚿" },
    { name: "Automobile", icon: "🚗" },
    { name: "Civil Industrial", icon: "🏗️" },
    { name: "Fire Fighting", icon: "🧯" },
    { name: "Precision Components", icon: "⚙️" },
    { name: "Railways", icon: "🚆" },
    { name: "Firearms", icon: "🔩" },
    { name: "Machinery", icon: "🏭" },
  ];

  const stats = [
    {
      value: 10,
      suffix: "+",
      label: "Monthly Tons",
      icon: <BarChart3 size={20} />,
    },
    {
      value: 100,
      suffix: "%",
      label: "Quality Checks",
      icon: <Globe size={20} />,
    },
    {
      value: 100,
      suffix: "%",
      label: "ISO Certified",
      icon: <Award size={20} />,
    },
    {
      value: 24,
      suffix: "/7",
      label: "Production Ready",
      icon: <Clock size={20} />,
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

  return (
    <div className="bg-transparent text-gray-100">
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative h-[75vh] flex items-center justify-center text-center px-4 overflow-hidden"
      >
        {/* Hero background image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          aria-hidden="true"
          style={{
            scale: heroScale,
            backgroundImage: `url(${aboutBanner})`,
          }}
        >
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
          {/* Glows */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/15 blur-[160px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-red-900/10 blur-[140px] rounded-full" />
        </motion.div>

        {/* Spark particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.span
              key={i}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: -180, opacity: [0, 1, 0] }}
              transition={{
                duration: 2.5 + ((i * 7) % 10) / 5,
                repeat: Infinity,
                delay: ((i * 13) % 30) / 10,
              }}
              className="absolute w-[2px] h-[2px] bg-orange-400 rounded-full"
              style={{ left: `${(i * 37) % 100}%`, bottom: "5%" }}
            />
          ))}
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-transparent" />

        {/* Hero Content */}
        <motion.div
          style={{ y: smoothY, opacity: smoothOpacity }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center justify-center"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-10 bg-red-600" />
            <span className="text-sm font-bold tracking-[0.3em] text-red-500 uppercase">
              About BSPC
            </span>
            <div className="h-[2px] w-10 bg-red-600" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-5xl">
            Built for{" "}
            <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.7)]">
              Precision
            </span>
            ,<br className="hidden md:block" /> Consistency &{" "}
            <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.7)]">
              Trust
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            BSPC combines process discipline, metallurgical control, and
            production readiness to support customers who need reliable casting
            quality at scale.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6"
          >
            <button className="group relative overflow-hidden rounded-full bg-red-600 px-8 py-4 font-bold text-white shadow-lg shadow-red-600/30 transition-all hover:-translate-y-1 hover:shadow-red-600/50">
              <span className="relative z-10 flex items-center gap-2">
                Our Story{" "}
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
              <div className="absolute inset-0 bg-red-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-4 text-sm font-medium text-white transition-all hover:border-red-600 hover:text-red-500"
              onClick={() => navigate("/contact")}
            >
              Contact Us{" "}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 flex flex-col items-center text-white animate-bounce">
          <span className="text-sm">Scroll</span>
          <div className="w-[2px] h-6 bg-white mt-1" />
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="relative bg-black/40 border-y border-white/5 py-10 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-red-600/5" />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-3 text-red-600 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <div className="text-3xl md:text-4xl font-black text-white">
                <CountUp target={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="text-sm text-gray-500 mt-1 tracking-widest uppercase">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── WHO WE ARE ─── */}
      <section className="relative overflow-hidden bg-transparent py-12 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:45px_45px]" />
          <div className="absolute -top-20 left-10 w-96 h-96 bg-red-600/10 blur-[130px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-red-900/10 blur-[110px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={listItem}
              className="flex items-center gap-3 mb-5"
            >
              <div className="h-[2px] w-10 bg-red-600" />
              <p className="text-sm font-bold tracking-[0.25em] text-red-500 uppercase">
                Who We Are
              </p>
            </motion.div>

            <motion.h2
              variants={listItem}
              className="text-4xl md:text-5xl font-black text-white leading-tight mb-6"
            >
              India's Trusted <br />
              <span className="relative inline-block text-red-600">
                Casting Partner
                <span className="absolute left-0 -bottom-2 h-1 w-full rounded-full bg-red-600/50" />
              </span>
            </motion.h2>

            <motion.p
              variants={listItem}
              className="text-gray-400 text-base leading-8 mb-5"
            >
              B.S Precision Casting (BSPC), established in Bhiwadi — India's
              premier industrial casting corridor — is a trusted manufacturer of
              precision investment castings. We specialize in producing
              high-performance engineering components using near-net-shape
              technology, ensuring reduced machining costs and superior
              dimensional control.
            </motion.p>

            <motion.p
              variants={listItem}
              className="text-gray-500 text-sm leading-7 border-l-4 border-red-600 pl-4 mb-8"
            >
              Our focus on quality, innovation, and reliability makes us a
              preferred casting partner across automotive, bathware, civil, fire
              safety, and industrial sectors — both domestic and global.
            </motion.p>

            <motion.div variants={listItem} className="space-y-4">
              {[
                "ISO 9001:2015 Certified Operations",
                "Advanced NDT & Spectrometry Lab",
                "Global Export Network — 12+ Countries",
                "Single-window from raw casting to machined finish",
              ].map((text, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 text-white font-medium group cursor-default"
                >
                  <div className="bg-red-600/10 p-1 rounded-full text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Image with overlays */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipOWKl-AwEFDTFEAUy6QlhOfnYUf-iZgXyTDzzh7=s680-w680-h510-rw"
                alt="BSPC Foundry"
                className="w-full h-[420px] object-cover"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <p className="text-white font-bold text-lg"></p>
                {/* <p className="text-gray-400 text-sm">
                  State-of-the-art investment casting facility
                </p> */}
              </div>
            </motion.div>

            {/* Corner accents */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-red-600 rounded-tl-xl z-20"
            />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-red-600/40 rounded-br-xl z-20"
            />

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-8 -left-6 hidden md:block bg-black/70 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="bg-red-600 p-2 rounded-lg text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                  <Building2 size={20} />
                </div>
                <div>
                  <p className="text-2xl font-black text-white">
                    Bhiwadi Khushkhera
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    Industrial Hub
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── LEADERSHIP TEAM ─── */}
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

      {/* ─── OUR STORY / HISTORY ─── */}
      <section className="relative overflow-hidden bg-black/20 py-12 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-red-600/5 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <div className="h-[2px] w-8 bg-red-600" />
              <span className="text-sm font-bold tracking-[0.25em] text-red-500 uppercase">
                Our Journey
              </span>
              <div className="h-[2px] w-8 bg-red-600" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white"
            >
              A Story of <span className="text-red-600">Casting</span>{" "}
              Excellence
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-600/80 via-red-600/40 to-transparent hidden md:block" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Card */}
                  <div className="w-full md:w-[45%]">
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-7 backdrop-blur-sm transition-all hover:border-red-600/30"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-red-600/10 via-transparent to-transparent transition-opacity" />
                      <div className="relative z-10">
                        <span className="text-4xl font-black text-red-600">
                          {m.year}
                        </span>
                        <h3 className="text-xl font-bold text-white mt-1 mb-2">
                          {m.event}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-[10%] justify-center">
                    <motion.div
                      whileInView={{ scale: [0, 1.4, 1] }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="w-5 h-5 rounded-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.6)] border-2 border-black z-10"
                    />
                  </div>

                  <div className="hidden md:block w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION VISION VALUES ─── */}
      <section className="relative overflow-hidden bg-transparent py-12 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.04]" />
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-red-600/8 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white"
            >
              Mission, Vision & <span className="text-red-600">Values</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mt-5 h-[3px] mx-auto rounded-full bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_15px_rgba(220,38,38,0.6)]"
            />
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: <Target size={28} />,
                label: "Our Mission",
                title: "Delivering Precision at Scale",
                desc: "To be the most trusted investment casting partner by delivering dimensionally accurate, metallurgically sound components — on time, every time — helping our customers reduce cost and improve product reliability.",
              },
              {
                icon: <Eye size={28} />,
                label: "Our Vision",
                title: "Global Casting Excellence",
                desc: "To become a globally recognized center of casting excellence from Bhiwadi, setting new benchmarks in near-net-shape manufacturing and expanding our reach across international industrial markets.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[24px] border border-white/5 bg-white/[0.03] p-8 backdrop-blur-sm transition-all hover:border-red-600/30"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-red-600/10 via-transparent to-transparent transition-opacity pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 rounded-xl bg-red-600 text-white shadow-[0_8px_20px_rgba(220,38,38,0.3)] group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold tracking-[0.2em] text-red-500 uppercase">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-7">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-6 text-center cursor-default transition-all hover:border-red-600/30"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-red-600 group-hover:w-2/3 transition-all duration-500 rounded-full" />
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-red-600/10 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all group-hover:scale-110">
                    {v.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                  {v.title}
                </h3>
                <p className="text-gray-400 text-sm leading-6">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES ─── */}
      <section className="relative overflow-hidden bg-black/20 py-12 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-red-600/10 blur-[130px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-900/10 blur-[150px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-white"
            >
              Core{" "}
              <span className="relative inline-block text-red-600">
                Capabilities
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="absolute left-0 -bottom-2 h-1 bg-red-600 rounded-full shadow-[0_0_12px_rgba(220,38,38,0.7)]"
                />
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 max-w-2xl mx-auto text-gray-400 text-lg"
            >
              Advanced manufacturing infrastructure and technical expertise to
              deliver superior casting solutions.
            </motion.p>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                variants={cardVariant}
                whileHover={{ scale: 1.04, y: -8 }}
                className="group relative rounded-3xl border border-white/5 bg-black/40 p-8 backdrop-blur-xl cursor-default transition-all hover:border-red-600/30 hover:shadow-[0_0_50px_-15px_rgba(220,38,38,0.3)]"
              >
                {/* Internal hover glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.12),transparent_60%)] pointer-events-none transition-opacity" />

                {/* Icon */}
                <div className="relative flex justify-center mb-6">
                  <div className="absolute inset-0 bg-red-600/15 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 p-5 rounded-2xl bg-red-600 text-white border border-red-600/30 shadow-[0_8px_20px_rgba(220,38,38,0.3)] group-hover:scale-110 transition-transform duration-500">
                    {cap.icon}
                  </div>
                </div>

                {/* Stat badge */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                    {cap.title}
                  </h3>
                  <div className="text-right">
                    <div className="text-lg font-black text-red-600">
                      {cap.stat}
                    </div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest">
                      {cap.statLabel}
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-6 group-hover:text-gray-300 transition-colors">
                  {cap.desc}
                </p>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 bg-red-600 group-hover:w-1/2 transition-all duration-500 rounded-full shadow-[0_0_15px_#dc2626]" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── INDUSTRIES SERVED ─── */}
      <section className="relative overflow-hidden bg-transparent py-12 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-red-600/5 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white"
            >
              Industries We <span className="text-red-600">Serve</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-1 bg-red-600 mx-auto mt-4 rounded-full shadow-[0_0_10px_#dc2626]"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.04 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-black/40 p-6 text-center cursor-default backdrop-blur-xl transition-all hover:border-red-600/40 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]"
              >
                {/* Shimmer on hover */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-red-600 group-hover:w-full transition-all duration-500" />

                <div className="text-4xl mb-3">{ind.icon}</div>
                <h3 className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">
                  {ind.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUALITY ASSURANCE ─── */}
      <section className="relative overflow-hidden bg-black/20 py-12 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-red-600/5 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={listItem}
              className="flex items-center gap-3 mb-5"
            >
              <div className="h-[2px] w-8 bg-red-600" />
              <span className="text-sm font-bold tracking-[0.25em] text-red-500 uppercase">
                Quality Assurance
              </span>
            </motion.div>

            <motion.h2
              variants={listItem}
              className="text-4xl md:text-5xl font-black text-white leading-tight mb-6"
            >
              Zero Compromise <br />
              <span className="text-red-600">Quality Systems</span>
            </motion.h2>

            <motion.p
              variants={listItem}
              className="text-gray-400 leading-8 mb-8"
            >
              Every component leaving our facility undergoes multi-stage
              inspection. From incoming raw material verification to final
              dimensional audit, our quality framework ensures 100% part
              conformance.
            </motion.p>

            <div className="space-y-5">
              {[
                {
                  label: "Spectrometry Testing",
                  detail:
                    "100% chemical composition verification on every heat",
                },
                {
                  label: "CMM Dimensional Check",
                  detail: "Computer-aided measurement for critical tolerances",
                },
                {
                  label: "NDT Inspection",
                  detail:
                    "Liquid penetrant, magnetic particle & radiographic testing",
                },
                {
                  label: "ISO 9001:2015 Certified",
                  detail: "International quality management system compliance",
                },
              ].map((q, i) => (
                <motion.div
                  key={i}
                  variants={listItem}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 group cursor-default"
                >
                  <div className="mt-1 flex-shrink-0 bg-red-600/10 p-1 rounded-full text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {q.label}
                    </div>
                    <div className="text-gray-500 text-sm">{q.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Certification cards */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >
            {[
              {
                icon: <Award size={28} />,
                title: "ISO 9001:2015",
                sub: "Quality Management",
              },
              {
                icon: <ShieldCheck size={28} />,
                title: "NABL Accredited",
                sub: "Testing Lab",
              },
              {
                icon: <Star size={28} />,
                title: "OEM Approved",
                sub: "Tier-1 Supplier",
              },
              {
                icon: <Globe size={28} />,
                title: "Export Certified",
                sub: "Global Standards",
              },
            ].map((cert, i) => (
              <motion.div
                key={i}
                variants={cardVariant}
                whileHover={{ y: -8, scale: 1.04 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-7 text-center cursor-default transition-all hover:border-red-600/30 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)]"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-xl bg-red-600 text-white group-hover:scale-110 transition-transform shadow-[0_8px_20px_rgba(220,38,38,0.3)]">
                    {cert.icon}
                  </div>
                </div>
                <div className="text-white font-bold">{cert.title}</div>
                <div className="text-gray-500 text-xs mt-1 uppercase tracking-widest">
                  {cert.sub}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="relative overflow-hidden bg-transparent py-12 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-600/8 blur-[130px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-red-900/8 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white"
            >
              Why Choose <span className="text-red-600">BSPC</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mt-5 h-[3px] mx-auto rounded-full bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_15px_rgba(220,38,38,0.6)]"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Clock size={24} />,
                title: "On-Time Delivery",
                desc: "Robust production scheduling and inventory management ensures your components arrive exactly when your line needs them.",
              },
              {
                icon: <TrendingUp size={24} />,
                title: "Competitive Pricing",
                desc: "Near-net-shape casting significantly reduces downstream machining costs — giving you better margins without quality trade-offs.",
              },
              {
                icon: <Users size={24} />,
                title: "Experienced Team",
                desc: "Our metallurgists, tooling engineers, and quality specialists bring decades of casting expertise to every customer project.",
              },
              {
                icon: <Cpu size={24} />,
                title: "Custom Solutions",
                desc: "From design review to prototyping to full production runs — we tailor our process to your exact specification and volume.",
              },
              {
                icon: <Globe size={24} />,
                title: "Global Network",
                desc: "Exporting to 12+ countries with full documentation — PPAP, material certs, and inspection reports in the formats you need.",
              },
              {
                icon: <Wrench size={24} />,
                title: "Complete Service",
                desc: "Single-window from raw casting through machining, surface treatment, and final packing — one partner, complete traceability.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative flex items-start gap-6 rounded-2xl border border-white/5 bg-white/[0.02] p-7 backdrop-blur-md transition-all hover:border-red-600/30 hover:bg-white/[0.04]"
              >
                <div className="flex-shrink-0 bg-red-600 p-4 rounded-xl text-white shadow-[0_8px_20px_rgba(220,38,38,0.2)] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                      {item.title}
                    </h3>
                    <ArrowUpRight
                      size={16}
                      className="text-white/20 group-hover:text-red-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </div>
                  <p className="text-gray-400 text-sm leading-6 group-hover:text-gray-300 transition-colors">
                    {item.desc}
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-14 h-14 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-tr-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[140px] rounded-full animate-pulse" />
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
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 md:p-16 text-center backdrop-blur-2xl shadow-2xl"
          >
            <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_15px_#dc2626]" />

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-red-600 shadow-[0_0_30px_rgba(220,38,38,0.4)]"
            >
              <MessageSquare size={36} className="text-white" />
            </motion.div>

            <h2 className="mb-5 text-4xl md:text-5xl font-black text-white leading-tight">
              Ready to Start Your <br />
              <span className="text-red-600">Casting Project?</span>
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-gray-400 text-lg leading-relaxed">
              Our engineering team is ready to review your drawings, suggest the
              right alloy, and deliver precision-cast components that meet your
              exact requirements.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-3 bg-red-600 px-10 py-5 rounded-full font-bold text-white shadow-[0_15px_30px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all"
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
                  (window.location.href = "mailto:b.sprecasting7878@gmai.com")
                }
              >
                <Mail size={18} className="text-red-600" />
                Email our Experts
              </motion.button>
            </div>

            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-600/5 blur-3xl rounded-full" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/5 blur-3xl rounded-full" />
          </motion.div>

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
  );
}
