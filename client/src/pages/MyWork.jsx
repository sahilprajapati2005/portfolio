import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Vidhya Setu (Course Platform)",
    desc: "A comprehensive MERN stack platform for buying and managing video courses. Features include role-based authentication, video streaming, and payment integration.",
    tags: ["MERN Stack", "Redux", "Razorpay"],
    github: "https://github.com/sahilprajapati2005/course.git",
    live: "https://vidhyaasetu.netlify.app",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Education"
  },
  {
    id: 2,
    title: "Job Portal Application",
    desc: "A bridge between job seekers and recruiters. Allows users to post jobs, apply for positions, and manage profiles with advanced filtering options.",
    tags: ["React.js", "Node.js", "MongoDB"],
    github: "https://github.com/sahilprajapati2005/job.git",
    live: "https://job-smoky-seven.vercel.app",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Business"
  },
  {
    id: 3,
    title: "Real-time Social Media",
    desc: "A dynamic social platform featuring real-time messaging using Socket.io, media sharing, and JWT-based secure authentication.",
    tags: ["Socket.io", "React", "JWT"],
    github: "https://github.com/sahilprajapati2005/social-media.git",
    live: "https://social-app-8b2s.onrender.com",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Social"
  }
];

const MyWork = () => {
  return (
    // Matches Global Background (#0f172a)
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">Portfolio</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Work</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Check out my deployed applications. Click "Live Demo" to visit the websites.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div 
              key={project.id} 
              // UPDATED CARD STYLE: bg-slate-900 border-slate-800 (Matches About Page)
              className="bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col group hover:-translate-y-2"
            >
              
              {/* Image */}
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="relative h-48 overflow-hidden block">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-700">
                  <span className="text-cyan-400 text-xs font-bold tracking-wider">{project.category}</span>
                </div>
              </a>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-slate-800 text-cyan-200 text-xs font-medium rounded-md border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-800">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-medium text-sm hover:bg-slate-700 hover:text-white transition-all border border-slate-700"
                  >
                    <Github size={18} /> Code
                  </a>
                  
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-600 text-white font-medium text-sm hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-900/20"
                  >
                    <ExternalLink size={18} /> Demo
                  </a>
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