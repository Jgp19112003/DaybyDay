// /components/Nosotros.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: (
      <img
        src="/images/terminal.png"
        alt="Desafío de automatización"
        className="w-12 h-12 object-contain"
      />
    ),
    title: "El Desafío",
    desc: "Muchas empresas aún no adoptan la automatización de marketing e IA, perdiendo eficiencia, clientes y competitividad en un mercado cada vez más exigente.",
  },
  {
    icon: (
      <img
        src="/images/solucion.png"
        alt="Nuestra Solución"
        className="w-12 h-12 object-contain"
      />
    ),
    title: "Nuestra Solución",
    desc: "Un enfoque adaptativo: estrategias flexibles y personalizadas de automatización e IA que eliminan barreras y convierten la tecnología en resultados sostenibles.",
  },
  {
    icon: (
      <img
        src="/images/escalable.png"
        alt="Escalar servicios"
        className="w-12 h-12 object-contain"
      />
    ),
    title: "Servicios Escalables",
    desc: "Desde proyectos rápidos como chatbots o emails automatizados, hasta estrategias avanzadas con IA para segmentación, predicción y campañas omnicanal.",
  },
  {
    icon: (
      <img
        src="/images/personalizacion.png"
        alt="Personalización Real"
        className="w-12 h-12 object-contain"
      />
    ),
    title: "Personalización Real",
    desc: "Nuestro valor central: experiencias únicas potenciadas por IA, llevando la personalización a escala sin perder el toque humano y cercano.",
  },
];

const testimonials = [
  {
    text: "“Confiamos en Day by Day para digitalizar nuestra línea B2C. Automatizaron todo el proceso desde la actualización de los productos de proveedores pasando por Shopify hasta el flujo de WhatsApp, lo que nos permitió escalar ventas sin aumentar carga operativa. Hoy, nuestras campañas funcionan solas y nos centramos en crecer.”",
    name: "Aras Life Plus",
    tagline: "Pyme B2B tradicional - Canal B2C automatizado",
    img: "/images/araslife.png",
    variant: "a",
    bg: "from-[#1a1a1a] via-[#2a2a2a] to-[#000000]",
  },
  {
    text: "“Day by Day nos ayudó a redefinir nuestra estrategia digital desde cero. Antes teníamos una web desactualizada y ahora contamos con un ecosistema automatizado de ventas y remarketing que genera resultados constantes. Siempre atentos, rápidos y claros.”",
    name: "Cartri",
    tagline: "Startup B2C en crecimiento",
    img: "/images/cartri.png",
    variant: "b",
    bg: "from-[#dc2626] via-[#ef4444] to-[#b91c1c]",
  },
  {
    text: "“Contraté los servicios de Day by Day para la creación de la web de Araslife+. El trabajo se entregó en tiempo y forma, con gran profesionalidad y aportando ideas que mejoraron mucho la página. Todo el desarrollo en Shopify ha dado resultados excepcionales. Gracias a la satisfacción de este proyecto, también confié en ellos para Cartri.es y actualmente en el desarrollo y expansión de Garett.es en España. Siempre con soluciones efectivas y precios razonables, incluso en trabajos urgentes.”",
    name: "Garett España",
    tagline: "Startup B2B en crecimiento",
    img: "/images/garett.png",
    variant: "a",
    bg: "from-[#1a1a1a] via-[#2a2a2a] to-[#000000]",
  },
  {
    text: "“Buscábamos una agencia capaz de ejecutar una estrategia de marketing integral. DaybyDay definió y ejecutó un funnel de captación de leads para una gran universidad española: mensajes, públicos, creatividades y campañas, todo personalizado para más de 30 programas. Lo que cambió fue nuestra relación con el cliente: ahora ahorramos tiempo, ganamos autoridad y tenemos claridad estratégica.”",
    name: "Evercreate",
    tagline: "Para una de las 5 mejores universidades privadas de España",
    img: "/images/evercreate.png",
    variant: "b",
    bg: "from-[#dc2626] via-[#ef4444] to-[#b91c1c]",
  },
];

