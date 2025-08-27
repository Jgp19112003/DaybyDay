// /components/Sectores.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { scrambleTextAnimation } from "../animation";

gsap.registerPlugin(ScrollTrigger);

// ====================== CONFIG ======================
const FINAL_TITLE = "Soluciones por nicho, listas para acelerar.";
const DESKTOP_CARD_BG = "rgba(27,23,23,0.80)";
const MOBILE_CARD_BG = "rgba(27,23,23,0.95)";
const TITLE_SCRAMBLE_MS_DESKTOP = 1600;
const TITLE_SCRAMBLE_MS_MOBILE = 1200;

// Opacidad inicial de las cartas (desktop y móvil)
const INITIAL_CARD_OPACITY = 0.35;

// ====================== HOOKS ======================
const useMedia = (query, initial = false) => {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return initial;
    return window.matchMedia(query).matches;
  });
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    if (mql.addEventListener) mql.addEventListener("change", onChange);
    else mql.addListener(onChange);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
      else mql.removeListener(onChange);
    };
  }, [query]);
  return matches;
};

const useData = () =>
  useMemo(
    () => [
      {
        key: "consultorias",
        badge: "Consultorías de negocio / estrategia",
        h2: "Convierte cada propuesta en cliente sin sumar horas de trabajo",
        jtb: "“Necesito que mis leads se conviertan más rápido sin que mi equipo esté colapsado.”",
        hacemos: [
          "Entendemos, Organizamos, Personalizamos y Automatizamos tu captación y seguimiento.",
          "Conectamos tus canales (E-mail, RRSS, Wpp..) y CRM en un único flujo.",
          "Automatizamos en trato con el cliente a lo largo de tu funnel de ventas.",
        ],
        quickWins: [
          "Secuencia automatizada de emails para nuevos prospectos.",
          "Chatbot en web para filtrar y agendar citas.",
          "Integración LinkedIn Ads → CRM.",
        ],
        proyectos: [
          "Sistema full-funnel de captación y cierre de prospectos con cultivo de clientes potenciales y reporting automatizado.",
          "Panel de métricas en tiempo real por propuesta y equipo.",
        ],
        resultados: [
          "+30% leads calificados en 90 días.",
          "-40% tiempo de gestión comercial.",
          "+25% tasa de conversión.",
        ],
        cta: "Quiero mi diagnóstico gratuito",
      },
      {
        key: "formativos",
        badge: "Centros formativos / cursos online high ticket",
        h2: "Llenamos tus plazas sin sobrecargar a tu equipo de admisiones",
        jtb: "“Necesito llenar las plazas de mi máster sin duplicar presupuesto ni saturar al equipo.”",
        hacemos: [
          "Unificamos tu captación de leads y seguimiento en un sistema automatizado.",
          "Mensajes y recordatorios personalizados para cada alumno potencial.",
          "Mejora tu ratio de matrícula con menos llamadas perdidas.",
        ],
        quickWins: [
          "Automatización post-registro con email + WhatsApp.",
          "Segmentación automática de leads por interés y localización.",
          "Recordatorios SMS para asistir a sesiones o llamadas.",
        ],
        proyectos: [
          "Funnel de captación desde Meta/Google Ads hasta inscripción con seguimiento multicanal.",
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
        jtb: "“Necesito un funnel que escale sin que se rompa mi flujo de marketing y ventas.”",
        hacemos: [
          "Entendemos tu start-up y diseñamos tu funnel completo desde captación a cierre.",
          "Automatizamos el cultivo de leads con IA y datos en tiempo real.",
          "Visibilidad total de métricas y oportunidades.",
        ],
        quickWins: [
          "Integración formularios web → CRM con alertas instantáneas.",
          "Secuencia automatizada para leads de Meta/Google/LinkedIn Ads y cold E-mail/SMS/Wpp.",
          "Dashboard unificado de métricas MKT + ventas.",
        ],
        proyectos: [
          "Sistema de scoring y routing de leads with IA.",
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
        jtb: "“Necesito vender más sin dejar atrás a mi equipo actual ni perder clientes.”",
        hacemos: [
          "Digitalizamos tu proceso comercial manteniendo tus herramientas de siempre.",
          "Nuevos canales de venta online con automatización integrada.",
          "Apertura de nueva linea de facturación B2C E-Commerce automatizada y optimizada a conversión",
        ],
        quickWins: [
          "Ecommerce Shopify con integración de stock.",
          "Automatización de captación de influencers y colaboraciones.",
          "Flujos de ventas cruzadas por email.",
        ],
        proyectos: [
          "Estrategia digital B2B + B2C con captación de clientes automatizada.",
          "Apertura de canales como TikTok Shop con gestión de envíos automatizados.",
        ],
        resultados: [
          "Nuevas fuentes de ingresos en 60 días.",
          "+20% ventas cruzadas.",
          "Procesos más ágiles para tu equipo.",
        ],
        cta: "Quiero modernizar mis ventas",
      },
    ],
    []
  );

// ====================== HOVER HANDLERS (CTA) ======================
const setupBtnHover = (el) => {
  if (!el) return;
  el.onmouseenter = () =>
    gsap.to(el, {
      scale: 1.07,
      boxShadow: "0 4px 24px rgba(222,0,21,0.18)",
      background: "#de0015",
      color: "#fff",
      duration: 0.25,
      force3D: true,
    });
  el.onmouseleave = () =>
    gsap.to(el, {
      scale: 1,
      boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
      background: "#fff",
      color: "#181414",
      duration: 0.25,
      force3D: true,
    });
  el.onmousedown = () => gsap.to(el, { scale: 0.96, duration: 0.12 });
  el.onmouseup = () => gsap.to(el, { scale: 1.07, duration: 0.12 });
};

// ====================== DESKTOP ======================
const DesktopSectores = ({ onAgendarClick }) => {
  const data = useData();
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const cardRefs = useRef([]);
  const btnRefs = useRef([]);

  // Título fijo + sub (sin fade en scroll)
  useEffect(() => {
    if (titleRef.current) titleRef.current.textContent = "";
    scrambleTextAnimation(titleRef.current, FINAL_TITLE, {
      duration: TITLE_SCRAMBLE_MS_DESKTOP,
      delay: 0,
    });
    gsap.fromTo(
      subRef.current,
      { autoAlpha: 0, y: 14 },
      { autoAlpha: 1, y: 0, duration: 0.5, delay: 0.15 }
    );
  }, []);

  // Aparición con parallax (scrub) + quick wins + hover CTA - MEJORADO
  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);

    // Limpiar ScrollTriggers existentes
    cards.forEach((card) => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === card) st.kill();
      });
    });

    cards.forEach((card, index) => {
      if (!card) return;

      // Establecer estado inicial de la tarjeta
      gsap.set(card, {
        y: 50,
        autoAlpha: INITIAL_CARD_OPACITY,
        scale: 0.98,
        force3D: true,
      });

      // Establecer estado inicial de quick wins
      const wins = card.querySelectorAll(".sb-win");
      if (wins.length) {
        gsap.set(wins, {
          y: 20,
          autoAlpha: 0,
          force3D: true,
        });
      }

      // Establecer estado inicial de proyectos
      const projects = card.querySelectorAll(".sb-project");
      if (projects.length) {
        gsap.set(projects, {
          x: 20,
          autoAlpha: 0,
          force3D: true,
        });
      }

      // Establecer estado inicial de KPIs
      const kpis = card.querySelectorAll(".sb-kpi");
      if (kpis.length) {
        gsap.set(kpis, {
          scale: 0.9,
          autoAlpha: 0,
          force3D: true,
        });
      }

      // Crear timeline principal para la tarjeta
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "bottom 30%",
          scrub: 1,
          fastScrollEnd: true,
          preventOverlaps: true,
          refreshPriority: -1,
          onEnter: () => {
            // Micro-animación de entrada sin scrub
            gsap.to(card, {
              scale: 1.01,
              duration: 0.3,
              ease: "power2.out",
              yoyo: true,
              repeat: 1,
              overwrite: "auto",
            });
          },
          onRefresh: () => {
            // Recalcular posición inicial al hacer refresh
            if (card.getBoundingClientRect().top > window.innerHeight) {
              gsap.set(card, {
                y: 50,
                autoAlpha: INITIAL_CARD_OPACITY,
                scale: 0.98,
              });
            }
          },
        },
      });

      // Animación principal de la tarjeta con scrub
      mainTl.to(card, {
        y: -15,
        autoAlpha: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      });

      // Timeline separado para elementos internos (sin scrub)
      const elementsTl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 60%",
          scrub: false, // Sin scrub para animación más directa
          fastScrollEnd: true,
          refreshPriority: -1,
        },
      });

      // Quick wins
      if (wins.length) {
        elementsTl.to(
          wins,
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.2)",
            force3D: true,
          },
          0.1
        );
      }

      // Proyectos
      if (projects.length) {
        elementsTl.to(
          projects,
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
            force3D: true,
          },
          0.2
        );
      }

      // KPIs
      if (kpis.length) {
        elementsTl.to(
          kpis,
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: "back.out(1.4)",
            force3D: true,
          },
          0.3
        );
      }

      // Guardar referencias para limpieza
      card.__mainScrollTrigger = mainTl.scrollTrigger;
      card.__elementsScrollTrigger = elementsTl.scrollTrigger;
    });

    // Hover botones CTA
    btnRefs.current.forEach(setupBtnHover);

    return () => {
      cards.forEach((card) => {
        if (card.__mainScrollTrigger) card.__mainScrollTrigger.kill();
        if (card.__elementsScrollTrigger) card.__elementsScrollTrigger.kill();
      });
    };
  }, [data]);

  const leftData = data.slice(0, 2);
  const rightData = data.slice(2, 4);

  const Card = ({ s, idx }) => (
    <article
      ref={(el) => (cardRefs.current[idx] = el)}
      className="sector-card relative rounded-3xl border border-white/10 p-6 lg:p-8 shadow-[0_6px_18px_rgba(0,0,0,0.18)] bg-card backdrop-blur-md"
      style={{
        backfaceVisibility: "hidden",
        transform: "translateZ(0)",
        willChange: "transform, opacity",
      }}
    >
      <div className="flex items-center gap-3">
        <span className="sb-badge">
          <span className="sb-dot" />
          {s.badge}
        </span>
      </div>

      <div className="mt-3">
        <h3 className="text-[2rem] lg:text-[3rem] font-black leading-[1.1]">
          {s.h2}
        </h3>
        <p className="text-[#e3e3e3] mt-2">{s.sub}</p>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 space-y-5">
          <div className="sb-quote">
            <div className="sb-quote-mark">“</div>
            <p className="sb-quote-text">{s.jtb}</p>
          </div>
          <div>
            <h4 className="sb-block-title">Qué hacemos</h4>
            <ol className="space-y-3">
              {s.hacemos.map((item, i) => (
                <li key={i} className="sb-step">
                  <span className="sb-step-num">{i + 1}</span>
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
            fontSize: "15px",
            background: "#fff",
            color: "#181414",
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
          }}
          type="button"
          onClick={onAgendarClick}
        >
          <span>{s.cta}</span>
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </article>
  );

  return (
    <section id="sectores" className="w-full bg-[#181414] text-white">
      <div className="max-w-[1500px] mx-auto px-6 pt-6 pb-8">
        <header>
          <h2
            ref={titleRef}
            className="text-[2.2rem] lg:text-[3.2rem] font-black leading-[1.05]"
            style={{
              background:
                "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.8) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          />
          <p ref={subRef} className="text-[#e5e5e5] mt-3 max-w-[820px]">
            Soluciones a problemas claros, automatizaciones que se adaptan a tu
            forma de trabajar.
          </p>
        </header>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            {leftData.map((s, i) => (
              <Card key={`L-${s.key}`} s={s} idx={i} />
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {rightData.map((s, i) => (
              <Card key={`R-${s.key}`} s={s} idx={i + 2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ====================== MÓVIL (CARRUSEL CON FLECHAS) ======================
const MobileSectores = ({ onAgendarClick }) => {
  const data = useData();
  const titleRef = useRef(null);
  const subRef = useRef(null);

  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const btnRefs = useRef([]);

  // Touch handling refs and state
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);
  const carouselRef = useRef(null);
  const animatedCards = useRef(new Set()); // Track which cards have been animated
  const cardAnimationTimeouts = useRef(new Map()); // Para controlar timeouts

  // Header: scramble + sub (sin fade en scroll)
  useEffect(() => {
    if (titleRef.current) titleRef.current.textContent = "";
    scrambleTextAnimation(titleRef.current, FINAL_TITLE, {
      duration: TITLE_SCRAMBLE_MS_MOBILE,
      delay: 0,
    });
    gsap.fromTo(
      subRef.current,
      { autoAlpha: 0, y: 12 },
      { autoAlpha: 1, y: 0, duration: 0.5, delay: 0.15 }
    );
  }, []);

  // Inicializar todas las tarjetas como ocultas
  useEffect(() => {
    cardRefs.current.forEach((card, idx) => {
      if (!card) return;

      // Estado inicial: todas las tarjetas ocultas excepto la primera
      gsap.set(card, {
        y: idx === 0 ? 0 : 30,
        autoAlpha: idx === 0 ? 1 : INITIAL_CARD_OPACITY,
        scale: idx === 0 ? 1 : 0.98,
        force3D: true,
      });

      // Estado inicial de elementos internos
      const wins = card.querySelectorAll(".sb-win");
      const projects = card.querySelectorAll(".sb-project");
      const kpis = card.querySelectorAll(".sb-kpi");

      if (idx === 0) {
        // Primera tarjeta: elementos visibles
        gsap.set(wins, { y: 0, autoAlpha: 1, force3D: true });
        gsap.set(projects, { x: 0, autoAlpha: 1, force3D: true });
        gsap.set(kpis, { scale: 1, autoAlpha: 1, force3D: true });
        animatedCards.current.add(0);
      } else {
        // Resto: elementos ocultos
        gsap.set(wins, { y: 20, autoAlpha: 0, force3D: true });
        gsap.set(projects, { x: 20, autoAlpha: 0, force3D: true });
        gsap.set(kpis, { scale: 0.9, autoAlpha: 0, force3D: true });
      }
    });
  }, []);

  // Animación del slide activo - CORREGIDA
  const animateActiveSlide = (idx) => {
    const card = cardRefs.current[idx];
    if (!card) return;

    // Limpiar timeout anterior si existe
    if (cardAnimationTimeouts.current.has(idx)) {
      clearTimeout(cardAnimationTimeouts.current.get(idx));
    }

    // Si ya se animó esta tarjeta, no repetir animación completa
    if (animatedCards.current.has(idx)) {
      // Solo un micro-feedback de cambio
      gsap.to(card, {
        scale: 1.01,
        duration: 0.2,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      });
      return;
    }

    // Marcar como animada
    animatedCards.current.add(idx);

    // Animación principal de la tarjeta
    gsap.fromTo(
      card,
      { y: 30, autoAlpha: INITIAL_CARD_OPACITY, scale: 0.98 },
      {
        y: 0,
        autoAlpha: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
        force3D: true,
      }
    );

    // Timeline para elementos internos
    const elementsTl = gsap.timeline({ delay: 0.1 });

    const wins = card.querySelectorAll(".sb-win");
    if (wins.length) {
      elementsTl.fromTo(
        wins,
        { y: 20, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.35,
          stagger: 0.08,
          ease: "back.out(1.2)",
          force3D: true,
        },
        0
      );
    }

    const projects = card.querySelectorAll(".sb-project");
    if (projects.length) {
      elementsTl.fromTo(
        projects,
        { x: 20, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.3,
          stagger: 0.06,
          ease: "power2.out",
          force3D: true,
        },
        0.1
      );
    }

    const kpis = card.querySelectorAll(".sb-kpi");
    if (kpis.length) {
      elementsTl.fromTo(
        kpis,
        { scale: 0.9, autoAlpha: 0 },
        {
          scale: 1,
          autoAlpha: 1,
          duration: 0.25,
          stagger: 0.04,
          ease: "back.out(1.4)",
          force3D: true,
        },
        0.15
      );
    }
  };

  // mover carrusel + animar slide activo + hover CTA - OPTIMIZADO
  useEffect(() => {
    if (!trackRef.current) return;

    // Solo animar si no estamos arrastrando
    if (!isDragging.current) {
      const pct = -activeIdx * (100 / data.length);

      // Aplicar transformación
      gsap.set(trackRef.current, {
        x: `${pct}%`,
        force3D: true,
      });

      // Animar slide activo con un pequeño delay
      const animationTimeout = setTimeout(() => {
        animateActiveSlide(activeIdx);
      }, 100);

      cardAnimationTimeouts.current.set(activeIdx, animationTimeout);
    }

    btnRefs.current.forEach(setupBtnHover);

    return () => {
      // Limpiar timeouts
      cardAnimationTimeouts.current.forEach((timeout) => clearTimeout(timeout));
      cardAnimationTimeouts.current.clear();
    };
  }, [activeIdx, data.length]);

  // ajustar transición en resize
  useEffect(() => {
    const onResize = () => {
      if (!trackRef.current) return;
      trackRef.current.style.transition = "none";
      const pct = -activeIdx * (100 / data.length);
      trackRef.current.style.transform = `translate3d(${pct}%,0,0)`;
      requestAnimationFrame(
        () => (trackRef.current.style.transition = "transform 320ms ease-out")
      );
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeIdx, data.length]);

  // Touch handlers for swipe functionality - MEJORADOS
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
    isDragging.current = true;

    // Parar animaciones del track durante el drag
    if (trackRef.current) {
      gsap.killTweensOf(trackRef.current);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current || !trackRef.current) return;

    touchEndX.current = e.touches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    const currentTransform = -activeIdx * (100 / data.length);
    const dragPercentage = (diff / window.innerWidth) * 25; // Sensibilidad ajustada

    const newTransform = Math.max(
      Math.min(currentTransform - dragPercentage, 3), // Overscroll reducido
      -(data.length - 1) * (100 / data.length) - 3
    );

    gsap.set(trackRef.current, {
      x: `${newTransform}%`,
      force3D: true,
    });
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;

    const diff = touchStartX.current - touchEndX.current;
    const threshold = 60; // Threshold ligeramente aumentado
    let newIdx = activeIdx;

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && activeIdx < data.length - 1) {
        newIdx = activeIdx + 1;
      } else if (diff < 0 && activeIdx > 0) {
        newIdx = activeIdx - 1;
      }
    }

    isDragging.current = false;

    // Retornar a la posición correcta
    const pct = -newIdx * (100 / data.length);
    gsap.to(trackRef.current, {
      x: `${pct}%`,
      duration: 0.35,
      ease: "power2.out",
      force3D: true,
      onComplete: () => {
        // Solo cambiar estado si el índice cambió
        if (newIdx !== activeIdx) {
          setActiveIdx(newIdx);
        } else {
          // Si no cambió, animar la tarjeta actual
          setTimeout(() => animateActiveSlide(activeIdx), 50);
        }
      },
    });

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Cleanup en desmontaje
  useEffect(() => {
    return () => {
      cardAnimationTimeouts.current.forEach((timeout) => clearTimeout(timeout));
      cardAnimationTimeouts.current.clear();
    };
  }, []);

  const Card = ({ s, idx }) => (
    <article
      ref={(el) => (cardRefs.current[idx] = el)}
      className="sector-card relative rounded-3xl border border-white/10 px-5 py-6 shadow-[0_6px_18px_rgba(0,0,0,0.18)] bg-card-mobile"
      style={{
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform, opacity",
      }}
    >
      <div className="flex items-center gap-3">
        <span className="sb-badge">
          <span className="sb-dot" />
          {s.badge}
        </span>
      </div>

      <div className="mt-3">
        <h3 className="text-[1.8rem] font-black leading-[1.1]">{s.h2}</h3>
        <p className="text-[#e3e3e3] mt-2">{s.sub}</p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6">
        <div className="space-y-5">
          <div className="sb-quote">
            <div className="sb-quote-mark">“</div>
            <p className="sb-quote-text">{s.jtb}</p>
          </div>
          <div>
            <h4 className="sb-block-title">Qué hacemos</h4>
            <ol className="space-y-3">
              {s.hacemos.map((item, i) => (
                <li key={i} className="sb-step">
                  <span className="sb-step-num">{i + 1}</span>
                  <span className="sb-step-text">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div>
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

      <div className="mt-6 flex flex-col gap-4">
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
          className="sb-cta flex items-center gap-2 px-5 py-3 font-extrabold rounded-xl shadow transition-all duration-200"
          style={{
            whiteSpace: "nowrap",
            fontSize: "15px",
            background: "#fff",
            color: "#181414",
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
          }}
          type="button"
          onClick={onAgendarClick}
        >
          <span>{s.cta}</span>
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </article>
  );

  return (
    <section id="sectores" className="w-full bg-[#181414] text-white">
      <div className="max-w-[1500px] mx-auto px-4 pt-6 pb-8">
        <header>
          <h2
            ref={titleRef}
            className="text-[2rem] font-black leading-[1.05]"
            style={{
              background:
                "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.8) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          />
          <p ref={subRef} className="text-[#e5e5e5] mt-3 max-w-[820px]">
            Soluciones a problemas claros, automatizaciones que se adaptan a tu
            forma de trabajar.
          </p>
        </header>

        {/* Carrusel */}
        <div className="mt-6 relative">
          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mb-4">
            {data.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`pagination-dot ${
                  idx === activeIdx ? "active" : ""
                }`}
                aria-label={`Ir a slide ${idx + 1}`}
              />
            ))}
          </div>

          <div
            ref={carouselRef}
            className="overflow-hidden rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
            style={{ touchAction: "pan-y" }}
          >
            <div
              ref={trackRef}
              style={{
                display: "flex",
                alignItems: "stretch",
                gap: 0,
                width: `${data.length * 100}%`,
                transform: `translate3d(${
                  -activeIdx * (100 / data.length)
                }%,0,0)`,
                transition: "transform 320ms ease-out",
                willChange: "transform",
              }}
            >
              {data.map((s, idx) => (
                <div
                  key={s.key}
                  style={{
                    flex: `0 0 ${100 / data.length}%`,
                    maxWidth: `${100 / data.length}%`,
                    padding: "2px",
                  }}
                >
                  <Card s={s} idx={idx} />
                </div>
              ))}
            </div>
          </div>

          {/* Flechas */}
          <button
            type="button"
            onClick={() => setActiveIdx((i) => Math.max(0, i - 1))}
            aria-label="Anterior"
            disabled={activeIdx === 0}
            className="arrow-btn left"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() =>
              setActiveIdx((i) => Math.min(data.length - 1, i + 1))
            }
            aria-label="Siguiente"
            disabled={activeIdx === data.length - 1}
            className="arrow-btn right"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

// ====================== WRAPPER ======================
const Sectores = ({ onAgendarClick }) => {
  const isDesktop = useMedia("(min-width: 1024px)", true);

  useEffect(() => {
    // Variables CSS para fondos blur
    const r = document.documentElement;
    r.style.setProperty("--card-bg-d", DESKTOP_CARD_BG);
    r.style.setProperty("--card-bg-m", MOBILE_CARD_BG);
  }, []);

  return isDesktop ? (
    <>
      <DesktopSectores onAgendarClick={onAgendarClick} />
      <style>{commonStyles}</style>
      <style>{mobileArrowStyles}</style>
    </>
  ) : (
    <>
      <MobileSectores onAgendarClick={onAgendarClick} />
      <style>{commonStyles}</style>
      <style>{mobileArrowStyles}</style>
    </>
  );
};

export default Sectores;

// ====================== ESTILOS ======================
const commonStyles = `
/* Fondos tarjeta */
.bg-card {
  background: var(--card-bg-d);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.bg-card-mobile {
  background: var(--card-bg-m);
}

/* Badges y elementos comunes */
.sb-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  color: #181414;
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
.sb-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #de0015;
  display: inline-block;
  box-shadow: 0 0 10px rgba(255, 49, 49, 0.65);
  flex-shrink: 0;
}
.sb-quote {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: #211c1c;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 14px 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
}
.sb-quote-mark {
  font-weight: 900;
  font-size: 24px;
  line-height: 1;
  color: #ffeded;
}
.sb-quote-text {
  color: #f1f1f1;
  font-size: 16px;
  line-height: 1.5;
}
.sb-block-title {
  font-weight: 800;
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
}
.sb-step {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 10px 12px;
}
.sb-step-num {
  padding: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  background: #de0015;
  color: #fff;
  font-weight: 900;
  font-size: 12px;
  box-shadow: 0 4px 10px rgba(255, 49, 49, 0.25);
}
.sb-step-text {
  color: #eaeaea;
}

/* Tarjetas pequeñas, proyectos, KPIs */
.sb-win,
.sb-project,
.sb-kpi,
.sb-quote,
.sb-step,
.sb-badge {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  will-change: transform;
}

/* ====== HOVER Interno SOLO Desktop (pointer fino y soporte hover) ====== */
@media (min-width: 1024px) and (hover: hover) and (pointer: fine) {
  .sb-win:hover,
  .sb-project:hover,
  .sb-kpi:hover,
  .sb-quote:hover,
  .sb-step:hover,
  .sb-badge:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.28);
  }
}

.sb-win {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #1f1a1a;
  border-radius: 16px;
  padding: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  min-height: 72px;
}
.sb-win-text {
  margin-top: 6px;
  color: #e8e8e8;
  font-size: 14px;
  line-height: 1.45;
  overflow-wrap: anywhere;
  white-space: pre-line;
}
.sb-win-head {
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  color: #fff;
}

.sb-project {
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #1c1818;
  border-radius: 16px;
  overflow: hidden;
}
.sb-project-rail {
  width: 6px;
  background: linear-gradient(180deg, #de0015, #de0100);
}
.sb-project-body {
  padding: 12px;
}
.sb-project-head {
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
}
.sb-project-text {
  margin-top: 6px;
  color: #dcdcdc;
  font-size: 14px;
  line-height: 1.45;
}

.sb-kpi {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 14px;
}

/* Tarjeta grande */
.sector-card {
  border-radius: 22px;
  transition: box-shadow 0.22s ease, border-color 0.22s ease, transform 0.22s ease;
}
.sector-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.28);
  border-color: rgba(255, 255, 255, 0.14);
}

/* Pagination dots */
.pagination-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  transition: all 0.25s ease;
  cursor: pointer;
}
.pagination-dot.active {
  background: #de0015;
  width: 24px;
  box-shadow: 0 0 10px rgba(222, 0, 21, 0.4);
}
.pagination-dot:hover:not(.active) {
  background: rgba(255, 255, 255, 0.5);
  transform: scale(1.1);
}
`;

// Flechas (móvil)
const mobileArrowStyles = `
.arrow-btn{
  margin: 0 4px;
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  width:28px;
  height:28px;
  display:grid;
  place-items:center;
  border-radius:999px;
  background:rgba(255,255,255,0.06);
  color:rgba(255,255,255,0.92);
  border:1px solid rgba(255,255,255,0.12);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  box-shadow:0 4px 12px rgba(0,0,0,0.25);
  transition:opacity .2s ease, transform .2s ease, background .2s ease;
  pointer-events:auto;
  z-index:20;
}
.arrow-btn.left{ left:-14px; }
.arrow-btn.right{ right:-14px; }
.arrow-btn:active{ transform:translateY(-50%) scale(0.94); }
.arrow-btn[disabled]{ opacity:.35; }
`;
