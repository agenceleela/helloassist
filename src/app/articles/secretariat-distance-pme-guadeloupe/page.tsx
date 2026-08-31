import Link from 'next/link';

export const metadata = {
  title: 'Secrétariat à distance pour PME en Guadeloupe | Hello Assist',
  description: 'Optimisez la gestion administrative de votre PME en Guadeloupe. Déléguez votre secrétariat à distance pour vous concentrer sur votre croissance locale.',
};

export default function ArticlePME() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
        <header className="mb-8 border-b border-gray-100 pb-6">
          <span className="inline-block px-3 py-1 bg-[#1a3a5c]/10 text-[#1a3a5c] text-sm font-semibold rounded-full mb-4">
            Entreprises & PME
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-4">
            Comment optimiser la gestion administrative de votre PME en Guadeloupe ?
          </h1>
          <p className="text-gray-600 text-lg">
            Entre les délais de l'URSSAF, la gestion des devis et le suivi client, la charge administrative pèse lourd. Découvrez comment le secrétariat à distance peut devenir votre meilleur allié local.
          </p>
        </header>

        <div className="prose prose-lg text-gray-700 max-w-none">
          <h2 className="text-2xl font-bold text-[#1a3a5c] mt-8 mb-4">Les défis administratifs spécifiques aux entreprises guadeloupéennes</h2>
          <p>
            En Guadeloupe, les chefs d'entreprise font face à des défis uniques : complexité des démarches locales, gestion des fournisseurs insulaires et nécessité de maintenir une réactivité impeccable. Trop de temps passé sur la paperasse signifie moins de temps pour développer votre chiffre d'affaires.
          </p>

          <h2 className="text-2xl font-bold text-[#1a3a5c] mt-8 mb-4">3 tâches que vous devriez déléguer dès maintenant</h2>
          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li><strong>La relance des impayés :</strong> Une procédure délicate mais essentielle pour votre trésorerie, mieux gérée par un tiers professionnel et neutre.</li>
            <li><strong>La préparation des dossiers de subventions :</strong> Que ce soit pour la Région Guadeloupe ou l'Europe, les dossiers demandent une rigueur et un suivi que votre secrétaire à distance peut assurer.</li>
            <li><strong>La gestion des e-mails et du standard :</strong> Ne laissez plus aucun appel client ou prospect sans réponse, même pendant vos rendez-vous sur le terrain.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1a3a5c] mt-8 mb-4">Pourquoi choisir un secrétariat 100% à distance ?</h2>
          <p>
            Contrairement à un recrutement local classique, le secrétariat à distance vous permet de payer uniquement le temps de travail effectif, sans charges sociales supplémentaires, sans besoin de fournir un bureau physique, et avec une flexibilité totale adaptée aux pics d'activité saisonniers.
          </p>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-br from-[#1a3a5c] to-[#1a3a5c]/90 rounded-2xl text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Prêt à alléger votre charge administrative ?</h3>
          <p className="mb-6 text-gray-200">Discutons de vos besoins spécifiques et obtenez un devis personnalisé en moins de 24h.</p>
          <Link 
            href="/#contact" 
            className="inline-block bg-[#d63384] hover:bg-[#b52a6f] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </article>
    </main>
  );
}