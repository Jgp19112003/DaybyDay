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
  "name": "Agencia de Paid Media — Google Ads, Meta Ads y Publicidad Digital",
  "provider": {
    "@type": "Organization",
    "name": "DayByDay Consulting",
    "url": "https://www.daybydayconsulting.com",
  },
  "description":
    "Gestionamos tu estrategia de paid media integral: Google Ads, Meta Ads, YouTube y Display. Estrategia multicanal, inversión optimizada y reporting semanal con datos reales.",
  "areaServed": "ES",
  "url": "https://www.daybydayconsulting.com/servicios/paid-media",
};

const painItems = [
  {
    icon: "🎯",
    title: "Presupuesto repartido sin estrategia",
    desc: "Inviertes en varios canales pero sin una visión unificada. Cada plataforma opera en silos y no hay coherencia entre los mensajes ni las audiencias.",
  },
  {
    icon: "📊",
    title: "Datos sin contexto ni acción",
    desc: "Tienes dashboards llenos de métricas pero ninguna responde a la pregunta clave: ¿qué canal genera más clientes al menor coste?",
  },
  {
    icon: "🔄",
    title: "Agencias que ejecutan sin pensar",
    desc: "Tu agencia actual gestiona campañas pero no diseña la estrategia completa. Ejecutan sin entender el negocio ni el buyer journey de tu cliente.",
  },
];

const steps = [
  {
    title: "Auditoría multicanal y análisis de competencia",
    desc: "Auditamos Google Ads, Meta, YouTube y cualquier canal activo. Analizamos qué hace la competencia y dónde están las oportunidades de inversión con mayor retorno.",
  },
  {
    title: "Estrategia de paid media unificada",
    desc: "Diseñamos el mix de canales óptimo según tu buyer persona, ticket medio y objetivos: awareness, captación, conversión o retención. Todo conectado bajo una misma narrativa.",
  },
  {
    title: "Activación y gestión de campañas",
    desc: "Lanzamos y gestionamos las campañas en todos los canales acordados. Optimización diaria, test de creatividades y ajuste de pujas basado en datos de conversión real.",
  },
  {
    title: "Reporting semanal con visión de negocio",
    desc: "Un informe semanal con las métricas que importan: CAC, ROAS, CPL y coste por cliente. Sin jerga técnica, con recomendaciones accionables para la siguiente semana.",
  },
];

const stats = [
  { value: "253K€", label: "gestionados en paid media" },
  { value: "10,35%", label: "CTR en Google Ads (Evercreate)" },
  { value: "0,24 €", label: "CPC en Meta Ads lead gen" },
  { value: "51.600", label: "clicks en Google para universidad privada" },
];

const faqItems = [
  {
    q: "¿Qué incluye una estrategia de paid media completa?",
    a: "Una estrategia de paid media integral abarca la selección de canales (Meta Ads, Google Ads, YouTube, TikTok), la definición del mix de inversión según el funnel, la producción de creatividades, la gestión y optimización de campañas, y el reporting semanal con métricas de negocio: CAC, ROAS y CPL.",
  },
  {
    q: "¿Cuál es la diferencia entre Meta Ads y Google Ads?",
    a: "Meta Ads (Facebook e Instagram) es ideal para generar demanda: muestra anuncios a personas que encajan con tu buyer persona aunque no estén buscando activamente. Google Ads captura demanda existente: impacta a usuarios que ya buscan tu producto o servicio. La combinación de ambos maximiza el alcance en todo el funnel.",
  },
  {
    q: "¿Cómo se mide el ROI en paid media?",
    a: "El ROI en paid media se mide principalmente a través del ROAS (Return on Ad Spend) para eCommerce y del CAC (Coste de Adquisición de Cliente) para servicios. En DayByDay reportamos semanalmente con estas métricas reales, conectadas al dato de conversión final y no solo a clics o impresiones.",
  },
  {
    q: "¿Qué es un consultor de paid media y cuándo lo necesita mi empresa?",
    a: "Un consultor de paid media es un especialista que diseña y gestiona la estrategia de publicidad de pago de una empresa: Meta Ads, Google Ads y otros canales. Lo necesitas cuando la publicidad digital representa más del 20% de tus ingresos, cuando el ROAS cae sin causa clara, o cuando tu equipo no tiene experiencia específica en paid media para D2C. Un consultor especializado puede auditar y optimizar una cuenta en 4–6 semanas.",
  },
  {
    q: "¿Qué diferencia hay entre una agencia de paid media y un consultor especializado?",
    a: "Una agencia tradicional asigna un account manager que gestiona varias cuentas a la vez. Un consultor de paid media trabaja directamente en tu cuenta con dedicación real, aporta criterio estratégico propio y responde directamente. En DayByDay no hay intermediarios: el consultor que firma el contrato es el que ejecuta las campañas y aparece en cada reunión.",
  },
];

const PaidMediaPage = ({ openCalendly }) => (
  <ServiceLayout openCalendly={openCalendly}>
    <SEOHead
      title="Agencia de Paid Media — Google Ads, Meta Ads y Publicidad Digital"
      description="Agencia de paid media que gestiona tu estrategia multicanal: Google Ads, Meta Ads y YouTube. Inversión optimizada, reporting semanal y resultados medibles. Consulta gratuita."
      canonical="/servicios/paid-media"
      schema={schema}
    />

    <ServiceHero
      badge="Paid Media Strategy"
      h1="Paid media con estrategia real, no solo ejecución"
      subtitle="Diseñamos y gestionamos tu inversión en publicidad digital de forma integral. Google Ads, Meta Ads, YouTube — todos los canales trabajando juntos hacia el mismo objetivo: más clientes al menor coste posible."
      cta="Analizar mi paid media"
      openCalendly={openCalendly}
    />

    <PainPoints title="Los problemas más comunes en paid media" items={painItems} />

    <HowWeDoIt title="Nuestra metodología de paid media" steps={steps} />

    {/* Social proof block */}
    <section className="bg-[#181414] py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-black text-center mb-8">Resultados en paid media multicanal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1f1a1a] border border-white/8 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/evercreate.png" alt="Evercreate" className="w-8 h-8 rounded-full bg-white p-1 object-contain" />
              <div>
                <div className="font-bold text-sm">Evercreate × Universidad privada</div>
                <div className="text-white/40 text-xs">Estrategia multicanal — Lead Gen</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Meta Ads", value: "193.829 €" },
                { label: "Google Ads", value: "59.850 €" },
                { label: "CTR Google", value: "10,35%" },
                { label: "CPC Meta", value: "0,24 €" },
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
              <img src="/images/garett.png" alt="Garett España" className="w-8 h-8 rounded-full bg-white p-1 object-contain" />
              <div>
                <div className="font-bold text-sm">Garett España</div>
                <div className="text-white/40 text-xs">Meta Ads + El Corte Inglés Sponsored</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Meta Ads", value: "3.179 €" },
                { label: "ECI Sponsored", value: "7.853 €" },
                { label: "Impresiones ECI", value: "447.695" },
                { label: "CPA Meta", value: "4,8 €" },
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
      headline="¿Quieres saber exactamente dónde invertir tu presupuesto?"
      sub="Reserva una llamada de 30 minutos. Auditamos tus canales activos y te explicamos qué ajustes te darían mejor retorno desde la próxima semana."
      openCalendly={openCalendly}
    />
  </ServiceLayout>
);

export default PaidMediaPage;
