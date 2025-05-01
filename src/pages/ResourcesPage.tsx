import React, { useState } from 'react';
import ResourceCard from '../components/ResourceCard';

const ResourcesPage: React.FC = () => {
  const allResources = [
    {
      title: "Rapport du GIEC 2023",
      description: "Le dernier rapport du Groupe d'experts intergouvernemental sur l'évolution du climat (GIEC) présente l'état actuel des connaissances scientifiques sur le changement climatique.",
      imageUrl: "https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      link: "https://www.ipcc.ch/languages-2/francais/",
      tags: ["Science", "Rapport", "GIEC"],
      type: "Rapport"
    },
    {
      title: "Comprendre l'effet de serre",
      description: "Une vidéo explicative qui détaille le phénomène de l'effet de serre, son fonctionnement naturel et son amplification par les activités humaines.",
      imageUrl: "https://images.pexels.com/photos/17468378/pexels-photo-17468378/free-photo-of-soleil-nuages-plante-sec.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      link: "https://www.youtube.com/watch?v=T4LVXCCmIKA",
      tags: ["Vulgarisation", "Éducation", "Effet de serre"],
      type: "Vidéo"
    },
    {
      title: "Calculateur d'empreinte carbone",
      description: "Un outil pratique pour estimer votre empreinte carbone personnelle et identifier les domaines où vous pouvez réduire votre impact environnemental.",
      imageUrl: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      link: "https://nosgestesclimat.fr/",
      tags: ["Outil", "Empreinte carbone", "Action individuelle"],
      type: "Outil"
    },
    {
      title: "Les solutions fondées sur la nature",
      description: "Une infographie présentant les solutions basées sur les écosystèmes naturels pour lutter contre le changement climatique et s'y adapter.",
      imageUrl: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      link: "https://uicn.fr/solutions-fondees-sur-la-nature/",
      tags: ["Biodiversité", "Solutions", "Adaptation"],
      type: "Infographie"
    },
    {
      title: "La justice climatique expliquée",
      description: "Un article détaillant le concept de justice climatique, qui souligne les inégalités face au changement climatique et la nécessité d'une transition juste.",
      imageUrl: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      link: "https://reseauactionclimat.org/comprendre-urgence/justice-climatique/",
      tags: ["Justice sociale", "Équité", "Transition juste"],
      type: "Article"
    },
    {
      title: "Podcast: Parler du climat",
      description: "Un podcast où des experts et des militants discutent des meilleurs moyens de communiquer sur le changement climatique et de mobiliser l'action collective.",
      imageUrl: "https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      link: "https://www.radiofrance.fr/franceculture/podcasts/de-cause-a-effets-le-magazine-de-l-environnement",
      tags: ["Communication", "Mobilisation", "Médias"],
      type: "Podcast"
    },
    {
      title: "Guide des éco-gestes quotidiens",
      description: "Un guide pratique présentant des actions simples à mettre en œuvre au quotidien pour réduire son impact environnemental.",
      imageUrl: "https://images.pexels.com/photos/5748604/pexels-photo-5748604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      link: "https://www.ademe.fr/particuliers-eco-citoyens/",
      tags: ["Écogestes", "Vie quotidienne", "Conseils pratiques"],
      type: "Article"
    },
    {
      title: "L'Anthropocène expliqué aux enfants",
      description: "Une ressource éducative adaptée aux jeunes publics pour comprendre le concept d'Anthropocène et les enjeux du changement climatique.",
      imageUrl: "https://images.pexels.com/photos/8535214/pexels-photo-8535214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      link: "https://www.lumni.fr/video/c-est-quoi-le-rechauffement-climatique-1-jour-1-question",
      tags: ["Éducation", "Jeunesse", "Pédagogie"],
      type: "Vidéo"
    },
    {
      title: "Atlas du changement climatique",
      description: "Une collection de cartes et de visualisations interactives montrant les impacts passés, présents et futurs du changement climatique à travers le monde.",
      imageUrl: "https://images.pexels.com/photos/697662/pexels-photo-697662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      link: "https://interactive-atlas.ipcc.ch/",
      tags: ["Visualisation", "Données", "Impacts"],
      type: "Outil"
    },
    {
      title: "Climatologie pour comprendre les enjeux",
      description: "Un article scientifique accessible qui présente les bases de la climatologie pour mieux appréhender les défis actuels liés au climat.",
      imageUrl: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      link: "https://lejournal.cnrs.fr/dossiers/les-recherches-sur-le-climat",
      tags: ["Science", "Climatologie", "Vulgarisation"],
      type: "Article"
    },
    {
      title: "Témoignages: Vivre avec le changement climatique",
      description: "Une série de témoignages de personnes à travers le monde qui sont déjà confrontées aux conséquences du changement climatique dans leur vie quotidienne.",
      imageUrl: "https://images.pexels.com/photos/19670/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750",
      link: "https://www.wwf.fr/agir-au-quotidien/temoignages",
      tags: ["Témoignages", "Impacts humains", "Adaptation"],
      type: "Vidéo"
    },
    {
      title: "La finance verte expliquée",
      description: "Un guide pour comprendre comment les investissements peuvent contribuer à la transition écologique et comment éviter le greenwashing financier.",
      imageUrl: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      link: "https://www.novethic.fr/finance-durable.html",
      tags: ["Finance", "Investissement", "Transition"],
      type: "Article"
    }
  ];
  
  const [filteredResources, setFilteredResources] = useState(allResources);
  const [activeType, setActiveType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const resourceTypes = Array.from(new Set(allResources.map(resource => resource.type)));
  
  const handleTypeFilter = (type: string | null) => {
    setActiveType(type);
    if (type === null) {
      setFilteredResources(
        allResources.filter(resource => 
          resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      );
    } else {
      setFilteredResources(
        allResources.filter(resource => 
          resource.type === type && 
          (
            resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
          )
        )
      );
    }
  };
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (activeType === null) {
      setFilteredResources(
        allResources.filter(resource => 
          resource.title.toLowerCase().includes(query.toLowerCase()) ||
          resource.description.toLowerCase().includes(query.toLowerCase()) ||
          resource.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        )
      );
    } else {
      setFilteredResources(
        allResources.filter(resource => 
          resource.type === activeType && 
          (
            resource.title.toLowerCase().includes(query.toLowerCase()) ||
            resource.description.toLowerCase().includes(query.toLowerCase()) ||
            resource.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
          )
        )
      );
    }
  };

  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-700 to-sky-500 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Ressources sur le Climat</h1>
          <p className="text-xl max-w-3xl">
            Explorez notre bibliothèque de ressources pour approfondir vos connaissances sur le changement climatique, 
            ses causes, ses effets et les solutions possibles.
          </p>
        </div>
      </div>
      
      {/* Search and Filters */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="md:w-1/3">
              <input
                type="text"
                placeholder="Rechercher une ressource..."
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
              <button
                onClick={() => handleTypeFilter(null)}
                className={`px-4 py-2 rounded-md ${
                  activeType === null
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Tous
              </button>
              
              {resourceTypes.map((type, index) => (
                <button
                  key={index}
                  onClick={() => handleTypeFilter(type)}
                  className={`px-4 py-2 rounded-md whitespace-nowrap ${
                    activeType === type
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Resources Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource, index) => (
                <ResourceCard
                  key={index}
                  title={resource.title}
                  description={resource.description}
                  imageUrl={resource.imageUrl}
                  link={resource.link}
                  tags={resource.tags}
                  type={resource.type}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Aucune ressource ne correspond à votre recherche. Essayez avec d'autres termes ou catégories.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Submit Resource CTA */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Vous connaissez une ressource intéressante ?</h2>
            <p className="text-gray-600 mb-6">
              Partagez vos découvertes avec notre communauté pour enrichir notre bibliothèque de ressources sur le climat.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
            >
              Suggérer une ressource
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;