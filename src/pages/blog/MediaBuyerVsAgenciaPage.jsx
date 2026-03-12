import { Link } from "react-router-dom";
import BlogPostLayout from "../../components/BlogPostLayout";

const faqs = [
  {
    q: "¿Qué es un media buyer y en qué se diferencia de una agencia?",
    a: "Un media buyer es un profesional especializado en la compra de espacios publicitarios y la gestión de campañas de paid media (Meta Ads, Google Ads, TikTok Ads). Trabaja de forma independiente o como parte de un equipo. Una agencia de paid media es una empresa con varios perfiles (estrategas, gestores de cuenta, creativos, analistas) que trabajan de forma coordinada para gestionar cuentas. La diferencia principal: el media buyer ofrece más flexibilidad y puede ser más económico; la agencia ofrece más recursos, mayor capacidad de escala y proceso más estructurado.",
  },
  {
    q: "¿Cuándo necesita un eCommerce D2C un media buyer propio en lugar de una agencia?",
    a: "Un media buyer propio (in-house) tiene sentido cuando: tu inversión mensual en medios supera los 20.000-30.000€ (el ahorro en honorarios de agencia justifica el salario), cuando la categoría es muy específica y requiere conocimiento de nicho profundo, o cuando necesitas integración total con el equipo de marketing interno. Para la mayoría de eCommerce D2C con inversión entre 5.000-20.000€/mes, una agencia especializada ofrece mejor relación calidad-precio porque tenés acceso a un equipo completo por la fracción del coste de un empleado.",
  },
  {
    q: "¿Qué perfil técnico debe tener un buen media buyer para D2C?",
    a: "Un media buyer efectivo para eCommerce D2C debe dominar: configuración y optimización de Meta Ads (píxel, CAPI, audiencias, estrategias de puja), Google Shopping y Performance Max, análisis de atribución (cruzar datos de plataforma con Shopify), testing creativo sistemático y lectura de métricas de negocio (ROAS real, CPA, LTV, MER). En 2026, también es valorable el conocimiento de IA aplicada a la optimización de campañas y automatización de flujos de marketing.",
  },
  {
    q: "¿Cuánto cuesta contratar un media buyer vs una agencia en España?",
    a: "Un media buyer senior con experiencia real en D2C en España tiene un coste de entre 2.500€ y 4.500€ brutos/mes (más costes sociales — el coste real para la empresa ronda los 3.500-6.500€/mes). Una agencia de paid media especializada para el mismo volumen de inversión (5.000-15.000€/mes) cobra entre 1.000-2.500€/mes en honorarios. La ventaja económica de la agencia es clara hasta niveles de inversión elevados, además de que la agencia aporta equipo completo (no solo un perfil).",
  },
  {
    q: "¿Puede una agencia funcionar como media buyer externo?",
    a: "Sí. Muchas agencias de paid media actúan en la práctica como el equipo de media buying externalizado de sus clientes, con integración profunda en los procesos internos del cliente (acceso directo al Business Manager, comunicación diaria, participación en reuniones de estrategia). En DayByDay trabajamos de esta forma con varios clientes: somos su equipo de paid media externo, con la ventaja de que tienen acceso a un equipo completo con múltiples especialidades en lugar de un solo profesional.",
  },
];

