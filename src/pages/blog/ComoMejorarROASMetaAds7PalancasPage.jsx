import { Link } from "react-router-dom";
import BlogPostLayout from "../../components/BlogPostLayout";

const faqs = [
  {
    q: "¿Cómo mejorar el ROAS en Meta Ads para ecommerce?",
    a: "Para mejorar el ROAS en Meta Ads hay que actuar en 7 palancas: tracking correcto (CAPI configurado), estructura de campañas consolidada para que el algoritmo aprenda rápido, creatividades frescas con volumen suficiente de tests, señales de calidad para los lookalikes, landing page optimizada para conversión, AOV más alto mediante bundles o upsells, y retargeting activo del catálogo. La mayoría de cuentas tienen problemas en 2–3 de estas áreas, no en todas a la vez.",
  },
  {
    q: "¿Por qué baja el ROAS en Meta Ads aunque no cambio nada?",
    a: "El ROAS baja sin cambios aparentes por varias razones: fatiga de audiencia y creatividades (el algoritmo muestra los mismos anuncios a las mismas personas), agotamiento del warm audience (el retargeting se queda sin usuarios nuevos), cambios en la competencia (más anunciantes en el mismo nicho suben los CPMs), o problemas de tracking que van empeorando progresivamente (pérdida de eventos, discrepancias entre pixel y CAPI). Es normal ver degradación del 15–25% en ROAS al cabo de 60–90 días si no se refrescan las creatividades.",
  },
  {
    q: "¿Cuánto tiempo tarda en mejorar el ROAS después de optimizar campañas?",
    a: "Depende de la palanca que toques. Las mejoras de tracking (CAPI, pixel) se notan en datos en 1–2 semanas pero el algoritmo tarda 2–4 semanas en recalibrarse. Los cambios de estructura de campañas necesitan 2–3 semanas de fase de aprendizaje. Los test de creatividades dan resultados significativos en 7–14 días con presupuesto suficiente. Las mejoras de landing page se ven en tasa de conversión casi inmediatamente. Un plan de optimización completo suele mostrar mejora real de ROAS a 60–90 días.",
  },
  {
    q: "¿Qué es el ROAS objetivo y cómo calcularlo?",
    a: "El ROAS objetivo es el ROAS mínimo que necesitas para que tus campañas sean rentables. Se calcula así: ROAS objetivo = 1 / margen bruto. Si tu margen bruto es del 50%, tu ROAS objetivo es 2x (necesitas ingresar €2 por cada €1 invertido para cubrir el coste del producto). Para tener margen real después de fees de agencia, costes operativos y margen de escalado, el ROAS objetivo práctico suele estar un 30–50% por encima del punto de equilibrio.",
  },
  {
    q: "¿Qué diferencia hay entre ROAS de plataforma y ROAS real?",
    a: "El ROAS de plataforma es lo que reporta Meta Ads Manager: conversiones atribuidas a la campaña según su modelo de atribución. El ROAS real o MER (Marketing Efficiency Ratio) es el total de ingresos dividido entre el total invertido en paid media, sin filtros de atribución. La diferencia entre ambos puede ser del 20–40% debido a ventanas de atribución, conversiones multi-device y atribución de vista (view-through). El MER es el número que importa para la rentabilidad del negocio.",
  },
];

