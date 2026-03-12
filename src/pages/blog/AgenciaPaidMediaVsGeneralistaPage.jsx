import { Link } from "react-router-dom";
import BlogPostLayout from "../../components/BlogPostLayout";

const faqs = [
  {
    q: "¿Cuál es la diferencia entre una agencia de paid media y una agencia de marketing generalista?",
    a: "Una agencia de paid media se especializa exclusivamente en publicidad de pago (Meta Ads, Google Ads, TikTok Ads) con foco en conversión, ROAS y CPA. Una agencia de marketing generalista cubre múltiples disciplinas: SEO, redes sociales, contenido, diseño, email y publicidad digital. La especialización permite profundidad técnica mayor, metodologías más depuradas y mejores resultados en el canal específico. La generalidad ofrece cobertura de múltiples frentes desde un único proveedor.",
  },
  {
    q: "¿Cuándo tiene sentido contratar una agencia generalista en lugar de una de paid media?",
    a: "Una agencia generalista tiene más sentido cuando: tu negocio está en fase inicial y necesitas construir presencia en múltiples canales simultáneamente, tu presupuesto es limitado y no justifica varios proveedores especializados, o tu objetivo principal es visibilidad de marca más que conversión directa. Para eCommerce D2C que prioriza escalar ventas de forma predecible a través de publicidad pagada, una agencia especializada en paid media casi siempre entrega mejores resultados.",
  },
  {
    q: "¿Puede una agencia generalista gestionar bien Meta Ads y Google Ads?",
    a: "Técnicamente sí, pero el nivel de especialización suele ser inferior. Los algoritmos de Meta y Google en 2026 son muy sofisticados — la diferencia entre un gestor que lleva 20 cuentas de 5 canales distintos y uno que lleva 8-10 cuentas exclusivamente de Meta Ads es significativa en términos de resultados. La agencia especializada tiene más datos, más patrones reconocidos y más metodología depurada para el canal específico.",
  },
  {
    q: "¿Qué resultado diferencial ofrece una agencia de paid media vs una generalista?",
    a: "En eCommerce D2C español 2026, la diferencia típica que observamos al auditar cuentas que vienen de agencias generalistas es: ROAS un 30-50% inferior al potencial del sector, falta de estructura full-funnel (solo campaña de conversión sin TOFU ni retargeting), configuración deficiente de píxel y CAPI (pérdida de señal del 20-40%), y testing creativo inexistente o anecdótico. Corregir estos problemas normalmente mejora el ROAS entre un 40% y un 80% en los primeros 3 meses.",
  },
  {
    q: "¿Puedo tener una agencia generalista para SEO y redes y una de paid media para los anuncios?",
    a: "Sí, y es una estructura común en empresas D2C con presupuesto suficiente. Requiere buena coordinación: las creatividades de paid media deben estar alineadas con el mensaje de marca que gestiona la agencia generalista, y los datos de paid media deben informar la estrategia de contenido orgánico. Si hay fricción entre agencias o falta de comunicación, la estrategia se fragmenta. En DayByDay podemos gestionar el paid media complementando a tu agencia de contenido o SEO actual.",
  },
];

