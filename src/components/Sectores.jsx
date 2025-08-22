// /components/Sectores.jsx
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { scrambleTextAnimation } from "../animation";

gsap.registerPlugin(ScrollTrigger);

// ====================== UTILIDADES COMUNES ======================
const FINAL_TITLE = "Soluciones por nicho, listas para acelerar";
const DESKTOP_CARD_BG = "rgba(27,23,23,0.80)";
const MOBILE_CARD_BG = "rgba(27,23,23,0.95)";

const useMedia = (query, initial = false) => {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return initial;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);

    if (mql.addEventListener) {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    } else {
      mql.addListener(onChange);
      return () => mql.removeListener(onChange);
    }
  }, [query]);

  return matches;
};

const getNAV = () =>
  (typeof document !== "undefined" &&
    (document.querySelector("#navbar, .site-nav, header")?.offsetHeight ||
      80)) ||
  80;

const useData = () =>
  useMemo(
    () => [
      {
        key: "consultorias",
        badge: "Consultorías de negocio / estrategia",
        h2: "Convierte cada propuesta en cliente sin sumar horas de trabajo",
        sub: "Flujos de trabajo con Automatización + IA para cerrar más ventas sin ampliar tu equipo.",
        jtb: "“Necesito que mis leads se conviertan más rápido sin que mi equipo esté colapsado.”",
        hacemos: [
          "Entendemos, Organizamos, Personalizamos y Automatizamos tu captación y seguimiento.",
          "Conectamos tus canales (E-mail, RRSS, Wpp..) y CRM en un único flujo.",
          "Automatizamos en trato con el cliente a lo largo de tu funnel de ventas.",
          "Cierra más clientes con menos esfuerzo operativo.",
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
        sub: "Automatizamos el seguimiento y la captación para maximizar matrículas.",
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
        sub: "Funnel, CRM y ventas conectados para crecer sin fricciones.",
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
        sub: "Automatización adaptada a tu equipo y a tu forma de vender.",
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

// ====================== DESKTOP (STACK CON GSAP) ======================
const DesktopSectores = ({ onAgendarClick }) => {
  const prefersReducedMotion = useMedia(
    "(prefers-reduced-motion: reduce)",
    false
  );
  const data = useData();

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);

  const stackRef = useRef(null);
  const cardsRef = useRef([]);
  const btnRefs = useRef([]);

  const footerSpacerRef = useRef(null);
  const stInstancesRef = useRef([]);

  // Intro header
  useEffect(() => {
    gsap.ticker.lagSmoothing(700, 24);
    ScrollTrigger.config({ ignoreMobileResize: true });

    gsap.set(sectionRef.current, { autoAlpha: 1 });
    gsap.set(headerRef.current, { autoAlpha: 1, force3D: true });
    if (titleRef.current) titleRef.current.textContent = "";
    gsap.set(subRef.current, { autoAlpha: 0, y: 14 });

    const tl = gsap
      .timeline({ paused: true, defaults: { ease: "power2.out" } })
      .fromTo(
        headerRef.current,
        { autoAlpha: 0, y: 28 },
        { autoAlpha: 1, y: 0, duration: 0.6 }
      )
      .add(() => {
        scrambleTextAnimation(titleRef.current, FINAL_TITLE, {
          duration: 1800,
          delay: 0,
        });
        gsap.to(subRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          delay: 0.15,
        });
      });

    const enterST = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => tl.play(0),
    });

    return () => {
      enterST?.kill();
      tl?.kill();
    };
  }, []);

  // Stack
  const buildStack = useCallback(() => {
    stInstancesRef.current.forEach((st) => st?.kill?.());
    stInstancesRef.current = [];
    if (prefersReducedMotion) return;

    const container = stackRef.current;
    const cards = cardsRef.current.filter(Boolean);
    if (!container || cards.length === 0) return;

    const scales = [0.92, 0.88, 0.84, 0.8, 0.76];
    const vh = window.innerHeight;
    const offsets = [0.06, 0.04, 0.02, 0.01, 0.0].map((v) => v * vh);

    gsap.set(container, {
      minHeight: "92vh",
      position: "relative",
      paddingTop: `calc(14vh + ${getNAV()}px)`,
      paddingBottom: `calc(16vh + env(safe-area-inset-bottom) + 24px)`,
      autoAlpha: 1,
      force3D: true,
      willChange: "transform, opacity",
    });

    cards.forEach((el, i) => {
      const scale = scales[i] ?? scales[scales.length - 1];
      const offset = offsets[i] ?? 0;
      gsap.set(el, {
        position: "absolute",
        left: "50%",
        xPercent: -50,
        top: 0,
        width: "100%",
        zIndex: cards.length - i,
        transformOrigin: "bottom center",
        scale,
        y: offset,
      });
    });

    const steps = cards.length;
    const navOffset = getNAV() + 56;
    const totalDist = () => window.innerHeight * steps * 1.15;

    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: container,
        start: () => `top top+=${navOffset}`,
        end: () => `+=${totalDist()}`,
        scrub: 0.9,
        pin: true,
        pinType: "fixed",
        anticipatePin: 1,
        fastScrollEnd: true,
        preventOverlaps: true,
        invalidateOnRefresh: true,
      },
    });

    cards.forEach((card, i) => {
      const moveY = -card.offsetHeight * 2.05;
      tl.to(card, { y: moveY, duration: 1.2 }, i * 0.75);
      if (cards[i + 1]) {
        tl.to(cards[i + 1], { scale: 1, duration: 0.9 }, i * 0.75 + 0.35);
      }
    });

    const fadeST = ScrollTrigger.create({
      trigger: container,
      start: () => `top top+=${navOffset}`,
      end: () => `+=${totalDist()}`,
      scrub: true,
      onUpdate: (self) => {
        const p = gsap.utils.clamp(0, 1, self.progress * 1.8);
        gsap.to(headerRef.current, {
          autoAlpha: 1 - p,
          overwrite: true,
          duration: 0.1,
        });
      },
      onLeave: () => gsap.set(headerRef.current, { autoAlpha: 0 }),
      onEnterBack: () =>
        gsap.to(headerRef.current, { autoAlpha: 1, duration: 0.2 }),
      invalidateOnRefresh: true,
    });

    stInstancesRef.current.push(tl.scrollTrigger, fadeST);
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [prefersReducedMotion]);

  useEffect(() => {
    buildStack();
    const setFooterSpacer = () => {
      if (!footerSpacerRef.current) return;
      const extra = 14 * (window.innerHeight / 100);
      footerSpacerRef.current.style.height = `${extra + getNAV()}px`;
    };
    setFooterSpacer();

    const onResize = () => {
      setFooterSpacer();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      stInstancesRef.current.forEach((st) => st?.kill?.());
      stInstancesRef.current = [];
      // More specific cleanup for ScrollTriggers in this section
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger && st.trigger.closest("#sectores")) {
          st.kill();
        }
      });
    };
  }, [buildStack]);

  const handleBtnHover = (idx) =>
    gsap.to(btnRefs.current[idx], {
      scale: 1.07,
      boxShadow: "0 4px 24px rgba(222,0,21,0.18)",
      background: "#de0015",
      color: "#fff",
      duration: 0.25,
      force3D: true,
    });
  const handleBtnLeave = (idx) =>
    gsap.to(btnRefs.current[idx], {
      scale: 1,
      boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
      background: "#fff",
      color: "#181414",
      duration: 0.25,
      force3D: true,
    });
  const handleBtnDown = (idx) =>
    gsap.to(btnRefs.current[idx], { scale: 0.96, duration: 0.12 });
  const handleBtnUp = (idx) =>
    gsap.to(btnRefs.current[idx], { scale: 1.07, duration: 0.12 });

  const Card = ({ s, idx }) => (
    <article
      key={s.key}
      ref={(el) => (cardsRef.current[idx] = el)}
      className="sector-block relative rounded-3xl border border-white/10 px-5 py-6 lg:p-8 shadow-[0_6px_18px_rgba(0,0,0,0.18)] overflow-hidden w-full"
      style={{
        background: DESKTOP_CARD_BG,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        willChange: "transform",
        transform: "translateZ(0)",
      }}
    >
      <div
        className="pointer-events-none absolute -z-10 inset-0"
        style={{
          opacity: 0.7,
          background:
            idx % 2 === 0
              ? "radial-gradient(40% 60% at 15% 20%, rgba(255,49,49,0.12), transparent 60%), radial-gradient(50% 80% at 90% 10%, rgba(255,255,255,0.06), transparent 60%)"
              : "radial-gradient(40% 60% at 80% 20%, rgba(255,49,49,0.12), transparent 60%), radial-gradient(50% 80% at 10% 10%, rgba(255,255,255,0.06), transparent 60%)",
          filter: "blur(20px)",
        }}
        aria-hidden="true"
      />
      <div className="flex items-center gap-3">
        <span className="sb-badge">
          <span className="sb-dot" />
          {s.badge}
        </span>
      </div>
      <div className="mt-3">
        <h3 className="text-[1.6rem] lg:text-[2.2rem] font-black leading-[1.1]">
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
          onMouseEnter={() => handleBtnHover(idx)}
          onMouseLeave={() => handleBtnLeave(idx)}
          onMouseDown={() => handleBtnDown(idx)}
          onMouseUp={() => handleBtnUp(idx)}
          type="button"
          onClick={onAgendarClick}
        >
          <span>Quiero saber más</span>
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
    <section
      ref={sectionRef}
      id="sectores"
      className="w-full bg-[#181414] text-white"
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <header ref={headerRef}>
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
            }}
          />
          <p ref={subRef} className="text-[#e5e5e5] mt-3 max-w-[820px]">
            Bloques claros, resultados medibles y automatizaciones que se
            adaptan a tu forma de trabajar.
          </p>
        </header>

        <div ref={stackRef} className="relative w-full max-w-[1000px] mx-auto">
          {data.map((s, idx) => (
            <Card key={s.key} s={s} idx={idx} />
          ))}
        </div>

        <div
          ref={footerSpacerRef}
          className="w-full"
          aria-hidden="true"
          style={{
            height: "18vh",
            paddingBottom: "calc(env(safe-area-inset-bottom) + 48px)",
          }}
        />
      </div>

      <style>{commonStyles}</style>
    </section>
  );
};

