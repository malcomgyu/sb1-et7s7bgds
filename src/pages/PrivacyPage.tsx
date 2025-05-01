import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">Politique de Confidentialité</h1>
          <p className="text-gray-300">
            Informations sur la collecte et le traitement de vos données personnelles
          </p>
        </div>
      </div>
      
      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Introduction</h2>
            <p className="mb-6">
              L'association Clim Action s'engage à protéger la vie privée des utilisateurs de son site internet. La présente politique de confidentialité a pour but de vous informer sur la manière dont nous collectons, utilisons et protégeons vos données personnelles.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Collecte des données personnelles</h2>
            <p className="mb-6">
              Nous collectons des données personnelles lorsque vous :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Remplissez notre formulaire de contact</li>
              <li>Vous inscrivez à notre newsletter</li>
              <li>Participez à nos événements ou campagnes</li>
              <li>Faites un don à notre association</li>
              <li>Créez un compte sur notre site</li>
            </ul>
            <p className="mb-6">
              Les types de données personnelles que nous pouvons collecter incluent, sans s'y limiter :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Vos nom et prénom</li>
              <li>Votre adresse email</li>
              <li>Votre numéro de téléphone</li>
              <li>Votre adresse postale</li>
              <li>Vos préférences de communication</li>
            </ul>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Utilisation des données personnelles</h2>
            <p className="mb-6">
              Nous utilisons vos données personnelles pour les finalités suivantes :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Répondre à vos demandes d'information</li>
              <li>Vous envoyer notre newsletter si vous y avez souscrit</li>
              <li>Gérer votre participation à nos événements ou campagnes</li>
              <li>Traiter vos dons</li>
              <li>Améliorer notre site web et nos services</li>
              <li>Respecter nos obligations légales</li>
            </ul>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Partage des données personnelles</h2>
            <p className="mb-6">
              Nous ne vendons pas, n'échangeons pas et ne transférons pas vos données personnelles à des tiers sans votre consentement, sauf dans les cas suivants :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Avec des prestataires de services qui nous aident à faire fonctionner notre site web ou à conduire nos activités (par exemple, des services d'hébergement web)</li>
              <li>Lorsque nous sommes légalement tenus de le faire (par exemple, pour répondre à une obligation légale ou à une décision de justice)</li>
            </ul>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Conservation des données</h2>
            <p className="mb-6">
              Nous conservons vos données personnelles aussi longtemps que nécessaire pour atteindre les finalités pour lesquelles elles ont été collectées, sauf si la loi exige ou permet une période de conservation plus longue.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Vos droits</h2>
            <p className="mb-6">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification de vos données personnelles</li>
              <li>Droit à l'effacement de vos données personnelles</li>
              <li>Droit à la limitation du traitement de vos données personnelles</li>
              <li>Droit à la portabilité de vos données personnelles</li>
              <li>Droit d'opposition au traitement de vos données personnelles</li>
            </ul>
            <p className="mb-6">
              Pour exercer ces droits, veuillez nous contacter à l'adresse email suivante : contact@climaction.org
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Cookies</h2>
            <p className="mb-6">
              Notre site web utilise des cookies pour améliorer votre expérience de navigation. Un cookie est un petit fichier texte stocké sur votre ordinateur ou appareil mobile lorsque vous visitez un site web. Les cookies nous aident à comprendre comment notre site est utilisé et à améliorer son fonctionnement.
            </p>
            <p className="mb-6">
              Vous pouvez configurer votre navigateur pour qu'il refuse tous les cookies ou pour qu'il vous avertisse lorsqu'un cookie est envoyé. Veuillez noter que certaines fonctionnalités de notre site peuvent ne pas fonctionner correctement si vous désactivez les cookies.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Sécurité des données</h2>
            <p className="mb-6">
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès non autorisé, toute modification, divulgation ou destruction.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Modifications de notre politique de confidentialité</h2>
            <p className="mb-6">
              Nous pouvons modifier cette politique de confidentialité de temps à autre. Toute modification sera publiée sur cette page avec une date de mise à jour. Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques en matière de protection des données.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Contact</h2>
            <p className="mb-6">
              Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à l'adresse suivante : contact@climaction.org
            </p>
            
            <p className="text-sm text-gray-600 mt-10">
              Dernière mise à jour : 1 juin 2025
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;