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
    gsap.registerPlugin(ScrollTrigger);

    const init = () => {
      if (sectionRef.current)
        gsap.set(sectionRef.current, { opacity: 1, visibility: "visible" });
      if (titleRef.current)
        gsap.set(titleRef.current, { opacity: 1, visibility: "visible" });
      if (infoRef.current)
        gsap.set(infoRef.current, { opacity: 1, y: 0 });

      cardsRef.current.forEach(
        (c) =>
          c &&
          gsap.set(c, {
            opacity: 1,
            scale: 1,
            transformOrigin: "center center",
          })
      );

      if (badgeRef.current) gsap.set(badgeRef.current, { y: 0, opacity: 1 });
      if (headingRef.current) gsap.set(headingRef.current, { y: 0, opacity: 1 });
      if (p1Ref.current) gsap.set(p1Ref.current, { y: 0, opacity: 1 });
      if (p2Ref.current) gsap.set(p2Ref.current, { y: 0, opacity: 1 });
      statCardsRef.current.forEach(
        (el) => el && gsap.set(el, { y: 0, opacity: 1, scale: 1 })
      );
    };
    init();

    // Desactiva temporalmente las animaciones para depurar
    ScrollTrigger.killAll();

    return () => {
      window.removeEventListener("resize", onResize);
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="w-full bg-[#181414] text-white"
      style={{ touchAction: "pan-y", opacity: 1, visibility: "visible" }} // Cambiado para que sea visible
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
              opacity: 1, // Cambiado para que sea visible
              visibility: "visible", // Cambiado para que sea visible
            }}
          >
            Servicios
          </h2>
          <p
            className="text-[#e5e5e5] mt-3 max-w-[820px] mx-auto"
            style={{ opacity: 1, visibility: "visible" }} // Cambiado para que sea visible
          >
            En Day by Day transformamos esa necesidad en estrategia. Diseñamos
            sistemas adaptativos de Automatización de Procesos y Marketing + IA que
            potencian tu identidad, optimizan la gestión y liberan a tu equipo de
            tareas repetitivas.
          </p>
        </header>

        {/* Contenido principal */}
        <div className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div
              className="lg:col-span-7 space-y-5"
              style={{ opacity: 1, visibility: "visible" }} // Cambiado para que sea visible
            >
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

            <div
              className="lg:col-span-5"
              style={{ opacity: 1, visibility: "visible" }} // Cambiado para que sea visible
            >
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
