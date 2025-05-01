import React, { useState, useEffect } from 'react';
import { Timer, CheckCircle } from 'lucide-react';

interface Action {
  title: string;
  description: string;
  impact: string;
}

const actions: Action[] = [
  {
    title: "Réduire sa consommation d'eau",
    description: "Prenez une douche courte au lieu d'un bain et fermez le robinet pendant le brossage des dents.",
    impact: "Économise jusqu'à 150 litres d'eau par jour"
  },
  {
    title: "Mode de transport durable",
    description: "Utilisez le vélo, la marche ou les transports en commun pour vos déplacements.",
    impact: "Réduit les émissions de CO2 de plusieurs kg par trajet"
  },
  {
    title: "Éteindre les appareils en veille",
    description: "Débranchez les appareils électroniques non utilisés avant de dormir.",
    impact: "Économise jusqu'à 10% sur votre facture d'électricité"
  },
  {
    title: "Manger local et de saison",
    description: "Choisissez des fruits et légumes locaux et de saison pour vos repas.",
    impact: "Réduit l'empreinte carbone de votre alimentation"
  },
  {
    title: "Réduire les déchets",
    description: "Utilisez des sacs réutilisables et évitez les produits suremballés.",
    impact: "Diminue la pollution plastique et les émissions liées aux déchets"
  }
];

const DailyAction: React.FC = () => {
  const [currentAction, setCurrentAction] = useState<Action | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<string>('');

  useEffect(() => {
    const today = new Date().toDateString();
    const lastActionDate = localStorage.getItem('lastActionDate');
    const lastActionCompleted = localStorage.getItem('actionCompleted') === 'true';
    
    if (lastActionDate === today) {
      setIsCompleted(lastActionCompleted);
    } else {
      localStorage.setItem('lastActionDate', today);
      localStorage.setItem('actionCompleted', 'false');
      setIsCompleted(false);
    }

    // Select a pseudo-random action based on the date
    const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
    const actionIndex = dayOfYear % actions.length;
    setCurrentAction(actions[actionIndex]);
  }, []);

  useEffect(() => {
    const updateTimeRemaining = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      
      const diff = tomorrow.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      
      setTimeRemaining(`${hours}h ${minutes}m`);
    };

    updateTimeRemaining();
    const interval = setInterval(updateTimeRemaining, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleActionComplete = () => {
    setIsCompleted(true);
    localStorage.setItem('actionCompleted', 'true');
  };

  if (!currentAction) return null;

  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg shadow-lg p-8 mb-8">
      <h3 className="text-2xl font-bold mb-6 text-green-800">Action du jour</h3>
      
      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-2 text-gray-800">{currentAction.title}</h4>
        <p className="text-gray-600 mb-3">{currentAction.description}</p>
        <p className="text-sm font-medium text-green-700">{currentAction.impact}</p>
      </div>

      {isCompleted ? (
        <div className="flex items-center space-x-3 text-green-600">
          <CheckCircle className="h-5 w-5" />
          <span className="font-medium">Action complétée ! Revenez dans {timeRemaining} pour la prochaine action.</span>
        </div>
      ) : (
        <button
          onClick={handleActionComplete}
          className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg flex items-center justify-center transition duration-300"
        >
          <Timer className="h-5 w-5 mr-2" />
          J'ai réalisé cette action
        </button>
      )}
    </div>
  );
};

export default DailyAction;