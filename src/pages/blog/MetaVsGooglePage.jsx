import { Link } from "react-router-dom";
import BlogPostLayout from "../../components/BlogPostLayout";

const faqs = [
  {
    q: "¿Es mejor empezar por Meta Ads o Google Ads?",
    a: "Para la mayoría de negocios B2C y eCommerce, Meta Ads es el punto de partida más eficiente porque permite generar demanda entre audiencias que todavía no te conocen. Google Ads funciona mejor cuando ya existe búsqueda activa de tu producto o servicio. Si tienes presupuesto limitado, empieza por Meta y añade Google Ads una vez que el funnel esté validado.",
  },
  {
    q: "¿Cuánto presupuesto necesito para Meta Ads vs Google Ads?",
    a: "Para Meta Ads el presupuesto mínimo recomendado para obtener datos relevantes es de 1.500€/mes de inversión en plataforma. Para Google Ads (Search), el presupuesto depende mucho del CPC de las palabras clave de tu sector — puede arrancar con 500-800€/mes en nichos con poca competencia. En ambos casos, el coste de gestión de la agencia se añade aparte.",
  },
  {
    q: "¿Se pueden usar Meta Ads y Google Ads al mismo tiempo?",
    a: "Sí, y es lo recomendable para una estrategia full-funnel completa. Meta Ads genera awareness y captura demanda latente (usuarios que podrían comprar pero no están buscando activamente). Google Ads captura la demanda existente cuando el usuario ya busca el producto. Juntos cubren todo el funnel y se complementan para maximizar el ROAS total.",
  },
];

