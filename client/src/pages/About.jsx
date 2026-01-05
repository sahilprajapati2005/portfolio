import React from 'react';
import { Code, Database, Server, Layout, BookOpen, Coffee, Award, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HERO SECTION --- */}
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">Get to know me</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Me</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            I'm <strong className="text-gray-100">Sahil Prajapati</strong>, a Full Stack Developer currently pursuing my BCA. 
            I bridge the gap between complex backend logic and beautiful frontend interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* --- LEFT COLUMN: BIO & EXPERIENCE --- */}
          <div className="space-y-10">
            
            {/* Bio Card */}
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl hover:shadow-cyan-900/10 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-900/30 rounded-xl">
                  <Coffee className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">My Journey</h3>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">
                My passion for coding started with a curiosity about how things work on the internet. Fast forward to today, 
                and I'm building scalable applications using the <span className="text-cyan-300 font-medium">MERN Stack</span>.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Currently, I am working as a developer at <span className="text-white font-semibold">Techmicra</span>, 
                where I turn ideas into high-performance code. When I'm not coding, I'm exploring new AI tools or debugging life with a cup of coffee.
              </p>
            </div>

            {/* Education / Experience Timeline */}
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-900/30 rounded-xl">
                  <Briefcase className="text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Experience & Education</h3>
              </div>

              <div className="space-y-8 relative border-l-2 border-slate-700 ml-3 pl-8">
                {/* Item 1 */}
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-cyan-500 border-4 border-slate-900"></span>
                  <h4 className="text-lg font-bold text-white">Full Stack Developer</h4>
                  <p className="text-cyan-400 text-sm mb-1">Techmicra • Present</p>
                  <p className="text-slate-500 text-sm">Building scalable web solutions and optimizing backend performance.</p>
                </div>
                
                {/* Item 2 */}
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-slate-600 border-4 border-slate-900"></span>
                  <h4 className="text-lg font-bold text-white">Bachelor of Computer Applications (BCA)</h4>
                  <p className="text-cyan-400 text-sm mb-1">Student • 6th Semester</p>
                  <p className="text-slate-500 text-sm">Focusing on Software Engineering, Data Structures, and Web Technologies.</p>
                </div>
              </div>
            </div>

          </div>

          {/* --- RIGHT COLUMN: TECHNICAL SKILLS --- */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Code className="text-purple-400" /> Technical Arsenal
            </h3>

            {/* Frontend Card */}
            <div className="group bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">Frontend</h4>
                <Layout size={20} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Tailwind CSS', 'Redux Toolkit', 'HTML5/CSS3', 'JavaScript (ES6+)'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-800 text-cyan-200 text-sm rounded-lg border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Card */}
            <div className="group bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">Backend</h4>
                <Server size={20} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Socket.io'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-800 text-blue-200 text-sm rounded-lg border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database Card */}
            <div className="group bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-green-500/50 transition-all">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">Database & Tools</h4>
                <Database size={20} className="text-slate-500 group-hover:text-green-400 transition-colors" />
              </div>
              <div className="flex flex-wrap gap-2">
                {['MongoDB', 'Mongoose', 'Git/GitHub', 'Postman', 'VS Code'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-800 text-green-200 text-sm rounded-lg border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Learning Card */}
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 rounded-2xl border border-slate-700/50">
               <div className="flex items-center gap-3 mb-2">
                 <BookOpen size={20} className="text-purple-400" />
                 <h4 className="text-white font-semibold">Currently Learning</h4>
               </div>
               <p className="text-slate-400 text-sm">
                 Deep diving into <span className="text-white font-medium">Next.js</span> and exploring <span className="text-white font-medium">AI Integration</span> in web apps.
               </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;