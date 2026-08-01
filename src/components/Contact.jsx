import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const [copied, setCopied] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const copyEmail = () => {
    navigator.clipboard.writeText("nirajgharate.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section ref={ref} id="contact" className="bg-[#030712] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-slate-900 font-space">
      
      {/* Background glow blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[180px] pointer-events-none z-0" />

      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-transparent [-webkit-text-stroke:1px_rgba(6,182,212,0.05)] md:[-webkit-text-stroke:2.5px_rgba(6,182,212,0.05)] uppercase tracking-tighter select-none scale-y-[1.6] origin-top drop-shadow-[0_0_40px_rgba(6,182,212,0.02)]"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form & Direct Details Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div 
          data-aos="fade-up"
          className="bg-slate-950/90 border-t border-l border-slate-800/80 md:rounded-tl-[3rem] w-full md:w-[90%] lg:w-[80%] p-8 md:p-16 text-slate-100 flex flex-col justify-between backdrop-blur-xl shadow-[-20px_-20px_50px_rgba(0,0,0,0.5)] relative"
        >
          <div className="absolute top-0 left-0 w-32 h-[1px] bg-gradient-to-r from-cyan-400 to-transparent"></div>
          <div className="absolute top-0 left-0 w-[1px] h-32 bg-gradient-to-b from-cyan-400 to-transparent"></div>

          {/* Top Info Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-slate-900 mb-12">
            <div>
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-400 opacity-90 mb-2">
                Get In Touch
              </div>
              <h3 className="text-3xl font-black text-white">Let’s build something intelligent.</h3>
            </div>

            {/* Direct Handles Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={copyEmail}
                className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-850 transition-all flex items-center gap-2"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>{copied ? "✓ Copied Email!" : "nirajgharate.dev@gmail.com"}</span>
              </button>

              <a
                href="tel:9359140788"
                className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all flex items-center gap-2"
              >
                <span>📞 +91 9359140788</span>
              </a>

              <a
                href="https://github.com/nirajgharate"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/nirajgharate79"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <form className="flex flex-col gap-12 md:gap-16 w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
              <div className="flex-1 flex flex-col gap-10">
                <div className="relative">
                  <input 
                    type="text" 
                    id="firstName" 
                    placeholder="Your Name" 
                    className="w-full bg-transparent border-b border-slate-800 pb-3 text-lg focus:outline-none focus:border-cyan-400 transition-colors placeholder-slate-500 font-medium rounded-none text-white"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Email Address" 
                    className="w-full bg-transparent border-b border-slate-800 pb-3 text-lg focus:outline-none focus:border-cyan-400 transition-colors placeholder-slate-500 font-medium rounded-none text-white"
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea 
                    id="message" 
                    placeholder="Project details or message..." 
                    className="w-full h-full min-h-[120px] bg-transparent border-b border-slate-800 pb-3 text-lg focus:outline-none focus:border-cyan-400 transition-colors placeholder-slate-500 font-medium resize-none rounded-none text-white"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center justify-between pt-4 border-t border-slate-900">
              <p className="text-xs text-slate-400 max-w-md">
                Based in <span className="text-cyan-400 font-bold">Pune, India</span>. Open for remote full-stack, backend, and Generative AI roles.
              </p>
              
              <button 
                type="submit" 
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 border border-transparent text-white font-bold flex items-center justify-center gap-3 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:scale-[1.02] transition-all duration-300 group whitespace-nowrap self-stretch sm:self-auto"
              >
                Send Message
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
