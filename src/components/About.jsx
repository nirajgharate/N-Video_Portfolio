import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileSuit from '../assets/about/niraj-profile-3.jpg';
import profileLaptop from '../assets/about/niraj-profile-1.jpg';

const getSkillIcon = (name) => {
  switch (name) {
    case "React.js":
    case "React / Next.js":
      return (
        <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(0 12 12)"></ellipse>
          <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(60 12 12)"></ellipse>
          <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(120 12 12)"></ellipse>
          <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
        </svg>
      );
    case "Node.js / Express":
    case "FastAPI":
      return (
        <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2z" />
          <path d="M12 22V12M3.5 7L12 12l8.5-5" />
        </svg>
      );
    case "MongoDB":
    case "PostgreSQL":
      return (
        <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2c0 0-4 4.5-4 9.5s4 10.5 4 10.5 4-5.5 4-10.5S12 2 12 2z" />
          <path d="M12 2v20" />
        </svg>
      );
    case "Python":
      return (
        <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2c-3.3 0-3 1.7-3 3h3v1h-4C6.3 6 5 7.3 5 9.5 5 11.7 6.3 13 8 13h1v-1.5c0-1.4 1.1-2.5 2.5-2.5h3.5c1.4 0 2.5-1.1 2.5-2.5V5c0-1.3-.3-3-3-3h-2.5z" />
          <path d="M12 22c3.3 0 3-1.7 3-3h-3v-1h4c1.7 0 3-1.3 3-3.5C19 12.3 17.7 11 16 11h-1v1.5c0 1.4-1.1 2.5-2.5 2.5H9c-1.4 0-2.5 1.1-2.5 2.5V19c0 1.3.3 3 3 3h2.5z" />
        </svg>
      );
    case "Docker":
    case "Kubernetes":
      return (
        <svg className="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 12.5h20M2 15h20M4 12.5v-3h3v3M8 12.5v-3h3v3M12 12.5v-3h3v3M8 9v-3h3v3M16 12.5C19 12.5 21 10 21 7.5" />
          <path d="M2 17.5c3 0 5 1.5 8 1.5s5-1.5 8-1.5 5 1.5 6 1.5" />
        </svg>
      );
    case "LangChain & RAG":
    case "LangGraph":
    case "GenAI & LLMs":
      return (
        <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="5" r="2"></circle>
          <circle cx="6" cy="10" r="2"></circle>
          <circle cx="18" cy="10" r="2"></circle>
          <circle cx="9" cy="17" r="2"></circle>
          <circle cx="15" cy="17" r="2"></circle>
          <line x1="12" y1="7" x2="6" y2="10" stroke="currentColor"></line>
          <line x1="12" y1="7" x2="18" y2="10" stroke="currentColor"></line>
          <line x1="6" y1="12" x2="9" y2="15" stroke="currentColor"></line>
          <line x1="18" y1="12" x2="15" y2="15" stroke="currentColor"></line>
        </svg>
      );
    case "Socket.io & WebRTC":
      return (
        <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 12h16M14 6l6 6-6 6" />
          <circle cx="4" cy="12" r="2" fill="currentColor"></circle>
          <circle cx="20" cy="12" r="2" fill="currentColor"></circle>
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 18l6-6-6-6M8 6L2 12l6 6M12 2v20" />
        </svg>
      );
  }
};

