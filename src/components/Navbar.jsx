import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 pt-4 transition-all duration-300 pointer-events-none">
      <div 
        className={`max-w-6xl mx-auto flex items-center justify-between transition-all duration-500 pointer-events-auto rounded-full px-6 py-3 border font-space ${
          isScrolled 
            ? 'bg-slate-950/80 border-slate-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl' 
            : 'bg-slate-950/40 border-slate-900/60 backdrop-blur-md'
        }`}
      >
        {/* Left: Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-violet-600 p-[1px] shadow-[0_0_12px_rgba(6,182,212,0.3)]">
            <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center font-black text-cyan-400 text-xs group-hover:bg-transparent group-hover:text-white transition-all duration-300">
              N
            </div>
          </div>
          <span className="text-white text-lg font-black tracking-tight group-hover:text-cyan-300 transition-colors">
            Niraj<span className="text-cyan-400">.dev</span>
          </span>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/50 p-1 rounded-full border border-slate-800/60">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white rounded-full hover:bg-slate-800/60 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Status Pill & Hire Button */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Hire</span>
          </div>
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-xs hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-[1.03] transition-all duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none p-1.5"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Slideout Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto bg-slate-950/95 border border-slate-800 rounded-3xl p-6 backdrop-blur-2xl shadow-2xl pointer-events-auto flex flex-col gap-4 font-space">
          <div className="flex justify-between items-center pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Hire</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 text-sm font-bold text-slate-300 hover:text-cyan-400 hover:bg-slate-900 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-xs shadow-lg mt-2"
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
