import Link from 'next/link';

export const metadata = {
  title: 'Secrétariat à distance pour Associations en Guadeloupe | Hello Assist',
  description: 'Simplifiez la gestion de votre association en Guadeloupe. Déléguez l\'administratif, les subventions et la communication pour vous concentrer sur votre mission.',
};

export default function ArticleAssos() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
        <header className="mb-8 border-b border-gray-100 pb-6">
          <span className="inline-block px-3 py-1 bg-[#d63384]/10 text-[#d63384] text-sm font-semibold rounded-full mb-4">
            Associations & Loi 1901
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-4">
            Secrétariat à distance pour les associations en Guadeloupe : gagnez du temps pour votre mission
          </h1>
          <p className="text-gray-600 text-lg">
            Les bénévoles et salariés d'associations passent trop de temps sur l'administratif. Découvrez comment externaliser ces tâches pour mieux servir votre cause.
          </p>
        </header>

        <div className="prose prose-lg text-gray-700 max-w-none">
          <h2 className="text-2xl font-bold text-[#1a3a5c] mt-8 mb-4">La réalité du tissu associatif guadeloupéen</h2>
          <p>
            En Guadeloupe, les associations jouent un rôle social et culturel vital. Cependant, les dirigeants se retrouvent souvent coincés entre la rédaction des procès-verbaux d'assemblée générale, la gestion des adhésions et les demandes de subventions complexes (Région, Département, FSE).
          </p>

          <h2 className="text-2xl font-bold text-[#1a3a5c] mt-8 mb-4">Ce que Hello Assist peut faire pour votre association</h2>
          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li><strong>Rédaction et formalisation :</strong> Rédaction de vos PV d'AG, mise à jour des statuts et déclarations en préfecture.</li>
            <li><strong>Gestion des adhérents :</strong> Tenue du registre, envoi des reçus fiscaux pour les dons, et relances des cotisations en douceur.</li>
            <li><strong>Montage de dossiers de subventions :</strong> Aide à la structuration et à la saisie de vos demandes de financements publics ou privés.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1a3a5c] mt-8 mb-4">Un coût maîtrisé pour un impact maximal</h2>
          <p>
            Le secrétariat à distance est une solution économiquement viable pour les associations. Vous ne payez que les heures nécessaires, sans les contraintes d'un contrat de travail à temps plein. C'est l'assurance de professionnaliser votre gestion sans peser sur votre budget déjà serré.
          </p>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-br from-[#d63384] to-[#f59e0b] rounded-2xl text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Concentrez-vous sur votre mission, on s'occupe du reste</h3>
          <p className="mb-6 text-white/90">Parlons de votre association et voyons comment nous pouvons vous soulager.</p>
          <Link 
            href="/#contact" 
            className="inline-block bg-white text-[#d63384] hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors duration-300"
          >
            Contacter Hello Assist
          </Link>
        </div>
      </article>
    </main>
  );
}