// /components/Servicios.jsx
import React, { useRef, useEffect } from "react";
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

const Servicios = () => {
  const sectionRef = useRef(null);
  const infoRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const tagsRef = useRef([]);

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

    // ===== animaciones de servicios PRIMERO =====
    if (!prefersReduced) {
      serviciosTitleAnimation(titleRef, sectionRef);
      serviciosInfoAnimation(infoRef, sectionRef);
      serviciosCardsAnimation(cardsRef, sectionRef);
      serviciosCardHoverAnimation(cardsRef);
    } else {
      // Estado accesible si el usuario prefiere menos movimiento
      if (titleRef.current)
        gsap.set(titleRef.current, { opacity: 1, visibility: "visible" });
      if (infoRef.current) gsap.set(infoRef.current, { opacity: 1, y: 0 });
      cardsRef.current.forEach(
        (c) => c && gsap.set(c, { opacity: 1, scale: 1 })
      );
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
          delay: 0.5, // aumentado el delay para que salga después de servicios
        }
      );
    } else {
      gsap.set(insightRef.current, { opacity: 1, y: 0 });
    }

    // Animaciones internas del contenido del article CON DELAY ADICIONAL
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: insightRef.current,
        start: "top 80%",
        once: true,
      },
      defaults: { ease: "power3.out", duration: 0.6 },
      delay: 0.3, // delay de 0.3s después de que aparezca el container
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
    }, 800); // delay para empezar después de la animación del insight

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
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#181414]">
      <Inicio />
      <section
        id="servicios"
        ref={sectionRef}
        aria-labelledby="servicios-heading"
        role="region"
        tabIndex={-1}
        className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 pb-10 lg:pb-16 pt-[200px] lg:pt-[120px]"
        style={{
          opacity: 0,
          visibility: "hidden",
        }}
      >
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* Título global */}
          <div className="col-span-12">
            <h2
              id="servicios-heading"
              ref={titleRef}
              className="text-[2.2rem] sm:text-[2.6rem] lg:text-[4rem] font-black leading-none tracking-tight text-white text-center lg:text-left"
              style={{ opacity: 0, visibility: "hidden" }}
            >
              Servicios
            </h2>
          </div>

          {/* IZQUIERDA: Enfoque */}
          <div
            ref={infoRef}
            className="col-span-12 lg:col-span-7 text-white pr-0 lg:pr-6 text-center lg:text-left"
            style={{ opacity: 0 }}
          >
            <article
              ref={insightRef}
              className="rounded-2xl bg-[#1f1a1a]/80 backdrop-blur border border-white/10 shadow-[0_6px_18px_rgba(0,0,0,0.18)] p-5 lg:p-6 mx-auto"
              style={{ opacity: 0 }}
            >
              <span
                ref={badgeRef}
                className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide uppercase rounded-[16px] bg-white text-[#181414] px-3 py-1 mb-3 mx-auto lg:mx-0"
                style={{ opacity: 0 }}
              >
                Enfoque Day by Day
              </span>
              <h3
                ref={headingRef}
                className="text-[1.6rem] sm:text-[1.88rem] lg:text-[2.22rem] font-black leading-[1.15] tracking-tight"
                style={{ opacity: 0 }}
              >
                SISTEMAS QUE TRABAJAN POR TI, SIN COMPROMETER TU ESENCIA
              </h3>
              <p
                ref={p1Ref}
                className="text-[15px] lg:text-[17px] leading-relaxed text-[#e3e3e3] mt-6 lg:mt-8 mb-4 max-w-[60ch] mx-auto lg:mx-0"
                style={{
                  opacity: 1, // Cambiado a 1 para que sea visible
                  visibility: "visible", // Cambiado a visible
                }}
              >
                En un mercado donde el 92 % de los líderes consideran que la
                automatización es esencial para mantenerse competitivos, el 77 %
                ya está mejorando sus conversiones gracias a ella y el 70%
                planea incrementar su inversión en este ámbito,
              </p>
              <p
                ref={p1Ref}
                className="text-[16px] lg:text-[18px] leading-relaxed text-[#e3e3e3] mt-1 lg:mt-2 mb-1 max-w-[60ch] mx-auto lg:mx-0"
                style={{
                  opacity: 1, // Cambiado a 1 para que sea visible
                  visibility: "visible", // Cambiado a visible
                }}
              >
                <em>Quedarse quieto no es una opción.</em>
              </p>
              <p
                ref={p1Ref}
                className="text-[15px] lg:text-[17px] leading-relaxed text-[#e3e3e3] mt-8 lg:mt-8 mb-4 max-w-[60ch] mx-auto lg:mx-0"
                style={{
                  opacity: 1, // Cambiado a 1 para que sea visible
                  visibility: "visible", // Cambiado a visible
                }}
              >
                El crecimiento escalable y sostenible no depende solo de la
                velocidad, sino de sistemas que eliminan tareas repetitivas,
                aumentan la capacidad operativa y trabajan preservando la
                esencia de marca.
              </p>
              <p
                ref={p2Ref}
                className="text-[15px] lg:text-[17px] mt-3 leading-relaxed text-[#e3e3e3] mt-8 lg:mt-8 mb-8 max-w-[60ch] mx-auto lg:mx-0"
                style={{ opacity: 0 }}
              >
                En Day by Day transformamos esa necesidad en estrategia.
                Diseñamos sistemas adaptativos de Automatización de Procesos y
                Marketing con IA que potencian la identidad, optimizan la
                gestión y liberan a los equipos para centrarse en lo que
                realmente genera valor.
              </p>
              <p
                ref={p1Ref}
                className="text-[15px] lg:text-[17px] leading-relaxed text-[#e3e3e3] mt-6 lg:mt-6 mb-15 max-w-[60ch] mx-auto lg:mx-0"
                style={{ opacity: 0 }}
              >
                Día a Día dispondrás del tiempo que tu empresa necesita.
              </p>
              <div className="h-2"></div> {/* Tiny space added here */}
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
};

export default Servicios;
