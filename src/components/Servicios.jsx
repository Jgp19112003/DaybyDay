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

  // Derecha (contenedor de tarjetas) para igualar alturas
  const rightColRef = useRef(null);

  // Refs para el contenido interno de las cartas de la derecha
  const cardTitleRefs = useRef([]);
  const cardDescRefs = useRef([]);
  const cardTagsRefs = useRef([]);
  const cardSvgRefs = useRef([]);

  useEffect(() => {
    ScrollTrigger.killAll();
    gsap.registerPlugin(ScrollTrigger);

    // ===== init (existente) =====
    const init = () => {
      if (sectionRef.current)
        gsap.set(sectionRef.current, { opacity: 1, visibility: "visible" });
      if (titleRef.current) {
        gsap.set(titleRef.current, { opacity: 0, visibility: "hidden" });
        titleRef.current.textContent = "";
      }
      if (infoRef.current) gsap.set(infoRef.current, { opacity: 0, y: 60 });
      cardsRef.current.forEach(
        (c) =>
          c &&
          gsap.set(c, {
            opacity: 0,
            scale: 2,
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

    // ===== animaciones existentes =====
    serviciosTitleAnimation(titleRef, sectionRef);
    serviciosInfoAnimation(infoRef, sectionRef);
    serviciosCardsAnimation(cardsRef, sectionRef);
    serviciosCardHoverAnimation(cardsRef);
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

    // ===== animaciones nuevas (entrada + pulse) =====
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: insightRef.current,
        start: "top 80%",
        once: true,
      },
      defaults: { ease: "power3.out", duration: 0.6 },
    });

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

    // Pulse vivo en puntos rojos
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

    return () => {
      cleanupCycling && cleanupCycling();
      mouseFollowCleanup && mouseFollowCleanup();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#181414]">
      <section
        id="servicios"
        ref={sectionRef}
        className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 mt-[80px] lg:mt-[90px]"
        style={{ opacity: 1, visibility: "visible" }}
      >
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Título global */}
          <div className="col-span-12">
            <h2
              ref={titleRef}
              className="text-[2.6rem] lg:text-[4rem] font-black leading-none tracking-tight text-white"
            >
              Servicios
            </h2>
          </div>

          {/* IZQUIERDA: Enfoque (un poco más grande para alinear) */}
          <div
            ref={infoRef}
            className="col-span-12 lg:col-span-7 text-white pr-0 lg:pr-6"
          >
            <article
              ref={insightRef}
              className="rounded-2xl bg-[#1f1a1a]/80 backdrop-blur border border-white/10 shadow-[0_6px_18px_rgba(0,0,0,0.18)]  lg:p-6"
            >
              <span
                ref={badgeRef}
                className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide uppercase rounded-[16px] bg-white text-[#181414] px-3 py-1 mb-3"
              >
                Day by Day enfoque
              </span>

              <h3
                ref={headingRef}
                className="text-[1.88rem] lg:text-[2.22rem] font-black leading-[1.15] tracking-tight"
              >
                Sistemas que trabajan por ti, sin perder tu esencia
              </h3>

              <p
                ref={p1Ref}
                className="text-[15px] lg:text-[17px] leading-relaxed text-[#e3e3e3] mt-8 mb-4"
              >
                En un mercado donde el <strong>80%</strong> de las empresas que
                automatizan aumentan sus oportunidades y un <strong>77%</strong>{" "}
                mejora sus conversiones, quedarse quieto no es una opción. Pero
                los líderes que sueñan con un crecimiento sostenible saben que
                no basta con correr más rápido: necesitan sistemas que trabajen
                por ellos, día y noche, sin perder la esencia de su marca.
              </p>

              <p
                ref={p2Ref}
                className="text-[15px] lg:text-[17px] mt-3 leading-relaxed text-[#e3e3e3] mb-8"
              >
                En <strong>Day by Day</strong> no solo entendemos esa visión la
                transformamos en acción. Creamos soluciones adaptativas de{" "}
                <strong>
                  automatización de marketing + inteligencia artificial
                </strong>{" "}
                que conectan, ordenan y aceleran cada paso de tu negocio.
                Adaptamos tu empresa al mercado plasmando su esencia cada día
                que estás con nosotros. Liberamos tiempo, optimizamos recursos y
                te preparamos para competir y crecer en un mercado impredecible.
              </p>

              {/* MÉTRICAS: Impacto + Rendimiento arriba, Resultado abajo */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {/* IMPACTO */}
                <div
                  ref={(el) => (statCardsRef.current[0] = el)}
                  className="metric metric-compact rounded-2xl"
                >
                  <div className="metric-top p-4 pb-0">
                    <span className="metric-dot" /> IMPACTO
                  </div>
                  <div className="px-4">
                    <div className="metric-value metric-value-sm">80%</div>
                    <p className="metric-sub">
                      Aumentan sus oportunidades al automatizar
                    </p>
                  </div>
                </div>

                {/* RENDIMIENTO */}
                <div
                  ref={(el) => (statCardsRef.current[1] = el)}
                  className="metric metric-compact rounded-2xl"
                >
                  <div className="metric-top p-4 pb-0">
                    <span className="metric-dot" /> RENDIMIENTO
                  </div>
                  <div className="px-4">
                    <div className="metric-value metric-value-sm">77%</div>
                    <p className="metric-sub">
                      Mejora de conversiones con automatización
                    </p>
                  </div>
                </div>

                {/* RESULTADO */}
                <div
                  ref={(el) => (statCardsRef.current[2] = el)}
                  className="metric metric-compact rounded-2xl col-span-2"
                >
                  <div className="metric-top p-4 pb-0">
                    <span className="metric-dot" /> RESULTADO
                  </div>
                  <div className="px-4 pb-4">
                    <span className="tag-soft mb-2 inline-block">
                      IA + Marketing
                    </span>
                    <p className="text-sm text-[#cfcfcf] leading-relaxed">
                      Orquestamos datos, campañas y canales con automatizaciones
                      que escalan y conservan la voz de tu marca.
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
            <div
              className="rounded-[20px] w-full p-6 lg:p-8 border servicio-card card-dark"
              ref={(el) => (cardsRef.current[0] = el)}
            >
              <div
                className="card-title text-xl lg:text-2xl font-extrabold mb-3 flex items-center gap-2"
                ref={(el) => (cardTitleRefs.current[0] = el)}
              >
                Marketing Digital
                <svg
                  className="w-6 h-6 ml-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  ref={(el) => (cardSvgRefs.current[0] = el)}
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

            <div
              className="rounded-[20px] w-full p-6 lg:p-8 border servicio-card card-dark"
              ref={(el) => (cardsRef.current[1] = el)}
            >
              <div
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

            <div
              className="rounded-[20px] w-full p-6 lg:p-8 border servicio-card card-dark"
              ref={(el) => (cardsRef.current[2] = el)}
            >
              <div
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
