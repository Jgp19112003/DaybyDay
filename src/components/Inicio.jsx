// /components/Inicio.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

// Config exclusivo de Inicio
const LOGO_COLOR = "#fff";
const LOGO_SIZE = "clamp(6rem, 30vw, 24rem)";

// Copia exacta de logoHangingAnimation del archivo animation.js
const inicioLogoHangingAnimation = (logoElement) => {
  if (!logoElement) return;

  const firstDay = logoElement.querySelector(".logo-first-line .logo-day");
  const secondDay = logoElement.querySelector(".logo-second-line .logo-day");
  const secondY = logoElement.querySelector(".logo-second-line .logo-y");
  const by = logoElement.querySelector(".logo-second-line .logo-by");

  gsap.set([firstDay, secondDay, secondY, by], { clearProps: "all" });

  // Aumentar valores proporcionalmente para logo más grande
  gsap.set([firstDay, secondDay, secondY, by], {
    y: -400, // Más distancia inicial para logo grande
    opacity: 0,
    rotation: (i) => -30 + i * 15, // Más rotación inicial
    force3D: true,
  });

  // Now remove initial hiding class
  logoElement.classList.remove("logo-hidden");

  gsap.to(firstDay, {
    y: 0,
    opacity: 1,
    rotation: 0,
    duration: 1,
    ease: "bounce.out",
    delay: 0.2,
    force3D: true,
  });

  gsap.to(secondDay, {
    y: 0,
    opacity: 1,
    rotation: 0,
    duration: 1, // Same as firstDay
    ease: "bounce.out",
    delay: 0.4,
    force3D: true,
  });

  gsap.to(secondY, {
    y: 0,
    opacity: 1,
    rotation: 12, // Keep the original rotation
    duration: 0.9,
    ease: "bounce.out",
    delay: 0.6,
    force3D: true,
  });

  gsap.to(by, {
    y: 0,
    opacity: 1,
    rotation: 12, // Keep the original rotation
    duration: 0.8,
    ease: "bounce.out",
    delay: 0.8,
    force3D: true,
  });
};

const heroLines = [
  "En un mercado donde el 92 % de los líderes consideran que la automatización es esencial para mantenerse competitivos,",
  "el 77 % ya está mejorando sus conversiones gracias a ella",
  "y el 70% planea incrementar su inversión en este ámbito",
];

