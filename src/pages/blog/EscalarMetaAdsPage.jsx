import { Link } from "react-router-dom";
import BlogPostLayout from "../../components/BlogPostLayout";

const faqs = [
  {
    q: "¿Cuánto puedo subir el presupuesto de Meta Ads por semana sin romper el rendimiento?",
    a: "La regla general es no subir más del 20-30% del presupuesto en una misma semana. Subidas mayores sacan a la campaña de la fase de aprendizaje y el algoritmo necesita recalibrar, lo que suele provocar una caída temporal del ROAS durante 5-10 días.",
  },
  {
    q: "¿Qué es Advantage+ Shopping y por qué ayuda a escalar?",
    a: "Advantage+ Shopping Campaigns (ASC) son campañas de Meta que usan IA para gestionar automáticamente la segmentación, las pujas y la distribución del presupuesto entre audiencias frías y de retargeting. Al eliminar las restricciones manuales, el algoritmo puede explorar más oportunidades de conversión y escala mejor que las campañas con segmentación manual.",
  },
  {
    q: "¿Cuándo debo escalar verticalmente vs horizontalmente en Meta Ads?",
    a: "Escala verticalmente (más presupuesto a las mismas campañas) cuando tus campañas tienen buen rendimiento y el ROAS se mantiene estable al aumentar el presupuesto en un 20%. Escala horizontalmente (nuevas campañas o audiencias) cuando el rendimiento de las campañas existentes empieza a deteriorarse a pesar de las optimizaciones, lo que indica saturación de audiencia.",
  },
];

