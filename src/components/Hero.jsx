import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/niraj-video.mp4';

const ParticleCanvas = ({ isSpeedUp }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationId;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = Math.min(85, Math.floor((width * height) / 16000));
    const connectionDistance = 120;
    
    const mouse = { x: null, y: null };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseSpeedX = (Math.random() - 0.5) * 0.6;
        this.baseSpeedY = (Math.random() - 0.5) * 0.6;
        this.vx = this.baseSpeedX;
        this.vy = this.baseSpeedY;
        this.radius = Math.random() * 2 + 1;
        this.color = Math.random() > 0.5 ? 'rgba(6, 182, 212, 0.75)' : 'rgba(139, 92, 246, 0.75)';
      }

      update() {
        const multiplier = isSpeedUp ? 4 : 1;
        this.x += this.vx * multiplier;
        this.y += this.vy * multiplier;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 150) {
            const force = (150 - dist) / 1500;
            this.vx += (dx / dist) * force;
            this.vy += (dy / dist) * force;
          } else {
            this.vx += (this.baseSpeedX - this.vx) * 0.05;
            this.vy += (this.baseSpeedY - this.vy) * 0.05;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = 'rgba(3, 7, 18, 1)';
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [isSpeedUp]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
    />
  );
};

const Hero = () => {
  const [mode, setMode] = useState('video');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false); // Unmuted default request
  const [playCount, setPlayCount] = useState(0); // Track number of times played (max 3)
  const [isSpeedUp, setIsSpeedUp] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });

    const video = videoRef.current;
    if (video) {
      // Attempt unmuted play first
      video.muted = false;
      video.play().then(() => {
        setIsPlaying(true);
        setIsMuted(false);
      }).catch(() => {
        // If browser blocks unmuted autoplay, start muted and unmute on first user click anywhere
        video.muted = true;
        setIsMuted(true);
        video.play().then(() => setIsPlaying(true)).catch(err => console.log("Autoplay failed:", err));

        const enableAudioOnGesture = () => {
          if (videoRef.current) {
            videoRef.current.muted = false;
            setIsMuted(false);
          }
          window.removeEventListener('click', enableAudioOnGesture);
          window.removeEventListener('touchstart', enableAudioOnGesture);
          window.removeEventListener('keydown', enableAudioOnGesture);
        };

        window.addEventListener('click', enableAudioOnGesture, { once: true });
        window.addEventListener('touchstart', enableAudioOnGesture, { once: true });
        window.addEventListener('keydown', enableAudioOnGesture, { once: true });
      });
    }
  }, []);

  // Handle playing exact 3 times then pause
  const handleVideoEnded = () => {
    setPlayCount(prevCount => {
      const nextCount = prevCount + 1;
      if (nextCount < 3) {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().then(() => setIsPlaying(true)).catch(err => console.log(err));
        }
        return nextCount;
      } else {
        if (videoRef.current) {
          videoRef.current.pause();
        }
        setIsPlaying(false);
        return nextCount;
      }
    });
  };

  const toggleSpeed = (e) => {
    e.stopPropagation();
    setIsSpeedUp(!isSpeedUp);
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        // Reset play count if user manually resumes
        if (playCount >= 3) {
          setPlayCount(0);
          videoRef.current.currentTime = 0;
        }
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(err => console.log("Play failed: ", err));
      }
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const toggleMode = (newMode) => {
    setMode(newMode);
    if (newMode === 'video') {
      setTimeout(() => {
        if (videoRef.current) {
          if (playCount >= 3) {
            setPlayCount(0);
            videoRef.current.currentTime = 0;
          }
          videoRef.current.play().then(() => {
            setIsPlaying(true);
          }).catch(err => {
            console.log("Play toggle failed: ", err);
            setIsPlaying(false);
          });
        }
      }, 50);
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black font-sans">
      
      {/* Background Video (100% full original opacity, plays 3 times then pauses) */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        onEnded={handleVideoEnded}
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
          mode === 'video' ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Interactive Particle Network Background */}
      <div className={`transition-opacity duration-1000 ${mode === 'canvas' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <ParticleCanvas isSpeedUp={isSpeedUp} />
      </div>

      {/* Content Container (Grid layout for positioning) */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full font-space pointer-events-none">
        
        {/* Left Side: Floating Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full relative z-20 pointer-events-auto">
          {/* Main Heading with text drop shadow */}
          <h1 
            data-aos="fade-up"
            className="text-white text-4xl md:text-6xl font-black mb-4 tracking-tight leading-none drop-shadow-[0_4px_15px_rgba(0,0,0,0.95)]"
          >
            Hi, I’m <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(6,182,212,0.45)]">Niraj</span>. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent text-xl md:text-2xl block mt-3 font-extrabold uppercase tracking-widest drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">
              Full Stack AI Developer
            </span>
          </h1>

          {/* Subheading with text drop shadow */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-slate-200 text-xs md:text-sm font-semibold mb-8 max-w-xl leading-relaxed drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)]"
          >
            I build scalable full-stack web applications using React, Node.js, Express, MongoDB, Tailwind CSS, and LangChain. I'm passionate about combining modern web technologies with Generative AI to create practical, intelligent applications.
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3.5 w-full"
          >
            {/* Primary Button */}
            <a 
              href="#projects"
              className="px-6 py-2.5 text-xs md:text-sm rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.55)] hover:scale-105 transition-all duration-300"
            >
              Explore Selected Works
            </a>
            
            {/* Secondary Button */}
            <a 
              href="#contact"
              className="px-6 py-2.5 text-xs md:text-sm rounded-full bg-slate-900/60 border border-slate-700/60 text-slate-300 font-semibold hover:text-white hover:border-cyan-400/80 transition-all duration-300 backdrop-blur-sm"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: Interactive Controls */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-8 md:mt-0 flex flex-col items-center gap-4 group self-start md:self-auto pointer-events-auto"
        >
          {/* Mode Switcher Selector Pill */}
          <div className="flex bg-slate-950/75 p-1 rounded-full border border-slate-800/80 backdrop-blur-md shadow-lg">
            <button 
              onClick={() => toggleMode('video')} 
              className={`px-4 py-1 text-[9px] md:text-[10px] font-bold rounded-full uppercase tracking-wider transition-all duration-300 ${mode === 'video' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              Reel
            </button>
            <button 
              onClick={() => toggleMode('canvas')} 
              className={`px-4 py-1 text-[9px] md:text-[10px] font-bold rounded-full uppercase tracking-wider transition-all duration-300 ${mode === 'canvas' ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              Net
            </button>
          </div>

          {/* Action button based on Mode */}
          <div className="flex flex-col items-center gap-1 cursor-pointer">
            {mode === 'video' ? (
              <>
                <div 
                  onClick={togglePlay}
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-full border border-cyan-500/30 bg-slate-950/40 backdrop-blur-md flex justify-center items-center hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 ${isPlaying ? 'shadow-[0_0_25px_rgba(6,182,212,0.3)] border-cyan-400' : ''}`}
                >
                  {isPlaying ? (
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </div>
                <span className="text-white text-[8px] md:text-[9px] font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity mt-1">
                  {isPlaying ? `Playing (${playCount + 1}/3)` : "Play Reel"}
                </span>
                
                {/* Audio Controller */}
                <button 
                  onClick={toggleMute}
                  className="mt-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[8px] font-extrabold uppercase tracking-wider text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1 backdrop-blur-sm shadow-md"
                >
                  {!isMuted ? (
                    <>
                      <svg className="w-3 h-3 text-cyan-400 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                      </svg>
                      Audio On
                    </>
                  ) : (
                    <>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z" />
                      </svg>
                      Click to Unmute
                    </>
                  )}
                </button>
              </>
            ) : (
              <>
                <div 
                  onClick={toggleSpeed}
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-full border border-cyan-500/30 bg-slate-950/40 backdrop-blur-md flex justify-center items-center hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(6,182,212,0.1)] ${isSpeedUp ? 'bg-cyan-500/20 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.5)]' : 'hover:bg-gradient-to-r hover:from-cyan-500 hover:to-violet-600'}`}
                >
                  {isSpeedUp ? (
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-cyan-300 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </div>
                <span className="text-white text-[8px] md:text-[9px] font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity mt-1">
                  {isSpeedUp ? "Engine Boosted" : "Boost Net"}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
