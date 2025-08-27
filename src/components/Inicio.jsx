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

  // Referencias para las cartas de métricas de la última fase
  const metricsCardsRef = useRef([]);
  const metricsContainerRef = useRef(null);

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

      // Inicializar todas las fases como invisibles con mayor recorrido
      heroPhaseRefs.current.forEach((ref) => {
        gsap.set(ref.current, { opacity: 0, y: 200 });
      });
      heroLineRefs.current.forEach((ref) => {
        gsap.set(ref.current, { opacity: 0, y: 80 });
      });

      // Inicializar cartas de métricas como invisibles
      if (metricsContainerRef.current) {
        gsap.set(metricsContainerRef.current, { opacity: 0, y: 100 });
        console.log("Métricas container inicializado como invisible");
      }
      metricsCardsRef.current.forEach((ref, idx) => {
        if (ref) {
          gsap.set(ref, { opacity: 0, y: 60, scale: 0.9 });
          console.log(`Carta métrica ${idx} inicializada como invisible`);
        }
      });

      // Enhanced scroll animation - SIMPLIFICADO

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: currentSection,
          start: "top top",
          end: "+=1800vh", // Más scroll para transiciones suaves
          scrub: 3, // Scroll suave pero no excesivo
          pin: true,
          anticipatePin: 1,
          refreshPriority: -1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const isMobile = window.innerWidth <= 768;

            // Logo animation - se desvanece gradualmente
            if (progress <= 0.15) {
              gsap.set(logoRef.current, {
                opacity: 1,
                scale: 1,
                y: 0,
                force3D: true,
              });
            } else if (progress > 0.15 && progress <= 0.25) {
              // Transición suave del logo
              const fadeProgress = (progress - 0.15) / 0.1;
              gsap.set(logoRef.current, {
                opacity: 1 - fadeProgress,
                scale: 1 - fadeProgress * 0.2,
                y: -fadeProgress * (isMobile ? 150 : 200),
                force3D: true,
              });
            } else {
              // Logo completamente invisible
              gsap.set(logoRef.current, {
                opacity: 0,
                scale: 0.8,
                y: -(isMobile ? 150 : 200),
                force3D: true,
              });
            }

            // Animación de fases del hero restaurada y mejorada
            heroPhases.forEach((phase, phaseIdx) => {
              let phaseStart, phaseEnd;

              // Distribución de fases a lo largo del scroll
              const phaseDuration = 0.3; // 30% de duración para cada fase
              const transitionDuration = 0.08; // Transiciones rápidas
              const gap = 0.05; // Gap entre fases

              if (phaseIdx === 0) {
                phaseStart = 0.2; // Empezar después del logo
                phaseEnd = phaseStart + phaseDuration;
              } else if (phaseIdx === 1) {
                phaseStart = 0.2 + phaseDuration + gap;
                phaseEnd = phaseStart + phaseDuration;
              } else if (phaseIdx === 2) {
                phaseStart = 0.2 + (phaseDuration + gap) * 2;
                phaseEnd = phaseStart + phaseDuration;
              } else {
                // Última fase permanece hasta el final
                phaseStart = 0.2 + (phaseDuration + gap) * 3;
                phaseEnd = 1.0;
              }

              let phaseOpacity = 0;
              let phaseY = 200;

              // Lógica de visibilidad de fase
              if (progress < phaseStart) {
                phaseOpacity = 0;
                phaseY = 200;
              } else if (
                progress >= phaseStart &&
                progress <= phaseStart + transitionDuration
              ) {
                // Entrada suave
                const entryProgress =
                  (progress - phaseStart) / transitionDuration;
                phaseOpacity = entryProgress;
                phaseY = 200 - entryProgress * 200;
              } else if (
                progress > phaseStart + transitionDuration &&
                progress < phaseEnd - transitionDuration
              ) {
                // Completamente visible
                phaseOpacity = 1;
                phaseY = 0;
              } else if (
                progress >= phaseEnd - transitionDuration &&
                progress <= phaseEnd &&
                phaseIdx < heroPhases.length - 1
              ) {
                // Salida suave (solo para fases que no son la última)
                const exitProgress =
                  (progress - (phaseEnd - transitionDuration)) /
                  transitionDuration;
                phaseOpacity = 1 - exitProgress;
                phaseY = -exitProgress * 150;
              } else if (
                progress > phaseEnd &&
                phaseIdx < heroPhases.length - 1
              ) {
                phaseOpacity = 0;
                phaseY = -150;
              }

              // Para la última fase, permanece visible
              if (
                phaseIdx === heroPhases.length - 1 &&
                progress >= phaseStart + transitionDuration
              ) {
                phaseOpacity = 1;
                phaseY = 0;
              }

              // Aplicar animación a la fase
              if (heroPhaseRefs.current[phaseIdx]?.current) {
                gsap.set(heroPhaseRefs.current[phaseIdx].current, {
                  opacity: phaseOpacity,
                  y: phaseY,
                  force3D: true,
                });
              }

              // Animar líneas de la fase
              let lineIndex = heroPhases
                .slice(0, phaseIdx)
                .reduce((acc, ph) => acc + ph.lines.length, 0);

              phase.lines.forEach((_, lineIdx) => {
                if (heroLineRefs.current[lineIndex + lineIdx]?.current) {
                  gsap.set(heroLineRefs.current[lineIndex + lineIdx].current, {
                    opacity: phaseOpacity,
                    y: phaseY,
                    force3D: true,
                  });
                }
              });

              // MOSTRAR CARTAS DESPUÉS DE PHASE-3 (índice 2)
              if (phaseIdx === 2) {
                // phase-3 "Nuestra Propuesta"
                // Las cartas aparecen cuando phase-3 está completamente visible
                if (
                  progress > phaseStart + transitionDuration &&
                  progress < phaseEnd - transitionDuration
                ) {
                  // Phase-3 está completamente visible, mostrar cartas
                  const metricsDelay = 0.3; // Pequeño delay después de que el texto esté visible
                  const metricsProgress = Math.min(
                    1,
                    (progress - (phaseStart + transitionDuration)) /
                      (phaseDuration - 2 * transitionDuration - metricsDelay)
                  );

                  if (metricsProgress > 0) {
                    // Animar contenedor de métricas
                    if (metricsContainerRef.current) {
                      const containerOpacity = Math.min(1, metricsProgress * 2);
                      const containerY = 100 - containerOpacity * 100;

                      gsap.set(metricsContainerRef.current, {
                        opacity: containerOpacity,
                        y: containerY,
                        force3D: true,
                      });
                    }

                    // Animar cartas individuales con stagger
                    metricsCardsRef.current.forEach((ref, cardIdx) => {
                      if (ref) {
                        const cardDelay = cardIdx * 0.1; // Stagger entre cartas
                        const cardProgress = Math.max(
                          0,
                          Math.min(1, (metricsProgress - cardDelay) * 2)
                        );

                        if (cardProgress > 0) {
                          const cardOpacity = cardProgress;
                          const cardY = 60 - cardProgress * 60;
                          const cardScale = 0.9 + cardProgress * 0.1;

                          gsap.set(ref, {
                            opacity: cardOpacity,
                            y: cardY,
                            scale: cardScale,
                            force3D: true,
                          });
                        }
                      }
                    });
                  }
                } else {
                  // Phase-3 no está completamente visible, ocultar cartas
                  if (metricsContainerRef.current) {
                    gsap.set(metricsContainerRef.current, {
                      opacity: 0,
                      y: 100,
                      force3D: true,
                    });
                  }

                  metricsCardsRef.current.forEach((ref) => {
                    if (ref) {
                      gsap.set(ref, {
                        opacity: 0,
                        y: 60,
                        scale: 0.9,
                        force3D: true,
                      });
                    }
                  });
                }
              }
            });
          },
          onComplete: () => {
            // Animation completes successfully
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
              className={`hero-phase ${phase.id} text-white text-center pointer-events-none`}
              style={{
                fontFamily: '"Inter", "Montserrat", Arial, sans-serif',
                fontWeight: 600,
                fontSize: "clamp(1.1rem, 2.8vw, 1.8rem)",
                lineHeight: 1.4,
                letterSpacing: "-0.01em",
                willChange: "transform, opacity",
                textShadow: "0 2px 16px rgba(0,0,0,0.18)",
                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.12))",
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

        {/* Cartas de métricas - aparecen en la última fase */}
        <div
          ref={metricsContainerRef}
          className="fixed"
          style={{
            zIndex: 9999,
            width: "100%",
            maxWidth: "750px",
            padding: "0 2rem",
            top: "60%",
            left: "50%",
            transform: "translateX(-50%)",
            background: "transparent",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-[550px] mx-auto">
            {/* IMPACTO - SIMPLIFICADO */}
            <div
              ref={(el) => (metricsCardsRef.current[0] = el)}
              style={{
                background: "#ffffff",
                border: "2px solid #de0015",
                borderRadius: "16px",
                padding: "16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                color: "#181414",
                opacity: 0,
                visibility: "hidden",
                minHeight: "120px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "12px",
                  color: "#de0015",
                  fontWeight: "700",
                  fontSize: "12px",
                  textTransform: "uppercase",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#de0015",
                    boxShadow: "0 0 10px rgba(255, 49, 49, 0.6)",
                  }}
                ></div>
                IMPACTO
              </div>
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: "900",
                  color: "#de0015",
                  marginBottom: "8px",
                }}
              >
                80%
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#181414",
                  margin: 0,
                  lineHeight: "1.4",
                }}
              >
                De las empresas aumentan sus oportunidades de negocio y
                crecimiento al automatizar con IA.
              </p>
            </div>

            {/* RENDIMIENTO - SIMPLIFICADO */}
            <div
              ref={(el) => (metricsCardsRef.current[1] = el)}
              style={{
                background: "#ffffff",
                border: "2px solid #de0015",
                borderRadius: "16px",
                padding: "16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                color: "#181414",
                opacity: 0,
                visibility: "hidden",
                minHeight: "120px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "12px",
                  color: "#de0015",
                  fontWeight: "700",
                  fontSize: "12px",
                  textTransform: "uppercase",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#de0015",
                    boxShadow: "0 0 10px rgba(255, 49, 49, 0.6)",
                  }}
                ></div>
                RENDIMIENTO
              </div>
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: "900",
                  color: "#de0015",
                  marginBottom: "8px",
                }}
              >
                77%
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#181414",
                  margin: 0,
                  lineHeight: "1.4",
                }}
              >
                Mejora su tasa de conversiones con Marketing de Automatización +
                IA. Más rápido, más personalizado.
              </p>
            </div>

            {/* RESULTADO - SIMPLIFICADO */}
            <div
              ref={(el) => (metricsCardsRef.current[2] = el)}
              style={{
                background: "#ffffff",
                border: "2px solid #de0015",
                borderRadius: "16px",
                padding: "16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                color: "#181414",
                opacity: 0,
                visibility: "hidden",
                minHeight: "120px",
                gridColumn: "1 / -1",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "12px",
                  color: "#de0015",
                  fontWeight: "700",
                  fontSize: "12px",
                  textTransform: "uppercase",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#de0015",
                    boxShadow: "0 0 10px rgba(255, 49, 49, 0.6)",
                  }}
                ></div>
                RESULTADO
              </div>
              <div
                style={{
                  background: "#de0015",
                  color: "#fff",
                  padding: "6px 10px",
                  borderRadius: "16px",
                  fontSize: "12px",
                  fontWeight: "700",
                  marginBottom: "8px",
                  display: "inline-block",
                }}
              >
                IA + Marketing Automatizado
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#181414",
                  margin: 0,
                  lineHeight: "1.4",
                }}
              >
                Orquestamos datos y campañas con sistemas automatizados que
                preservan y escalan la esencia de tu marca.
              </p>
            </div>
          </div>
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
        #inicio .hero-phase {
          font-family: "Inter", "Montserrat", Arial, sans-serif;
          font-weight: 600;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 16px rgba(0,0,0,0.18);
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.12));
          max-width: 42em; /* Reducido de 48em a 42em para texto más compacto */
          /* Centrado perfecto en desktop */
          position: fixed !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          width: 100%;
          max-width: 900px; /* Cambiado de 1200px a 900px */
          padding: 0 2rem;
          text-align: center;
          /* Optimizaciones de renderizado */
          -webkit-transform: translate3d(-50%, -50%, 0) !important;
          -webkit-backface-visibility: hidden;
          -webkit-perspective: 1000;
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
          /* Optimizaciones para desktop */
          -webkit-transform: translateZ(0);
          -webkit-backface-visibility: hidden;
        }
        
        /* Estilos específicos para DESKTOP - Centrado perfecto */
        @media (min-width: 769px) {
          #inicio .hero-phase {
            position: fixed !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            width: 100vw;
            max-width: 900px; /* Reducido de 1200px a 900px para texto más compacto */
            padding: 0 3rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /* Asegurar que todas las fases estén en la misma posición */
            z-index: 5;
          }
          
          #inicio .hero-line {
            width: 100%;
            max-width: 700px; /* Reducido de 900px a 700px para líneas más compactas */
            margin: 0 auto 0.5em auto;
            text-align: center;
          }
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
            /* El position fixed ya está definido arriba para desktop y mobile */
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
