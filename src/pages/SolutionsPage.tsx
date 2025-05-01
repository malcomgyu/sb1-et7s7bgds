import React from 'react';
import Solutions from '../components/Solutions';

const SolutionsPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-green-700 to-emerald-500 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Solutions face au Changement Climatique</h1>
          <p className="text-xl max-w-3xl">
            Découvrez les actions concrètes que nous pouvons tous entreprendre pour lutter contre le réchauffement climatique, 
            de l'échelle individuelle aux initiatives collectives.
          </p>
        </div>
      </div>
      
      {/* Main content */}
      <Solutions />
      
      {/* Collective Action Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              L'importance de l'action collective
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Bien que les actions individuelles soient essentielles, la lutte contre le changement climatique 
              nécessite également des transformations systémiques et des politiques ambitieuses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Au niveau local</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600 mr-3 flex-shrink-0">
                    ✓
                  </span>
                  <span>Participer aux initiatives citoyennes (jardins partagés, repair cafés, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600 mr-3 flex-shrink-0">
                    ✓
                  </span>
                  <span>S'engager dans des associations locales de protection de l'environnement</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600 mr-3 flex-shrink-0">
                    ✓
                  </span>
                  <span>Sensibiliser son entourage et sa communauté aux enjeux climatiques</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600 mr-3 flex-shrink-0">
                    ✓
                  </span>
                  <span>Soutenir les commerces locaux et les initiatives durables</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Au niveau national et international</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600 mr-3 flex-shrink-0">
                    ✓
                  </span>
                  <span>Voter pour des candidats engagés sur les questions environnementales</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600 mr-3 flex-shrink-0">
                    ✓
                  </span>
                  <span>Signer des pétitions et participer aux mobilisations pour le climat</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600 mr-3 flex-shrink-0">
                    ✓
                  </span>
                  <span>Soutenir financièrement des ONG environnementales</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600 mr-3 flex-shrink-0">
                    ✓
                  </span>
                  <span>Faire pression sur les entreprises pour qu'elles adoptent des pratiques durables</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt à passer à l'action ?</h2>
            <p className="text-xl mb-8">
              Rejoignez-nous dans la lutte contre le réchauffement climatique. Ensemble, nous pouvons faire la différence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/contact" 
                className="inline-block px-8 py-3 bg-white text-green-700 font-medium rounded-md hover:bg-gray-100 transition duration-300"
              >
                Nous rejoindre
              </a>
              <a 
                href="/ressources" 
                className="inline-block px-8 py-3 bg-green-700 text-white font-medium rounded-md border border-white hover:bg-green-800 transition duration-300"
              >
                Découvrir nos ressources
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;