// /components/NavBar.jsx
import React, {
  useRef,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {
  logoHangingAnimation,
  navMenuAnimation,
  initNavbarScrollVisibility,
} from "../animation";

gsap.registerPlugin(ScrollToPlugin);

// Altura del navbar (id/clases típicas). Fallback 80px.

const NavBar = forwardRef(({ onNavScroll }, ref) => {
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const navbarRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const scrollCleanupRef = useRef(null);

  useImperativeHandle(ref, () => ({
    // Expose methods if needed
  }));

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Inicializa la visibilidad del navbar basada en el scroll
  useEffect(() => {
    if (navbarRef.current) {
      // Limpiar el listener de scroll anterior
      if (scrollCleanupRef.current) {
        scrollCleanupRef.current();
      }

      // Inicializar nueva visibilidad por scroll
      scrollCleanupRef.current = initNavbarScrollVisibility(navbarRef.current);
    }

    return () => {
      if (scrollCleanupRef.current) {
        scrollCleanupRef.current();
      }
    };
  }, []);

  // Oculta/muestra el logo según isMobile
  useEffect(() => {
    if (logoRef.current) {
      if (isMobile) {
        logoRef.current.classList.add("logo-hidden");
      } else {
        logoRef.current.classList.remove("logo-hidden");
      }
    }
    // Oculta el nav en cada cambio de isMobile
    if (navRef.current) {
      navRef.current.classList.add("nav-hidden");
    }
  }, [isMobile]);

  useEffect(() => {
    const runAnimations = async () => {
      if (logoRef.current) gsap.set(logoRef.current, { autoAlpha: 1 });
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
    };

    runAnimations();
  }, [isMobile]);

  // Scroll a "Nosotros" dejando el H2 un poco por debajo del navbar
  const handleNosotrosCenter = (e) => {
    e.preventDefault();

    // Use the unified navigation system
    if (typeof onNavScroll === "function") {
      onNavScroll("nosotros");
    }
  };

  // Bloque del logo reutilizable
  const LogoBlock = () => (
    <div
      className="logo-container"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      style={{ cursor: "pointer" }}
    >
      <div className="logo-text" ref={logoRef}>
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
  );

  return (
    <nav
      ref={navbarRef}
      className={`navbar ${isMobile ? "mobile" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        opacity: 0,
        display: "none",
      }}
    >
      {/* Desktop: logo fuera */}
      {!isMobile && <LogoBlock />}

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
            // Solo llamar a onNavScroll, que maneja toda la lógica de navegación
            if (typeof onNavScroll === "function") onNavScroll("sectores");
          }}
        >
          Servicios
        </a>

        {/* Logo en medio solo en móvil */}
        {isMobile && <LogoBlock />}

        <a href="#nosotros" className="nav-link" onClick={handleNosotrosCenter}>
          Nosotros
        </a>

        <a
          href="#contacto"
          className="nav-link"
          onClick={(e) => {
            e.preventDefault();
            if (typeof onNavScroll === "function") onNavScroll("contacto");
          }}
        >
          Contacto
        </a>

        <a
          href="#agendar"
          className={`nav-link btn-primary ${""}`}
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
});

NavBar.displayName = "NavBar";

export default NavBar;
