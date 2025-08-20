import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { logoHangingAnimation, navMenuAnimation } from "../animation";

gsap.registerPlugin(ScrollToPlugin);

// Altura del navbar (id/clases típicas). Fallback 80px.
const getNAV = () =>
  document.querySelector("#navbar, .site-nav, header")?.offsetHeight || 80;

const NavBar = ({ onAnimationComplete, currentView, onNavScroll }) => {
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const runAnimations = async () => {
      if (logoRef.current) logoRef.current.classList.add("logo-hidden");
      if (navRef.current) navRef.current.classList.add("nav-hidden");

      if (isMobile) {
        navMenuAnimation(navRef.current);
        setTimeout(() => {
          logoHangingAnimation(logoRef.current);
        }, 200);
      } else {
        logoHangingAnimation(logoRef.current);
        await navMenuAnimation(navRef.current);
      }

      onAnimationComplete?.();
    };

    runAnimations();
    return () => window.removeEventListener("resize", checkMobile);
  }, [onAnimationComplete, isMobile]);

  // Scroll suave genérico
  const handleNavClick = (e, target) => {
    e.preventDefault();
    gsap.to(window, {
      scrollTo: { y: target, autoKill: false },
      duration: 1,
      ease: "power2.out",
    });
  };

  // 👉 Scroll a "Nosotros" dejando el H2 un poco por debajo del navbar
  // y SIN disparar la animación de cartas durante el scroll.
  const handleNosotrosCenter = (e) => {
    e.preventDefault();

    // Primero navegar a inicio
    if (typeof onNavScroll === "function") onNavScroll("inicio");

    // Luego hacer scroll al apartado nosotros después de un delay más largo
    setTimeout(() => {
      const navH = getNAV();
      const h2 = document.querySelector("#nosotros h2");
      const section = document.querySelector("#nosotros");

      let targetY = 0;
      const OFFSET_BELOW_NAV = 12; // h2 queda un poquito por debajo del navbar (no centrado)

      if (h2) {
        const rect = h2.getBoundingClientRect();
        targetY = Math.max(
          0,
          Math.round(window.pageYOffset + rect.top - navH - OFFSET_BELOW_NAV)
        );
      } else if (section) {
        const rect = section.getBoundingClientRect();
        targetY = Math.max(
          0,
          Math.round(window.pageYOffset + rect.top - navH - 8)
        );
      }

      // ⚠️ Bandera temporal para que Nosotros.jsx NO inicie la intro de cartas
      window.__skipNosotrosIntro = Date.now();

      gsap.to(window, {
        scrollTo: { y: targetY, autoKill: false },
        duration: 0.9,
        ease: "power2.out",
        onComplete: () => {
          // Quita la bandera un rato después, por si hay inercia de scroll
          setTimeout(() => {
            window.__skipNosotrosIntro = null;
          }, 1400);
        },
      });
    }, 300);
  };

  return (
    <nav className={`navbar ${isMobile ? "mobile" : ""}`}>
      <div
        className="logo-container"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          onAnimationComplete?.();
        }}
        style={{ cursor: "pointer" }}
      >
        <div className="logo-text logo-hidden" ref={logoRef}>
          <div className="logo-line logo-first-line">
            <span className="logo-day">Day</span>
          </div>
          <div className="logo-line logo-second-line">
            <span className="logo-day">Da</span>
            <span className="logo-y rotated">y</span>
            <span className="logo-by rotated">by</span>
          </div>
        </div>
      </div>

      <div
        className={`nav-container ${isMobile ? "nav-mobile" : ""} nav-hidden`}
        ref={navRef}
      >
        <a
          href="#"
          className="nav-link"
          onClick={(e) => {
            e.preventDefault();
            if (typeof onNavScroll === "function") onNavScroll("inicio");
          }}
        >
          Inicio
        </a>

        <a
          href="#servicios"
          className="nav-link"
          onClick={(e) => {
            e.preventDefault();
            if (typeof onNavScroll === "function") onNavScroll("inicio");
          }}
        >
          Servicios
        </a>

        <a href="#nosotros" className="nav-link" onClick={handleNosotrosCenter}>
          Nosotros
        </a>

        <a
          href="#contacto"
          className="nav-link"
          onClick={(e) => handleNavClick(e, "#contacto")}
        >
          Contacto
        </a>

        <a
          href="#agendar"
          className={`nav-link btn-primary ${
            currentView === "agendar" ? "active" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            if (typeof onNavScroll === "function") onNavScroll("agendar");
          }}
          style={{
            padding: isMobile ? "12px 20px" : "",
            fontSize: isMobile ? "16px" : "",
            marginTop: isMobile ? "10px" : "",
            background: isMobile ? "linear-gradient(#ff3131, #d00000)" : "",
            fontWeight: isMobile ? "bold" : "",
          }}
        >
          Agenda una reunión
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
