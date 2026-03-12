import { Link } from "react-router-dom";
import BlogPostLayout from "../../components/BlogPostLayout";

const faqs = [
  {
    q: "¿Qué es una estrategia full-funnel en Meta Ads?",
    a: "Una estrategia full-funnel en Meta Ads significa gestionar la publicidad en las tres fases del proceso de compra: TOFU (captación de audiencia fría nueva), MOFU (consideración y retargeting intermedio) y BOFU (conversión de los usuarios más cercanos a comprar). Cada fase usa formatos, audiencias y objetivos de campaña distintos.",
  },
  {
    q: "¿Cuánto presupuesto necesito para hacer full-funnel en Meta Ads?",
    a: "Para una estrategia full-funnel efectiva en Meta Ads recomendamos un mínimo de 1.500€/mes de inversión publicitaria. La distribución orientativa es 60-70% en prospección (TOFU), 20-25% en retargeting MOFU y 10-15% en BOFU. Con menos presupuesto, el algoritmo no tiene suficientes datos para optimizar cada fase correctamente.",
  },
  {
    q: "¿Cuánto tiempo tarda en funcionar una estrategia full-funnel?",
    a: "Los primeros resultados del funnel completo se ven entre la semana 3 y 6, una vez que las campañas de prospección han acumulado suficiente tráfico para alimentar el retargeting. El sistema alcanza su rendimiento óptimo entre el mes 2 y 3, cuando todos los segmentos tienen datos suficientes para que el algoritmo optimice bien.",
  },
];

