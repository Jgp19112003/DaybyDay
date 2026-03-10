import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavBar from "./components/NavBar";
import WhatsAppButton from "./components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";

// Pages
import HomePage from "./pages/HomePage";
import MetaAdsPage from "./pages/services/MetaAdsPage";
import AutomatizacionPage from "./pages/services/AutomatizacionPage";
import PaidMediaPage from "./pages/services/PaidMediaPage";
import CaptacionPage from "./pages/services/CaptacionPage";
import EcommercePage from "./pages/services/EcommercePage";
import BlogPage from "./pages/BlogPage";
import ResultadosPage from "./pages/ResultadosPage";
import FAQPage from "./pages/FAQPage";
import GlosarioPage from "./pages/GlosarioPage";
import ComoTrabajamosPage from "./pages/ComoTrabajamosPage";
import ROASPage from "./pages/blog/ROASPage";
import MetaVsGooglePage from "./pages/blog/MetaVsGooglePage";
import CPAPage from "./pages/blog/CPAPage";
import FullFunnelMetaAdsPage from "./pages/blog/FullFunnelMetaAdsPage";
import AutomatizacionMarketingPage from "./pages/blog/AutomatizacionMarketingPage";
import TareasAutomatizarPage from "./pages/blog/TareasAutomatizarPage";
import AgenciaVsInhousePage from "./pages/blog/AgenciaVsInhousePage";
import EstrategiasPujaMetaAdsPage from "./pages/blog/EstrategiasPujaMetaAdsPage";
import EscalarMetaAdsPage from "./pages/blog/EscalarMetaAdsPage";
import EmbudoCaptacionPage from "./pages/blog/EmbudoCaptacionPage";
import PreguntasAgenciaPage from "./pages/blog/PreguntasAgenciaPage";
import UGCMetaAdsPage from "./pages/blog/UGCMetaAdsPage";
import IAMarketingDigitalPage from "./pages/blog/IAMarketingDigitalPage";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const [pendingScroll, setPendingScroll] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navBarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const openCalendly = () => {
    const url = "https://calendly.com/contact-daybydayconsulting/30min";
    if (window.Calendly && window.Calendly.initPopupWidget) {
      window.Calendly.initPopupWidget({ url });
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const scrollToSection = (section) => {
    const selectors = {
      inicio: null,
      sectores: "#sectores",
      nosotros: "#nosotros",
      contacto: "#footer",
    };
    if (section === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const selector = selectors[section];
    if (!selector) return;
    setTimeout(() => {
      const el = document.querySelector(selector);
      if (el) {
        const targetY = Math.max(el.offsetTop - 80 - 20, 0);
        gsap.to(window, { scrollTo: { y: targetY, autoKill: false }, duration: 1, ease: "power2.out" });
        setTimeout(() => ScrollTrigger.refresh(), 100);
      }
    }, 100);
  };

  const handleNavScroll = (section) => {
    if (section === "agendar") {
      openCalendly();
      return;
    }
    if (!isHomePage) {
      // Navigate to homepage first, then scroll
      setIsTransitioning(true);
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf("*");
      navigate("/");
      setPendingScroll(section);
      setTimeout(() => {
        setIsTransitioning(false);
        ScrollTrigger.refresh();
      }, 300);
    } else {
      scrollToSection(section);
    }
  };

  useEffect(() => {
    if (isHomePage && pendingScroll) {
      const doScroll = () => {
        if (pendingScroll === "inicio") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setPendingScroll(null);
          return;
        }
        const selectors = { sectores: "#sectores", nosotros: "#nosotros", contacto: "#footer" };
        const el = document.querySelector(selectors[pendingScroll]);
        if (el) {
          requestAnimationFrame(() => {
            const targetY = Math.max(el.offsetTop - 80 - 20, 0);
            window.scrollTo({ top: targetY, behavior: "smooth" });
            gsap.to(window, { scrollTo: { y: targetY, autoKill: false }, duration: 1, ease: "power2.out" });
            setTimeout(() => ScrollTrigger.refresh(), 100);
          });
          setPendingScroll(null);
        } else {
          setTimeout(doScroll, 100);
        }
      };
      setTimeout(doScroll, 500);
    }
    if (isHomePage && !pendingScroll) {
      setTimeout(() => ScrollTrigger.refresh(), 200);
    }
  }, [isHomePage, pendingScroll]);

  return (
    <main style={{ overflow: isTransitioning ? "hidden" : "visible" }}>
      <NavBar
        ref={navBarRef}
        onNavScroll={handleNavScroll}
        isHomePage={isHomePage}
      />
      <Routes>
        <Route path="/" element={<HomePage openCalendly={openCalendly} />} />
        <Route path="/servicios/meta-ads" element={<MetaAdsPage openCalendly={openCalendly} />} />
        <Route path="/servicios/automatizacion" element={<AutomatizacionPage openCalendly={openCalendly} />} />
        <Route path="/servicios/paid-media" element={<PaidMediaPage openCalendly={openCalendly} />} />
        <Route path="/servicios/captacion-clientes" element={<CaptacionPage openCalendly={openCalendly} />} />
        <Route path="/servicios/ecommerce" element={<EcommercePage openCalendly={openCalendly} />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/resultados" element={<ResultadosPage openCalendly={openCalendly} />} />
        <Route path="/faq" element={<FAQPage openCalendly={openCalendly} />} />
        <Route path="/glosario" element={<GlosarioPage />} />
        <Route path="/como-trabajamos" element={<ComoTrabajamosPage />} />
        <Route path="/blog/que-es-roas-meta-ads" element={<ROASPage openCalendly={openCalendly} />} />
        <Route path="/blog/meta-ads-vs-google-ads" element={<MetaVsGooglePage openCalendly={openCalendly} />} />
        <Route path="/blog/como-reducir-cpa-ecommerce" element={<CPAPage openCalendly={openCalendly} />} />
        <Route path="/blog/estrategia-full-funnel-meta-ads-d2c" element={<FullFunnelMetaAdsPage openCalendly={openCalendly} />} />
        <Route path="/blog/automatizacion-marketing-que-es" element={<AutomatizacionMarketingPage openCalendly={openCalendly} />} />
        <Route path="/blog/tareas-marketing-automatizar" element={<TareasAutomatizarPage openCalendly={openCalendly} />} />
        <Route path="/blog/agencia-vs-inhouse-vs-ia" element={<AgenciaVsInhousePage openCalendly={openCalendly} />} />
        <Route path="/blog/estrategias-puja-meta-ads" element={<EstrategiasPujaMetaAdsPage openCalendly={openCalendly} />} />
        <Route path="/blog/escalar-meta-ads" element={<EscalarMetaAdsPage openCalendly={openCalendly} />} />
        <Route path="/blog/embudo-captacion-clientes" element={<EmbudoCaptacionPage openCalendly={openCalendly} />} />
        <Route path="/blog/preguntas-contratar-agencia-paid-media" element={<PreguntasAgenciaPage openCalendly={openCalendly} />} />
        <Route path="/blog/ugc-meta-ads" element={<UGCMetaAdsPage openCalendly={openCalendly} />} />
        <Route path="/blog/ia-marketing-digital" element={<IAMarketingDigitalPage openCalendly={openCalendly} />} />
      </Routes>
      <WhatsAppButton />
      <Analytics />
    </main>
  );
};

export default App;
