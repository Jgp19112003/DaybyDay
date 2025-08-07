import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { scrambleTextAnimation } from "../animation";

// Variable de control fuera del componente
let hasAnimated = false;

const Nosotros = () => {
  const sectionRef = useRef(null);
  const infoRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef([]);
  const rightColRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Resetear la variable cuando el componente se monta
    hasAnimated = false;

    // Establecer estados iniciales INMEDIATAMENTE y de forma síncrona
    const initializeElements = () => {
      if (sectionRef.current) {
        gsap.set(sectionRef.current, {
          opacity: 0,
          y: 50,
          visibility: "hidden",
        });
      }
      if (infoRef.current) {
        gsap.set(infoRef.current, { opacity: 0, y: 60 });
      }
      if (titleRef.current) {
        gsap.set(titleRef.current, {
          opacity: 0,
          visibility: "hidden",
        });
        titleRef.current.textContent = ""; // Limpiar texto inmediatamente
      }
      if (itemsRef.current) {
        itemsRef.current.forEach((el) => {
          if (el) gsap.set(el, { opacity: 0, x: 0 });
        });
      }
      if (rightColRef.current) {
        gsap.set(rightColRef.current, { opacity: 0, x: 50 });
      }
    };

    // Llamar inmediatamente
    initializeElements();

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",
      once: true,
      onEnter: () => {
        if (hasAnimated) return;
        hasAnimated = true;

        // Hacer visible la sección primero
        gsap.set(sectionRef.current, { visibility: "visible" });

        // Animación de la sección y columnas
        gsap.to(sectionRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            const tl = gsap.timeline();
            tl.to(
              infoRef.current,
              { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
              0
            ).to(
              rightColRef.current,
              { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
              0
            );

            // Animación scramble para el título
            gsap.to(titleRef.current, {
              opacity: 1,
              visibility: "visible",
              duration: 0.3,
              onComplete: () => {
                scrambleTextAnimation(titleRef.current, "Sobre Nosotros", {
                  duration: 1200,
                  delay: 0,
                });
              },
            });

            // Animar los ítems del timeline
            itemsRef.current.forEach((el, i) => {
              if (el) {
                gsap.fromTo(
                  el,
                  { opacity: 0, x: i % 2 === 0 ? -100 : 100 },
                  {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    delay: 0.5 + i * 0.2,
                  }
                );
              }
            });
          },
        });
      },
    });

    // Cleanup function para limpiar ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
      hasAnimated = false; // Reset cuando el componente se desmonta
    };
  }, []);

  const data = [
    {
      icon: "/icons/history.svg",
      title: "Nuestra historia",
      text: "Fundada con la misión de ayudar a las empresas a prosperar en la era digital. DayByDay ha crecido hasta convertirse en una agencia líder, trabajando con negocios de todos los tamaños.",
    },
    {
      icon: "/icons/mission.svg",
      title: "Nuestra misión",
      text: "Empoderamos a las empresas para que alcancen su máximo potencial mediante estrategias digitales y soluciones de automatización eficientes.",
    },
    {
      icon: "/icons/values.svg",
      title: "Nuestros valores",
      text: "Excelencia: Nos comprometemos a entregar resultados excepcionales en cada proyecto. Innovación: Nos mantenemos en la vanguardia de la tecnología y las tendencias del mercado.",
    },
  ];

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="bg-[#181414] text-white py-20 px-4"
      style={{
        minHeight: "60vh",
        opacity: 0, // CSS inicial para evitar flash
        visibility: "hidden", // CSS inicial para evitar flash
      }}
    >
      <div className="w-full max-w-full flex flex-col lg:flex-row justify-between items-center mt-[80px] lg:mt-[100px] min-h-[400px] p-0 box-border px-4 lg:px-0">
        {/* Columna izquierda: texto/timeline */}
        <div
          ref={infoRef}
          className="flex flex-col justify-start text-white lg:pl-[60px] pt-10 pb-10 flex-1 max-w-none lg:max-w-[700px] min-w-0 lg:ml-[100px] ml-0 w-full lg:w-auto"
        >
          <h2
            ref={titleRef}
            className="text-[2.5rem] lg:text-[4rem] font-black mb-6 leading-none tracking-tight text-center lg:text-left"
          >
            Sobre Nosotros
          </h2>
          {/* Agregar subtítulo descriptivo */}
          <p className="text-base lg:text-lg text-[#e0e0e0] mb-12 leading-relaxed text-center lg:text-left px-2 lg:px-0">
            Historia, misión y valores claros para construir confianza. Humaniza
            la marca.
          </p>
          <div className="space-y-12">
            {data.map((item, i) => (
              <div
                key={i}
                ref={(el) => (itemsRef.current[i] = el)}
                className="flex flex-row items-center gap-6"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="w-16 h-16 flex-shrink-0"
                />
                <div className="max-w-xl">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-[#e0e0e0]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Columna derecha: marco con video */}
        <div
          ref={rightColRef}
          className="flex flex-col justify-center gap-7 w-full lg:min-w-[600px] lg:max-w-[800px] px-4 lg:pr-[60px] pt-10 pb-10 lg:mr-[100px] mr-0 mt-8 lg:mt-0"
          style={{ marginLeft: "auto" }}
        >
          <div
            className="rounded-[16px] bg-[#f5f5f5] p-4"
            style={{ boxShadow: "4px 6px 1px #e0e0e0" }}
          >
            <div className="rounded-[16px] overflow-hidden w-full">
              <video
                src="/videos/nosotros.mp4"
                controls
                className="w-full h-[450px] object-cover"
              >
                Tu navegador no soporta el video.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
