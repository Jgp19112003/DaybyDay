import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SEOHead from "../components/SEOHead";
import Footer from "../components/Footer";

const terms = [
  {
    id: "ab-testing",
    term: "A/B Testing",
    def: "Técnica de experimentación que consiste en mostrar dos versiones diferentes de un anuncio, página o email a grupos distintos de usuarios para determinar cuál genera mejores resultados.",
  },
  {
    id: "advantage-plus",
    term: "Advantage+",
    def: "Suite de herramientas de automatización de Meta Ads que usa inteligencia artificial para optimizar audiencias, creatividades y pujas de forma automática, reduciendo la intervención manual.",
  },
  {
    id: "automatizacion-de-marketing",
    term: "Automatización de marketing",
    def: "Uso de software para ejecutar tareas de marketing de forma automática: envío de emails, seguimiento de leads, actualización de CRM o publicación en redes sociales, sin intervención humana constante.",
  },
  {
    id: "bofu",
    term: "BOFU (Bottom of the Funnel)",
    def: "Última etapa del embudo de ventas. El usuario ya conoce la marca y está listo para comprar. Las acciones en BOFU buscan cerrar la venta: ofertas, demos, pruebas gratuitas o remarketing directo.",
  },
  {
    id: "buyer-persona",
    term: "Buyer Persona",
    def: "Representación semificticia del cliente ideal de una empresa, basada en datos reales sobre comportamiento, motivaciones, objetivos y frustraciones. Guía la estrategia de contenido, creatividades y segmentación.",
  },
  {
    id: "cac",
    term: "CAC (Customer Acquisition Cost)",
    def: "Coste total de adquirir un nuevo cliente, incluyendo inversión publicitaria, costes de ventas y marketing. Fórmula: total invertido en captación ÷ número de clientes nuevos obtenidos.",
  },
  {
    id: "churn-rate",
    term: "Churn Rate",
    def: "Tasa de cancelación o abandono. Porcentaje de clientes o suscriptores que dejan de usar un servicio en un período de tiempo. Un churn alto indica problemas de retención o insatisfacción.",
  },
  {
    id: "cpa",
    term: "CPA (Coste por Adquisición)",
    def: "Métrica que indica cuánto cuesta conseguir una conversión deseada (compra, registro, lead). Se calcula dividiendo el gasto publicitario total entre el número de conversiones obtenidas.",
  },
  {
    id: "cpc",
    term: "CPC (Coste por Click)",
    def: "Modelo de puja en publicidad digital donde el anunciante paga cada vez que un usuario hace clic en su anuncio. Es una métrica clave para evaluar la eficiencia del tráfico pagado.",
  },
  {
    id: "cpl",
    term: "CPL (Coste por Lead)",
    def: "Coste medio de obtener un lead (contacto cualificado que ha mostrado interés). Se usa principalmente en campañas de generación de demanda B2B y en sectores de servicios de alto ticket.",
  },
  {
    id: "cpm",
    term: "CPM (Coste por Mil impresiones)",
    def: "Precio que paga un anunciante por cada 1.000 impresiones de su anuncio. Es el modelo de compra más habitual en campañas de branding y awareness en Meta Ads y Google Display.",
  },
  {
    id: "crm",
    term: "CRM (Customer Relationship Management)",
    def: "Sistema de gestión de relaciones con clientes que centraliza datos de contactos, historial de interacciones y estado del pipeline de ventas. Herramientas populares: HubSpot, Pipedrive, Salesforce.",
  },
  {
    id: "cro",
    term: "CRO (Conversion Rate Optimization)",
    def: "Proceso de mejora sistemática de la tasa de conversión de una web o landing page mediante test A/B, análisis de comportamiento del usuario y cambios en diseño, copy o estructura.",
  },
  {
    id: "ctr",
    term: "CTR (Click-Through Rate)",
    def: "Porcentaje de usuarios que hacen clic en un anuncio respecto al total de impresiones. Fórmula: (clics ÷ impresiones) × 100. Un CTR alto indica que el anuncio es relevante para la audiencia.",
  },
  {
    id: "d2c",
    term: "D2C (Direct-to-Consumer)",
    def: "Modelo de negocio en el que una marca vende directamente al consumidor final sin intermediarios (distribuidores, retailers o marketplaces). Permite mayor control del margen, los datos y la experiencia de compra.",
  },
  {
    id: "embudo-de-ventas",
    term: "Embudo de ventas (Funnel)",
    def: "Representación del proceso por el que pasa un usuario desde que descubre una marca hasta que se convierte en cliente. Las etapas principales son TOFU (awareness), MOFU (consideración) y BOFU (conversión).",
  },
  {
    id: "full-funnel",
    term: "Full-Funnel",
    def: "Estrategia de marketing que cubre todas las etapas del funnel de forma coordinada: atracción de tráfico frío, nurturing de leads y conversión final. Maximiza el rendimiento de la inversión publicitaria total.",
  },
  {
    id: "google-ads",
    term: "Google Ads",
    def: "Plataforma de publicidad de pago de Google que permite mostrar anuncios en el buscador, YouTube, Gmail y la red display. Los formatos principales son Search, Shopping, Display y Performance Max.",
  },
  {
    id: "icp",
    term: "ICP (Ideal Customer Profile)",
    def: "Perfil detallado del cliente que más valor aporta a un negocio: sector, tamaño de empresa, cargo, presupuesto y necesidades. Diferente al buyer persona, el ICP se centra en características objetivas y firmográficas.",
  },
  {
    id: "landing-page",
    term: "Landing Page",
    def: "Página web diseñada específicamente para convertir a los visitantes procedentes de una campaña publicitaria. Se centra en un único objetivo: compra, registro o solicitud de información.",
  },
  {
    id: "lead-magnet",
    term: "Lead Magnet",
    def: "Recurso gratuito ofrecido a cambio de los datos de contacto de un usuario (ebook, guía, checklist, webinar). Sirve para captar leads cualificados que aún no están listos para comprar.",
  },
  {
    id: "lead-nurturing",
    term: "Lead Nurturing",
    def: "Proceso de acompañar a un lead a lo largo del funnel mediante comunicaciones personalizadas y automatizadas (email, WhatsApp, retargeting) hasta que está listo para comprar.",
  },
  {
    id: "lookalike-audience",
    term: "Lookalike Audience",
    def: "Audiencia generada por Meta Ads o Google Ads que comparte características similares con tus clientes actuales. Permite ampliar el alcance de las campañas a usuarios con alta probabilidad de conversión.",
  },
  {
    id: "ltv",
    term: "LTV (Lifetime Value)",
    def: "Valor total que genera un cliente a lo largo de toda su relación con la empresa. Métrica clave para determinar cuánto se puede invertir en captación (CAC) sin comprometer la rentabilidad.",
  },
  {
    id: "meta-ads",
    term: "Meta Ads",
    def: "Plataforma de publicidad de pago de Meta que permite mostrar anuncios en Facebook, Instagram, Messenger y Audience Network. Destaca por su capacidad de segmentación por intereses, comportamientos y audiencias similares.",
  },
  {
    id: "mofu",
    term: "MOFU (Middle of the Funnel)",
    def: "Etapa intermedia del embudo de ventas. El usuario conoce la marca y está evaluando opciones. Las acciones en MOFU buscan generar consideración: casos de éxito, comparativas, testimonios y retargeting educativo.",
  },
  {
    id: "parametros-utm",
    term: "Parámetros UTM",
    def: "Etiquetas añadidas a las URLs para rastrear el origen del tráfico en Google Analytics. Permiten identificar qué campaña, canal, medio y anuncio concreto generó cada visita o conversión.",
  },
  {
    id: "performance-max",
    term: "Performance Max",
    def: "Tipo de campaña de Google Ads que utiliza IA para mostrar anuncios en todos los canales de Google (Search, Shopping, YouTube, Display, Gmail) desde una sola campaña, optimizando automáticamente los resultados.",
  },
  {
    id: "pixel-de-meta",
    term: "Píxel de Meta",
    def: "Fragmento de código JavaScript que se instala en una web para rastrear el comportamiento de los usuarios (visitas, añadir al carrito, compras) y enviar esa información a Meta Ads para optimizar campañas.",
  },
  {
    id: "roas",
    term: "ROAS (Return on Ad Spend)",
    def: "Retorno sobre la inversión publicitaria. Mide cuántos euros de ingresos se generan por cada euro invertido en publicidad. Fórmula: ingresos atribuidos ÷ gasto publicitario. Un ROAS de 4 significa 4€ de ingreso por cada 1€ invertido.",
  },
  {
    id: "retargeting",
    term: "Retargeting",
    def: "Estrategia publicitaria que muestra anuncios a usuarios que ya han interactuado con la marca (visitado la web, visto un vídeo o abandonado el carrito). Tiene tasas de conversión muy superiores a las campañas de prospección.",
  },
  {
    id: "tofu",
    term: "TOFU (Top of the Funnel)",
    def: "Primera etapa del embudo de ventas. El usuario no conoce la marca o no es consciente de su problema. Las acciones en TOFU buscan generar alcance y awareness: vídeos, contenido educativo y campañas de prospección.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "name": "Glosario de Marketing Digital",
  "description": "Términos clave de marketing digital, paid media y automatización explicados de forma clara para empresas B2C y D2C.",
  "url": "https://www.daybydayconsulting.com/glosario",
  "hasDefinedTerm": terms.map(({ term, def }) => ({
    "@type": "DefinedTerm",
    "name": term,
    "description": def,
    "inDefinedTermSet": "https://www.daybydayconsulting.com/glosario",
  })),
};

const GlosarioPage = () => {
  const [search, setSearch] = useState("");

  const filtered = terms.filter(
    ({ term, def }) =>
      term.toLowerCase().includes(search.toLowerCase()) ||
      def.toLowerCase().includes(search.toLowerCase())
  );

  const grouped = filtered.reduce((acc, item) => {
    const letter = item.term[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(item);
    return acc;
  }, {});

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <SEOHead
        title="Glosario de Marketing Digital — Términos de Paid Media y Automatización"
        description="Glosario completo de marketing digital: ROAS, CPA, CPL, Meta Ads, Google Ads, automatización, funnel de ventas y 30 términos más explicados en español."
        canonical="/glosario"
      />

      <div className="min-h-screen bg-[#0f0c0c] text-white">
        {/* Hero */}
        <section className="pt-32 pb-12 px-4 text-center">
          <p className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-4">
            Glosario
          </p>
          <h1 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">
            Glosario de Marketing Digital
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-base sm:text-lg">
            Los términos clave de paid media, automatización y growth marketing explicados sin jerga innecesaria.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-md mx-auto">
            <input
              type="search"
              placeholder="Buscar término..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#1a1616] border border-white/10 rounded-xl px-5 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>
        </section>

        {/* Terms */}
        <section className="max-w-3xl mx-auto px-4 pb-24">
          {Object.keys(grouped)
            .sort()
            .map((letter) => (
              <div key={letter} className="mb-10">
                <div className="text-xs font-bold tracking-widest text-white/25 uppercase mb-4 border-b border-white/8 pb-2">
                  {letter}
                </div>
                <div className="space-y-4">
                  {grouped[letter].map(({ id, term, def }) => (
                    <div
                      key={term}
                      id={id}
                      style={{ scrollMarginTop: "100px" }}
                      className="bg-[#1a1616] border border-white/8 rounded-2xl p-6"
                    >
                      <h2 className="font-bold text-base mb-2">{term}</h2>
                      <p className="text-white/60 text-sm leading-relaxed">{def}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          {filtered.length === 0 && (
            <p className="text-center text-white/40 text-sm mt-12">
              No se encontraron términos para "{search}"
            </p>
          )}
        </section>
      </div>

      <Footer />
    </>
  );
};

export default GlosarioPage;
