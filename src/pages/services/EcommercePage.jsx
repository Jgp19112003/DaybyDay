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
  "name": "Marketing para eCommerce — Shopify, Meta Ads y Automatización",
  "provider": {
    "@type": "Organization",
    "name": "DayByDay Consulting",
    "url": "https://www.daybydayconsulting.com",
  },
  "description":
    "Estrategia de marketing completa para eCommerce: Meta Ads, Google Shopping, email marketing automatizado y optimización de conversión en Shopify. Más ventas, menos coste por venta.",
  "areaServed": "ES",
  "url": "https://www.daybydayconsulting.com/servicios/ecommerce",
};

const painItems = [
  {
    icon: "🛒",
    title: "Tráfico que no convierte",
    desc: "Tienes visitas pero pocas ventas. El problema está en algún punto del funnel — tráfico frío mal segmentado, ficha de producto débil o checkout con fricción.",
  },
  {
    icon: "💳",
    title: "CPA que no aguanta el margen",
    desc: "Tu coste de adquisición por venta es tan alto que apenas queda margen. Escalar la inversión solo amplifica el problema en lugar de resolverlo.",
  },
  {
    icon: "📧",
    title: "Clientes que compran una vez y desaparecen",
    desc: "Captas cliente nuevo pero no tienes sistema de retención. Sin email marketing automatizado ni remarketing, el LTV es bajo y dependes siempre de nueva captación.",
  },
];

const steps = [
  {
    title: "Auditoría completa del eCommerce",
    desc: "Analizamos el funnel completo: tráfico, ficha de producto, checkout, tasa de abandono y flujos de email. Identificamos exactamente dónde se pierden las ventas.",
  },
  {
    title: "Estrategia de paid media para eCommerce",
    desc: "Configuramos campañas de Meta Ads con Advantage+ Shopping, catálogo dinámico, retargeting de carrito abandonado y Google Shopping. Full-funnel desde prospección hasta recompra.",
  },
  {
    title: "Automatización de email y WhatsApp",
    desc: "Implementamos flujos automatizados de email y WhatsApp: bienvenida, carrito abandonado, post-compra, upsell y reactivación de clientes inactivos.",
  },
  {
    title: "Optimización de conversión (CRO)",
    desc: "Mejoramos las fichas de producto, el checkout y las landing pages de campaña para que el mismo tráfico genere más ventas. Test A/B continuos en los elementos críticos.",
  },
];

const stats = [
  { value: "4,8 €", label: "CPA en Meta Ads eCommerce (Garett)" },
  { value: "14.936", label: "clicks generados con 3.179€ invertidos" },
  { value: "661", label: "inicios de pago en una sola campaña" },
  { value: "Shopify", label: "→ WhatsApp automatizado desde día 1" },
];

const faqItems = [
  {
    q: "¿Qué es el growth marketing para D2C y eCommerce?",
    a: "El growth marketing para D2C (Direct-to-Consumer) es la disciplina que combina paid media, automatización y optimización de conversión para escalar ventas directas al consumidor final. En lugar de depender de distribuidores o marketplaces, construyes un canal propio donde controlas el margen, los datos y la relación con el cliente.",
  },
  {
    q: "¿Qué canales funcionan mejor para un eCommerce en España?",
    a: "Meta Ads (Facebook e Instagram) es el canal más eficiente para eCommerce de moda, salud, hogar y lifestyle. Google Shopping funciona bien cuando hay búsqueda activa del producto. El email marketing automatizado y WhatsApp son esenciales para mejorar el LTV y recuperar carritos abandonados. La combinación óptima depende del ticket medio y el producto.",
  },
  {
    q: "¿Cómo se mide el éxito del marketing para eCommerce?",
    a: "Las métricas clave son el CPA (coste por venta), el ROAS (retorno sobre la inversión publicitaria), la tasa de conversión de la tienda y el LTV (valor del cliente a largo plazo). En DayByDay reportamos todas estas métricas semanalmente y conectamos los datos de Meta y Google con el rendimiento real de Shopify.",
  },
];

const EcommercePage = ({ openCalendly }) => (
  <ServiceLayout openCalendly={openCalendly}>
    <SEOHead
      title="Marketing para eCommerce — Shopify, Meta Ads y Automatización"
      description="Estrategia de marketing para eCommerce: Meta Ads, Google Shopping, email automatizado y CRO en Shopify. Bajamos tu CPA y subimos el LTV de cada cliente. Consulta gratuita."
      canonical="/servicios/ecommerce"
      schema={schema}
    />

    <ServiceHero
      badge="eCommerce Marketing"
      h1="Más ventas para tu eCommerce sin disparar el coste por venta"
      subtitle="Gestionamos la estrategia de marketing completa de tu tienda online: paid media, automatización de email y WhatsApp, y optimización de conversión. Todo para que cada euro invertido genere el máximo retorno."
      cta="Analizar mi eCommerce"
      openCalendly={openCalendly}
    />

    <PainPoints title="Los obstáculos que limitan tu eCommerce" items={painItems} />

    <HowWeDoIt title="Cómo escalamos tu tienda online" steps={steps} />

    {/* Social proof block */}
    <section className="bg-[#181414] py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-black text-center mb-8">De cero a canal B2C automatizado</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1f1a1a] border border-white/8 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/garett.png" alt="Garett España" className="w-8 h-8 rounded-full bg-white p-1 object-contain" />
              <div>
                <div className="font-bold text-sm">Garett España</div>
                <div className="text-white/40 text-xs">eCommerce B2C — Meta Ads + ECI</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { label: "Inversión Meta", value: "3.179 €" },
                { label: "Impresiones", value: "297.446" },
                { label: "Inicios de pago", value: "661" },
                { label: "CPA", value: "4,8 €" },
              ].map((m, i) => (
                <div key={i}>
                  <div className="text-white/40 text-[10px] uppercase tracking-wider">{m.label}</div>
                  <div className="text-white font-bold text-sm">{m.value}</div>
                </div>
              ))}
            </div>
            <p className="text-white/50 text-xs leading-relaxed">
              Desarrollo Shopify + Meta Ads + presencia en El Corte Inglés con 447K impresiones adicionales.
            </p>
          </div>
          <div className="bg-[#1f1a1a] border border-white/8 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/araslife.png" alt="Aras Life Plus" className="w-8 h-8 rounded-full bg-white p-1 object-contain" />
              <div>
                <div className="font-bold text-sm">Aras Life Plus</div>
                <div className="text-white/40 text-xs">Canal B2C desde cero — Shopify + WhatsApp</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Empresa B2B tradicional que quería abrir un canal B2C. Desarrollamos el eCommerce en Shopify, automatizamos el catálogo de proveedores y montamos el flujo de WhatsApp. Las campañas funcionan solas y el equipo se centra en crecer.
            </p>
          </div>
        </div>
      </div>
    </section>

    <ResultsBar stats={stats} />

    <FaqSection faqs={faqItems} />

    <ServiceCTA
      headline="¿Tu eCommerce puede vender más con la misma inversión?"
      sub="Auditamos tu tienda online en 30 minutos y te decimos exactamente qué está frenando tus ventas y cómo lo arreglamos. Sin compromiso."
      openCalendly={openCalendly}
    />
  </ServiceLayout>
);

export default EcommercePage;