const EscalarMetaAdsPage = ({ openCalendly }) => (
  <BlogPostLayout
    title="Cómo escalar Meta Ads de 100€ a 1.000€/día sin quemar el presupuesto"
    description="Guía paso a paso para escalar campañas de Meta Ads sin arruinar el ROAS: escala vertical, horizontal, Advantage+, señales de saturación y el sistema de creatividades rotativas."
    slug="escalar-meta-ads"
    datePublished="2026-03-10"
    readingTime="8 min"
    category="Meta Ads"
    faqs={faqs}
    openCalendly={openCalendly}
  >
    <h2 className="text-2xl font-black mt-10 mb-4">Por qué escalar Meta Ads es diferente a simplemente subir el presupuesto</h2>
    <p className="text-white/70 leading-relaxed mb-5">
      El error más común al escalar campañas de Meta Ads es duplicar el presupuesto de un día para otro y esperar que el ROAS se mantenga. El resultado habitual es una caída del rendimiento, días de CPA elevado y la sensación de que "Meta Ads no escala bien".
    </p>
    <p className="text-white/70 leading-relaxed mb-5">
      La realidad es que Meta Ads escala perfectamente si se hace correctamente. El algoritmo de Meta tiene límites de aprendizaje, las audiencias tienen límites de saturación y los creativos tienen ciclos de vida. Entender estos tres factores es la clave para pasar de 100€/día a 1.000€/día sin quemar presupuesto.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Los tres factores que determinan la capacidad de escala</h2>
    <div className="space-y-4 mb-6">
      {[
        {
          factor: "1. Tamaño de audiencia disponible",
          desc: "Una audiencia de 100.000 personas no puede absorber 10.000€/día de presupuesto de forma eficiente. El CPM sube porque saturamos la subasta. A más presupuesto, mayor audiencia necesitas.",
        },
        {
          factor: "2. Velocidad de rotación de creatividades",
          desc: "Los creativos se fatigan más rápido con mayor gasto. A 100€/día un creativo puede durar 3-4 semanas. A 500€/día, la misma audiencia lo ve mucho más rápido y la fatiga llega en una semana.",
        },
        {
          factor: "3. Estabilidad del algoritmo de aprendizaje",
          desc: "Cada cambio significativo en el presupuesto reinicia parcialmente el aprendizaje. Subidas de más del 30% en poco tiempo obligan al algoritmo a recalibrar, con una caída temporal de rendimiento.",
        },
      ].map(({ factor, desc }) => (
        <div key={factor} className="bg-[#1a1616] border border-white/8 rounded-xl p-4">
          <p className="font-semibold text-white mb-2 text-sm">{factor}</p>
          <p className="text-white/60 text-sm">{desc}</p>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Escala vertical: cómo subir el presupuesto sin romper el ROAS</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      La escala vertical consiste en aumentar el presupuesto de las campañas existentes que funcionan bien. El protocolo que usamos en DayByDay:
    </p>
    <div className="space-y-3 mb-6">
      {[
        "Sube el presupuesto máximo un 20-30% por semana mientras el ROAS se mantiene dentro del objetivo",
        "Espera al menos 5-7 días antes de la siguiente subida para que el algoritmo se estabilice",
        "Si el ROAS cae más de un 15% tras la subida, mantén el presupuesto actual hasta que se recupere",
        "Usa Advantage Campaign Budget (ACB) para que Meta distribuya el presupuesto entre conjuntos de forma eficiente",
        "Monitoriza la frecuencia: si supera 3 en audiencias frías, la saturación está limitando la escala",
      ].map((item) => (
        <div key={item} className="flex items-start gap-3 text-sm text-white/70">
          <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
          <span>{item}</span>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Escala horizontal: ampliar audiencias y creatividades</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      La escala horizontal no aumenta el presupuesto de las campañas existentes sino que crea nuevas fuentes de conversión: nuevas audiencias, nuevos ángulos creativos, nuevos mercados geográficos.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">Expansión de audiencias para escalar</h3>
    <div className="space-y-2 mb-5">
      {[
        "Amplía los Lookalike: si usabas 1%, prueba 1-3% o 3-5% para llegar a más personas",
        "Expande a mercados similares: si escalas en España, prueba México, Argentina o Colombia",
        "Activa Advantage+ Audience sin restricciones de segmentación manual",
        "Crea audiencias Lookalike de compradores de distintos períodos (30d, 90d, 180d)",
      ].map((item) => (
        <div key={item} className="flex items-start gap-3 text-sm text-white/65">
          <span className="text-[#de0015] mt-0.5 flex-shrink-0">→</span>
          <span>{item}</span>
        </div>
      ))}
    </div>

    <h3 className="text-lg font-bold mt-6 mb-3">El sistema de creatividades para escalar</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      Escalar sin un sistema de producción de creatividades es imposible. El volumen de creatividades necesario aumenta proporcionalmente con el presupuesto. Este es el sistema que usamos:
    </p>
    <div className="bg-[#1a1616] border border-white/8 rounded-xl p-5 mb-5">
      <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Sistema de creatividades rotativas</p>
      <div className="space-y-2 text-sm text-white/65">
        {[
          "Producir 8-12 nuevas variaciones cada 2-3 semanas (más frecuencia a mayor presupuesto)",
          "Mantener activos los 3-5 creativos con mejor rendimiento histórico (base estable)",
          "Testear 2-3 nuevos ángulos creativos por ciclo (formato, mensaje, persona, gancho)",
          "Retirar creativos cuando la frecuencia supera 3 o el CTR cae más del 40% de su pico",
          "Documentar qué formatos y mensajes funcionan mejor por segmento de audiencia",
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-[#de0015]">{i + 1}.</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Advantage+ Shopping: la herramienta de escala más potente en 2026</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Las Advantage+ Shopping Campaigns (ASC) son el formato que mejor escala en Meta Ads en 2026. Eliminan la segmentación manual y dejan que el algoritmo gestione toda la distribución del presupuesto entre audiencias frías y de retargeting de forma dinámica.
    </p>
    <div className="grid grid-cols-2 gap-3 mb-6">
      {[
        { titulo: "Sin ASC", items: ["Campañas separadas por audiencia", "Gestión manual del presupuesto", "Optimización lenta"] },
        { titulo: "Con ASC", items: ["Una campaña gestiona todo", "Redistribución automática", "Escala más rápida"] },
      ].map(({ titulo, items }) => (
        <div key={titulo} className="bg-[#1a1616] border border-white/8 rounded-xl p-4">
          <p className={`font-semibold text-sm mb-2 ${titulo === "Con ASC" ? "text-green-400" : "text-white/60"}`}>{titulo}</p>
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item} className="text-white/55 text-xs">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Señales de que estás escalando mal</h2>
    <div className="space-y-3 mb-6">
      {[
        "ROAS cae más del 20% en la primera semana tras una subida de presupuesto",
        "Frecuencia en audiencias frías supera 3 de forma sostenida",
        "CTR cae más del 40% sin haber cambiado el creativo",
        "CPA sube cada semana aunque el presupuesto se mantiene igual",
        "Las métricas de las campañas nuevas son peores que las originales",
      ].map((item) => (
        <div key={item} className="flex items-start gap-3 text-sm text-white/70">
          <span className="text-red-400 mt-0.5 flex-shrink-0">⚠</span>
          <span>{item}</span>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Caso real: de 150€/día a 800€/día en 10 semanas</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Un eCommerce D2C de accesorios tenía sus campañas estancadas en 150€/día. Su CPA era aceptable pero no conseguían escalar sin romper el rendimiento. Implementamos un plan de escala estructurado en 10 semanas.
    </p>
    <div className="bg-[#1a1616] border border-white/8 rounded-xl p-6 mb-5">
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: "Inversión inicial diaria", value: "150 €/día" },
          { label: "Inversión final diaria", value: "800 €/día" },
          { label: "ROAS inicial", value: "2,8x" },
          { label: "ROAS final (semana 10)", value: "3,6x" },
        ].map(({ label, value }) => (
          <div key={label}>
            <div className="text-white/40 text-xs uppercase tracking-wider mb-1">{label}</div>
            <div className="font-bold text-white">{value}</div>
          </div>
        ))}
      </div>
    </div>
    <p className="text-white/70 leading-relaxed">
      Escalamos el presupuesto gradualmente con subidas del 25% cada 7-10 días, migramos la prospección a Advantage+ Shopping y pusimos en marcha un sistema de producción semanal de 8-10 creatividades nuevas. Si quieres aplicar esta metodología, consulta nuestro{" "}
      <Link to="/servicios/meta-ads" className="text-white underline underline-offset-2 hover:text-white/80">
        servicio de gestión de Meta Ads
      </Link>{" "}
      o lee sobre{" "}
      <Link to="/blog/estrategia-full-funnel-meta-ads-d2c" className="text-white underline underline-offset-2 hover:text-white/80">
        la estrategia full-funnel para Meta Ads
      </Link>.
    </p>
  </BlogPostLayout>
);

export default EscalarMetaAdsPage;
