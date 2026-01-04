import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: "Course Selling Platform",
    desc: "A comprehensive MERN stack platform for buying and managing video courses. Features include role-based authentication, video streaming, and payment integration.",
    tags: ["MERN Stack", "Redux", "Razorpay", "Cloudinary"],
    github: "https://github.com/sahilprajapati2005/course.git",
    color: "bg-purple-100 text-purple-800"
  },
  {
    id: 2,
    title: "Job Portal Application",
    desc: "A bridge between job seekers and recruiters. Allows users to post jobs, apply for positions, and manage profiles with advanced filtering options.",
    tags: ["React.js", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/sahilprajapati2005/job.git",
    color: "bg-blue-100 text-blue-800"
  },
  {
    id: 3,
    title: "Real-time Social Media App",
    desc: "A dynamic social platform featuring real-time messaging using Socket.io, media sharing, and JWT-based secure authentication.",
    tags: ["Socket.io", "React", "JWT", "Tailwind CSS"],
    github: "https://github.com/sahilprajapati2005/social-media.git",
    color: "bg-pink-100 text-pink-800"
  }
];

const MyWork = () => {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">My Projects</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here are some of the key projects I've built using the MERN stack. 
          Each project represents a solution to a real-world problem.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            title={project.title}
            desc={project.desc}
            tags={project.tags}
            github={project.github}
            color={project.color}
          />
        ))}
      </div>
    </div>
  );
};

export default MyWork;