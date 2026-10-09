import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import meetipImg from "../assets/projects/meetip-screenshot.png";
import ahtImg from "../assets/projects/aht-screeshot.png";
import crickgateImg from "../assets/projects/crickgate-screenshot.png";
import skillserverImg from "../assets/projects/skillserve-screenshot.png";
import retailDeImg from "../assets/projects/retail-de-screenshot.jpg";
import stockDeImg from "../assets/projects/stock-de-screenshot.jpg";

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
    liveLink: "https://meet-ip.vercel.app/",
    githubLink: "https://github.com/nirajgharate/MeetIP",
    glowColor: "hover:border-indigo-500/40 hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)]",
    iconColor: "text-indigo-400",
    image: meetipImg
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
    liveLink: "https://aht-one.vercel.app/",
    githubLink: "https://github.com/nirajgharate/AHT",
    glowColor: "hover:border-cyan-500/40 hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)]",
    iconColor: "text-cyan-400",
    image: ahtImg
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
    liveLink: "https://crick-gate.vercel.app/",
    githubLink: "https://github.com/nirajgharate/CrickGate",
    glowColor: "hover:border-rose-500/40 hover:shadow-[0_20px_50px_rgba(244,63,94,0.15)]",
    iconColor: "text-rose-400",
    image: crickgateImg
  },
  {
    title: "Skillserver",
    subtitle: "Peer-to-Peer Talent Marketplace",
    date: "Sep 2025 – Nov 2025",
    category: "Full Stack",
    desc: "A decentralized peer-to-peer talent marketplace connecting developers and freelancers with automated contract agreements and project matching algorithms.",
    bullets: [
      "Built automated matching algorithms correlating developer tech stacks and project requirements.",
      "Engineered secure contract agreements and milestone tracking.",
      "Designed clean responsive dashboards using React.js, Express.js, MongoDB, and Tailwind CSS."
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://synapthire.vercel.app/",
    githubLink: "https://github.com/nirajgharate/Skill-Server",
    glowColor: "hover:border-emerald-500/40 hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)]",
    iconColor: "text-emerald-400",
    image: skillserverImg
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
    liveLink: "https://github.com/nirajgharate",
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
  },
  {
    title: "Retail Data Engineering",
    subtitle: "End-to-End Batch & Streaming ETL Pipeline",
    date: "Aug 2025 – Oct 2025",
    category: "Data Engineering",
    desc: "End-to-end retail data engineering pipeline ingesting transactional sales streams, transforming data with PySpark & Airflow, and building a scalable data lake on AWS.",
    bullets: [
      "Ingested real-time & batch retail transactional datasets using Apache Kafka and AWS S3.",
      "Orchestrated complex ETL workflows with Apache Airflow for data cleansing and Star Schema modeling.",
      "Processed large-scale datasets with PySpark and loaded analytics views into AWS Redshift & Snowflake."
    ],
    tags: ["Python", "PySpark", "Apache Kafka", "Apache Airflow", "AWS S3", "Redshift", "Snowflake", "Docker"],
    liveLink: "https://github.com/nirajgharate/End-to-End-Retail-Data-Engineering-Project-1",
    githubLink: "https://github.com/nirajgharate/End-to-End-Retail-Data-Engineering-Project-1",
    glowColor: "hover:border-amber-500/40 hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)]",
    iconColor: "text-amber-400",
    image: retailDeImg
  },
  {
    title: "Stock Market ETL Pipeline",
    subtitle: "Automated Real-Time Financial Data Pipeline",
    date: "Nov 2025 – Dec 2025",
    category: "Data Engineering",
    desc: "Automated real-time stock market data pipeline streaming tick data via Kafka, running serverless ETL with AWS Glue & Lambda, and querying analytics via Athena.",
    bullets: [
      "Streamed real-time stock market data feeds using Apache Kafka deployed on AWS EC2.",
      "Automated serverless ETL transformations using AWS Glue, Lambda, and AWS Glue Data Catalog.",
      "Queried real-time market trends using Amazon Athena and created SQL analytics visualizations."
    ],
    tags: ["Python", "Apache Kafka", "AWS Glue", "AWS Lambda", "Amazon Athena", "AWS S3", "SQL", "Airflow"],
    liveLink: "https://github.com/nirajgharate/stock-market-data-engineering-pipeline-with-automated-ETL-1",
    githubLink: "https://github.com/nirajgharate/stock-market-data-engineering-pipeline-with-automated-ETL-1",
    glowColor: "hover:border-emerald-500/40 hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)]",
    iconColor: "text-emerald-400",
    image: stockDeImg
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
            {["All", "Generative AI", "Full Stack", "Data Engineering"].map((cat) => (
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

        {/* Projects Grid */}
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
                  {/* Real Screenshot Preview Header */}
                  <div className="w-full aspect-video rounded-2xl bg-slate-950 border border-slate-900 overflow-hidden mb-6 relative flex items-center justify-center group-hover:border-slate-800 transition-colors duration-500">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={`${project.title} Screenshot`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                      />
                    ) : (
                      project.visual
                    )}

                    <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-[8px] font-mono text-slate-300 backdrop-blur-md">
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
                      target="_blank"
                      rel="noopener noreferrer"
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
