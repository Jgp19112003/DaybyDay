import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavBar from "./components/NavBar";
import WhatsAppButton from "./components/WhatsAppButton";
import Servicios from "./components/Servicios";
import AgendarReunion from "./components/AgendarReunion";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const [currentView, setCurrentView] = useState("home");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      if (hash !== currentView) {
        setIsTransitioning(true);
        setCurrentView(hash);

        // Remove transitioning state after animation completes
        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Initialize view on load

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [currentView]);

  return (
    <main style={{ overflow: isTransitioning ? "hidden" : "visible" }}>
      <NavBar
        currentView={currentView}
        onAgendarClick={() => setCurrentView("agendar")}
      />
      {currentView === "home" && <Servicios />}
      {currentView === "agendar" && <AgendarReunion />}
      <WhatsAppButton />
    </main>
  );
};

export default App;
