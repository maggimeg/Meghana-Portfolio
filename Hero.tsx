import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = Math.min(50, window.innerWidth / 20);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `rgba(138, 85, 255, ${Math.random() * 0.3 + 0.1})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;

        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;

          if (distance < maxDistance) {
            if (!ctx) return;
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = `rgba(138, 85, 255, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      
      connectParticles();
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'transparent' }}
      />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 transition-colors duration-300">
          <span className="block">Hello, I'm </span>
          <span className="text-indigo-600 dark:text-indigo-400">Kurapati Meghana</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
          Computer Science Student & Python Developer
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#about"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg 
                      transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 
                      focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Learn More About Me
          </a>
          <a
            href="#resume"
            className="px-8 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 
                      border border-indigo-600 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 
                      dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 
                      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            View Resume
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
