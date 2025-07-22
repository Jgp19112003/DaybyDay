import React, { useRef, useEffect, useState } from "react";
import {
  serviciosTitleAnimation,
  serviciosInfoAnimation,
  serviciosCardsAnimation,
  serviciosTagsAnimation,
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

  // Estado para saber cuál es la carta activa (modo claro)
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    serviciosTitleAnimation(titleRef, sectionRef);
    serviciosInfoAnimation(infoRef, sectionRef);
    serviciosCardsAnimation(cardsRef, sectionRef);
    serviciosTagsAnimation(tagsRef, cardsRef);
    serviciosCardHoverAnimation(cardsRef);

    // Initialize card cycling animation
    const cleanupCycling = initServiceCardsCycling(cardsRef, tagsRef);

    // Initialize mouse follow animation
    const cleanupMouseFollow = serviciosMouseFollowAnimation(
      sectionRef,
      titleRef,
      infoRef,
      cardsRef
    );

    // Escucha el ciclo de cartas para actualizar el estado activo
    let current = 0;
    const total = 3;
    const interval = setInterval(() => {
      current = (current + 1) % total;
      setActiveCard(current);
    }, 6000);

    return () => {
      if (cleanupCycling) cleanupCycling();
      if (cleanupMouseFollow) cleanupMouseFollow();
      clearInterval(interval);
    };
  }, []);

  // Helper para color SVG según modo de carta
  const getSvgColor = (idx) => (idx === activeCard ? "#181414" : "#fff");

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-full flex flex-col lg:flex-row justify-between items-start mt-[80px] lg:mt-[100px] min-h-[400px] p-0 box-border px-4 lg:px-0"
    >
      <div
        ref={infoRef}
        className="flex flex-col justify-start text-white lg:pl-[60px] pt-10 pb-10 flex-1 max-w-none lg:max-w-[700px] min-w-0 lg:ml-[100px] ml-0 w-full lg:w-auto"
      >
        <h2
          ref={titleRef}
          className="text-[2.5rem] lg:text-[4rem] font-black mb-6 leading-none tracking-tight text-center lg:text-left"
        >
          Servicios
        </h2>
        <p className="text-base lg:text-lg text-[#e0e0e0] mb-8 leading-relaxed text-center lg:text-left px-2 lg:px-0">
          Somos una agencia especializada en marketing digital, publicidad,
          automatización e inteligencia artificial. Ayudamos a empresas a crecer
          y optimizar sus procesos mediante estrategias innovadoras, campañas
          creativas y soluciones tecnológicas avanzadas. Nuestro equipo combina
          experiencia en marketing, creatividad y tecnología para impulsar tu
          negocio al siguiente nivel.
        </p>
        <button className="inline-block bg-white text-[#181414] font-bold rounded-[24px] py-3 px-7 text-base border-none cursor-pointer transition-colors duration-200 mt-3 hover:bg-[#ff3131] hover:text-white self-center lg:self-start mx-auto lg:mx-0">
          Conoce más sobre nuestros servicios
        </button>
      </div>
      <div
        className="flex flex-col gap-7 w-full lg:min-w-[420px] lg:max-w-[600px] px-4 lg:pr-[60px] pt-10 pb-10 lg:mr-[100px] mr-0 mt-8 lg:mt-0"
        style={{ marginLeft: "auto" }}
      >
        <div
          className={`rounded-[20px] w-full p-6 lg:p-8 pb-5 lg:pb-7 mb-0 border servicio-card${
            activeCard !== 0 ? " card-dark" : ""
          }`}
          ref={(el) => (cardsRef.current[0] = el)}
        >
          <div
            className="card-title text-xl lg:text-2xl font-extrabold mb-3 flex items-center gap-2"
            style={{ alignItems: "center" }}
          >
            Estrategia Digital
            <svg
              className="w-6 h-6 ml-1 flex-shrink-0"
              style={{ verticalAlign: "middle" }}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 13h8V3H9v6H3v4zm8-8V3h2v2h-2zm4 0V3h6v2h-6zm6 6h-6v2h6v-2zm0 4h-6v6h6v-6zm-8 6h2v-6h-2v6zm-2-2H3v2h8v-2z" />
            </svg>
          </div>
          <div className="card-description text-sm lg:text-base mb-4">
            Desarrollamos estrategias de marketing digital personalizadas para
            posicionar tu marca, captar clientes y aumentar tus ventas.
            Analizamos tu mercado y diseñamos un plan a medida para alcanzar tus
            objetivos.
          </div>
          <div
            className="flex flex-wrap gap-2 mt-1"
            ref={(el) => (tagsRef.current[0] = el)}
          >
            <span className="card-tag text-[0.85rem] lg:text-[0.95rem] font-semibold rounded-[16px] py-1.5 px-3 lg:px-4 inline-block mt-1 border">
              Planificación
            </span>
            <span className="card-tag text-[0.85rem] lg:text-[0.95rem] font-semibold rounded-[16px] py-1.5 px-3 lg:px-4 inline-block mt-1 border">
              SEO/SEM
            </span>
            <span className="card-tag text-[0.85rem] lg:text-[0.95rem] font-semibold rounded-[16px] py-1.5 px-3 lg:px-4 inline-block mt-1 border">
              Analítica
            </span>
          </div>
        </div>
        <div
          className={`rounded-[20px] w-full p-6 lg:p-8 pb-5 lg:pb-7 mb-0 border servicio-card${
            activeCard !== 1 ? " card-dark" : ""
          }`}
          ref={(el) => (cardsRef.current[1] = el)}
        >
          <div
            className="card-title text-xl lg:text-2xl font-extrabold mb-3 flex items-center gap-2"
            style={{ alignItems: "center" }}
          >
            Automatización & IA
            <svg
              className="w-6 h-6 ml-1 flex-shrink-0"
              style={{ verticalAlign: "middle" }}
              viewBox="0 0 24 24"
              fill="none"
              stroke={getSvgColor(1)}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="7"
                y="7"
                width="10"
                height="10"
                rx="3"
                fill={getSvgColor(1)}
                stroke={getSvgColor(1)}
              />
              <circle
                cx="12"
                cy="12"
                r="2.5"
                fill={activeCard === 1 ? "#181414" : "#fff"}
              />
              <path
                d="M12 2v2M12 20v2M4 12H2M22 12h-2M5.6 5.6l-1.4-1.4M18.4 18.4l1.4 1.4M18.4 5.6l1.4-1.4M5.6 18.4l-1.4 1.4"
                stroke={getSvgColor(1)}
              />
            </svg>
          </div>
          <div className="card-description text-sm lg:text-base mb-4">
            Implementamos soluciones de automatización e inteligencia artificial
            para optimizar procesos, mejorar la experiencia del cliente y
            aumentar la eficiencia de tu empresa.
          </div>
          <div
            className="flex flex-wrap gap-2 mt-1"
            ref={(el) => (tagsRef.current[1] = el)}
          >
            <span className="card-tag text-[0.85rem] lg:text-[0.95rem] font-semibold rounded-[16px] py-1.5 px-3 lg:px-4 inline-block mt-1 border">
              Automatización de Marketing
            </span>
            <span className="card-tag text-[0.85rem] lg:text-[0.95rem] font-semibold rounded-[16px] py-1.5 px-3 lg:px-4 inline-block mt-1 border">
              Chatbots IA
            </span>
            <span className="card-tag text-[0.85rem] lg:text-[0.95rem] font-semibold rounded-[16px] py-1.5 px-3 lg:px-4 inline-block mt-1 border">
              Análisis Predictivo
            </span>
          </div>
        </div>
        <div
          className={`rounded-[20px] w-full p-6 lg:p-8 pb-5 lg:pb-7 mb-0 border servicio-card${
            activeCard !== 2 ? " card-dark" : ""
          }`}
          ref={(el) => (cardsRef.current[2] = el)}
        >
          <div
            className="card-title text-xl lg:text-2xl font-extrabold mb-3 flex items-center gap-2"
            style={{ alignItems: "center" }}
          >
            Publicidad & Creatividad
            <svg
              className="w-6 h-6 ml-1 flex-shrink-0"
              style={{
                verticalAlign: "middle",
                transition: "stroke 0.8s, fill 0.8s",
              }}
              viewBox="0 0 24 24"
              fill="none"
              stroke={getSvgColor(2)}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Megáfono minimalista */}
              <path
                d="M3 13V7a2 2 0 0 1 2-2h2l9-3v16l-9-3H5a2 2 0 0 1-2-2v-6z"
                fill={getSvgColor(2)}
                stroke={getSvgColor(2)}
                style={{ transition: "stroke 0.8s, fill 0.8s" }}
              />
              <circle
                cx="17.5"
                cy="12"
                r="1.5"
                fill={activeCard === 2 ? "#181414" : "#fff"}
                style={{ transition: "fill 0.8s" }}
              />
              <path
                d="M7 15v2a2 2 0 0 0 2 2h1"
                stroke={getSvgColor(2)}
                style={{ transition: "stroke 0.8s" }}
              />
            </svg>
          </div>
          <div className="card-description text-sm lg:text-base mb-4">
            Creamos campañas publicitarias impactantes y contenido creativo para
            conectar con tu audiencia y potenciar tu marca en todos los canales
            digitales.
          </div>
          <div
            className="flex flex-wrap gap-2 mt-1"
            ref={(el) => (tagsRef.current[2] = el)}
          >
            <span className="card-tag text-[0.85rem] lg:text-[0.95rem] font-semibold rounded-[16px] py-1.5 px-3 lg:px-4 inline-block mt-1 border">
              Publicidad Digital
            </span>
            <span className="card-tag text-[0.85rem] lg:text-[0.95rem] font-semibold rounded-[16px] py-1.5 px-3 lg:px-4 inline-block mt-1 border">
              Social Media
            </span>
            <span className="card-tag text-[0.85rem] lg:text-[0.95rem] font-semibold rounded-[16px] py-1.5 px-3 lg:px-4 inline-block mt-1 border">
              Branding
            </span>
            <span className="card-tag text-[0.85rem] lg:text-[0.95rem] font-semibold rounded-[16px] py-1.5 px-3 lg:px-4 inline-block mt-1 border">
              Creatividad
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
