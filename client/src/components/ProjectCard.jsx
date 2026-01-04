import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, desc, tags, github, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 flex flex-col h-full">
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{title}</h3>
          <a 
            href={github} 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-500 hover:text-black transition-colors"
          >
            <Github size={20} />
          </a>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm flex-grow">{desc}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map(tag => (
            <span 
              key={tag} 
              className={`text-xs px-2 py-1 rounded-full font-medium ${color}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <a 
            href={github} 
            target="_blank" 
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition text-sm font-medium"
          >
            View Code <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;