import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
  type: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  link, 
  tags,
  type 
}) => {
  const typeColors: Record<string, string> = {
    'Article': 'bg-blue-100 text-blue-800',
    'Vidéo': 'bg-red-100 text-red-800',
    'Rapport': 'bg-green-100 text-green-800',
    'Infographie': 'bg-purple-100 text-purple-800',
    'Outil': 'bg-yellow-100 text-yellow-800',
    'Podcast': 'bg-pink-100 text-pink-800',
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div 
        className="h-48 w-full bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold truncate">{title}</h3>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${typeColors[type] || 'bg-gray-100 text-gray-800'}`}>
            {type}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-green-600 hover:text-green-800 font-medium text-sm"
        >
          Découvrir la ressource
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;