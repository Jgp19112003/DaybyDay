import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavBar from "./components/NavBar";
import WhatsAppButton from "./components/WhatsAppButton";
import Inicio from "./components/Inicio";
import Sectores from "./components/Sectores";
import Nosotros from "./components/Nosotros";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const [currentView, setCurrentView] = useState("home");
  const [pendingScroll, setPendingScroll] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  const openCalendly = () => {
    const url = "https://calendly.com/jorgedaybydayconsulting/30min";
    if (window.Calendly && window.Calendly.initPopupWidget) {
      window.Calendly.initPopupWidget({ url });
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleNavScroll = (section) => {
    if (section === "agendar") {
      // Open Calendly popup instead of navigating
      openCalendly();
      return;
    }
    if (currentView !== "home") {
      // Kill all ScrollTriggers and animations before navigation
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf("*");

      // Force unpinning any pinned elements
      ScrollTrigger.refresh();

      setIsTransitioning(true);
      setCurrentView("home");
      setPendingScroll(section);

      setTimeout(() => {
        setIsTransitioning(false);
        // Additional cleanup after transition
        ScrollTrigger.refresh();
      }, 300);
    } else {
      if (section === "inicio") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (section === "sectores") {
        // Direct scroll when already on home page
        setTimeout(() => {
          const sectoresSection = document.querySelector("#sectores");
          if (sectoresSection) {
            const navHeight = 80;
            const offset = 20;
            const targetY = sectoresSection.offsetTop - navHeight - offset;

            gsap.to(window, {
              scrollTo: { y: targetY, autoKill: false },
              duration: 1,
              ease: "power2.out",
            });
          }
        }, 100);
      } else if (section === "nosotros") {
        // Direct scroll to nosotros section
        setTimeout(() => {
          const nosotrosSection = document.querySelector("#nosotros");
          if (nosotrosSection) {
            const navHeight = 80;
            const offset = 20;
            const targetY = nosotrosSection.offsetTop - navHeight - offset;

            gsap.to(window, {
              scrollTo: { y: targetY, autoKill: false },
              duration: 1,
              ease: "power2.out",
            });
          }
        }, 100);
      } else if (section === "contacto") {
        // Scroll directo al footer
        setTimeout(() => {
          const footer = document.querySelector("#footer");
          if (footer) {
            const navHeight = 80;
            const offset = 20;
            const targetY = Math.max(footer.offsetTop - navHeight - offset, 0);
            gsap.to(window, {
              scrollTo: { y: targetY, autoKill: false },
              duration: 1,
              ease: "power2.out",
            });
          }
        }, 100);
      }
    }
  };

  useEffect(() => {
    if (currentView === "home" && pendingScroll) {
      if (pendingScroll === "inicio") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setPendingScroll(null);
      } else if (pendingScroll === "sectores") {
        // Scroll to sectores section with multiple attempts to ensure DOM is ready
        const scrollToSectores = () => {
          const sectoresSection = document.querySelector("#sectores");
          if (sectoresSection) {
            // Use requestAnimationFrame to ensure DOM is fully rendered
            requestAnimationFrame(() => {
              const navHeight = 80;
              const offset = 20;
              const targetY = sectoresSection.offsetTop - navHeight - offset;

              // Force scroll using both methods for better compatibility
              window.scrollTo({ top: targetY, behavior: "smooth" });

              // Also use GSAP as fallback
              gsap.to(window, {
                scrollTo: { y: targetY, autoKill: false },
                duration: 1,
                ease: "power2.out",
              });

              // Refresh ScrollTrigger after navigation
              setTimeout(() => {
                ScrollTrigger.refresh();
              }, 100);
            });
            setPendingScroll(null);
          } else {
            // If sectores section not found, try again after a short delay
            console.log("Sectores section not found, retrying...");
            setTimeout(scrollToSectores, 100);
          }
        };

        // Start with a delay to ensure component is mounted and animations are ready
        setTimeout(scrollToSectores, 500); // Increased delay
      } else if (pendingScroll === "nosotros") {
        // Scroll to nosotros section
        const scrollToNosotros = () => {
          const nosotrosSection = document.querySelector("#nosotros");
          if (nosotrosSection) {
            requestAnimationFrame(() => {
              const navHeight = 80;
              const offset = 20;
              const targetY = nosotrosSection.offsetTop - navHeight - offset;

              window.scrollTo({ top: targetY, behavior: "smooth" });

              gsap.to(window, {
                scrollTo: { y: targetY, autoKill: false },
                duration: 1,
                ease: "power2.out",
              });

              // Refresh ScrollTrigger after navigation
              setTimeout(() => {
                ScrollTrigger.refresh();
              }, 100);
            });
            setPendingScroll(null);
          } else {
            setTimeout(scrollToNosotros, 100);
          }
        };

        setTimeout(scrollToNosotros, 500);
      } else if (pendingScroll === "contacto") {
        const scrollToFooter = () => {
          const footer = document.querySelector("#footer");
          if (footer) {
            requestAnimationFrame(() => {
              const navHeight = 80;
              const offset = 20;
              const targetY = Math.max(
                footer.offsetTop - navHeight - offset,
                0
              );

              window.scrollTo({ top: targetY, behavior: "smooth" });
              gsap.to(window, {
                scrollTo: { y: targetY, autoKill: false },
                duration: 1,
                ease: "power2.out",
              });

              setTimeout(() => {
                ScrollTrigger.refresh();
              }, 100);
            });
            setPendingScroll(null);
          } else {
            setTimeout(scrollToFooter, 100);
          }
        };
        setTimeout(scrollToFooter, 500);
      }
    }

    // Refresh ScrollTrigger when returning to home view
    if (currentView === "home" && !pendingScroll) {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
    }
  }, [currentView, pendingScroll]);

  return (
    <main style={{ overflow: isTransitioning ? "hidden" : "visible" }}>
      <NavBar
        ref={navBarRef}
        currentView={currentView}
        onNavScroll={handleNavScroll}
        isVisible={true}
      />
      {currentView === "home" && (
        <>
          <Inicio />
          <Sectores onAgendarClick={openCalendly} />
          <Nosotros onAgendarClick={openCalendly} />
        </>
      )}
      <WhatsAppButton />
      <Footer onAgendarClick={openCalendly} />
    </main>
  );
};

export default App;
