// /components/Nosotros.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: (
      <img
        src="/public/images/terminal.png"
        alt="Desafío de automatización"
        className="w-12 h-12 object-contain"
      />
    ),
    title: "El Desafío",
    desc: "Muchas empresas aún no adoptan la automatización de marketing e IA, perdiendo eficiencia, clientes y competitividad en un mercado cada vez más exigente.",
  },
  {
    icon: (
      <img
        src="/public/images/solucion.png"
        alt="Nuestra Solución"
        className="w-12 h-12 object-contain"
      />
    ),
    title: "Nuestra Solución",
    desc: "Un enfoque adaptativo: estrategias flexibles y personalizadas de automatización e IA que eliminan barreras y convierten la tecnología en resultados sostenibles.",
  },
  {
    icon: (
      <img
        src="/public/images/escalable.png"
        alt="Escalar servicios"
        className="w-12 h-12 object-contain"
      />
    ),
    title: "Servicios Escalables",
    desc: "Desde proyectos rápidos como chatbots o emails automatizados, hasta estrategias avanzadas con IA para segmentación, predicción y campañas omnicanal.",
  },
  {
    icon: (
      <img
        src="/public/images/personalizacion.png"
        alt="Personalización Real"
        className="w-12 h-12 object-contain"
      />
    ),
    title: "Personalización Real",
    desc: "Nuestro valor central: experiencias únicas potenciadas por IA, llevando la personalización a escala sin perder el toque humano y cercano.",
  },
];

const testimonials = [
  {
    text: "“Con DaybyDay logramos procesos de marketing más ágiles y sostenibles, adaptándonos mejor a las necesidades del mercado.“",
    name: "Day",
    img: "/public/images/D.png",
    variant: "a",
    bg: "from-[#1a1a1a] via-[#2a2a2a] to-[#000000]",
  },
  {
    text: "“La plataforma nos permitió escalar y automatizar sin perder personalización, aumentando la eficiencia y mejorando la experiencia del cliente.”",
    name: "By",
    img: "/public/images/B.png",
    variant: "b",
    bg: "from-[#dc2626] via-[#ef4444] to-[#f87171]",
  },
  {
    text: "“El mercado exige innovación constante. Con DaybyDay hemos podido integrar IA y automatización para crecer de forma flexible y sostenible.”",
    name: "Day",
    img: "/public/images/D.png",
    variant: "c",
    bg: "from-[#1a1a1a] via-[#2a2a2a] to-[#000000]",
  },
];

