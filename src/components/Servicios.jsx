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

  useEffect(() => {
    ScrollTrigger.killAll();
    gsap.registerPlugin(ScrollTrigger);

    // Establecer estados iniciales INMEDIATAMENTE para evitar flash
    const initializeElements = () => {
      if (sectionRef.current) {
        gsap.set(sectionRef.current, {
          opacity: 1, // Cambiar a 1 para que sea visible
          visibility: "visible", // Cambiar a visible
        });
      }
      if (titleRef.current) {
        gsap.set(titleRef.current, {
          opacity: 0,
          visibility: "hidden",
        });
        titleRef.current.textContent = ""; // Limpiar texto inmediatamente
      }
      if (infoRef.current) {
        gsap.set(infoRef.current, { opacity: 0, y: 60 });
      }
      if (cardsRef.current) {
        cardsRef.current.forEach((card) => {
          if (card) {
            gsap.set(card, {
              opacity: 0,
              scale: 2,
              transformOrigin: "center center",
            });
          }
        });
      }
    };

    // Llamar inmediatamente
    initializeElements();

    // Luego configurar las animaciones
    serviciosTitleAnimation(titleRef, sectionRef);
    serviciosInfoAnimation(infoRef, sectionRef);
    serviciosCardsAnimation(cardsRef, sectionRef);
    serviciosCardHoverAnimation(cardsRef);

    const cleanupCycling = initServiceCardsCycling(cardsRef, tagsRef);
    const cleanupMouseFollow = serviciosMouseFollowAnimation(
      sectionRef,
      titleRef,
      infoRef,
      cardsRef
    );

    return () => {
      if (cleanupCycling) cleanupCycling();
      if (cleanupMouseFollow) cleanupMouseFollow();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#181414]">
      <div className="w-full min-h-screen">
        <section
          id="servicios"
          ref={sectionRef}
          className="servicios-mobile w-full max-w-full flex flex-col lg:flex-row justify-between items-start mt-[80px] lg:mt-[100px] min-h-[400px] p-0 box-border px-4 lg:px-0"
          style={{
            opacity: 1,
            visibility: "visible",
          }}
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
              Impulsa tu negocio con nuestras soluciones integrales en marketing
              digital, automatización y gestión de redes sociales. Te ayudamos a
              crecer y optimizar tus procesos con estrategias innovadoras y
              tecnología avanzada.
            </p>
            <button className="inline-block bg-white text-[#181414] font-bold rounded-[24px] py-3 px-7 text-base border-none cursor-pointer transition-colors duration-200 mt-3 hover:bg-[#ff3131] hover:text-white self-center lg:self-start mx-auto lg:mx-0">
              Conoce más sobre nuestros servicios
            </button>
          </div>
          <div
            className="flex flex-col gap-7 w-full lg:min-w-[420px] lg:max-w-[600px] px-4 lg:pr-[60px] pt-10 pb-10 lg:mr-[100px] mr-0 mt-8 lg:mt-0"
            style={{ marginLeft: "auto" }}
          >
            {/* Marketing Digital */}
            <div
              className="rounded-[20px] w-full p-6 lg:p-8 pb-5 lg:pb-7 mb-0 border servicio-card card-dark"
              ref={(el) => (cardsRef.current[0] = el)}
            >
              <div
                className="card-title text-xl lg:text-2xl font-extrabold mb-3 flex items-center gap-2"
                style={{ alignItems: "center" }}
              >
                Marketing Digital
                {/* ...puedes mantener el ícono o cambiarlo si lo deseas... */}
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
                Desarrollamos estrategias personalizadas para aumentar tu
                visibilidad online y alcanzar tus objetivos de negocio.
                Analizamos tu mercado y creamos campañas efectivas para
                posicionar tu marca y captar clientes.
              </div>
              <div
                className="flex flex-wrap gap-2 mt-1"
                ref={(el) => (tagsRef.current[0] = el)}
              >
                <span className="card-tag text-[0.85rem] lg:text-[0.95rem] font-semibold rounded-[16px] py-1.5 px-3 lg:px-4 inline-block mt-1 border">
                  Estrategia Digital
                </span>
                <span className="card-tag text-[0.85rem] lg:text-[0.95rem] font-semibold rounded-[16px] py-1.5 px-3 lg:px-4 inline-block mt-1 border">
                  SEO/SEM
                </span>
                <span className="card-tag text-[0.85rem] lg:text-[0.95rem] font-semibold rounded-[16px] py-1.5 px-3 lg:px-4 inline-block mt-1 border">
                  Publicidad Online
                </span>
              </div>
            </div>
            {/* Automatización */}
            <div
              className="rounded-[20px] w-full p-6 lg:p-8 pb-5 lg:pb-7 mb-0 border servicio-card card-dark"
              ref={(el) => (cardsRef.current[1] = el)}
            >
              <div
                className="card-title text-xl lg:text-2xl font-extrabold mb-3 flex items-center gap-2"
                style={{ alignItems: "center" }}
              >
                Automatización
                <svg
                  className="w-6 h-6 ml-1 flex-shrink-0"
                  style={{ verticalAlign: "middle" }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
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
              <div className="card-description text-sm lg:text-base mb-4">
                Optimizamos tus procesos de marketing y ventas mediante el uso
                de automatizaciones inteligentes. Automatizamos procesos de
                negocio, desarrollamos chatbots, implementamos IA y soluciones
                tecnológicas para mejorar la eficiencia y experiencia de tus
                clientes.
              </div>
              <div
                className="flex flex-wrap gap-2 mt-1"
                ref={(el) => (tagsRef.current[1] = el)}
              >
                <span className="card-tag text-[0.85rem] lg:text-[0.95rem] font-semibold rounded-[16px] py-1.5 px-3 lg:px-4 inline-block mt-1 border">
                  Automatización de Marketing
                </span>
                <span className="card-tag text-[0.85rem] lg:text-[0.95rem] font-semibold rounded-[16px] py-1.5 px-3 lg:px-4 inline-block mt-1 border">
                  Chatbots
                </span>
                <span className="card-tag text-[0.85rem] lg:text-[0.95rem] font-semibold rounded-[16px] py-1.5 px-3 lg:px-4 inline-block mt-1 border">
                  Inteligencia Artificial
                </span>
              </div>
            </div>
            {/* Gestión de Redes Sociales */}
            <div
              className="rounded-[20px] w-full p-6 lg:p-8 pb-5 lg:pb-7 mb-0 border servicio-card card-dark"
              ref={(el) => (cardsRef.current[2] = el)}
            >
              <div
                className="card-title text-xl lg:text-2xl font-extrabold mb-3 flex items-center gap-2"
                style={{ alignItems: "center" }}
              >
                Gestión de Redes Sociales
                <svg
                  className="w-6 h-6 ml-1 flex-shrink-0"
                  style={{
                    verticalAlign: "middle",
                    transition: "stroke 0.8s, fill 0.8s",
                  }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 13V7a2 2 0 0 1 2-2h2l9-3v16l-9-3H5a2 2 0 0 1-2-2v-6z"
                    fill="#fff"
                    stroke="#fff"
                    style={{ transition: "stroke 0.8s, fill 0.8s" }}
                  />
                  <circle
                    cx="17.5"
                    cy="12"
                    r="1.5"
                    fill="#181414"
                    style={{ transition: "fill 0.8s" }}
                  />
                  <path
                    d="M7 15v2a2 2 0 0 0 2 2h1"
                    stroke="#fff"
                    style={{ transition: "stroke 0.8s" }}
                  />
                </svg>
              </div>
              <div className="card-description text-sm lg:text-base mb-4">
                Potenciamos tu presencia en redes sociales mediante contenido
                atractivo y estrategias de crecimiento. Gestionamos tus
                perfiles, creamos contenido relevante y conectamos con tu
                audiencia para fortalecer tu marca.
              </div>
              <div
                className="flex flex-wrap gap-2 mt-1"
                ref={(el) => (tagsRef.current[2] = el)}
              >
                <span className="card-tag text-[0.85rem] lg:text-[0.95rem] font-semibold rounded-[16px] py-1.5 px-3 lg:px-4 inline-block mt-1 border">
                  Social Media
                </span>
                <span className="card-tag text-[0.85rem] lg:text-[0.95rem] font-semibold rounded-[16px] py-1.5 px-3 lg:px-4 inline-block mt-1 border">
                  Crecimiento de Audiencia
                </span>
                <span className="card-tag text-[0.85rem] lg:text-[0.95rem] font-semibold rounded-[16px] py-1.5 px-3 lg:px-4 inline-block mt-1 border">
                  Contenido Creativo
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const Styles = () => (
  <style>{`
    #logo-mask {
      background: white;
      mask-image: url('/servicios-mask.svg');
      -webkit-mask-image: url('../assets/images/servicios-mask.svg');
      mask-position: center center;
      -webkit-mask-position: center center;
      mask-repeat: no-repeat;
      -webkit-mask-repeat: no-repeat;
      mask-size: clamp(300vh, 200%, 400vh);
      -webkit-mask-size: clamp(300vh, 200%, 400vh);
    }
  `}</style>
);

export default Servicios;