const AgenciaPaidMediaVsGeneralistaPage = ({ openCalendly }) => (
  <BlogPostLayout
    title="Agencia de Paid Media Especializada vs Agencia de Marketing Generalista"
    description="Comparativa honesta entre agencia de paid media especializada y agencia de marketing generalista: diferencias técnicas, resultados esperados, modelos de costes y cuándo elegir cada opción."
    slug="agencia-paid-media-vs-agencia-marketing-generalista"
    datePublished="2026-03-11"
    dateModified="2026-03-11"
    readingTime="7 min"
    category="Estrategia"
    faqs={faqs}
    openCalendly={openCalendly}
  >
    <p className="text-white/70 leading-relaxed mb-6">
      Una de las decisiones más frecuentes que enfrentan los founders de eCommerce D2C en España es si contratar una agencia de marketing generalista (que gestione varios canales a la vez) o una agencia especializada en paid media. La respuesta depende de tu fase, tus objetivos y cómo priorizas el crecimiento. Aquí hacemos la comparativa honesta.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">La diferencia fundamental entre ambos modelos</h2>
    <p className="text-white/70 leading-relaxed mb-5">
      La diferencia no es de tamaño ni de precio — es de modelo de trabajo y profundidad técnica:
    </p>

    <div className="overflow-x-auto mb-8">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left py-3 pr-6 text-white/40 font-semibold text-xs uppercase tracking-wide w-1/3">Criterio</th>
            <th className="text-left py-3 pr-6 text-white/80 font-semibold text-xs uppercase tracking-wide w-1/3">Agencia Generalista</th>
            <th className="text-left py-3 text-[#de0015] font-semibold text-xs uppercase tracking-wide w-1/3">Agencia de Paid Media</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Canales cubiertos", "SEO, redes, contenido, diseño, email, ads", "Meta Ads, Google Ads, TikTok Ads"],
            ["Profundidad técnica en ads", "Media — el gestor lleva múltiples canales", "Alta — especialista exclusivo en paid"],
            ["Metodología de testing creativo", "Básica o anecdótica", "Sistemática y documentada"],
            ["Configuración técnica (píxel, CAPI)", "Frecuentemente deficiente", "Parte del proceso estándar"],
            ["Métricas de éxito", "Alcance, impresiones, me gustas", "ROAS real, CPA, LTV"],
            ["Estructura full-funnel", "Rara — suele ser solo una campaña", "TOFU/MOFU/BOFU diferenciado"],
            ["Uso de IA y automatización", "Variable — depende de la agencia", "Integrado en metodología"],
            ["Coste típico (honorarios)", "800€–2.000€/mes", "800€–2.500€/mes"],
          ].map(([crit, gen, paid]) => (
            <tr key={crit} className="border-b border-white/5">
              <td className="py-3 pr-6 text-white/50 text-xs">{crit}</td>
              <td className="py-3 pr-6 text-white/60 text-xs">{gen}</td>
              <td className="py-3 text-white/80 text-xs font-medium">{paid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Dónde pierdes dinero con una agencia generalista en paid media</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      No es que las agencias generalistas sean malas — es que la gestión de paid media en 2026 requiere un nivel de especialización que pocas agencias generalistas pueden cubrir con la misma calidad que los demás servicios que ofrecen. Los problemas más frecuentes que encontramos al auditar cuentas de clientes que venían de agencias generalistas:
    </p>

    <div className="space-y-3 mb-8">
      {[
        {
          problema: "Configuración técnica deficiente",
          impacto: "Sin Conversions API correctamente configurada, Meta pierde entre el 20% y el 40% de las señales de conversión. El algoritmo optimiza con datos incompletos y el ROAS baja de forma artificial.",
        },
        {
          problema: "Estructura de campañas plana",
          impacto: "Solo una campaña de conversión dirigida a audiencia fría. Sin TOFU para construir audiencias, sin retargeting para recuperar visitantes, sin diferenciación entre clientes nuevos y recurrentes.",
        },
        {
          problema: "Testing creativo inexistente",
          impacto: "Los mismos anuncios durante meses sin rotación sistemática. El ad fatigue dispara el CPM y baja el CTR — el rendimiento se deteriora progresivamente sin que la agencia lo gestione proactivamente.",
        },
        {
          problema: "Reporting basado en métricas de plataforma",
          impacto: "El ROAS reportado por Meta sobreatribuye un 20-35%. Si la agencia no cruza datos con Shopify, puede presentar resultados 'buenos' cuando en realidad el negocio no está siendo rentable.",
        },
        {
          problema: "Estrategia de pujas por defecto",
          impacto: "Dejar la puja en 'automático' siempre no es la opción correcta para todos los objetivos. En cuentas donde se necesita controlar el CPA (margen ajustado), la puja automática puede disparar los costes.",
        },
      ].map(({ problema, impacto }) => (
        <div key={problema} className="bg-[#1a1616] border border-white/8 rounded-xl p-4">
          <p className="font-bold text-sm text-[#de0015] mb-1.5">{problema}</p>
          <p className="text-white/60 text-xs leading-relaxed">{impacto}</p>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">¿Cuándo tiene sentido una agencia generalista?</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Ser honesto en esto: hay casos donde una agencia generalista es la opción más racional.
    </p>
    <ul className="space-y-2 mb-6">
      {[
        "Estás en fase de lanzamiento y necesitas construir presencia en múltiples canales simultáneamente con presupuesto limitado",
        "Tu objetivo principal es visibilidad de marca a largo plazo, no conversión directa a corto plazo",
        "Tu presupuesto de inversión en medios es inferior a 2.000€/mes — no justifica un especialista en paid media exclusivo",
        "No tienes volumen suficiente para tener datos estadísticamente significativos en paid media (eCommerce muy nicho o de alta gama con pocas ventas mensuales)",
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="text-white/30 flex-shrink-0 mt-0.5">→</span>
          <span className="text-white/70 text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
    <p className="text-white/70 leading-relaxed mb-6">
      Para todo lo demás — eCommerce con inversión mensual superior a 3.000€ en medios y objetivo de escalar ventas de forma predecible — la agencia especializada en paid media casi siempre genera mejor retorno.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">El modelo híbrido: paid media especializado + SEO/contenido generalista</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      La estructura que más funciona para eCommerce D2C con facturación superior a 300K€/año en España en 2026 es:
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      <div className="bg-[#1a1616] border border-[#de0015]/20 rounded-xl p-5">
        <h3 className="font-bold text-sm text-[#de0015] mb-3">Canal 1: Paid Media (agencia especializada)</h3>
        <ul className="space-y-1.5">
          {[
            "Meta Ads (Facebook + Instagram)",
            "Google Shopping + Performance Max",
            "TikTok Ads (si hay fit con la audiencia)",
            "Automatización de retargeting y secuencias de email",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-[#de0015] text-xs">✓</span>
              <span className="text-white/60 text-xs">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-[#1a1616] border border-white/8 rounded-xl p-5">
        <h3 className="font-bold text-sm mb-3">Canal 2: Orgánico (agencia o in-house)</h3>
        <ul className="space-y-1.5">
          {[
            "SEO técnico y de contenido",
            "Redes sociales orgánicas (contenido de marca)",
            "Newsletter y email marketing de fidelización",
            "WhatsApp Business y comunidad",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-white/30 text-xs">✓</span>
              <span className="text-white/60 text-xs">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <p className="text-white/70 leading-relaxed mb-6">
      En DayByDay nos centramos en el Canal 1. Si ya tienes una agencia o equipo interno para el Canal 2, podemos colaborar sin fricción — aportamos los datos del paid media que informan la estrategia de contenido y viceversa.
    </p>

    <div className="bg-[#1a1616] border border-white/10 rounded-2xl p-6 mb-8 text-center">
      <p className="text-white/60 text-sm mb-4">
        ¿Quieres ver si tu estrategia de paid media actual tiene margen de mejora?
      </p>
      <button
        onClick={openCalendly}
        className="bg-[#de0015] hover:bg-red-600 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
      >
        Solicitar auditoría gratuita →
      </button>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Artículos relacionados</h2>
    <ul className="space-y-2 mb-4">
      {[
        ["/blog/agencia-vs-inhouse-vs-ia", "Agencia vs In-House vs IA: desglose honesto de costes y resultados"],
        ["/blog/mejores-agencias-paid-media-espana-ecommerce-d2c", "Mejores agencias de paid media en España para eCommerce D2C (2026)"],
        ["/blog/top-agencias-marketing-digital-espana-que-mirar", "Top agencias de marketing digital en España: qué mirar antes de contratar"],
        ["/blog/cuanto-cuesta-agencia-paid-media-espana-precios-2026", "Cuánto cuesta una agencia de paid media en España: guía de precios 2026"],
      ].map(([to, label]) => (
        <li key={to}>
          <Link to={to} className="text-[#de0015] hover:text-red-400 text-sm underline">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </BlogPostLayout>
);

export default AgenciaPaidMediaVsGeneralistaPage;
