import React, { useRef, useEffect, useState } from "react";
import { logoHangingAnimation, navMenuAnimation } from "../animation";

const NavBar = ({ onAnimationComplete, onAgendarClick, currentView }) => {
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const runAnimations = async () => {
      // Always start with logo hidden for animation
      if (logoRef.current) {
        logoRef.current.classList.add("logo-hidden");
      }
      if (navRef.current) {
        navRef.current.classList.add("nav-hidden"); // Add hidden class to nav
      }

      if (isMobile) {
        // On mobile: nav links start immediately, logo starts 0.3s later
        navMenuAnimation(navRef.current);
        setTimeout(() => {
          logoHangingAnimation(logoRef.current);
        }, 200); // Start logo 0.3 seconds after nav links
      } else {
        // On desktop: logo and nav links simultaneously
        logoHangingAnimation(logoRef.current);
        await navMenuAnimation(navRef.current);
      }

      if (onAnimationComplete) {
        onAnimationComplete();
      }
    };

    runAnimations();

    return () => window.removeEventListener("resize", checkMobile);
  }, [onAnimationComplete, isMobile]);

  return (
    <nav className={`navbar ${isMobile ? "mobile" : ""}`}>
      <div
        className="logo-container"
        onClick={() => {
          if (window.location.hash !== "") {
            window.location.hash = "";
            if (onAnimationComplete) onAnimationComplete();
          }
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
        className={`nav-container ${isMobile ? "nav-mobile" : ""} nav-hidden`} // Add nav-hidden class
        ref={navRef}
      >
        <a href="#" className="nav-link">
          Inicio
        </a>
        <a href="#servicios" className="nav-link">
          Servicios
        </a>
        <a href="#nosotros" className="nav-link">
          Nosotros
        </a>
        <a href="#contacto" className="nav-link">
          Contacto
        </a>
        <a
          href="#agendar"
          className={`nav-link btn-primary ${
            currentView === "agendar" ? "active" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            if (currentView !== "agendar") {
              window.location.hash = "agendar";
              if (onAgendarClick) onAgendarClick(); // Trigger agendar-specific logic
            }
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
