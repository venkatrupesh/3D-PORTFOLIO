import { useEffect, useRef } from "react";
import "./styles/TechShowcase.css";

const TechShowcase = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const technologies = [
    { name: "Python", color: "#3776AB", symbol: "Py" },
    { name: "JavaScript", color: "#F7DF1E", symbol: "JS" },
    { name: "TypeScript", color: "#3178C6", symbol: "TS" },
    { name: "Node.js", color: "#339933", symbol: "Node" },
    { name: "React", color: "#61DAFB", symbol: "React" },
    { name: "Next.js", color: "#FFFFFF", symbol: "Next" },
    { name: "MongoDB", color: "#47A248", symbol: "DB" },
    { name: "MySQL", color: "#4479A1", symbol: "SQL" },
    { name: "Express", color: "#FFFFFF", symbol: "Ex" },
    { name: "FastAPI", color: "#009688", symbol: "API" },
    { name: "Git", color: "#F05032", symbol: "Git" },
    { name: "Docker", color: "#2496ED", symbol: "🐳" },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = 600; // Fixed height
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle class
    class TechParticle {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      size: number;
      color: string;
      symbol: string;
      name: string;
      vx: number;
      vy: number;
      angle: number;
      angleSpeed: number;
      orbitAngle: number;
      orbitSpeed: number;

      constructor(tech: typeof technologies[0], index: number, total: number) {
        // Start from random positions
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        
        // Calculate target position in a circle
        const centerX = canvas!.width / 2;
        const centerY = canvas!.height / 2;
        const radius = Math.min(canvas!.width, canvas!.height) * 0.3;
        
        this.orbitAngle = (index / total) * Math.PI * 2;
        this.orbitSpeed = 0.0005; // Slow rotation speed
        
        this.targetX = centerX + Math.cos(this.orbitAngle) * radius;
        this.targetY = centerY + Math.sin(this.orbitAngle) * radius;
        
        this.size = 60;
        this.color = tech.color;
        this.symbol = tech.symbol;
        this.name = tech.name;
        this.vx = 0;
        this.vy = 0;
        this.angle = 0;
        this.angleSpeed = (Math.random() - 0.5) * 0.02;
      }

      update() {
        // Update orbit angle for rotation
        this.orbitAngle += this.orbitSpeed;
        
        // Calculate new target position based on orbit
        const centerX = canvas!.width / 2;
        const centerY = canvas!.height / 2;
        const radius = Math.min(canvas!.width, canvas!.height) * 0.3;
        
        this.targetX = centerX + Math.cos(this.orbitAngle) * radius;
        this.targetY = centerY + Math.sin(this.orbitAngle) * radius;
        
        // Move towards target
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        
        this.vx += dx * 0.001;
        this.vy += dy * 0.001;
        
        this.vx *= 0.95;
        this.vy *= 0.95;
        
        this.x += this.vx;
        this.y += this.vy;
        
        this.angle += this.angleSpeed;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        
        // Draw glow
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
        gradient.addColorStop(0, this.color + "40");
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(-this.size, -this.size, this.size * 2, this.size * 2);
        
        // Draw circle
        ctx.beginPath();
        ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
        ctx.fillStyle = this.color + "20";
        ctx.fill();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Draw symbol
        ctx.fillStyle = this.color;
        ctx.font = "bold 20px 'Geist', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.symbol, 0, 0);
        
        ctx.restore();
        
        // Draw name below
        ctx.fillStyle = "#ffffff";
        ctx.font = "14px 'Geist', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(this.name, this.x, this.y + this.size / 2 + 20);
      }
    }

    // Create particles
    const particles = technologies.map(
      (tech, index) => new TechParticle(tech, index, technologies.length)
    );

    // Animation loop
    let animationFrame: number;
    const animate = () => {
      ctx.fillStyle = "rgba(11, 8, 12, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(194, 164, 255, ${0.3 * (1 - distance / 200)})`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        });
      });
      
      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });
      
      animationFrame = requestAnimationFrame(animate);
    };

    // Start animation after a delay
    setTimeout(() => {
      animate();
    }, 500);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="tech-showcase-section">
      <div className="tech-showcase-content">
        <h2 className="tech-showcase-title">
          Tech <span>Stack</span>
        </h2>
        <p className="tech-showcase-subtitle">
          Technologies I work with to build scalable solutions
        </p>
        <canvas ref={canvasRef} className="tech-showcase-canvas"></canvas>
      </div>
      <div className="tech-showcase-gradient"></div>
    </div>
  );
};

export default TechShowcase;
