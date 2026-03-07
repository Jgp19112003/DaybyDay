import { Helmet } from "react-helmet-async";

const FaqSection = ({ faqs, title = "Preguntas frecuentes" }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a },
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <section
        className="bg-[#0f0c0c] py-16 px-4"
        aria-label="Preguntas frecuentes"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-center mb-10">
            {title}
          </h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group bg-[#1a1616] border border-white/8 rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-white/5 transition-colors">
                  <h3 className="font-semibold text-sm sm:text-base leading-snug">
                    {q}
                  </h3>
                  <svg
                    className="w-4 h-4 flex-shrink-0 text-white/40 transition-transform duration-200 group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-5 text-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;
