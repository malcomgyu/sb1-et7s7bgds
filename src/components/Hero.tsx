import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/296234/pexels-photo-296234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          style={{ maxWidth: "800px" }}
        >
          <span className="block">Ensemble, luttons contre</span>
          <span className="block mt-2 text-green-400">le réchauffement climatique</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl">
          Rejoignez notre mouvement pour préserver notre planète et construire un avenir durable pour tous.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link 
            to="/solutions" 
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition duration-300 flex items-center justify-center"
          >
            Découvrir les solutions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          
          <Link 
            to="/contact" 
            className="px-8 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium rounded-md transition duration-300"
          >
            Agir maintenant
          </Link>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;