const ComoMejorarROASMetaAds7PalancasPage = ({ openCalendly }) => (
  <BlogPostLayout
    title="Cómo mejorar el ROAS en Meta Ads: 7 palancas reales"
    description="Las 7 palancas que realmente mueven el ROAS en Meta Ads para ecommerce D2C. Sin trucos, sin hype — tracking, estructura, creatividades, audiencias, landing, AOV y retención explicados con datos reales."
    slug="como-mejorar-roas-meta-ads-7-palancas"
    datePublished="2026-03-23"
    readingTime="7 min"
    category="Meta Ads"
    faqs={faqs}
    openCalendly={openCalendly}
  >
    <p className="text-white/70 leading-relaxed mb-5">
      La mayoría de artículos sobre <strong className="text-white">cómo mejorar el ROAS en Meta Ads</strong> te dicen que pruebes nuevas audiencias, que hagas A/B testing de creatividades o que actives Advantage+. Todo correcto pero incompleto. El ROAS es el resultado de siete variables que interactúan entre sí — si arreglas solo una y las otras están rotas, el resultado no se mueve.
    </p>
    <p className="text-white/70 leading-relaxed mb-5">
      En DayByDay hemos auditado más de 40 cuentas de Meta Ads de ecommerce D2C en España. En el 90% de los casos, el problema real está en 2–3 palancas específicas, no en todas a la vez. Este artículo explica las 7, en qué orden abordarlas y qué señal te indica que cada una está funcionando bien o mal.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Las 7 palancas del ROAS — por qué importa el orden</h2>
    <p className="text-white/70 leading-relaxed mb-5">
      El orden importa porque optimizar una palanca superior sobre una inferior es perder el tiempo. No tiene sentido hacer A/B testing de creatividades si el tracking está roto: no sabrás qué variante convierte de verdad. No tiene sentido trabajar las audiencias si la landing page tiene un 80% de rebote. El diagnóstico correcto empieza desde la base.
    </p>

    <div className="space-y-4 mb-10">
      {[
        {
          num: "01",
          palanca: "Tracking y atribución",
          problema: "El más silencioso y el más destructivo",
          detalle: "Si el pixel y la CAPI no están bien configurados, Meta no sabe qué usuarios compraron. Resultado: el algoritmo optimiza hacia usuarios que no convierten. Señales de problema: diferencia >20% entre pedidos en Shopify y conversiones en Meta Ads Manager, eventos duplicados (Purchase que dispara 2–3 veces), o tasa de correspondencia de eventos (EMQ) inferior a 7/10 en la configuración de dataset.",
          accion: "Verificar configuración CAPI + pixel en Events Manager, comprobar deduplicación de eventos, revisar EMQ (Event Match Quality). Objetivo: EMQ ≥ 8/10.",
        },
        {
          num: "02",
          palanca: "Estructura de campañas",
          problema: "Demasiada fragmentación paraliza el algoritmo",
          detalle: "Cuentas con 8 conjuntos de anuncios con €50/día cada uno vs una cuenta con 2 conjuntos de anuncios con €200/día. La segunda aprende más rápido porque Meta necesita 50 eventos de optimización por semana por conjunto de anuncios para salir del aprendizaje. Fragmentar el presupuesto mantiene las campañas en aprendizaje perpetuo.",
          accion: "Consolidar: máximo 2–3 conjuntos de anuncios activos por campaña, consolidar audiencias similares, concentrar presupuesto en los conjuntos con mejor historial.",
        },
        {
          num: "03",
          palanca: "Creatividades y volumen de tests",
          problema: "La causa más común de degradación del ROAS pasados 60 días",
          detalle: "Las creatividades tienen una vida media de 3–6 semanas en Meta Ads. Pasado ese tiempo, el CTR cae, el CPM sube (Meta penaliza creatividades con bajo engagement) y el CPA empeora. Las cuentas con ROAS estable tienen un pipeline continuo de nuevas creatividades: mínimo 4–6 creatividades nuevas al mes, con variantes UGC, producto puro, lifestyle y testimoniales.",
          accion: "Establecer un calendario de producción de creatividades. Medir CTR (>1,5% saludable en prospecting), Frequency (>3 = fatiga), y Hook Rate (% que ve los 3 primeros segundos, objetivo >30%).",
        },
        {
          num: "04",
          palanca: "Señales de audiencia para el algoritmo",
          problema: "Lookalikes de baja calidad generan ROAS de baja calidad",
          detalle: "La calidad de tus lookalikes depende de la calidad de los datos que le das a Meta. Un lookalike de 'todos los compradores de los últimos 180 días' es menos preciso que un lookalike de 'compradores que han comprado 2+ veces en los últimos 60 días'. En ecommerce con alta recurrencia (suplementos, cosmética, alimentación), los lookalikes de clientes recurrentes convierten un 40–70% mejor que los de compradores únicos.",
          accion: "Crear audiencias personalizadas segmentadas por valor de compra y frecuencia. Subir listas de clientes de alto LTV para Advantage+ Audience. Revisar que el pixel tenga Purchase event con parámetros value y currency configurados.",
        },
        {
          num: "05",
          palanca: "Landing page y tasa de conversión",
          problema: "Mejorar la CR un 0,5% equivale a subir el ROAS un 25–50%",
          detalle: "Si tu CR (conversion rate) está en el 1%, mejorarla al 1,5% sube el ROAS un 50% sin tocar los anuncios. Las causas más comunes de CR baja en ecommerce D2C español: velocidad de carga >3s en móvil, proceso de checkout con más de 3 pasos, falta de prueba social (reviews, número de clientes), descripciones de producto sin información sobre envío y devolución.",
          accion: "Medir CR por dispositivo (móvil suele ser 30–50% peor que desktop). Auditar el checkout. Implementar heatmaps (Hotjar, Microsoft Clarity) para identificar dónde abandona el usuario.",
        },
        {
          num: "06",
          palanca: "AOV (valor medio del pedido)",
          problema: "Subir el AOV mejora el ROAS sin cambiar nada en los anuncios",
          detalle: "Si tu AOV pasa de €50 a €65 con el mismo CPA, el ROAS sube un 30% automáticamente. Las palancas para subir AOV: bundles (productos complementarios con descuento), upsell post-compra (apps como ReConvert o CartHook), umbral de envío gratuito ligeramente por encima del AOV actual, y packs de mayor cantidad (muy efectivo en suplementos, cosmética y alimentación).",
          accion: "Calcular tu AOV actual vs el umbral de envío gratuito. Si están muy cerca, subir el umbral €10–15 para incentivar el upsell natural. A/B test de bundle en la ficha de producto.",
        },
        {
          num: "07",
          palanca: "Retargeting y activación de clientes existentes",
          problema: "El retargeting sin segmentar por comportamiento convierte mal",
          detalle: "El retargeting de 'todos los visitantes de los últimos 30 días' incluye usuarios con 5 segundos de sesión que jamás van a comprar. La segmentación que funciona: visitantes de ficha de producto >1 min (intención real), añadidos al carrito, iniciado checkout, y clientes anteriores segmentados por tiempo desde última compra (15–45 días para reactivación). El ROAS de retargeting bien segmentado es típicamente 5x–10x el de prospecting.",
          accion: "Crear audiencias separadas por profundidad de visita. Mensajes distintos para cada segmento. Excluir compradores recientes (<15 días) de las campañas de adquisición para no desperdiciar impresiones.",
        },
      ].map(({ num, palanca, problema, detalle, accion }) => (
        <div key={num} className="bg-[#1a1616] border border-white/8 rounded-xl p-6">
          <div className="flex items-start gap-4 mb-3">
            <span className="text-3xl font-black text-white/15 leading-none">{num}</span>
            <div>
              <div className="font-bold text-white text-lg mb-1">{palanca}</div>
              <div className="text-[#d4f57a] text-sm font-medium">{problema}</div>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-3">{detalle}</p>
          <div className="bg-white/5 rounded-lg p-3">
            <span className="text-white/40 text-xs uppercase tracking-wider font-medium">Acción: </span>
            <span className="text-white/60 text-sm">{accion}</span>
          </div>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Por dónde empezar: el diagnóstico de los 15 minutos</h2>
    <p className="text-white/70 leading-relaxed mb-5">
      Antes de tocar nada, revisa estos cuatro indicadores en ese orden. Te dirán en qué palanca está el problema principal:
    </p>
    <div className="space-y-3 mb-8">
      {[
        { paso: "1", check: "Compara pedidos en Shopify vs conversiones en Meta (últimos 14 días)", señal: "Si la diferencia es >20%, el problema es de tracking — empieza por ahí." },
        { paso: "2", check: "Revisa el número de conjuntos de anuncios activos y el presupuesto por conjunto", señal: "Si tienes más de 5 conjuntos con <€100/día cada uno, el problema es de estructura." },
        { paso: "3", check: "Mira el Frequency y el CTR de las creatividades activas", señal: "Si Frequency >3,5 o CTR <0,8%, el problema es de fatiga creativa." },
        { paso: "4", check: "Revisa la tasa de conversión por dispositivo en Google Analytics / Shopify Analytics", señal: "Si la CR en móvil es <0,8%, el problema es de landing page o checkout." },
      ].map(({ paso, check, señal }) => (
        <div key={paso} className="flex gap-4 bg-[#1a1616] border border-white/8 rounded-xl p-4">
          <span className="text-[#d4f57a] font-black text-lg leading-none mt-0.5">{paso}</span>
          <div>
            <div className="text-white text-sm font-medium mb-1">{check}</div>
            <div className="text-white/50 text-sm">{señal}</div>
          </div>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">ROAS real vs ROAS de plataforma: el número que importa</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Una advertencia antes de obsesionarse con el ROAS de Meta Ads Manager: es un número con mucho ruido. La ventana de atribución de 7 días click + 1 día view incluye conversiones que habrían ocurrido de todos modos (usuarios que ya iban a comprar y vieron tu anuncio por casualidad).
    </p>
    <p className="text-white/70 leading-relaxed mb-4">
      El indicador más honesto es el <strong className="text-white">MER (Marketing Efficiency Ratio)</strong>: ingresos totales del ecommerce divididos entre inversión total en paid media. Si tu Meta Ads Manager reporta un ROAS de 4x pero tu MER es 2x, hay una discrepancia que vale la pena investigar (atribución multi-touch, compras recurrentes no atribuidas, canal orgánico que complementa).
    </p>
    <p className="text-white/70 leading-relaxed mb-5">
      En DayByDay medimos ambos: el ROAS de plataforma para optimizar dentro de Meta, y el MER para evaluar la salud real del canal. La diferencia típica que vemos en D2C español es del 25–35%.
    </p>

    <div className="bg-[#1a1616] border border-white/10 rounded-2xl p-6 my-8">
      <p className="text-white font-bold mb-2">¿Tu ROAS lleva meses sin moverse?</p>
      <p className="text-white/60 text-sm mb-4">
        En DayByDay hacemos una auditoría técnica de tu cuenta de Meta Ads — tracking, estructura, creatividades y conversión — para identificar en cuál de estas 7 palancas está el cuello de botella real. Normalmente encontramos el problema en la primera revisión.
      </p>
      <button
        onClick={openCalendly}
        className="bg-[#d4f57a] text-black font-bold px-6 py-3 rounded-xl text-sm hover:bg-[#c8ed6e] transition-colors"
      >
        Solicitar auditoría gratuita
      </button>
    </div>

    <p className="text-white/50 text-sm leading-relaxed mt-8">
      Artículos relacionados:{" "}
      <Link to="/blog/que-es-roas-meta-ads" className="text-white/70 hover:text-white underline">Qué es el ROAS en Meta Ads</Link>{" "}·{" "}
      <Link to="/blog/checklist-auditoria-campanas-paid-media" className="text-white/70 hover:text-white underline">Checklist auditoría campañas paid media</Link>{" "}·{" "}
      <Link to="/blog/benchmark-roas-sector-espana-2026" className="text-white/70 hover:text-white underline">Benchmark ROAS por sector España 2026</Link>{" "}·{" "}
      <Link to="/blog/caso-exito-ecommerce-d2c-roas-meta-ads" className="text-white/70 hover:text-white underline">Caso de éxito: +156% ROAS en 90 días</Link>
    </p>
  </BlogPostLayout>
);

export default ComoMejorarROASMetaAds7PalancasPage;
