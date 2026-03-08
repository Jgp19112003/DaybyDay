import { Link } from "react-router-dom";
import BlogPostLayout from "../../components/BlogPostLayout";

const faqs = [
  {
    q: "¿Qué CPA es bueno en Meta Ads para eCommerce?",
    a: "Un CPA 'bueno' depende de tu margen bruto y del ticket medio de tu producto. Como referencia, el CPA debería ser inferior al 30-40% del valor del pedido para que la campaña sea rentable. En nuestros proyectos de eCommerce B2C hemos conseguido CPAs de 4,8€ en productos de moda y accesorios, aunque en sectores con tickets más altos el CPA puede estar en 20-80€ y seguir siendo rentable.",
  },
  {
    q: "¿El CPA y el CAC son lo mismo?",
    a: "No. El CPA (Coste por Adquisición) mide el coste de conseguir una conversión específica dentro de una plataforma publicitaria (una compra, un lead). El CAC (Customer Acquisition Cost) es más amplio: incluye todos los costes de marketing y ventas, no solo los publicitarios. El CAC es el indicador real de cuánto cuesta conseguir un cliente nuevo para el negocio.",
  },
  {
    q: "¿Cuánto tarda en bajar el CPA en Meta Ads?",
    a: "Con una estrategia bien estructurada, el CPA empieza a mejorar a partir de las 2-3 primeras semanas (período de aprendizaje del algoritmo). La optimización más significativa ocurre entre el mes 1 y el mes 3, cuando hay suficientes datos para que Meta optimice bien las pujas y las audiencias. Mantener el CPA estable a largo plazo requiere renovación continua de creatividades.",
  },
];

