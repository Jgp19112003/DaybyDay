import { Helmet } from "react-helmet-async";

const BASE_URL = "https://www.daybydayconsulting.com";
const DEFAULT_IMAGE = `${BASE_URL}/images/og-image.png`;

const SEOHead = ({ title, description, canonical, schema, isArticle = false, datePublished }) => {
  const fullTitle = title
    ? `${title} | DayByDay Consulting`
    : "Agencia de Marketing con IA y Automatización | DayByDay Consulting";

  const fullCanonical = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:type" content={isArticle ? "article" : "website"} />
      <meta property="og:locale" content="es_ES" />
      {isArticle && datePublished && <meta property="article:published_time" content={datePublished} />}
      {isArticle && <meta property="article:author" content="https://www.daybydayconsulting.com" />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />

      {/* JSON-LD schema (optional per-page) */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
