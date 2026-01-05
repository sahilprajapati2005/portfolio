import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center px-4">
      <div className="space-y-8 max-w-3xl">
        
        {/* Animated Badge */}
        <div className="animate-fade-in-up">
           <span className="px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-full shadow-sm">
             🚀 Full Stack MERN Developer
           </span>
        </div>
        
        {/* Hero Text with Stylish Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Hi, I'm <br className="md:hidden" />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
            Sahil Prajapati
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          I build scalable, pixel-perfect web applications using the MERN Stack. 
          Currently transforming ideasYW into code at <span className="font-semibold text-gray-800">Techmicra</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link 
            to="/work" 
            className="inline-flex items-center justify-center px-8 py-4 text-white bg-blue-600 rounded-full font-semibold shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1"
          >
            View My Work <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          
          <a 
            href="/resume.pdf" 
            download="Sahil_Prajapati_Resume"
            className="inline-flex items-center justify-center px-8 py-4 text-gray-700 bg-white border border-gray-200 rounded-full font-semibold hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-all"
          >
            Download Resume <Download className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;