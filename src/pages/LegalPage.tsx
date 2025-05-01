import React from 'react';

const LegalPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">Mentions Légales</h1>
          <p className="text-gray-300">
            Informations juridiques concernant le site Clim Action
          </p>
        </div>
      </div>
      
      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Édition du site</h2>
            <p className="mb-6">
              Le site Clim Action est édité par l'association Clim Action, association loi 1901 dont le siège social est situé au 75 rue de l'Environnement, 75001 Paris, France.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Directeur de la publication</h2>
            <p className="mb-6">
              Le directeur de la publication du site est Maria Dupont, en sa qualité de présidente de l'association Clim Action.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Hébergement</h2>
            <p className="mb-6">
              Le site Clim Action est hébergé par la société Glitch Inc., dont le siège social est situé aux États-Unis.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Propriété intellectuelle</h2>
            <p className="mb-6">
              L'ensemble des éléments constituant le site Clim Action (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, logos, marques, etc.) ainsi que le site lui-même, sont la propriété exclusive de l'association Clim Action ou de tiers ayant autorisé l'association à les utiliser.
            </p>
            <p className="mb-6">
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord écrit exprès de l'association Clim Action. Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Conditions d'utilisation</h2>
            <p className="mb-6">
              L'utilisation du site Clim Action implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ci-dessus. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment, sans préavis. Les utilisateurs du site sont donc invités à les consulter de manière régulière.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Liens hypertextes</h2>
            <p className="mb-6">
              Le site Clim Action peut contenir des liens hypertextes vers d'autres sites internet ou d'autres ressources disponibles sur Internet. L'association Clim Action ne dispose d'aucun moyen pour contrôler les sites en connexion avec son site internet. Elle ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Limitation de responsabilité</h2>
            <p className="mb-6">
              Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. Si vous constatez une erreur ou ce qui peut être un dysfonctionnement, merci de bien vouloir le signaler par email à contact@climaction.org en décrivant le problème de la manière la plus précise possible.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Droit applicable et juridiction compétente</h2>
            <p className="mb-6">
              Les présentes conditions d'utilisation du site sont régies par la loi française et soumises à la compétence des tribunaux de Paris, sous réserve d'une attribution de compétence spécifique découlant d'un texte de loi ou réglementaire particulier.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Contactez-nous</h2>
            <p className="mb-6">
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter à l'adresse suivante : contact@climaction.org
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;