import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import {
  Cog,
  Droplets,
  Flame,
  Wrench,
  ChevronRight,
  Star,
  Shield,
  Zap,
  Package,
  ArrowRight,
  Train,
  Bath,
  Settings2,
} from "lucide-react";
import PageHero from "../components/PageHero";

// ── IMAGE IMPORTS ─ add yours here ──────────────────────────
import productHeroBg from "../assets/product.png";
import pumpHousingImg from "../assets/products/pump-housing.png";
import impellerImg from "../assets/products/impeller.png";
import valveBodyImg from "../assets/products/valve-body.png";
import diffuserImg from "../assets/products/diffuser.png";
import bracketImg from "../assets/products/bracket.png";
import turboImg from "../assets/products/turbo-housing.png";
import exhaustImg from "../assets/products/exhaust-manifold.png";
import gearForkImg from "../assets/products/gear-fork.png";
import spindleImg from "../assets/products/spindle-housing.png";
import toolHolderImg from "../assets/products/tool-holder.png";
import hydrantImg from "../assets/products/fire-hydrant.png";
import nozzleImg from "../assets/products/nozzle.png";
import faucetImg from "../assets/products/faucet.png";
import showerImg from "../assets/products/showerhead.png";
import hookImg from "../assets/products/hook-block.png";
import pulleyImg from "../assets/products/pulley.png";
import flowMeterImg from "../assets/products/flow-meter.png";
import gaugeImg from "../assets/products/pressure-gauge.png";
import brakeImg from "../assets/products/brake-caliper.png";
import bogieImg from "../assets/products/bogie-bracket.png";

