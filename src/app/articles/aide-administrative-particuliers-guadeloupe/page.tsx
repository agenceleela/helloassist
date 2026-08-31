import Link from 'next/link';

export const metadata = {
  title: 'Aide administrative à distance pour particuliers en Guadeloupe | Hello Assist',
  description: 'Particuliers en Guadeloupe : ne laissez plus la paperasse vous stresser. Hello Assist vous aide dans vos démarches CAF, impôts, assurance et courrier.',
  keywords: [
    'aide administrative particulier Guadeloupe',
    'démarches administratives Guadeloupe',
    'secrétaire particulier Pointe-à-Pitre',
    'assistance administrative Basse-Terre',
    'rédaction courrier administratif'
  ]
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
            Aide administrative à distance en Guadeloupe : simplifiez vos démarches au quotidien
          </h1>
          <p className="text-gray-600 text-lg">
            Courriers incompréhensibles, files d'attente, formulaires en ligne complexes... Libérez-vous du stress administratif avec un accompagnement professionnel et humain.
          </p>
        </header>

        <div className="prose prose-lg text-gray-700 max-w-none">
          <h2 className="text-2xl font-bold text-[#1a3a5c] mt-8 mb-4">Pourquoi la paperasse est-elle si stressante ?</h2>
          <p>
            Entre les démarches CAF, les déclarations d'impôts, les litiges avec les assurances ou la résiliation de contrats, la gestion administrative personnelle est une source majeure de stress. En Guadeloupe, l'accès physique à certains services peut parfois rallonger les délais, rendant la tâche encore plus fastidieuse.
          </p>
          <p>
            Selon un sondage récent, <strong>78% des Français</strong> considèrent les démarches administratives comme une source de stress importante. Et ce chiffre est probablement plus élevé dans les DOM où les spécificités locales ajoutent une couche de complexité.
          </p>

          <h2 className="text-2xl font-bold text-[#1a3a5c] mt-8 mb-4">Les 10 situations où vous avez besoin d'aide</h2>
          
          <h3 className="text-xl font-bold text-[#1a3a5c] mt-6 mb-3">1. Les démarches CAF</h3>
          <p>
            Demandes d'allocations, déclarations de ressources, justificatifs à fournir... La CAF demande une vigilance constante. Un oubli peut entraîner un trop-perçu ou une suspension de droits.
          </p>

          <h3 className="text-xl font-bold text-[#1a3a5c] mt-6 mb-3">2. Les déclarations d'impôts</h3>
          <p>
            Que vous soyez salarié, indépendant ou retraité, la déclaration de revenus demande de la rigueur. Hello Assist peut vous aider à :
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Rassembler tous vos justificatifs (fiches de paie, factures, reçus)</li>
            <li>Comprendre les cases à remplir</li>
            <li>Déclarer en ligne dans les délais</li>
            <li>Contester un avis d'imposition si erreur</li>
          </ul>

          <h3 className="text-xl font-bold text-[#1a3a5c] mt-6 mb-3">3. Les litiges avec les assurances</h3>
          <p>
            Sinistre auto, dégât des eaux, vol... Les assurances sont souvent peu coopératives. Une lettre de réclamation bien rédigée, avec les termes juridiques appropriés, fait toute la différence.
          </p>

          <h3 className="text-xl font-bold text-[#1a3a5c] mt-6 mb-3">4. La résiliation de contrats</h3>
          <p>
            Téléphone, internet, salle de sport, assurance... De nombreux contrats nécessitent une résiliation en recommandé avec AR, dans des délais précis. Nous gérons tout pour vous.
          </p>

          <h3 className="text-xl font-bold text-[#1a3a5c] mt-6 mb-3">5. Les démarches Ameli (Sécurité Sociale)</h3>
          <p>
            Changement de situation, demande de carte Vitale, déclaration de médecin traitant... Nous vous accompagnons dans toutes vos démarches santé.
          </p>

          <h3 className="text-xl font-bold text-[#1a3a5c] mt-6 mb-3">6. La recherche de logement</h3>
          <p>
            Constitution du dossier de location, rédaction des lettres de motivation, relance des propriétaires... Un accompagnement précieux dans un marché tendu.
          </p>

          <h3 className="text-xl font-bold text-[#1a3a5c] mt-6 mb-3">7. Les successions et donations</h3>
          <p>
            Démarches complexes qui demandent un suivi rigoureux des délais et des documents. Nous vous aidons à y voir clair.
          </p>

          <h3 className="text-xl font-bold text-[#1a3a5c] mt-6 mb-3">8. Les inscriptions scolaires</h3>
          <p>
            De la crèche au lycée, les inscriptions demandent des dossiers complets et des démarches dans les temps. Nous vous assistons.
          </p>

          <h3 className="text-xl font-bold text-[#1a3a5c] mt-6 mb-3">9. La création d'entreprise individuelle</h3>
          <p>
            Vous voulez devenir auto-entrepreneur ou créer votre société ? Nous vous guidons dans les formalités.
          </p>

          <h3 className="text-xl font-bold text-[#1a3a5c] mt-6 mb-3">10. Le classement et l'organisation</h3>
          <p>
            Vous êtes submergé par les papiers ? Nous vous aidons à trier, classer et numériser vos documents importants.
          </p>

          <h2 className="text-2xl font-bold text-[#1a3a5c] mt-8 mb-4">Comment nous pouvons vous aider concrètement</h2>
          
          <div className="bg-blue-50 border-l-4 border-[#1a3a5c] p-6 my-6">
            <h3 className="text-xl font-bold text-[#1a3a5c] mb-3">Rédaction de courriers officiels</h3>
            <p>
              Lettres de réclamation, mise en demeure, résiliation, contestation... Nous rédigeons avec les termes juridiques appropriés pour maximiser vos chances d'aboutir.
            </p>
          </div>

          <div className="bg-pink-50 border-l-4 border-[#d63384] p-6 my-6">
            <h3 className="text-xl font-bold text-[#1a3a5c] mb-3">Accompagnement aux démarches en ligne</h3>
            <p>
              Aide à la création de comptes, remplissage de formulaires (CAF, Ameli, Impots.gouv, FranceConnect) et veille documentaire. Nous pouvons même faire les démarches pour vous avec votre autorisation.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-[#f59e0b] p-6 my-6">
            <h3 className="text-xl font-bold text-[#1a3a5c] mb-3">Organisation et classement</h3>
            <p>
              Numérisation et classement de vos documents importants pour que vous retrouviez n'importe quelle pièce en quelques secondes. Fini le stress de ne pas retrouver un justificatif !
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-[#10b981] p-6 my-6">
            <h3 className="text-xl font-bold text-[#1a3a5c] mb-3">Veille administrative</h3>
            <p>
              Nous surveillons pour vous les échéances (déclarations, renouvellements) et vous envoyons des rappels. Plus aucun oubli possible.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a3a5c] mt-8 mb-4">Un service de confiance, proche de vous</h2>
          <p>
            Hello Assist vous offre la tranquillité d'esprit. Nous traitons vos données avec une confidentialité absolue (RGPD compliant) et nous adaptons à votre rythme. Plus besoin de sacrifier vos soirées ou vos week-ends à comprendre un jargon administratif : déléguez à des experts bienveillants.
          </p>
          <p>
            Basée en Guadeloupe, Hello Assist comprend les spécificités locales et les particularités des administrations guadeloupéennes (CAF, CPAM, Impôts...). Un avantage indéniable par rapport à un service métropolitain.
          </p>

          <h2 className="text-2xl font-bold text-[#1a3a5c] mt-8 mb-4">Témoignage : Famille de Gosier</h2>
          <blockquote className="border-l-4 border-[#f59e0b] pl-6 italic text-gray-700 my-6">
            "Après un dégât des eaux, j'étais perdu avec les courriers à l'assurance et les devis à demander. Hello Assist a tout géré. Résultat : j'ai été indemnisé en 3 semaines au lieu des 3 mois habituels !"
            <footer className="text-sm text-gray-600 mt-2 not-italic">— Patrick M., habitant au Gosier</footer>
          </blockquote>

          <h2 className="text-2xl font-bold text-[#1a3a5c] mt-8 mb-4">Tarifs transparents et accessibles</h2>
          <p>
            Chez Hello Assist, nous croyons que l'aide administrative doit être accessible. Nos tarifs sont clairs :
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Forfait découverte :</strong> 1h pour 40€ HT (idéal pour une lettre ou une démarche simple)</li>
            <li><strong>Forfait mensuel :</strong> à partir de 100€/mois pour 3h (accompagnement régulier)</li>
            <li><strong>Sur devis :</strong> pour les dossiers complexes (succession, création d'entreprise...)</li>
          </ul>
          <p>
            Premier entretien gratuit pour évaluer vos besoins. Pas d'engagement de durée.
          </p>

          <h2 className="text-2xl font-bold text-[#1a3a5c] mt-8 mb-4">Questions fréquentes</h2>
          
          <h3 className="text-xl font-bold text-[#1a3a5c] mt-6 mb-3">Comment communique-t-on ?</h3>
          <p>
            Par email, téléphone ou visioconférence (Zoom, Teams, WhatsApp). Vous choisissez le canal qui vous convient. Nous sommes disponibles du lundi au vendredi, 9h-18h.
          </p>

          <h3 className="text-xl font-bold text-[#1a3a5c] mt-6 mb-3">Mes documents sont-ils sécurisés ?</h3>
          <p>
            Absolument. Nous utilisons des plateformes sécurisées et cryptées. Vos pièces d'identité, relevés bancaires et documents sensibles sont protégés. Nous signons une clause de confidentialité.
          </p>

          <h3 className="text-xl font-bold text-[#1a3a5c] mt-6 mb-3">Pouvez-vous me représenter auprès des administrations ?</h3>
          <p>
            Oui, avec une procuration signée de votre part, nous pouvons effectuer certaines démarches en votre nom (CAF, Ameli, impôts...).
          </p>

          <h3 className="text-xl font-bold text-[#1a3a5c] mt-6 mb-3">Combien de temps gagne-je ?</h3>
          <p>
            En moyenne, nos clients gagnent <strong>5 à 10 heures par mois</strong> en nous confiant leur administratif. C'est du temps retrouvé pour votre famille, vos loisirs ou votre travail.
          </p>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-br from-[#1a3a5c] to-[#1a3a5c]/90 rounded-2xl text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Retrouvez votre sérénité administrative</h3>
          <p className="mb-6 text-gray-200">Une question ? Un document à rédiger ? Une démarche à effectuer ? Contactez-nous dès aujourd'hui. Premier échange gratuit et sans engagement.</p>
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