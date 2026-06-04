import React, { useEffect } from 'react';

const ParticleBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById("bg");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    let particleColors = ["#ff4f87", "#8b5cf6", "#14B8A6"];
    let connectionLineColor = "rgba(139, 92, 246, 0.12)";

    // Hook layout color syncing engine
    const syncColors = (isDark) => {
      if (isDark) {
        particleColors = ["#ffffff", "#C4B5FD", "#14B8A6"];
        connectionLineColor = "rgba(196, 181, 253, 0.15)";
      } else {
        particleColors = ["#f43f5e", "#94a3b8", "#cbd5e1"];
        connectionLineColor = "rgba(255, 79, 135, 0.12)";
      }
      particles.forEach(p => {
        p.color = particleColors[Math.floor(Math.random() * particleColors.length)];
      });
    };

    const particles = [];
    const particleCount = 120;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.size = Math.random() * 2 + 1;
        this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.shadowBlur = 6;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Set checking loop
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      syncColors(isDark);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    syncColors(document.documentElement.classList.contains('dark'));

    function connect() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distance = dx * dx + dy * dy;

          if (distance < 10000) {
            let opacity = 0.15 - (distance / 10000) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = connectionLineColor.replace(/[\d\.]+\)$/, opacity + ")");
            ctx.lineWidth = 0.75;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    let animationFrameId;
    function animate() {
      if (document.documentElement.classList.contains('dark')) {
        ctx.fillStyle = "rgba(15, 23, 42, 0.3)";
      } else {
        ctx.fillStyle = "rgba(255, 245, 247, 0.3)";
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      connect();
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return <canvas id="bg" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}></canvas>;
};

export default ParticleBackground;