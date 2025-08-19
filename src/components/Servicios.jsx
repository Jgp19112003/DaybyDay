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

  // Derecha (contenedor de tarjetas) para igualar alturas (si lo necesitas después)
  const rightColRef = useRef(null);

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
          <div className="col-span-12 lg:col-span-7">
            {/* Contenedor para el badge + título + descripción */}
            <div className="max-w-[800px] mx-auto lg:mx-0">
              {/* Badge + Título */}
              <div className="flex flex-col gap-2">
                {/* Badge */}
                <span
                  ref={badgeRef}
                  className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide uppercase rounded-[16px] bg-white text-[#181414] px-3 py-1 mb-3 mx-auto lg:mx-0"
                  style={{ opacity: 100 }}
                >
                  Enfoque Day by Day
                </span>

                {/* Título */}
                <h3
                  ref={headingRef}
                  className="text-[1.6rem] sm:text-[1.88rem] lg:text-[2.22rem] font-black leading-[1.15] tracking-tight"
                  style={{ opacity: 100 }}
                >
                  SISTEMAS QUE TRABAJAN POR TI, SIN COMPROMETER TU ESENCIA
                </h3>
              </div>

              {/* Descripción */}
              <div className="mt-4">
                {/* Párrafos descriptivos */}
                <p
                  ref={el => pRefs.current[0] = el}
                  className="text-[15px] lg:text-[17px] leading-relaxed text-[#e3e3e3] mt-6 lg:mt-8 mb-4 max-w-[60ch] mx-auto lg:mx-0"
                  style={{ opacity: 100 }}
                >
                  En un mercado donde el 92 % de los líderes considera la automatización esencial para mantenerse competitivos, el 77 % ya está mejorando sus conversiones gracias a ella, y el <strong>70%</strong> planea incrementar su inversión en este ámbito. <strong>Quedarse quieto no es una opción.</strong>
                </p>
                <p
                  ref={el => pRefs.current[1] = el}
                  className="text-[15px] lg:text-[17px] leading-relaxed text-[#e3e3e3] mt-6 lg:mt-8 mb-4 max-w-[60ch] mx-auto lg:mx-0"
                  style={{ opacity: 100 }}
                >
                  Pero como líder que aspira a un crecimiento sostenible, sabes que no se trata solo de velocidad: necesitas sistemas. Sistemas que eliminen tareas repetitivas, aumenten tu capacidad operativa y trabajen incansablemente, sin comprometer la esencia de tu marca.
                </p>
                <p
                  ref={el => pRefs.current[2] = el}
                  className="text-[15px] lg:text-[17px] leading-relaxed text-[#e3e3e3] mt-6 lg:mt-8 mb-4 max-w-[60ch] mx-auto lg:mx-0"
                  style={{ opacity: 100 }}
                >
                  En Day by Day transformamos esa necesidad en estrategia. Diseñamos sistemas adaptativos de Automatización de Procesos y Marketing + IA que potencian tu identidad, optimizan la gestión y liberan a tu equipo de tareas repetitivas. Te devolvemos tiempo para que puedas hacer crecer tu visión con propósito y coherencia, día a día.
                </p>
                <p
                  ref={p2Ref}
                  className="text-[15px] lg:text-[17px] mt-3 leading-relaxed text-[#e3e3e3] mb-6 lg:mb-8 max-w-[65ch] mx-auto lg:mx-0"
                  style={{ opacity: 100 }}
                >
                  Liberamos tiempo, optimizamos recursos y te preparamos para competir y prosperar en un mercado en constante cambio.
                </p>
              </div>
            </div>

            {/* Article completo (con métricas) */}
            <article
              ref={insightRef}
              className="rounded-2xl bg-[#1f1a1a]/80 backdrop-blur border border-white/10 shadow-[0_6px_18px_rgba(0,0,0,0.18)] p-5 lg:p-6 mx-auto"
              style={{ opacity: 0 }}
            >
              {/* Badge (repetido aquí si es necesario) */}
              <span
                ref={badgeRef}
                className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide uppercase rounded-[16px] bg-white text-[#181414] px-3 py-1 mb-3 mx-auto lg:mx-0"
                style={{ opacity: 0 }}
              >
                Enfoque Day by Day
              </span>

              {/* Título (repetido aquí si es necesario) */}
              <h3
                ref={headingRef}
                className="text-[1.6rem] sm:text-[1.88rem] lg:text-[2.22rem] font-black leading-[1.15] tracking-tight"
                style={{ opacity: 0 }}
              >
                SISTEMAS QUE TRABAJAN POR TI, SIN COMPROMETER TU ESENCIA
              </h3>

              {/* Descripción (repetida aquí si es necesario) */}
              <div className="mt-4">
                {/* Párrafos descriptivos */}
                <p
                  ref={p1Ref}
                  className="text-[15px] lg:text-[17px] leading-relaxed text-[#e3e3e3] mt-6 lg:mt-8 mb-4 max-w-[60ch] mx-auto lg:mx-0"
                  style={{ opacity: 0 }}
                >
                  En un mercado donde el 92 % de los líderes considera la automatización esencial para mantenerse competitivos, el 77 % ya está mejorando sus conversiones gracias a ella, y el <strong>70%</strong> planea incrementar su inversión en este ámbito. <strong>Quedarse quieto no es una opción.</strong>
                </p>

                <p
                  ref={p1Ref}
                  className="text-[15px] lg:text-[17px] leading-relaxed text-[#e3e3e3] mt-6 lg:mt-8 mb-4 max-w-[60ch] mx-auto lg:mx-0"
                  style={{ opacity: 0 }}
                >
                  Pero como líder que aspira a un crecimiento sostenible, sabes que no se trata solo de velocidad: necesitas sistemas. Sistemas que eliminen tareas repetitivas, aumenten tu capacidad operativa y trabajen incansablemente, sin comprometer la esencia de tu marca.
                </p>

                <p
                  ref={p1Ref}
                  className="text-[15px] lg:text-[17px] leading-relaxed text-[#e3e3e3] mt-6 lg:mt-8 mb-4 max-w-[60ch] mx-auto lg:mx-0"
                  style={{ opacity: 0 }}
                >
                  En Day by Day transformamos esa necesidad en estrategia. Diseñamos sistemas adaptativos de Automatización de Procesos y Marketing + IA que potencian tu identidad, optimizan la gestión y liberan a tu equipo de tareas repetitivas. Te devolvemos tiempo para que puedas hacer crecer tu visión con propósito y coherencia, día a día.
                </p>

                <p
                  ref={p2Ref}
                  className="text-[15px] lg:text-[17px] mt-3 leading-relaxed text-[#e3e3e3] mb-6 lg:mb-8 max-w-[65ch] mx-auto lg:mx-0"
                  style={{ opacity: 0 }}
                >
                  Liberamos tiempo, optimizamos recursos y te preparamos para competir y prosperar en un mercado en constante cambio.
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
                      De las empresas aumentan sus oportunidades de negocio y crecimiento al automatizar
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
                      Mejora su tasa de conversiones con automatización + IA
                      Más rapida, más personalizada.
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
                      IA + Marketing
                    </span>
                    <p className="text-sm text-[#cfcfcf] leading-relaxed">
                      Orquestamos datos, campañas y canales con campañas 
                      automatizadas que escalan y conservan la voz de tu marca.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* DERECHA: Cartas de servicios (misma forma) */}
          <div
            ref={rightColRef}
            className="col-span-12 lg:col-span-5 flex flex-col gap-6 pl-0 lg:pl-4"
          >
            {/* Card 1 */}
            <div
              className="rounded-[20px] w-full p-6 lg:p-8 border servicio-card card-dark focus:outline-none focus:ring-2 focus:ring-white/40"
              ref={(el) => (cardsRef.current[0] = el)}
              style={{ opacity: 0 }}
              aria-labelledby="card-title-1"
            >
              <div
                id="card-title-1"
                className="card-title text-xl lg:text-2xl font-extrabold mb-3 flex items-center gap-2"
                ref={(el) => (cardTitleRefs.current[0] = el)}
              >
                Marketing Digital
                <svg
                  className="w-6 h-6 ml-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  ref={(el) => (cardSvgRefs.current[0] = el)}
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M3 13h8V3H9v6H3v4zm8-8V3h2v2h-2zm4 0V3h6v2h-6zm6 6h-6v2h6v-2zm0 4h-6v6h6v-6zm-8 6h2v-6h-2v6zm-2-2H3v2h8v-2z" />
                </svg>
              </div>
              <div
                className="card-description text-sm lg:text-base mb-4"
                ref={(el) => (cardDescRefs.current[0] = el)}
              >
                Desarrollamos estrategias personalizadas para aumentar tu
                visibilidad online y alcanzar tus objetivos de negocio.
                Analizamos tu mercado y creamos campañas efectivas para
                posicionar tu marca y captar clientes.
              </div>
              <div
                className="flex flex-wrap gap-2 mt-1"
                ref={(el) => (cardTagsRefs.current[0] = el)}
              >
                <span className="card-tag">Estrategia Digital</span>
                <span className="card-tag">SEO/SEM</span>
                <span className="card-tag">Publicidad Online</span>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="rounded-[20px] w-full p-6 lg:p-8 border servicio-card card-dark focus:outline-none focus:ring-2 focus:ring-white/40"
              ref={(el) => (cardsRef.current[1] = el)}
              style={{ opacity: 0 }}
              aria-labelledby="card-title-2"
            >
              <div
                id="card-title-2"
                className="card-title text-xl lg:text-2xl font-extrabold mb-3 flex items-center gap-2"
                ref={(el) => (cardTitleRefs.current[1] = el)}
              >
                Automatización
                <svg
                  className="w-6 h-6 ml-1 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  ref={(el) => (cardSvgRefs.current[1] = el)}
                  aria-hidden="true"
                  focusable="false"
                >
                  <rect
                    x="7"
                    y="7"
                    width="10"
                    height="10"
                    rx="3"
                    fill="#fff"
                    stroke="#fff"
                  />
                  <circle cx="12" cy="12" r="2.5" fill="#181414" />
                  <path
                    d="M12 2v2M12 20v2M4 12H2M22 12h-2M5.6 5.6l-1.4-1.4M18.4 18.4l1.4 1.4M18.4 5.6l1.4-1.4M5.6 18.4l-1.4 1.4"
                    stroke="#fff"
                  />
                </svg>
              </div>
              <div
                className="card-description text-sm lg:text-base mb-4"
                ref={(el) => (cardDescRefs.current[1] = el)}
              >
                Optimizamos tus procesos de marketing y ventas mediante el uso
                de automatizaciones inteligentes. Automatizamos procesos de
                negocio, desarrollamos chatbots, implementamos IA y soluciones
                tecnológicas para mejorar la eficiencia y experiencia de tus
                clientes.
              </div>
              <div
                className="flex flex-wrap gap-2 mt-1"
                ref={(el) => (cardTagsRefs.current[1] = el)}
              >
                <span className="card-tag">Automatización de Marketing</span>
                <span className="card-tag">Chatbots</span>
                <span className="card-tag">Inteligencia Artificial</span>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="rounded-[20px] w-full p-6 lg:p-8 border servicio-card card-dark focus:outline-none focus:ring-2 focus:ring-white/40"
              ref={(el) => (cardsRef.current[2] = el)}
              style={{ opacity: 0 }}
              aria-labelledby="card-title-3"
            >
              <div
                id="card-title-3"
                className="card-title text-xl lg:text-2xl font-extrabold mb-3 flex items-center gap-2"
                ref={(el) => (cardTitleRefs.current[2] = el)}
              >
                Gestión de Redes Sociales
                <svg
                  className="w-6 h-6 ml-1 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  ref={(el) => (cardSvgRefs.current[2] = el)}
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M3 13V7a2 2 0 0 1 2-2h2l9-3v16l-9-3H5a2 2 0 0 1-2-2v-6z"
                    fill="#fff"
                    stroke="#fff"
                  />
                  <circle cx="17.5" cy="12" r="1.5" fill="#181414" />
                  <path d="M7 15v2a2 2 0 0 0 2 2h1" stroke="#fff" />
                </svg>
              </div>
              <div
                className="card-description text-sm lg:text-base mb-4"
                ref={(el) => (cardDescRefs.current[2] = el)}
              >
                Potenciamos tu presencia en redes sociales mediante contenido
                atractivo y estrategias de crecimiento. Gestionamos tus
                perfiles, creamos contenido relevante y conectamos con tu
                audiencia para fortalecer tu marca.
              </div>
              <div
                className="flex flex-wrap gap-2 mt-1"
                ref={(el) => (cardTagsRefs.current[2] = el)}
              >
                <span className="card-tag">Social Media</span>
                <span className="card-tag">Crecimiento</span>
                <span className="card-tag">Contenido Creativo</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
