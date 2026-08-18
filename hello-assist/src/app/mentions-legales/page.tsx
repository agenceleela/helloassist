import Link from "next/link";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-[#1a3a5c] hover:text-[#d63384] mb-8"
        >
          ← Retour à l'accueil
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-8">
          Mentions légales
        </h1>

        <div className="bg-white p-8 rounded-2xl shadow-md space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-bold text-[#1a3a5c] mb-4">
              1. Éditeur du site
            </h2>
            <p className="mb-4">
              Le site Hello Assist est édité par :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Nom : Hello Assist</li>
              <li>Statut : Secrétaire indépendante</li>
              <li>Email : contact@helloassist.fr</li>
              <li>Téléphone : 06 91 23 29 05</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a3a5c] mb-4">
              2. Hébergement
            </h2>
            <p>
              Le site est hébergé par Vercel Inc., dont les serveurs sont situés aux États-Unis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a3a5c] mb-4">
              3. Propriété intellectuelle
            </h2>
            <p className="mb-4">
              L'ensemble du contenu du site Hello Assist (textes, images, logos, 
              graphismes, etc.) est protégé par le droit d'auteur et la propriété 
              intellectuelle. Toute reproduction, même partielle, est interdite sans 
              autorisation préalable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a3a5c] mb-4">
              4. Données personnelles
            </h2>
            <p className="mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), 
              vous disposez d'un droit d'accès, de modification, de rectification et 
              de suppression des données qui vous concernent. Pour l'exercer, contactez-nous 
              à l'adresse : contact@helloassist.fr
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a3a5c] mb-4">
              5. Cookies
            </h2>
            <p className="mb-4">
              Ce site peut utiliser des cookies pour améliorer votre expérience utilisateur. 
              Vous pouvez configurer votre navigateur pour refuser les cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a3a5c] mb-4">
              6. Limitation de responsabilité
            </h2>
            <p className="mb-4">
              Hello Assist s'efforce de fournir des informations exactes, mais ne peut 
              garantir l'exactitude, l'exhaustivité ou l'actualité des contenus. La 
              responsabilité de Hello Assist ne saurait être engagée pour tout dommage 
              résultant de l'utilisation du site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a3a5c] mb-4">
              7. Droit applicable
            </h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de 
              litige, une solution amiable sera recherchée avant toute action judiciaire.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
