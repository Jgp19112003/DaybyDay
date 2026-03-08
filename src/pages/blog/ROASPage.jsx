import { Link } from "react-router-dom";
import BlogPostLayout from "../../components/BlogPostLayout";

const faqs = [
  {
    q: "¿Qué ROAS es bueno en Meta Ads?",
    a: "Un ROAS de 3x (3€ de ingresos por cada 1€ invertido) se considera el punto de equilibrio mínimo para la mayoría de eCommerce con márgenes del 30-40%. Para ser rentable con márgenes más ajustados necesitas un ROAS de 4x o superior. En DayByDay hemos conseguido ROAS superiores a 5x en sectores como moda, salud y lifestyle.",
  },
  {
    q: "¿Por qué el ROAS de Meta Ads baja con el tiempo?",
    a: "El ROAS cae principalmente por tres razones: fatiga creativa (los usuarios ya han visto el anuncio demasiadas veces), saturación de audiencia (agotamiento del público objetivo disponible) o cambios en la competencia que suben el CPM. La solución es renovar creatividades cada 2-3 semanas, ampliar audiencias y ajustar la estrategia full-funnel.",
  },
  {
    q: "¿Cuánto tiempo tarda en subir el ROAS en Meta Ads?",
    a: "Meta Ads necesita un período de aprendizaje de al menos 50 eventos de optimización (compras o añadir al carrito) antes de estabilizar el algoritmo. Esto suele ocurrir entre la segunda y tercera semana de campaña activa. El ROAS mejora de forma sostenida a partir del segundo mes, cuando los datos son suficientes para optimizar con precisión.",
  },
];

