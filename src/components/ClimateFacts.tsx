import React, { useState } from 'react';
import { AlertTriangle, Thermometer, Droplets, Wind } from 'lucide-react';

interface FactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FactCard: React.FC<FactCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ClimateFacts: React.FC = () => {
  const facts = [
    {
      icon: <Thermometer className="h-6 w-6 text-red-500" />,
      title: "Hausse des températures",
      description: "La température moyenne mondiale a augmenté de 1,1°C depuis l'ère préindustrielle, et continue d'augmenter."
    },
    {
      icon: <Droplets className="h-6 w-6 text-blue-500" />,
      title: "Montée des eaux",
      description: "Le niveau des mers s'élève d'environ 3,7 mm par an, menaçant les zones côtières du monde entier."
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-yellow-500" />,
      title: "Événements extrêmes",
      description: "Les phénomènes météorologiques extrêmes (ouragans, inondations, sécheresses) deviennent plus fréquents et plus intenses."
    },
    {
      icon: <Wind className="h-6 w-6 text-gray-600" />,
      title: "Émissions de CO₂",
      description: "Les émissions mondiales de CO₂ ont atteint 36,7 milliards de tonnes en 2022, principalement dues aux combustibles fossiles."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Les faits alarmants sur le climat
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Le réchauffement climatique est une réalité scientifique qui exige une action immédiate.
            Voici quelques données importantes à connaître.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <FactCard
              key={index}
              icon={fact.icon}
              title={fact.title}
              description={fact.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClimateFacts;