// /components/Sectores.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { scrambleTextAnimation } from "../animation"; // efecto “scramble/typing”

const getNAV = () =>
  document.querySelector("#navbar, .site-nav, header")?.offsetHeight || 80;

const Sectores = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);

  const stackRef = useRef(null);
  const cardsRef = useRef([]);
  const btnRefs = useRef([]);

  const footerSpacerRef = useRef(null);

  // control
  const headerTlRef = useRef(null);
  const stackBuiltRef = useRef(false); // stack ScrollTrigger construido
  const stackLaidOutRef = useRef(false); // layout del stack preparado
  const stInstancesRef = useRef([]); // para limpiar triggers del stack
  const setHeaderOpacityRef = useRef(null); // quickSetter para menor coste en onUpdate

  // estado de viewport para alternar efectos pesados en mobile
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : true
  );

  const FINAL_TITLE = "Soluciones por nicho, listas para acelerar";

  const data = [
    {
      key: "consultorias",
      badge: "Consultorías de negocio / estrategia",
      h2: "Convierte cada propuesta en cliente sin sumar horas de trabajo",
      sub: "Automatización + IA para cerrar más ventas sin ampliar tu equipo.",
      jtb: "“Necesito que mis leads se conviertan más rápido sin que mi equipo esté colapsado.”",
      hacemos: [
        "Organizamos y automatizamos tu captación y seguimiento.",
        "Conectamos tus canales y CRM en un único flujo.",
        "Cierra más clientes con menos esfuerzo operativo.",
      ],
      quickWins: [
        "Secuencia automatizada de emails para leads nuevos.",
        "Chatbot en web para filtrar y agendar citas.",
        "Integración LinkedIn Ads → CRM.",
      ],
      proyectos: [
        "Sistema full-funnel de captación y cierre con nurturing y reporting automatizado.",
        "Panel de métricas en tiempo real por propuesta y equipo.",
      ],
      resultados: [
        "+30% leads calificados en 90 días.",
        "-25% tiempo de gestión comercial.",
        "+20% tasa de conversión.",
      ],
      cta: "Quiero mi diagnóstico gratuito",
    },
    {
      key: "formativos",
      badge: "Centros formativos / cursos online high ticket",
      h2: "Llenamos tus plazas sin sobrecargar a tu equipo de admisiones",
      sub: "Automatizamos el seguimiento y la captación para maximizar matrículas.",
      jtb: "“Necesito llenar las plazas de mi máster sin duplicar presupuesto ni saturar al equipo.”",
      hacemos: [
        "Unificamos tu captación de leads y seguimiento en un sistema automatizado.",
        "Mensajes y recordatorios personalizados para cada alumno potencial.",
        "Mejora tu ratio de matrícula con menos llamadas perdidas.",
      ],
      quickWins: [
        "Automatización post-registro con email + WhatsApp.",
        "Segmentación automática de leads por interés.",
        "Recordatorios SMS para asistir a sesiones.",
      ],
      proyectos: [
        "Funnel de captación desde Ads hasta inscripción con seguimiento multicanal.",
        "CRM educativo con scoring de leads y dashboards por programa.",
      ],
      resultados: [
        "+25% ratio de matrícula.",
        "-40% tiempo de seguimiento manual.",
        "Más inscripciones en menos tiempo.",
      ],
      cta: "Quiero más matrículas",
    },
    {
      key: "startups",
      badge: "Startups B2B en crecimiento",
      h2: "Escala rápido sin romper tus procesos",
      sub: "Funnel, CRM y ventas conectados para crecer sin fricciones.",
      jtb: "“Necesito un funnel que escale sin que se rompa mi flujo de marketing y ventas.”",
      hacemos: [
        "Diseñamos tu funnel completo desde captación a cierre.",
        "Automatizamos el nurturing con IA y datos en tiempo real.",
        "Visibilidad total de métricas y oportunidades.",
      ],
      quickWins: [
        "Integración formularios web → CRM con alertas instantáneas.",
        "Secuencia automatizada para leads de LinkedIn Ads y cold email.",
        "Dashboard unificado de métricas MKT + ventas.",
      ],
      proyectos: [
        "Sistema de scoring y routing de leads con IA.",
        "Automatización completa de marketing outbound + inbound.",
      ],
      resultados: [
        "-50% tiempo en leads no cualificados.",
        "+35% cierre en leads calientes.",
        "Escalabilidad sin sobrecoste de personal.",
      ],
      cta: "Quiero escalar mi startup",
    },
    {
      key: "pymes",
      badge: "PYMEs B2B tradicionales",
      h2: "Moderniza tus ventas sin reinventar tu empresa",
      sub: "Automatización adaptada a tu equipo y a tu forma de vender.",
      jtb: "“Necesito vender más sin dejar atrás a mi equipo actual ni perder clientes.”",
      hacemos: [
        "Digitalizamos tu proceso comercial manteniendo tus herramientas de siempre.",
        "Nuevos canales de venta online con automatización integrada.",
        "Oportunidades B2C y ventas cruzadas sin aumentar plantilla.",
      ],
      quickWins: [
        "Ecommerce Shopify con integración de stock.",
        "Automatización de captación de influencers y colaboraciones.",
        "Flujos de ventas cruzadas por email y WhatsApp.",
      ],
      proyectos: [
        "Estrategia digital B2B + B2C con captación y logística automatizada.",
        "Canal TikTok Shop con gestión de envíos.",
      ],
      resultados: [
        "Nuevas fuentes de ingresos en 60 días.",
        "+20% ventas cruzadas.",
        "Procesos más ágiles para tu equipo.",
      ],
      cta: "Quiero modernizar mis ventas",
    },
  ];

  // Utilidad: vh -> px (para layout inicial sin mezclar transform strings)
  const vh2px = (vh) => (window.innerHeight * vh) / 100;

  // Prepara el layout del stack (posiciones y escalas) pero sin mostrarlo
  const layoutStack = () => {
    if (stackLaidOutRef.current) return;
    const desktop = window.innerWidth >= 1024;
    const cards = cardsRef.current.filter(Boolean);
    if (!stackRef.current || cards.length === 0) return;

    // --- Margen superior/inferior MÁS CONTENIDO y ajustado en móvil ---
    const containerPadTop = `calc(${desktop ? 14 : 10}vh + ${getNAV()}px)`; // ↓ móvil
    const containerPadBottom = `calc(${
      desktop ? 16 : 14
    }vh + env(safe-area-inset-bottom) + ${desktop ? 24 : 40}px)`; // ↓ móvil

    gsap.set(stackRef.current, {
      minHeight: desktop ? "92vh" : "88vh",
      position: "relative",
      paddingTop: containerPadTop,
      paddingBottom: containerPadBottom,
      autoAlpha: 0,
      y: 0,
      scale: 1,
      willChange: "opacity, transform",
      force3D: true,
      transform: "translateZ(0)",
    });

    // --- Menos solapamiento en móvil (movimientos más cortos y escalas más cercanas) ---
    const scales = desktop
      ? [0.92, 0.88, 0.84, 0.8, 0.76]
      : [0.96, 0.93, 0.9, 0.87, 0.84]; // ↑ más planas en móvil

    const offsetsVH = desktop ? [6, 4, 2, 1, 0] : [7, 5.5, 4, 2.5, 1]; // ↑ más separación vertical en móvil

    cards.forEach((el, i) => {
      const scale = scales[i] ?? scales[scales.length - 1];
      const offsetPx = vh2px(offsetsVH[i] ?? 0);

      gsap.set(el, {
        position: "absolute",
        left: "50%",
        xPercent: -50,
        top: 0,
        width: "100%",
        zIndex: cards.length - i,
        transformOrigin: "bottom center",
        scale,
        y: offsetPx,
        autoAlpha: 0,
        willChange: "transform, opacity",
        force3D: true,
        transform: "translateZ(0)",
      });
    });

    stackLaidOutRef.current = true;
  };

  // Crea los ScrollTriggers del stack (solo una vez)
  const buildStackScroll = () => {
    if (stackBuiltRef.current) return;
    const desktop = window.innerWidth >= 1024;
    const cards = cardsRef.current.filter(Boolean);
    if (!stackRef.current || cards.length === 0) return;

    const navOffset = getNAV() + (desktop ? 56 : 80); // +8px de margen de seguridad en móvil
    const steps = cards.length;
    const scrollFactor = desktop ? 1.2 : 1.45; // ↑ un poco, más “aire” para separar

    // Pre-mostrar todas las cartas antes de crear timeline
    cards.forEach((card) => {
      gsap.set(card, { autoAlpha: 1 });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stackRef.current,
        start: () => `top top+=${navOffset}`,
        end: () => `+=${window.innerHeight * steps * scrollFactor}`,
        scrub: desktop ? 1.1 : 0.85, // móvil más “pegado” al scroll
        pin: true,
        pinType: desktop ? "fixed" : "transform",
        anticipatePin: desktop ? 1 : 2, // ↑ móvil para evitar “saltos”
        invalidateOnRefresh: true,
        limitCallbacks: true,
        fastScrollEnd: true,
      },
      defaults: { ease: "none" },
    });

    // Timeline con desplazamientos menos agresivos en móvil
    cards.forEach((card, i) => {
      const isLast = i === cards.length - 1;
      const cardHeight = card.offsetHeight;

      if (isLast) {
        tl.to(
          card,
          {
            y: -cardHeight * (desktop ? 0.5 : 0.48), // ↑ móvil (antes 0.38)
            duration: desktop ? 1.5 : 1.2,
          },
          i * 0.8 + 0.3
        );
      } else {
        tl.to(
          card,
          {
            y: -cardHeight * (desktop ? 1.8 : 1.45), // ↑ móvil (antes 1.28)
            duration: desktop ? 1.5 : 1.15,
          },
          i * 0.8
        );

        if (cards[i + 1]) {
          tl.to(
            cards[i + 1],
            {
              scale: 1,
              duration: desktop ? 1.2 : 0.95,
              ease: "power2.out",
            },
            i * 0.8 + 0.4
          );
        }
      }
    });

    // QuickSetter para el fade del header sin crear tweens por frame
    if (headerRef.current && !setHeaderOpacityRef.current) {
      setHeaderOpacityRef.current = gsap.quickSetter(
        headerRef.current,
        "opacity"
      );
    }

    // Fade del header mientras el stack está activo
    const totalDist = () => window.innerHeight * steps * scrollFactor;
    const fadeST = ScrollTrigger.create({
      trigger: stackRef.current,
      start: () => `top top+=${navOffset}`,
      end: () => `+=${totalDist()}`,
      scrub: true,
      onUpdate: (self) => {
        const p = gsap.utils.clamp(0, 1, self.progress * 1.6);
        setHeaderOpacityRef.current?.(1 - p);
      },
      onLeave: () => gsap.set(headerRef.current, { autoAlpha: 0 }),
      onEnterBack: () =>
        gsap.to(headerRef.current, { autoAlpha: 1, duration: 0.25 }),
      onLeaveBack: () =>
        gsap.set(headerRef.current, {
          autoAlpha: 1,
          clearProps: "opacity,visibility",
        }),
      invalidateOnRefresh: true,
    });

    stInstancesRef.current.push(tl.scrollTrigger, fadeST);
    stackBuiltRef.current = true;

    // Refresco tras construir para asegurar medidas correctas
    requestAnimationFrame(() => ScrollTrigger.refresh());
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // rendimiento general
    gsap.ticker.lagSmoothing(500, 16);
    ScrollTrigger.config({ ignoreMobileResize: true });

    // respetar preferencias de movimiento
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Estados iniciales (header visible; título vacío; stack oculto pero pre-maquetado)
    gsap.set(sectionRef.current, { autoAlpha: 1 });
    gsap.set(headerRef.current, { autoAlpha: 1, force3D: true });
    if (titleRef.current) titleRef.current.textContent = "";
    gsap.set(subRef.current, { autoAlpha: 0, y: 14 });

    // 1) Pre-layout del stack (para evitar reflows y “tic” al mostrarse)
    layoutStack();

    // 2) Timeline del header + entrada del stack
    const headerTl = gsap
      .timeline({ paused: true, defaults: { ease: "power2.out" } })
      .fromTo(
        headerRef.current,
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.7, immediateRender: false }
      )
      .add(() => {
        // Scramble del título
        scrambleTextAnimation(titleRef.current, FINAL_TITLE, {
          duration: prefersReduced ? 800 : 1800,
          delay: 0,
        });

        // Aparición suave del stack
        gsap.to(stackRef.current, {
          autoAlpha: 1,
          duration: 0.55,
          ease: "power2.out",
          delay: 0.15,
        });

        // Aparición escalonada de cartas (ligera)
        cardsRef.current.forEach((card, i) => {
          gsap.to(card, {
            autoAlpha: 1,
            duration: 0.45,
            delay: 0.35 + i * 0.12,
            ease: "power2.out",
          });
        });

        // Construir ScrollTrigger con pequeño delay
        setTimeout(() => {
          if (!prefersReduced) buildStackScroll();
        }, 180);
      })
      .to({}, { duration: 0.45 })
      .to(subRef.current, { autoAlpha: 1, y: 0, duration: 0.7 }, "+=0.05");

    headerTlRef.current = headerTl;

    // Lanzar header al entrar en viewport
    const enterST = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => headerTl.play(0),
    });

    // Acelera si el usuario scrollea muy rápido (limitado)
    const speedST = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const v = Math.abs(self.getVelocity());
        const scale = gsap.utils.clamp(1, 2.4, v / 800);
        if (headerTlRef.current?.isActive()) {
          headerTlRef.current.timeScale(scale);
        }
      },
    });

    // Glow / pulso (solo escritorio)
    if (window.innerWidth >= 1024 && !prefersReduced) {
      gsap.utils.toArray(".sb-dot").forEach((dot, i) => {
        gsap.set(dot, { transformOrigin: "center center" });
        gsap.to(dot, {
          scale: 1.2,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: (i % 5) * 0.12,
        });
        gsap.to(dot, {
          boxShadow: "0 0 14px rgba(255,49,49,0.85)",
          repeat: -1,
          yoyo: true,
          duration: 1,
          ease: "sine.inOut",
          delay: (i % 5) * 0.12,
        });
      });
    }

    // Spacer inferior extra (por si el pin se come el footer)
    const setFooterSpacer = () => {
      if (!footerSpacerRef.current) return;
      const extra =
        (window.innerWidth >= 1024 ? 14 : 16) * (window.innerHeight / 100);
      footerSpacerRef.current.style.height = `${extra + getNAV()}px`;
    };
    setFooterSpacer();
    window.addEventListener("resize", setFooterSpacer, { passive: true });

    // Limpieza
    return () => {
      window.removeEventListener("resize", setFooterSpacer);
      enterST?.kill();
      speedST?.kill();
      headerTl?.kill();
      stInstancesRef.current.forEach((st) => st?.kill());
      stInstancesRef.current = [];
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reaccionar a cambios de tamaño para rehacer layout/triggers y mantener suavidad
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    // Rehacer layout/scroll en cambios de breakpoint
    if (!stackRef.current) return;
    stInstancesRef.current.forEach((st) => st?.kill());
    stInstancesRef.current = [];
    stackBuiltRef.current = false;
    stackLaidOutRef.current = false;
    layoutStack();
    buildStackScroll();
    ScrollTrigger.refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop]);

  // CTA hover/click (no afectan al scroll)
  const handleBtnHover = (idx) => {
    gsap.to(btnRefs.current[idx], {
      scale: 1.07,
      boxShadow: "0 4px 24px rgba(222,0,21,0.18)",
      background: "#de0015",
      color: "#fff",
      duration: 0.22,
      force3D: true,
    });
    gsap.to(btnRefs.current[idx]?.querySelector("svg"), {
      x: 6,
      duration: 0.22,
      ease: "power2.out",
    });
  };
  const handleBtnLeave = (idx) => {
    gsap.to(btnRefs.current[idx], {
      scale: 1,
      boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
      background: "#fff",
      color: "#181414",
      duration: 0.22,
      force3D: true,
    });
    gsap.to(btnRefs.current[idx]?.querySelector("svg"), {
      x: 0,
      duration: 0.22,
      ease: "power2.in",
    });
  };
  const handleBtnDown = (idx) =>
    gsap.to(btnRefs.current[idx], { scale: 0.96, duration: 0.1 });
  const handleBtnUp = (idx) =>
    gsap.to(btnRefs.current[idx], { scale: 1.07, duration: 0.1 });

  // Colores de fondo más opacos en móvil
  const DESKTOP_CARD_BG = "rgba(27,23,23,0.80)";
  const MOBILE_CARD_BG = "rgba(27,23,23,0.99)"; // ↑ opacidad en móvil para legibilidad

  return (
    <section
      ref={sectionRef}
      id="sectores"
      className="w-full bg-[#181414] text-white pb-20 md:pb-32"
      style={{ touchAction: "pan-y" }}
      aria-label="Sectores a los que ayudamos"
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-10 lg:py-16">
        {/* Cabecera */}
        <header ref={headerRef} className="mb-8 lg:mb-14 will-change-auto">
          <h2
            ref={titleRef}
            className="text-[1.9rem] lg:text-[3.2rem] font-black leading-[1.05]"
            style={{
              background:
                "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.9) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              transform: "translateZ(0)",
            }}
          />
          <p ref={subRef} className="text-[#ededed] mt-3 max-w-[820px]">
            Bloques claros, resultados medibles y automatizaciones que se
            adaptan a tu forma de trabajar.
          </p>
        </header>

        {/* STACK */}
        <div ref={stackRef} className="relative w-full max-w-[1000px] mx-auto">
          {data.map((s, idx) => (
            <article
              key={s.key}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="sector-block relative rounded-3xl border border-white/10 px-5 py-6 lg:p-8 shadow-[0_6px_18px_rgba(0,0,0,0.18)] overflow-hidden w-full"
              style={{
                background: isDesktop ? DESKTOP_CARD_BG : MOBILE_CARD_BG,
                // quitar blur en móvil para evitar tirones
                backdropFilter: isDesktop ? "blur(8px)" : "none",
                WebkitBackdropFilter: isDesktop ? "blur(8px)" : "none",
                willChange: "transform",
                transform: "translateZ(0)",
                // borde un poco más marcado en móvil para separar visualmente
                border: isDesktop
                  ? "1px solid rgba(255,255,255,0.10)"
                  : "1px solid rgba(255,255,255,0.14)",
              }}
              aria-label={`Sector: ${s.badge}`}
            >
              {/* Glow decorativo: menos intensidad y sin blur en móvil */}
              <div
                className="pointer-events-none absolute -z-10 inset-0"
                style={{
                  opacity: isDesktop ? 0.7 : 0.38,
                  background:
                    idx % 2 === 0
                      ? "radial-gradient(40% 60% at 15% 20%, rgba(255,49,49,0.10), transparent 60%), radial-gradient(50% 80% at 90% 10%, rgba(255,255,255,0.05), transparent 60%)"
                      : "radial-gradient(40% 60% at 80% 20%, rgba(255,49,49,0.10), transparent 60%), radial-gradient(50% 80% at 10% 10%, rgba(255,255,255,0.05), transparent 60%)",
                  filter: isDesktop ? "blur(18px)" : "none",
                  willChange: "opacity",
                }}
                aria-hidden="true"
              />

              {/* Header limpio de la card */}
              <div className="flex items-center gap-3">
                <span className="sb-badge" aria-label="tipo de sector">
                  <span className="sb-dot" />
                  {s.badge}
                </span>
              </div>

              <div className="mt-3">
                <h3 className="text-[1.55rem] lg:text-[2.2rem] font-black leading-[1.15]">
                  {s.h2}
                </h3>
                <p className="text-[#f0f0f0] mt-2">{s.sub}</p>
              </div>

              {/* Contenido principal */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 space-y-5">
                  <div
                    className="sb-quote"
                    role="note"
                    aria-label="mensaje clave"
                  >
                    <div className="sb-quote-mark">“</div>
                    <p className="sb-quote-text">{s.jtb}</p>
                  </div>
                  <div>
                    <h4 className="sb-block-title">Qué hacemos</h4>
                    <ol className="space-y-3">
                      {s.hacemos.map((item, i) => (
                        <li key={i} className="sb-step">
                          <span className="sb-step-num" aria-hidden="true">
                            {i + 1}
                          </span>
                          <span className="sb-step-text">{item}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <h4 className="sb-block-title flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    Servicios rápidos
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {s.quickWins.map((q, i) => (
                      <div key={i} className="sb-win">
                        <div className="sb-win-head">
                          <span className="sb-dot" />
                          Quick win
                        </div>
                        <p className="sb-win-text">{q}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Proyectos */}
              <div className="mt-6">
                <h4 className="sb-block-title">Proyectos completos</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  {s.proyectos.map((p, i) => (
                    <div key={i} className="sb-project">
                      <div className="sb-project-rail" />
                      <div className="sb-project-body">
                        <div className="sb-project-head">
                          <span className="sb-dot" />
                          Proyecto
                        </div>
                        <p className="sb-project-text">{p}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* KPIs + CTA */}
              <div className="mt-6 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                <div className="flex flex-wrap gap-2">
                  {s.resultados.map((r, i) => (
                    <span key={i} className="sb-kpi">
                      <span className="sb-dot" />
                      {r}
                    </span>
                  ))}
                </div>

                <button
                  ref={(el) => (btnRefs.current[idx] = el)}
                  className="sb-cta ml-0 lg:ml-auto flex items-center gap-2 px-5 py-3 font-extrabold rounded-xl shadow transition-all duration-200"
                  style={{
                    whiteSpace: "nowrap",
                    alignItems: "center",
                    fontSize: "15px",
                    background: "#fff",
                    color: "#181414",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                    transform: "translateZ(0)",
                    touchAction: "manipulation",
                  }}
                  onMouseEnter={() => handleBtnHover(idx)}
                  onMouseLeave={() => handleBtnLeave(idx)}
                  onMouseDown={() => handleBtnDown(idx)}
                  onMouseUp={() => handleBtnUp(idx)}
                  type="button"
                  aria-label={s.cta}
                >
                  <span style={{ flex: "none" }}>{s.cta}</span>
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Espaciador extra para que el footer no “se pegue” tras el pin del stack */}
        <div
          ref={footerSpacerRef}
          className="w-full"
          aria-hidden="true"
          style={{
            height: "16vh",
            paddingBottom: "calc(env(safe-area-inset-bottom) + 40px)",
          }}
        />
      </div>

      <style>{`
        .sb-badge{display:inline-flex;align-items:center;gap:8px;background:#fff;color:#181414;border-radius:999px;padding:6px 12px;font-size:12px;font-weight:700;letter-spacing:.02em;text-transform:uppercase;}
        .sb-dot{width:8px;height:8px;border-radius:999px;background:#de0015;display:inline-block;box-shadow:0 0 10px rgba(255,49,49,0.65);flex-shrink:0;}

        .sb-quote{position:relative;display:flex;align-items:flex-start;gap:12px;background:#211c1c;border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:14px 16px;box-shadow:0 6px 18px rgba(0,0,0,.18);}
        .sb-quote-mark{font-weight:900;font-size:24px;line-height:1;color:#ffeded;}
        .sb-quote-text{color:#f1f1f1;font-size:16px;line-height:1.5;}
        .sb-block-title{font-weight:800;font-size:1.05rem;margin-bottom:.5rem;}

        .sb-step{display:flex;align-items:flex-start;gap:10px;background:linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.01));border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:10px 12px;}
        .sb-step-num{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:999px;background:#de0015;color:#fff;font-weight:900;font-size:12px;box-shadow:0 4px 10px rgba(255,49,49,.25);}
        .sb-step-text{color:#eaeaea;}

        .sb-win,
        .sb-project,
        .sb-kpi,.sb-quote,.sb-step, .sb-badge {
          transition:transform .2s ease, box-shadow .2s ease;
        }
        .sb-win{border:1px solid rgba(255,255,255,.1);background:#1f1a1a;border-radius:16px;padding:12px;box-shadow:0 6px 18px rgba(0,0,0,.18);}
        .sb-win:hover,
        .sb-project:hover,
        .sb-kpi:hover, .sb-quote:hover, .sb-step:hover, .sb-badge:hover {
          transform:translateY(-2px);
          box-shadow:0 10px 26px rgba(0,0,0,.28);
        }
        .sb-win-head{display:flex;align-items:center;gap:8px;text-transform:uppercase;font-weight:700;font-size:12px;color:#fff;}
        .sb-win-text{margin-top:6px;color:#dcdcdc;font-size:14px;line-height:1.4;}

        .sb-project{display:flex;border:1px solid rgba(255,255,255,.1);background:#1c1818;border-radius:16px;overflow:hidden;}
        .sb-project-rail{width:6px;background:linear-gradient(180deg,#de0015,#de0100);}
        .sb-project-body{padding:12px;}
        .sb-project-head{display:flex;align-items:center;gap:8px;text-transform:uppercase;font-weight:700;font-size:12px;}
        .sb-project-text{margin-top:6px;color:#dcdcdc;font-size:14px;line-height:1.45;}

        .sb-kpi{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.06);border-radius:999px;padding:8px 12px;font-size:14px;}

        .sector-block{transition: box-shadow .25s ease, transform .25s ease, border-color .25s ease;}
        .sector-block:hover{transform: translateY(-2px);box-shadow:0 10px 28px rgba(0,0,0,.28);border-color:rgba(255,255,255,.14);}

        /* Preferencias de usuario: reducir movimiento */
        @media (prefers-reduced-motion: reduce) {
          .sector-block,
          .sb-win, .sb-project, .sb-kpi, .sb-quote, .sb-step, .sb-badge {
            transition: none !important;
          }
        }

        /* Micro-ajustes sólo móvil para respiración visual */
        @media (max-width: 1023px) {
          .sb-quote-text { font-size: 15px; }
          .sb-block-title { font-size: 1.02rem; }
        }
      `}</style>
    </section>
  );
};

export default Sectores;
