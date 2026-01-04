import React from 'react';
import Experience from '../components/Experience';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-8 px-4">
      
      {/* 1. Introduction Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b pb-2">About Me</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          I am Sahil Prajapati, a passionate Full Stack Web Developer based in Ahmedabad. 
          Currently pursuing my BCA at Shreyarth University, I have a strong foundation in the 
          MERN stack (MongoDB, Express, React, Node.js). I love building scalable applications 
          and exploring new technologies like AI integration and Real-time WebSockets.
        </p>
      </section>

      {/* 2. Experience Section (Component) */}
      <Experience />

      {/* 3. Education Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <span className="w-2 h-8 bg-green-600 rounded-sm"></span>
          Education
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          
          {/* Degree */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-xl text-gray-800">Bachelor's in Computer Applications (B.C.A)</h3>
            <p className="text-blue-600 font-medium">Shreyarth University</p>
            <p className="text-sm text-gray-500 mb-4 mt-1">Status: Currently pursuing 3rd Year</p>
            
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm font-semibold text-gray-700 mb-2">Semester Scores:</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between border-b pb-1"><span>Sem 1:</span> <span className="font-bold">8.09</span></div>
                <div className="flex justify-between border-b pb-1"><span>Sem 2:</span> <span className="font-bold">8.27</span></div>
                <div className="flex justify-between border-b pb-1"><span>Sem 3:</span> <span className="font-bold">8.36</span></div>
                <div className="flex justify-between border-b pb-1"><span>Sem 4:</span> <span className="font-bold">8.27</span></div>
              </div>
            </div>
          </div>

          {/* Schooling */}
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-[48%]">
              <div>
                <h3 className="font-bold text-lg">12th Grade</h3>
                <p className="text-gray-600 text-sm">Jeet School of Winners</p>
              </div>
              <div className="mt-2">
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-bold">
                  Completed
                </span>
                <p className="text-gray-900 font-bold mt-1">Score: 67%</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-[48%]">
              <div>
                <h3 className="font-bold text-lg">10th Grade</h3>
                <p className="text-gray-600 text-sm">Kala English Medium School</p>
              </div>
              <div className="mt-2">
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-bold">
                  Completed
                </span>
                <p className="text-gray-900 font-bold mt-1">Score: 77.78%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Skills Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span className="w-2 h-8 bg-purple-600 rounded-sm"></span>
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Frontend */}
          <div className="bg-white p-5 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-700 mb-3 uppercase text-sm tracking-wider">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white p-5 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-700 mb-3 uppercase text-sm tracking-wider">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Express.js', 'RESTful APIs', 'Socket.io', 'JWT'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Database & Tools */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 md:col-span-2">
            <h3 className="font-semibold text-gray-700 mb-3 uppercase text-sm tracking-wider">Database & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['MongoDB', 'Git', 'Vercel', 'Render', 'Netlify', 'Google OAuth'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;