const skillDetailsData = {
  "LangChain & RAG": {
    details: "Engineered high-accuracy Retrieval-Augmented Generation (RAG) pipelines supporting PDF chat, semantic vector search, document summarization, and LLM context answering.",
    topics: ["RAG Architecture", "ChromaDB", "Vector Embeddings", "Document Summarization", "LangChain Framework"],
    projects: "AI Homeroom Teacher (AHT), CrickGate Voice Booking"
  },
  "LangGraph": {
    details: "Architected stateful, multi-agent workflows using LangGraph to create AI voice assistants, decision routers, and self-correcting agent chains.",
    topics: ["Stateful Workflows", "Agent Tools", "Gemini Pro API", "Voice Assistants", "Custom AI Proxies"],
    projects: "CrickGate AI Voice Booking Assistant"
  },
  "Socket.io & WebRTC": {
    details: "Built low-latency real-time video conferencing platforms, peer-to-peer WebRTC signaling, group chat channels, and live notification streams.",
    topics: ["WebRTC P2P Video", "Signaling Servers", "Socket.io Events", "Typing Indicators", "Group Chat Rooms"],
    projects: "MeetIP Real-Time Communication Platform"
  },
  "React.js": {
    details: "Building responsive, modern user interfaces with modular component architectures, Tailwind CSS, Hooks, state management, and Framer Motion animations.",
    topics: ["React 19 Hooks", "Context API", "Tailwind CSS", "AOS & Motion", "RESTful API Integration"],
    projects: "Portfolio, MeetIP, AI Homeroom Teacher, CrickGate"
  },
  "Node.js / Express": {
    details: "Architected scalable backend RESTful APIs, JWT authentication, Google OAuth, custom middleware, payment webhooks, and database ORMs.",
    topics: ["REST APIs", "JWT Auth", "Google OAuth", "Middleware Pipeline", "Error Handling"],
    projects: "MeetIP Backend, CrickGate Core Server"
  },
  "FastAPI": {
    details: "Created high-performance asynchronous Python REST services to proxy LLM queries, manage RAG vector searches, and power AI assistants.",
    topics: ["AsyncIO", "Pydantic Schemas", "AI Proxy Middleware", "Swagger Docs", "Python Web Services"],
    projects: "AI Homeroom Teacher, CrickGate Voice Proxy"
  },
  "MongoDB": {
    details: "Designed NoSQL schemas, document models, indexing strategies, and aggregation pipelines for real-time web applications.",
    topics: ["Mongoose ORM", "Aggregation Pipelines", "Document Indexing", "Role-Based Access Control"],
    projects: "MeetIP, AHT Learning Platform, CrickGate"
  },
  "Docker & DevOps": {
    details: "Containerized full-stack services using Docker Compose, deployed microservices on AWS EC2 & S3, configured GitHub Actions CI/CD pipelines, and managed Vercel / Render deployments.",
    topics: ["Docker Compose", "AWS EC2 & S3", "GitHub Actions", "Vercel / Render", "Cloudinary Storage"],
    projects: "Production Application Deployments"
  }
};

const skillCategories = [
  {
    title: "AI & GenAI",
    skills: ["LangChain & RAG", "LangGraph", "ChromaDB", "Gemini API", "OpenAI API", "Hugging Face"]
  },
  {
    title: "Full Stack & Real-Time",
    skills: ["React.js", "Node.js / Express", "FastAPI", "Socket.io & WebRTC", "MongoDB", "PostgreSQL", "Tailwind CSS"]
  },
  {
    title: "Cloud & Security",
    skills: ["Docker & DevOps", "AWS EC2 & S3", "JWT & OAuth", "Razorpay & Stripe", "Kafka Fundamentals", "Git & GitHub"]
  }
];

