// /components/Sectores.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { scrambleTextAnimation } from "../animation"; // efecto “scramble/typing”

const getNAV = () =>
  document.querySelector("#navbar, .site-nav, header")?.offsetHeight || 80;

const Sectores = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null); // Cambiado: solo un ref para el título
  const subRef = useRef(null);

  const stackRef = useRef(null);
  const cardsRef = useRef([]);
  const btnRefs = useRef([]);

  // control adaptativo
  const headerTlRef = useRef(null);
  const headerFinishedRef = useRef(false);
  const stackSetupRef = useRef(false);

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isDesktop = window.innerWidth >= 1024;
    const navOffset = getNAV() + (isDesktop ? 56 : 96); // antes tenías 10/90

    const cards = cardsRef.current.filter(Boolean);

    // Estados iniciales
    gsap.set(sectionRef.current, { autoAlpha: 1 });
    gsap.set(headerRef.current, { autoAlpha: 1 });
    if (titleRef.current) titleRef.current.textContent = ""; // solo uno
    gsap.set(subRef.current, { autoAlpha: 0, y: 14 });
    gsap.set(stackRef.current, { autoAlpha: 0, y: 24, scale: 0.98 });

    // ——— preparar stack (una sola vez) ———
    const setupStack = () => {
      if (stackSetupRef.current) return;
      stackSetupRef.current = true;

      const steps = cards.length;
      if (steps === 0) return;

      if (isDesktop) {
        gsap.set(stackRef.current, {
          minHeight: "92vh",
          position: "relative",
          // empuja el contenido por debajo del nav + aire extra
          paddingTop: `calc(14vh + ${getNAV()}px)`,
          paddingBottom: "14vh",
        });

        cards.forEach((el, i) => {
          const scale = [0.92, 0.88, 0.84, 0.8, 0.76][i] ?? 0.76;
          const translate = [6, 4, 2, 1, 0][i] ?? 0; // <-- positivo = más abajo
          gsap.set(el, {
            position: "absolute",
            left: "50%",
            xPercent: -50,
            top: 0,
            yPercent: 0,
            width: "100%",
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
            end: () => `+=${window.innerHeight * steps * 0.85}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
          defaults: { ease: "none" },
        });

        cards.forEach((card, i) => {
          const isLast = i === cards.length - 1;
          if (isLast) tl.to(card, { yPercent: -40, duration: 1 }, i + 0.25);
          else {
            tl.to(card, { yPercent: -160, duration: 1 }, i);
            tl.to(cards[i + 1], { scale: 1, duration: 1 }, i + 0.22);
          }
        });

        // Fading del header mientras el stack está activo + restauración al volver arriba
        const headerFadeST = ScrollTrigger.create({
          trigger: stackRef.current,
          start: () => `top top+=${navOffset}`,
          end: () => `+=${window.innerHeight * steps * 0.85}`,
          scrub: true,
          refreshPriority: 1,
          onUpdate: (self) => {
            const p = gsap.utils.clamp(0, 1, self.progress * 2);
            gsap.to(headerRef.current, { autoAlpha: 1 - p, duration: 0.1 });
          },
          onEnter: () => gsap.to(headerRef.current, { autoAlpha: 1 }),
          onLeave: () => {
            gsap.set(headerRef.current, { autoAlpha: 0 });
          },
          onEnterBack: () => {
            gsap.to(headerRef.current, { autoAlpha: 1, duration: 0.2 });
          },
          onLeaveBack: () => {
            gsap.set(headerRef.current, {
              autoAlpha: 1,
              clearProps: "opacity,visibility",
            });
          },
          invalidateOnRefresh: true,
        });

        // por si redimensionan
        ScrollTrigger.addEventListener("refreshInit", () => {
          headerFadeST.refresh();
        });
      } else {
        gsap.set(stackRef.current, {
          minHeight: "92vh",
          position: "relative",
          paddingTop: `calc(16vh + ${getNAV()}px)`,
          paddingBottom: "16vh",
        });

        cards.forEach((el, i) => {
          const scale = [0.9, 0.86, 0.82, 0.78, 0.75][i] ?? 0.75;
          const translate = [7, 4.5, 2.5, 1, 0][i] ?? 0;

          gsap.set(el, {
            position: "absolute",
            left: "50%",
            xPercent: -50,
            top: 0,
            yPercent: 0,
            width: "100%",
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
          if (isLast) tl.to(card, { yPercent: -35, duration: 1 }, i + 0.25);
          else {
            tl.to(card, { yPercent: -155, duration: 1 }, i);
            tl.to(cards[i + 1], { scale: 1, duration: 1 }, i + 0.22);
          }
        });

        ScrollTrigger.create({
          trigger: stackRef.current,
          start: () => `top top+=${navOffset}`,
          end: () => `+=${window.innerHeight * steps * 0.55}`,
          scrub: true,
          onUpdate: (self) => {
            const p = gsap.utils.clamp(0, 1, self.progress * 2);
            gsap.to(headerRef.current, { autoAlpha: 1 - p, duration: 0.1 });
          },
          onLeave: () => {
            gsap.set(headerRef.current, { autoAlpha: 0 });
          },
          onEnterBack: () => {
            gsap.to(headerRef.current, { autoAlpha: 1, duration: 0.2 });
          },
          onLeaveBack: () => {
            gsap.set(headerRef.current, {
              autoAlpha: 1,
              clearProps: "opacity,visibility",
            });
          },
          invalidateOnRefresh: true,
        });
      }
    };

    // ——— timeline del header (solo un texto) ———
    const FINAL_TITLE = "Soluciones por nicho, listas para acelerar";

    const headerTl = gsap
      .timeline({
        paused: true,
        defaults: { ease: "power3.out" },
      })
      .fromTo(
        headerRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.6 }
      )
      .add(() =>
        scrambleTextAnimation(titleRef.current, FINAL_TITLE, {
          duration: 1800,
          delay: 0,
        })
      )
      .to({}, { duration: 1.7 }) // espera virtual del scramble
      .to(subRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, "+=0.05")
      .to(
        stackRef.current,
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.7 },
        "+=0.05"
      )
      .add(() => {
        headerFinishedRef.current = true;
        setupStack();
      });

    headerTlRef.current = headerTl;

    // Lanzar header al entrar
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => headerTl.play(0),
    });

    // Adaptativo a velocidad de scroll
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const v = Math.abs(self.getVelocity());
        const scale = gsap.utils.clamp(1, 4, v / 700);
        if (headerTlRef.current && headerTlRef.current.isActive()) {
          headerTlRef.current.timeScale(scale);
        }
        if (v > 2000 && headerTlRef.current && !headerFinishedRef.current) {
          // fast-forward limpio
          titleRef.current.textContent = FINAL_TITLE;
          gsap.set(subRef.current, { autoAlpha: 1, y: 0 });
          gsap.set(stackRef.current, { autoAlpha: 1, y: 0, scale: 1 });
          headerTlRef.current.progress(1, false);
          headerFinishedRef.current = true;
          setupStack();
        }
      },
    });

    // Pulso de dots
    gsap.utils.toArray(".sb-dot").forEach((dot, i) => {
      gsap.set(dot, { transformOrigin: "center center" });
      gsap.to(dot, {
        scale: 1.25,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: (i % 5) * 0.12,
      });
      gsap.to(dot, {
        boxShadow: "0 0 16px rgba(255,49,49,0.9)",
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "sine.inOut",
        delay: (i % 5) * 0.12,
      });
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  // CTA hover/click
  const handleBtnHover = (idx) => {
    gsap.to(btnRefs.current[idx], {
      scale: 1.07,
      boxShadow: "0 4px 24px rgba(222,0,21,0.18)",
      background: "#de0015",
      color: "#fff",
      duration: 0.25,
    });
    gsap.to(btnRefs.current[idx].querySelector("svg"), {
      x: 6,
      duration: 0.25,
      ease: "power2.out",
    });
  };
  const handleBtnLeave = (idx) => {
    gsap.to(btnRefs.current[idx], {
      scale: 1,
      boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
      background: "#fff",
      color: "#181414",
      duration: 0.25,
    });
    gsap.to(btnRefs.current[idx].querySelector("svg"), {
      x: 0,
      duration: 0.25,
      ease: "power2.in",
    });
  };
  const handleBtnDown = (idx) =>
    gsap.to(btnRefs.current[idx], { scale: 0.96, duration: 0.12 });
  const handleBtnUp = (idx) =>
    gsap.to(btnRefs.current[idx], { scale: 1.07, duration: 0.12 });

  return (
    <section
      ref={sectionRef}
      id="sectores"
      className="w-full bg-[#181414] text-white"
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-12 lg:py-16">
        {/* Cabecera */}
        <header ref={headerRef} className="mb-10 lg:mb-14">
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
          >
            {/* El texto se rellena por scrambleTextAnimation */}
          </h2>
          <p ref={subRef} className="text-[#e5e5e5] mt-3 max-w-[820px]">
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
              className="sector-block relative rounded-3xl border border-white/10 bg-[#1b1717]/80 backdrop-blur px-5 py-6 lg:p-8 shadow-[0_6px_18px_rgba(0,0,0,0.18)] overflow-hidden w-full"
            >
              {/* Glow decorativo */}
              <div
                className="pointer-events-none absolute -z-10 inset-0 opacity-70"
                style={{
                  background:
                    idx % 2 === 0
                      ? "radial-gradient(40% 60% at 15% 20%, rgba(255,49,49,0.12), transparent 60%), radial-gradient(50% 80% at 90% 10%, rgba(255,255,255,0.06), transparent 60%)"
                      : "radial-gradient(40% 60% at 80% 20%, rgba(255,49,49,0.12), transparent 60%), radial-gradient(50% 80% at 10% 10%, rgba(255,255,255,0.06), transparent 60%)",
                  filter: "blur(20px)",
                }}
              />

              {/* Header limpio de la card */}
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

              {/* Contenido principal */}
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
                  }}
                  onMouseEnter={() => handleBtnHover(idx)}
                  onMouseLeave={() => handleBtnLeave(idx)}
                  onMouseDown={() => handleBtnDown(idx)}
                  onMouseUp={() => handleBtnUp(idx)}
                  type="button"
                >
                  <span style={{ flex: "none" }}>{s.cta}</span>
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
          ))}
        </div>
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

        .sb-kpi{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.05);border-radius:999px;padding:8px 12px;font-size:14px;}

        .sector-block{transition: box-shadow .25s ease, transform .25s ease, border-color .25s ease;}
        .sector-block:hover{transform: translateY(-2px);box-shadow:0 10px 28px rgba(0,0,0,.28);border-color:rgba(255,255,255,.14);}
      `}</style>
    </section>
  );
};

export default Sectores;
