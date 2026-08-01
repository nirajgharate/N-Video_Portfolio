import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-slate-400 py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[40vh] border-t border-slate-900">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full font-medium">
        <div className="flex flex-col gap-1 font-space">
          <p className="text-slate-200 font-bold">Niraj Gharate</p>
          <p>Full-Stack & Generative AI Engineer</p>
          <p className="text-cyan-400 font-semibold">MERN • FastAPI • LangChain • RAG</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center font-space">
          <p className="text-slate-200">Sandip University, Nashik (B.Tech CSE)</p>
          <a href="#projects" className="underline hover:text-cyan-400 transition-colors mt-1 underline-offset-4 decoration-1">Explore 7+ Production Projects</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end font-space">
          <p className="text-slate-200">Pune, Maharashtra, India</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-16 md:py-20 overflow-hidden">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-black tracking-tighter lowercase select-none text-transparent [-webkit-text-stroke:1px_rgba(6,182,212,0.06)] md:[-webkit-text-stroke:2px_rgba(6,182,212,0.06)] w-full text-center hover:text-cyan-500/5 transition-colors duration-700">
          niraj
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-3 font-space">
          <p className="text-slate-500 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Niraj Gharate | All Rights Reserved
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:nirajgharate.dev@gmail.com" className="underline hover:text-cyan-400 transition-colors underline-offset-4 decoration-1 font-bold">
            nirajgharate.dev@gmail.com
          </a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <div className="flex gap-4 text-[11px] font-bold">
            <a href="https://github.com/nirajgharate" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/nirajgharate79" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
