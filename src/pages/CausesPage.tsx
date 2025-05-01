import React from 'react';
import CausesEffects from '../components/CausesEffects';

const CausesPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-red-700 to-amber-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Causes et Effets du Changement Climatique</h1>
          <p className="text-xl max-w-3xl">
            Comprendre les causes du réchauffement climatique et ses conséquences est la première étape 
            pour agir de façon efficace et limiter les dégâts sur notre planète.
          </p>
        </div>
      </div>
      
      {/* Main content */}
      <CausesEffects />
      
      {/* Greenhouse Gases Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                L'effet de serre : un phénomène amplifié
              </h2>
              <p className="text-gray-600 mb-4">
                L'effet de serre est un phénomène naturel qui permet à la Terre de maintenir une température 
                moyenne de 15°C. Sans lui, la température moyenne serait de -18°C, rendant notre planète inhospitalière.
              </p>
              <p className="text-gray-600 mb-4">
                Cependant, les activités humaines ont considérablement augmenté la concentration des gaz à effet 
                de serre dans l'atmosphère, intensifiant ce phénomène et provoquant un réchauffement global.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <p className="font-medium">Dioxyde de carbone (CO₂) : 76% des émissions</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                  <p className="font-medium">Méthane (CH₄) : 16% des émissions</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-600"></div>
                  <p className="font-medium">Protoxyde d'azote (N₂O) : 6% des émissions</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  <p className="font-medium">Gaz fluorés : 2% des émissions</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Effet de serre" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Global Impacts */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Impacts mondiaux du changement climatique
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Le réchauffement climatique a des répercussions sur l'ensemble du système terrestre, affectant tant les écosystèmes que les sociétés humaines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Impacts écologiques</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Extinction d'espèces et perte de biodiversité</li>
                <li>• Blanchiment des coraux et acidification des océans</li>
                <li>• Modification des habitats naturels</li>
                <li>• Perturbation des cycles migratoires</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Impacts économiques</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Dommages aux infrastructures et coûts de reconstruction</li>
                <li>• Baisse des rendements agricoles</li>
                <li>• Perturbation des chaînes d'approvisionnement</li>
                <li>• Hausse des coûts des assurances et des soins de santé</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Impacts sociaux</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Migrations climatiques et réfugiés environnementaux</li>
                <li>• Problèmes de santé publique accrus</li>
                <li>• Insécurité alimentaire et hydrique</li>
                <li>• Aggravation des inégalités sociales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CausesPage;