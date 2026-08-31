import Link from 'next/link';

export const metadata = {
  title: 'Secrétariat à distance pour Associations en Guadeloupe | Hello Assist',
  description: 'Associations en Guadeloupe : simplifiez votre gestion administrative. PV d\'AG, subventions, adhésions. Gagnez du temps pour votre mission.',
  keywords: [
    'secrétariat association Guadeloupe',
    'gestion administrative loi 1901',
    'subventions association Guadeloupe',
    'secrétaire bénévole',
    'assistant administratif association'
  ]
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
            En Guadeloupe, les associations jouent un rôle social et culturel vital. Du sport à la culture, en passant par l'insertion et l'environnement, elles sont plus de <strong>15 000 associations actives</strong> sur le territoire. Cependant, les dirigeants se retrouvent souvent coincés entre la rédaction des procès-verbaux d'assemblée générale, la gestion des adhésions et les demandes de subventions complexes.
          </p>
          <p>
            Une étude montre que les présidents d'associations consacrent en moyenne <strong>40% de leur temps</strong> à des tâches administratives plutôt qu'à leur mission sociale. C'est considérable !
          </p>

          <h2 className="text-2xl font-bold text-[#1a3a5c] mt-8 mb-4">Les 5 défis administratifs majeurs des associations</h2>
          
          <h3 className="text-xl font-bold text-[#1a3a5c] mt-6 mb-3">1. Les assemblées générales (AG)</h3>
          <p>
            L'organisation d'une AG demande une logistique importante :
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Rédaction et envoi des convocations dans les délais légaux</li>
            <li>Préparation de l'ordre du jour et des documents</li>
            <li>Réservation de la salle et organisation logistique</li>
            <li>Rédaction du procès-verbal (PV) conforme</li>
            <li>Dépôt des déclarations en préfecture si modification des statuts</li>
          </ul>

          <h3 className="text-xl font-bold text-[#1a3a5c] mt-6 mb-3">2. La gestion des adhérents</h3>
          <p>
            Tenir à jour un fichier d'adhérents, envoyer les appels de cotisations, gérer les nouveaux entrants et les radiations... Autant de tâches chronophages qui méritent d'être externalisées.
          </p>

          <h3 className="text-xl font-bold text-[#1a3a5c] mt-6 mb-3">3. Les demandes de subventions</h3>
          <p>
            Les associations guadeloupéennes peuvent prétendre à de nombreux financements :
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Région Guadeloupe</strong> : aides au développement associatif</li>
            <li><strong>Département</strong> : soutien aux actions sociales</li>
            <li><strong>Communes</strong> : subventions de fonctionnement</li>
            <li><strong>FSE (Fonds Social Européen)</strong> : projets d'insertion</li>
            <li><strong>DRJSCS</strong> : sports et jeunesse</li>
          </ul>
          <p>
            Chaque dossier demande des pièces justificatives spécifiques, un calendrier rigoureux et un reporting précis. Une erreur peut coûter le financement !
          </p>

          <h3 className="text-xl font-bold text-[#1a3a5c] mt-6 mb-3">4. La comptabilité associative</h3>
          <p>
            Même si votre association est petite, vous devez tenir une comptabilité régulière : livre de recettes/dépenses, bilan annuel, déclaration fiscale si activités lucratives.
          </p>

          <h3 className="text-xl font-bold text-[#1a3a5c] mt-6 mb-3">5. La communication</h3>
          <p>
            Rédaction de newsletters, gestion des réseaux sociaux, relations presse... La visibilité de votre association est cruciale pour attirer des adhérents et des financeurs.
          </p>

          <h2 className="text-2xl font-bold text-[#1a3a5c] mt-8 mb-4">Ce que Hello Assist peut faire pour votre association</h2>
          
          <div className="bg-blue-50 border-l-4 border-[#1a3a5c] p-6 my-6">
            <h3 className="text-xl font-bold text-[#1a3a5c] mb-3">Rédaction et formalisation</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Rédaction de vos PV d'AG conformes aux exigences légales</li>
              <li>Mise à jour des statuts et règlements intérieurs</li>
              <li>Déclarations en préfecture (création, modification, dissolution)</li>
              <li>Veille réglementaire pour rester en conformité</li>
            </ul>
          </div>

          <div className="bg-pink-50 border-l-4 border-[#d63384] p-6 my-6">
            <h3 className="text-xl font-bold text-[#1a3a5c] mb-3">Gestion des adhérents</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tenue du registre des adhérents (RGPD compliant)</li>
              <li>Envoi des reçus fiscaux pour les dons (réduction d'impôt de 66%)</li>
              <li>Relances courtoises des cotisations impayées</li>
              <li>Gestion des inscriptions aux événements</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-[#f59e0b] p-6 my-6">
            <h3 className="text-xl font-bold text-[#1a3a5c] mb-3">Montage de dossiers de subventions</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identification des financements disponibles</li>
              <li>Aide à la structuration du projet et du budget</li>
              <li>Rédaction des dossiers argumentés</li>
              <li>Suivi des délais de dépôt</li>
              <li>Reporting et justificatifs post-attribution</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-[#1a3a5c] mt-8 mb-4">Un coût maîtrisé pour un impact maximal</h2>
          <p>
            Le secrétariat à distance est une solution économiquement viable pour les associations. Vous ne payez que les heures nécessaires, sans les contraintes d'un contrat de travail à temps plein. C'est l'assurance de professionnaliser votre gestion sans peser sur votre budget déjà serré.
          </p>
          <p>
            <strong>Exemple concret :</strong> Une association culturelle de Pointe-à-Pitre confie à Hello Assist 10h/mois pour la gestion des adhésions et la rédaction des PV. Coût : 350€/mois. Gain de temps pour le président : 2 jours/mois. Résultat : il peut se consacrer à la programmation artistique.
          </p>

          <h2 className="text-2xl font-bold text-[#1a3a5c] mt-8 mb-4">Témoignage : Association sportive de Sainte-Anne</h2>
          <blockquote className="border-l-4 border-[#d63384] pl-6 italic text-gray-700 my-6">
            "Grâce à Hello Assist, nous avons enfin pu obtenir nos subventions de la Région et du Département. Notre secrétaire a monté des dossiers impeccables. Cette année, nous avons reçu 15 000€ de financements en plus !"
            <footer className="text-sm text-gray-600 mt-2 not-italic">— Sophie L., présidente d'un club de natation à Sainte-Anne</footer>
          </blockquote>

          <h2 className="text-2xl font-bold text-[#1a3a5c] mt-8 mb-4">Questions fréquentes</h2>
          
          <h3 className="text-xl font-bold text-[#1a3a5c] mt-6 mb-3">Pouvons-nous déduire ces honoraires ?</h3>
          <p>
            Oui, les frais de secrétariat sont considérés comme des charges de fonctionnement et sont donc déductibles de votre budget.
          </p>

          <h3 className="text-xl font-bold text-[#1a3a5c] mt-6 mb-3">Comment gérez-vous la confidentialité ?</h3>
          <p>
            Nous signons une clause de confidentialité stricte et utilisons des outils sécurisés. Vos données d'adhérents et vos documents financiers sont protégés.
          </p>

          <h3 className="text-xl font-bold text-[#1a3a5c] mt-6 mb-3">Pouvons-nous tester avant de nous engager ?</h3>
          <p>
            Absolument ! Nous proposons un premier rendez-vous gratuit pour évaluer vos besoins. Ensuite, vous pouvez commencer avec un forfait mensuel sans engagement de durée.
          </p>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-br from-[#d63384] to-[#f59e0b] rounded-2xl text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Concentrez-vous sur votre mission, on s'occupe du reste</h3>
          <p className="mb-6 text-white/90">Parlons de votre association et voyons comment nous pouvons vous soulager. Premier échange gratuit et sans engagement.</p>
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