const categories = [
  {
    id: "pumps",
    label: "Pumps & Valves",
    icon: <Droplets size={16} />,
    color: "#3b82f6",
    products: [
      {
        name: "Pump Housing",
        material: "SS 316",
        weight: "0.5–15 kg",
        tolerance: "±0.05 mm",
        finish: "Ra 1.6 µm",
        img: pumpHousingImg,
      },
      {
        name: "Impeller",
        material: "SS 304 / CF8M",
        weight: "0.2–8 kg",
        tolerance: "±0.05 mm",
        finish: "Ra 3.2 µm",
        img: impellerImg,
      },
      {
        name: "Valve Body",
        material: "WCB / WCC",
        weight: "0.3–20 kg",
        tolerance: "±0.1 mm",
        finish: "Ra 3.2 µm",
        img: valveBodyImg,
      },
      {
        name: "Diffuser Ring",
        material: "SS 304",
        weight: "0.1–5 kg",
        tolerance: "±0.05 mm",
        finish: "Ra 1.6 µm",
        img: diffuserImg,
      },
    ],
  },
  {
    id: "auto",
    label: "Automobile",
    icon: <Cog size={16} />,
    color: "#f97316",
    products: [
      {
        name: "Bracket Assembly",
        material: "Carbon Steel",
        weight: "0.3–6 kg",
        tolerance: "±0.05 mm",
        finish: "Ra 3.2 µm",
        img: bracketImg,
      },
      {
        name: "Turbo Housing",
        material: "HH Alloy",
        weight: "1–10 kg",
        tolerance: "±0.1 mm",
        finish: "Ra 6.3 µm",
        img: turboImg,
      },
      {
        name: "Exhaust Manifold",
        material: "Heat Resistant SS",
        weight: "2–12 kg",
        tolerance: "±0.1 mm",
        finish: "Ra 6.3 µm",
        img: exhaustImg,
      },
      {
        name: "Gear Shift Fork",
        material: "Alloy Steel",
        weight: "0.2–2 kg",
        tolerance: "±0.03 mm",
        finish: "Ra 1.6 µm",
        img: gearForkImg,
      },
    ],
  },
  {
    id: "industrial",
    label: "Machine Tools",
    icon: <Wrench size={16} />,
    color: "#a855f7",
    products: [
      {
        name: "Spindle Housing",
        material: "GGG-40 / SS",
        weight: "1–25 kg",
        tolerance: "±0.02 mm",
        finish: "Ra 0.8 µm",
        img: spindleImg,
      },
      {
        name: "Tool Holder Body",
        material: "Alloy Steel",
        weight: "0.3–4 kg",
        tolerance: "±0.02 mm",
        finish: "Ra 0.8 µm",
        img: toolHolderImg,
      },
    ],
  },
  {
    id: "fire",
    label: "Fire Fighting",
    icon: <Flame size={16} />,
    color: "#ef4444",
    products: [
      {
        name: "Fire Hydrant Body",
        material: "DI / Bronze",
        weight: "2–25 kg",
        tolerance: "±0.1 mm",
        finish: "Ra 6.3 µm",
        img: hydrantImg,
      },
      {
        name: "Nozzle Assembly",
        material: "Bronze / SS",
        weight: "0.3–2 kg",
        tolerance: "±0.1 mm",
        finish: "Ra 3.2 µm",
        img: nozzleImg,
      },
    ],
  },
  {
    id: "bathware",
    label: "Bathware",
    icon: <Bath size={16} />,
    color: "#10b981",
    products: [
      {
        name: "Faucet Body",
        material: "Bronze / SS 304",
        weight: "0.2–1.5 kg",
        tolerance: "±0.1 mm",
        finish: "Ra 1.6 µm",
        img: faucetImg,
      },
      {
        name: "Showerhead Disc",
        material: "SS 304",
        weight: "0.1–0.5 kg",
        tolerance: "±0.1 mm",
        finish: "Ra 0.8 µm",
        img: showerImg,
      },
    ],
  },
  {
    id: "crane",
    label: "Cranes & Heavy",
    icon: <Package size={16} />,
    color: "#eab308",
    products: [
      {
        name: "Hook Block",
        material: "Alloy Steel",
        weight: "5–80 kg",
        tolerance: "±0.5 mm",
        finish: "Ra 12.5 µm",
        img: hookImg,
      },
      {
        name: "Pulley Sheave",
        material: "GGG-60",
        weight: "2–30 kg",
        tolerance: "±0.2 mm",
        finish: "Ra 6.3 µm",
        img: pulleyImg,
      },
    ],
  },
  {
    id: "instrumentation",
    label: "Instrumentation",
    icon: <Zap size={16} />,
    color: "#06b6d4",
    products: [
      {
        name: "Flow Meter Body",
        material: "SS 316L",
        weight: "0.1–3 kg",
        tolerance: "±0.02 mm",
        finish: "Ra 0.8 µm",
        img: flowMeterImg,
      },
      {
        name: "Pressure Gauge Housing",
        material: "SS 304",
        weight: "0.05–0.5 kg",
        tolerance: "±0.02 mm",
        finish: "Ra 0.8 µm",
        img: gaugeImg,
      },
    ],
  },
  {
    id: "railways",
    label: "Railways",
    icon: <Train size={16} />,
    color: "#f59e0b",
    products: [
      {
        name: "Brake Caliper",
        material: "Alloy Steel",
        weight: "2–15 kg",
        tolerance: "±0.1 mm",
        finish: "Ra 3.2 µm",
        img: brakeImg,
      },
      {
        name: "Bogie Bracket",
        material: "Carbon Steel",
        weight: "3–30 kg",
        tolerance: "±0.2 mm",
        finish: "Ra 6.3 µm",
        img: bogieImg,
      },
    ],
  },
];

