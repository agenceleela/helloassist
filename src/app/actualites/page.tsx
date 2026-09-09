import Link from 'next/link';

export const metadata = {
  title: 'Actualités Hello Assist | Guadeloupe',
  description: 'Suivez l\'actualité de Hello Assist, votre secrétaire indépendante au Moule. Nouvelles, annonces et informations sur nos services.',
};

export default function Actualites() {
  // Articles d'actualité (DIFFÉRENTS de ceux de conseils-pratiques)
  const articles = [
    {
      href: '#', // À remplacer quand tu créeras de vrais articles d'actualité
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-2-1H9" />
        </svg>
      ),
      category: 'Nouveautés',
      categoryColor: 'bg-[#1a3a5c]/10 text-[#1a3a5c]',
      title: 'Hello Assist déménage au Moule',
      excerpt: 'Nous sommes heureux de vous annoncer notre installation au 23 Rue Gaston Monnerville au Moule. Venez nous rencontrer dans nos nouveaux locaux !',
    },
    {
      href: '#', // À remplacer
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      category: 'Événement',
      categoryColor: 'bg-[#d63384]/10 text-[#d63384]',
      title: 'Participation au salon des entrepreneurs 2025',
      excerpt: 'Retrouvez Hello Assist au salon des entrepreneurs de Guadeloupe les 15 et 16 mars 2025. Venez échanger sur vos besoins en secrétariat.',
    },
    {
      href: '#', // À remplacer
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      category: 'Certification',
      categoryColor: 'bg-[#f59e0b]/10 text-[#f59e0b]',
      title: 'Hello Assist obtient la certification Qualiopi',
      excerpt: 'Nous sommes fiers de vous annoncer l\'obtention de la certification Qualiopi, gage de qualité de nos services et de notre professionnalisme.',
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

        {/* Articles Grid - MÊME FORMAT que conseils-pratiques */}
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