const CPAPage = ({ openCalendly }) => (
  <BlogPostLayout
    title="Cómo reducir el CPA en Meta Ads para eCommerce — Guía paso a paso"
    description="El CPA (Coste por Adquisición) es la métrica que determina si tus campañas de Meta Ads son rentables. Te explicamos las causas más comunes de un CPA alto y las acciones concretas para reducirlo."
    slug="como-reducir-cpa-ecommerce"
    datePublished="2026-03-08"
    readingTime="8 min"
    category="Meta Ads"
    faqs={faqs}
    openCalendly={openCalendly}
  >
    <p className="text-white/70 leading-relaxed mb-6 text-base border-l-2 border-white/20 pl-4 italic">
      Un CPA alto es el problema más común en las cuentas de Meta Ads que auditamos. La mayoría de las veces no es un problema de presupuesto sino de estructura, creatividades o optimización del funnel. Aquí están las causas reales y cómo arreglarlas.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Qué es el CPA y por qué importa</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      El CPA (Coste por Adquisición) es el coste medio que pagas para conseguir una conversión — en eCommerce, una compra. Se calcula dividiendo el gasto total en publicidad entre el número de ventas obtenidas.
    </p>
    <div className="bg-[#1a1616] border border-white/8 rounded-xl p-5 mb-5">
      <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Fórmula del CPA</p>
      <p className="font-mono text-white text-sm">CPA = Gasto publicitario ÷ Número de conversiones</p>
      <p className="text-white/50 text-xs mt-2">Ejemplo: 3.000€ invertidos ÷ 625 compras = CPA de 4,8€</p>
    </div>
    <p className="text-white/70 leading-relaxed mb-5">
      El CPA no es bueno o malo de forma absoluta. Un CPA de 50€ puede ser excelente si vendes sofás de 800€, pero ruinoso si vendes camisetas de 30€. Lo que importa es la relación entre el CPA y el margen bruto de cada venta.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Las 6 causas más comunes de CPA alto en Meta Ads</h2>

    <h3 className="text-lg font-bold mt-7 mb-3">1. Fatiga creativa no detectada</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      Cuando los mismos anuncios llevan semanas activos, la frecuencia sube, el CTR cae y Meta necesita más impresiones para conseguir cada clic. El CPA escala de forma silenciosa. Revisa la frecuencia en Ads Manager: si supera 3-4 en 7 días, es hora de renovar creatividades.
    </p>

    <h3 className="text-lg font-bold mt-7 mb-3">2. Estructura de campañas fragmentada</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      Tener 15 campañas pequeñas con 20€/día cada una impide que Meta acumule suficientes datos por campaña para optimizar correctamente. El algoritmo necesita mínimo 50 eventos de optimización por semana por campaña para salir del aprendizaje. Consolidar el presupuesto en menos campañas con más inversión individual mejora el CPA de forma significativa.
    </p>

    <h3 className="text-lg font-bold mt-7 mb-3">3. Audiencias demasiado pequeñas o solapadas</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      Las audiencias muy pequeñas (+500K personas en España) se agotan rápido y el CPM sube porque Meta ya ha impactado a casi todos sus miembros. Las audiencias solapadas entre conjuntos de anuncios hacen que Meta compita contra sí mismo en la misma subasta. Usa el Inspector de Solapamiento de Audiencias para detectarlo.
    </p>

    <h3 className="text-lg font-bold mt-7 mb-3">4. Landing page que no convierte</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      Si el anuncio es bueno pero la ficha de producto o la landing page no convierte, el CPA sube aunque el CTR sea excelente. Los puntos críticos son: tiempo de carga superior a 3 segundos, descripción del producto poco convincente, ausencia de prueba social (reviews) y fricción en el proceso de pago (demasiados pasos, pocas opciones de pago).
    </p>

    <h3 className="text-lg font-bold mt-7 mb-3">5. Presupuesto mal distribuido entre frío y retargeting</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      Un error frecuente es invertir demasiado en prospección fría y muy poco en retargeting. Los usuarios que ya visitaron tu web o añadieron al carrito tienen tasas de conversión 5-10 veces superiores a la audiencia fría. Destinar un 20-30% del presupuesto a retargeting de 7-14 días suele reducir el CPA global del conjunto de la cuenta.
    </p>

    <h3 className="text-lg font-bold mt-7 mb-3">6. Píxel mal configurado o con pérdida de señal</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      Si el píxel de Meta no registra correctamente todos los eventos de compra (por bloqueadores de anuncios, problemas de iOS o errores de implementación), Meta no tiene los datos reales para optimizar y busca conversiones de forma ineficiente. Activa la API de Conversiones (CAPI) del lado del servidor para recuperar señal perdida — es el paso más impactante en cualquier cuenta de eCommerce en 2026.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Plan de acción para reducir el CPA paso a paso</h2>
    <div className="space-y-4 mb-6">
      {[
        {
          paso: "Semana 1",
          accion: "Diagnóstico",
          detalle: "Auditar la cuenta: frecuencia, solapamiento de audiencias, cobertura del píxel. Identificar las campañas con CPA más alto y analizar por qué.",
        },
        {
          paso: "Semana 2",
          accion: "Quick wins",
          detalle: "Desactivar creatividades con frecuencia >3. Consolidar campañas pequeñas. Activar CAPI si no está activa. Añadir retargeting de 7 días si no existe.",
        },
        {
          paso: "Semana 3-4",
          accion: "Nuevas creatividades",
          detalle: "Producir 6-10 variaciones nuevas (al menos 3 formatos diferentes). Testear con un 20% del presupuesto antes de escalar.",
        },
        {
          paso: "Mes 2",
          accion: "Escalado",
          detalle: "Escalar los conjuntos de anuncios ganadores subiendo el presupuesto máximo un 20% cada 3 días. Activar Advantage+ Shopping para prospección fría.",
        },
      ].map(({ paso, accion, detalle }) => (
        <div key={paso} className="bg-[#1a1616] border border-white/8 rounded-xl p-5 flex gap-4">
          <div className="text-xs font-bold uppercase tracking-wider text-white/30 w-20 flex-shrink-0">{paso}</div>
          <div>
            <div className="font-bold text-sm mb-1">{accion}</div>
            <p className="text-white/60 text-xs leading-relaxed">{detalle}</p>
          </div>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">El papel del CRO en la reducción del CPA</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      El CPA no depende solo de Meta Ads. La tasa de conversión de tu tienda online es igual de importante. Si tu Shopify convierte al 1,5% y consigues subirlo al 2,5%, tu CPA cae un 40% sin tocar ni un euro de presupuesto publicitario.
    </p>
    <div className="space-y-3 mb-5">
      {[
        "Velocidad de carga — cada segundo extra reduce la conversión un 7%",
        "Imágenes de producto de alta calidad con múltiples ángulos",
        "Reseñas de clientes visibles en la ficha de producto",
        "Checkout simplificado — eliminar pasos innecesarios",
        "Apple Pay y Google Pay — reducen la fricción en mobile",
        "Urgencia y escasez real — stock limitado, ofertas con cuenta atrás",
      ].map((item) => (
        <div key={item} className="flex items-start gap-3 text-sm text-white/70">
          <span className="text-yellow-400 mt-0.5 flex-shrink-0">↑</span>
          <span>{item}</span>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Caso real: CPA de 4,8€ en Garett España</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Garett España es un eCommerce B2C de accesorios tecnológicos. Al auditarles, encontramos: creatividades con frecuencia alta, presupuesto fragmentado en demasiadas campañas y píxel sin CAPI activo. En 6 semanas, aplicando el plan de acción descrito arriba, conseguimos estos resultados:
    </p>
    <div className="grid grid-cols-2 gap-4 mb-5">
      {[
        { label: "CPA conseguido", value: "4,8 €", highlight: true },
        { label: "Clicks totales", value: "14.936" },
        { label: "Inicios de pago", value: "661" },
        { label: "Inversión total", value: "3.179 €" },
      ].map(({ label, value, highlight }) => (
        <div key={label} className={`bg-[#1a1616] border rounded-xl p-4 ${highlight ? "border-white/20" : "border-white/8"}`}>
          <div className="text-white/40 text-xs uppercase tracking-wider mb-1">{label}</div>
          <div className={`font-bold text-lg ${highlight ? "text-white" : "text-white/80"}`}>{value}</div>
        </div>
      ))}
    </div>
    <p className="text-white/70 leading-relaxed">
      Si quieres que auditemos tu cuenta de Meta Ads y te digamos exactamente qué está subiendo tu CPA, consulta nuestro <Link to="/servicios/meta-ads" className="text-white underline underline-offset-2 hover:text-white/80">servicio de gestión de Meta Ads</Link> o <Link to="/servicios/ecommerce" className="text-white underline underline-offset-2 hover:text-white/80">nuestro servicio para eCommerce</Link>.
    </p>
  </BlogPostLayout>
);

export default CPAPage;
