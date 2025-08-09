import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { scrambleTextAnimation } from "../animation";

let hasAnimated = false;

// Altura del navbar. Fallback 80px.
const getNAV = () =>
  document.querySelector("#navbar, .site-nav, header")?.offsetHeight || 80;

const NAV_EXTRA_DESKTOP = 10;
const NAV_EXTRA_MOBILE = 90;

const Nosotros = () => {
  const sectionRef = useRef(null);
  const rowRef = useRef(null);
  const stackRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const rightColRef = useRef(null);
  const videoTextRef = useRef(null);
  const [showVideoMobile, setShowVideoMobile] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    hasAnimated = false;

    const isDesktop = window.innerWidth >= 1024;
    const navOffset =
      getNAV() + (isDesktop ? NAV_EXTRA_DESKTOP : NAV_EXTRA_MOBILE);
    const cards = cardsRef.current.filter(Boolean);
    if (!rowRef.current || !stackRef.current || cards.length === 0) return;
    const steps = cards.length;

    // Ocultar la sección inicialmente para que no se vea hasta que se haga scroll
    gsap.set(sectionRef.current, { autoAlpha: 0, visibility: "hidden" });
    gsap.set(titleRef.current, { autoAlpha: 0, y: 14 });
    gsap.set(cards, { autoAlpha: 0 });
    gsap.set(rightColRef.current, { autoAlpha: 0, y: 0 });
    gsap.set(videoTextRef.current, { autoAlpha: 0, y: 24 });

    // ===== Timeline de animación: muestra la sección y ejecuta el resto de la animaciones =====
    const textTl = gsap.timeline({
      paused: true,
      defaults: { ease: "power3.out" },
    });
    textTl
      .to(sectionRef.current, {
        autoAlpha: 1,
        visibility: "visible",
        duration: 0.1,
      })
      .to(titleRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        onComplete: () => {
          if (!hasAnimated) {
            hasAnimated = true;
            scrambleTextAnimation(titleRef.current, "Sobre Nosotros", {
              duration: 1200,
              delay: 0,
            });
          }
        },
      })
      .to(
        cards,
        {
          autoAlpha: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
        "+=0.3"
      )
      .to(
        videoTextRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "+=0.2"
      )
      .to(
        rightColRef.current,
        {
          autoAlpha: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "+=0.1"
      );

    // Ejecuta la animación solo cuando se haga scroll hasta la sección
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => textTl.play(),
      invalidateOnRefresh: true,
    });

    // ===== Desktop stack scroll =====
    if (isDesktop) {
      cards.forEach((el, i) => {
        const translate = [-5, -3.75, -2.5, -1.25, 0, 1.25][i] ?? 0;
        const scale = [0.98, 0.93, 0.88, 0.83, 0.78, 0.73][i] ?? 0.73;
        gsap.set(el, {
          yPercent: 0,
          scale,
          zIndex: cards.length - i,
          transformOrigin: "bottom center",
          translateY: `${translate}vh`,
          willChange: "transform",
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rowRef.current,
          start: () => `top top+=${navOffset}`,
          end: () => `+=${window.innerHeight * steps * 0.9}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "none" },
      });

      cards.forEach((card, i) => {
        const isLast = i === cards.length - 1;
        if (isLast) {
          tl.to(card, { yPercent: -40, duration: 1 }, i + 0.3);
        } else {
          tl.to(card, { yPercent: -160, duration: 1 }, i);
          tl.to(cards[i + 1], { scale: 1, duration: 1 }, i + 0.25);
        }
      });
    }
    // ===== Móvil stack scroll =====
    else {
      gsap.set(stackRef.current, {
        minHeight: "100vh",
        position: "relative",
        paddingTop: "6vh",
      });

      cards.forEach((el, i) => {
        const scale = [0.94, 0.9, 0.86, 0.82, 0.79, 0.76][i] ?? 0.76;
        const translate = [-2.2, -1.6, -1.0, -0.5, 0, 0.4][i] ?? 0;
        gsap.set(el, {
          position: "absolute",
          left: "50%",
          xPercent: -50,
          top: 0,
          yPercent: 0,
          width: "92vw",
          maxWidth: "480px",
          zIndex: cards.length - i,
          transformOrigin: "bottom center",
          scale,
          translateY: `${translate}vh`,
          willChange: "transform",
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stackRef.current,
          start: () => `top top+=${navOffset}`,
          end: () => `+=${window.innerHeight * steps * 0.55}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "none" },
      });

      cards.forEach((card, i) => {
        const isLast = i === cards.length - 1;
        if (isLast) {
          tl.to(card, { yPercent: -35, duration: 1 }, i + 0.3);
        } else {
          tl.to(card, { yPercent: -155, duration: 1 }, i);
          tl.to(cards[i + 1], { scale: 1, duration: 1 }, i + 0.25);
        }
      });

      ScrollTrigger.create({
        trigger: stackRef.current,
        start: () => `top top+=${navOffset}`,
        end: () => `+=${window.innerHeight * steps * 0.55}`,
        onLeave: () => {
          setShowVideoMobile(true);
          gsap.fromTo(
            rightColRef.current,
            { autoAlpha: 0, y: 24, scale: 0.98 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: "power3.out",
            }
          );
        },
        onEnterBack: () => {
          setShowVideoMobile(false);
          gsap.set(rightColRef.current, { autoAlpha: 0, y: 24, scale: 0.98 });
        },
        invalidateOnRefresh: true,
      });
    }

    // Fade out del título mientras se hace scroll
    ScrollTrigger.create({
      trigger: rowRef.current,
      start: () => `top top+=${navOffset}`,
      end: () => `+=${window.innerHeight * steps * (isDesktop ? 0.9 : 0.55)}`,
      scrub: true,
      onUpdate: (self) => {
        const fadeOutProgress = gsap.utils.clamp(0, 1, self.progress * 2);
        gsap.to(titleRef.current, {
          autoAlpha: 1 - fadeOutProgress,
          duration: 0.1,
        });
      },
      invalidateOnRefresh: true,
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const data = [
    {
      title: "Nuestra historia",
      text: "Fundada con la misión de ayudar a las empresas a prosperar en la era digital. DayByDay ha crecido hasta convertirse en una agencia líder, trabajando con negocios de todos los tamaños.",
      img: "/images/nosotros-1.jpg",
    },
    {
      title: "Nuestra misión",
      text: "Empoderamos a las empresas para que alcancen su máximo potencial mediante estrategias digitales y soluciones de automatización eficientes.",
      img: "/images/nosotros-2.jpg",
    },
    {
      title: "Nuestros valores",
      text: "Excelencia e innovación. Entregamos resultados excepcionales y nos mantenemos en la vanguardia de la tecnología y el mercado.",
      img: "/images/nosotros-3.jpg",
    },
  ];

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="nosotros-mobile bg-[#181414] text-white mt-[80px] lg:mt-[140px] py-16 lg:py-20 px-4 lg:px-0"
    >
      <div
        ref={rowRef}
        className="w-full max-w-full flex flex-col lg:flex-row justify-between items-start min-h-[400px] p-0 box-border gap-3 lg:gap-6"
      >
        {/* IZQUIERDA */}
        <div className="flex-1 max-w-none min-w-0 w-full lg:w-auto lg:pl-[60px] pt-4 lg:pt-10 pb-2 lg:pb-10 lg:ml-[100px]">
          <div
            ref={stackRef}
            className="h-auto lg:h-[calc(100vh-20vh)] flex flex-col items-stretch justify-start"
          >
            <h2
              ref={titleRef}
              className="text-[2rem] sm:text-[2.5rem] lg:text-[4rem] font-black leading-none tracking-tight mb-6 lg:mb-16 text-center lg:text-left"
            />
            <div className="relative w-full flex justify-center lg:justify-start grow">
              <div className="relative w-full">
                {data.map((item, i) => (
                  <article
                    key={i}
                    ref={(el) => (cardsRef.current[i] = el)}
                    className="relative lg:absolute bg-[#de0015] text-white rounded-[22px] overflow-hidden shadow-[10px_13px_36px_24px_rgba(0,0,0,0.1)] w-full max-w-[560px] lg:w-[min(42vw,500px)] mx-auto lg:mx-0 mb-3 lg:mb-0"
                  >
                    {item.img && (
                      <div className="w-full aspect-[4/3] overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-5 sm:p-6 md:p-8">
                      <h3 className="text-white text-[clamp(18px,4vw,36px)] font-black leading-tight mb-2 text-center lg:text-left">
                        {item.title}
                      </h3>
                      <p className="text-white text-[clamp(13px,3.2vw,17px)] leading-relaxed text-center lg:text-left">
                        {item.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* DERECHA (VÍDEO) */}
        <div
          className={`w-full lg:min-w-[500px] lg:max-w-[750px] px-0 lg:px-0 lg:pr-[60px] pt-2 lg:pt-10 pb-2 lg:pb-10 lg:mr-[100px] ${
            showVideoMobile ? "" : "hidden lg:block"
          }`}
          style={{ marginLeft: "auto" }}
        >
          <div className="h-auto lg:h-[calc(100vh-12vh)] flex flex-col items-center lg:items-start">
            <p
              ref={videoTextRef}
              className="text-base lg:text-lg text-[#e0e0e0] mb-4 lg:mb-8 leading-relaxed text-center lg:text-left px-2 lg:px-0"
            >
              Porque no solo queremos contártelo, queremos mostrártelo. Descubre
              en este vídeo cómo nuestras soluciones pueden transformar tu
              negocio.
            </p>

            <div
              ref={rightColRef}
              className="rounded-[16px] bg-[#f5f5f5] p-3 lg:p-4 w-full max-w-[800px] mx-auto"
              style={{ boxShadow: "4px 6px 1px #e0e0e0" }}
            >
              <div className="rounded-[16px] overflow-hidden w-full aspect-video">
                <video
                  src="ikeavideo.mp4"
                  controls
                  muted
                  playsInline
                  preload="auto"
                  onLoadedData={(e) => (e.target.currentTime = 0)}
                  className="w-full h-full object-cover"
                >
                  Tu navegador no soporta el video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
