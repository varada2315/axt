import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Play, Pause, Volume2, VolumeX, Video, RefreshCw, Sparkles, Compass } from 'lucide-react';

const videoPresets = [
  {
    id: 'user-uhd',
    name: 'Executive UHD Stream (Primary)',
    url: '/8478752-uhd_3840_2160_25fps.mp4'
  },
  {
    id: 'local',
    name: 'Local Ocean Motion',
    url: '/hero-bg.mp4'
  },
  {
    id: 'smoke',
    name: 'Dark Fluid Smoke',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-dark-fluid-smoke-loop-41566-large.mp4'
  }
];

export default function Hero({ onOpenConsultation }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(videoPresets[0].url);
  const [showVideoMenu, setShowVideoMenu] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // WebGL Shader Animation Fallback Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId;
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    const handleResize = () => {
      if (canvas) {
        canvas.width = canvas.clientWidth || window.innerWidth;
        canvas.height = canvas.clientHeight || window.innerHeight;
        if (gl) gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    if (gl) {
      const vsSource = `
        attribute vec2 a_position;
        varying vec2 v_uv;
        void main() {
          v_uv = a_position * 0.5 + 0.5;
          gl_Position = vec4(a_position, 0.0, 1.0);
        }
      `;

      const fsSource = `
        precision highp float;
        uniform float u_time;
        uniform vec2 u_resolution;
        varying vec2 v_uv;

        float noise(vec2 p) {
          return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
        }

        void main() {
          vec2 st = v_uv;
          float t = u_time * 0.25;

          vec3 darkCharcoal = vec3(0.05, 0.06, 0.07);
          vec3 bronzeGold = vec3(0.91, 0.75, 0.46);
          vec3 lightWhiteGlow = vec3(0.35, 0.38, 0.42);

          vec2 p = st * 2.0 - 1.0;
          p.x *= u_resolution.x / u_resolution.y;

          float wave1 = sin(p.x * 2.5 + t) * 0.5 + sin(p.y * 2.0 - t * 0.7) * 0.5;
          float wave2 = sin(p.x * 4.0 - t * 1.2) * 0.3 + cos(p.y * 3.0 + t) * 0.3;
          float n = noise(st * 3.0 + t * 0.1) * 0.15;

          float combined = smoothstep(-0.6, 1.2, wave1 + wave2 + n);

          vec3 color = mix(darkCharcoal, lightWhiteGlow, combined * 0.4);
          color = mix(color, bronzeGold * 0.5, pow(combined, 2.2));

          float vignette = 1.0 - length(st - 0.5) * 1.1;
          color *= smoothstep(0.0, 0.7, vignette);

          gl_FragColor = vec4(color, 1.0);
        }
      `;

      const compileShader = (type, source) => {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        return shader;
      };

      const program = gl.createProgram();
      gl.attachShader(program, compileShader(gl.VERTEX_SHADER, vsSource));
      gl.attachShader(program, compileShader(gl.FRAGMENT_SHADER, fsSource));
      gl.linkProgram(program);
      gl.useProgram(program);

      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);

      const posAttrib = gl.getAttribLocation(program, 'a_position');
      gl.enableVertexAttribArray(posAttrib);
      gl.vertexAttribPointer(posAttrib, 2, gl.FLOAT, false, 0, 0);

      const uTime = gl.getUniformLocation(program, 'u_time');
      const uRes = gl.getUniformLocation(program, 'u_resolution');

      const render = (time) => {
        gl.uniform1f(uTime, time * 0.001);
        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        animationFrameId = requestAnimationFrame(render);
      };
      render(0);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Video Autoplay & Load Handler
  useEffect(() => {
    if (videoRef.current) {
      setVideoLoaded(false);
      videoRef.current.load();
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setVideoLoaded(true);
      }).catch((err) => {
        console.warn("Video playback notice:", err);
        setIsPlaying(false);
      });
    }
  }, [selectedVideo]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <header className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden bg-[#0d0f12]">
      {/* Canvas Shader Engine */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* HTML5 Video Background Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          key={selectedVideo}
          onLoadedData={() => setVideoLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-90 contrast-110 opacity-70 transition-opacity duration-700"
        >
          <source src={selectedVideo} type="video/mp4" />
          <source src="/8478752-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Enhanced High-Contrast Dark Gradient Overlay for Mobile Legibility */}
        <div className="absolute inset-0 bg-[#0d0f12]/75 backdrop-blur-[2px] pointer-events-none"></div>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at 50% 35%, rgba(233, 193, 118, 0.12) 0%, rgba(13,15,18,0.85) 65%, rgba(13,15,18,0.98) 100%)'
        }}></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto mt-2 sm:mt-6 animate-in">
        {/* Name / Subtitle Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 mb-4 sm:mb-8 backdrop-blur-xl shadow-2xl">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          <p className="font-mono text-[10px] sm:text-xs text-white tracking-[0.2em] uppercase font-semibold">
            ABHISHEK THAKUR
          </p>
        </div>

        {/* Hero Title */}
        <h1 className="font-headline text-[28px] xs:text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight mb-3 sm:mb-6 mx-auto max-w-5xl leading-[1.2] sm:leading-[1.15] drop-shadow-2xl px-1">
          From Personal Choices <br className="block" />
          to <span className="italic font-normal text-gold-gradient drop-shadow-[0_0_30px_rgba(233,193,118,0.5)]">National Strategy</span>
        </h1>

        {/* Subtitle / Tagline */}
        <p className="font-body text-sm sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-10 mx-auto max-w-xl font-light leading-relaxed drop-shadow-md px-2">
          Ideas That Move People, Markets &amp; Nations.
        </p>

        {/* Mobile Stacked Pill CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full max-w-sm sm:max-w-none mx-auto">
          <button 
            onClick={() => onOpenConsultation('Business Consulting')}
            className="w-full sm:w-auto btn-modern-primary px-6 sm:px-10 py-3.5 sm:py-4 text-xs font-bold uppercase tracking-[0.16em] sm:tracking-[0.18em] flex items-center justify-center gap-2.5 group shadow-[0_0_25px_rgba(233,193,118,0.3)] active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-on-secondary shrink-0" />
            <span>Let's build your strategy</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 shrink-0" />
          </button>
          
          <a
            href="#story"
            className="w-full sm:w-auto btn-modern-secondary px-6 sm:px-9 py-3.5 sm:py-4 text-xs font-semibold uppercase tracking-[0.16em] sm:tracking-[0.18em] flex items-center justify-center gap-2 group active:scale-95"
          >
            <Compass className="w-4 h-4 text-secondary group-hover:rotate-45 transition-transform duration-500 shrink-0" />
            <span>Explore Philosophy</span>
          </a>
        </div>

        {/* Executive Metrics Bar - Crisp Symmetrical 2x2 Grid on Mobile */}
        <div className="mt-6 sm:mt-16 p-2 sm:p-6 bg-white/[0.05] backdrop-blur-xl rounded-2xl border border-white/15 grid grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto text-left shadow-2xl">
          <div className="p-3 sm:p-4 border-r border-b md:border-b-0 border-white/10">
            <div className="text-2xl sm:text-3xl md:text-4xl font-headline font-extrabold text-gold-gradient">15+</div>
            <div className="text-[10px] sm:text-[11px] uppercase tracking-normal text-gray-300 mt-1 font-mono leading-tight">Strategic Counsel</div>
          </div>
          <div className="p-3 sm:p-4 border-b md:border-b-0 md:border-r border-white/10">
            <div className="text-2xl sm:text-3xl md:text-4xl font-headline font-extrabold text-gold-gradient">$2B+</div>
            <div className="text-[10px] sm:text-[11px] uppercase tracking-normal text-gray-300 mt-1 font-mono leading-tight">Transaction Value</div>
          </div>
          <div className="p-3 sm:p-4 border-r border-white/10">
            <div className="text-2xl sm:text-3xl md:text-4xl font-headline font-extrabold text-gold-gradient">30+</div>
            <div className="text-[10px] sm:text-[11px] uppercase tracking-normal text-gray-300 mt-1 font-mono leading-tight">National Campaigns</div>
          </div>
          <div className="p-3 sm:p-4">
            <div className="text-2xl sm:text-3xl md:text-4xl font-headline font-extrabold text-gold-gradient">100%</div>
            <div className="text-[10px] sm:text-[11px] uppercase tracking-normal text-gray-300 mt-1 font-mono leading-tight">Discreet Advisory</div>
          </div>
        </div>

        {/* Trust & Credential Banner - Centered Executive Pill */}
        <div className="mt-4 sm:mt-6 px-4 py-2.5 bg-white/[0.04] border border-white/15 rounded-full max-w-2xl mx-auto flex items-center justify-center gap-2 text-center text-[10px] sm:text-xs font-mono uppercase tracking-wide text-gray-300 shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 animate-pulse"></span>
          <span>Discrete Counsel to Sovereign Funds, Fortune 500 Boards &amp; Cabinet Offices</span>
        </div>
      </div>

      {/* Touch-Friendly Floating Video Controls */}
      <div className="absolute bottom-2 right-2 sm:bottom-6 sm:right-6 z-30 flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-2xl p-1 sm:p-2 rounded-full border border-white/20 text-white shadow-2xl">
        <button
          onClick={togglePlay}
          className="p-1.5 sm:p-2.5 hover:text-secondary transition-colors rounded-full hover:bg-white/15"
          title={isPlaying ? "Pause Video" : "Play Video"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary" /> : <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
        </button>
        
        <div className="w-px h-3.5 bg-white/20"></div>

        <button
          onClick={toggleMute}
          className="p-1.5 sm:p-2.5 hover:text-secondary transition-colors rounded-full hover:bg-white/15"
          title={isMuted ? "Unmute Audio" : "Mute Audio"}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary" />}
        </button>

        <div className="w-px h-3.5 bg-white/20"></div>

        <div className="relative">
          <button
            onClick={() => setShowVideoMenu(!showVideoMenu)}
            className="p-1.5 sm:p-2.5 hover:text-secondary transition-colors rounded-full hover:bg-white/15 flex items-center gap-1 text-xs font-mono"
            title="Select Video Stream Preset"
          >
            <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary" />
            <span className="hidden sm:inline text-[11px]">Stream</span>
          </button>

          {showVideoMenu && (
            <div className="absolute bottom-11 right-0 w-52 sm:w-60 bg-[#16191c]/95 border border-white/20 rounded-2xl shadow-2xl p-2.5 space-y-1 z-50 backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-2">
              <div className="text-[10px] font-mono uppercase tracking-widest text-secondary px-2 py-1 flex justify-between items-center">
                <span>Video Source</span>
                <RefreshCw className="w-3 h-3 animate-spin text-secondary" />
              </div>
              {videoPresets.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => {
                    setSelectedVideo(preset.url);
                    setShowVideoMenu(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-mono transition-all flex items-center justify-between ${
                    selectedVideo === preset.url
                      ? 'bg-secondary text-on-secondary font-bold shadow-md'
                      : 'hover:bg-white/10 text-gray-200'
                  }`}
                >
                  <span className="truncate">{preset.name}</span>
                  {selectedVideo === preset.url && <span className="text-xs">✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