const Inicio = () => {
  const logoRef = useRef(null);
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const heroLineRefs = useRef(heroLines.map(() => React.createRef()));

  useEffect(() => {
    if (!logoRef.current || !sectionRef.current) return;

    const currentSection = sectionRef.current; // Capturar la referencia al inicio del efecto

    gsap.registerPlugin(ScrollTrigger);

    // Función para establecer la altura correcta del viewport en móviles
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Establecer altura inicial
    setVH();

    // Actualizar en cambio de tamaño (para rotación de pantalla)
    window.addEventListener("resize", setVH);
    window.addEventListener("orientationchange", () => {
      setTimeout(setVH, 100); // Delay para esperar a que el navegador se actualice
    });

    // Force scroll to top on component mount to ensure animation starts from beginning
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // Aplicar clase logo-hidden inicialmente
    logoRef.current.classList.add("logo-hidden");

    // Small delay to ensure everything is properly initialized
    const initDelay = setTimeout(() => {
      // Usar la función copiada exacta del navbar
      inicioLogoHangingAnimation(logoRef.current);

      // Inicializa hero invisible y abajo
      gsap.set(heroRef.current, { opacity: 0, y: 100 });
      heroLineRefs.current.forEach((ref) => {
        gsap.set(ref.current, { opacity: 0, y: 40 });
      });

      // Enhanced scroll animation - SLOWED DOWN significantly
      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: currentSection,
          start: "top top",
          end: "+=150vh", // Increased from 100vh to 150vh for slower animation
          scrub: 2, // Increased from 1 to 2 for slower response
          pin: true,
          anticipatePin: 1,
          refreshPriority: -1,
          onUpdate: (self) => {
            const progress = self.progress;

            // Logo animation (desaparece y sube)
            gsap.set(logoRef.current, {
              scale: 1 - progress * 0.6, // Reduced scale change
              y: -progress * 250, // Reduced movement
              opacity: Math.max(0, 1 - progress * 1.5), // Adjusted for full transparency
              transformOrigin: "center center",
            });

            // Hero container animation (fade-in y sube)
            gsap.set(heroRef.current, {
              opacity: Math.min(1, progress * 2),
              y: 100 - progress * 100,
            });

            // Animación secuencial de líneas del hero
            heroLineRefs.current.forEach((ref, idx) => {
              // Cada línea aparece con un pequeño retraso según el progreso
              const lineProgress = Math.max(
                0,
                Math.min(1, (progress - 0.2 * idx) * 2)
              );
              gsap.set(ref.current, {
                opacity: lineProgress,
                y: 40 - lineProgress * 40,
              });
            });

            // Reveal Servicios component
            if (currentSection) {
              gsap.set(currentSection.nextElementSibling, {
                opacity: progress,
                y: (1 - progress) * 100, // Slide up effect
              });
            }
          },
          onComplete: () => {
            // When animation completes, dispatch event to show Servicios
            window.dispatchEvent(new CustomEvent("inicioComplete"));
          },
        },
      });

      // Store timeline reference for cleanup
      currentSection._scrollTimeline = scrollTimeline;
    }, 150); // Increased delay

    // Cleanup
    return () => {
      clearTimeout(initDelay);

      // Limpiar event listeners del viewport
      window.removeEventListener("resize", setVH);
      window.removeEventListener("orientationchange", setVH);

      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === currentSection) {
          trigger.kill();
        }
      });
      if (currentSection?._scrollTimeline) {
        currentSection._scrollTimeline.kill();
      }
    };
  }, []);

  // Additional effect to handle page visibility changes (when user returns to tab)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        // Small delay to ensure proper re-initialization
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <section
        id="inicio"
        ref={sectionRef}
        className="w-full bg-[#181414] flex flex-col items-center justify-center overflow-hidden relative"
        style={{
          // Para móviles, usar 100dvh si está disponible (altura dinámica del viewport)
          height: "var(--vh, 100vh)",
          minHeight: "100vh",
        }}
        aria-label="Inicio - Day by Day"
      >
        {/* Day by Day Logo */}
        <div
          className="logo-container fixed top-1/2 left-1/2 z-10"
          style={{
            transform: "translate(-50%, -50%)",
            willChange: "transform, opacity",
          }}
        >
          <div
            className="logo-text logo-hidden"
            ref={logoRef}
            style={{
              lineHeight: 1,
              fontSize: LOGO_SIZE,
              color: LOGO_COLOR,
              willChange: "transform, opacity",
            }}
          >
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
        {/* Hero text - aparece inversamente al logo */}
        <div
          ref={heroRef}
          className="hero-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center max-w-2xl pointer-events-none"
          style={{
            fontFamily: '"Inter", "Montserrat", Arial, sans-serif',
            fontWeight: 600,
            fontSize: "clamp(1.2rem, 3vw, 2rem)",
            lineHeight: 1.35,
            letterSpacing: "-0.01em",
            willChange: "transform, opacity",
            textShadow: "0 2px 16px rgba(0,0,0,0.18)",
            filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.12))",
            padding: "0 0.5em",
            maxWidth: "38em",
          }}
        >
          {heroLines.map((line, idx) => (
            <div
              key={idx}
              ref={heroLineRefs.current[idx]}
              className="hero-line"
              style={{
                marginBottom: idx < heroLines.length - 1 ? "0.5em" : 0,
                opacity: 0,
                willChange: "transform, opacity",
                transition: "opacity 0.3s, transform 0.3s",
                fontSize: "inherit",
              }}
            >
              {line}
            </div>
          ))}
        </div>
      </section>

      <style>{`
        #inicio .logo-day,
        #inicio .logo-y,
        #inicio .logo-by {
          color: ${LOGO_COLOR} !important;
        }
        #inicio .logo-text {
          font-size: 14px;
        }
        #inicio .logo-day,
        #inicio .logo-y {
          font-size: 100px;
        }
        #inicio .logo-by {
          font-family: "Inter", sans-serif;
          font-weight: 400;
          font-size: 66px;
          font-style: italic;
          position: absolute;
          top: -24px;
          right: -90px;
          letter-spacing: -0.02em;
          color: ${LOGO_COLOR} !important;
        }
        #inicio .hero-text {
          font-family: "Inter", "Montserrat", Arial, sans-serif;
          font-weight: 600;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 16px rgba(0,0,0,0.18);
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.12));
          max-width: 38em;
        }
        #inicio .hero-line {
          margin-bottom: 0.5em;
        }
        @media (max-width: 768px) {
          /* Asegurar que el logo esté perfectamente centrado en móvil */
          #inicio .logo-container {
            position: fixed !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            z-index: 10;
          }
          
          #inicio .logo-by {
            right: -60px;
            font-size: 50px;
          }
          #inicio .hero-text {
            font-size: 1.02rem;
            max-width: 97vw;
            padding: 0 0.2em;
            line-height: 1.22;
            position: fixed !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
          }
          #inicio .hero-line {
            margin-bottom: 0.25em;
            font-size: 1em;
          }
          
          /* Forzar altura de pantalla completa en móvil */
          #inicio {
            height: 100vh !important;
            height: 100dvh !important; /* Para navegadores que lo soporten */
            min-height: 100vh !important;
            min-height: 100dvh !important;
          }
        }
      `}</style>
    </>
  );
};

export default Inicio;
