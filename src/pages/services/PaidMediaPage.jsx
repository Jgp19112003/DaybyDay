import SEOHead from "../../components/SEOHead";
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

    <ServiceCTA
      headline="¿Quieres saber exactamente dónde invertir tu presupuesto?"
      sub="Reserva una llamada de 30 minutos. Auditamos tus canales activos y te explicamos qué ajustes te darían mejor retorno desde la próxima semana."
      openCalendly={openCalendly}
    />
  </ServiceLayout>
);

export default PaidMediaPage;
