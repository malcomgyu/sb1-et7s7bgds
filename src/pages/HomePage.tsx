import React from 'react';
import Hero from '../components/Hero';
import ClimateFacts from '../components/ClimateFacts';
import Solutions from '../components/Solutions';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <ClimateFacts />
      <Solutions />
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Rejoignez le mouvement pour le climat</h2>
            <p className="text-xl mb-8">
              Ensemble, nous pouvons faire la différence. Chaque action compte dans la lutte contre le réchauffement climatique.
            </p>
            <div className="animate-pulse">
              <a 
                href="/contact" 
                className="inline-block px-8 py-3 bg-white text-green-700 font-medium rounded-md hover:bg-gray-100 transition duration-300"
              >
                Agir maintenant
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;