const garettMetrics = [
  {
    platform: "Meta Ads",
    badge: "eCommerce",
    color: "from-[#0d1117] to-[#161b22]",
    badgeColor: "bg-blue-500",
    items: [
      { label: "Inversión", value: "3.179,60 €" },
      { label: "Impresiones", value: "297.446" },
      { label: "Clicks", value: "~14.936", highlight: true },
      { label: "Inicios de pago", value: "661" },
      { label: "Coste Por Adquisición (CPA)", value: "4,8 €", highlight: true },
    ],
  },
  {
    platform: "ECI - Sponsored Products",
    badge: "El Corte Inglés",
    color: "from-[#0d1117] to-[#161b22]",
    badgeColor: "bg-emerald-500",
    items: [
      { label: "Inversión", value: "7.853 €" },
      { label: "Impresiones", value: "447.695" },
    ],
  },
];

const evercreateMetrics = [
  {
    platform: "Meta Ads",
    badge: "Lead Gen",
    color: "from-[#0d1117] to-[#161b22]",
    badgeColor: "bg-blue-500",
    items: [
      { label: "Inversión", value: "193.829,20 €" },
      { label: "Impresiones", value: "84.369.922" },
      { label: "Link CTR", value: "0,97%" },
      { label: "CPC link", value: "0,24 €", highlight: true },
      { label: "Creatividades", value: "711", highlight: true },
      { label: "CPL", value: "55 €", highlight: true },
    ],
  },
  {
    platform: "Google Ads",
    badge: "Total",
    color: "from-[#0d1117] to-[#161b22]",
    badgeColor: "bg-emerald-500",
    items: [
      { label: "Inversión", value: "59.850,31 €" },
      { label: "Impresiones", value: "3.831.087" },
      { label: "Clicks", value: "51.600" },
      { label: "CTR", value: "10,35%" },
      { label: "CPC medio", value: "1,16 €" },
    ],
  },
];

const logos = [
  { src: "/images/garett.png", alt: "Garett" },
  { src: "/images/cartri.png", alt: "Cartri" },
  { src: "/images/araslife.png", alt: "Aras Life Plus" },
  { src: "/images/evercreate.png", alt: "Evercreate" },
  { src: "/images/ufv.png", alt: "UFV" },
  { src: "/images/kueba.png", alt: "Kueba" },
];

