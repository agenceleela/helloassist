import Link from "next/link";

export default function PolitiqueCookies() {
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
          Politique de cookies
        </h1>

        <div className="bg-white p-8 rounded-2xl shadow-md space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-bold text-[#1a3a5c] mb-4">
              1. Qu'est-ce qu'un cookie ?
            </h2>
            <p className="mb-4">
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, 
              tablette, smartphone) lors de la visite d'un site internet. Il permet de 
              stocker des informations relatives à votre navigation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a3a5c] mb-4">
              2. Les cookies utilisés sur Hello Assist
            </h2>
            <p className="mb-4">
              Notre site utilise les types de cookies suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Cookies techniques :</strong> Nécessaires au bon fonctionnement du site
              </li>
              <li>
                <strong>Cookies de performance :</strong> Permettent d'analyser l'utilisation 
                du site pour améliorer nos services
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a3a5c] mb-4">
              3. Gestion des cookies
            </h2>
            <p className="mb-4">
              Vous pouvez configurer votre navigateur pour accepter, refuser ou supprimer 
              les cookies. Voici comment procéder selon votre navigateur :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies
              </li>
              <li>
                <strong>Firefox :</strong> Options → Vie privée et sécurité → Cookies
              </li>
              <li>
                <strong>Safari :</strong> Préférences → Confidentialité → Cookies
              </li>
              <li>
                <strong>Edge :</strong> Paramètres → Confidentialité → Cookies
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a3a5c] mb-4">
              4. Vos droits
            </h2>
            <p className="mb-4">
              Conformément au RGPD, vous disposez d'un droit d'accès, de modification et 
              de suppression des données collectées via les cookies. Pour l'exercer, 
              contactez-nous à : contact@helloassist.fr
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a3a5c] mb-4">
              5. Mise à jour
            </h2>
            <p>
              Cette politique de cookies peut être modifiée à tout moment. Nous vous 
              invitons à la consulter régulièrement.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
