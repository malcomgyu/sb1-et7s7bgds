import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-xl font-bold">Clim Action</span>
            </div>
            <p className="text-gray-300 mb-4">
              Ensemble, agissons contre le réchauffement climatique pour préserver notre planète pour les générations futures.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Accueil</Link>
              </li>
              <li>
                <Link to="/causes" className="text-gray-300 hover:text-white">Causes et Effets</Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-white">Solutions</Link>
              </li>
              <li>
                <Link to="/ressources" className="text-gray-300 hover:text-white">Ressources</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.ipcc.ch/languages-2/francais/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  GIEC
                </a>
              </li>
              <li>
                <a href="https://unfccc.int/fr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  CCNUCC
                </a>
              </li>
              <li>
                <a href="https://www.ecologie.gouv.fr/politiques/lutte-contre-changement-climatique" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  Ministère de l'Écologie
                </a>
              </li>
              <li>
                <a href="https://reseauactionclimat.org/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  Réseau Action Climat
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-300">contact@climaction.org</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-300">01 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-300">75 rue de l'Environnement, 75001 Paris</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Clim Action. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="/mentions-legales" className="text-gray-400 hover:text-white">Mentions légales</Link>
            <Link to="/politique-confidentialite" className="text-gray-400 hover:text-white">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;