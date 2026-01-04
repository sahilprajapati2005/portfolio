import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="space-y-6 max-w-2xl">
        <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
          Full Stack MERN Developer
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Hi, I'm <span className="text-blue-600">Sahil Prajapati</span>
        </h1>
        
        <p className="text-lg text-gray-600">
          I build scalable web applications using the MERN Stack. 
          Currently transforming ideas into code at Techmicra.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link 
            to="/work" 
            className="inline-flex items-center justify-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            View My Work <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          
          <a 
            href="/resume.pdf" 
            download="Sahil_Prajapati_Resume"
            className="inline-flex items-center justify-center px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
          >
            Download Resume <Download className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;