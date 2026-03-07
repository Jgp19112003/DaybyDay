import SEOHead from "../../components/SEOHead";
import FaqSection from "../../components/FaqSection";
import ServiceLayout, {
  ServiceHero,
  PainPoints,
  HowWeDoIt,
  ResultsBar,
  ServiceCTA,
} from "../../components/ServiceLayout";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Captación de Clientes con Marketing Digital e IA",
  "provider": {
    "@type": "Organization",
    "name": "DayByDay Consulting",
    "url": "https://www.daybydayconsulting.com",
  },
  "description":
    "Diseñamos y ejecutamos sistemas de captación de clientes con paid media, automatización e IA. Llenamos tu pipeline de leads cualificados y reducimos el CAC.",
  "areaServed": "ES",
  "url": "https://www.daybydayconsulting.com/servicios/captacion-clientes",
};

const painItems = [
  {
    icon: "🪣",
    title: "Pipeline vacío o impredecible",
    desc: "Dependes del boca a boca o de rachas puntuales de leads. Sin un sistema estructurado, la captación es irregular y los ingresos también.",
  },
  {
    icon: "💰",
    title: "CAC demasiado alto",
    desc: "Cada cliente nuevo cuesta demasiado en tiempo, dinero o ambos. No tienes visibilidad sobre qué canal o acción genera los leads más baratos y cualificados.",
  },
  {
    icon: "🔍",
    title: "Leads que no convierten",
    desc: "Consigues contactos pero no se convierten en clientes. El problema no es el volumen: es la cualificación, la velocidad de respuesta y el seguimiento posterior.",
  },
];

const steps = [
  {
    title: "Definición del ICP y mapa del buyer journey",
    desc: "Identificamos con precisión a tu cliente ideal (ICP): sector, tamaño, motivaciones y barreras de compra. Mapeamos el journey completo desde el descubrimiento hasta la firma.",
  },
  {
    title: "Diseño del funnel de captación",
    desc: "Construimos el funnel end-to-end: anuncios de entrada, landing page de conversión, lead magnet si aplica, y secuencia de nurturing automatizada hasta la llamada de ventas.",
  },
  {
    title: "Activación de campañas de pago y orgánico",
    desc: "Lanzamos campañas en Meta Ads y/o Google Ads segmentadas para tu ICP. Mensajes, creatividades y audiencias alineados con los pain points reales de tu cliente.",
  },
  {
    title: "Automatización del seguimiento y nurturing",
    desc: "Cada lead entra en un flujo automatizado: email de bienvenida, secuencia de valor y recordatorios de llamada. El 80% del seguimiento se hace sin intervención humana.",
  },
];

const stats = [
  { value: "55 €", label: "CPL en campaña de 30+ programas universitarios" },
  { value: "711", label: "creatividades producidas para captación" },
  { value: "84M", label: "impresiones de alcance en Meta" },
  { value: "30+", label: "programas captados simultáneamente" },
];

const faqItems = [
  {
    q: "¿Qué es un sistema de captación automatizado de clientes?",
    a: "Es un conjunto de herramientas y procesos que generan leads cualificados de forma continua y automática: anuncios de pago segmentados para tu ICP, landing pages optimizadas, lead magnets si aplica, y flujos de nurturing automáticos hasta la llamada de ventas. Todo sin depender del boca a boca ni de acciones puntuales.",
  },
  {
    q: "¿Cómo funciona el sistema de captación de DayByDay?",
    a: "Empezamos mapeando tu cliente ideal (ICP) y el buyer journey. Luego construimos el funnel: campañas en Meta Ads y/o Google Ads, landing page de conversión y secuencia automática de seguimiento. Cada lead entra en el flujo y avanza solo hacia la llamada de ventas con el mínimo esfuerzo del equipo.",
  },
  {
    q: "¿En cuánto tiempo se ven resultados en captación?",
    a: "Con campañas de pago activas, los primeros leads cualificados llegan en la primera semana. El sistema se estabiliza y optimiza en 4–6 semanas, momento en que el CPL y la tasa de conversión a cliente se vuelven predecibles. Los resultados a largo plazo mejoran al añadir el canal orgánico y el remarketing.",
  },
];

const CaptacionPage = ({ openCalendly }) => (
  <ServiceLayout openCalendly={openCalendly}>
    <SEOHead
      title="Captación de Clientes con Marketing Digital e IA"
      description="Sistema de captación de clientes con paid media, automatización e IA. Llenamos tu pipeline de leads cualificados y bajamos tu CAC. Resultados medibles desde el primer mes."
      canonical="/servicios/captacion-clientes"
      schema={schema}
    />

    <ServiceHero
      badge="Captación de Clientes"
      h1="Un sistema que llena tu pipeline de clientes cualificados cada mes"
      subtitle="Diseñamos el funnel completo: desde el primer anuncio hasta el cliente firmado. Automatizamos el seguimiento, optimizamos el CAC y construimos un sistema que escala con tu negocio."
      cta="Quiero más clientes"
      openCalendly={openCalendly}
    />

    <PainPoints title="Por qué tu captación no es predecible" items={painItems} />

    <HowWeDoIt title="Cómo construimos tu sistema de captación" steps={steps} />

    {/* Social proof block */}
    <section className="bg-[#181414] py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-black text-center mb-8">Captación a gran escala — caso real</h2>
        <div className="bg-[#1f1a1a] border border-white/8 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <img src="/images/evercreate.png" alt="Evercreate" className="w-10 h-10 rounded-full bg-white p-1 object-contain" />
            <div>
              <div className="font-bold">Evercreate × Una de las 5 mejores universidades privadas de España</div>
              <div className="text-white/40 text-xs mt-0.5">Funnel de captación para +30 programas universitarios</div>
            </div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed mb-6">
            "DayByDay definió y ejecutó un funnel de captación de leads: mensajes, públicos, creatividades y campañas, todo personalizado para más de 30 programas. Lo que cambió fue nuestra relación con el cliente: ahora ahorramos tiempo, ganamos autoridad y tenemos claridad estratégica."
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Inversión Meta", value: "193.829 €" },
              { label: "Impresiones", value: "84,3M" },
              { label: "Creatividades", value: "711" },
              { label: "CPL conseguido", value: "55 €" },
            ].map((m, i) => (
              <div key={i} className="text-center">
                <div className="text-white font-bold text-lg">{m.value}</div>
                <div className="text-white/40 text-[10px] uppercase tracking-wider mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <ResultsBar stats={stats} />

    <FaqSection faqs={faqItems} />

    <ServiceCTA
      headline="¿Cuántos clientes nuevos necesitas al mes?"
      sub="Cuéntanos tu objetivo. En 30 minutos diseñamos el sistema de captación que necesitas y te decimos cuánto costaría implementarlo."
      openCalendly={openCalendly}
    />
  </ServiceLayout>
);

export default CaptacionPage;
