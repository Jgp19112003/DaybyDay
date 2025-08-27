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

const heroPhases = [
  {
    id: "phase-1",
    title: "El Contexto del Mercado",
    lines: [
      "En un mercado donde el 92 % de los líderes consideran que la automatización es esencial para mantenerse competitivos,",
      "el 77 % ya está mejorando sus conversiones gracias a ella",
      "y el 70% planea incrementar su inversión en este ámbito,",
    ],
  },
  {
    id: "phase-2",
    title: "La Realidad",
    lines: [
      "Quedarse quieto no es una opción.",
      "El crecimiento escalable y sostenible no depende solo de la velocidad,",
      "sino de sistemas que eliminan tareas repetitivas,",
      "aumentan la capacidad operativa y trabajan preservando la esencia de marca.",
    ],
  },
  {
    id: "phase-3",
    title: "Nuestra Propuesta",
    lines: [
      "En Day by Day transformamos esa necesidad en estrategia.",
      "Diseñamos sistemas adaptativos de Automatización de Procesos y Marketing con IA",
      "que potencian la identidad, optimizan la gestión",
      "y liberan a los equipos para centrarse en lo que realmente genera valor.",
    ],
  },
  {
    id: "phase-4",
    title: "El Resultado",
    lines: ["Día a Día dispondrás del tiempo que tu empresa necesita."],
  },
];

