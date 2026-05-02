import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import {
  pageImporters,
  preloadNonCriticalRoutes,
  preloadRouteAssets,
} from "./utils/routePreload";

const About = lazy(pageImporters["/about"]);
const Contact = lazy(pageImporters["/contact"]);
const Facilities = lazy(pageImporters["/facilities"]);
const Home = lazy(pageImporters["/"]);
const Process = lazy(pageImporters["/process"]);
const Products = lazy(pageImporters["/products"]);
const Quality = lazy(pageImporters["/quality"]);

function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm uppercase tracking-[0.24em] text-white/70 backdrop-blur-md">
        Loading page
      </div>
    </div>
  );
}

function App() {
  useEffect(() => {
    preloadRouteAssets("/about");
    preloadRouteAssets("/contact");

    const schedulePreload = () => preloadNonCriticalRoutes();

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(schedulePreload, {
        timeout: 1200,
      });

      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(schedulePreload, 600);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen overflow-x-hidden bg-transparent text-white">
        <AnimatedBackground />
        <div className="relative z-20">
          <Navbar />
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/process" element={<Process />} />
              <Route path="/quality" element={<Quality />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
