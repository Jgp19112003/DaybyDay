// /components/Servicios.jsx
import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import {
  serviciosTitleAnimation,
  serviciosInfoAnimation,
  serviciosCardsAnimation,
  serviciosCardHoverAnimation,
  initServiceCardsCycling,
  serviciosMouseFollowAnimation,
} from "../animation";
import Inicio from "./Inicio";

// Utilidad: obtener altura del navbar (id/clases más comunes)
const getNAV = () =>
  document.querySelector("#navbar, .site-nav, header")?.offsetHeight || 80;

const Servicios = forwardRef(({ onAnimationComplete }, ref) => {
  const sectionRef = useRef(null);
  const infoRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const tagsRef = useRef([]);

  // Expose the section ref to parent component
  useImperativeHandle(ref, () => sectionRef.current);

  // Izquierda (enfoque + métricas)
  const insightRef = useRef(null);
  const statCardsRef = useRef([]);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);

  // Refs para el contenido interno de las cartas de la derecha
  const cardTitleRefs = useRef([]);
  const cardDescRefs = useRef([]);
  const cardTagsRefs = useRef([]);
  const cardSvgRefs = useRef([]);

  useEffect(() => {
    // ---- Ajustes de layout antes de animaciones ----
    const navH = getNAV();
    if (sectionRef.current) {
      // Evita que el contenido quede oculto bajo el navbar
      sectionRef.current.style.setProperty("--nav-offset", `${navH}px`);
      // Asegura que al navegar a #servicios no quede oculto (anchor offset)
      sectionRef.current.style.scrollMarginTop = `${navH + 40}px`;
    }

    // Recalcula si cambia el tamaño (evita solapes tras rotaciones, etc.)
    const onResize = () => {
      const h = getNAV();
      if (!sectionRef.current) return;
      sectionRef.current.style.setProperty("--nav-offset", `${h}px`);
      sectionRef.current.style.scrollMarginTop = `${h + 40}px`;
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    // ---- Animaciones ----
    ScrollTrigger.killAll();
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // ===== init (existente) con ajustes mobile =====
    const init = () => {
      if (sectionRef.current)
        gsap.set(sectionRef.current, { opacity: 1, visibility: "visible" });
      if (titleRef.current) {
        gsap.set(titleRef.current, { opacity: 0, visibility: "hidden" });
        // si tu animación escribe el texto, limpiamos
        titleRef.current.textContent = "";
      }
      if (infoRef.current) gsap.set(infoRef.current, { opacity: 0, y: 60 });

      const initialScale = prefersReduced ? 1 : isMobile ? 1.08 : 2;
      cardsRef.current.forEach(
        (c) =>
          c &&
          gsap.set(c, {
            opacity: 0,
            scale: initialScale,
            transformOrigin: "center center",
          })
      );

      // Estados iniciales de los nuevos elementos
      if (badgeRef.current) gsap.set(badgeRef.current, { y: -8, opacity: 0 });
      if (headingRef.current)
        gsap.set(headingRef.current, { y: 16, opacity: 0 });
      if (p1Ref.current) gsap.set(p1Ref.current, { y: 16, opacity: 0 });
      if (p2Ref.current) gsap.set(p2Ref.current, { y: 16, opacity: 0 });
      statCardsRef.current.forEach(
        (el) => el && gsap.set(el, { y: 20, opacity: 0, scale: 0.98 })
      );
    };
    init();

    // ===== animación de fade-in principal SOLO cuando entra en viewport =====
    if (sectionRef.current) {
      gsap.set(sectionRef.current, { opacity: 0, visibility: "hidden" });
      gsap.to(sectionRef.current, {
        opacity: 1,
        visibility: "visible",
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Cambiado de "top bottom" a "top 80%" para que aparezca cuando esté más visible
          once: true,
        },
        onComplete: () => {
          // Animaciones internas solo después del fade-in
          if (!prefersReduced) {
            // Primero anima el título y espera a que termine
            serviciosTitleAnimation(titleRef, sectionRef).then(() => {
              // Solo después de que el texto termine, anima info y cards
              serviciosInfoAnimation(infoRef, sectionRef);

              // Esperar a que las animaciones de texto e info estén más avanzadas antes de mostrar el navbar
              setTimeout(() => {
                if (onAnimationComplete) {
                  onAnimationComplete();
                }
              }, 80); // Delay de 800ms para asegurar que el navbar aparezca después

              serviciosCardsAnimation(cardsRef, sectionRef);
              serviciosCardHoverAnimation(cardsRef);
            });
          } else {
            if (titleRef.current)
              gsap.set(titleRef.current, { opacity: 1, visibility: "visible" });
            if (infoRef.current)
              gsap.set(infoRef.current, { opacity: 1, y: 0 });
            cardsRef.current.forEach(
              (c) => c && gsap.set(c, { opacity: 1, scale: 1 })
            );
            // Para animaciones reducidas, llamar inmediatamente
            if (onAnimationComplete) {
              onAnimationComplete();
            }
          }
        },
      });
    }

    const cleanupCycling = initServiceCardsCycling(cardsRef, tagsRef);

    // Mouse follow para TODOS los componentes principales
    const mouseFollowCleanup = serviciosMouseFollowAnimation(
      sectionRef,
      titleRef,
      infoRef,
      cardsRef,
      {
        badgeRef,
        headingRef,
        p1Ref,
        p2Ref,
        statCardsRef,
        cardTitleRefs,
        cardDescRefs,
        cardTagsRefs,
        cardSvgRefs,
      }
    );

    // ===== animaciones de insight DESPUÉS con delay =====
    if (!prefersReduced) {
      gsap.fromTo(
        insightRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0, // Reduced from 0.2 to start immediately
        }
      );
    } else {
      gsap.set(insightRef.current, { opacity: 1, y: 0 });
    }

    // Animaciones internas del contenido del article CON DELAY ADICIONAL
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: insightRef.current,
        start: "top bottom", // Changed from "top 95%" to start when element enters viewport
        once: true,
      },
      defaults: { ease: "power3.out", duration: 0.6 },
      delay: 0, // Reduced from 0.1s to start immediately
    });

    if (!prefersReduced) {
      tl.to(badgeRef.current, { y: 0, opacity: 1 })
        .to(headingRef.current, { y: 0, opacity: 1 }, "-=0.3")
        .to(p1Ref.current, { y: 0, opacity: 1 }, "-=0.35")
        .to(p2Ref.current, { y: 0, opacity: 1 }, "-=0.35")
        .to(
          statCardsRef.current,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.08,
          },
          "-=0.25"
        );
    } else {
      gsap.set(
        [badgeRef.current, headingRef.current, p1Ref.current, p2Ref.current],
        { y: 0, opacity: 1 }
      );
      gsap.set(statCardsRef.current, { y: 0, opacity: 1, scale: 1 });
    }

    // Pulse vivo en puntos rojos CON DELAY
    const pulseTimeout = window.setTimeout(() => {
      if (prefersReduced) return;
      const dots = () =>
        insightRef.current?.querySelectorAll(".metric-dot") || [];
      dots().forEach((dot, i) => {
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
    }, 200); // Reduced from 400ms to start pulse animations much sooner

    // Pequeño refresh tras montar para asegurar posiciones correctas
    const refreshTimeout = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      cleanupCycling && cleanupCycling();
      mouseFollowCleanup && mouseFollowCleanup();
      window.removeEventListener("resize", onResize);
      window.clearTimeout(pulseTimeout);
      window.clearTimeout(refreshTimeout);
      ScrollTrigger.killAll();
    };
  }, [onAnimationComplete]);

  return (
    <div className="w-full min-h-screen bg-[#181414]">
      <Inicio />
      <section
        id="servicios"
        ref={sectionRef}
        aria-labelledby="servicios-heading"
        role="region"
        tabIndex={-1}
        className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 pb-10 lg:pb-16 pt-[120px] lg:pt-[120px] flex flex-col items-center"
        style={{
          opacity: 0,
          visibility: "hidden",
        }}
      >
        <div className="w-full flex flex-col items-center">
          {/* Título global */}
          <div className="w-full flex justify-center mb-6">
            <h2
              id="servicios-heading"
              ref={titleRef}
              className="text-[2.2rem] sm:text-[2.6rem] lg:text-[4rem] font-black leading-none tracking-tight text-white text-center"
              style={{ opacity: 0, visibility: "hidden" }}
            >
              Servicios
            </h2>
          </div>

          {/* IZQUIERDA: Enfoque */}
          <div
            ref={infoRef}
            className="w-full flex justify-center"
            style={{ opacity: 0 }}
          >
            <article
              ref={insightRef}
              className="rounded-2xl bg-[#1f1a1a]/80 backdrop-blur border border-white/10 shadow-[0_6px_18px_rgba(0,0,0,0.18)] p-5 lg:p-10 mx-auto text-center"
              style={{
                opacity: 0,
                maxWidth: "900px",
                width: "100%",
                margin: "0 auto",
              }}
            >
              <span
                ref={badgeRef}
                className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide uppercase rounded-[16px] bg-white text-[#181414] px-3 py-1 mb-3 mx-auto"
                style={{ opacity: 0 }}
              >
                Enfoque Day by Day
              </span>
              <h3
                ref={headingRef}
                className="text-[1.6rem] sm:text-[1.88rem] lg:text-[2.22rem] font-black leading-[1.15] tracking-tight text-white text-center"
                style={{ opacity: 0 }}
              >
                SISTEMAS QUE TRABAJAN POR TI, SIN COMPROMETER TU ESENCIA
              </h3>
              <div className="flex flex-col items-center w-full">
                <p
                  ref={p1Ref}
                  className="text-[15px] lg:text-[17px] leading-relaxed text-[#e3e3e3] mt-6 lg:mt-8 mb-4 max-w-[60ch] text-center"
                  style={{
                    opacity: 1,
                    visibility: "visible",
                  }}
                >
                  En un mercado donde el 92 % de los líderes consideran que la
                  automatización es esencial para mantenerse competitivos, el 77
                  % ya está mejorando sus conversiones gracias a ella y el 70%
                  planea incrementar su inversión en este ámbito,
                </p>
                <p
                  ref={p1Ref}
                  className="text-[16px] lg:text-[18px] leading-relaxed text-[#e3e3e3] mt-1 lg:mt-2 mb-1 max-w-[60ch] text-center"
                  style={{
                    opacity: 1,
                    visibility: "visible",
                  }}
                >
                  <em>Quedarse quieto no es una opción.</em>
                </p>
                <p
                  ref={p1Ref}
                  className="text-[15px] lg:text-[17px] leading-relaxed text-[#e3e3e3] mt-8 lg:mt-8 mb-4 max-w-[60ch] text-center"
                  style={{
                    opacity: 1,
                    visibility: "visible",
                  }}
                >
                  El crecimiento escalable y sostenible no depende solo de la
                  velocidad, sino de sistemas que eliminan tareas repetitivas,
                  aumentan la capacidad operativa y trabajan preservando la
                  esencia de marca.
                </p>
                <p
                  ref={p2Ref}
                  className="text-[15px] lg:text-[17px] leading-relaxed text-[#e3e3e3] mt-8 lg:mt-8 mb-8 max-w-[60ch] text-center"
                  style={{ opacity: 1, visibility: "visible" }}
                >
                  En Day by Day transformamos esa necesidad en estrategia.
                  Diseñamos sistemas adaptativos de Automatización de Procesos y
                  Marketing con IA que potencian la identidad, optimizan la
                  gestión y liberan a los equipos para centrarse en lo que
                  realmente genera valor.
                </p>
                <p
                  ref={p1Ref}
                  className="text-[15px] lg:text-[17px] leading-relaxed text-[#e3e3e3] mt-6 lg:mt-6 mb-8 max-w-[60ch] text-center"
                  style={{ opacity: 1, visibility: "visible" }}
                >
                  Día a Día dispondrás del tiempo que tu empresa necesita.
                </p>
              </div>
              {/* MÉTRICAS: Impacto + Rendimiento arriba, Resultado abajo */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {/* IMPACTO */}
                <div
                  ref={(el) => (statCardsRef.current[0] = el)}
                  className="metric metric-compact rounded-2xl"
                  style={{ opacity: 0 }}
                >
                  <div className="metric-top p-4 pb-0">
                    <span className="metric-dot" aria-hidden="true" /> IMPACTO
                  </div>
                  <div className="px-4">
                    <div className="metric-value metric-value-sm">80%</div>
                    <p className="metric-sub">
                      De las empresas aumentan sus oportunidades de negocio y
                      crecimiento al automatizar con IA.
                    </p>
                  </div>
                </div>

                {/* RENDIMIENTO */}
                <div
                  ref={(el) => (statCardsRef.current[1] = el)}
                  className="metric metric-compact rounded-2xl"
                  style={{ opacity: 0 }}
                >
                  <div className="metric-top p-4 pb-0">
                    <span className="metric-dot" aria-hidden="true" />{" "}
                    RENDIMIENTO
                  </div>
                  <div className="px-4">
                    <div className="metric-value metric-value-sm">77%</div>
                    <p className="metric-sub">
                      Mejora su tasa de conversiones con Marketing de
                      Automatización + IA. Más rapido, más personalizado.{" "}
                    </p>
                  </div>
                </div>

                {/* RESULTADO */}
                <div
                  ref={(el) => (statCardsRef.current[2] = el)}
                  className="metric metric-compact rounded-2xl col-span-2"
                  style={{ opacity: 0 }}
                >
                  <div className="metric-top p-4 pb-0">
                    <span className="metric-dot" aria-hidden="true" /> RESULTADO
                  </div>
                  <div className="px-4 pb-4">
                    <span className="tag-soft mb-2 inline-block">
                      IA + Marketing Automatizado
                    </span>
                    <p className="text-sm text-[#cfcfcf] leading-relaxed">
                      Orquestamos datos y campañas con sistemas automatizados
                      que preservan y escalan la esencia de tu marca.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
});

Servicios.displayName = "Servicios";

export default Servicios;
