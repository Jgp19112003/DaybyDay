import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavBar from "./components/NavBar";
import WhatsAppButton from "./components/WhatsAppButton";
import Servicios from "./components/Servicios";
import AgendarReunion from "./components/AgendarReunion";
import Nosotros from "./components/Nosotros";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const [currentView, setCurrentView] = useState("home");
  const [pendingScroll, setPendingScroll] = useState(null);
  const [isTransitioning] = useState(false);

  const serviciosRef = useRef(null);
  const nosotrosRef = useRef(null);

  // Scroll al top siempre al recargar la página - mejorado
  useEffect(() => {
    // Múltiples métodos para asegurar scroll al top
    window.history.scrollRestoration = "manual";
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);

    // Forzar scroll después de que se renderice todo
    const forceScrollTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    forceScrollTop();
    setTimeout(forceScrollTop, 0);
    setTimeout(forceScrollTop, 100);
  }, []);

  // Handler para scroll suave desde NavBar
  const handleNavScroll = (section) => {
    if (section === "agendar") {
      setCurrentView("agendar");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
      return;
    }
    if (currentView !== "home") {
      setCurrentView("home");
      setPendingScroll(section);
    } else {
      if (section === "inicio") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        let ref = null;
        if (section === "servicios") ref = serviciosRef;
        if (section === "nosotros") ref = nosotrosRef;
        if (ref && ref.current) {
          ref.current.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  // Scroll al componente después de cambiar a home
  useEffect(() => {
    if (currentView === "home" && pendingScroll) {
      if (pendingScroll === "inicio") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const ref =
          pendingScroll === "servicios"
            ? serviciosRef
            : pendingScroll === "nosotros"
            ? nosotrosRef
            : null;
        if (ref && ref.current) {
          setTimeout(() => {
            ref.current.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
      setPendingScroll(null);
    }
  }, [currentView, pendingScroll]);

  return (
    <main style={{ overflow: isTransitioning ? "hidden" : "visible" }}>
      <NavBar
        currentView={currentView}
        onAgendarClick={() => handleNavScroll("agendar")}
        onNavScroll={handleNavScroll}
      />
      {currentView === "home" && (
        <>
          <div ref={serviciosRef}>
            <Servicios />
          </div>
          <div ref={nosotrosRef}>
            <Nosotros />
          </div>
        </>
      )}
      {currentView === "agendar" && <AgendarReunion />}
      <WhatsAppButton />
      <Footer />
    </main>
  );
};

export default App;