// ====================== MÓVIL (FLECHAS CAMUFLADAS, FUERA DE LA TARJETA) ======================
const MobileSectores = ({ onAgendarClick }) => {
  const data = useData();

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);

  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) titleRef.current.textContent = "";
    scrambleTextAnimation(titleRef.current, FINAL_TITLE, {
      duration: 1600,
      delay: 0,
    });
  }, []);

  // Remove unused functions and use setActiveIdx directly
  // const goPrev = () => setActiveIdx((i) => Math.max(0, i - 1));
  // const goNext = () => setActiveIdx((i) => Math.min(data.length - 1, i + 1));

  // Mantener slide correcta en rotación de pantalla
  useEffect(() => {
    const onResize = () => {
      if (!trackRef.current) return;
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translate3d(${
        -activeIdx * 100
      }%,0,0)`;
      requestAnimationFrame(
        () => (trackRef.current.style.transition = "transform 280ms ease-out")
      );
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [activeIdx]);

  const Card = ({ s, idx }) => (
    <article
      className="sector-block relative rounded-3xl border border-white/10 px-5 py-6 shadow-[0_6px_18px_rgba(0,0,0,0.18)] overflow-hidden w-full"
      style={{
        background: MOBILE_CARD_BG,
        willChange: "transform",
        transform: "translateZ(0)",
      }}
    >
      <div
        className="pointer-events-none absolute -z-10 inset-0"
        style={{
          opacity: 0.45,
          background:
            idx % 2 === 0
              ? "radial-gradient(40% 60% at 15% 20%, rgba(255,49,49,0.12), transparent 60%), radial-gradient(50% 80% at 90% 10%, rgba(255,255,255,0.06), transparent 60%)"
              : "radial-gradient(40% 60% at 80% 20%, rgba(255,49,49,0.12), transparent 60%), radial-gradient(50% 80% at 10% 10%, rgba(255,255,255,0.06), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="flex items-center gap-3">
        <span className="sb-badge">
          <span className="sb-dot" />
          {s.badge}
        </span>
      </div>
      <div className="mt-3">
        <h3 className="text-[1.6rem] font-black leading-[1.1]">{s.h2}</h3>
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

      <div className="mt-6">
        <h4 className="sb-block-title">Proyectos completos</h4>
        <div className="grid grid-cols-1 gap-3">
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
    <section
      ref={sectionRef}
      id="sectores"
      className="w-full bg-[#181414] text-white"
    >
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        {/* Cabecera */}
        <header ref={headerRef}>
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
            Bloques claros, resultados medibles y automatizaciones que se
            adaptan a tu forma de trabajar.
          </p>
        </header>

        {/* Contenedor exterior para flechas fuera del viewport de la tarjeta */}
        <div className="mt-6 relative">
          {/* Viewport y pista */}
          <div className="overflow-hidden rounded-2xl">
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
                transition: "transform 280ms ease-out",
                willChange: "transform",
              }}
            >
              {data.map((s, idx) => (
                <div
                  key={s.key}
                  style={{
                    flex: `0 0 ${100 / data.length}%`,
                    maxWidth: `${100 / data.length}%`,
                  }}
                >
                  <Card s={s} idx={idx} />
                </div>
              ))}
            </div>
          </div>

          {/* Flechas camufladas, fuera de la tarjeta */}
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

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {data.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                aria-label={`Ir a la tarjeta ${i + 1}`}
                className="w-2.5 h-2.5 rounded-full transition-opacity"
                style={{
                  opacity: activeIdx === i ? 1 : 0.35,
                  background: "#fff",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{commonStyles}</style>
      <style>{mobileArrowStyles}</style>
    </section>
  );
};

// ====================== WRAPPER: ELIJE UNO U OTRO ======================
const Sectores = ({ onAgendarClick }) => {
  const isDesktop = useMedia("(min-width: 1024px)", true);
  return isDesktop ? (
    <DesktopSectores onAgendarClick={onAgendarClick} />
  ) : (
    <MobileSectores onAgendarClick={onAgendarClick} />
  );
};

export default Sectores;

// ====================== ESTILOS COMUNES ======================
const commonStyles = `
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
  will-change: transform;
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
.sb-kpi{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.05);border-radius:999px;padding:8px 12px;font-size:14px;}
.sector-block{transition: box-shadow .25s ease, transform .25s ease, border-color .25s ease;}
.sector-block:hover{transform: translateY(-2px);box-shadow:0 10px 28px rgba(0,0,0,.28);border-color:rgba(255,255,255,.14);}
`;

// Estilos de flechas camufladas y fuera del contenido
const mobileArrowStyles = `
.arrow-btn{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  width:38px;height:38px;
  display:grid;place-items:center;
  border-radius:999px;
  background:rgba(255,255,255,0.06);
  color:rgba(255,255,255,0.92);
  border:1px solid rgba(255,255,255,0.12);
  backdrop-filter: blur(6px);
  box-shadow:0 6px 16px rgba(0,0,0,0.28);
  transition:opacity .2s ease, transform .2s ease, background .2s ease;
  pointer-events:auto;
  z-index:20;
}
.arrow-btn.left{ left:-18px; }
.arrow-btn.right{ right:-18px; }
.arrow-btn:active{ transform:translateY(-50%) scale(0.96); }
.arrow-btn[disabled]{ opacity:.35; }
`;
