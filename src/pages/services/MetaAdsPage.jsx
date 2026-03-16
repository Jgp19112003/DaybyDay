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
  "name": "Gestión de Meta Ads para Empresas B2C y D2C",
  "provider": {
    "@type": "Organization",
    "name": "DayByDay Consulting",
    "url": "https://www.daybydayconsulting.com",
  },
  "description":
    "Gestionamos tus campañas de Meta Ads (Facebook e Instagram) para empresas B2C y D2C. Estrategia, creatividades, optimización y escalado con IA.",
  "areaServed": "ES",
  "url": "https://www.daybydayconsulting.com/servicios/meta-ads",
};

const painItems = [
  {
    icon: "💸",
    title: "Inversión sin retorno claro",
    desc: "Gastas en Meta pero no sabes qué campañas convierten. El CPA sube, el ROAS cae y el equipo no tiene respuestas.",
  },
  {
    icon: "🎨",
    title: "Creatividades que no escalan",
    desc: "Los anuncios se queman rápido, la fatiga creativa paraliza el rendimiento y no hay sistema para testear continuamente.",
  },
  {
    icon: "📉",
    title: "Resultados inconsistentes",
    desc: "Un mes va bien, el siguiente colapsa. Sin estructura de campaña sólida, el rendimiento depende del azar.",
  },
];

const steps = [
  {
    title: "Auditoría de cuenta y diagnóstico",
    desc: "Analizamos tu cuenta en RAW: estructura de campañas, audiencias, creatividades y flujo de conversión. Identificamos qué está drenando presupuesto.",
  },
  {
    title: "Estrategia full-funnel TOFU → BOFU",
    desc: "Diseñamos la arquitectura completa: prospección con Advantage+, retargeting secuencial y campañas de conversión para cada etapa del buyer journey.",
  },
  {
    title: "Producción y test de creatividades",
    desc: "Generamos variantes de copy, imagen y vídeo alineadas con el buyer persona. Más de 30 variaciones creativas por ciclo, con testing A/B sistemático.",
  },
  {
    title: "Optimización semanal basada en datos",
    desc: "Ajustes de puja, presupuesto y audiencias cada semana. Reporting transparente con las métricas que importan: CPA, ROAS y CAC real.",
  },
];

const stats = [
  { value: "4,8 €", label: "CPA medio en eCommerce" },
  { value: "711", label: "creatividades producidas" },
  { value: "193K€", label: "gestionados en Meta Ads" },
  { value: "84M", label: "impresiones generadas" },
];

const faqItems = [
  {
    q: "¿Qué incluye la gestión de Meta Ads de DayByDay?",
    a: "La gestión incluye auditoría de cuenta, estrategia full-funnel (TOFU a BOFU), producción de creatividades, configuración y optimización semanal de campañas, y reporting con métricas reales: CPA, ROAS y CAC. Sin intermediarios ni black boxes.",
  },
  {
    q: "¿Cuánto tiempo tarda en verse el ROAS en Meta Ads?",
    a: "Los primeros datos relevantes se obtienen tras 2–3 semanas de campaña activa. Meta necesita un período de aprendizaje (mínimo 50 eventos de optimización) antes de estabilizar el rendimiento. Con una estrategia bien estructurada, el ROAS escala de forma sostenida a partir del segundo mes.",
  },
  {
    q: "¿Cuánto cuesta contratar una agencia de Meta Ads en España?",
    a: "El coste de gestión de Meta Ads en DayByDay parte desde 800 €/mes, en función del volumen de inversión, el número de campañas activas y la producción de creatividades incluida. El presupuesto mínimo recomendado en Meta es de 1.500 €/mes de inversión publicitaria.",
  },
  {
    q: "¿Es mejor contratar un consultor de Meta Ads o una agencia en España?",
    a: "Un consultor de Meta Ads especializado en eCommerce D2C ofrece atención directa del experto, sin account managers, y se implica como si fuera parte de tu equipo. En DayByDay el consultor trabaja directamente en tu cuenta, con transparencia total de métricas y decisiones. Para marcas D2C con inversiones entre 1.500 y 20.000 €/mes, el modelo consultor especializado suele superar al de agencia generalista.",
  },
  {
    q: "¿Qué hace exactamente un consultor de Meta Ads para eCommerce?",
    a: "Audita la cuenta, diseña la estrategia full-funnel (prospección con Advantage+, retargeting secuencial y conversión), produce y testa creatividades, optimiza pujas y presupuestos semanalmente, y reporta con métricas de negocio reales: CPA, ROAS y CAC. El objetivo es que cada euro invertido en Meta genere el máximo retorno para tu tienda.",
  },
];

const MetaAdsPage = ({ openCalendly }) => (
  <ServiceLayout openCalendly={openCalendly}>
    <SEOHead
      title="Gestión de Meta Ads para Empresas B2C y D2C"
      description="Agencia Meta Ads especializada en B2C y D2C. Gestionamos tus campañas de Facebook e Instagram con estrategia full-funnel, creatividades y optimización semanal. CPA medio 4,8€."
      canonical="/servicios/meta-ads"
      schema={schema}
    />

    <ServiceHero
      badge="Meta Ads Management"
      h1="Gestión de Meta Ads que genera ventas, no solo impresiones"
      subtitle="Auditamos tu cuenta, diseñamos la estrategia full-funnel y gestionamos cada euro de tu inversión en Meta para que el ROAS suba y el CPA baje. Sin agencias intermediarias, sin excusas."
      cta="Quiero una auditoría gratuita"
      openCalendly={openCalendly}
    />

    <PainPoints title="Por qué tus Meta Ads no están funcionando" items={painItems} />

    <HowWeDoIt title="Cómo gestionamos tus Meta Ads" steps={steps} />

    {/* Social proof block */}
    <section className="bg-[#181414] py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-black text-center mb-8">Casos reales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1f1a1a] border border-white/8 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/garett.png" alt="Garett España" className="w-8 h-8 rounded-full bg-white p-1 object-contain" />
              <div>
                <div className="font-bold text-sm">Garett España</div>
                <div className="text-white/40 text-xs">eCommerce B2C</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Inversión", value: "3.179 €" },
                { label: "Clicks", value: "14.936" },
                { label: "Inicios de pago", value: "661" },
                { label: "CPA", value: "4,8 €" },
              ].map((m, i) => (
                <div key={i}>
                  <div className="text-white/40 text-[10px] uppercase tracking-wider">{m.label}</div>
                  <div className="text-white font-bold text-sm">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#1f1a1a] border border-white/8 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/evercreate.png" alt="Evercreate" className="w-8 h-8 rounded-full bg-white p-1 object-contain" />
              <div>
                <div className="font-bold text-sm">Evercreate × Universidad</div>
                <div className="text-white/40 text-xs">Lead Gen B2C</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Inversión Meta", value: "193.829 €" },
                { label: "Impresiones", value: "84,3M" },
                { label: "Creatividades", value: "711" },
                { label: "CPL", value: "55 €" },
              ].map((m, i) => (
                <div key={i}>
                  <div className="text-white/40 text-[10px] uppercase tracking-wider">{m.label}</div>
                  <div className="text-white font-bold text-sm">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <ResultsBar stats={stats} />

    <FaqSection faqs={faqItems} />

    <ServiceCTA
      headline="¿Listo para que tus Meta Ads generen resultados reales?"
      sub="Reserva una llamada de 30 minutos. Analizamos tu cuenta en directo y te decimos exactamente qué está fallando y cómo lo arreglamos."
      openCalendly={openCalendly}
    />
  </ServiceLayout>
);

export default MetaAdsPage;
