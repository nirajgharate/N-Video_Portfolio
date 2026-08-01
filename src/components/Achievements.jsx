import React from 'react';
import { motion } from 'framer-motion';

const achievementsData = [
  {
    id: 1,
    title: "SUNHACKS 2025 Hackathon",
    badge: "GenAI Hackathon",
    subtitle: "Asia's Largest Generative AI Hackathon",
    description: "Built and deployed a functional Generative AI prototype within 24 hours in an intensive, collaborative team environment.",
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    borderGlow: "hover:border-cyan-500/40 hover:shadow-[0_15px_40px_rgba(6,182,212,0.15)]",
    gradient: "from-cyan-500/20 via-slate-900 to-slate-950"
  },
  {
    id: 2,
    title: "250+ LeetCode DSA Problems",
    badge: "Problem Solving",
    subtitle: "Data Structures & Algorithms Mastery",
    description: "Solved 250+ algorithmic challenges on LeetCode and completed the comprehensive Apna College Delta DSA Course.",
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.75L18.5 12l-4.25 4.25M9.75 16.25L5.5 12l4.25-4.25M12.75 19.25l-1.5-14.5" />
      </svg>
    ),
    borderGlow: "hover:border-violet-500/40 hover:shadow-[0_15px_40px_rgba(139,92,246,0.15)]",
    gradient: "from-violet-500/20 via-slate-900 to-slate-950"
  },
  {
    id: 3,
    title: "7+ Production Full-Stack Apps",
    badge: "Software Engineering",
    subtitle: "Deployed Web & AI Platforms",
    description: "Architected and deployed 7+ production-ready MERN stack apps integrated with GenAI, WebRTC video, OAuth, and payment gateways.",
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0v7.5" />
      </svg>
    ),
    borderGlow: "hover:border-emerald-500/40 hover:shadow-[0_15px_40px_rgba(16,185,129,0.15)]",
    gradient: "from-emerald-500/20 via-slate-900 to-slate-950"
  },
  {
    id: 4,
    title: "Freelance Client Delivery",
    badge: "Client Collaboration",
    subtitle: "Production Web Development Project",
    description: "Delivered a end-to-end custom web application collaborating directly with the client to meet real business requirements.",
    icon: (
      <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    borderGlow: "hover:border-yellow-500/40 hover:shadow-[0_15px_40px_rgba(234,179,8,0.15)]",
    gradient: "from-yellow-500/20 via-slate-900 to-slate-950"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="bg-[#030712] py-24 px-6 md:px-12 lg:px-24 w-full relative font-sans border-b border-slate-900">
      <div className="max-w-6xl mx-auto relative z-10 font-space">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <div data-aos="fade-up" className="inline-block border border-slate-800 rounded-full px-5 py-1.5 text-xs text-cyan-400 font-bold mb-4 shadow-md bg-slate-950/60 uppercase tracking-wider backdrop-blur-md">
            Recognitions & Impact
          </div>
          <h2 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter"
          >
            Key Achievements<span className="text-cyan-400">.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`bg-slate-950/60 border border-slate-850 p-6 md:p-8 rounded-3xl backdrop-blur-md flex flex-col justify-between transition-all duration-500 relative overflow-hidden group ${item.borderGlow}`}
            >
              {/* Top ambient glow gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} blur-2xl opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none`} />

              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-inner group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[9px] uppercase tracking-widest font-mono font-bold px-3 py-1 bg-slate-900 border border-slate-800 text-slate-400 rounded-full">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-black text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                
                {/* Subtitle */}
                <div className="text-xs font-mono text-cyan-400 font-semibold mb-4 uppercase tracking-wider">
                  {item.subtitle}
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 pt-4 border-t border-slate-900/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>STATUS: VERIFIED</span>
                <span className="text-slate-400">#0{item.id}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
