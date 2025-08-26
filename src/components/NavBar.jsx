// /components/NavBar.jsx
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { logoHangingAnimation, navMenuAnimation } from "../animation";

gsap.registerPlugin(ScrollToPlugin);

// Altura del navbar (id/clases típicas). Fallback 80px.
const getNAV = () =>
  document.querySelector("#navbar, .site-nav, header")?.offsetHeight || 80;

const NavBar = React.forwardRef(
  (
    { onAnimationComplete, currentView, onNavScroll, isVisible = true },
    ref
  ) => {
    const logoRef = useRef(null);
    const navRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [hideOnScroll, setHideOnScroll] = useState(false);
    const [forceVisible, setForceVisible] = useState(false); // Nuevo estado para forzar visibilidad
    const forceVisibleTimeoutRef = useRef(null);

    // Función para activar la visibilidad forzada (será llamada desde Servicios)
    const activateForceVisible = () => {
      setForceVisible(true);
      setHideOnScroll(false); // Asegurar que esté visible

      // Limpiar timeout previo si existe
      if (forceVisibleTimeoutRef.current) {
        clearTimeout(forceVisibleTimeoutRef.current);
      }

      // Establecer timeout para desactivar la visibilidad forzada
      forceVisibleTimeoutRef.current = setTimeout(() => {
        setForceVisible(false);
      }, 2500); // Forzar visibilidad durante 15 segundos
    };

    // Exponer la función para que pueda ser llamada desde el componente padre
    React.useImperativeHandle(
      ref,
      () => ({
        activateForceVisible,
      }),
      []
    );

    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth <= 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);

      return () => {
        window.removeEventListener("resize", checkMobile);
        // Limpiar timeout al desmontar
        if (forceVisibleTimeoutRef.current) {
          clearTimeout(forceVisibleTimeoutRef.current);
        }
      };
    }, []);

    // Detecta scroll en móvil y oculta/muestra el navbar
    useEffect(() => {
      if (!isMobile) return;

      let lastScrollY = window.scrollY;
      let ticking = false;

      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const currentScrollY = window.scrollY;

            // Obtener la posición de la sección servicios
            const serviciosSection = document.querySelector("#servicios");
            const serviciosSectionTop = serviciosSection
              ? serviciosSection.offsetTop
              : 0;

            // Si forceVisible está activo, no cambiar el estado del navbar
            if (forceVisible) {
              lastScrollY = currentScrollY;
              ticking = false;
              return;
            }

            // Si está arriba de la sección servicios, ocultar siempre el navbar
            if (currentScrollY < serviciosSectionTop - 100) {
              // 100px de margen
              setHideOnScroll(true);
              lastScrollY = currentScrollY;
              ticking = false;
              return;
            }

            // Comportamiento normal de scroll una vez que llegue a servicios
            if (currentScrollY > lastScrollY) {
              setHideOnScroll(true); // Oculta al hacer cualquier scroll abajo
            } else if (currentScrollY < lastScrollY) {
              setHideOnScroll(false); // Muestra al hacer cualquier scroll arriba
            }
            lastScrollY = currentScrollY;
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile, forceVisible]); // Agregar forceVisible como dependencia

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

        onAnimationComplete?.();
      };

      runAnimations();
      // Solo depende de isMobile y onAnimationComplete
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

    // Scroll a "Nosotros" dejando el H2 un poco por debajo del navbar
    const handleNosotrosCenter = (e) => {
      e.preventDefault();

      if (typeof onNavScroll === "function") onNavScroll("inicio");

      setTimeout(() => {
        const navH = getNAV();
        const h2 = document.querySelector("#nosotros h2");
        const section = document.querySelector("#nosotros");

        let targetY = 0;
        const OFFSET_BELOW_NAV = 12;

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

        window.__skipNosotrosIntro = Date.now();

        gsap.to(window, {
          scrollTo: { y: targetY, autoKill: false },
          duration: 0.9,
          ease: "power2.out",
          onComplete: () => {
            setTimeout(() => {
              window.__skipNosotrosIntro = null;
            }, 1400);
          },
        });
      }, 300);
    };

    // Bloque del logo reutilizable
    const LogoBlock = () => (
      <div
        className="logo-container"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          onAnimationComplete?.();
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
        className={`navbar ${isMobile ? "mobile" : ""} ${
          isMobile && hideOnScroll && !forceVisible
            ? "navbar-hidden-mobile"
            : ""
        }`}
        style={{
          opacity: isVisible ? 1 : 0,
          visibility: isVisible ? "visible" : "hidden",
          transition: "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out",
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

              if (typeof onNavScroll === "function") onNavScroll("servicios");

              setTimeout(() => {
                const navH = getNAV();
                const serviciosSection = document.querySelector("#servicios");
                const serviciosTitle = document.querySelector("#servicios h2");

                let targetY = 0;
                const OFFSET_BELOW_NAV = 20; // Extra space below navbar

                if (serviciosTitle) {
                  const rect = serviciosTitle.getBoundingClientRect();
                  targetY = Math.max(
                    0,
                    Math.round(
                      window.pageYOffset + rect.top - navH - OFFSET_BELOW_NAV
                    )
                  );
                } else if (serviciosSection) {
                  const rect = serviciosSection.getBoundingClientRect();
                  targetY = Math.max(
                    0,
                    Math.round(
                      window.pageYOffset + rect.top - navH - OFFSET_BELOW_NAV
                    )
                  );
                }

                gsap.to(window, {
                  scrollTo: { y: targetY, autoKill: false },
                  duration: 1,
                  ease: "power2.out",
                });
              }, 100);
            }}
          >
            Servicios
          </a>

          {/* Logo en medio solo en móvil */}
          {isMobile && <LogoBlock />}

          <a
            href="#nosotros"
            className="nav-link"
            onClick={handleNosotrosCenter}
          >
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
  }
);

export default NavBar;