const Inicio = () => {
  const logoRef = useRef(null);
  const sectionRef = useRef(null);
  const heroPhaseRefs = useRef(heroPhases.map(() => React.createRef()));
  const heroLineRefs = useRef(
    heroPhases.flatMap((phase) => phase.lines.map(() => React.createRef()))
  );

  useEffect(() => {
    if (!logoRef.current || !sectionRef.current) return;

    const currentSection = sectionRef.current;

    gsap.registerPlugin(ScrollTrigger);

    // Función para establecer la altura correcta del viewport en móviles
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Establecer altura inicial
    setVH();

    // Actualizar en cambio de tamaño (para rotación de pantalla)
    const handleResize = () => {
      setVH();
      // Refresh ScrollTrigger después de cambios de viewport
      if (window.ScrollTrigger) {
        setTimeout(() => {
          window.ScrollTrigger.refresh();
        }, 100);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", () => {
      setTimeout(handleResize, 150); // Delay más largo para iOS
    });

    // Listener específico para iOS que maneja el cambio de altura cuando aparecen/desaparecen las barras
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      window.addEventListener(
        "scroll",
        () => {
          // Solo actualizar la altura si hay un cambio significativo
          const currentVH = window.innerHeight * 0.01;
          const storedVH = parseFloat(
            document.documentElement.style.getPropertyValue("--vh")
          );
          if (Math.abs(currentVH - storedVH) > 0.5) {
            setVH();
          }
        },
        { passive: true }
      );
    }

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

      // Inicializar todas las fases como invisibles
      heroPhaseRefs.current.forEach((ref) => {
        gsap.set(ref.current, { opacity: 0, y: 100 });
      });
      heroLineRefs.current.forEach((ref) => {
        gsap.set(ref.current, { opacity: 0, y: 40 });
      });

      // Enhanced scroll animation con sistema de fases
      const isMobile = window.innerWidth <= 768;
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: currentSection,
          start: "top top",
          end: isMobile ? "+=1200vh" : "+=1000vh", // Mucho más scroll para más tiempo por fase
          scrub: isIOS ? 3 : isMobile ? 4 : 5, // Scroll aún más lento
          pin: true,
          anticipatePin: 1,
          refreshPriority: -1,
          invalidateOnRefresh: true,
          fastScrollEnd: isIOS ? true : false,
          onUpdate: (self) => {
            const progress = self.progress;

            // Definir las fases del scroll con MUCHO más espacio entre ellas
            // Fase 0: Logo visible (0% - 20%) - Más tiempo para apreciar el logo
            // Fase 1: Primera sección de hero (20% - 55%) - MUCHO MÁS TIEMPO para leer
            // Fase 2: Segunda sección de hero (55% - 75%) - Tiempo suficiente para leer
            // Fase 3: Tercera sección de hero (75% - 90%) - Tiempo suficiente para leer
            // Fase 4: Cuarta sección de hero (90% - 100%) - Tiempo final

            // Logo animation - permanece más tiempo visible
            if (progress <= 0.2) {
              gsap.set(logoRef.current, {
                opacity: 1,
                scale: 1,
                y: 0,
                force3D: true,
                willChange: isIOS ? "transform, opacity" : "auto",
              });
            } else if (progress > 0.2 && progress <= 0.55) {
              // Transición MUCHO MÁS SUAVE del logo a la primera fase
              const fadeProgress = (progress - 0.2) / 0.35; // Transición más larga
              gsap.set(logoRef.current, {
                opacity: 1 - fadeProgress, // Transición gradual original
                scale: 1 - fadeProgress * 0.3,
                y: -fadeProgress * (isMobile ? 150 : 200),
                force3D: true,
                willChange: isIOS ? "transform, opacity" : "auto",
              });
            } else {
              // Logo completamente invisible después de la primera fase
              gsap.set(logoRef.current, {
                opacity: 0,
                scale: 0.7,
                y: -(isMobile ? 150 : 200),
                force3D: true,
                willChange: isIOS ? "transform, opacity" : "auto",
              });
            }

            // Animación de fases del hero
            heroPhases.forEach((phase, phaseIdx) => {
              let phaseStart, phaseEnd;

              if (phaseIdx === 0) {
                // Primera fase: MUCHO MÁS TIEMPO - transición suave
                phaseStart = 0.2;
                phaseEnd = 0.55; // 35% del scroll total para la primera fase
              } else if (phaseIdx === 1) {
                // Segunda fase: tiempo considerable
                phaseStart = 0.55;
                phaseEnd = 0.75; // 20% del scroll
              } else if (phaseIdx === 2) {
                // Tercera fase: tiempo considerable
                phaseStart = 0.75;
                phaseEnd = 0.9; // 15% del scroll
              } else {
                // Cuarta fase: tiempo final
                phaseStart = 0.9;
                phaseEnd = 1.0; // 10% del scroll
              }

              let phaseOpacity = 0;
              let phaseY = 0;

              if (phaseIdx === 0) {
                // PRIMERA FASE: Transición suave original MÁS LENTA
                if (progress >= phaseStart && progress <= phaseEnd) {
                  const localProgress =
                    (progress - phaseStart) / (phaseEnd - phaseStart);
                  phaseOpacity = Math.min(1, localProgress * 1.5); // Aparición más lenta
                  phaseY = 100 - localProgress * 100; // Movimiento suave
                } else if (
                  progress > phaseEnd &&
                  phaseIdx < heroPhases.length - 1
                ) {
                  // Desaparece más gradualmente para dar lugar a la siguiente
                  const fadeOutStart = phaseEnd;
                  const fadeOutEnd = phaseEnd + 0.1; // Transición de salida más lenta

                  if (progress <= fadeOutEnd) {
                    const fadeOutProgress = (progress - fadeOutStart) / 0.1;
                    phaseOpacity = 1 - fadeOutProgress;
                    phaseY = -fadeOutProgress * 30; // Movimiento más sutil
                  } else {
                    phaseOpacity = 0;
                    phaseY = -30;
                  }
                }
              } else {
                // RESTO DE FASES: Sustitución más suave (no tan abrupta)
                if (progress >= phaseStart && progress <= phaseEnd) {
                  // Fase activa - pero con una ligera transición de entrada
                  const entryProgress = Math.min(
                    1,
                    (progress - phaseStart) / 0.05
                  ); // 5% para entrada
                  phaseOpacity = entryProgress;
                  phaseY = (1 - entryProgress) * 20; // Pequeño movimiento de entrada
                } else if (
                  progress > phaseEnd &&
                  phaseIdx < heroPhases.length - 1
                ) {
                  // Transición de salida más suave
                  const exitStart = phaseEnd;
                  const exitEnd = phaseEnd + 0.05; // 5% para salida

                  if (progress <= exitEnd) {
                    const exitProgress = (progress - exitStart) / 0.05;
                    phaseOpacity = 1 - exitProgress;
                    phaseY = -exitProgress * 20;
                  } else {
                    phaseOpacity = 0;
                    phaseY = -20;
                  }
                } else if (
                  phaseIdx === heroPhases.length - 1 &&
                  progress >= phaseStart
                ) {
                  // La última fase permanece visible
                  phaseOpacity = 1;
                  phaseY = 0;
                } else {
                  // Fase completamente inactiva
                  phaseOpacity = 0;
                  phaseY = 20;
                }
              }

              // Aplicar animación a la fase
              gsap.set(heroPhaseRefs.current[phaseIdx].current, {
                opacity: phaseOpacity,
                y: phaseY,
                force3D: true,
                willChange: isIOS ? "transform, opacity" : "auto",
              });

              // Animación de líneas individuales
              if (progress >= phaseStart && progress <= phaseEnd) {
                let lineIndex = heroPhases
                  .slice(0, phaseIdx)
                  .reduce((acc, ph) => acc + ph.lines.length, 0);

                phase.lines.forEach((_, lineIdx) => {
                  const lineDelay = phaseIdx === 0 ? 0.05 : 0.03; // Más delay en primera fase
                  const lineStart = phaseStart + lineIdx * lineDelay;

                  let lineOpacity = 0;
                  let lineY = 0;

                  if (phaseIdx === 0) {
                    // Primera fase: animación gradual de líneas MÁS LENTA
                    const lineProgress = Math.max(
                      0,
                      Math.min(1, (progress - lineStart) * 4) // Más lento que antes (era 8)
                    );
                    lineOpacity = lineProgress;
                    lineY =
                      (isMobile ? 25 : 35) -
                      lineProgress * (isMobile ? 25 : 35);
                  } else {
                    // Resto de fases: aparición más suave (no instantánea)
                    if (progress >= lineStart) {
                      const lineAppearProgress = Math.min(
                        1,
                        (progress - lineStart) / 0.02
                      );
                      lineOpacity = lineAppearProgress;
                      lineY = (1 - lineAppearProgress) * 15;
                    }
                  }

                  if (heroLineRefs.current[lineIndex + lineIdx]) {
                    gsap.set(
                      heroLineRefs.current[lineIndex + lineIdx].current,
                      {
                        opacity: lineOpacity,
                        y: lineY,
                        force3D: true,
                        willChange: isIOS ? "transform, opacity" : "auto",
                      }
                    );
                  }
                });
              } else {
                // Ocultar todas las líneas de fases inactivas
                let lineIndex = heroPhases
                  .slice(0, phaseIdx)
                  .reduce((acc, ph) => acc + ph.lines.length, 0);

                phase.lines.forEach((_, lineIdx) => {
                  if (heroLineRefs.current[lineIndex + lineIdx]) {
                    gsap.set(
                      heroLineRefs.current[lineIndex + lineIdx].current,
                      {
                        opacity: 0,
                        y: phaseIdx === 0 ? 35 : 15,
                        force3D: true,
                        willChange: isIOS ? "transform, opacity" : "auto",
                      }
                    );
                  }
                });
              }
            });

            // Reveal Servicios component al final - más tardío
            if (currentSection && progress > 0.98) {
              gsap.set(currentSection.nextElementSibling, {
                opacity: Math.max(0, (progress - 0.98) * 50),
                y: (1 - progress) * 50,
                force3D: true,
                willChange: isIOS ? "transform, opacity" : "auto",
              });
            }
          },
          onComplete: () => {
            // When animation completes, ensure servicios is fully visible
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
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);

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
        {/* Hero phases - aparecen y desaparecen por fases */}
        {heroPhases.map((phase, phaseIdx) => {
          let lineIndex = heroPhases
            .slice(0, phaseIdx)
            .reduce((acc, ph) => acc + ph.lines.length, 0);

          return (
            <div
              key={phase.id}
              ref={heroPhaseRefs.current[phaseIdx]}
              className={`hero-phase ${phase.id} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center max-w-4xl pointer-events-none`}
              style={{
                fontFamily: '"Inter", "Montserrat", Arial, sans-serif',
                fontWeight: 600,
                fontSize: "clamp(1.1rem, 2.8vw, 1.8rem)",
                lineHeight: 1.4,
                letterSpacing: "-0.01em",
                willChange: "transform, opacity",
                textShadow: "0 2px 16px rgba(0,0,0,0.18)",
                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.12))",
                padding: "0 0.5em",
                maxWidth: "48em",
                opacity: 0,
              }}
            >
              {phase.lines.map((line, lineIdx) => {
                const currentLineIndex = lineIndex + lineIdx;
                return (
                  <div
                    key={lineIdx}
                    ref={heroLineRefs.current[currentLineIndex]}
                    className="hero-line"
                    style={{
                      marginBottom:
                        lineIdx < phase.lines.length - 1 ? "0.5em" : 0,
                      opacity: 0,
                      willChange: "transform, opacity",
                      transition: "opacity 0.3s, transform 0.3s",
                      fontSize: "inherit",
                    }}
                  >
                    {line}
                  </div>
                );
              })}
            </div>
          );
        })}
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
        #inicio .hero-phase {
          font-family: "Inter", "Montserrat", Arial, sans-serif;
          font-weight: 600;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 16px rgba(0,0,0,0.18);
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.12));
          max-width: 48em;
        }
        #inicio .hero-phase.phase-2 .hero-line:first-child {
          font-weight: 700;
          font-size: 1.15em;
          margin-bottom: 1em;
          color: #f0f0f0;
        }
        #inicio .hero-phase.phase-4 {
          font-weight: 700;
          font-size: 1.1em;
          color: #e8e8e8;
          font-style: italic;
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
            /* Optimizaciones para iOS */
            -webkit-transform: translate3d(-50%, -50%, 0) !important;
            -webkit-backface-visibility: hidden;
            -webkit-perspective: 1000;
          }
          
          #inicio .logo-by {
            right: -60px;
            font-size: 50px;
          }
          #inicio .hero-phase {
            font-size: 0.95rem;
            max-width: 95vw;
            padding: 0 0.3em;
            line-height: 1.25;
            position: fixed !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            /* Optimizaciones para iOS */
            -webkit-transform: translate3d(-50%, -50%, 0) !important;
            -webkit-backface-visibility: hidden;
            -webkit-perspective: 1000;
          }
          #inicio .hero-phase.phase-2 .hero-line:first-child {
            font-size: 1.1em;
            margin-bottom: 0.8em;
          }
          #inicio .hero-phase.phase-4 {
            font-size: 1.05em;
          }
          #inicio .hero-line {
            margin-bottom: 0.3em;
            font-size: 1em;
            /* Optimizaciones para iOS */
            -webkit-transform: translateZ(0);
            -webkit-backface-visibility: hidden;
          }
          
          /* Forzar altura de pantalla completa en móvil */
          #inicio {
            height: 100vh !important;
            height: 100dvh !important; /* Para navegadores que lo soporten */
            min-height: 100vh !important;
            min-height: 100dvh !important;
            /* Optimizaciones para iOS scroll */
            -webkit-overflow-scrolling: touch;
            overflow: hidden;
            -webkit-transform: translateZ(0);
            -webkit-backface-visibility: hidden;
          }
        }
        
        /* Optimizaciones específicas para iOS */
        @supports (-webkit-touch-callout: none) {
          #inicio {
            -webkit-transform: translate3d(0, 0, 0);
            -webkit-backface-visibility: hidden;
            -webkit-perspective: 1000;
          }
          
          #inicio .logo-container,
          #inicio .hero-phase,
          #inicio .hero-line {
            -webkit-transform: translateZ(0);
            -webkit-backface-visibility: hidden;
            will-change: transform;
          }
        }
      `}</style>
    </>
  );
};

export default Inicio;