const MetaVsGooglePage = ({ openCalendly }) => (
  <BlogPostLayout
    title="Meta Ads vs Google Ads: cuál elegir para tu negocio en 2026"
    description="¿Meta Ads o Google Ads? La respuesta depende de tu modelo de negocio, tu buyer persona y el estado de la demanda de tu producto. Te explicamos las diferencias clave y cuándo usar cada plataforma."
    slug="meta-ads-vs-google-ads"
    datePublished="2026-03-08"
    readingTime="7 min"
    category="Paid Media"
    faqs={faqs}
    openCalendly={openCalendly}
  >
    <p className="text-white/70 leading-relaxed mb-6 text-base border-l-2 border-white/20 pl-4 italic">
      La pregunta más frecuente que nos hacen los nuevos clientes: ¿invierto en Meta Ads o en Google Ads? La respuesta corta es que no son competidores, sino complementarios. Pero según tu situación, uno te dará retorno mucho antes que el otro.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">La diferencia fundamental: demanda existente vs demanda generada</h2>
    <p className="text-white/70 leading-relaxed mb-5">
      Antes de elegir la plataforma, hay que entender qué tipo de demanda tiene tu producto o servicio.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <div className="bg-[#1a1616] border border-white/8 rounded-xl p-5">
        <div className="text-xs font-bold uppercase tracking-wider text-white/30 mb-3">Google Ads</div>
        <p className="text-white/70 text-sm leading-relaxed">
          Captura demanda <strong className="text-white">existente</strong>. El usuario ya sabe lo que quiere y lo está buscando. Tú apareces en el momento exacto de la intención de compra.
        </p>
        <div className="mt-3 text-xs text-white/40">Ideal para: servicios locales, software B2B, productos de alta intención</div>
      </div>
      <div className="bg-[#1a1616] border border-white/8 rounded-xl p-5">
        <div className="text-xs font-bold uppercase tracking-wider text-white/30 mb-3">Meta Ads</div>
        <p className="text-white/70 text-sm leading-relaxed">
          Genera demanda <strong className="text-white">nueva</strong>. Interrumpe al usuario mientras consume contenido y le presenta tu producto aunque no lo estuviera buscando activamente.
        </p>
        <div className="mt-3 text-xs text-white/40">Ideal para: eCommerce B2C, D2C, productos de impulso, lifestyle</div>
      </div>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Meta Ads: cuándo es la mejor opción</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Meta Ads (Facebook e Instagram) es la plataforma ideal cuando:
    </p>
    <div className="space-y-3 mb-5">
      {[
        "Tu producto se ve y genera deseo de forma visual — moda, decoración, belleza, salud",
        "Vendes a consumidores finales (B2C) con un ticket de 20€ a 500€",
        "Tu buyer persona se puede definir por intereses, comportamientos o datos demográficos",
        "Quieres escalar a audiencias que aún no te conocen (prospección fría)",
        "Tienes creatividades de calidad o puedes producirlas",
        "Tu eCommerce en Shopify tiene el píxel de Meta bien configurado",
      ].map((item) => (
        <div key={item} className="flex items-start gap-3 text-sm text-white/70">
          <span className="text-blue-400 mt-0.5 flex-shrink-0">→</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p className="text-white/70 leading-relaxed mb-5">
      Meta Ads también funciona muy bien para retargeting: llegar a usuarios que ya visitaron tu web, añadieron al carrito o interactuaron con tu contenido. El retargeting en Meta tiene tasas de conversión muy superiores a la prospección fría porque impacta a usuarios con intención demostrada.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Google Ads: cuándo es la mejor opción</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Google Ads (Search, Shopping, YouTube) es la opción preferente cuando:
    </p>
    <div className="space-y-3 mb-5">
      {[
        "Tu producto tiene búsqueda activa: la gente ya busca 'comprar X' o 'mejor Y'",
        "Vendes servicios de alto ticket donde el usuario investiga antes de contratar",
        "Tienes un catálogo de productos con EANs bien estructurado (Google Shopping)",
        "Tu sector tiene alta intención de compra en búsqueda (seguros, abogados, fontaneros)",
        "Quieres capturar demanda local (búsquedas 'cerca de mí')",
      ].map((item) => (
        <div key={item} className="flex items-start gap-3 text-sm text-white/70">
          <span className="text-green-400 mt-0.5 flex-shrink-0">→</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p className="text-white/70 leading-relaxed mb-5">
      Performance Max, el tipo de campaña más potente de Google Ads en 2026, combina todos los canales de Google (Search, Shopping, YouTube, Display) desde una sola campaña usando IA para optimizar. Es especialmente potente para eCommerce con catálogos bien estructurados.
    </p>

    <h2 className="text-2xl font-black mt-10 mb-4">Comparativa directa: Meta Ads vs Google Ads</h2>
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left py-3 pr-4 text-white/40 font-semibold text-xs uppercase tracking-wider">Factor</th>
            <th className="text-left py-3 pr-4 text-white/70 font-semibold">Meta Ads</th>
            <th className="text-left py-3 text-white/70 font-semibold">Google Ads</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {[
            ["Tipo de demanda", "Generada (push)", "Existente (pull)"],
            ["Segmentación", "Por audiencias e intereses", "Por palabras clave e intención"],
            ["Formato principal", "Imagen, vídeo, carrusel", "Texto, Shopping, vídeo (YouTube)"],
            ["Mejor para", "eCommerce B2C, D2C, lifestyle", "Servicios, B2B, alta intención"],
            ["Velocidad de aprendizaje", "2-3 semanas", "4-6 semanas"],
            ["Presupuesto mínimo", "1.500€/mes", "Variable según CPC del sector"],
            ["ROI a corto plazo", "Alto en eCommerce", "Alto en servicios de alta intención"],
          ].map(([factor, meta, google]) => (
            <tr key={factor}>
              <td className="py-3 pr-4 text-white/40 text-xs">{factor}</td>
              <td className="py-3 pr-4 text-white/70">{meta}</td>
              <td className="py-3 text-white/70">{google}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">La estrategia óptima: full-funnel con ambas plataformas</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      La combinación que maximiza el retorno total es usar Meta Ads para la parte alta del funnel (awareness y prospección) y Google Ads para la parte baja (captura de demanda con alta intención). Juntos cubren todo el journey del cliente.
    </p>
    <div className="bg-[#1a1616] border border-white/8 rounded-xl p-6 mb-5">
      <div className="space-y-4">
        {[
          { etapa: "TOFU — Awareness", plataforma: "Meta Ads", accion: "Vídeo y carrusel de producto a audiencias frías" },
          { etapa: "MOFU — Consideración", plataforma: "Meta Ads + YouTube", accion: "Retargeting a visitantes de web y redes sociales" },
          { etapa: "BOFU — Conversión", plataforma: "Google Shopping + Search", accion: "Captura búsquedas de producto con alta intención" },
          { etapa: "Retención", plataforma: "Meta Ads + Email", accion: "Upsell y reactivación de clientes existentes" },
        ].map(({ etapa, plataforma, accion }) => (
          <div key={etapa} className="flex items-start gap-4">
            <div className="text-xs font-bold uppercase tracking-wider text-white/30 w-28 flex-shrink-0 mt-0.5">{etapa}</div>
            <div>
              <div className="text-white text-sm font-semibold mb-0.5">{plataforma}</div>
              <div className="text-white/50 text-xs">{accion}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <h2 className="text-2xl font-black mt-10 mb-4">Caso real: estrategia multicanal con Meta + Google</h2>
    <p className="text-white/70 leading-relaxed mb-4">
      Evercreate gestionó las campañas de paid media para una de las cinco mejores universidades privadas de España. La estrategia combinó Meta Ads para captación masiva y Google Ads para búsqueda de alta intención. Estos son los resultados:
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
      {[
        { label: "Meta Ads invertidos", value: "193.829 €" },
        { label: "Google Ads invertidos", value: "59.850 €" },
        { label: "CTR Google Search", value: "10,35%" },
        { label: "CPC Meta Ads", value: "0,24 €" },
      ].map(({ label, value }) => (
        <div key={label} className="bg-[#1a1616] border border-white/8 rounded-xl p-4 text-center">
          <div className="font-bold text-white text-lg">{value}</div>
          <div className="text-white/40 text-xs mt-1">{label}</div>
        </div>
      ))}
    </div>
    <p className="text-white/70 leading-relaxed">
      Si quieres una estrategia de <Link to="/servicios/paid-media" className="text-white underline underline-offset-2 hover:text-white/80">paid media multicanal</Link> diseñada para tu negocio, o profundizar en los conceptos usados aquí, consulta nuestro <Link to="/glosario" className="text-white underline underline-offset-2 hover:text-white/80">glosario de marketing digital</Link>.
    </p>
  </BlogPostLayout>
);

export default MetaVsGooglePage;
