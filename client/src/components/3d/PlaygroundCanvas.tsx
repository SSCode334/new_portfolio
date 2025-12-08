import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";

function InteractiveParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  const particleCount = 500;
  
  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const vel = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      vel[i * 3] = (Math.random() - 0.5) * 0.02;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    return { positions: pos, velocities: vel };
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        posArray[i3] += velocities[i3];
        posArray[i3 + 1] += velocities[i3 + 1];
        posArray[i3 + 2] += velocities[i3 + 2];
        
        const dx = mouse.x * 4 - posArray[i3];
        const dy = mouse.y * 4 - posArray[i3 + 1];
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 2) {
          const force = (2 - dist) * 0.01;
          velocities[i3] -= dx * force * 0.1;
          velocities[i3 + 1] -= dy * force * 0.1;
        }
        
        if (Math.abs(posArray[i3]) > 4) velocities[i3] *= -0.8;
        if (Math.abs(posArray[i3 + 1]) > 4) velocities[i3 + 1] *= -0.8;
        if (Math.abs(posArray[i3 + 2]) > 4) velocities[i3 + 2] *= -0.8;
        
        velocities[i3] *= 0.99;
        velocities[i3 + 1] *= 0.99;
        velocities[i3 + 2] *= 0.99;
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#06b6d4"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hue, setHue] = useState(280);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      setHue(280 + Math.sin(state.clock.elapsedTime) * 40);
    }
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial
          color={`hsl(${hue}, 85%, 55%)`}
          emissive={`hsl(${hue}, 85%, 55%)`}
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export function ParticleDemo() {
  return (
    <div className="relative w-full h-80 rounded-lg overflow-hidden border border-border bg-card/30" data-testid="demo-particles">
      <Suspense fallback={<div className="w-full h-full gradient-neon opacity-20 animate-pulse" />}>
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={0.5} color="#a855f7" />
          <InteractiveParticles />
        </Canvas>
      </Suspense>
      <div className="absolute bottom-4 left-4 text-xs text-muted-foreground">
        Move your cursor to interact
      </div>
    </div>
  );
}

export function CubeDemo() {
  return (
    <div className="relative w-full h-80 rounded-lg overflow-hidden border border-border bg-card/30" data-testid="demo-cube">
      <Suspense fallback={<div className="w-full h-full gradient-neon opacity-20 animate-pulse" />}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={0.5} color="#a855f7" />
          <pointLight position={[-5, -5, -5]} intensity={0.3} color="#06b6d4" />
          <FloatingCube />
        </Canvas>
      </Suspense>
      <div className="absolute bottom-4 left-4 text-xs text-muted-foreground">
        Wireframe cube with color cycling
      </div>
    </div>
  );
}

export function WaveDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let animationId: number;
    let time = 0;
    
    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
    };
    
    resize();
    window.addEventListener("resize", resize);
    
    const animate = () => {
      time += 0.02;
      ctx.fillStyle = "rgba(10, 10, 15, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const lines = 20;
      const amplitude = 40;
      
      for (let i = 0; i < lines; i++) {
        const y = (canvas.height / lines) * i + canvas.height / lines / 2;
        const hue = 280 + (i / lines) * 100;
        
        ctx.beginPath();
        ctx.strokeStyle = `hsla(${hue}, 85%, 55%, ${0.3 + (i / lines) * 0.5})`;
        ctx.lineWidth = 2;
        
        for (let x = 0; x < canvas.width; x += 5) {
          const wave = Math.sin(x * 0.01 + time + i * 0.5) * amplitude;
          const yPos = y + wave;
          
          if (x === 0) {
            ctx.moveTo(x, yPos);
          } else {
            ctx.lineTo(x, yPos);
          }
        }
        
        ctx.stroke();
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);
  
  return (
    <div className="relative w-full h-80 rounded-lg overflow-hidden border border-border bg-card/30" data-testid="demo-waves">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: "rgba(10, 10, 15, 1)" }}
      />
      <div className="absolute bottom-4 left-4 text-xs text-muted-foreground">
        Procedural wave animation
      </div>
    </div>
  );
}
