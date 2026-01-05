import React from 'react';
import { Github, ExternalLink } from 'lucide-react'; // Ensure you have lucide-react installed

const projects = [
  {
    id: 1,
    title: "Course Selling Platform",
    desc: "A comprehensive MERN stack platform for buying and managing video courses. Features include role-based authentication, video streaming, and payment integration.",
    tags: ["MERN Stack", "Redux", "Razorpay", "Cloudinary"],
    github: "https://github.com/sahilprajapati2005/course.git",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Coding/LMS image
    category: "Education"
  },
  {
    id: 2,
    title: "Job Portal Application",
    desc: "A bridge between job seekers and recruiters. Allows users to post jobs, apply for positions, and manage profiles with advanced filtering options.",
    tags: ["React.js", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/sahilprajapati2005/job.git",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Job/Office image
    category: "Business"
  },
  {
    id: 3,
    title: "Real-time Social Media App",
    desc: "A dynamic social platform featuring real-time messaging using Socket.io, media sharing, and JWT-based secure authentication.",
    tags: ["Socket.io", "React", "JWT", "Tailwind CSS"],
    github: "https://github.com/sahilprajapati2005/social-media.git",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Social Media/Mobile image
    category: "Social"
  }
];

const MyWork = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Portfolio</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            A selection of technical solutions I've built to solve real-world problems using the MERN stack.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium text-sm">{project.category}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wide rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer / Links */}
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 font-medium hover:text-black transition-colors"
                  >
                    <Github size={20} />
                    <span>Source Code</span>
                  </a>
                  
                  {/* Optional Live Demo Link (if you have one) */}
                  {/* <a href="#" className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a> 
                  */}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MyWork;