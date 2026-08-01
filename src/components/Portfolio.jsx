import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectData = [
  {
    title: "MeetIP",
    subtitle: "Real-Time Communication Platform",
    date: "May 2025 – Oct 2025",
    category: "Full Stack",
    desc: "Engineered a scalable real-time messaging and video calling application using React.js, Node.js, Express.js, MongoDB, Socket.IO, and WebRTC.",
    bullets: [
      "Built secure peer-to-peer video calling using WebRTC with low-latency signaling.",
      "Integrated 1-to-1 messaging, group chats, media sharing, emoji reactions, and live typing indicators with Socket.IO.",
      "Designed responsive UI with JWT & Google OAuth authentication."
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "WebRTC", "JWT"],
    liveLink: "#",
    githubLink: "https://github.com/nirajgharate",
    glowColor: "hover:border-indigo-500/40 hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)]",
    iconColor: "text-indigo-400",
    visual: (
      <svg className="w-full h-full text-indigo-500/40 bg-slate-950/80" viewBox="0 0 200 110" fill="none">
        <rect x="15" y="15" width="80" height="50" rx="6" className="stroke-slate-800 fill-slate-900/40" strokeWidth="1" />
        <rect x="105" y="15" width="80" height="50" rx="6" className="stroke-slate-800 fill-slate-900/40" strokeWidth="1" />
        <circle cx="55" cy="35" r="10" className="stroke-indigo-500/40 fill-indigo-950/20" strokeWidth="1" />
        <circle cx="145" cy="35" r="10" className="stroke-cyan-500/40 fill-cyan-950/20" strokeWidth="1" />
        <rect x="50" y="75" width="100" height="20" rx="10" className="stroke-slate-800 fill-slate-950" strokeWidth="1" />
        <circle cx="65" cy="85" r="4" className="fill-slate-800 hover:fill-slate-700" />
        <circle cx="82" cy="85" r="4" className="fill-slate-800 hover:fill-slate-700" />
        <circle cx="100" cy="85" r="5" className="fill-rose-500/80 animate-pulse" />
        <circle cx="118" cy="85" r="4" className="fill-slate-800 hover:fill-slate-700" />
        <circle cx="135" cy="85" r="4" className="fill-slate-800 hover:fill-slate-700" />
        <path d="M42 55 Q47 50 52 55 T62 55" className="stroke-indigo-400" strokeWidth="1" fill="none" />
        <path d="M132 55 Q137 50 142 55 T152 55" className="stroke-cyan-400" strokeWidth="1" fill="none" />
      </svg>
    )
  },
  {
    title: "AI Homeroom Teacher (AHT)",
    subtitle: "AI-Powered Learning Assistant",
    date: "Jan 2026 – Feb 2026",
    category: "Generative AI",
    desc: "Intelligent learning assistant built with React.js, Node.js, FastAPI, LangChain, and MongoDB delivering personalized AI education.",
    bullets: [
      "Engineered Retrieval-Augmented Generation (RAG) supporting PDF chat & semantic document search.",
      "Created an AI YouTube Video Summarizer that generates key takeaways & study notes using LLMs.",
      "Automated quiz generation, flashcards, and vector embedding notes."
    ],
    tags: ["React.js", "Node.js", "FastAPI", "LangChain", "RAG", "MongoDB", "Vector DB"],
    liveLink: "#",
    githubLink: "https://github.com/nirajgharate",
    glowColor: "hover:border-cyan-500/40 hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)]",
    iconColor: "text-cyan-400",
    visual: (
      <svg className="w-full h-full text-cyan-500/40 bg-slate-950/80" viewBox="0 0 200 110" fill="none">
        <circle cx="100" cy="55" r="14" className="stroke-cyan-500/60 fill-cyan-950/40" strokeWidth="1" />
        <circle cx="45" cy="30" r="8" className="stroke-violet-500/40 fill-violet-950/20" strokeWidth="1" />
        <circle cx="155" cy="30" r="8" className="stroke-blue-500/40 fill-blue-950/20" strokeWidth="1" />
        <circle cx="65" cy="85" r="9" className="stroke-emerald-500/40 fill-emerald-950/20" strokeWidth="1" />
        <circle cx="135" cy="85" r="9" className="stroke-yellow-500/40 fill-yellow-950/20" strokeWidth="1" />
        <path d="M45 30 L100 55 M155 30 L100 55 M65 85 L100 55 M135 85 L100 55" className="stroke-slate-800" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="100" cy="55" r="18" className="stroke-cyan-500/20 animate-ping" strokeWidth="0.5" />
        <circle cx="100" cy="55" r="3" className="fill-cyan-400" />
        <circle cx="45" cy="30" r="2" className="fill-violet-400" />
        <circle cx="155" cy="30" r="2" className="fill-blue-400" />
        <text x="100" y="59" textAnchor="middle" className="fill-cyan-300 font-mono text-[6px] font-bold tracking-widest">RAG_RERANK</text>
        <text x="45" y="44" textAnchor="middle" className="fill-slate-500 font-mono text-[5px]">PDF_CHAT</text>
        <text x="155" y="44" textAnchor="middle" className="fill-slate-500 font-mono text-[5px]">YT_SUMMARY</text>
      </svg>
    )
  },
  {
    title: "CrickGate",
    subtitle: "AI Sports Turf Booking Platform",
    date: "Mar 2026 – May 2026",
    category: "Generative AI",
    desc: "AI-powered sports turf booking platform with secure role-based dashboards, voice assistant booking, and automated payments.",
    bullets: [
      "Developed an AI voice assistant using FastAPI, LangGraph, LangChain, and Gemini API.",
      "Integrated ChromaDB (RAG) for turf recommendations and customer support.",
      "Integrated Razorpay payments, voice interaction, booking history, and automated confirmations."
    ],
    tags: ["React.js", "Node.js", "Express.js", "FastAPI", "MongoDB", "LangGraph", "Gemini API", "Razorpay"],
    liveLink: "#",
    githubLink: "https://github.com/nirajgharate",
    glowColor: "hover:border-rose-500/40 hover:shadow-[0_20px_50px_rgba(244,63,94,0.15)]",
    iconColor: "text-rose-400",
    visual: (
      <svg className="w-full h-full text-rose-500/40 bg-slate-950/80" viewBox="0 0 200 110" fill="none">
        <rect x="25" y="15" width="150" height="35" rx="8" className="stroke-slate-800 fill-slate-900/60" strokeWidth="1" />
        <text x="38" y="30" className="fill-slate-400 font-mono text-[6px]">AI VOICE ASSISTANT</text>
        <text x="38" y="42" className="fill-slate-100 font-mono text-[9px] font-bold">LANGGRAPH / GEMINI PRO</text>
        <rect x="125" y="24" width="42" height="18" rx="4" className="fill-rose-950/30 stroke-rose-500/20" strokeWidth="0.5" />
        <text x="146" y="31" textAnchor="middle" className="fill-rose-400 font-mono text-[5px] font-bold">RAZORPAY</text>
        <text x="146" y="39" textAnchor="middle" className="fill-slate-300 font-mono text-[7px] font-black">200 OK</text>
        <path d="M25 90 L50 82 L75 88 L100 70 L125 78 L150 62 L175 66" className="stroke-rose-500/40" strokeWidth="1.5" fill="none" />
        <circle cx="150" cy="62" r="2.5" className="fill-rose-400" />
        <circle cx="150" cy="62" r="5" className="stroke-rose-500/20 animate-ping" strokeWidth="0.5" />
      </svg>
    )
  },
  {
    title: "Skillserver",
    subtitle: "Peer-to-Peer Talent Marketplace",
    date: "Sep 2025 – Nov 2025",
    category: "Full Stack",
    desc: "A decentralized peer-to-peer talent marketplace connecting developers and freelancers with automated contract agreements and project matching algorithms.",
    bullets: [
      "Built automated matching algorithms correlating developer tech stacks and project requirements.",
      "Engineered secure contract agreements and milestone milestone tracking.",
      "Designed clean responsive dashboards using React.js, Express.js, MongoDB, and Tailwind CSS."
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "https://github.com/nirajgharate",
    glowColor: "hover:border-emerald-500/40 hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)]",
    iconColor: "text-emerald-400",
    visual: (
      <svg className="w-full h-full text-emerald-500/40 bg-slate-950/80" viewBox="0 0 200 110" fill="none">
        <rect x="20" y="15" width="160" height="18" rx="6" className="stroke-slate-800 fill-slate-900/60" strokeWidth="1" />
        <circle cx="32" cy="24" r="3" className="stroke-slate-600" strokeWidth="1" />
        <line x1="34" y1="26" x2="38" y2="30" className="stroke-slate-600" strokeWidth="1" />
        <text x="46" y="27" className="fill-slate-500 font-mono text-[6px]">Search Freelance Devs...</text>

        <rect x="20" y="42" width="160" height="22" rx="4" className="stroke-slate-800 fill-slate-900/30" strokeWidth="1" />
        <circle cx="35" cy="53" r="6" className="stroke-emerald-500/30 fill-emerald-950/20" strokeWidth="1" />
        <text x="47" y="53" className="fill-slate-300 font-mono text-[6px] font-bold">Niraj (Full Stack)</text>
        <rect x="135" y="48" width="38" height="10" rx="3" className="fill-emerald-950/40 border border-emerald-500/20" />
        <text x="154" y="55" textAnchor="middle" className="fill-emerald-400 font-mono text-[5px] font-extrabold">98% MATCH</text>

        <line x1="20" y1="80" x2="180" y2="80" className="stroke-slate-800" strokeWidth="1" />
        <text x="20" y="94" className="fill-slate-500 font-mono text-[5.5px]">HOSTED_AGREEMENTS: 142 ACTIVE</text>
      </svg>
    )
  },
  {
    title: "Wanderlust",
    subtitle: "Collaborative Travel & Itinerary Platform",
    date: "Jun 2025 – Aug 2025",
    category: "Full Stack",
    desc: "A collaborative travel itinerary builder and exploration app integrating interactive Mapbox map routing, hotel bookings, and user travel review diaries.",
    bullets: [
      "Integrated Mapbox API for real-time interactive route navigation and destination markers.",
      "Engineered hotel booking directories and user trip review logs with MongoDB.",
      "Implemented responsive UI layouts and user session management."
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Mapbox API", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "https://github.com/nirajgharate",
    glowColor: "hover:border-violet-500/40 hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)]",
    iconColor: "text-violet-400",
    visual: (
      <svg className="w-full h-full text-violet-500/40 bg-slate-950/80" viewBox="0 0 200 110" fill="none">
        <rect x="15" y="15" width="170" height="80" rx="8" className="stroke-slate-800 fill-slate-900/40" strokeWidth="1" />
        <path d="M30 40 C60 20 80 80 120 40 C140 20 160 50 170 35" className="stroke-slate-800" strokeWidth="1" fill="none" />
        <path d="M30 40 L60 30 L95 62 L132 35 L170 35" className="stroke-violet-500/40" strokeWidth="1" strokeDasharray="3 2" fill="none" />
        <circle cx="30" cy="40" r="3" className="fill-violet-400" />
        <circle cx="95" cy="62" r="3" className="fill-cyan-400" />
        <circle cx="170" cy="35" r="3" className="fill-violet-400" />
        <circle cx="95" cy="62" r="5.5" className="stroke-cyan-500/30 animate-pulse" strokeWidth="0.5" />
        <rect x="115" y="65" width="60" height="22" rx="4" className="fill-slate-950/90 stroke-slate-800" strokeWidth="0.5" />
        <text x="122" y="74" className="fill-slate-200 font-mono text-[5px] font-extrabold">ROUTE_04: TOKYO</text>
        <text x="122" y="82" className="fill-slate-500 font-mono text-[4.5px]">DIST: 4,120 km</text>
      </svg>
    )
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projectData 
    : projectData.filter(p => p.category === filter);

  return (
    <section id="projects" className="bg-[#030712] py-24 px-6 md:px-12 lg:px-24 w-full relative overflow-hidden font-sans border-b border-slate-900">
      
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10 font-space">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div data-aos="fade-up" className="inline-block border border-slate-800 rounded-full px-5 py-1.5 text-xs text-cyan-400 font-bold mb-4 shadow-md bg-slate-950/60 uppercase tracking-wider backdrop-blur-md">
            Production Showcase
          </div>
          <h2 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter"
          >
            Selected Works<span className="text-cyan-400">.</span>
          </h2>
          
          {/* Category Filter Tabs */}
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex bg-slate-950/60 p-1 rounded-full border border-slate-800/80 backdrop-blur-md justify-center w-max mx-auto mt-10 shadow-inner"
          >
            {["All", "Generative AI", "Full Stack"].map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-1.5 text-xs font-bold rounded-full transition-all duration-300 uppercase tracking-wider ${
                  filter === cat 
                    ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-md' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid (3 cols on desktop, responsive layout) */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                key={project.title}
                className={`group bg-slate-950/40 backdrop-blur-sm border border-slate-900/80 p-6 rounded-[2rem] flex flex-col justify-between transition-all duration-500 shadow-xl ${project.glowColor}`}
              >
                <div>
                  {/* Dynamic Diagram Header */}
                  <div className="w-full aspect-video rounded-2xl bg-slate-950 border border-slate-900 overflow-hidden mb-6 relative flex items-center justify-center group-hover:border-slate-800 transition-colors duration-500">
                    {project.visual}
                    <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-[8px] font-mono text-slate-400">
                      {project.date}
                    </div>
                  </div>

                  {/* Category & Subtitle */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] uppercase tracking-widest font-mono text-cyan-400 font-extrabold">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-black text-white mb-1 tracking-tight group-hover:text-cyan-300 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  
                  <div className="text-xs font-mono text-slate-400 font-semibold mb-4">
                    {project.subtitle}
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-slate-300 mb-4 leading-relaxed font-medium">
                    {project.desc}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-6">
                    {project.bullets.map((b, i) => (
                      <li key={i} className="text-[11px] text-slate-400 flex items-start gap-2 leading-tight">
                        <span className="text-cyan-400 font-bold">›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[8.5px] uppercase tracking-wider font-mono px-2.5 py-1 bg-slate-950 border border-slate-850 text-slate-400 rounded-full font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions Row */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-900/80">
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-slate-950 border border-slate-850 text-slate-400 rounded-xl hover:text-white hover:border-cyan-500/40 transition-all hover:bg-slate-900 shadow-inner flex items-center justify-center gap-2"
                      aria-label="GitHub Repository"
                    >
                      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                      </svg>
                      <span className="text-[11px] font-mono font-bold">GitHub</span>
                    </a>
                    
                    <a 
                      href={project.liveLink}
                      className="flex-1 py-2.5 bg-slate-950 border border-slate-850 text-slate-300 rounded-xl hover:text-white hover:border-cyan-500/40 text-center text-xs font-bold transition-all hover:bg-slate-900 shadow-inner flex items-center justify-center gap-2"
                    >
                      <span>Live Demo</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;
