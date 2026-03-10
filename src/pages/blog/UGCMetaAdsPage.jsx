import { Link } from "react-router-dom";
import BlogPostLayout from "../../components/BlogPostLayout";

const faqs = [
  {
    q: "¿Qué es el UGC en publicidad y por qué funciona tan bien?",
    a: "UGC (User Generated Content) es contenido creado por usuarios reales o que imita el estilo de contenido orgánico de usuarios. Funciona en publicidad porque tiene menor fricción visual (no parece un anuncio), genera más confianza que el contenido de marca profesional y el algoritmo de Meta lo favorece porque tiene tasas de retención y engagement más altas que los anuncios tradicionales.",
  },
  {
    q: "¿Cómo conseguir UGC para mis anuncios si soy una marca nueva?",
    a: "Hay varias opciones: enviar producto a microinfluencers o clientes actuales a cambio de contenido de vídeo, contratar creadores de UGC (existen plataformas especializadas como Billo o Trend), o grabar tú mismo contenido con teléfono en formato vertical sin edición excesiva. El aspecto 'casero' es precisamente lo que lo hace efectivo.",
  },
  {
    q: "¿Cuánto duran los creativos UGC antes de fatigarse en Meta Ads?",
    a: "Con presupuestos medios (1.000-5.000€/mes), un buen creativo UGC puede durar entre 3-6 semanas antes de que la frecuencia suba y el CTR baje. A mayor presupuesto, la fatiga es más rápida. Lo recomendable es tener siempre 2-3 nuevas variaciones en producción para reemplazar los que se fatiguen.",
  },
];

