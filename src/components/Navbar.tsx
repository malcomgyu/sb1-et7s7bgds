import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Leaf className={`h-8 w-8 ${scrolled ? 'text-green-700' : 'text-green-500'}`} />
              <span className={`ml-2 text-xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Clim Action
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${scrolled ? 'text-gray-800 hover:text-green-700' : 'text-white hover:text-green-200'}`}>
                Accueil
              </Link>
              <Link to="/causes" className={`px-3 py-2 rounded-md text-sm font-medium ${scrolled ? 'text-gray-800 hover:text-green-700' : 'text-white hover:text-green-200'}`}>
                Causes et Effets
              </Link>
              <Link to="/solutions" className={`px-3 py-2 rounded-md text-sm font-medium ${scrolled ? 'text-gray-800 hover:text-green-700' : 'text-white hover:text-green-200'}`}>
                Solutions
              </Link>
              <Link to="/ressources" className={`px-3 py-2 rounded-md text-sm font-medium ${scrolled ? 'text-gray-800 hover:text-green-700' : 'text-white hover:text-green-200'}`}>
                Ressources
              </Link>
              <Link to="/contact" className={`px-3 py-2 rounded-md text-sm font-medium bg-green-600 hover:bg-green-700 text-white`}>
                Agir maintenant
              </Link>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled ? 'text-gray-800 hover:text-green-700' : 'text-white hover:text-green-200'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Ouvrir le menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-green-700">
              Accueil
            </Link>
            <Link to="/causes" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-green-700">
              Causes et Effets
            </Link>
            <Link to="/solutions" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-green-700">
              Solutions
            </Link>
            <Link to="/ressources" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-green-700">
              Ressources
            </Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium bg-green-600 hover:bg-green-700 text-white">
              Agir maintenant
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;