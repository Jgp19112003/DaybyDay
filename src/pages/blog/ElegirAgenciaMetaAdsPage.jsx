import { Link } from "react-router-dom";
import BlogPostLayout from "../../components/BlogPostLayout";

const faqs = [
  {
    q: "¿Qué debe saber hacer una agencia de Meta Ads para marcas D2C?",
    a: "Una agencia de Meta Ads especializada en D2C debe dominar: estructura de campañas full-funnel (prospección, retargeting, retención), estrategias de puja (Cost Cap, Bid Cap, ROAS mínimo), optimización creativa sistemática (testing de formatos, UGC, vídeo corto), configuración correcta del píxel y de las conversions API para minimizar pérdida de señal, y análisis de atribución que cruce datos de plataforma con datos reales de Shopify o tu eCommerce.",
  },
  {
    q: "¿Cómo sé si una agencia de Meta Ads tiene experiencia real?",
    a: "Pide que te muestren: casos de éxito en tu sector con métricas verificables (no capturas de pantalla editadas), acceso a ver su configuración del Business Manager en cuentas similares, y que te expliquen su proceso de testing creativo. Una agencia con experiencia real puede explicar exactamente por qué toma cada decisión de optimización — no se refugia en 'el algoritmo de Meta es una caja negra'.",
  },
  {
    q: "¿Cuánto tiempo tarda una agencia de Meta Ads en ver resultados con mi cuenta?",
    a: "Las primeras 2-4 semanas son de diagnóstico y configuración (estructura, píxel, audiencias semillas). Las semanas 4-8 son de aprendizaje del algoritmo — necesitas llegar a 50-100 conversiones semanales para que Meta optimice bien. Los resultados estables y escalables aparecen entre las semanas 8-12. Si una agencia promete resultados definitivos antes de las 6 semanas, está siendo deshonesta sobre cómo funciona el algoritmo.",
  },
  {
    q: "¿Qué formatos de anuncio funcionan mejor en Meta Ads para eCommerce D2C en 2026?",
    a: "En 2026 los formatos con mejor rendimiento para eCommerce D2C son: (1) vídeo corto tipo UGC (15-30 segundos, nativo para Reels/Stories) — menor CPM y mayor CTR que el creativo de marca estático; (2) carrusel de producto con imagen real del producto en uso — ideal para retargeting; (3) imagen estática con copy directo tipo 'problema-solución' — funciona en feeds de personas que no conocen la marca. El creativo es el factor de mayor impacto en el rendimiento — más que las audiencias o las pujas.",
  },
  {
    q: "¿Debo darle acceso total a mi Business Manager a una agencia?",
    a: "Sí, pero de forma segura. La agencia debe gestionar tu cuenta desde TU Business Manager (tú eres el propietario), no desde el suyo. Nunca cedas la propiedad del Business Manager — solo añade a la agencia como 'socios' con los permisos necesarios para gestionar las cuentas de anuncios y páginas. Así, si en algún momento cambias de agencia, conservas todo el historial de la cuenta, los píxeles instalados y los datos de audiencias personalizadas.",
  },
];