const UGCMetaAdsPage = ({ openCalendly }) => (
  <BlogPostLayout
    title="Cómo usar UGC para potenciar tus Meta Ads y reducir el CPM"
    description="El UGC (User Generated Content) es el formato publicitario con mejor rendimiento en Meta Ads en 2026. Aprende a conseguirlo, producirlo y escalarlo para reducir el CPM y mejorar el ROAS."
    slug="ugc-meta-ads"
    datePublished="2026-03-10"
    readingTime="6 min"
    category="Meta Ads"
    faqs={faqs}
    openCalendly={openCalendly}
  >
    <h2 className="text-2xl font-black mt-10 mb-4">Por qué el UGC domina la publicidad en Meta Ads en 2026</h2>
    <p className="text-white/70 leading-relaxed mb-5">
      El comportamiento del usuario en Meta e Instagram ha cambiado radicalmente: el contenido de marca pulido y produccionado genera desconfianza. Los usuarios están entrenados para ignorar lo que parece un anuncio tradicional y prestan más atención al contenido que parece orgánico, personal y auténtico.
    </p>
    <p className="text-white/70 leading-relaxed mb-5">
      El UGC imita ese formato. Un vídeo en vertical, grabado con teléfono, con una persona real hablando a cámara sobre un producto, genera más retención, más clics y más conversiones que un spot de vídeo producido con presupuesto alto. Y el algoritmo de Meta lo sabe: el CPM del UGC es entre un 30-50% más bajo que el contenido de marca tradicional.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Los tres tipos de UGC que mejor funcionan en Meta Ads</h2>
    <div className="space-y-4 mb-6">
      {[
        {
          tipo: "1. Review en vídeo (unboxing/testimonial)",
          desc: "Una persona real muestra el producto, explica su experiencia y da su opinión honesta. El formato más efectivo para productos de consumo (belleza, salud, lifestyle, moda).",
          clave: "Clave: sin guion rígido, que se note espontáneo. Máximo 30-45 segundos.",
        },
        {
          tipo: "2. Tutorial o 'cómo lo uso'",
          desc: "El usuario muestra cómo integra el producto en su vida diaria. Ideal para productos que necesitan demostración de uso o tienen múltiples aplicaciones.",
          clave: "Clave: primer plano del producto en uso, subtítulos para consumo sin audio.",
        },
        {
          tipo: "3. Antes y después",
          desc: "Comparativa del estado antes y después de usar el producto o servicio. Altamente efectivo en sectores como fitness, skincare, servicios de marketing y formación.",
          clave: "Clave: el 'después' debe ser específico y cuantificable ('perdí 8kg en 3 meses' vs 'me siento mejor').",
        },
      ].map(({ tipo, desc, clave }) => (
        <div key={tipo} className="bg-[#1a1616] border border-white/8 rounded-xl p-5">
          <p className="font-bold text-white text-sm mb-2">{tipo}</p>
          <p className="text-white/60 text-sm mb-2">{desc}</p>
          <p className="text-[#de0015] text-xs">{clave}</p>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Cómo conseguir UGC para tus campañas</h2>

    <h3 className="text-lg font-bold mt-6 mb-3">Opción 1: creadores de UGC especializados</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      Existen creadores especializados en producir contenido UGC para publicidad. No son influencers (no tienen audiencia propia ni grandes seguidores) — son personas que saben crear contenido que parece orgánico pero está diseñado para convertir en anuncios. El coste es entre 50-200€ por vídeo según el creador y la complejidad.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">Opción 2: clientes actuales a cambio de producto o descuento</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      Si tienes clientes satisfechos, pídeles que graben un vídeo de su experiencia a cambio de un descuento o un regalo. El contenido más auténtico viene de personas que han tenido un resultado real con tu producto. Consejo: dales una guía sencilla de qué grabar (duración, puntos a tocar) pero no un guion exacto.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">Opción 3: microinfluencers del sector</h3>
    <p className="text-white/70 leading-relaxed mb-4">
      Los microinfluencers (1.000-50.000 seguidores) suelen aceptar colaboraciones por producto o a bajo coste y producen contenido más auténtico que las grandes cuentas. Busca perfiles cuya audiencia coincida con tu buyer persona y negocia los derechos de uso para publicidad pagada.
    </p>

    <h3 className="text-lg font-bold mt-6 mb-3">Opción 4: contenido interno "casero"</h3>
    <p className="text-white/70 leading-relaxed mb-5">
      Tu propio equipo puede crear UGC efectivo. Vídeos grabados con teléfono, en entornos reales (no estudios), con personas del equipo o los propios fundadores hablando del producto. El aspecto "no produccionado" es parte del formato, no un defecto.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Estructura de un anuncio UGC de alto rendimiento</h2>
    <div className="bg-[#1a1616] border border-white/8 rounded-xl p-5 mb-6">
      <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Estructura en los primeros 3 segundos</p>
      <div className="space-y-2 text-sm text-white/65">
        {[
          "Hook visual (0-1s): imagen llamativa o movimiento que para el scroll",
          "Hook verbal (1-3s): frase que plantea el problema o genera curiosidad ('¿sabías que el 80% de los anuncios de Meta fallan por esto?')",
          "Desarrollo (3-25s): explicación del beneficio, demostración o historia",
          "CTA (últimos 5s): acción concreta y directa ('Enlace en bio', 'Desliza hacia arriba', 'Consíguelo ahora')",
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-[#de0015]">→</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Cómo testear UGC en Meta Ads: el sistema de iteración</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      No todos los UGC funcionan igual. El sistema que usamos en DayByDay para identificar los creativos ganadores:
    </p>
    <div className="space-y-2 mb-6">
      {[
        "Lanza siempre mínimo 3-5 variaciones UGC al mismo tiempo con el mismo presupuesto",
        "Deja que corran entre 5-7 días antes de comparar rendimiento (necesitan datos suficientes)",
        "Identifica el ganador por CTR, CPC y tasa de conversión — no por likes o comentarios",
        "Escala el presupuesto del ganador gradualmente (+20% cada semana)",
        "Mantén el ganador activo mientras el CTR no caiga más del 40% de su pico inicial",
        "Siempre ten 2-3 nuevas variaciones en producción para reemplazar creativos fatigados",
      ].map((item) => (
        <div key={item} className="flex items-start gap-3 text-sm text-white/70">
          <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
          <span>{item}</span>
        </div>
      ))}
    </div>

    <p className="text-white/70 leading-relaxed">
      Si quieres conocer cómo integramos UGC en nuestra estrategia de gestión, consulta nuestro{" "}
      <Link to="/servicios/meta-ads" className="text-white underline underline-offset-2 hover:text-white/80">
        servicio de Meta Ads
      </Link>{" "}
      o la{" "}
      <Link to="/blog/estrategia-full-funnel-meta-ads-d2c" className="text-white underline underline-offset-2 hover:text-white/80">
        guía de estrategia full-funnel para D2C
      </Link>.
    </p>
  </BlogPostLayout>
);

export default UGCMetaAdsPage;
