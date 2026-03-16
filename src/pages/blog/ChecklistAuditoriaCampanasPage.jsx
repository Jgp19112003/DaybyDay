import { Link } from "react-router-dom";
import BlogPostLayout from "../../components/BlogPostLayout";

const faqs = [
  {
    q: "¿Qué es una auditoría de campañas de paid media?",
    a: "Una auditoría de paid media es un análisis sistemático de todas las campañas activas para identificar problemas de estructura, segmentación, creatividades, pujas y tracking. El objetivo es encontrar por qué los resultados no son los esperados y definir un plan de acción concreto para mejorar el ROAS o reducir el CPA.",
  },
  {
    q: "¿Cuánto tiempo lleva hacer una auditoría de Meta Ads?",
    a: "Una auditoría básica de Meta Ads se puede hacer en 2-4 horas si tienes acceso completo a la cuenta. Una auditoría completa que incluya análisis de creatividades, audiencias, estructura de campañas, tracking y comparativa con benchmarks del sector puede llevar entre 1 y 3 días laborables para un profesional experimentado.",
  },
  {
    q: "¿Con qué frecuencia debería auditar mis campañas de paid media?",
    a: "Se recomienda una revisión completa trimestral (cada 3 meses) y una revisión mensual de métricas clave. Si cambias de agencia, antes de arrancar cualquier nueva campaña debes hacer una auditoría completa del estado actual. También si detectas una caída de ROAS superior al 20% en un período de 2 semanas.",
  },
  {
    q: "¿Qué métricas son las más importantes en una auditoría de Meta Ads?",
    a: "Las métricas prioritarias son: ROAS (retorno sobre inversión publicitaria), CPA (coste por adquisición), frecuencia de anuncio (si supera 3-4 el rendimiento baja), CPM (coste por 1.000 impresiones), CTR (click-through rate) y tasa de conversión de la landing. MER (Marketing Efficiency Ratio) si mides el efecto global.",
  },
  {
    q: "¿Qué errores se detectan más frecuentemente en una auditoría de campañas?",
    a: "Los más comunes: tracking mal configurado (conversiones duplicadas o perdidas), estructura de campañas solapada (audiencias que compiten entre sí), creatividades saturadas sin renovar más de 6 semanas, presupuestos mal distribuidos entre funnel frío y retargeting, y pujas automáticas sin suficientes datos para el algoritmo.",
  },
];

