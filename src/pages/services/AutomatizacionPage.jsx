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
  "name": "Automatización de Marketing con IA para Empresas",
  "provider": {
    "@type": "Organization",
    "name": "DayByDay Consulting",
    "url": "https://www.daybydayconsulting.com",
  },
  "description":
    "Automatizamos tus procesos de marketing y ventas con IA: CRM, emails, WhatsApp, flujos de captación y pipelines de cliente. Escala sin aumentar equipo.",
  "areaServed": "ES",
  "url": "https://www.daybydayconsulting.com/servicios/automatizacion",
};

const painItems = [
  {
    icon: "⚙️",
    title: "Procesos manuales que no escalan",
    desc: "Tu equipo dedica horas a tareas repetitivas — seguimientos, actualizaciones de CRM, envíos de email — que podrían ejecutarse solas con la tecnología adecuada.",
  },
  {
    icon: "🔌",
    title: "Herramientas desconectadas",
    desc: "CRM, eCommerce, email marketing y WhatsApp funcionan por separado. Los datos no fluyen y los clientes caen en el vacío entre sistemas.",
  },
  {
    icon: "📦",
    title: "Operativa que frena el crecimiento",
    desc: "Cada cliente nuevo suma carga operativa. Sin automatización, crecer significa contratar más personas en lugar de optimizar los procesos existentes.",
  },
];

const steps = [
  {
    title: "Diagnóstico de procesos y stack tecnológico",
    desc: "Mapeamos tu operativa actual: dónde se pierden leads, qué tareas consumen más tiempo y qué herramientas ya tienes. Identificamos los cuellos de botella de alto impacto.",
  },
  {
    title: "Diseño del flujo automatizado end-to-end",
    desc: "Diseñamos el sistema completo: desde la captación del lead hasta el cierre y la fidelización. Cada paso del journey del cliente queda cubierto por automatizaciones.",
  },
  {
    title: "Implementación e integración de herramientas",
    desc: "Conectamos tu CRM, Shopify, WhatsApp Business, email y cualquier otra herramienta usando Make, Zapier, n8n o desarrollo a medida. Sin fricción, sin pérdida de datos.",
  },
  {
    title: "Activación, pruebas y optimización continua",
    desc: "Lanzamos en producción con una fase de pruebas controlada. Monitorizamos las automatizaciones y las optimizamos según el comportamiento real de tus clientes.",
  },
];

const stats = [
  { value: "100%", label: "proceso de ventas automatizado en Aras Life" },
  { value: "0h", label: "de gestión manual en campañas activas" },
  { value: "Shopify", label: "→ WhatsApp integrados en 1 semana" },
  { value: "3x", label: "capacidad sin aumentar equipo" },
];

const faqItems = [
  {
    q: "¿Qué es la automatización de marketing y para qué sirve?",
    a: "La automatización de marketing consiste en usar software e IA para ejecutar tareas repetitivas de forma automática: enviar emails, actualizar el CRM, hacer seguimiento de leads o gestionar flujos de WhatsApp. Permite escalar la operativa sin aumentar el equipo y mejora la velocidad de respuesta al cliente.",
  },
  {
    q: "¿Qué procesos se pueden automatizar en mi negocio?",
    a: "Los más comunes son: seguimiento de leads tras un formulario, secuencias de email o WhatsApp post-compra, actualización automática de CRM y Shopify, notificaciones internas de ventas, y reporting periódico. En una primera consulta identificamos los procesos de mayor impacto para tu caso.",
  },
  {
    q: "¿Cuánto tiempo y dinero ahorra la automatización?",
    a: "Depende del volumen de operaciones, pero habitualmente entre 5 y 20 horas semanales de trabajo manual por proyecto. En términos económicos, equivale a un empleado parcial dedicado a tareas repetitivas. El ROI suele ser positivo en los primeros 60–90 días.",
  },
];

const AutomatizacionPage = ({ openCalendly }) => (
  <ServiceLayout openCalendly={openCalendly}>
    <SEOHead
      title="Automatización de Marketing con IA para Empresas"
      description="Automatizamos tus procesos de marketing y ventas con IA: CRM, WhatsApp, emails y flujos de captación. Escala sin aumentar tu equipo operativo. Consulta gratuita."
      canonical="/servicios/automatizacion"
      schema={schema}
    />

    <ServiceHero
      badge="Automatización con IA"
      h1="Automatiza tu marketing y escala sin contratar más personal"
      subtitle="Conectamos tus herramientas, eliminamos las tareas manuales y construimos flujos automáticos que trabajan por ti 24/7. Más clientes, mismo equipo."
      cta="Quiero automatizar mi negocio"
      openCalendly={openCalendly}
    />

    <PainPoints title="Por qué tu operativa te está frenando" items={painItems} />

    <HowWeDoIt title="Cómo automatizamos tu negocio" steps={steps} />

    {/* Social proof block */}
    <section className="bg-[#181414] py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-black text-center mb-8">Casos reales de automatización</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1f1a1a] border border-white/8 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/araslife.png" alt="Aras Life Plus" className="w-8 h-8 rounded-full bg-white p-1 object-contain" />
              <div>
                <div className="font-bold text-sm">Aras Life Plus</div>
                <div className="text-white/40 text-xs">Pyme B2B → Canal B2C automatizado</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              "Automatizaron todo el proceso desde la actualización de los productos de proveedores pasando por Shopify hasta el flujo de WhatsApp, lo que nos permitió escalar ventas sin aumentar carga operativa. Hoy, nuestras campañas funcionan solas."
            </p>
          </div>
          <div className="bg-[#1f1a1a] border border-white/8 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/cartri.png" alt="Cartri" className="w-8 h-8 rounded-full bg-white p-1 object-contain" />
              <div>
                <div className="font-bold text-sm">Cartri</div>
                <div className="text-white/40 text-xs">Startup B2C en crecimiento</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              "Antes teníamos una web desactualizada y ahora contamos con un ecosistema automatizado de ventas y remarketing que genera resultados constantes. Siempre atentos, rápidos y claros."
            </p>
          </div>
        </div>
      </div>
    </section>

    <ResultsBar stats={stats} />

    <FaqSection faqs={faqItems} />

    <ServiceCTA
      headline="¿Listo para que tu negocio trabaje solo?"
      sub="Cuéntanos cómo funciona tu operativa hoy. En 30 minutos identificamos qué se puede automatizar y te damos un plan de acción concreto sin coste."
      openCalendly={openCalendly}
    />
  </ServiceLayout>
);

export default AutomatizacionPage;
