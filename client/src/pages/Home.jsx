import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    // Matches Global Background (#0f172a) + Relative for positioning effects
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f172a] text-center px-4 pt-16 relative overflow-hidden">
      
      {/* 1. Subtle Background Glow Effect (Behind Text) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10"></div>

      <div className="space-y-8 max-w-4xl relative z-10">
        
        {/* 2. Professional Badge */}
        <div className="animate-fade-in-up">
           <span className="px-4 py-2 text-xs font-bold tracking-widest text-cyan-400 bg-cyan-950/30 border border-cyan-500/20 rounded-full uppercase shadow-[0_0_10px_rgba(6,182,212,0.1)]">
             🚀 Full Stack MERN Developer
           </span>
        </div>
        
        {/* 3. Name (Gradient Text) */}
        <h1 className="text-5xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 leading-tight tracking-tight animate-gradient py-2">
          Sahil Prajapati
        </h1>
        
        {/* 4. Bio Text (Slate-400 for contrast) */}
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
         My Portfolio is a representation of all that I've learned and accomplished as a B.C.A student. 
        </p>

        {/* 5. Buttons (Cyan & Dark Slate) */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
          
          {/* Primary Button */}
          <Link 
            to="/work" 
            className="inline-flex items-center justify-center px-8 py-4 text-slate-950 bg-cyan-400 rounded-full font-bold shadow-lg hover:bg-cyan-300 hover:shadow-cyan-400/50 transition-all transform hover:-translate-y-1"
          >
            View My Work <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          
          {/* Secondary Button */}
          <a 
            href="/resume.pdf" 
            download="Sahil_Prajapati_Resume.pdf"
            className="inline-flex items-center justify-center px-8 py-4 text-slate-300 bg-slate-900 border border-slate-700 rounded-full font-semibold hover:bg-slate-800 hover:text-white hover:border-slate-500 transition-all"
          >
            Download Resume <Download className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;