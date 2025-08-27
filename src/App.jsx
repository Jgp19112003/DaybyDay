import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavBar from "./components/NavBar";
import WhatsAppButton from "./components/WhatsAppButton";
import Inicio from "./components/Inicio";
import Sectores from "./components/Sectores";
import AgendarReunion from "./components/AgendarReunion";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const [currentView, setCurrentView] = useState("home");
  const [pendingScroll, setPendingScroll] = useState(null);
  const [isTransitioning] = useState(false);

  const navBarRef = useRef(null);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);

    const forceScrollTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    forceScrollTop();
    setTimeout(forceScrollTop, 0);
    setTimeout(forceScrollTop, 100);
  }, []);

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
      } else if (section === "sectores") {
        // Scroll to sectores section
        setTimeout(() => {
          const sectoresSection = document.querySelector("#sectores");
          if (sectoresSection) {
            const navHeight = 80; // Approximate navbar height
            const offset = 20; // Extra space below navbar
            const targetY = sectoresSection.offsetTop - navHeight - offset;
            window.scrollTo({ top: targetY, behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  useEffect(() => {
    if (currentView === "home" && pendingScroll) {
      if (pendingScroll === "inicio") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (pendingScroll === "sectores") {
        // Scroll to sectores section
        setTimeout(() => {
          const sectoresSection = document.querySelector("#sectores");
          if (sectoresSection) {
            const navHeight = 80; // Approximate navbar height
            const offset = 20; // Extra space below navbar
            const targetY = sectoresSection.offsetTop - navHeight - offset;
            window.scrollTo({ top: targetY, behavior: "smooth" });
          }
        }, 100);
      }
      setPendingScroll(null);
    }
  }, [currentView, pendingScroll]);

  return (
    <main style={{ overflow: isTransitioning ? "hidden" : "visible" }}>
      <NavBar
        ref={navBarRef}
        currentView={currentView}
        onAgendarClick={() => handleNavScroll("agendar")}
        onNavScroll={handleNavScroll}
        isVisible={true}
      />
      {currentView === "home" && (
        <>
          <Inicio />
          <Sectores onAgendarClick={() => handleNavScroll("agendar")} />
        </>
      )}
      {currentView === "agendar" && <AgendarReunion />}
      <WhatsAppButton />
      <Footer />
    </main>
  );
};

export default App;
