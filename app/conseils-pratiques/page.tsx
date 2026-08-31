import Link from 'next/link';

export const metadata = {
  title: 'Conseils pratiques en gestion administrative | Hello Assist',
  description: 'Retrouvez nos articles et conseils pour optimiser votre gestion administrative en Guadeloupe. PME, associations et particuliers : découvrez nos ressources.',
};

export default function ConseilsPratiques() {
  const articles = [
    {
      href: '/articles/secretariat-distance-pme-guadeloupe',
      category: 'PME & Entreprises',
      categoryColor: 'bg-[#1a3a5c]/10 text-[#1a3a5c]',
      title: 'Comment optimiser la gestion administrative de votre PME en Guadeloupe en 2024 ?',
      excerpt: 'Optimisez la gestion administrative de votre PME en Guadeloupe. Déléguez votre secrétariat à distance pour vous concentrer sur votre croissance locale.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      href: '/articles/secretariat-distance-associations-guadeloupe',
      category: 'Associations',
      categoryColor: 'bg-[#d63384]/10 text-[#d63384]',
      title: 'Secrétariat à distance pour les associations en Guadeloupe : gagnez du temps pour votre mission',
      excerpt: 'Simplifiez la gestion de votre association en Guadeloupe. Déléguez l\'administratif, les subventions et la communication pour vous concentrer sur votre mission.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      href: '/articles/aide-administrative-particuliers-guadeloupe',
      category: 'Particuliers',
      categoryColor: 'bg-[#f59e0b]/10 text-[#f59e0b]',
      title: 'Aide administrative à distance en Guadeloupe : simplifiez vos démarches au quotidien',
      excerpt: 'Ne laissez plus la paperasse vous stresser. Hello Assist vous aide dans vos démarches CAF, impôts, assurance et courrier en Guadeloupe.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-sm font-medium rounded-full mb-4">
            Actualités / Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a5c] mb-4">
            Restez <span className="text-[#d63384] italic">informé(e)</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Découvrez nos articles, conseils et actualités pour vous aider dans votre gestion administrative au quotidien.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link 
              key={index}
              href={article.href}
              className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${article.categoryColor}`}>
                  {article.icon}
                </div>

                {/* Category */}
                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${article.categoryColor}`}>
                  {article.category}
                </span>

                {/* Title */}
                <h2 className="text-xl font-bold text-[#1a3a5c] mb-3 group-hover:text-[#d63384] transition-colors">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Link */}
                <div className="flex items-center text-[#1a3a5c] font-semibold group-hover:text-[#d63384] transition-colors">
                  Lire l'article
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-[#1a3a5c] to-[#1a3a5c]/90 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Besoin d'un accompagnement personnalisé ?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Nos articles ne répondent pas à toutes vos questions ? Contactez-nous pour un devis gratuit et adapté à vos besoins spécifiques.
            </p>
            <Link 
              href="/#contact"
              className="inline-block bg-[#d63384] hover:bg-[#b52a6f] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}