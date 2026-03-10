import { Link } from "react-router-dom";
import BlogPostLayout from "../../components/BlogPostLayout";

const faqs = [
  {
    q: "¿Qué estrategia de puja es mejor para Meta Ads en 2026?",
    a: "Para la mayoría de anunciantes, el Coste por Resultado más bajo (bidding automático) es el punto de partida recomendado porque permite al algoritmo de Meta explorar el espacio de subastas libremente. Las estrategias manuales (Cost Cap, Bid Cap) solo tienen sentido cuando tienes datos históricos suficientes y quieres controlar el coste máximo por conversión.",
  },
  {
    q: "¿Cuándo usar Cost Cap vs Bid Cap en Meta Ads?",
    a: "Cost Cap controla el coste promedio por resultado y es útil cuando quieres mantener un CPA máximo específico con cierta flexibilidad. Bid Cap controla la puja máxima en cada subasta y es más restrictivo; úsalo cuando tienes márgenes muy ajustados y no puedes permitirte pujas altas en ninguna circunstancia. Bid Cap suele reducir el volumen de conversiones más que Cost Cap.",
  },
  {
    q: "¿Por qué Meta Ads gasta más de lo que configuré en el presupuesto?",
    a: "Meta Ads puede gastar hasta un 25% más del presupuesto diario configurado en días de alta demanda, compensándolo con gasto inferior en otros días. El gasto semanal total nunca supera el presupuesto diario multiplicado por 7. Si notas sobreentregas consistentes, revisa si tienes Advantage Campaign Budget activado, que puede redistribuir el presupuesto entre conjuntos de anuncios de forma agresiva.",
  },
];