const About = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section id="about" className="bg-[#030712] py-24 px-6 md:px-12 lg:px-24 w-full relative overflow-hidden font-sans border-b border-slate-900">
      
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-violet-500/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 font-space">
          <div data-aos="fade-up" className="inline-block border border-slate-800 rounded-full px-5 py-1.5 text-xs text-cyan-400 font-bold mb-4 shadow-md bg-slate-950/60 uppercase tracking-wider backdrop-blur-md">
            Developer Overview
          </div>
          <h2 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter"
          >
            About Me<span className="text-cyan-400">.</span>
          </h2>
        </div>

        {/* Top Grid: Developer Access Pass + Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Access Badge Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div data-aos="drop-bounce" className="relative flex justify-center w-full animate-float">
              {/* Lanyard string */}
              <div className="absolute -top-32 left-1/2 w-3 h-40 bg-gradient-to-b from-slate-950 to-cyan-700 transform -translate-x-1/2 shadow-inner z-0"></div>
              {/* Lanyard clip */}
              <div className="absolute -top-6 left-1/2 w-6 h-12 bg-slate-800 rounded border border-slate-700 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
              
              {/* Badge Card */}
              <div className="bg-slate-900/95 border border-slate-800 w-full max-w-[280px] rounded-3xl p-3 shadow-[0_25px_50px_rgba(0,0,0,0.7)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500 group flex flex-col gap-3 font-space">
                {/* Cutout Hole */}
                <div className="absolute -top-3.5 left-1/2 w-16 h-7 bg-slate-950 rounded-t-xl border-t border-x border-slate-900 transform -translate-x-1/2 flex justify-center items-center">
                  <div className="w-8 h-2.5 bg-black rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)] border border-slate-900"></div>
                </div>
                
                {/* Access Tag Header */}
                <div className="flex justify-between items-center text-[8px] font-mono text-cyan-400 font-extrabold tracking-widest px-1.5 uppercase mt-3 select-none">
                  <span>ACCESS: LEVEL_5</span>
                  <span>SYS_NO: #04218</span>
                </div>

                {/* Photo with Hover Swap */}
                <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl bg-slate-950 border border-slate-850 relative min-h-[300px]">
                  <img 
                    src={profileSuit} 
                    alt="Niraj Suit" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 absolute inset-0 opacity-100 group-hover:opacity-0"
                  />
                  <img 
                    src={profileLaptop} 
                    alt="Niraj Laptop" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 absolute inset-0 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100"
                  />
                </div>

                {/* Dev Credentials Footer */}
                <div className="bg-slate-950/80 border border-slate-850/60 rounded-xl p-3 flex justify-between items-center relative overflow-hidden mt-1 shadow-inner select-none">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[7px] font-mono text-slate-500 uppercase tracking-widest">CREDENTIALS</span>
                    <span className="text-sm font-black text-white uppercase tracking-wider">NIRAJ GHARATE</span>
                    <span className="text-[7.5px] font-mono text-violet-400 font-bold uppercase tracking-wider">FULL-STACK & AI</span>
                  </div>

                  <div className="w-9 h-7 rounded bg-gradient-to-br from-yellow-600/80 via-yellow-500 to-yellow-600/90 border border-yellow-500/30 p-1 flex flex-col justify-between shadow-lg opacity-85 group-hover:opacity-100 transition-opacity">
                    <div className="flex justify-between h-1.5 w-full">
                      <div className="w-2.5 h-full border-r border-b border-yellow-700/60"></div>
                      <div className="w-2.5 h-full border-l border-b border-yellow-700/60"></div>
                    </div>
                    <div className="flex justify-between h-1.5 w-full mt-1.5">
                      <div className="w-2.5 h-full border-r border-t border-yellow-700/60"></div>
                      <div className="w-2.5 h-full border-l border-t border-yellow-700/60"></div>
                    </div>
                  </div>
                </div>

                {/* Barcode */}
                <div className="flex flex-col items-center gap-1.5 mt-1 border-t border-slate-900 pt-2 select-none">
                  <svg className="w-full h-7 text-slate-500" viewBox="0 0 100 20" fill="currentColor">
                    <rect x="0" y="0" width="2" height="20" />
                    <rect x="4" y="0" width="1" height="20" />
                    <rect x="7" y="0" width="3" height="20" />
                    <rect x="12" y="0" width="1" height="20" />
                    <rect x="15" y="0" width="2" height="20" />
                    <rect x="19" y="0" width="4" height="20" />
                    <rect x="25" y="0" width="1" height="20" />
                    <rect x="28" y="0" width="2" height="20" />
                    <rect x="32" y="0" width="3" height="20" />
                    <rect x="37" y="0" width="1" height="20" />
                    <rect x="40" y="0" width="4" height="20" />
                    <rect x="46" y="0" width="2" height="20" />
                    <rect x="50" y="0" width="1" height="20" />
                    <rect x="53" y="0" width="3" height="20" />
                    <rect x="58" y="0" width="1" height="20" />
                    <rect x="61" y="0" width="2" height="20" />
                    <rect x="65" y="0" width="4" height="20" />
                    <rect x="71" y="0" width="1" height="20" />
                    <rect x="74" y="0" width="2" height="20" />
                    <rect x="78" y="0" width="3" height="20" />
                    <rect x="83" y="0" width="1" height="20" />
                    <rect x="86" y="0" width="4" height="20" />
                    <rect x="92" y="0" width="2" height="20" />
                    <rect x="96" y="0" width="4" height="20" />
                  </svg>
                  <span className="text-[7px] font-mono text-slate-500 tracking-[0.3em] uppercase">SYSTEM_ACCESS_GRANTED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Official Resume Summary (7 cols) */}
          <div data-aos="fade-left" className="lg:col-span-7 flex flex-col font-space">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
              Hi, I’m <span className="text-cyan-400">Niraj Gharate</span>
            </h3>
            <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest mb-6">
              Full-Stack Developer | MERN • FastAPI • Generative AI
            </div>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-medium">
              Full-Stack Developer specializing in the MERN Stack, FastAPI, and Generative AI. Experienced in building scalable REST APIs, real-time applications, and AI-powered solutions using LangChain, RAG, and LangGraph. Passionate about backend engineering, cloud deployment, and solving real-world problems.
            </p>

            {/* Education Box */}
            <div className="bg-slate-950/80 border border-slate-850 rounded-2xl p-5 mb-8 backdrop-blur-md">
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2 font-bold">EDUCATION</div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="text-base font-black text-white">Sandip University, Nashik</div>
                  <div className="text-xs text-cyan-400 font-semibold">B.Tech in Computer Science and Engineering</div>
                </div>
                <div className="text-right sm:text-right flex flex-col sm:items-end">
                  <span className="text-xs font-mono text-slate-300 font-bold">2022 – 2026</span>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20 mt-1 inline-block">GPA: 8.53 / 10</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-900">
              <div>
                <div className="text-xl md:text-2xl font-black text-white">7+</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Deployed Apps</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-black text-cyan-400">250+</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">LeetCode Solved</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-black text-violet-400">GenAI</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Specialization</div>
              </div>
            </div>

          </div>

        </div>

        {/* Skills Board */}
        <div className="mt-16 font-space" id="skills">
          <div className="text-center mb-12">
            <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest mb-2">Technical Matrix</div>
            <h3 className="text-3xl font-black text-white uppercase tracking-tight">Skills & Tech Stack</h3>
            <p className="text-slate-400 text-xs mt-2">Click any skill card for deep architectural details</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="bg-slate-950/50 border border-slate-900 rounded-3xl p-6 backdrop-blur-md">
                <h4 className="text-sm font-mono text-cyan-400 font-extrabold uppercase tracking-wider mb-6 pb-2 border-b border-slate-900">
                  {cat.title}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => setSelectedSkill(skill)}
                      className="px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-850 text-slate-300 hover:text-white text-xs font-bold transition-all duration-300 flex items-center gap-2 group shadow-sm"
                    >
                      {getSkillIcon(skill)}
                      <span>{skill}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Interactive Modal */}
      <AnimatePresence>
        {selectedSkill && skillDetailsData[selectedSkill] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md font-space">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-4">
                {getSkillIcon(selectedSkill)}
                <h4 className="text-2xl font-black text-white">{selectedSkill}</h4>
              </div>

              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                {skillDetailsData[selectedSkill].details}
              </p>

              <div className="mb-4">
                <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase mb-2">Key Competencies</div>
                <div className="flex flex-wrap gap-1.5">
                  {skillDetailsData[selectedSkill].topics.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono px-2.5 py-1 bg-slate-950 border border-slate-800 text-slate-300 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono text-violet-400 font-bold uppercase mb-1">Applied In</div>
                <div className="text-xs text-slate-400 font-medium">
                  {skillDetailsData[selectedSkill].projects}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default About;