const FullFunnelMetaAdsPage = ({ openCalendly }) => (
  <BlogPostLayout
    title="Estrategia Full-Funnel de Meta Ads para marcas D2C — Guía completa"
    description="Aprende a estructurar tus campañas de Meta Ads en tres fases (TOFU, MOFU, BOFU) para captar audiencia fría, cultivarla y convertirla en clientes. Guía completa con ejemplos reales."
    slug="estrategia-full-funnel-meta-ads-d2c"
    datePublished="2026-03-10"
    readingTime="8 min"
    category="Meta Ads"
    faqs={faqs}
    openCalendly={openCalendly}
  >
    <h2 className="text-2xl font-black mt-10 mb-4">Qué es el funnel de ventas en Meta Ads y por qué importa</h2>
    <p className="text-white/70 leading-relaxed mb-5">
      La mayoría de anunciantes en Meta Ads cometen el mismo error: lanzar anuncios de conversión directa a audiencias frías y esperar ventas. El problema es que un usuario que no conoce tu marca no está listo para comprar. Necesita pasar por varias fases antes de convertir.
    </p>
    <p className="text-white/70 leading-relaxed mb-5">
      Una estrategia full-funnel organiza tus campañas de Meta Ads para acompañar al usuario en cada etapa: desde que descubre tu marca hasta que compra y repite. Es la diferencia entre quemar presupuesto y construir un sistema de adquisición predecible.
    </p>
    <div className="bg-[#1a1616] border border-white/8 rounded-xl p-5 mb-6">
      <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Las tres fases del funnel</p>
      <div className="space-y-2">
        {[
          { fase: "TOFU", nombre: "Top of Funnel", desc: "Captación — audiencias frías que no conocen tu marca" },
          { fase: "MOFU", nombre: "Middle of Funnel", desc: "Consideración — usuarios que han interactuado pero no han comprado" },
          { fase: "BOFU", nombre: "Bottom of Funnel", desc: "Conversión — usuarios con alta intención de compra" },
        ].map(({ fase, nombre, desc }) => (
          <div key={fase} className="flex items-start gap-3 text-sm">
            <span className="font-mono text-[#de0015] font-bold w-14 flex-shrink-0">{fase}</span>
            <div>
              <span className="text-white font-semibold">{nombre}: </span>
              <span className="text-white/60">{desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">TOFU: cómo captar audiencia fría con Meta Ads</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      El TOFU es la fase de descubrimiento. El objetivo no es vender, sino conseguir que usuarios que no te conocen interactúen con tu marca por primera vez. En Meta Ads, el TOFU funciona mejor con contenido que genera curiosidad o emoción, no con anuncios de producto directo.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">Formatos más efectivos para TOFU</h3>
    <div className="space-y-3 mb-6">
      {[
        { formato: "Vídeo corto (15-30s)", uso: "Genera reconocimiento de marca rápido. CTR más alto que imagen estática en audiencias frías." },
        { formato: "Carrusel de problema/solución", uso: "Educa al usuario sobre su problema antes de presentar tu solución. Excelente para marcas nuevas." },
        { formato: "UGC (contenido de usuario)", uso: "La forma más efectiva de generar confianza inicial. El algoritmo de Meta lo favorece por su apariencia orgánica." },
        { formato: "Reels y Stories nativas", uso: "Integración perfecta con el feed orgánico. Menor fricción y menor CPM." },
      ].map(({ formato, uso }) => (
        <div key={formato} className="bg-[#1a1616] border border-white/8 rounded-xl p-4">
          <p className="font-semibold text-white text-sm mb-1">{formato}</p>
          <p className="text-white/55 text-sm">{uso}</p>
        </div>
      ))}
    </div>

    <h3 className="text-lg font-bold mt-6 mb-3">Segmentación TOFU: qué funciona en 2026</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      La segmentación por intereses ha perdido precisión tras los cambios de iOS y las restricciones de datos. En 2026, las audiencias que mejor funcionan en TOFU son:
    </p>
    <div className="space-y-2 mb-5">
      {[
        "Advantage+ Audience (dejar que el algoritmo explore sin restricciones de intereses)",
        "Lookalike 1-3% de compradores de los últimos 180 días",
        "Lookalike 1-3% de visitantes de producto con tiempo >30s",
        "Audiencias amplias por país + edad sin segmentación adicional (funciona mejor de lo esperado)",
      ].map((item) => (
        <div key={item} className="flex items-start gap-3 text-sm text-white/70">
          <span className="text-[#de0015] mt-0.5 flex-shrink-0">→</span>
          <span>{item}</span>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">MOFU: retargeting inteligente para usuarios tibios</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      El MOFU es la fase más subestimada del funnel. Aquí trabajas con usuarios que ya te conocen pero no han comprado: visitantes de tu web, personas que vieron tus vídeos, interactuaron con tus posts o guardaron tus anuncios. Están más cerca de comprar que la audiencia fría, pero todavía necesitan un empujón.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">Segmentos MOFU más rentables</h3>
    <div className="grid grid-cols-1 gap-3 mb-6">
      {[
        { segmento: "Vistas de vídeo 50-75%", ventana: "30 días", mensaje: "Presenta el producto con más detalle. Ya mostraron interés." },
        { segmento: "Visitantes web sin compra", ventana: "14 días", mensaje: "Recordatorio de marca + oferta de prueba o garantía." },
        { segmento: "Add to Cart sin compra", ventana: "7 días", mensaje: "Urgencia y eliminación de objeciones. Oferta temporal si es posible." },
        { segmento: "Engagement Instagram/Facebook", ventana: "60 días", mensaje: "Social proof y contenido educativo. Aún en fase de consideración." },
      ].map(({ segmento, ventana, mensaje }) => (
        <div key={segmento} className="bg-[#1a1616] border border-white/8 rounded-xl p-4">
          <div className="flex justify-between items-center mb-1">
            <p className="font-semibold text-white text-sm">{segmento}</p>
            <span className="text-white/30 text-xs">{ventana}</span>
          </div>
          <p className="text-white/55 text-sm">{mensaje}</p>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">BOFU: convertir a los usuarios más cercanos a comprar</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      El BOFU es donde ocurren las ventas. Aquí te diriges a usuarios que iniciaron el proceso de compra pero no lo terminaron: quienes añadieron al carrito, iniciaron el checkout, o compraron hace más de 90 días y puedes reactivar.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">Tácticas BOFU de alta conversión</h3>
    <div className="space-y-3 mb-6">
      {[
        "Dynamic Product Ads (DPA): muestra exactamente el producto que vio el usuario",
        "Carrito abandonado con urgencia temporal: descuento o envío gratis con límite de 24-48h",
        "Testimonios específicos del producto que visitaron: reduce la objeción de incertidumbre",
        "Garantías y políticas de devolución: elimina el riesgo percibido en el momento de decisión",
        "Cross-sell post-compra: a compradores de los últimos 30 días con productos complementarios",
      ].map((item) => (
        <div key={item} className="flex items-start gap-3 text-sm text-white/70">
          <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
          <span>{item}</span>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Cómo distribuir el presupuesto en el funnel</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Una pregunta habitual: ¿cuánto presupuesto poner en cada fase? No hay una fórmula universal, pero estos son los rangos que usamos como punto de partida según el volumen mensual de inversión:
    </p>
    <div className="grid grid-cols-3 gap-3 mb-6">
      {[
        { fase: "TOFU", pct: "60-70%", color: "text-blue-400", desc: "Prospección fría" },
        { fase: "MOFU", pct: "20-25%", color: "text-yellow-400", desc: "Retargeting tibio" },
        { fase: "BOFU", pct: "10-15%", color: "text-green-400", desc: "Conversión directa" },
      ].map(({ fase, pct, color, desc }) => (
        <div key={fase} className="bg-[#1a1616] border border-white/8 rounded-xl p-4 text-center">
          <div className="text-white/40 text-xs mb-1">{fase}</div>
          <div className={`font-bold text-lg ${color}`}>{pct}</div>
          <div className="text-white/40 text-xs mt-1">{desc}</div>
        </div>
      ))}
    </div>
    <p className="text-white/70 leading-relaxed mb-5">
      A medida que el TOFU genera más tráfico y datos, el MOFU y el BOFU se vuelven más eficientes. El ratio cambia con el tiempo: en los primeros meses el TOFU necesita más inversión; en marcas más maduras, el MOFU y BOFU pueden representar hasta un 40% del gasto total.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Caso real: full-funnel en marca D2C de moda con Advantage+</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Una marca española de ropa D2C llegó a DayByDay con campañas centradas únicamente en conversión directa. Su ROAS estaba estancado en 1.8x y el CPA no bajaba de 35€. Reestructuramos su cuenta con una estrategia full-funnel completa.
    </p>
    <div className="bg-[#1a1616] border border-white/8 rounded-xl p-6 mb-5">
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: "ROAS antes", value: "1,8x" },
          { label: "ROAS después (mes 3)", value: "4,2x" },
          { label: "CPA antes", value: "35 €" },
          { label: "CPA después", value: "14 €" },
        ].map(({ label, value }) => (
          <div key={label}>
            <div className="text-white/40 text-xs uppercase tracking-wider mb-1">{label}</div>
            <div className="font-bold text-white">{value}</div>
          </div>
        ))}
      </div>
    </div>
    <p className="text-white/70 leading-relaxed mb-5">
      La clave fue tres cambios simultáneos: mover la prospección a Advantage+ Shopping, separar el retargeting por ventanas de tiempo (7 días vs 30 días con mensajes distintos), y producir UGC específico para cada fase del funnel. Si quieres aplicar esta estrategia en tu negocio, consulta nuestro{" "}
      <Link to="/servicios/meta-ads" className="text-white underline underline-offset-2 hover:text-white/80">
        servicio de gestión de Meta Ads
      </Link>{" "}
      o nuestro servicio de{" "}
      <Link to="/servicios/ecommerce" className="text-white underline underline-offset-2 hover:text-white/80">
        crecimiento para eCommerce
      </Link>.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Los errores más comunes al implementar un funnel en Meta Ads</h2>
    <div className="space-y-3 mb-6">
      {[
        { error: "Solapamiento de audiencias", solucion: "Exclusión activa — excluir en BOFU a compradores recientes y en MOFU a los segmentos de BOFU" },
        { error: "Mismo creativo en todo el funnel", solucion: "Mensajes distintos por fase: inspiración en TOFU, información en MOFU, urgencia en BOFU" },
        { error: "Presupuesto insuficiente en TOFU", solucion: "Sin tráfico nuevo el funnel se seca. El TOFU alimenta las otras dos fases" },
        { error: "No excluir compradores recientes", solucion: "Excluir compradores de los últimos 30 días para no gastar en quien ya convirtió" },
        { error: "Ventanas de retargeting demasiado largas", solucion: "Usar ventanas cortas (7-14 días) para BOFU. Los usuarios calientes pierden intención rápido" },
      ].map(({ error, solucion }) => (
        <div key={error} className="bg-[#1a1616] border border-white/8 rounded-xl p-4">
          <p className="font-semibold text-red-400 text-sm mb-1">✗ {error}</p>
          <p className="text-white/55 text-sm">→ {solucion}</p>
        </div>
      ))}
    </div>

    <p className="text-white/70 leading-relaxed">
      Si quieres entender mejor los términos usados en este artículo, visita nuestro{" "}
      <Link to="/glosario" className="text-white underline underline-offset-2 hover:text-white/80">
        glosario de marketing digital
      </Link>. Para una visión completa de cómo estructurar y escalar Meta Ads en tu ecommerce D2C, lee la{" "}
      <Link to="/blog/guia-meta-ads-ecommerce-d2c-espana-2026" className="text-white underline underline-offset-2 hover:text-white/80">
        guía completa de Meta Ads para ecommerce en España 2026
      </Link>. Y si prefieres que gestionemos tu estrategia full-funnel directamente, agenda una llamada estratégica gratuita con nuestro equipo.
    </p>
  </BlogPostLayout>
);

export default FullFunnelMetaAdsPage;