const Nosotros = () => {
  const featRef = useRef(null);
  const testiRef = useRef(null);

  // Animaciones bloque features
  useEffect(() => {
    if (!featRef.current) return;
    const el = featRef.current;
    const items = el.querySelectorAll(".feature");
    const h2 = el.querySelector("h2");
    const subtitle = el.querySelector(".nosotros-sub");

    if (!h2 || !subtitle || !items.length) return;

    // Set initial state - elements hidden
    gsap.set([h2, subtitle, items], {
      opacity: 0,
      y: 50,
    });

    const tl1 = gsap.fromTo(
      h2,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: false,
          refreshPriority: -1,
        },
      }
    );

    const tl2 = gsap.fromTo(
      subtitle,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: false,
          refreshPriority: -1,
        },
      }
    );

    const tl3 = gsap.fromTo(
      items,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          once: false,
          refreshPriority: -1,
        },
      }
    );

    return () => {
      tl1.kill();
      tl2.kill();
      tl3.kill();
    };
  }, []);

  // Animaciones bloque testimonios
  useEffect(() => {
    if (!testiRef.current) return;
    const el = testiRef.current;
    const title = el.querySelector("h2");
    const cards = el.querySelectorAll(".testimonial");

    if (!title || !cards.length) return;

    // Set initial state - elements hidden
    gsap.set([title, cards], {
      opacity: 0,
      y: 60,
    });

    // Animate title first
    const tl1 = gsap.fromTo(
      title,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: false,
          refreshPriority: -1,
        },
      }
    );

    // Then animate cards
    const tl2 = gsap.fromTo(
      cards,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.22,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: false,
          refreshPriority: -1,
        },
      }
    );

    return () => {
      tl1.kill();
      tl2.kill();
    };
  }, []);

  // ====== ANIMACIÓN TILT + GLARE EN TESTIMONIOS ======
  useEffect(() => {
    const enableHover =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!enableHover || !testiRef.current) return;

    const cards = Array.from(testiRef.current.querySelectorAll(".testimonial"));

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

  const shapeClass = (variant) => {
    switch (variant) {
      case "a":
        return "rounded-[28px] rounded-tl-[56px] rounded-br-[56px]";
      case "b":
        return "rounded-[28px] rounded-tl-[56px] rounded-bl-[56px]";
      case "c":
        return "rounded-[28px] rounded-br-[56px]";
      default:
        return "rounded-2xl";
    }
  };

  return (
    <>
      {/* ====== BLOQUE FEATURES ====== */}
      <section
        id="nosotros"
        ref={featRef}
        className="w-full bg-[#181414] text-white py-12 md:py-20 px-4 md:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-[1.8rem] md:text-[2.2rem] lg:text-[3rem] mb-3 md:mb-4 text-white">
              Conócenos
            </h2>
            <p className="nosotros-sub text-base md:text-lg text-white/70 max-w-3xl mx-auto px-2 md:px-0">
              Automatización e IA para un crecimiento sostenible. Pensamos en
              grande, empezamos en pequeño y escalamos juntos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-8 md:mt-12">
            {features.map((f, i) => (
              <article
                key={i}
                className="feature flex flex-col items-start text-left"
              >
                <div
                  className={`rounded-lg p-1 border border-white/10 mb-3 md:mb-4 flex items-center justify-center ${
                    i % 2 === 0 ? "bg-white" : "bg-[#de0015]"
                  }`}
                >
                  {f.icon}
                </div>
                <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3">
                  {f.title}
                </h3>
                <p className="text-sm text-white/70 leading-6 max-w-[28ch]">
                  {f.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ====== TESTIMONIOS ====== */}
      <section
        ref={testiRef}
        className="w-full py-12 md:py-20 px-4 md:px-6 text-white"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center">
            Lo que dicen nuestros clientes
          </h2>

          <div className="space-y-6 md:space-y-10">
            {testimonials.map((t, i) => (
              <article
                key={i}
                className={[
                  "testimonial relative p-5 md:p-7 lg:p-9 border border-white/10 shadow-lg overflow-hidden",
                  "bg-gradient-to-br",
                  i === 1
                    ? "from-[#dc2626] via-[#ef4444] to-[#b91c1c]"
                    : "from-[#1a1a1a] to-[#2a2a2a]",
                  shapeClass(t.variant),
                  i === 1 ? "md:w-[86%] mx-auto" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform, box-shadow",
                  transition: "box-shadow 0.2s ease-out",
                }}
              >
                <p className="text-base md:text-[18px] lg:text-[20px] font-medium leading-6 md:leading-7 lg:leading-8">
                  {t.text}
                </p>

                <div
                  className={`mt-4 md:mt-6 flex items-center gap-3 ${
                    i === 1 ? "justify-end" : "justify-start"
                  }`}
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white p-1 object-contain"
                  />
                  <div className="text-xs md:text-sm opacity-90">
                    <div className="font-bold">{t.name}</div>
                  </div>
                </div>

                {/* Glare overlay */}
                <div
                  className="glare absolute inset-0 pointer-events-none opacity-0"
                  style={{
                    background: `radial-gradient(
                      circle at 50% 50%,
                      rgba(255,255,255,0.15),
                      rgba(0,0,0,0.05)
                    )`,
                  }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Mobile-specific adjustments */
        @media (max-width: 768px) {
          .feature {
            padding: 0 1rem;
            text-align: center;
            align-items: center;
          }

          .feature h3 {
            text-align: center;
            width: 100%;
          }

          .feature p {
            text-align: center;
            max-width: none;
            line-height: 1.5;
          }

          .testimonial {
            margin: 0 1rem 2rem 1rem;
            /* Maintain bubble design on mobile */
          }

          /* Keep original bubble shapes but make them smaller */
          .testimonial.rounded-[28px] {
            border-radius: 24px !important;
          }

          .testimonial.rounded-tl-[56px] {
            border-top-left-radius: 40px !important;
          }

          .testimonial.rounded-br-[56px] {
            border-bottom-right-radius: 40px !important;
          }

          .testimonial.rounded-bl-[56px] {
            border-bottom-left-radius: 40px !important;
          }

          /* Disable hover effects on mobile */
          .testimonial {
            transform: none !important;
            transition: none !important;
          }

          .testimonial .glare {
            display: none !important;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .testimonial {
            transform: none !important;
            transition: none !important;
          }

          .testimonial:hover {
            transform: none !important;
          }

          .testimonial .glare {
            display: none !important;
          }
        }

        /* Small mobile devices */
        @media (max-width: 480px) {
          #nosotros {
            padding: 2rem 1rem;
          }

          .nosotros-sub {
            font-size: 0.95rem;
            line-height: 1.5;
            padding: 0 1rem;
          }

          .feature {
            margin-bottom: 2rem;
          }

          .testimonial {
            padding: 1.25rem;
            margin: 0 0.75rem 1.5rem 0.75rem;
          }

          .testimonial p {
            font-size: 0.95rem;
            line-height: 1.6;
          }

          /* Smaller bubble shapes for very small screens */
          .testimonial.rounded-[28px] {
            border-radius: 20px !important;
          }

          .testimonial.rounded-tl-[56px] {
            border-top-left-radius: 32px !important;
          }

          .testimonial.rounded-br-[56px] {
            border-bottom-right-radius: 32px !important;
          }

          .testimonial.rounded-bl-[56px] {
            border-bottom-left-radius: 32px !important;
          }
        }

        /* Extra small devices */
        @media (max-width: 360px) {
          .grid {
            gap: 1.5rem;
          }

          .testimonial {
            padding: 1rem;
            margin: 0 0.5rem 1.25rem 0.5rem;
          }

          .testimonial p {
            font-size: 0.9rem;
          }

          /* Even smaller bubble shapes for extra small screens */
          .testimonial.rounded-[28px] {
            border-radius: 18px !important;
          }

          .testimonial.rounded-tl-[56px] {
            border-top-left-radius: 28px !important;
          }

          .testimonial.rounded-br-[56px] {
            border-bottom-right-radius: 28px !important;
          }

          .testimonial.rounded-bl-[56px] {
            border-bottom-left-radius: 28px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Nosotros;
