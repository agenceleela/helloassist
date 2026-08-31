import Link from 'next/link';

export const metadata = {
  title: 'Aide administrative à distance pour particuliers en Guadeloupe | Hello Assist',
  description: 'Ne laissez plus la paperasse vous stresser. Hello Assist vous aide dans vos démarches CAF, impôts, assurance et courrier en Guadeloupe.',
};

export default function ArticleParticuliers() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
        <header className="mb-8 border-b border-gray-100 pb-6">
          <span className="inline-block px-3 py-1 bg-[#f59e0b]/10 text-[#f59e0b] text-sm font-semibold rounded-full mb-4">
            Particuliers & Familles
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-4">
            Aide administrative à distance en Guadeloupe
          </h1>
          <p className="text-gray-600 text-lg">
            Courriers incompréhensibles, files d'attente, formulaires en ligne complexes... Libérez-vous du stress administratif avec un accompagnement professionnel et humain.
          </p>
        </header>

        <div className="prose prose-lg text-gray-700 max-w-none">
          <h2 className="text-2xl font-bold text-[#1a3a5c] mt-8 mb-4">Pourquoi la paperasse est-elle si stressante ?</h2>
          <p>
            Entre les démarches CAF, les déclarations d'impôts, les litiges avec les assurances ou la résiliation de contrats, la gestion administrative personnelle est une source majeure de stress.
          </p>

          <h2 className="text-2xl font-bold text-[#1a3a5c] mt-8 mb-4">Comment nous pouvons vous aider concrètement</h2>
          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li><strong>Rédaction de courriers officiels :</strong> Lettres de réclamation, mise en demeure ou résiliation, rédigées avec les termes juridiques appropriés.</li>
            <li><strong>Accompagnement aux démarches en ligne :</strong> Aide à la création de comptes, remplissage de formulaires (CAF, Ameli, Impots.gouv) et veille documentaire.</li>
            <li><strong>Organisation et classement :</strong> Numérisation et classement de vos documents importants pour que vous retrouviez n'importe quelle pièce en quelques secondes.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1a3a5c] mt-8 mb-4">Un service de confiance, proche de vous</h2>
          <p>
            Hello Assist vous offre la tranquillité d'esprit. Nous traitons vos données avec une confidentialité absolue et nous adaptons à votre rythme.
          </p>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-br from-[#1a3a5c] to-[#1a3a5c]/90 rounded-2xl text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Retrouvez votre sérénité administrative</h3>
          <p className="mb-6 text-gray-200">Une question ? Un document à rédiger ? Contactez-nous dès aujourd'hui.</p>
          <Link 
            href="/#contact" 
            className="inline-block bg-[#d63384] hover:bg-[#b52a6f] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
          >
            Obtenir de l'aide maintenant
          </Link>
        </div>
      </article>
    </main>
  );
}