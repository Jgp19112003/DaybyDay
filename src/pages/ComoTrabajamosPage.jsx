import { Helmet } from "react-helmet-async";
import SEOHead from "../components/SEOHead";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo trabaja DayByDay Consulting",
  "description": "Proceso de trabajo de DayByDay Consulting: desde el primer contacto hasta los resultados medibles en paid media y automatización de marketing.",
  "url": "https://www.daybydayconsulting.com/como-trabajamos",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Llamada de diagnóstico gratuita",
      "text": "En 30 minutos analizamos tu situación actual: qué canales usas, cuánto inviertes, qué resultados tienes y cuál es tu objetivo real. Sin compromisos.",
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Auditoría y propuesta estratégica",
      "text": "Auditamos tus cuentas publicitarias y operativa actual. Entregamos una propuesta con la estrategia concreta, canales recomendados, presupuesto y KPIs esperados.",
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Implementación y activación",
      "text": "Configuramos las campañas, conectamos las herramientas y activamos los flujos automatizados. Todo está operativo en menos de 2 semanas desde la firma.",
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Optimización continua y reporting",
      "text": "Monitorizamos y optimizamos cada semana. Cada lunes recibes un informe con las métricas que importan: CPA, ROAS, CAC y recomendaciones para la siguiente semana.",
    },
  ],
};

const steps = [
  {
    number: "01",
    title: "Llamada de diagnóstico gratuita",
    desc: "En 30 minutos analizamos tu situación actual: qué canales usas, cuánto inviertes, qué resultados tienes y cuál es tu objetivo real. Sin compromisos, sin ventas agresivas.",
    detail: "Cuéntanos dónde estás. Nosotros te decimos exactamente a dónde puedes llegar y cómo.",
  },
  {
    number: "02",
    title: "Auditoría y propuesta estratégica",
    desc: "Auditamos tus cuentas publicitarias y operativa actual. Identificamos qué está fallando y qué oportunidades no estás aprovechando.",
    detail: "Entregamos una propuesta con la estrategia concreta, canales recomendados, presupuesto y KPIs esperados. Todo por escrito, sin ambigüedades.",
  },
  {
    number: "03",
    title: "Implementación y activación",
    desc: "Configuramos las campañas, conectamos las herramientas y activamos los flujos automatizados. Producción de creatividades incluida desde el primer ciclo.",
    detail: "Todo está operativo en menos de 2 semanas desde la firma. Sin dependencias de equipos técnicos internos.",
  },
  {
    number: "04",
    title: "Optimización continua y reporting",
    desc: "Monitorizamos y optimizamos cada semana. Cada lunes recibes un informe con las métricas que importan: CPA, ROAS, CAC y recomendaciones para la siguiente semana.",
    detail: "No gestionamos y desaparecemos. Somos tu equipo de marketing externo, con acceso directo y comunicación constante.",
  },
];

const stack = [
  { category: "Publicidad", tools: ["Meta Ads", "Google Ads", "TikTok Ads", "YouTube Ads"] },
  { category: "Automatización", tools: ["Make", "Zapier", "n8n", "HubSpot", "Pipedrive"] },
  { category: "eCommerce", tools: ["Shopify", "WooCommerce", "Catálogos Meta"] },
  { category: "Comunicación", tools: ["WhatsApp Business API", "Email marketing", "SMS"] },
];

const kpis = [
  { label: "CPA medio en eCommerce", value: "4,8 €" },
  { label: "Inversión publicitaria gestionada", value: "253K€" },
  { label: "Creatividades producidas", value: "711+" },
  { label: "Impresiones generadas", value: "84M+" },
];

const faqItems = [
  {
    q: "¿Con qué tipo de empresas trabajáis?",
    a: "Trabajamos principalmente con marcas B2C y D2C: eCommerce, servicios de consumo, startups en fase de crecimiento y pymes que quieren escalar su captación de clientes. También trabajamos con agencias que necesitan apoyo en paid media o automatización para sus propios clientes.",
  },
  {
    q: "¿Cuánto tiempo tarda en arrancar el trabajo?",
    a: "Desde la firma del contrato hasta la activación de las primeras campañas, el proceso habitual es de 7 a 14 días. Incluye la auditoría, la producción inicial de creatividades y la configuración técnica de todas las herramientas.",
  },
  {
    q: "¿Cómo es la comunicación durante el proyecto?",
    a: "Tenemos acceso directo por WhatsApp o Slack para consultas urgentes, reporting semanal por escrito cada lunes, y una llamada mensual de revisión estratégica. Sin tickets de soporte, sin intermediarios. Hablas directamente con el equipo que gestiona tu cuenta.",
  },
];

const ComoTrabajamosPage = () => (
  <>
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
    </Helmet>
    <SEOHead
      title="Cómo Trabajamos — Proceso, Metodología y Stack Tecnológico"
      description="Conoce el proceso de trabajo de DayByDay Consulting: diagnóstico gratuito, auditoría, implementación en menos de 2 semanas y reporting semanal. Paid media y automatización con IA."
      canonical="/como-trabajamos"
    />

    <div className="min-h-screen bg-[#0f0c0c] text-white">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 text-center">
        <p className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-4">
          Metodología
        </p>
        <h1 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">
          Cómo trabajamos en DayByDay
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Un proceso claro, sin agencias intermediarias y con resultados medibles desde la primera semana. Así gestionamos paid media y automatización para marcas B2C y D2C en España.
        </p>
      </section>

      {/* Steps */}
      <section className="max-w-3xl mx-auto px-4 pb-20" aria-label="Proceso de trabajo">
        <div className="space-y-6">
          {steps.map(({ number, title, desc, detail }) => (
            <div
              key={number}
              className="bg-[#1a1616] border border-white/8 rounded-2xl p-8 flex gap-6"
            >
              <div className="text-4xl font-black text-white/10 flex-shrink-0 leading-none">
                {number}
              </div>
              <div>
                <h2 className="font-bold text-lg mb-2">{title}</h2>
                <p className="text-white/60 text-sm leading-relaxed mb-3">{desc}</p>
                <p className="text-white/40 text-xs leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KPIs */}
      <section className="bg-[#181414] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-center mb-10">Resultados que avalan el proceso</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {kpis.map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-black mb-1">{value}</div>
                <div className="text-white/40 text-xs uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-black text-center mb-10">Stack tecnológico</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stack.map(({ category, tools }) => (
            <div
              key={category}
              className="bg-[#1a1616] border border-white/8 rounded-2xl p-6"
            >
              <div className="text-xs font-semibold tracking-widest text-white/30 uppercase mb-3">
                {category}
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-white/5 border border-white/8 rounded-full px-3 py-1 text-xs text-white/70"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FaqSection faqs={faqItems} title="Preguntas sobre nuestro proceso" />

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-black mb-4">
          ¿Listo para empezar?
        </h2>
        <p className="text-white/60 max-w-md mx-auto mb-8 text-sm">
          La primera llamada de diagnóstico es gratuita. En 30 minutos sabrás exactamente qué mejorar y cómo.
        </p>
        <a
          href="https://calendly.com/contact-daybydayconsulting/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black font-bold px-8 py-4 rounded-full text-sm hover:bg-white/90 transition-colors"
        >
          Reservar llamada gratuita
        </a>
      </section>
    </div>

    <Footer />
  </>
);

export default ComoTrabajamosPage;
