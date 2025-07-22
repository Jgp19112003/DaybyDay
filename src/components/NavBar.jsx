import React, { useRef, useEffect, useState } from "react";
import { logoHangingAnimation, navMenuAnimation } from "../animation";

const NavBar = ({ onAnimationComplete }) => {
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
      // Animate logo and nav links on both desktop and mobile
      logoHangingAnimation(logoRef.current);
      await navMenuAnimation(navRef.current);
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    };

    runAnimations();

    return () => window.removeEventListener("resize", checkMobile);
  }, [onAnimationComplete, isMobile]);

  return (
    <nav className={`navbar ${isMobile ? "mobile" : ""}`}>
      <div className="logo-container">
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
        className={`nav-container ${isMobile ? "nav-mobile" : ""}`}
        ref={navRef}
      >
        <a href="#servicios" className="nav-link">
          Servicios
        </a>
        <a href="#nosotros" className="nav-link">
          Nosotros
        </a>
        <a href="#contacto" className="nav-link">
          Contacto
        </a>
        <a href="#agendar" className="nav-link btn-primary">
          Agenda una reunion
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
