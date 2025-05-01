import React from 'react';
import { 
  Factory, 
  Car, 
  TreePine, 
  Waves, 
  CloudSun, 
  Wheat, 
  Bug, 
  Heart 
} from 'lucide-react';

interface CauseEffectProps {
  icon: React.ReactNode;
  cause: string;
  effect: string;
}

const CauseEffect: React.FC<CauseEffectProps> = ({ icon, cause, effect }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-1 bg-gradient-to-r from-amber-500 to-red-500">
        <div className="bg-white p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-amber-100 p-3 rounded-full">
              {icon}
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold mb-2">{cause}</h3>
              <p className="text-gray-600">{effect}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CausesEffects: React.FC = () => {
  const causesEffects = [
    {
      icon: <Factory className="h-6 w-6 text-gray-700" />,
      cause: "Émissions industrielles",
      effect: "Les industries génèrent environ 21% des émissions mondiales de gaz à effet de serre, notamment via la combustion de combustibles fossiles et les processus industriels."
    },
    {
      icon: <Car className="h-6 w-6 text-gray-700" />,
      cause: "Transport",
      effect: "Le secteur des transports représente environ 14% des émissions globales, principalement dues aux véhicules à moteur à combustion interne."
    },
    {
      icon: <TreePine className="h-6 w-6 text-gray-700" />,
      cause: "Déforestation",
      effect: "La destruction des forêts réduit la capacité de la planète à absorber le CO₂ et libère le carbone stocké dans les arbres, contribuant à environ 10% des émissions mondiales."
    },
    {
      icon: <Waves className="h-6 w-6 text-gray-700" />,
      cause: "Montée des océans",
      effect: "L'élévation du niveau de la mer menace les communautés côtières et des îles entières, pouvant provoquer des migrations massives et la perte de territoires."
    },
    {
      icon: <CloudSun className="h-6 w-6 text-gray-700" />,
      cause: "Événements climatiques extrêmes",
      effect: "L'augmentation de la fréquence et de l'intensité des ouragans, inondations et sécheresses cause des dégâts matériels considérables et des pertes humaines."
    },
    {
      icon: <Wheat className="h-6 w-6 text-gray-700" />,
      cause: "Insécurité alimentaire",
      effect: "Les changements de régimes de précipitations et les températures extrêmes réduisent les rendements agricoles et menacent la sécurité alimentaire mondiale."
    },
    {
      icon: <Bug className="h-6 w-6 text-gray-700" />,
      cause: "Perte de biodiversité",
      effect: "Le réchauffement modifie les écosystèmes plus rapidement que de nombreuses espèces ne peuvent s'adapter, causant extinctions et perturbations écologiques."
    },
    {
      icon: <Heart className="h-6 w-6 text-gray-700" />,
      cause: "Risques sanitaires",
      effect: "L'augmentation des vagues de chaleur, la propagation de maladies transmises par les insectes et la pollution atmosphérique impactent la santé humaine."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Causes et Effets du Réchauffement Climatique
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Le réchauffement climatique résulte principalement des activités humaines. Comprendre ses causes et ses conséquences est essentiel pour y faire face efficacement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {causesEffects.map((item, index) => (
            <CauseEffect
              key={index}
              icon={item.icon}
              cause={item.cause}
              effect={item.effect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CausesEffects;