import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import Footer from "../components/Footer";

const faqs = [
  {
    q: "¿Con qué tipo de empresas trabajáis?",
    a: "Trabajamos principalmente con empresas B2C y D2C que venden online, y con agencias que necesitan escalar la gestión de campañas para sus clientes. Nuestros casos más habituales son eCommerce en Shopify, startups en crecimiento y empresas B2B que quieren abrir un canal digital.",
  },
  {
    q: "¿Cuánto presupuesto mínimo necesito para Meta Ads?",
    a: "Para obtener datos estadísticamente relevantes y optimizar correctamente, recomendamos un presupuesto mínimo de inversión en plataforma de 1.500€/mes. Con menos presupuesto el aprendizaje del algoritmo es demasiado lento. La gestión de campaña se factura aparte.",
  },
  {
    q: "¿Qué incluye la automatización de marketing?",
    a: "Depende de cada proyecto, pero el punto de partida habitual incluye: integración de CRM, flujos de email automatizados (bienvenida, nurturing, carrito abandonado), secuencias de WhatsApp Business y conexión entre herramientas como Shopify, Make o Zapier.",
  },
  {
    q: "¿Cuánto tardáis en lanzar una campaña?",
    a: "Para campañas de Meta Ads o Google Ads, el proceso desde la primera reunión hasta el lanzamiento es de 1 a 2 semanas. Incluye auditoría de cuenta, definición de estrategia, producción de creatividades y configuración técnica.",
  },
  {
    q: "¿Ofrecéis contratos a largo plazo o por proyecto?",
    a: "Trabajamos en modelo de retención mensual para servicios continuos como gestión de paid media o automatización. Para proyectos puntuales como montaje de un funnel o desarrollo de Shopify, trabajamos por proyecto con un alcance definido.",
  },
  {
    q: "¿Cómo medís los resultados?",
    a: "Entregamos un informe semanal con las métricas que importan para tu negocio: CPA, ROAS, CPL, CAC y conversiones reales. Sin jerga técnica innecesaria. Tienes acceso a los dashboards en tiempo real en todo momento.",
  },
  {
    q: "¿Qué diferencia a DayByDay de otras agencias?",
    a: "Somos nativos en IA y automatización — no es un add-on, es el núcleo de cómo trabajamos. Nuestro equipo viene de proyectos en grandes corporaciones de telecomunicaciones, energía y construcción en España, lo que nos da una perspectiva diferente a la agencia tradicional.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": a,
    },
  })),
};

const FAQPage = ({ openCalendly }) => {
  const [open, setOpen] = useState(null);

  return (
    <div className="min-h-screen bg-[#181414] text-white">
      <SEOHead
        title="Preguntas Frecuentes — DayByDay Consulting"
        description="Resolvemos las dudas más habituales sobre nuestros servicios de Meta Ads, automatización, paid media y captación de clientes. DayByDay Consulting."
        canonical="/faq"
        schema={schema}
      />

      <section className="relative pt-32 pb-20 px-4">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(222,0,21,0.10), transparent)",
          }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#de0015] inline-block" />
              FAQ
            </span>
            <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-4">
              Preguntas frecuentes
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Todo lo que necesitas saber antes de hablar con nosotros.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#1f1a1a] border border-white/8 rounded-2xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-sm sm:text-base">{faq.q}</span>
                  <svg
                    className={`w-4 h-4 flex-shrink-0 text-white/40 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {open === i && (
                  <div className="px-6 pb-5">
                    <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/50 text-sm mb-4">
              ¿Tienes una pregunta que no está aquí?
            </p>
            <button
              type="button"
              onClick={openCalendly}
              className="inline-flex items-center gap-2 bg-[#de0015] hover:bg-[#b8000f] text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-105"
            >
              Hablar con el equipo
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <div className="mt-6">
              <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors">
                ← Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer onAgendarClick={openCalendly} />
    </div>
  );
};

export default FAQPage;