const EstrategiasPujaMetaAdsPage = ({ openCalendly }) => (
  <BlogPostLayout
    title="Estrategias de puja en Meta Ads 2026: cuál elegir según tu objetivo"
    description="Guía completa sobre las estrategias de puja en Meta Ads: automático, Cost Cap, Bid Cap, ROAS mínimo y Value Optimization. Cuándo usar cada una y cómo afectan al rendimiento."
    slug="estrategias-puja-meta-ads"
    datePublished="2026-03-10"
    readingTime="7 min"
    category="Meta Ads"
    faqs={faqs}
    openCalendly={openCalendly}
  >
    <h2 className="text-2xl font-black mt-10 mb-4">Qué es la estrategia de puja en Meta Ads y por qué importa</h2>
    <p className="text-white/70 leading-relaxed mb-5">
      Cada vez que Meta Ads muestra un anuncio, está participando en una subasta en tiempo real. La estrategia de puja determina cuánto estás dispuesto a pagar por ese espacio publicitario y cómo el algoritmo optimiza el gasto para conseguir tus objetivos. Elegir la estrategia incorrecta puede duplicar tu CPA o limitar artificialmente el volumen de conversiones.
    </p>
    <p className="text-white/70 leading-relaxed mb-5">
      En 2026, las opciones disponibles en Meta Ads son más sofisticadas que nunca, pero también más fáciles de malconfigurar. Esta guía explica cada estrategia, cuándo usarla y qué esperar de cada una.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Las estrategias de puja disponibles en Meta Ads</h2>

    <h3 className="text-lg font-bold mt-6 mb-3">1. Coste por resultado más bajo (Lowest Cost)</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      Es la estrategia predeterminada y la más usada. Meta optimiza automáticamente para conseguir el mayor número de conversiones al menor coste posible dentro del presupuesto asignado. No pones límite a la puja — el algoritmo decide.
    </p>
    <div className="bg-[#1a1616] border border-white/8 rounded-xl p-4 mb-5">
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-green-400 font-semibold mb-2">Ventajas</p>
          <ul className="space-y-1 text-white/60">
            <li>→ Máxima flexibilidad del algoritmo</li>
            <li>→ Mayor volumen de conversiones</li>
            <li>→ Ideal para la fase de aprendizaje</li>
          </ul>
        </div>
        <div>
          <p className="text-red-400/80 font-semibold mb-2">Desventajas</p>
          <ul className="space-y-1 text-white/60">
            <li>→ Sin control sobre el CPA máximo</li>
            <li>→ Costes pueden variar mucho</li>
            <li>→ Menos predecible para planificación</li>
          </ul>
        </div>
      </div>
    </div>
    <p className="text-white/60 text-sm mb-2 font-semibold">Cuándo usarla:</p>
    <p className="text-white/65 text-sm mb-6">En la fase de lanzamiento, cuando estás acumulando datos de aprendizaje, o cuando el volumen de conversiones importa más que el coste unitario.</p>

    <h3 className="text-lg font-bold mt-6 mb-3">2. Cost Cap (Límite de coste)</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      Con Cost Cap defines un coste promedio máximo por conversión que quieres mantener. Meta intentará conseguir conversiones por debajo de ese límite, pero puede superar el Cap en situaciones de alta demanda. Es más flexible que el Bid Cap.
    </p>
    <div className="bg-[#1a1616] border border-white/8 rounded-xl p-4 mb-5">
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-green-400 font-semibold mb-2">Ventajas</p>
          <ul className="space-y-1 text-white/60">
            <li>→ Control sobre CPA medio</li>
            <li>→ Mejor para rentabilidad específica</li>
            <li>→ Más volumen que Bid Cap</li>
          </ul>
        </div>
        <div>
          <p className="text-red-400/80 font-semibold mb-2">Desventajas</p>
          <ul className="space-y-1 text-white/60">
            <li>→ Puede reducir el volumen</li>
            <li>→ Necesita datos históricos</li>
            <li>→ Cap muy bajo bloquea la entrega</li>
          </ul>
        </div>
      </div>
    </div>
    <p className="text-white/60 text-sm mb-2 font-semibold">Cuándo usarla:</p>
    <p className="text-white/65 text-sm mb-6">Cuando tienes un CPA máximo claro basado en tu margen de beneficio y al menos 50 conversiones en la cuenta durante el último mes.</p>

    <h3 className="text-lg font-bold mt-6 mb-3">3. Bid Cap (Límite de puja)</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      El Bid Cap establece la puja máxima que Meta puede hacer en cada subasta individual. Es la opción más restrictiva: si el espacio cuesta más que tu Bid Cap, el anuncio no se mostrará.
    </p>
    <div className="bg-[#1a1616] border border-white/8 rounded-xl p-4 mb-5">
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-green-400 font-semibold mb-2">Ventajas</p>
          <ul className="space-y-1 text-white/60">
            <li>→ Máximo control sobre costes</li>
            <li>→ Ideal para márgenes muy ajustados</li>
          </ul>
        </div>
        <div>
          <p className="text-red-400/80 font-semibold mb-2">Desventajas</p>
          <ul className="space-y-1 text-white/60">
            <li>→ Puede bloquear la entrega casi por completo</li>
            <li>→ Muy difícil de calibrar correctamente</li>
            <li>→ No recomendado para la mayoría</li>
          </ul>
        </div>
      </div>
    </div>
    <p className="text-white/60 text-sm mb-2 font-semibold">Cuándo usarla:</p>
    <p className="text-white/65 text-sm mb-6">Solo cuando tus márgenes son tan ajustados que una puja por encima de cierto umbral generaría pérdidas directas. Requiere calibración constante.</p>

    <h3 className="text-lg font-bold mt-6 mb-3">4. ROAS mínimo (Minimum ROAS)</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      Específico para catálogos y campañas de valor. En lugar de optimizar por número de conversiones, optimiza para conseguir un valor de pedido mínimo por euro invertido. Útil para eCommerce con productos de distintos precios donde no todos los pedidos son igual de rentables.
    </p>
    <p className="text-white/60 text-sm mb-2 font-semibold">Cuándo usarla:</p>
    <p className="text-white/65 text-sm mb-6">eCommerce con catálogo variado y datos de valor de pedido bien configurados. Necesitas el evento de compra con valor (purchase value) correctamente implementado en el píxel.</p>

    <h3 className="text-lg font-bold mt-6 mb-3">5. Optimización por valor (Value Optimization)</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      Meta optimiza para conseguir los pedidos de mayor valor, no el mayor número de pedidos. En lugar de buscar la conversión más barata, busca la conversión más valiosa.
    </p>
    <p className="text-white/60 text-sm mb-2 font-semibold">Cuándo usarla:</p>
    <p className="text-white/65 text-sm mb-6">eCommerce con alto ticket medio, cuando prefieres menos pedidos de mayor valor que muchos pedidos pequeños. Necesitas historial de compras suficiente para que el algoritmo aprenda qué perfil genera más valor.</p>

    <h2 className="text-2xl font-black mt-10 mb-4">Guía rápida: qué estrategia usar según tu situación</h2>
    <div className="space-y-3 mb-6">
      {[
        { situacion: "Cuenta nueva, menos de 50 conversiones/mes", estrategia: "Lowest Cost — deja que el algoritmo aprenda sin restricciones" },
        { situacion: "Cuenta con historial, quiero controlar el CPA", estrategia: "Cost Cap — pon el cap un 20-30% por encima del CPA actual" },
        { situacion: "Escalo presupuesto y el CPA sube demasiado", estrategia: "Cost Cap con cap progresivo — ve bajando el cap a medida que el algoritmo se estabiliza" },
        { situacion: "eCommerce con catálogo variado y margen diferente por producto", estrategia: "ROAS mínimo o Value Optimization" },
        { situacion: "Márgenes muy ajustados, no puedo permitirme variabilidad", estrategia: "Bid Cap — pero solo si entiendes el riesgo de bloquear la entrega" },
      ].map(({ situacion, estrategia }) => (
        <div key={situacion} className="bg-[#1a1616] border border-white/8 rounded-xl p-4">
          <p className="text-white/40 text-xs mb-1">{situacion}</p>
          <p className="text-white font-semibold text-sm">{estrategia}</p>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Error común: poner el Cap demasiado bajo desde el inicio</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      El error más frecuente con Cost Cap es configurar un cap muy por debajo del CPA histórico. Esto provoca que Meta no pueda encontrar suficientes subastas dentro de ese rango y la entrega se frena o se detiene. La regla práctica: configura el Cap inicial un 20-30% por encima de tu CPA objetivo y ve bajándolo progresivamente una vez que el volumen de conversiones es estable.
    </p>

    <p className="text-white/70 leading-relaxed">
      Si quieres profundizar en la optimización de campañas, consulta nuestro artículo sobre{" "}
      <Link to="/blog/que-es-roas-meta-ads" className="text-white underline underline-offset-2 hover:text-white/80">
        cómo mejorar el ROAS en Meta Ads
      </Link>{" "}
      o{" "}
      <Link to="/blog/como-reducir-cpa-ecommerce" className="text-white underline underline-offset-2 hover:text-white/80">
        cómo reducir el CPA en eCommerce
      </Link>.
    </p>
  </BlogPostLayout>
);

export default EstrategiasPujaMetaAdsPage;
