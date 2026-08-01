import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const TagCard = ({ number, title, text, className, aosDelay, aosType, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;
    
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;
    
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;
    
    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div 
      ref={ref}
      data-aos={aosType || "fade-up"} 
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 font-space ${className} ${
        isActive 
          ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950/80 border border-violet-500/50 shadow-[0_20px_50px_rgba(139,92,246,0.25)] text-white' 
          : 'bg-slate-950/40 border border-slate-900/60 shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:border-slate-800/80 hover:bg-slate-900/40 text-slate-300'
      }`}
    >
      {/* The glowing LED cyber node */}
      <div className="w-5 h-5 bg-gradient-to-br from-slate-800 to-slate-950 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] absolute top-4 border border-slate-800 z-10 flex items-center justify-center">
        <div className={`w-2 h-2 rounded-full transition-all duration-500 ${isActive ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse' : 'bg-slate-700'}`}></div>
      </div>
      
      {/* Inner container */}
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-8 flex flex-col min-h-[220px] transition-colors duration-700 ${
        isActive ? 'bg-slate-950/50' : 'bg-slate-900/10'
      }`}>
        <span className={`text-xl font-extrabold mb-2 italic transition-colors duration-700 ${
          isActive ? 'text-cyan-400' : 'text-slate-600'
        }`}>{number}</span>
        
        <h3 className={`text-2xl font-black mb-3 tracking-tight transition-colors duration-700 ${
          isActive ? 'bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent' : 'text-slate-100'
        }`}>{title}</h3>
        
        <p className={`text-sm leading-relaxed font-medium transition-colors duration-700 ${
          isActive ? 'text-slate-300' : 'text-slate-400'
        }`}>
          {text}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section 
      id="services"
      ref={containerRef}
      className="bg-[#030712] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans border-b border-slate-950 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      {/* Gradient glow blobs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative md:h-[1350px] font-space z-10">
        
        {/* Header Content */}
        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0">
          <div className="inline-block border border-slate-800 rounded-full px-5 py-1.5 text-xs text-cyan-400 font-bold mb-8 shadow-md bg-slate-950/60 uppercase tracking-wider backdrop-blur-md">
            Development Lifecycle
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight relative drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            How I build intelligent apps
            {/* Holographic arrow */}
            <svg className="absolute -bottom-10 right-10 w-12 h-12 text-cyan-500/70 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-sm font-semibold leading-relaxed">
            I follow a structured, modern, and highly technical approach to turn your concepts into robust full-stack applications.
          </p>
        </div>

        {/* Desktop SVG Animated Dashed Line */}
        <svg 
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0" 
          viewBox="0 0 1000 1350" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>

          {/* Faint background path (optional guide) */}
          <path 
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200" 
            fill="none" 
            stroke="rgba(255, 255, 255, 0.05)" 
            strokeWidth="2.5" 
            strokeDasharray="8 10" 
          />

          {/* Mask to reveal the dashed path based on scroll */}
          <mask id="path-mask">
            <motion.path 
              d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200" 
              fill="none" 
              stroke="white" 
              strokeWidth="20" 
              style={{ pathLength }}
            />
          </mask>

          {/* The actual dashed line that gets revealed */}
          <path 
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200" 
            fill="none" 
            stroke="url(#neonGradient)" 
            strokeWidth="3.5" 
            strokeDasharray="8 10" 
            mask="url(#path-mask)"
            className="drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]"
          />
        </svg>

        {/* Mobile Animated Vertical Dashed Line */}
        <svg 
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0" 
          viewBox="0 0 4 100" 
          preserveAspectRatio="none"
        >
          <path 
            d="M 2,0 L 2,100" 
            fill="none" 
            stroke="rgba(255, 255, 255, 0.05)" 
            strokeWidth="4" 
            strokeDasharray="4 6" 
            vectorEffect="non-scaling-stroke"
          />
          <mask id="path-mask-mobile">
            <motion.path 
              d="M 2,0 L 2,100" 
              fill="none" 
              stroke="white" 
              strokeWidth="4" 
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>
          <path 
            d="M 2,0 L 2,100" 
            fill="none" 
            stroke="rgb(6, 182, 212)" 
            strokeWidth="4.5" 
            strokeDasharray="4 6" 
            mask="url(#path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">
          
          <TagCard 
            number="01"
            title="Define"
            text="I start by clarifying goals, user requirements, and technical structures to map a precise plan for implementation."
            className="md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6"
            aosType="fade-left"
            aosDelay="100"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard 
            number="02"
            title="Design"
            text="Crafting clean, responsive user interfaces and logical workflows that ensure an engaging, accessible product journey."
            className="md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6"
            aosType="fade-right"
            aosDelay="200"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard 
            number="03"
            title="Build"
            text="Writing optimized backend systems, creating APIs, and coding clean state architectures using advanced full-stack technologies."
            className="md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3"
            aosType="fade-left"
            aosDelay="300"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard 
            number="04"
            title="Launch"
            text="Executing automated tests, deploying to robust cloud servers, optimizing load performance, and monitoring system health."
            className="md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3"
            aosType="fade-right"
            aosDelay="400"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          {/* Futuristic Cyber Banner Tag */}
          <div 
            data-aos="fade-in" 
            data-aos-delay="600"
            className="hidden md:block absolute top-[1250px] left-[60%] font-mono text-xs uppercase tracking-widest text-violet-400 font-bold rotate-6 border border-violet-500/30 px-4 py-2 rounded-lg bg-violet-950/30 backdrop-blur-md animate-pulse shadow-[0_0_15px_rgba(139,92,246,0.15)]"
          >
            SYSTEMS_READY_TO_LAUNCH
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;
