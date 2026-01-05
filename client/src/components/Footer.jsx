import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    // Matches the deep navy background + slate border
    <footer className="bg-[#0f172a] border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-cyan-400 tracking-wide">
              Sahil<span className="text-white">Portfolio</span>
            </h3>
            <p className="text-slate-400 text-sm mt-2 max-w-xs">
              Building scalable MERN stack applications with pixel-perfect UI.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a href="https://github.com/sahilprajapati2005" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:-translate-y-1">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:-translate-y-1">
              <Linkedin size={24} />
            </a>
            <a href="mailto:sahilprajapati0108@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:-translate-y-1">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Sahil Prajapati. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;