import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface HeroParticleCanvasProps {
  canvasId?: string;
  count?: number;
  className?: string;
}

export const HeroParticleCanvas: React.FC<HeroParticleCanvasProps> = ({
  canvasId = 'hero-canvas',
  count = 240,
  className = 'absolute inset-0 w-full h-full pointer-events-none z-0',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof window === 'undefined') return;

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
      camera.position.z = 5;

      const pos = new Float32Array(count * 3);
      const cols = new Float32Array(count * 3);
      const c1 = new THREE.Color('#04aac4');
      const c2 = new THREE.Color('#fa6793');
      const c3 = new THREE.Color('#008196');

      for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 20;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
        const t = Math.random();
        const c = t < 0.45 ? c1 : t < 0.7 ? c2 : c3;
        cols[i * 3] = c.r;
        cols[i * 3 + 1] = c.g;
        cols[i * 3 + 2] = c.b;
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));

      const mat = new THREE.PointsMaterial({
        size: 0.06,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true,
      });

      const pts = new THREE.Points(geo, mat);
      scene.add(pts);

      const lPos: number[] = [];
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          if (Math.sqrt(dx * dx + dy * dy + dz * dz) < 2.4) {
            lPos.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2], pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
          }
        }
      }

      const lGeo = new THREE.BufferGeometry();
      lGeo.setAttribute('position', new THREE.Float32BufferAttribute(lPos, 3));
      const lineSegments = new THREE.LineSegments(
        lGeo,
        new THREE.LineBasicMaterial({ color: 0x04aac4, transparent: true, opacity: 0.08 })
      );
      scene.add(lineSegments);

      let mx = 0;
      let my = 0;

      const handleMouseMove = (e: MouseEvent) => {
        mx = (e.clientX / window.innerWidth - 0.5) * 0.4;
        my = -(e.clientY / window.innerHeight - 0.5) * 0.25;
      };

      window.addEventListener('mousemove', handleMouseMove);

      const resize = () => {
        if (!canvas.parentElement) return;
        const w = canvas.parentElement.offsetWidth;
        const h = canvas.parentElement.offsetHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };

      resize();
      window.addEventListener('resize', resize);

      let t = 0;
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        t += 0.004;
        pts.rotation.y = t * 0.05 + mx;
        pts.rotation.x = my * 0.4;
        renderer.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', resize);
        cancelAnimationFrame(animationFrameId);
        renderer.dispose();
      };
    } catch (err) {
      console.warn('Three.js canvas initialization skipped:', err);
    }
  }, [count]);

  return <canvas id={canvasId} ref={canvasRef} className={className} />;
};
