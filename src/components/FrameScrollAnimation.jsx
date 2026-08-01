import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const FrameScrollAnimation = ({ frameCount = 240 }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const images = useRef([]);
  const [loaded, setLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Mouse tilt tracking springs for smooth 3D hologram effect
  const mouseX = useSpring(0, { stiffness: 80, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 80, damping: 20 });

  // Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth Easing (Spring) for scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Transform Progress to Frame Index
  const frameIndex = useTransform(smoothProgress, [0, 0.95], [0, frameCount - 1]);

  // Anti-Gravity 3D Effects driven by scroll
  const y = useTransform(smoothProgress, [0, 1], ["0%", "-5%"]);
  const scrollRotateX = useTransform(smoothProgress, [0, 0.5, 1], [0, 12, 0]);
  const scrollRotateY = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, -8, 8, 0]);
  const scale = useTransform(smoothProgress, [0, 0.8, 0.95], [1, 1.03, 1.15]);
  const z = useTransform(smoothProgress, [0, 1], [0, 80]);

  // Combine scroll rotations with mouse tilts
  const rotateX = useTransform(() => scrollRotateX.get() + mouseY.get());
  const rotateY = useTransform(() => scrollRotateY.get() + mouseX.get());

  // Mouse move handler to tilt the hologram box
  const handleCanvasMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 15); // max 15 deg tilt
    mouseY.set(y * -15); // max -15 deg tilt
  };

  const handleCanvasMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Preloading Logic
  useEffect(() => {
    let loadedCount = 0;
    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const frameNumber = String(i).padStart(3, "0");
        const imgUrl = new URL(`../assets/image2/ezgif-frame-${frameNumber}.jpg`, import.meta.url).href;
        img.src = imgUrl;
        img.onload = () => {
          loadedCount++;
          setLoadingProgress(Math.floor((loadedCount / frameCount) * 100));
          if (loadedCount === frameCount) {
            setLoaded(true);
          }
        };
        images.current.push(img);
      }
    };
    preloadImages();
  }, [frameCount]);

  // Canvas Rendering
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const render = () => {
      const index = Math.min(frameCount - 1, Math.max(0, Math.round(frameIndex.get())));
      const img = images.current[index];

      if (img && img.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Responsive cover logic
        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.width / img.height;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasAspect > imgAspect) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgAspect;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawHeight = canvas.height;
          drawWidth = canvas.height * imgAspect;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Frame update loops
    const unsubscribe = frameIndex.on("change", render);
    const unsubscribeMouseX = mouseX.on("change", render);
    const unsubscribeMouseY = mouseY.on("change", render);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      unsubscribe();
      unsubscribeMouseX();
      unsubscribeMouseY();
    };
  }, [loaded, frameIndex, mouseX, mouseY, frameCount]);

  // Final Scene Transitions
  const opacity = useTransform(smoothProgress, [0.85, 0.95], [1, 0]);
  const blur = useTransform(smoothProgress, [0.85, 0.95], ["blur(0px)", "blur(20px)"]);

  // Local hook-friendly states for real-time HUD rendering
  const [hudStats, setHudStats] = useState({ frame: 1, percent: 0, cx: 0, cy: 0 });

  useEffect(() => {
    const unsubIndex = frameIndex.on("change", (v) => {
      setHudStats(prev => ({ ...prev, frame: Math.round(v + 1) }));
    });
    const unsubProgress = smoothProgress.on("change", (v) => {
      setHudStats(prev => ({ ...prev, percent: Math.round(v * 100) }));
    });
    const unsubMouseX = mouseX.on("change", (v) => {
      setHudStats(prev => ({ ...prev, cx: Math.round(v * 10) }));
    });
    const unsubMouseY = mouseY.on("change", (v) => {
      setHudStats(prev => ({ ...prev, cy: Math.round(v * 10) }));
    });

    return () => {
      unsubIndex();
      unsubProgress();
      unsubMouseX();
      unsubMouseY();
    };
  }, [frameIndex, smoothProgress, mouseX, mouseY]);

  return (
    <div ref={containerRef} className="relative h-[450vh] bg-[#030712] border-b border-slate-950 z-40">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center perspective-2000">
        
        {/* Loading Overlay */}
        {!loaded && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] font-space">
            <div className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.5em] mb-4 animate-pulse">
              SYNCING CORE 3D INTERFACE... {loadingProgress}%
            </div>
            <div className="w-64 h-[1px] bg-slate-800 overflow-hidden">
               <motion.div 
                 className="h-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]" 
                 style={{ width: `${loadingProgress}%` }}
               />
            </div>
          </div>
        )}

        {/* The Animated Frame (Full Screen Canvas) */}
        <motion.div
           onMouseMove={handleCanvasMouseMove}
           onMouseLeave={handleCanvasMouseLeave}
           style={{
             y,
             rotateX,
             rotateY,
             scale,
             z,
             opacity,
             filter: blur,
             transformStyle: "preserve-3d"
           }}
           className="relative w-full h-full overflow-hidden flex items-center justify-center bg-[#030712] border border-slate-900/50"
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover grayscale brightness-90 hover:brightness-100 transition-all duration-300"
          />

          {/* Holographic color overlay and grid scanlines */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-violet-500/10 mix-blend-overlay pointer-events-none z-30" />
          <div className="absolute inset-0 pointer-events-none z-40 bg-[linear-gradient(to_bottom,rgba(6,182,212,0.03)_50%,rgba(0,0,0,0.12)_50%)] bg-[size:100%_4px] opacity-50" />
          
          {/* Holographic Cyber UI Grid HUD Overlay */}
          <div className="absolute inset-0 pointer-events-none z-40 p-6 md:p-12 flex flex-col justify-between font-mono text-[9px] md:text-[10px] text-cyan-500/60 tracking-widest select-none">
            {/* Top Row */}
            <div className="flex justify-between items-start w-full border-t border-cyan-500/15 pt-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
                <span>3D_SCANNER: ACTIVE</span>
              </div>
              <div className="hidden sm:block">[ COORDINATES: X={hudStats.cx}, Y={hudStats.cy} ]</div>
              <div>CORE_INTEGRITY: 100%</div>
            </div>

            {/* Middle holographic box indicators */}
            <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 flex justify-between pointer-events-none">
              <div className="border-l border-y border-cyan-500/10 h-32 w-2 flex flex-col justify-between" />
              <div className="border-r border-y border-cyan-500/10 h-32 w-2 flex flex-col justify-between items-end" />
            </div>

            {/* Bottom Row */}
            <div className="flex justify-between items-end w-full border-b border-cyan-500/15 pb-4">
              <div className="flex flex-col gap-0.5">
                <span>PROJECTOR: HOLO_GL_v1.0</span>
                <span className="text-cyan-500/30">SCANNER_ID: NIRAJ_SYS_INFO</span>
              </div>
              <div className="text-center font-bold text-cyan-400/80 drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]">
                FRAME: {hudStats.frame} / 240
              </div>
              <div className="flex flex-col items-end gap-0.5">
                <span>BUFFER: {hudStats.percent}%</span>
                <span className="text-cyan-500/30">SECTOR: SYS_ABOUT_01</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Global Vignette */}
        <div className="absolute inset-0 pointer-events-none bg-radial-[circle_at_center,transparent_40%,rgba(3,7,18,0.95)_90%] z-30" />
      </div>

      {/* Transitional Text Overlay */}
      <motion.div 
        style={{ opacity: useTransform(smoothProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]) }}
        className="absolute inset-x-0 top-[50%] -translate-y-1/2 flex flex-col items-center justify-center text-center pointer-events-none z-50 font-space"
      >
        <h3 className="text-white text-3xl md:text-6xl font-black uppercase tracking-tighter mb-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] max-w-4xl px-6 leading-none">
          Initiating <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">3D Neural System</span> Scan
        </h3>
        <p className="text-cyan-400 font-mono tracking-[0.6em] uppercase text-[10px] opacity-70">
          Scroll down to render about section
        </p>
      </motion.div>
    </div>
  );
};

export default FrameScrollAnimation;