const ChecklistAuditoriaCampanasPage = ({ openCalendly }) => (
  <BlogPostLayout
    title="Checklist para auditar tus campañas de paid media en 2026"
    description="Checklist completo para auditar campañas de Meta Ads y Google Ads: estructura, tracking, creatividades, audiencias y métricas clave. Descarga e implementa paso a paso."
    slug="checklist-auditoria-campanas-paid-media"
    datePublished="2026-03-12"
    dateModified="2026-03-12"
    readingTime="7 min"
    category="Estrategia"
    faqs={faqs}
    openCalendly={openCalendly}
  >
    <p className="text-white/70 leading-relaxed mb-6">
      Una <strong>auditoría de campañas de paid media</strong> es la herramienta más eficaz para diagnosticar por qué tu inversión publicitaria no está dando el resultado esperado. Este checklist cubre los 6 bloques críticos que revisamos en DayByDay cuando auditamos una cuenta nueva — con preguntas concretas y valores de referencia para cada punto.
    </p>

    <div className="bg-[#1a1616] border border-white/8 rounded-xl p-5 mb-8">
      <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Por qué importa esto</p>
      <p className="text-white/70 text-sm leading-relaxed">
        En el <strong>78% de las auditorías</strong> que realizamos en DayByDay, encontramos al menos 3 errores críticos que están impactando directamente en el ROAS: tracking defectuoso, audiencias solapadas o creatividades saturadas. La auditoría sistemática es el primer paso para recuperar eficiencia.
      </p>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Bloque 1 — Tracking y atribución</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      El tracking es la base de todo. Sin datos fiables, cualquier decisión de optimización es una apuesta a ciegas.
    </p>
    <ul className="space-y-2 mb-8">
      {[
        "¿El píxel de Meta o la etiqueta de Google Ads están activos y sin errores? → Verifica en Events Manager / Tag Assistant",
        "¿Hay conversiones duplicadas en el dashboard? → Busca el mismo evento de compra disparándose más de una vez por transacción",
        "¿Está implementada la API de Conversiones de Meta? → Sin ella, las iOS 14+ no se atribuyen correctamente",
        "¿El Enhanced Conversions de Google Ads está activo? → Mejora la atribución hasta un 15-20%",
        "¿El modelo de atribución es el correcto? → Recomendamos 'basado en datos' en Meta, no lineal ni primer clic",
        "¿Las ventanas de atribución están configuradas para tu ciclo de compra? → eCommerce: 7 días clic + 1 día vista como mínimo",
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="text-green-400 flex-shrink-0 mt-0.5">☑</span>
          <span className="text-white/70 text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>

    <h2 className="text-2xl font-black mt-10 mb-4">Bloque 2 — Estructura de campañas</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Una estructura de campañas mal planteada hace que los conjuntos de anuncios compitan entre sí, encareciendo el CPM y confundiendo al algoritmo.
    </p>
    <ul className="space-y-2 mb-8">
      {[
        "¿Hay separación clara entre campañas de prospección (frío) y retargeting (caliente)?",
        "¿Los conjuntos de anuncios del mismo nivel tienen audiencias que no se solapan entre sí?",
        "¿Cada campaña tiene un objetivo único y coherente con el stage del funnel?",
        "¿El presupuesto está correctamente distribuido? → Regla general: 70% prospección, 30% retargeting",
        "¿Hay campañas duplicadas activas que compiten por el mismo presupuesto?",
        "¿Las campañas de Advantage+ Shopping están configuradas con exclusiones de audiencias calientes?",
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="text-green-400 flex-shrink-0 mt-0.5">☑</span>
          <span className="text-white/70 text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>

    <h2 className="text-2xl font-black mt-10 mb-4">Bloque 3 — Creatividades y anuncios</h2>
    <ul className="space-y-2 mb-8">
      {[
        "¿Cuántas semanas llevan activas las creatividades principales? → Si supera 6 semanas sin testear nuevas, hay saturación",
        "¿La frecuencia media está por encima de 3? → Valores >3.5 indican saturación de audiencia",
        "¿Hay al menos 3-5 variaciones activas por conjunto de anuncios?",
        "¿Los primeros 3 segundos del vídeo son específicamente para detener el scroll?",
        "¿Hay UGC (User Generated Content) en el mix de creatividades? → Suele mejorar CTR un 20-40%",
        "¿Los copies tienen un CTA claro y específico (no genérico como 'Comprar ahora')?",
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="text-green-400 flex-shrink-0 mt-0.5">☑</span>
          <span className="text-white/70 text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>

    <h2 className="text-2xl font-black mt-10 mb-4">Bloque 4 — Audiencias y segmentación</h2>
    <ul className="space-y-2 mb-8">
      {[
        "¿Las audiencias Lookalike están basadas en los mejores clientes (LTV alto) y no en todos los compradores?",
        "¿Hay exclusiones de audiencias calientes en las campañas de prospección?",
        "¿Las audiencias de retargeting están segmentadas por comportamiento? → Visitantes 3 días vs 30 días requieren mensajes distintos",
        "¿Las audiencias de intereses tienen un tamaño adecuado? → En España: mínimo 500.000 personas para que el algoritmo aprenda",
        "¿Hay audiencias personalizadas de clientes existentes para exclusión y subir pujas?",
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="text-green-400 flex-shrink-0 mt-0.5">☑</span>
          <span className="text-white/70 text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>

    <h2 className="text-2xl font-black mt-10 mb-4">Bloque 5 — Métricas y benchmarks</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Compara tus métricas con estos valores de referencia para ecommerce D2C en España:
    </p>
    <div className="overflow-x-auto mb-8">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left py-3 pr-4 text-white/40 font-semibold text-xs uppercase tracking-wide">Métrica</th>
            <th className="text-left py-3 pr-4 text-white/40 font-semibold text-xs uppercase tracking-wide">Bueno</th>
            <th className="text-left py-3 pr-4 text-white/40 font-semibold text-xs uppercase tracking-wide">Alerta</th>
            <th className="text-left py-3 text-white/40 font-semibold text-xs uppercase tracking-wide">Crítico</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["ROAS (moda/lifestyle)", ">4x", "2x–4x", "<2x"],
            ["ROAS (suplementos)", ">5x", "3x–5x", "<3x"],
            ["CPA (ticket 60€)", "<25€", "25€–45€", ">45€"],
            ["CTR Link", ">1.5%", "0.8%–1.5%", "<0.8%"],
            ["Frecuencia", "<3", "3–4", ">4"],
            ["CPM (España)", "<10€", "10€–20€", ">20€"],
          ].map(([metrica, bueno, alerta, critico]) => (
            <tr key={metrica} className="border-b border-white/5">
              <td className="py-3 pr-4 text-white/80 font-medium">{metrica}</td>
              <td className="py-3 pr-4 text-green-400/80 text-sm">{bueno}</td>
              <td className="py-3 pr-4 text-yellow-400/80 text-sm">{alerta}</td>
              <td className="py-3 text-red-400/80 text-sm">{critico}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Bloque 6 — Página de destino (landing)</h2>
    <ul className="space-y-2 mb-8">
      {[
        "¿La página de destino carga en menos de 3 segundos en móvil? → Usa PageSpeed Insights para medir",
        "¿El mensaje del anuncio y la landing son coherentes? → El visitante debe ver lo que el anuncio prometió",
        "¿La tasa de conversión de la landing está por encima del 1-3%? → Por debajo indica problema de experiencia de usuario",
        "¿Hay un CTA claro 'above the fold' (sin hacer scroll)?",
        "¿Hay señales de confianza visibles? → Reviews, sellos de seguridad, política de devoluciones",
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="text-green-400 flex-shrink-0 mt-0.5">☑</span>
          <span className="text-white/70 text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>

    <h2 className="text-2xl font-black mt-10 mb-4">Cómo hacemos las auditorías en DayByDay</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Este checklist es la base del proceso que seguimos en DayByDay cuando auditamos una cuenta nueva. Revisamos los 6 bloques en profundidad y entregamos un informe con la puntuación de cada área y un plan de acción priorizado por impacto potencial.
    </p>
    <p className="text-white/70 leading-relaxed mb-6">
      La auditoría completa nos lleva 1-2 días laborables y es el punto de partida de cualquier colaboración. Si quieres saber más sobre nuestra metodología, puedes leer{" "}
      <a
        href="https://www.facebook.com/business/help/218844828315224?id=708519410192662"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#de0015] hover:text-red-400 underline"
      >
        las guías oficiales de optimización de Meta Business
      </a>
      {" "}como referencia técnica.
    </p>

    <div className="bg-[#1a1616] border border-white/10 rounded-2xl p-6 mb-8 text-center">
      <p className="text-white/60 text-sm mb-4">
        ¿Quieres que auditemos tus campañas con este checklist y te digamos exactamente qué está fallando?
      </p>
      <button
        onClick={openCalendly}
        className="bg-[#de0015] hover:bg-red-600 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
      >
        Auditoría gratuita →
      </button>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Artículos relacionados</h2>
    <ul className="space-y-2 mb-4">
      {[
        ["/blog/senales-agencia-publicidad-no-rinde", "Señales de que tu agencia de publicidad no está rindiendo"],
        ["/blog/buen-roas-por-nicho-benchmarks-2026", "¿Qué es un buen ROAS? Benchmarks por nicho para 2026"],
        ["/blog/caso-exito-ecommerce-d2c-roas-meta-ads", "Caso de éxito: eCommerce D2C +156% ROAS en 90 días"],
        ["/blog/escalar-meta-ads", "Cómo escalar Meta Ads sin destruir el ROAS"],
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

export default ChecklistAuditoriaCampanasPage;
