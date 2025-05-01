import React from 'react';
import { Recycle, Lightbulb, Bus, Trees as Tree, Utensils, Home, Droplets, Speech } from 'lucide-react';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tips: string[];
  color: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description, tips, color }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <div className={`${color} p-6 flex justify-center`}>
        <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <h4 className="font-semibold text-gray-800 mb-2">Comment agir :</h4>
        <ul className="space-y-2">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-600 mr-2 mt-0.5 flex-shrink-0">
                ✓
              </span>
              <span className="text-gray-600">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: <Recycle className="h-8 w-8 text-green-600" />,
      title: "Réduire, Réutiliser, Recycler",
      description: "Minimiser les déchets est crucial pour réduire notre empreinte carbone et préserver les ressources naturelles.",
      tips: [
        "Évitez les produits à usage unique et privilégiez les alternatives durables",
        "Compostez vos déchets organiques pour réduire les émissions de méthane",
        "Triez correctement vos déchets pour optimiser le recyclage"
      ],
      color: "bg-green-100"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-600" />,
      title: "Économiser l'énergie",
      description: "Réduire notre consommation d'énergie permet de limiter les émissions de gaz à effet de serre.",
      tips: [
        "Optez pour des ampoules LED à basse consommation",
        "Éteignez les appareils électroniques lorsqu'ils ne sont pas utilisés",
        "Isolez correctement votre habitation pour réduire les besoins en chauffage"
      ],
      color: "bg-yellow-100"
    },
    {
      icon: <Bus className="h-8 w-8 text-blue-600" />,
      title: "Mobilité durable",
      description: "Repenser nos modes de déplacement pour réduire notre dépendance aux énergies fossiles.",
      tips: [
        "Privilégiez les transports en commun, le vélo ou la marche",
        "Pratiquez le covoiturage pour vos déplacements quotidiens",
        "Optez pour un véhicule électrique ou hybride si nécessaire"
      ],
      color: "bg-blue-100"
    },
    {
      icon: <Tree className="h-8 w-8 text-emerald-600" />,
      title: "Protection des écosystèmes",
      description: "Préserver la biodiversité et les forêts est essentiel pour maintenir l'équilibre climatique.",
      tips: [
        "Soutenez des projets de reforestation locaux et internationaux",
        "Évitez les produits contenant de l'huile de palme non durable",
        "Participez à des activités de nettoyage de la nature"
      ],
      color: "bg-emerald-100"
    },
    {
      icon: <Utensils className="h-8 w-8 text-orange-600" />,
      title: "Alimentation responsable",
      description: "Nos choix alimentaires ont un impact significatif sur les émissions de gaz à effet de serre.",
      tips: [
        "Réduisez votre consommation de viande et de produits laitiers",
        "Privilégiez les produits locaux et de saison",
        "Limitez le gaspillage alimentaire en planifiant vos repas"
      ],
      color: "bg-orange-100"
    },
    {
      icon: <Home className="h-8 w-8 text-indigo-600" />,
      title: "Habitat écologique",
      description: "Adopter des pratiques durables chez soi pour réduire son empreinte environnementale.",
      tips: [
        "Installez des panneaux solaires ou optez pour un fournisseur d'énergie verte",
        "Récupérez l'eau de pluie pour l'arrosage du jardin",
        "Choisissez des matériaux écologiques pour vos travaux de rénovation"
      ],
      color: "bg-indigo-100"
    },
    {
      icon: <Droplets className="h-8 w-8 text-sky-600" />,
      title: "Économiser l'eau",
      description: "Préserver cette ressource vitale devient de plus en plus crucial face au changement climatique.",
      tips: [
        "Installez des équipements économes en eau (pommeaux de douche, toilettes, etc.)",
        "Réparez rapidement les fuites d'eau",
        "Adoptez des habitudes économes (douches courtes, fermer le robinet, etc.)"
      ],
      color: "bg-sky-100"
    },
    {
      icon: <Speech className="h-8 w-8 text-purple-600" />,
      title: "Sensibilisation",
      description: "Informer et éduquer est essentiel pour encourager un changement collectif face au défi climatique.",
      tips: [
        "Partagez vos connaissances et bonnes pratiques avec votre entourage",
        "Soutenez des politiques environnementales ambitieuses",
        "Participez à des événements de sensibilisation au climat"
      ],
      color: "bg-purple-100"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Solutions pour agir contre le réchauffement climatique
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Chaque action compte. Découvrez comment vous pouvez contribuer à la lutte contre le changement climatique au quotidien.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              tips={solution.tips}
              color={solution.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;