// ── MATERIALS SECTION COMPONENT ────────────────────────────
const materialFamilies = [
  {
    family: "Stainless Steel",
    color: "#3b82f6",
    icon: "⬡",
    items: [
      {
        grade: "SS 304 / 304L",
        type: "General Purpose",
        temp: "870°C",
        tensile: "515 MPa",
      },
      {
        grade: "SS 316 / 316L",
        type: "Marine Grade",
        temp: "870°C",
        tensile: "515 MPa",
      },
      {
        grade: "CF8M / CF8",
        type: "Cast Grade",
        temp: "900°C",
        tensile: "485 MPa",
      },
      {
        grade: "Duplex 2205",
        type: "Duplex SS",
        temp: "300°C",
        tensile: "620 MPa",
      },
      {
        grade: "Super Duplex",
        type: "Super Duplex",
        temp: "300°C",
        tensile: "750 MPa",
      },
    ],
  },
  {
    family: "Carbon & Alloy Steel",
    color: "#f97316",
    icon: "◈",
    items: [
      {
        grade: "WCB / WCC",
        type: "Carbon Steel",
        temp: "425°C",
        tensile: "485 MPa",
      },
      {
        grade: "EN-8 / EN-24",
        type: "Alloy Steel",
        temp: "500°C",
        tensile: "700 MPa",
      },
      {
        grade: "Alloy Steel",
        type: "High Strength",
        temp: "550°C",
        tensile: "850 MPa",
      },
    ],
  },
  {
    family: "Heat Resistant",
    color: "#ef4444",
    icon: "◉",
    items: [
      {
        grade: "HH / HK Alloy",
        type: "Heat Resistant",
        temp: "1100°C",
        tensile: "450 MPa",
      },
      {
        grade: "Hastelloy C276",
        type: "Nickel Alloy",
        temp: "1040°C",
        tensile: "690 MPa",
      },
    ],
  },
  {
    family: "Non-ferrous",
    color: "#eab308",
    icon: "◆",
    items: [
      {
        grade: "Al LM-6 / LM-25",
        type: "Aluminium",
        temp: "200°C",
        tensile: "230 MPa",
      },
      {
        grade: "Bronze / DI",
        type: "Non-ferrous",
        temp: "250°C",
        tensile: "310 MPa",
      },
      {
        grade: "GGG-40 / GGG-60",
        type: "Ductile Iron",
        temp: "350°C",
        tensile: "400 MPa",
      },
    ],
  },
];

function MaterialsSection() {
  const [activeFamily, setActiveFamily] = useState(0);
  const fam = materialFamilies[activeFamily];

  return (
    <section className="relative overflow-hidden px-4 py-24">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(220,38,38,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(220,38,38,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-red-900/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[600px] bg-red-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative mx-auto max-w-7xl z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-red-600" />
            <span className="text-xs font-bold tracking-[0.3em] text-red-500 uppercase">
              Materials
            </span>
            <div className="h-[2px] w-8 bg-red-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Alloys We{" "}
            <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
              Cast
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            From austenitic stainless to heat-resistant super alloys — we work
            across 20+ grades to meet your exact metallurgical specification.
          </p>
        </motion.div>

        {/* Family selector tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {materialFamilies.map((f, fi) => (
            <motion.button
              key={fi}
              onClick={() => setActiveFamily(fi)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-bold transition-all duration-200"
              style={
                activeFamily === fi
                  ? {
                      background: f.color,
                      borderColor: f.color,
                      color: "#fff",
                      boxShadow: `0 0 24px ${f.color}55`,
                    }
                  : {
                      background: "rgba(255,255,255,0.03)",
                      borderColor: "rgba(255,255,255,0.1)",
                      color: "#9ca3af",
                    }
              }
            >
              <span style={{ fontSize: "14px" }}>{f.icon}</span>
              {f.family}
            </motion.button>
          ))}
        </div>

        {/* Active family cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFamily}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-14"
          >
            {fam.items.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: i * 0.07,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                whileHover={{ y: -10, scale: 1.04 }}
                className="group relative overflow-hidden rounded-2xl border bg-black/60 backdrop-blur-xl cursor-default"
                style={{ borderColor: `${fam.color}22` }}
              >
                {/* Top color bar */}
                <div
                  className="h-1 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${fam.color}, transparent)`,
                  }}
                />
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top left, ${fam.color}18, transparent 65%)`,
                  }}
                />
                {/* Shimmer sweep */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

                <div className="p-5 relative z-10">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-lg font-black transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${fam.color}15`,
                      border: `1px solid ${fam.color}33`,
                      color: fam.color,
                    }}
                  >
                    {m.grade.slice(0, 2)}
                  </div>
                  <h3 className="text-sm font-black text-white mb-0.5">
                    {m.grade}
                  </h3>
                  <p className="text-xs mb-4" style={{ color: fam.color }}>
                    {m.type}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-1.5">
                      <span className="text-[10px] uppercase tracking-wider text-gray-500">
                        Max Temp
                      </span>
                      <span className="text-xs font-bold font-mono text-orange-400">
                        {m.temp}
                      </span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-1.5">
                      <span className="text-[10px] uppercase tracking-wider text-gray-500">
                        Tensile
                      </span>
                      <span className="text-xs font-bold font-mono text-green-400">
                        {m.tensile}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom animated border */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-4/5 transition-all duration-500 rounded-full"
                  style={{ background: fam.color }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Full alloy reference strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-white/5 bg-black/40 backdrop-blur-xl p-6"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent" />
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500 mb-4 text-center">
            Complete Grade Reference
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "SS 304",
              "SS 304L",
              "SS 316",
              "SS 316L",
              "CF8",
              "CF8M",
              "WCB",
              "WCC",
              "HH Alloy",
              "HK Alloy",
              "Al LM-6",
              "Al LM-25",
              "Duplex 2205",
              "Super Duplex 2507",
              "Hastelloy C276",
              "EN-8",
              "EN-24",
              "GGG-40",
              "GGG-60",
              "Bronze",
              "Ductile Iron",
              "Alloy Steel",
            ].map((g, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-xs font-bold px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:border-red-600/50 hover:text-red-400 hover:bg-red-600/10 transition-all duration-200 cursor-default"
              >
                {g}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ product, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-black/50 cursor-default transition-all duration-300"
      style={{ "--card-color": color }}
    >
      {/* top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, ${color}, transparent)`,
        }}
      />

        {/* Product image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-white/5">
          {product.img ? (
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/20">
              <Settings2 size={40} />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {index === 0 && (
            <div
              className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full border backdrop-blur-md"
              style={{
                borderColor: `${color}55`,
                color: color,
                background: "rgba(0,0,0,0.6)",
              }}
            >
              Featured
            </div>
          )}
        </div>

        {/* Card content */}
        <div className="p-5">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-1"
            style={{ color }}
          >
            {product.material}
          </p>
          <h3 className="text-lg font-black text-white mb-4">{product.name}</h3>

          <div className="grid grid-cols-2 gap-2">
            {[
              { val: product.tolerance, label: "Tolerance", color },
              { val: product.finish, label: "Finish", color: "#34d399" },
              {
                val: product.weight,
                label: "Weight",
                color: "#94a3b8",
                full: true,
              },
            ].map((spec, i) => (
              <div
                key={i}
                className={`rounded-lg border border-white/5 bg-white/5 p-2 text-center ${spec.full ? "col-span-2" : ""}`}
              >
                <div
                  className="text-xs font-bold font-mono"
                  style={{ color: spec.color }}
                >
                  {spec.val}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-gray-500 mt-0.5">
                  {spec.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at top right, ${color}15, transparent 60%)`,
          }}
        />
    </motion.div>
  );
}

export default function Products() {
  const [activeId, setActiveId] = useState("pumps");
  const activeCat = categories.find((c) => c.id === activeId);
  const navigate = useNavigate();

  return (
    <main className="relative z-10 pb-24 text-white">
      {/* ── HERO ─────────────────────────────────────── */}
      <section
        className="relative min-h-[420px] flex items-center justify-center text-center px-4 py-20 overflow-hidden"
        style={{
          backgroundImage: `url(${productHeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(220,38,38,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(220,38,38,0.06)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/15 blur-[120px] rounded-full" />
        {[...Array(18)].map((_, i) => (
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
            style={{ left: `${(i * 37) % 100}%`, bottom: `${(i * 11) % 30}%` }}
          />
        ))}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-[2px] w-9 bg-red-600" />
            <span className="text-xs font-bold tracking-[0.3em] text-red-500 uppercase">
              Product Range
            </span>
            <div className="h-[2px] w-9 bg-red-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5">
            Engineered for <span className="text-red-600">Demanding</span>
            <br />
            Industrial Applications
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Precision investment castings from 50g to 100kg — manufactured to
            OEM standards across 10+ product categories.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              ["10+", "Categories"],
              ["±0.01mm", "Tolerance"],
              ["20+", "Alloy Grades"],
              ["100%", "Inspected"],
            ].map(([v, l]) => (
              <div key={l} className="text-center">
                <div className="text-2xl font-black text-white">{v}</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 mt-0.5">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── CATEGORY TABS + PRODUCT GRID ─────────────── */}
      <section className="px-4 pt-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500 mb-2">
              Our Catalogue
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Products by <span className="text-red-600">Category</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              transition={{ duration: 1 }}
              className="h-[3px] mx-auto mt-4 rounded-full bg-gradient-to-r from-transparent via-red-600 to-transparent"
            />
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold transition-all duration-200"
                style={
                  activeId === cat.id
                    ? {
                        background: cat.color,
                        borderColor: cat.color,
                        color: "#fff",
                        boxShadow: `0 0 20px ${cat.color}55`,
                      }
                    : {
                        background: "rgba(255,255,255,0.03)",
                        borderColor: "rgba(255,255,255,0.1)",
                        color: "#9ca3af",
                      }
                }
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <div
              key={activeId}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {activeCat.products.map((product, i) => (
                <ProductCard
                  key={product.name}
                  product={product}
                  color={activeCat.color}
                  index={i}
                />
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── MATERIALS SECTION ─────────────────────── */}
      <MaterialsSection />

      {/* ── PROCESS TIMELINE ─────────────────────── */}
      <section className="relative px-4 py-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(220,38,38,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(220,38,38,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-red-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-900/10 blur-[100px] rounded-full" />
        </div>

        <div className="mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-red-600" />
              <span className="text-xs font-bold tracking-[0.3em] text-red-500 uppercase">
                How We Work
              </span>
              <div className="h-[2px] w-8 bg-red-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              From Design to{" "}
              <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                Delivery
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-base">
              A disciplined 6-stage process that transforms your drawing into a
              certified, ready-to-fit component.
            </p>
          </motion.div>

          {/* Steps grid — alternating left/right on desktop, single column on mobile */}
          <div className="relative">
            {/* Center vertical spine (desktop only) */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px]">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ originY: 0 }}
                className="w-full h-full bg-gradient-to-b from-red-600 via-red-600/50 to-transparent"
              />
            </div>

            {[
              {
                step: "01",
                title: "Design Review",
                desc: "Engineering team evaluates your CAD / drawing and suggests DFM improvements for optimal casting yield.",
                icon: "📐",
              },
              {
                step: "02",
                title: "Wax Pattern",
                desc: "High-precision injection-moulded wax patterns built to your exact geometry with tooling we engineer in-house.",
                icon: "🕯️",
              },
              {
                step: "03",
                title: "Shell Building",
                desc: "Ceramic shell coated in 6–8 layers, each dried to ensure structural integrity at extreme pour temperatures.",
                icon: "🔬",
              },
              {
                step: "04",
                title: "Casting & Knockout",
                desc: "Molten metal poured at controlled temperature, cooled, and ceramic shell removed — revealing a near-net-shape part.",
                icon: "🔥",
              },
              {
                step: "05",
                title: "Machining & Finishing",
                desc: "CNC turning and milling to final dimensions, followed by shot blasting, passivation or coating as specified.",
                icon: "⚙️",
              },
              {
                step: "06",
                title: "Inspection & Dispatch",
                desc: "100% CMM dimensional check, spectrometry, and NDT clearance before packing and on-time delivery.",
                icon: "✅",
              },
            ].map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                  className={`relative flex items-center gap-0 mb-10 lg:mb-8
              ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}
              flex-row`}
                >
                  {/* Card — takes up ~45% width on desktop */}
                  <div className="w-full lg:w-[45%]">
                    <motion.div
                      whileHover={{ scale: 1.03, y: -6 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="group relative overflow-hidden rounded-2xl border border-white/8 bg-black/60 backdrop-blur-xl p-6 cursor-default"
                      style={{
                        boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
                      }}
                    >
                      {/* Animated top line on hover */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-600 via-red-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />

                      {/* Internal glow on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl" />

                      {/* Step number watermark */}
                      <div className="absolute -top-3 -right-2 text-[80px] font-black text-white/[0.03] select-none leading-none pointer-events-none">
                        {s.step}
                      </div>

                      <div className="relative z-10 flex items-start gap-4">
                        {/* Icon box */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-600/15 border border-red-600/30 flex items-center justify-center text-xl group-hover:bg-red-600 group-hover:border-red-600 group-hover:scale-110 transition-all duration-300">
                          <span style={{ fontSize: "18px" }}>{s.icon}</span>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-black tracking-[0.2em] text-red-500 uppercase">
                              Step {s.step}
                            </span>
                            <div className="flex-1 h-[1px] bg-red-600/20" />
                          </div>
                          <h4 className="text-lg font-black text-white mb-2 group-hover:text-red-400 transition-colors">
                            {s.title}
                          </h4>
                          <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                            {s.desc}
                          </p>
                        </div>
                      </div>

                      {/* Bottom progress bar animation */}
                      <div className="mt-4 h-[2px] w-0 bg-red-600 group-hover:w-full transition-all duration-700 rounded-full" />
                    </motion.div>
                  </div>

                  {/* Center node — 10% width on desktop */}
                  <div className="hidden lg:flex w-[10%] justify-center items-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: i * 0.1 + 0.3,
                      }}
                      className="relative flex items-center justify-center"
                    >
                      {/* Outer ring pulse */}
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: i * 0.4,
                        }}
                        className="absolute w-10 h-10 rounded-full border border-red-600/50"
                      />
                      {/* Inner node */}
                      <div className="w-7 h-7 rounded-full bg-red-600 border-4 border-black shadow-[0_0_20px_rgba(220,38,38,0.7)] flex items-center justify-center z-10">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty spacer — right side for left cards, left side for right cards */}
                  <div className="hidden lg:block w-[45%]" />

                  {/* Mobile left indicator */}
                  <div className="lg:hidden absolute -left-3 top-6 w-6 h-6 rounded-full bg-red-600 border-2 border-black flex items-center justify-center shadow-[0_0_12px_rgba(220,38,38,0.6)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom completion badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex justify-center"
          >
            <div className="flex items-center gap-3 border border-red-600/30 bg-red-600/10 rounded-full px-6 py-3 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-sm font-bold text-white">
                Average lead time:{" "}
                <span className="text-red-500">15–25 working days</span>
              </span>
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────── */}
      <section className="px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 text-center backdrop-blur-2xl md:p-16"
          style={{ boxShadow: "0 30px 80px rgba(220,38,38,0.15)" }}
        >
          <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.1),transparent_60%)] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.4)]"
          >
            <ArrowRight size={28} className="text-white" />
          </motion.div>

          <h2 className="relative text-3xl font-black text-white md:text-5xl mb-4">
            Need a Custom <span className="text-red-600">Component?</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base text-gray-400 leading-relaxed">
            Share your drawing or requirement — our engineers will review DFM
            compatibility and provide a quote within 48 hours.
          </p>

          <div className="relative mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full bg-red-600 px-10 py-4 font-bold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-700"
              onClick={() => navigate("/contact")}
            >
              Request a Quote <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ y: -3 }}
              className="rounded-full border border-white/15 px-10 py-4 font-semibold text-white transition hover:border-red-600/50 hover:text-red-400"
            >
              Download Catalogue
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-4 opacity-40"
          >
            {[
              "ISO 9001:2015",
              "NABL Accredited",
              "OEM Approved",
              "Export Certified",
            ].map((cert) => (
              <span
                key={cert}
                className="text-xs font-bold tracking-[0.3em] text-white uppercase"
              >
                {cert}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
