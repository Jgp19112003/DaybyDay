// /components/Inicio.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

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

  gsap.set([firstDay, secondDay, secondY, by], {
    y: -400,
    opacity: 0,
    rotation: (i) => -30 + i * 15,
    force3D: true,
  });

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
    duration: 1,
    ease: "bounce.out",
    delay: 0.4,
    force3D: true,
  });

  gsap.to(secondY, {
    y: 0,
    opacity: 1,
    rotation: 12,
    duration: 0.9,
    ease: "bounce.out",
    delay: 0.6,
    force3D: true,
  });

  gsap.to(by, {
    y: 0,
    opacity: 1,
    rotation: 12,
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
];

const Inicio = () => {
  const logoRef = useRef(null);
  const sectionRef = useRef(null);
  const metricsRef = useRef(null);
  const scrollArrowRef = useRef(null);
  const heroPhaseRefs = useRef(heroPhases.map(() => React.createRef()));
  const heroLineRefs = useRef(
    heroPhases.flatMap((phase) => phase.lines.map(() => React.createRef()))
  );

  // ====== ANIMACIÓN HERO SCROLL ======
  useEffect(() => {
    if (!logoRef.current || !sectionRef.current) return;
    const currentSection = sectionRef.current;

    // Función para establecer la altura correcta del viewport en móviles
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVH();

    const handleResize = () => {
      setVH();
      if (window.ScrollTrigger) {
        setTimeout(() => {
          window.ScrollTrigger.refresh();
        }, 100);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", () => {
      setTimeout(handleResize, 150);
    });

    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      const iosScroll = () => {
        const currentVH = window.innerHeight * 0.01;
        const storedVH = parseFloat(
          document.documentElement.style.getPropertyValue("--vh")
        );
        if (Math.abs(currentVH - storedVH) > 0.5) setVH();
      };
      window.addEventListener("scroll", iosScroll, { passive: true });
    }

    // Scroll to top
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    logoRef.current.classList.add("logo-hidden");

    const initDelay = setTimeout(() => {
      inicioLogoHangingAnimation(logoRef.current);

      // Animar flecha después del logo
      if (scrollArrowRef.current) {
        gsap.set(scrollArrowRef.current, { opacity: 0, y: 20 });
        gsap.to(scrollArrowRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 1.2,
        });

        // Add click handler for scroll arrow
        const handleArrowClick = () => {
          const currentScroll = window.scrollY;
          const targetScroll = currentScroll + 600;

          // Hide arrow immediately when clicked
          if (scrollArrowRef.current) {
            gsap.to(scrollArrowRef.current, {
              opacity: 0,
              duration: 0.2,
              ease: "power2.out",
            });
          }

          gsap.to(window, {
            scrollTo: {
              y: targetScroll,
              autoKill: false,
            },
            duration: 0.3,
            ease: "power2.out",
          });
        };

        scrollArrowRef.current.addEventListener("click", handleArrowClick);

        // Store cleanup function
        scrollArrowRef.current._cleanupClick = () => {
          scrollArrowRef.current.removeEventListener("click", handleArrowClick);
        };
      }

      heroPhaseRefs.current.forEach((ref) => {
        gsap.set(ref.current, { opacity: 0, y: 200 });
      });
      heroLineRefs.current.forEach((ref) => {
        gsap.set(ref.current, { opacity: 0, y: 80 });
      });

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: currentSection,
          start: "top top",
          end: "+=1800vh",
          scrub: 3,
          pin: true,
          anticipatePin: 1,
          refreshPriority: -1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const isMobile = window.innerWidth <= 768;

            if (progress <= 0.15) {
              gsap.set(logoRef.current, {
                opacity: 1,
                scale: 1,
                y: 0,
                force3D: true,
              });
              // Mostrar flecha cuando el logo está visible
              if (scrollArrowRef.current) {
                gsap.set(scrollArrowRef.current, {
                  opacity: 1,
                  force3D: true,
                });
              }
            } else if (progress > 0.15 && progress < 0.2) {
              // Transition zone - fade out logo and arrow
              const fadeProgress = (progress - 0.15) / 0.05;
              gsap.set(logoRef.current, {
                opacity: 1 - fadeProgress,
                scale: 1 - fadeProgress * 0.2,
                y: -fadeProgress * (isMobile ? 150 : 200),
                force3D: true,
              });
              // Hide arrow before phase-1 appears
              if (scrollArrowRef.current) {
                gsap.set(scrollArrowRef.current, {
                  opacity: 1 - fadeProgress,
                  force3D: true,
                });
              }
            } else {
              // Phase-1 and beyond - hide logo and arrow
              gsap.set(logoRef.current, {
                opacity: 0,
                scale: 0.8,
                y: -(isMobile ? 150 : 200),
                force3D: true,
              });
              // Keep arrow hidden when phase-1 content is visible
              if (scrollArrowRef.current) {
                gsap.set(scrollArrowRef.current, {
                  opacity: 0,
                  force3D: true,
                });
              }
            }

            heroPhases.forEach((phase, phaseIdx) => {
              let phaseStart, phaseEnd;

              const phaseDuration = 0.3;
              const transitionDuration = 0.08;
              const gap = 0.05;

              if (phaseIdx === 0) {
                phaseStart = 0.2;
                phaseEnd = phaseStart + phaseDuration;
              } else if (phaseIdx === 1) {
                phaseStart = 0.2 + phaseDuration + gap;
                phaseEnd = phaseStart + phaseDuration;
              } else if (phaseIdx === 2) {
                phaseStart = 0.2 + (phaseDuration + gap) * 2;
                phaseEnd = phaseStart + phaseDuration;
              } else {
                phaseStart = 0.2 + (phaseDuration + gap) * 3;
                phaseEnd = 1.0;
              }

              let phaseOpacity = 0;
              let phaseY = 200;

              if (progress < phaseStart) {
                phaseOpacity = 0;
                phaseY = 200;
              } else if (
                progress >= phaseStart &&
                progress <= phaseStart + transitionDuration
              ) {
                const entryProgress =
                  (progress - phaseStart) / transitionDuration;
                phaseOpacity = entryProgress;
                phaseY = 200 - entryProgress * 200;
              } else if (
                progress > phaseStart + transitionDuration &&
                progress < phaseEnd - transitionDuration
              ) {
                phaseOpacity = 1;
                phaseY = 0;
              } else if (
                progress >= phaseEnd - transitionDuration &&
                progress <= phaseEnd &&
                phaseIdx < heroPhases.length - 1
              ) {
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

              if (
                phaseIdx === heroPhases.length - 1 &&
                progress >= phaseStart + transitionDuration
              ) {
                phaseOpacity = 1;
                phaseY = 0;
              }

              if (heroPhaseRefs.current[phaseIdx]?.current) {
                gsap.set(heroPhaseRefs.current[phaseIdx].current, {
                  opacity: phaseOpacity,
                  y: phaseY,
                  force3D: true,
                });
              }

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
            });
          },
          onComplete: () => {
            window.dispatchEvent(new CustomEvent("inicioComplete"));
          },
        },
      });

      currentSection._scrollTimeline = scrollTimeline;
    }, 150);

    return () => {
      clearTimeout(initDelay);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);

      // Cleanup click handler
      if (scrollArrowRef.current && scrollArrowRef.current._cleanupClick) {
        scrollArrowRef.current._cleanupClick();
      }

      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === currentSection) trigger.kill();
      });
      if (currentSection?._scrollTimeline) {
        currentSection._scrollTimeline.kill();
      }
    };
  }, []);

  // Refresco al volver de otra pestaña
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setTimeout(() => ScrollTrigger.refresh(), 100);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // ====== ANIMACIÓN PULSO PUNTOS MÉTRICA ======
  useEffect(() => {
    const pulseTimeout = setTimeout(() => {
      const dots = document.querySelectorAll(".metric-dot");
      dots.forEach((dot, i) => {
        gsap.set(dot, { transformOrigin: "center center" });
        gsap.to(dot, {
          scale: 1.25,
          opacity: 1,
          duration: 0.9,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.12,
        });
        gsap.to(dot, {
          boxShadow: "0 0 16px rgba(255,49,49,0.95)",
          repeat: -1,
          yoyo: true,
          duration: 0.9,
          ease: "sine.inOut",
          delay: i * 0.12,
        });
      });
    }, 200);
    return () => clearTimeout(pulseTimeout);
  }, []);

  // ====== ANIMACIÓN TILT + GLARE EN CARTAS MÉTRICAS ======
  useEffect(() => {
    const enableHover =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!enableHover || !metricsRef.current) return;

    const cards = Array.from(metricsRef.current.querySelectorAll(".metric"));

    // Guardamos handlers/bounds en mapas para cleanup
    const boundsMap = new WeakMap();
    const moveHandlers = new WeakMap();

    const attachCard = (card) => {
      // asegurar que existe .glare
      let glare = card.querySelector(".glare");
      if (!glare) {
        glare = document.createElement("div");
        glare.className = "glare";
        card.appendChild(glare);
      }

      const onEnter = () => {
        const b = card.getBoundingClientRect();
        boundsMap.set(card, b);

        gsap.to(card, {
          scale: 1.06,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      const onMove = (e) => {
        const b = boundsMap.get(card) || card.getBoundingClientRect();
        boundsMap.set(card, b);

        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const leftX = mouseX - b.x;
        const topY = mouseY - b.y;
        const center = {
          x: leftX - b.width / 2,
          y: topY - b.height / 2,
        };

        const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
        const rotationX = center.y / 50;
        const rotationY = -center.x / 50;

        const shadowOffsetX = -rotationY * 5;
        const shadowOffsetY = rotationX * 5;
        const shadowBlur = 20 + distance / 120;

        gsap.to(card, {
          rotationX,
          rotationY,
          transformPerspective: 600,
          transformOrigin: "center center",
          ease: "power2.out",
          boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px 3px rgba(72, 65, 56, .25)`,
        });

        gsap.to(glare, {
          autoAlpha: 1,
          duration: 0.15,
          backgroundImage: `
            radial-gradient(
              circle at
              ${center.x * 2 + b.width / 2}px
              ${center.y * 2 + b.height / 2}px,
              rgba(255, 255, 255, 0.33),
              rgba(0, 0, 0, 0.06)
            )
          `,
          ease: "power2.out",
        });
      };

      const onLeave = () => {
        gsap.to(card, {
          scale: 1,
          rotationX: 0,
          rotationY: 0,
          boxShadow: `0px 0px 0px 0 rgba(0,0,0,0)`,
          duration: 0.6,
          ease: "power2.out",
        });
        gsap.to(card.querySelector(".glare"), {
          autoAlpha: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      const boundMove = (e) => onMove(e);
      moveHandlers.set(card, boundMove);

      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mousemove", boundMove);
      card.addEventListener("mouseleave", onLeave);

      // Guardar para cleanup
      card._cleanupTilt = () => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mousemove", boundMove);
        card.removeEventListener("mouseleave", onLeave);
      };
    };

    cards.forEach(attachCard);

    return () => {
      cards.forEach((c) => c._cleanupTilt && c._cleanupTilt());
    };
  }, []);

  return (
    <>
      <section
        id="inicio"
        ref={sectionRef}
        className="w-full bg-[#181414] flex flex-col items-center justify-center overflow-hidden relative"
        style={{
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

        {/* Scroll Arrow */}
        <div
          ref={scrollArrowRef}
          className="scroll-arrow fixed z-10 cursor-pointer"
          style={{
            bottom: "8vh",
            left: "50%",
            transform: "translateX(-50%)",
            willChange: "transform, opacity",
          }}
        >
          <div className="scroll-arrow-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5L12 19M12 19L7 14M12 19L17 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="scroll-text">Scroll</span>
        </div>

        {/* Hero phases */}
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
      </section>

      {/* SECCIÓN DE ANÁLISIS GTM */}
      <section className="bg-[#181414] text-white pt-28 pb-16 px-4 sm:pt-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-3 leading-tight">
            ¿Gastando presupuesto publicitario en corazonadas?
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-[#DE0015] mb-4">
            Conoce exactamente quién te compra y por qué.
          </p>
          <p className="text-lg sm:text-xl mb-2">En minutos, no meses.</p>
          <p className="text-base text-gray-400 mb-12">
            Basado en evidencia, no en opiniones.
          </p>

          <div className="border border-gray-700 bg-[#1F1A1A] rounded-lg p-6 mb-10 text-left max-w-3xl mx-auto">
            <h3 className="font-semibold mb-5 text-gray-300">
              El análisis Go-To-Market Incluye:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm text-gray-300">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-3 text-[#DE0015]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
                Tu Buyer persona
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-3 text-[#DE0015]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  ></path>
                </svg>
                Ofertas optimizadas por valor para tu Buyer
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-3 text-[#DE0015]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  ></path>
                </svg>
                Variantes de mensajes DISC para tu Buyer
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-3 text-[#DE0015]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
                Más de 30 variaciones creativas para tu Buyer
              </li>
            </ul>
          </div>

          <form
            className="space-y-4 max-w-xl mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              window.open(
                "https://gtmfactory.daybydayconsulting.com/",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            <button
              type="submit"
              className="w-full bg-[#DE0015] text-white font-bold py-4 px-6 rounded-md hover:bg-red-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles mr-2 h-5 w-5"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                <path d="M20 3v4"></path>
                <path d="M22 5h-4"></path>
                <path d="M4 17v2"></path>
                <path d="M5 18H3"></path>
              </svg>
              Ejecutar Análisis
            </button>
          </form>
        </div>
      </section>

      {/* SECCIÓN DE MÉTRICAS */}
      <section className="w-full mb-10 metric-section-dia" ref={metricsRef}>
        <div
          className="hero-phase text-white text-center pointer-events-none"
          style={{
            marginBottom: "2rem",
            color: "#E3E3E3",
            fontFamily: '"Inter", "Montserrat", Arial, sans-serif',
            fontWeight: 600,
            fontSize: "clamp(1rem, 2.4vw, 1.4rem)",
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
            willChange: "transform, opacity",
            textShadow: "0 2px 16px rgba(0,0,0,0.18)",
            filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.12))",
            opacity: 1,
          }}
        >
          Día a Día dispondrás del tiempo que tu empresa necesita.
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {/* IMPACTO */}
            <div className="metric rounded-2xl">
              <div className="metric-top">
                <span className="metric-dot" aria-hidden="true" /> IMPACTO
              </div>
              <div className="metric-value metric-value-sm">80%</div>
              <p className="metric-sub">
                De las empresas aumentan sus oportunidades de negocio y
                crecimiento al automatizar con IA.
              </p>
              <div className="glare" />
            </div>

            {/* RENDIMIENTO */}
            <div className="metric rounded-2xl">
              <div className="metric-top">
                <span className="metric-dot" aria-hidden="true" /> RENDIMIENTO
              </div>
              <div className="metric-value metric-value-sm">77%</div>
              <p className="metric-sub">
                Mejora su tasa de conversiones con Marketing de Automatización +
                IA. Más rápido, más personalizado.
              </p>
              <div className="glare" />
            </div>

            {/* RESULTADO */}
            <div className="metric rounded-2xl md:col-span-2">
              <div className="metric-top">
                <span className="metric-dot" aria-hidden="true" /> RESULTADO
              </div>
              <span className="tag-soft">IA + Marketing Automatizado</span>
              <p className="metric-sub">
                Orquestamos datos y campañas con sistemas automatizados que
                preservan y escalan la esencia de tu marca.
              </p>
              <div className="glare" />
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
        #inicio .logo-text { font-size: 14px; }
        #inicio .logo-day, #inicio .logo-y { font-size: 100px; }
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
          max-width: 42em;
          position: fixed !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          width: 100%;
          max-width: 900px;
          padding: 0 2rem;
          text-align: center;
          -webkit-transform: translate3d(-50%, -50%, 0) !important;
          -webkit-backface-visibility: hidden;
          -webkit-perspective: 1000;
        }
        #inicio .hero-phase.phase-2 .hero-line:first-child {
          font-weight: 700;
          font-size: 1.15em;
          margin-bottom: 1em;
        }
        #inicio .hero-phase.phase-4 {
          font-weight: 700;
          font-size: 1.1em;
          font-style: italic;
        }
        #inicio .hero-line {
          color: #E3E3E3;
          margin-bottom: 0.5em;
          -webkit-transform: translateZ(0);
          -webkit-backface-visibility: hidden;
        }
        @media (min-width: 769px) {
          #inicio .hero-phase {
            position: fixed !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            width: 100vw;
            max-width: 900px;
            padding: 0 3rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 5;
          }
          #inicio .hero-line {
            width: 100%;
            max-width: 700px;
            margin: 0 auto 0.5em auto;
            text-align: center;
          }
        }
        @media (max-width: 768px) {
          .metric-section-dia { margin-top: 0 !important; }
          #inicio .logo-container {
            position: fixed !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            z-index: 10;
            -webkit-transform: translate3d(-50%, -50%, 0) !important;
            -webkit-backface-visibility: hidden;
            -webkit-perspective: 1000;
          }
          #inicio .logo-by { right: -60px; font-size: 50px; }
          #inicio .hero-phase {
            font-size: 0.95rem;
            max-width: 95vw;
            padding: 0 0.3em;
            line-height: 1.25;
          }
          #inicio .hero-phase.phase-2 .hero-line:first-child {
            font-size: 1.1em; margin-bottom: 0.8em;
          }
          #inicio .hero-phase.phase-4 { font-size: 1.05em; }
          #inicio .hero-line { margin-bottom: 0.3em; font-size: 1em; }
          #inicio {
            height: 100vh !important;
            height: 100dvh !important;
            min-height: 100vh !important;
            min-height: 100dvh !important;
            -webkit-overflow-scrolling: touch;
            overflow: hidden;
            -webkit-transform: translateZ(0);
            -webkit-backface-visibility: hidden;
          }
        }
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

        /* ====== MÉTRICAS (base) ====== */
        .metric {
          position: relative;              /* necesario para glare */
          overflow: hidden;                /* recortar glare */
          background: radial-gradient(
              120% 140% at 10% 0%,
              rgba(255, 49, 49, 0.06),
              rgba(255, 255, 255, 0.02) 45%
            ),
            #1f1a1a;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
          color: #f4f4f4;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: 20px;
          transform-style: preserve-3d;    /* profundidad para rotateX/Y */
          will-change: transform, box-shadow;
          transition: box-shadow 0.2s ease-out;
          border-radius: 1rem;             /* suaviza bordes en tilt */
        }
        .metric-compact { padding-bottom: 20px; }

        .metric-top {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          letter-spacing: 0.02em;
          font-size: 12px;
          text-transform: uppercase;
          color: #e7e7e7;
        }
        .metric-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #de0015;
          display: inline-block;
          box-shadow: 0 0 10px rgba(255, 49, 49, 0.6);
        }
        .metric-value {
          font-weight: 900;
          line-height: 1;
          margin: 6px 0 6px;
          letter-spacing: -0.02em;
        }
        .metric-value-sm {
          font-size: clamp(28px, 4.5vw, 42px);
        }
        .metric-sub { color: #cfcfcf; margin: 0; }
        .tag-soft {
          font-size: 12px;
          font-weight: 700;
          color: #181414;
          background: #ffffff;
          padding: 6px 10px;
          border-radius: 16px;
          margin-top: 10px;
          margin-bottom: 10px;
          width: fit-content;
        }

        /* Glare overlay */
        .metric .glare {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(255,255,255,0.15),
            rgba(0,0,0,0.05)
          );
        }

        /* SOLO MOVIL */
        @media (max-width: 768px) {
          .metric {
            border-radius: 18px;
            padding: 18px 14px;
            margin-top: 0.5rem !important;
            margin-bottom: 0.5rem !important;
            margin-left: 1.2rem;
            margin-right: 1.2rem;
            box-shadow: 0 4px 16px rgba(0,0,0,0.22);
            font-size: 0.97rem;
          }
          .metric-top { font-size: 13px; gap: 10px; }
          .metric-dot { width: 10px; height: 10px; }
          .metric-value-sm {
            font-size: clamp(38px, 13vw, 54px);
            margin-bottom: 2px;
            margin-top: 0.5em;
            text-align: center;
            display: block;
            width: 100%;
          }
          .metric-sub { font-size: 0.97em; margin-top: 2px; margin-bottom: 0; line-height: 1.35; }
          .tag-soft { font-size: 13px; padding: 7px 12px; margin-top: 8px; margin-bottom: 8px; }
        }

        /* ====== SCROLL ARROW ====== */
        .scroll-arrow {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          color: ${LOGO_COLOR};
          opacity: 0;
          cursor: pointer;
          transition: all 0.3s ease;
          user-select: none;
        }

        .scroll-arrow:hover {
          transform: translateX(-50%) scale(1.1);
        }

        .scroll-arrow:active {
          transform: translateX(-50%) scale(0.95);
        }

        .scroll-arrow-icon {
          animation: bounce 2s infinite;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scroll-arrow-icon svg {
          width: 36px;
          height: 36px;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));
        }

        .scroll-text {
          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          opacity: 0.9;
          text-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
          }
        }

        @media (max-width: 768px) {
          .scroll-arrow {
            bottom: 6vh;
          }
          
          .scroll-arrow-icon svg {
            width: 32px;
            height: 32px;
          }
          
          .scroll-text {
            font-size: 12px;
          }
        }

        @media (hover: hover) and (pointer: fine) {
          .scroll-arrow:hover {
            opacity: 1 !important;
          }
          
          .scroll-arrow:hover .scroll-arrow-icon {
            animation-duration: 1s;
          }
        }
      `}</style>
    </>
  );
};

export default Inicio;
