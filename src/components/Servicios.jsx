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
    <section
      id="servicios"
      ref={sectionRef}
      className="w-full bg-[#181414] text-white"
      style={{ touchAction: "pan-y" }}
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-12 lg:py-16">
        {/* Cabecera */}
        <header className="text-center">
          <h2
            ref={titleRef}
            className="text-[2rem] lg:text-[3.2rem] font-black leading-[1.05]"
            style={{
              background:
                "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.8) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              transform: "translateZ(0)",
            }}
          >
            Servicios
          </h2>
          <p className="text-[#e5e5e5] mt-3 max-w-[820px] mx-auto">
            En Day by Day transformamos esa necesidad en estrategia. Diseñamos
            sistemas adaptativos de Automatización de Procesos y Marketing + IA que
            potencian tu identidad, optimizan la gestión y liberan a tu equipo de
            tareas repetitivas.
          </p>
        </header>

        {/* Contenido principal */}
        <div className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 space-y-5">
              <p className="text-[#e3e3e3]">
                En un mercado donde el 92 % de los líderes considera la
                automatización esencial para mantenerse competitivos, el 77 % ya
                está mejorando sus conversiones gracias a ella, y el{" "}
                <strong>70%</strong> planea incrementar su inversión en este
                ámbito.
              </p>
              <p className="text-[#e3e3e3]">
                Pero como líder que aspira a un crecimiento sostenible, sabes que
                no se trata solo de velocidad: necesitas sistemas. Sistemas que
                eliminen tareas repetitivas, aumenten tu capacidad operativa y
                trabajen incansablemente, sin comprometer la esencia de tu marca.
              </p>
            </div>

            <div className="lg:col-span-5">
              <h4 className="text-[1.6rem] font-black leading-[1.1]">
                Optimización y resultados
              </h4>
              <ul className="space-y-3">
                <li className="text-[#e3e3e3]">
                  +30% leads calificados en 90 días.
                </li>
                <li className="text-[#e3e3e3]">
                  -40% tiempo de gestión comercial.
                </li>
                <li className="text-[#e3e3e3]">+25% tasa de conversión.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
