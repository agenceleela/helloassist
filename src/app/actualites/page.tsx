import Link from 'next/link';

export const metadata = {
  title: 'Actualités Hello Assist | Guadeloupe',
  description: 'Suivez l\'actualité de Hello Assist, votre secrétaire indépendante au Moule. Nouvelles, annonces et informations sur nos services.',
};

export default function Actualites() {
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

        {/* Empty State - Bientôt des articles */}
        <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="w-24 h-24 bg-gradient-to-br from-[#d63384] to-[#f59e0b] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-2-1H9" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#1a3a5c] mb-4">
            Nos articles arrivent bientôt !
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto mb-8">
            Nous préparons avec soin des actualités, conseils et informations pour vous aider dans votre gestion administrative. Revenez très vite !
          </p>
          <Link 
            href="/conseils-pratiques"
            className="inline-block bg-[#d63384] hover:bg-[#b52a6f] text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300"
          >
            En attendant, découvrez nos conseils pratiques
          </Link>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-[#1a3a5c] to-[#1a3a5c]/90 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Besoin d'un accompagnement personnalisé ?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour un devis gratuit et adapté à vos besoins spécifiques.
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