const MediaBuyerVsAgenciaPage = ({ openCalendly }) => (
  <BlogPostLayout
    title="Media Buyer vs Agencia de Publicidad: Qué Necesita tu eCommerce D2C"
    description="Comparativa completa entre contratar un media buyer propio o trabajar con una agencia de paid media para eCommerce D2C. Costes reales, ventajas, desventajas y cuándo tiene sentido cada opción."
    slug="media-buyer-vs-agencia-ecommerce-d2c"
    datePublished="2026-03-11"
    dateModified="2026-03-11"
    readingTime="8 min"
    category="Estrategia"
    faqs={faqs}
    openCalendly={openCalendly}
  >
    <p className="text-white/70 leading-relaxed mb-6">
      Cuando un eCommerce D2C empieza a crecer y necesita profesionalizar su paid media, la pregunta surge inevitablemente: ¿contrato un media buyer propio o trabajo con una agencia? No hay una respuesta universal — depende del volumen de inversión, la fase del negocio y los recursos disponibles. Esta guía hace la comparativa completa.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Qué es un media buyer y qué hace</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Un <strong className="text-white">media buyer</strong> es el profesional especializado en planificación, compra y optimización de espacios publicitarios en plataformas digitales. Su trabajo incluye:
    </p>
    <ul className="space-y-2 mb-6">
      {[
        "Diseño de la estrategia de campañas (qué plataformas, qué audiencias, qué objetivos)",
        "Configuración técnica de las cuentas publicitarias (píxel, CAPI, catálogos, audiencias personalizadas)",
        "Gestión diaria de campañas: ajuste de pujas, rotación de creatividades, escalado de presupuesto",
        "Análisis de rendimiento y optimización continua basada en datos",
        "Coordinación con el equipo creativo para producir los assets publicitarios necesarios",
        "Reporting con métricas de negocio reales (ROAS, CPA, MER, LTV)",
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="text-[#de0015] mt-0.5 flex-shrink-0 text-xs">→</span>
          <span className="text-white/70 text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
    <p className="text-white/70 leading-relaxed mb-4">
      La diferencia entre un media buyer y un "community manager que también lanza anuncios" es enorme. Un media buyer de D2C con experiencia real maneja análisis de atribución, configuración avanzada de píxel y CAPI, estrategias de puja específicas para cada objetivo y testing creativo sistemático. No es un perfil generalista.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Comparativa directa: Media buyer propio vs Agencia</h2>

    <div className="overflow-x-auto mb-8">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left py-3 pr-4 text-white/40 font-semibold text-xs uppercase tracking-wide w-1/3">Factor</th>
            <th className="text-left py-3 pr-4 text-white/40 font-semibold text-xs uppercase tracking-wide w-1/3">Media Buyer Propio</th>
            <th className="text-left py-3 text-[#de0015] font-semibold text-xs uppercase tracking-wide w-1/3">Agencia Especializada</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Coste mensual", "3.500-6.500€ (coste total empresa)", "800-2.500€ (honorarios)"],
            ["Dedicación exclusiva", "100% de su tiempo", "Comparte tiempo con otras cuentas"],
            ["Conocimiento del negocio", "Profundo con el tiempo", "Medio — necesita onboarding"],
            ["Capacidad técnica", "Un solo perfil", "Equipo multidisciplinar"],
            ["Escala de trabajo", "Limitada — un profesional", "Alta — varios gestores"],
            ["Creatividades", "Coordina con equipo interno", "Coordina o puede producir"],
            ["Flexibilidad de canales", "Especializado en lo que sabe", "Cobertura de varios canales"],
            ["Riesgo de salida", "Alto — dependencia de persona", "Bajo — agencia tiene continuidad"],
            ["Tiempo de arranque", "2-3 meses (contratación)", "1-2 semanas"],
            ["Break-even económico", "Razonable >20.000€/mes inversión", "Razonable desde 3.000€/mes"],
          ].map(([factor, mb, ag]) => (
            <tr key={factor} className="border-b border-white/5">
              <td className="py-3 pr-4 text-white/50 text-xs">{factor}</td>
              <td className="py-3 pr-4 text-white/60 text-xs">{mb}</td>
              <td className="py-3 text-white/80 text-xs font-medium">{ag}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Análisis de costes: cuándo tiene sentido cada opción</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      <div className="bg-[#1a1616] border border-white/8 rounded-xl p-5">
        <h3 className="font-bold text-sm mb-4">Media Buyer Propio tiene sentido cuando:</h3>
        <ul className="space-y-2">
          {[
            "Inversión mensual en medios >20.000-30.000€",
            "El paid media es el centro de tu estrategia de crecimiento",
            "Necesitas integración total con equipo interno",
            "Categoría muy específica con conocimiento de nicho",
            "Quieres construir capacidades propias a largo plazo",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-white/30 text-xs mt-0.5">✓</span>
              <span className="text-white/60 text-xs leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 p-3 bg-white/5 rounded-lg">
          <p className="text-white/40 text-xs">Coste típico:</p>
          <p className="text-white font-bold">4.500-6.500€/mes</p>
          <p className="text-white/40 text-xs">(salario bruto + costes sociales)</p>
        </div>
      </div>
      <div className="bg-[#1a1616] border border-[#de0015]/20 rounded-xl p-5">
        <h3 className="font-bold text-sm mb-4 text-[#de0015]">Agencia Especializada tiene sentido cuando:</h3>
        <ul className="space-y-2">
          {[
            "Inversión mensual entre 3.000€ y 25.000€",
            "Necesitas resultados rápidos sin meses de contratación",
            "Quieres equipo completo (estrategia + gestión + analítica)",
            "Valoras la metodología y proceso documentado",
            "Prefieres escalar cuando funciona, no comprometerte antes",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-[#de0015] text-xs mt-0.5">✓</span>
              <span className="text-white/60 text-xs leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 p-3 bg-[#de0015]/10 rounded-lg">
          <p className="text-white/40 text-xs">Coste típico:</p>
          <p className="text-white font-bold">1.000-2.500€/mes</p>
          <p className="text-white/40 text-xs">(honorarios de agencia)</p>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">La tercera opción: agencia como media buyer externo integrado</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Existe un modelo intermedio que cada vez más marcas D2C adoptan en España: trabajar con una agencia de paid media como si fuera el equipo de media buying externo del negocio — con integración profunda, comunicación diaria y acceso a los mismos datos que tendría un empleado interno.
    </p>
    <p className="text-white/70 leading-relaxed mb-4">
      En este modelo, la agencia actúa como una extensión del equipo, no como un proveedor externo:
    </p>
    <ul className="space-y-2 mb-6">
      {[
        "Acceso directo al Business Manager y cuentas de anuncios del cliente",
        "Participación en reuniones de estrategia del negocio",
        "Coordinación directa con el equipo creativo para producir assets",
        "Reporting en tiempo real integrado con los dashboards del negocio",
        "Disponibilidad para responder a cambios rápidos (lanzamientos, stock, campañas de temporada)",
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
          <span className="text-white/70 text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
    <p className="text-white/70 leading-relaxed mb-6">
      Es el modelo que aplicamos en DayByDay para nuestros clientes de mayor volumen. Si quieres entender cómo funciona en la práctica, puedes ver{" "}
      <Link to="/como-trabajamos" className="text-[#de0015] hover:text-red-400 underline">
        nuestra metodología de trabajo
      </Link>.
    </p>

    <div className="bg-[#1a1616] border border-white/10 rounded-2xl p-6 mb-8 text-center">
      <p className="text-white/60 text-sm mb-4">
        ¿Quieres explorar si encajamos como equipo de paid media para tu D2C?
      </p>
      <button
        onClick={openCalendly}
        className="bg-[#de0015] hover:bg-red-600 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
      >
        Hablar con nosotros →
      </button>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Artículos relacionados</h2>
    <ul className="space-y-2 mb-4">
      {[
        ["/blog/agencia-vs-inhouse-vs-ia", "Agencia vs In-House vs IA: desglose honesto de costes y resultados"],
        ["/blog/cuanto-cuesta-agencia-paid-media-espana-precios-2026", "Cuánto cuesta una agencia de paid media en España: guía de precios 2026"],
        ["/blog/mejores-agencias-paid-media-espana-ecommerce-d2c", "Mejores agencias de paid media en España para eCommerce D2C (2026)"],
        ["/blog/metodologia-daybyday-ia-automatizacion-paid-media", "La Metodología DayByDay: IA + Automatización + Paid Media"],
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

export default MediaBuyerVsAgenciaPage;
