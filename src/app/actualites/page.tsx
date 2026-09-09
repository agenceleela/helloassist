import Link from 'next/link';

export const metadata = {
  title: 'Actualités Hello Assist | Guadeloupe',
  description: 'Suivez l\'actualité de Hello Assist, votre secrétaire indépendante au Moule. Nouvelles, annonces et informations sur nos services.',
};

export default function Actualites() {
  // Exemple d'article - à remplacer par de vrais articles plus tard
  const articles = [
    {
      href: '/articles/secretariat-distance-pme-guadeloupe',
      date: '15 janvier 2025',
      category: 'PME',
      categoryColor: 'bg-[#1a3a5c]/10 text-[#1a3a5c]',
      title: 'Comment optimiser la gestion administrative de votre PME en Guadeloupe ?',
      excerpt: 'Optimisez la gestion administrative de votre PME en Guadeloupe. Déléguez votre secrétariat à distance pour vous concentrer sur votre croissance locale.',
      readTime: '5 min de lecture',
    },
    {
      href: '/articles/secretariat-distance-associations-guadeloupe',
      date: '10 janvier 2025',
      category: 'Associations',
      categoryColor: 'bg-[#d63384]/10 text-[#d63384]',
      title: 'Secrétariat à distance pour les associations en Guadeloupe',
      excerpt: 'Simplifiez la gestion de votre association en Guadeloupe. Déléguez l\'administratif, les subventions et la communication pour vous concentrer sur votre mission.',
      readTime: '4 min de lecture',
    },
    {
      href: '/articles/aide-administrative-particuliers-guadeloupe',
      date: '5 janvier 2025',
      category: 'Particuliers',
      categoryColor: 'bg-[#f59e0b]/10 text-[#f59e0b]',
      title: 'Aide administrative à distance en Guadeloupe',
      excerpt: 'Ne laissez plus la paperasse vous stresser. Hello Assist vous aide dans vos démarches CAF, impôts, assurance et courrier en Guadeloupe.',
      readTime: '6 min de lecture',
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
            Découvrez nos actualités, articles et conseils pour vous aider dans votre gestion administrative au quotidien en Guadeloupe.
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-8">
          {articles.map((article, index) => (
            <Link 
              key={index}
              href={article.href}
              className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${article.categoryColor}`}>
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>

                <h2 className="text-2xl font-bold text-[#1a3a5c] mb-3 group-hover:text-[#d63384] transition-colors">
                  {article.title}
                </h2>

                <p className="text-gray-600 mb-6 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center text-[#1a3a5c] font-semibold group-hover:text-[#d63384] transition-colors">
                  Lire l'article
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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