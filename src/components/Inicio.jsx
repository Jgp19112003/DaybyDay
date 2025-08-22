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
    duration: 0.8, // Reduced from 1.4 to 0.8
    ease: "bounce.out",
    delay: 0.1, // Reduced from 0.2 to 0.1
    force3D: true,
  });

  gsap.to(secondDay, {
    y: 0,
    opacity: 1,
    rotation: 0,
    duration: 0.8, // Reduced from 1.4 to 0.8
    ease: "bounce.out",
    delay: 0.2, // Reduced from 0.4 to 0.2
    force3D: true,
  });

  gsap.to(secondY, {
    y: 0,
    opacity: 1,
    rotation: 1.1, // Más rotación final
    duration: 0.7, // Reduced from 1.3 to 0.7
    ease: "bounce.out",
    delay: 0.3, // Reduced from 0.6 to 0.3
    force3D: true,
  });

  gsap.to(by, {
    y: 0,
    opacity: 1,
    rotation: 18,
    duration: 1, // Reduced from 1.2 to 0.6
    ease: "bounce.out",
    delay: 0.6, // Reduced from 0.8 to 0.4
    force3D: true,
  });
};

const Inicio = () => {
  const logoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!logoRef.current || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

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

      // Enhanced scroll animation - SLOWED DOWN significantly
      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150vh", // Increased from 100vh to 150vh for slower animation
          scrub: 2, // Increased from 1 to 2 for slower response
          pin: true,
          anticipatePin: 1,
          refreshPriority: -1,
          onUpdate: (self) => {
            const progress = self.progress;

            // Day by Day logo animation
            gsap.set(logoRef.current, {
              scale: 1 - progress * 0.6, // Reduced scale change
              y: -progress * 250, // Reduced movement
              opacity: Math.max(0, 1 - progress * 1.5), // Adjusted for full transparency
              transformOrigin: "center center",
            });

            // Reveal Servicios component
            if (sectionRef.current) {
              gsap.set(sectionRef.current.nextElementSibling, {
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
      sectionRef.current._scrollTimeline = scrollTimeline;
    }, 150); // Increased delay

    // Cleanup
    return () => {
      clearTimeout(initDelay);
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
      if (sectionRef.current?._scrollTimeline) {
        sectionRef.current._scrollTimeline.kill();
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
        className="w-full h-screen bg-[#181414] flex flex-col items-center justify-center overflow-hidden relative"
        aria-label="Inicio - Day by Day"
      >
        {/* Day by Day Logo */}
        <div className="logo-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
          top: -4px;
          right: -100px;
          letter-spacing: -0.02em;
          color: ${LOGO_COLOR} !important;
        }

        @media (max-width: 768px) {
          #inicio .logo-by {
            right: -60px;
            font-size: 50px;
          }
        }
      `}</style>
    </>
  );
};

export default Inicio;