const Nosotros = () => {
  const featRef = useRef(null);
  const testiRef = useRef(null);
  const [slot1, setSlot1] = React.useState(0);
  const [slot2, setSlot2] = React.useState(1);
  const [slot3, setSlot3] = React.useState(2);
  const [animating, setAnimating] = React.useState([false, false, false]);

  // Animación de slots - cambio en cascada de derecha a izquierda
  useEffect(() => {
    const changeAllSlots = () => {
      // Slot 3 (más a la derecha) empieza primero
      setTimeout(() => {
        setAnimating((prev) => {
          const newState = [...prev];
          newState[2] = true;
          return newState;
        });
        setTimeout(() => {
          let newIndex;
          do {
            newIndex = Math.floor(Math.random() * logos.length);
          } while (newIndex === slot3);
          setSlot3(newIndex);
          setTimeout(() => {
            setAnimating((prev) => {
              const newState = [...prev];
              newState[2] = false;
              return newState;
            });
          }, 600);
        }, 300);
      }, 0);

      // Slot 2 - delay de 150ms
      setTimeout(() => {
        setAnimating((prev) => {
          const newState = [...prev];
          newState[1] = true;
          return newState;
        });
        setTimeout(() => {
          let newIndex;
          do {
            newIndex = Math.floor(Math.random() * logos.length);
          } while (newIndex === slot2);
          setSlot2(newIndex);
          setTimeout(() => {
            setAnimating((prev) => {
              const newState = [...prev];
              newState[1] = false;
              return newState;
            });
          }, 600);
        }, 300);
      }, 150);

      // Slot 1 (más a la izquierda) empieza último - delay de 300ms
      setTimeout(() => {
        setAnimating((prev) => {
          const newState = [...prev];
          newState[0] = true;
          return newState;
        });
        setTimeout(() => {
          let newIndex;
          do {
            newIndex = Math.floor(Math.random() * logos.length);
          } while (newIndex === slot1);
          setSlot1(newIndex);
          setTimeout(() => {
            setAnimating((prev) => {
              const newState = [...prev];
              newState[0] = false;
              return newState;
            });
          }, 600);
        }, 300);
      }, 300);
    };

    // Ejecutar cada 4 segundos
    const interval = setInterval(changeAllSlots, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [slot1, slot2, slot3]);

  // Animaciones bloque features
  useEffect(() => {
    if (!featRef.current) return;
    const el = featRef.current;
    const items = el.querySelectorAll(".feature");
    const h2 = el.querySelector("h2");
    const subtitle = el.querySelector(".nosotros-sub");

    if (!h2 || !subtitle || !items.length) return;

    // Set initial state - elements hidden
    gsap.set([h2, subtitle, items], {
      opacity: 0,
      y: 50,
    });

    const tl1 = gsap.fromTo(
      h2,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: false,
          refreshPriority: -1,
        },
      },
    );

    const tl2 = gsap.fromTo(
      subtitle,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: false,
          refreshPriority: -1,
        },
      },
    );

    const tl3 = gsap.fromTo(
      items,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          once: false,
          refreshPriority: -1,
        },
      },
    );

    return () => {
      tl1.kill();
      tl2.kill();
      tl3.kill();
    };
  }, []);

  // Animaciones bloque testimonios
  useEffect(() => {
    if (!testiRef.current) return;
    const el = testiRef.current;
    const title = el.querySelector("h2");
    const cards = el.querySelectorAll(".testimonial");

    if (!title || !cards.length) return;

    // Set initial state - elements hidden
    gsap.set([title, cards], {
      opacity: 0,
      y: 60,
    });

    // Animate title first
    const tl1 = gsap.fromTo(
      title,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: false,
          refreshPriority: -1,
        },
      },
    );

    // Then animate cards
    const tl2 = gsap.fromTo(
      cards,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.22,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: false,
          refreshPriority: -1,
        },
      },
    );

    return () => {
      tl1.kill();
      tl2.kill();
    };
  }, []);

  // ====== ANIMACIÓN TILT + GLARE EN TESTIMONIOS ======
  useEffect(() => {
    const enableHover =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!enableHover || !testiRef.current) return;

    const cards = Array.from(testiRef.current.querySelectorAll(".testimonial"));

    // Guardamos handlers/bounds en mapas para cleanup
    const boundsMap = new WeakMap();
    const moveHandlers = new WeakMap();

    const attachCard = (card) => {
      // asegurar que existe .glare
      let glare = card.querySelector(".glare");
      if (!glare) {
        glare = document.createElement("div");
        glare.className = "glare";
        card.appendChild(glare);
      }

      const onEnter = () => {
        const b = card.getBoundingClientRect();
        boundsMap.set(card, b);

        gsap.to(card, {
          scale: 1.06,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      const onMove = (e) => {
        const b = boundsMap.get(card) || card.getBoundingClientRect();
        boundsMap.set(card, b);

        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const leftX = mouseX - b.x;
        const topY = mouseY - b.y;
        const center = {
          x: leftX - b.width / 2,
          y: topY - b.height / 2,
        };

        const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
        const rotationX = center.y / 50;
        const rotationY = -center.x / 50;

        const shadowOffsetX = -rotationY * 5;
        const shadowOffsetY = rotationX * 5;
        const shadowBlur = 20 + distance / 120;

        gsap.to(card, {
          rotationX,
          rotationY,
          transformPerspective: 600,
          transformOrigin: "center center",
          ease: "power2.out",
          boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px 3px rgba(72, 65, 56, .25)`,
        });

        gsap.to(glare, {
          autoAlpha: 1,
          duration: 0.15,
          backgroundImage: `
            radial-gradient(
              circle at
              ${center.x * 2 + b.width / 2}px
              ${center.y * 2 + b.height / 2}px,
              rgba(255, 255, 255, 0.33),
              rgba(0, 0, 0, 0.06)
            )
          `,
          ease: "power2.out",
        });
      };

      const onLeave = () => {
        gsap.to(card, {
          scale: 1,
          rotationX: 0,
          rotationY: 0,
          boxShadow: `0px 0px 0px 0 rgba(0,0,0,0)`,
          duration: 0.6,
          ease: "power2.out",
        });
        gsap.to(card.querySelector(".glare"), {
          autoAlpha: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      const boundMove = (e) => onMove(e);
      moveHandlers.set(card, boundMove);

      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mousemove", boundMove);
      card.addEventListener("mouseleave", onLeave);

      // Guardar para cleanup
      card._cleanupTilt = () => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mousemove", boundMove);
        card.removeEventListener("mouseleave", onLeave);
      };
    };

    cards.forEach(attachCard);

    return () => {
      cards.forEach((c) => c._cleanupTilt && c._cleanupTilt());
    };
  }, []);

  const shapeClass = (variant) => {
    switch (variant) {
      case "a":
        return "rounded-[28px] rounded-tl-[56px] rounded-br-[56px]";
      case "b":
        return "rounded-[28px] rounded-tl-[56px] rounded-bl-[56px]";
      case "c":
        return "rounded-[28px] rounded-br-[56px]";
      default:
        return "rounded-2xl";
    }
  };

  return (
    <>
      {/* ====== BLOQUE FEATURES ====== */}
      <section
        id="nosotros"
        ref={featRef}
        className="w-full bg-[#181414] text-white py-12 md:py-20 px-4 md:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-[1.8rem] md:text-[2.2rem] lg:text-[3rem] mb-3 md:mb-4 text-white">
              Conócenos
            </h2>
            <p className="nosotros-sub text-base md:text-lg text-white/70 max-w-3xl mx-auto px-2 md:px-0">
              Automatización e IA para un crecimiento sostenible. Pensamos en
              grande, empezamos en pequeño y escalamos juntos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-8 md:mt-12">
            {features.map(
              (f, i) => (
                console.log(f, i),
                (
                  <article
                    key={i}
                    className="feature flex flex-col items-start text-left"
                  >
                    <div
                      className={`rounded-lg p-1 border border-white/10 mb-3 md:mb-4 flex items-center justify-center ${
                        i % 2 === 0 ? "bg-white" : "bg-[#de0015]"
                      }`}
                    >
                      {f.icon}
                    </div>
                    <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3">
                      {f.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-6 max-w-[28ch]">
                      {f.desc}
                    </p>
                  </article>
                )
              ),
            )}
          </div>
        </div>
      </section>

      {/* ====== EXPERIENCIA PROFESIONAL ====== */}
      <section className="w-full py-12 md:py-16 px-4 md:px-6 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#000000] rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
              <div className="bg-[#de0015] rounded-2xl p-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 md:w-12 md:h-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Experiencia a Gran Escala
                </h3>
                <p className="text-white/60 text-sm md:text-base">
                  Respaldados por trayectorias en las principales corporaciones
                  del país
                </p>
              </div>
            </div>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              Nuestro equipo cuenta con profesionales que han liderado proyectos
              de automatización y transformación digital en las principales
              empresas de{" "}
              <span className="text-white font-semibold">
                telecomunicaciones, construcción y energía de España
              </span>
              . Esta experiencia nos permite diseñar e implementar{" "}
              <span className="text-white font-semibold">
                soluciones end-to-end
              </span>{" "}
              robustas y escalables, adaptadas a entornos empresariales
              complejos y exigentes. Traemos conocimiento de clase mundial al
              servicio de tu negocio.
            </p>
          </div>
        </div>
      </section>

      {/* ====== TESTIMONIOS ====== */}
      <section
        ref={testiRef}
        className="w-full py-12 md:py-20 px-4 md:px-6 text-white"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center">
            Lo que dicen nuestros clientes
          </h2>

          <div className="space-y-6 md:space-y-10">
            {testimonials.map((t, i) => (
              <React.Fragment key={i}>
                <article
                  className={[
                    "testimonial relative p-5 md:p-7 lg:p-9 border border-white/10 shadow-lg overflow-hidden",
                    "bg-gradient-to-br",
                    i % 2 === 0 // Alternar entre dos estilos repetidamente
                      ? "from-[#1a1a1a] via-[#2a2a2a] to-[#000000]"
                      : "from-[#dc2626] via-[#ef4444] to-[#b91c1c]",
                    shapeClass(i % 2 === 0 ? "a" : "b"), // Alternar entre variantes "a" y "b"
                    i % 2 === 1 ? "md:w-[86%] mx-auto" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  style={{
                    transformStyle: "preserve-3d",
                    willChange: "transform, box-shadow",
                    transition: "box-shadow 0.2s ease-out",
                  }}
                >
                  <p className="text-base md:text-[18px] lg:text-[20px] font-medium leading-6 md:leading-7 lg:leading-8">
                    {t.text}
                  </p>

                  <div
                    className={`mt-4 md:mt-6 flex items-center gap-3 ${
                      i % 2 === 1 ? "justify-end" : "justify-start"
                    }`}
                  >
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white p-1 object-contain"
                    />
                    <div className="text-xs md:text-sm opacity-90">
                      <div className="font-bold">{t.name}</div>
                      <div className="text-white/70 text-[11px] md:text-[12px] italic mt-0.5">
                        {t.tagline}
                      </div>
                    </div>
                  </div>
                  {/* Garett Metrics - Inside Card */}
                  {i === 2 && (
                    <div className="mt-6 pt-6 ">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {garettMetrics.map((group, gi) => (
                          <div
                            key={gi}
                            className="rounded-xl border border-white/[0.04] p-4 bg-black/20 backdrop-blur-sm"
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                                {group.platform}
                              </span>
                              <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-white/[0.03] text-white/30 font-medium">
                                {group.badge}
                              </span>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-3">
                              {group.items.map((m, mi) => (
                                <div key={mi}>
                                  <div className="text-[9px] uppercase tracking-[0.08em] text-white/50 mb-1">
                                    {m.label}
                                  </div>
                                  <div className="text-sm font-bold text-white">
                                    {m.value}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Evercreate Metrics - Inside Card */}
                  {i === 3 && (
                    <div className="mt-6 pt-6 ">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {evercreateMetrics.map((group, gi) => (
                          <div
                            key={gi}
                            className="rounded-xl border border-white/[0.04] p-4 bg-black/20 backdrop-blur-sm"
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                                {group.platform}
                              </span>
                              <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-white/[0.03] text-white/30 font-medium">
                                {group.badge}
                              </span>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-3">
                              {group.items.map((m, mi) => (
                                <div key={mi}>
                                  <div className="text-[9px] uppercase tracking-[0.08em] text-white/50 mb-1">
                                    {m.label}
                                  </div>
                                  <div className="text-sm font-bold text-white">
                                    {m.value}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Glare overlay */}
                  <div
                    className="glare absolute inset-0 pointer-events-none opacity-0"
                    style={{
                      background: `radial-gradient(
                      circle at 50% 50%,
                      rgba(255,255,255,0.15),
                      rgba(0,0,0,0.05)
                    )`,
                    }}
                  />
                </article>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ====== LOGO SLOTS ====== */}
      <section className="w-full py-16 md:py-20 bg-[#181414] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Clientes que confían en nosotros
          </h3>
          <div className="flex justify-center items-center gap-4 md:gap-8">
            {/* Slot 1 */}
            <div className="slot-container">
              <div
                className={`slot-wrapper ${animating[0] ? "slot-animating" : ""}`}
              >
                <img
                  src={logos[slot1].src}
                  alt={logos[slot1].alt}
                  className="slot-logo"
                />
              </div>
            </div>

            {/* Slot 2 */}
            <div className="slot-container">
              <div
                className={`slot-wrapper ${animating[1] ? "slot-animating" : ""}`}
              >
                <img
                  src={logos[slot2].src}
                  alt={logos[slot2].alt}
                  className="slot-logo"
                />
              </div>
            </div>

            {/* Slot 3 */}
            <div className="slot-container">
              <div
                className={`slot-wrapper ${animating[2] ? "slot-animating" : ""}`}
              >
                <img
                  src={logos[slot3].src}
                  alt={logos[slot3].alt}
                  className="slot-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Logo Slot Machine Styles */
        .slot-container {
          position: relative;
          height: 80px;
          width: 160px;
          overflow: hidden;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 768px) {
          .slot-container {
            height: 120px;
            width: 220px;
          }
        }

        .slot-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slot-wrapper.slot-animating {
          animation: slotSpinWhip 1.1s ease-out;
        }

        @keyframes slotSpinWhip {
          0% {
            transform: translateY(0);
            opacity: 1;
            filter: blur(0px) brightness(1.1);
          }
          35% {
            transform: translateY(-100%);
            opacity: 0;
            filter: blur(10px) brightness(1.1);
          }
          35.01% {
            transform: translateY(100%);
            opacity: 0;
            filter: blur(10px) brightness(1.1);
          }
          60% {
            transform: translateY(-4%);
            opacity: 1;
            filter: blur(5px) brightness(1.1);
          }
          75% {
            transform: translateY(1.5%);
            opacity: 1;
            filter: blur(2px) brightness(1.1);
          }
          90% {
            transform: translateY(-0.5%);
            opacity: 1;
            filter: blur(0px) brightness(1.1);
          }
          100% {
            transform: translateY(0);
            opacity: 1;
            filter: blur(0px) brightness(1.1);
          }
        }

        .slot-logo {
          max-width: 80%;
          max-height: 80%;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .slot-container {
            height: 60px;
            width: 70px;
          }

          .slot-logo {
            max-width: 90%;
            max-height: 90%;
          }
        }

        @media (max-width: 480px) {
          .slot-container {
            height: 50px;
            width: 60px;
          }
        }

        /* Mobile-specific adjustments */
        @media (max-width: 768px) {
          .feature {
            padding: 0 1rem;
            text-align: center;
            align-items: center;
          }

          .feature h3 {
            text-align: center;
            width: 100%;
          }

          .feature p {
            text-align: center;
            max-width: none;
            line-height: 1.5;
          }

          .testimonial {
            margin: 0 1rem 2rem 1rem;
            /* Maintain bubble design on mobile */
          }

          /* Keep original bubble shapes but make them smaller */
          .testimonial.rounded-[28px] {
            border-radius: 24px !important;
          }

          .testimonial.rounded-tl-[56px] {
            border-top-left-radius: 40px !important;
          }

          .testimonial.rounded-br-[56px] {
            border-bottom-right-radius: 40px !important;
          }

          .testimonial.rounded-bl-[56px] {
            border-bottom-left-radius: 40px !important;
          }

          /* Disable hover effects on mobile */
          .testimonial {
            transform: none !important;
            transition: none !important;
          }

          .testimonial .glare {
            display: none !important;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .testimonial {
            transform: none !important;
            transition: none !important;
          }

          .testimonial:hover {
            transform: none !important;
          }

          .testimonial .glare {
            display: none !important;
          }
        }

        /* Small mobile devices */
        @media (max-width: 480px) {
          #nosotros {
            padding: 2rem 1rem;
          }

          .nosotros-sub {
            font-size: 0.95rem;
            line-height: 1.5;
            padding: 0 1rem;
          }

          .feature {
            margin-bottom: 2rem;
          }

          .testimonial {
            padding: 1.25rem;
            margin: 0 0.75rem 1.5rem 0.75rem;
          }

          .testimonial p {
            font-size: 0.95rem;
            line-height: 1.6;
          }

          /* Smaller bubble shapes for very small screens */
          .testimonial.rounded-[28px] {
            border-radius: 20px !important;
          }

          .testimonial.rounded-tl-[56px] {
            border-top-left-radius: 32px !important;
          }

          .testimonial.rounded-br-[56px] {
            border-bottom-right-radius: 32px !important;
          }

          .testimonial.rounded-bl-[56px] {
            border-bottom-left-radius: 32px !important;
          }
        }

        /* Extra small devices */
        @media (max-width: 360px) {
          .grid {
            gap: 1.5rem;
          }

          .testimonial {
            padding: 1rem;
            margin: 0 0.5rem 1.25rem 0.5rem;
          }

          .testimonial p {
            font-size: 0.9rem;
          }

          /* Even smaller bubble shapes for extra small screens */
          .testimonial.rounded-[28px] {
            border-radius: 18px !important;
          }

          .testimonial.rounded-tl-[56px] {
            border-top-left-radius: 28px !important;
          }

          .testimonial.rounded-br-[56px] {
            border-bottom-right-radius: 28px !important;
          }

          .testimonial.rounded-bl-[56px] {
            border-bottom-left-radius: 28px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Nosotros;