const ROASPage = ({ openCalendly }) => (
  <BlogPostLayout
    title="Qué es el ROAS y cómo mejorarlo en Meta Ads"
    description="El ROAS (Return on Ad Spend) es la métrica más importante en publicidad digital. Te explicamos qué significa, cómo calcularlo y qué hacer para mejorarlo en tus campañas de Meta Ads."
    slug="que-es-roas-meta-ads"
    datePublished="2026-03-08"
    readingTime="6 min"
    category="Meta Ads"
    faqs={faqs}
    openCalendly={openCalendly}
  >
    <h2 className="text-2xl font-black mt-10 mb-4">¿Qué es el ROAS?</h2>
    <p className="text-white/70 leading-relaxed mb-5">
      El ROAS (Return on Ad Spend, o retorno sobre la inversión publicitaria) es la métrica que mide cuántos euros de ingresos genera cada euro invertido en publicidad. Es el indicador más directo de la rentabilidad de tus campañas.
    </p>
    <div className="bg-[#1a1616] border border-white/8 rounded-xl p-5 mb-6">
      <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Fórmula</p>
      <p className="font-mono text-white text-sm">ROAS = Ingresos atribuidos ÷ Gasto publicitario</p>
      <p className="text-white/50 text-xs mt-2">Ejemplo: 15.000€ de ingresos ÷ 3.000€ invertidos = ROAS 5x</p>
    </div>
    <p className="text-white/70 leading-relaxed mb-5">
      Un ROAS de 5x significa que por cada euro que inviertes en Meta Ads, tu negocio genera 5 euros de ingresos. Es diferente al ROI (que tiene en cuenta todos los costes del negocio), pero es el KPI más usado para evaluar el rendimiento de las campañas de paid media en tiempo real.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">¿Qué ROAS necesitas para ser rentable?</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      El ROAS mínimo rentable depende de tu margen bruto. La fórmula es sencilla: si tu margen es del 40%, necesitas un ROAS mínimo de 2,5x para no perder dinero (sin contar costes fijos). Para tener beneficio real, el ROAS objetivo suele estar entre 3x y 5x según el sector.
    </p>
    <div className="grid grid-cols-3 gap-3 mb-6">
      {[
        { margen: "25%", roas: "4x mínimo", color: "text-red-400" },
        { margen: "35%", roas: "3x mínimo", color: "text-yellow-400" },
        { margen: "50%", roas: "2x mínimo", color: "text-green-400" },
      ].map(({ margen, roas, color }) => (
        <div key={margen} className="bg-[#1a1616] border border-white/8 rounded-xl p-4 text-center">
          <div className="text-white/40 text-xs mb-1">Margen {margen}</div>
          <div className={`font-bold text-sm ${color}`}>{roas}</div>
        </div>
      ))}
    </div>
    <p className="text-white/70 leading-relaxed mb-5">
      En eCommerce B2C con Shopify, los benchmarks de ROAS varían mucho por sector: moda y accesorios suelen estar entre 3x-5x, mientras que electrónica (márgenes más ajustados) necesita 6x-8x para ser rentable. Lo importante no es compararse con el sector sino conocer exactamente tu punto de equilibrio.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Por qué baja el ROAS y cómo arreglarlo</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      El ROAS no es una métrica estática. Sube y baja por múltiples factores, y entender cuál está fallando es el primer paso para optimizarlo.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">1. Fatiga creativa</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      Es la causa más frecuente de caída de ROAS. Cuando los usuarios ya han visto el mismo anuncio demasiadas veces, la tasa de clics cae, el CPM sube y el algoritmo deja de optimizar bien. En DayByDay producimos más de 30 variaciones de creatividades por ciclo (2-3 semanas) para evitar la fatiga y mantener el rendimiento.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">2. Estructura de campañas deficiente</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      Un error habitual es tener demasiadas campañas con presupuesto fragmentado, lo que impide que el algoritmo de Meta acumule suficientes datos para optimizar. La estructura recomendada en 2026 es centralizar la inversión en Advantage+ Shopping Campaigns para prospección y usar campañas manuales separadas para retargeting.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">3. Landing page con alta tasa de rebote</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      Un buen anuncio lleva tráfico cualificado, pero si la landing page no convierte, el ROAS cae aunque el CPM y el CTR sean buenos. Velocidad de carga, claridad del mensaje y fricción en el checkout son los puntos críticos a revisar.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">4. Estacionalidad y competencia</h3>
    <p className="text-white/70 leading-relaxed mb-5">
      En períodos de alta demanda (Black Friday, Navidad, vuelta al cole) el CPM sube porque hay más anunciantes compitiendo por las mismas impresiones. El ROAS cae aunque tus anuncios y tu web funcionen igual. La solución es preparar creatividades y presupuesto con antelación para captar demanda temprana antes de que la subasta se sature.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Cómo mejorar el ROAS en Meta Ads: checklist</h2>
    <div className="space-y-3 mb-6">
      {[
        "Revisa la frecuencia de tus anuncios — si supera 3, tienes fatiga creativa",
        "Produce nuevas creatividades cada 2-3 semanas mínimo",
        "Consolida campañas: menos campañas con más presupuesto por campaña",
        "Activa Advantage+ Shopping para prospección fría",
        "Separa retargeting (7d/14d) en campañas independientes",
        "Mejora la velocidad de carga de tu ficha de producto (objetivo <2s)",
        "Simplifica el checkout — elimina campos innecesarios",
        "Revisa el píxel de Meta — asegúrate de que registra todas las compras",
        "Ajusta el período de atribución (usa 7d clic + 1d view para eCommerce)",
      ].map((item) => (
        <div key={item} className="flex items-start gap-3 text-sm text-white/70">
          <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
          <span>{item}</span>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Caso real: ROAS con CPA de 4,8€ en Garett España</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Garett España es un eCommerce B2C de accesorios tecnológicos. Cuando llegaron a DayByDay, sus campañas de Meta Ads tenían un CPA alto y un ROAS que no justificaba la inversión.
    </p>
    <div className="bg-[#1a1616] border border-white/8 rounded-xl p-6 mb-5">
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: "Inversión Meta Ads", value: "3.179 €" },
          { label: "Clicks generados", value: "14.936" },
          { label: "Inicios de pago", value: "661" },
          { label: "CPA conseguido", value: "4,8 €" },
        ].map(({ label, value }) => (
          <div key={label}>
            <div className="text-white/40 text-xs uppercase tracking-wider mb-1">{label}</div>
            <div className="font-bold text-white">{value}</div>
          </div>
        ))}
      </div>
    </div>
    <p className="text-white/70 leading-relaxed mb-5">
      La clave fue reestructurar las campañas con una estrategia full-funnel clara, producir más de 30 variaciones creativas por ciclo y mover la prospección a Advantage+. El CPA cayó a 4,8€ y los inicios de pago se multiplicaron. Si quieres aplicar esta estrategia en tu eCommerce, <Link to="/servicios/meta-ads" className="text-white underline underline-offset-2 hover:text-white/80">consulta nuestro servicio de gestión de Meta Ads</Link>.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">ROAS vs otras métricas: cuándo usar cada una</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      El ROAS es el indicador principal en eCommerce, pero no es la única métrica que importa. En función del modelo de negocio, estas son las métricas complementarias que debes seguir:
    </p>
    <div className="space-y-3 mb-6">
      {[
        { metrica: "CPA", uso: "eCommerce y lead gen — coste por venta o contacto" },
        { metrica: "CAC", uso: "Negocio en general — coste total por cliente nuevo incluyendo todos los costes" },
        { metrica: "LTV", uso: "Para evaluar si el CAC está justificado a largo plazo" },
        { metrica: "CPL", uso: "Generación de leads — coste por contacto cualificado" },
      ].map(({ metrica, uso }) => (
        <div key={metrica} className="flex items-start gap-3 text-sm">
          <span className="font-bold text-white w-12 flex-shrink-0">{metrica}</span>
          <span className="text-white/60">{uso}</span>
        </div>
      ))}
    </div>
    <p className="text-white/70 leading-relaxed">
      Si quieres profundizar en estos términos, consulta nuestro <Link to="/glosario" className="text-white underline underline-offset-2 hover:text-white/80">glosario de marketing digital</Link>, donde encontrarás definiciones claras de más de 30 términos clave.
    </p>
  </BlogPostLayout>
);

export default ROASPage;