const ElegirAgenciaMetaAdsPage = ({ openCalendly }) => (
  <BlogPostLayout
    title="Cómo Elegir una Agencia de Anuncios en Meta Ads para tu Marca D2C"
    description="Guía completa para elegir la agencia de Meta Ads correcta para tu marca D2C: qué habilidades técnicas debe tener, qué preguntar, señales de alerta y cómo comparar propuestas."
    slug="elegir-agencia-anuncios-meta-ads-d2c"
    datePublished="2026-03-11"
    dateModified="2026-03-11"
    readingTime="8 min"
    category="Meta Ads"
    faqs={faqs}
    openCalendly={openCalendly}
  >
    <p className="text-white/70 leading-relaxed mb-6">
      Para una marca D2C, Meta Ads (Facebook + Instagram) sigue siendo el canal de paid media con mayor alcance y las mejores opciones de prospección en 2026. Pero el resultado no depende tanto del canal como de quién lo gestiona. Elegir la agencia de Meta Ads correcta puede marcar la diferencia entre un ROAS de 2x que no cubre costes y uno de 4x que permite escalar.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Qué habilidades técnicas debe tener una agencia de Meta Ads D2C</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      No todas las agencias que dicen gestionar Meta Ads tienen el mismo nivel técnico. Estas son las habilidades que marcan la diferencia en eCommerce D2C:
    </p>

    <div className="space-y-4 mb-8">
      {[
        {
          skill: "Configuración avanzada del píxel y Conversions API",
          detail: "El píxel de Meta por sí solo pierde entre el 20% y el 40% de los eventos de conversión desde los cambios de privacidad de iOS. Una agencia competente implementa la Conversions API (CAPI) server-side para recuperar esa señal perdida. Sin CAPI correctamente configurada, el algoritmo de Meta optimiza con datos incompletos y el rendimiento se resiente.",
        },
        {
          skill: "Estructura de campañas full-funnel",
          detail: "TOFU (prospección a audiencia fría), MOFU (retargeting a visitantes sin compra) y BOFU (retargeting a abandonos de carrito, upsell a clientes activos). Cada fase necesita creatividades diferentes, pujas diferentes y KPIs diferentes. Una agencia que solo optimiza para conversión directa desde audiencia fría suele tener resultados más bajos.",
        },
        {
          skill: "Testing creativo sistemático",
          detail: "El creativo es el factor de mayor impacto en el rendimiento de Meta Ads en 2026. Una agencia competente tiene un proceso de testing estructurado: prueba de hooks (primeros 3 segundos del vídeo), ángulos de copy, formatos (UGC vs estático vs carrusel) y CTAs. No depende de 'intuición creativa' sino de datos.",
        },
        {
          skill: "Análisis de atribución honesto",
          detail: "Meta sobreatribuye conversiones entre un 20% y un 35% respecto al ROAS real de negocio. Una buena agencia cruza los datos de Meta con los datos reales de Shopify o tu eCommerce para saber qué ROAS real están consiguiendo — no el que reporta la plataforma.",
        },
        {
          skill: "Gestión de pujas avanzada",
          detail: "Saber cuándo usar puja automática, Cost Cap, Bid Cap o ROAS mínimo según el objetivo y el estado de la cuenta. El uso incorrecto de las estrategias de puja es una de las causas más frecuentes de ineficiencia en cuentas de Meta Ads.",
        },
      ].map(({ skill, detail }) => (
        <div key={skill} className="bg-[#1a1616] border border-white/8 rounded-xl p-5">
          <h3 className="font-bold text-sm text-white mb-2">{skill}</h3>
          <p className="text-white/60 text-sm leading-relaxed">{detail}</p>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Proceso para elegir tu agencia de Meta Ads en 3 pasos</h2>

    <ol className="space-y-6 mb-8 list-none">
      {[
        {
          step: "1. Preselecciona 3-4 agencias con casos verificables en tu sector",
          desc: "Busca agencias que muestren resultados documentados en sectores similares al tuyo (ticket medio similar, tipo de producto similar). Un caso de éxito en moda no aplica directamente a suplementos deportivos — los benchmarks de CPA, ROAS y CPM son completamente distintos. Pide acceso a ver los datos en vivo o en informes verificables, no solo screenshots editados.",
        },
        {
          step: "2. Evalúa con una auditoría de tu cuenta actual",
          desc: "Cualquier agencia seria debería ofrecerte una auditoría gratuita de tu cuenta actual antes de proponerte nada. Esa auditoría revela su nivel técnico: si solo miran el ROAS reportado por Meta o si analizan la configuración del píxel, la estructura de campañas, el testing creativo y la atribución. Una auditoría superficial = agencia superficial.",
        },
        {
          step: "3. Evalúa el modelo contractual y de reporting",
          desc: "Asegúrate de que: (1) la cuenta de anuncios es tuya y la conservas si cambias de agencia, (2) el reporting incluye datos reales de negocio (ventas en Shopify), no solo métricas de plataforma, (3) los honorarios están claros y no hay incentivos perversos (agencias que cobran solo % sobre inversión tienen incentivo para que gastes más, no para que conviertas más).",
        },
      ].map(({ step, desc }) => (
        <li key={step} className="bg-[#1a1616] border border-white/8 rounded-xl p-5">
          <p className="font-bold text-sm mb-2">{step}</p>
          <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
        </li>
      ))}
    </ol>

    <h2 className="text-2xl font-black mt-10 mb-4">Señales de alerta específicas en agencias de Meta Ads</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      {[
        { icon: "🚩", text: "Reportan solo el ROAS de Meta sin cruzar con datos de Shopify" },
        { icon: "🚩", text: "No mencionan la Conversions API en su propuesta técnica" },
        { icon: "🚩", text: "Trabajan desde su propio Business Manager (la cuenta no es tuya)" },
        { icon: "🚩", text: "Su proceso de testing creativo es 'probamos y vemos qué funciona'" },
        { icon: "🚩", text: "No pueden explicar la diferencia entre Cost Cap y Bid Cap" },
        { icon: "🚩", text: "Prometen ROAS de 7x-10x sin haber auditado tu cuenta" },
        { icon: "🚩", text: "Solo gestionan campañas de conversión, sin estrategia full-funnel" },
        { icon: "🚩", text: "Contratos de 12 meses sin cláusula de salida por bajo rendimiento" },
      ].map(({ icon, text }) => (
        <div key={text} className="flex items-start gap-3 bg-[#1a1616] border border-white/8 rounded-xl p-4">
          <span className="text-lg flex-shrink-0">{icon}</span>
          <p className="text-white/60 text-sm leading-relaxed">{text}</p>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Cómo trabajamos en DayByDay con cuentas de Meta Ads D2C</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      En DayByDay Consulting nos especializamos en Meta Ads para marcas D2C y eCommerce B2C. Nuestro proceso incluye: configuración correcta del píxel + CAPI desde el primer día, estructura full-funnel (TOFU/MOFU/BOFU) con creatividades específicas para cada fase, testing sistemático de creatividades con rotación según rendimiento, y reporting que cruza datos de Meta con datos reales de Shopify.
    </p>
    <p className="text-white/70 leading-relaxed mb-4">
      Casos documentados:{" "}
      <Link to="/resultados" className="text-[#de0015] hover:text-red-400 underline">
        Garett España (CPA 4,8€, 14.936 clicks, 661 inicios de pago)
      </Link>{" "}
      y{" "}
      <Link to="/resultados" className="text-[#de0015] hover:text-red-400 underline">
        Evercreate × Universidad privada (253.679€ gestionados, CTR 10,35% en Google Ads)
      </Link>.
    </p>

    <div className="bg-[#1a1616] border border-white/10 rounded-2xl p-6 mb-8 text-center">
      <p className="text-white/60 text-sm mb-4">
        ¿Quieres que revisemos tu cuenta actual de Meta Ads y te digamos qué está fallando?
      </p>
      <button
        onClick={openCalendly}
        className="bg-[#de0015] hover:bg-red-600 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
      >
        Pedir auditoría gratuita →
      </button>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Artículos relacionados</h2>
    <ul className="space-y-2 mb-4">
      {[
        ["/blog/estrategia-full-funnel-meta-ads-d2c", "Estrategia Full-Funnel de Meta Ads para marcas D2C — Guía completa"],
        ["/blog/estrategias-puja-meta-ads", "Estrategias de puja en Meta Ads 2026: cuál elegir según tu objetivo"],
        ["/blog/ugc-meta-ads", "Cómo usar UGC para potenciar tus Meta Ads y reducir el CPM"],
        ["/blog/mejores-agencias-paid-media-espana-ecommerce-d2c", "Mejores agencias de paid media en España para eCommerce D2C (2026)"],
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

export default ElegirAgenciaMetaAdsPage;
