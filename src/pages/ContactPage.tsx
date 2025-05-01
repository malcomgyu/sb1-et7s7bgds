import React from 'react';
import ContactForm from '../components/ContactForm';
import DailyAction from '../components/DailyAction';
import { Mail, MessageSquare, Share2, Users } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl max-w-3xl">
            Vous souhaitez nous rejoindre, nous poser une question ou simplement échanger sur les problématiques climatiques ? 
            Nous sommes à votre écoute.
          </p>
        </div>
      </div>
      
      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <DailyAction />
              <ContactForm />
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-xl font-bold mb-6">Comment pouvons-nous vous aider ?</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <MessageSquare className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Questions générales</h4>
                      <p className="mt-1 text-gray-600">
                        Des questions sur notre mission, nos actions ou le changement climatique ? N'hésitez pas à nous demander.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Devenir bénévole</h4>
                      <p className="mt-1 text-gray-600">
                        Rejoignez notre équipe de bénévoles pour contribuer à nos actions et faire avancer la cause climatique.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Share2 className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Partenariats</h4>
                      <p className="mt-1 text-gray-600">
                        Vous représentez une organisation et souhaitez collaborer avec nous ? Parlons de nos synergies possibles.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Contact direct</h4>
                      <p className="mt-1 text-gray-600">
                        <a href="mailto:contact@climaction.org" className="text-purple-600 hover:underline">contact@climaction.org</a><br />
                        <span className="text-gray-600">01 23 45 67 89</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-600 rounded-lg shadow-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Rejoignez notre newsletter</h3>
                <p className="mb-4">
                  Restez informé sur nos actions et les dernières nouvelles concernant le climat.
                </p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Votre adresse email" 
                    className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500" 
                    required
                  />
                  <button 
                    type="submit" 
                    className="w-full px-4 py-2 bg-white text-green-700 font-medium rounded-md hover:bg-gray-100 transition duration-300"
                  >
                    S'inscrire
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map & Address */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Nos bureaux</h3>
                <p className="text-gray-600 mb-6">
                  Vous préférez nous rencontrer en personne ? Venez nous rendre visite à notre siège parisien.
                </p>
                <div className="space-y-3">
                  <p className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>75 rue de l'Environnement, 75001 Paris</span>
                  </p>
                  <p className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Lundi - Vendredi: 9h - 18h</span>
                  </p>
                  <p className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>01 23 45 67 89</span>
                  </p>
                </div>
              </div>
              <div className="h-64 md:h-auto bg-gray-300">
                {/* Intégration de carte ici - Pour l'exemple, nous utilisons un placeholder */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-700 text-center px-4">
                    Ici se trouverait une carte interactive montrant l'emplacement de nos bureaux
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;