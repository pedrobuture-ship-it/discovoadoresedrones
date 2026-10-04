import React, { Suspense, useMemo, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, useGLTF, useProgress } from '@react-three/drei';
import * as THREE from 'three';
import { Hand } from 'lucide-react';
import { StatusDot } from '../ui/StatusDot';

interface ModelProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  /** Se definido, centraliza o modelo pela bounding box e normaliza a maior dimensão para este valor. */
  fitSize?: number;
}

function Model({ modelPath, scale = 1, position = [0, 0, 0], fitSize }: ModelProps) {
  const { scene } = useGLTF(modelPath);

  const { object, fitScale } = useMemo(() => {
    if (!fitSize) return { object: scene, fitScale: 1 };
    const obj = scene.clone(true);
    obj.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(obj);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    obj.position.sub(center);
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    return { object: obj, fitScale: fitSize / maxDim };
  }, [scene, fitSize]);

  return (
    <group scale={scale * fitScale} position={position}>
      <primitive object={object} />
    </group>
  );
}

function LoaderHTML() {
  const { active } = useProgress();
  if (!active) return null;
  
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
      <div className="flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-widest whitespace-nowrap bg-slate-50 dark:bg-bg-950/80 px-4 py-2 rounded-md border border-cyan-600 dark:border-cyan-500 dark:border-cyan-400/20 backdrop-blur-sm shadow-xl shadow-cyan-500/10 dark:shadow-cyan-400/10">
        <StatusDot /> CARREGANDO MODELO...
      </div>
    </div>
  );
}

interface ModelViewerProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  autoRotate?: boolean; // kept for backwards compatibility but ignored
  className?: string;
  fitSize?: number;
}

export function ModelViewer({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  className = '',
  fitSize
}: ModelViewerProps) {
  const [hasInteracted, setHasInteracted] = useState(false);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <LoaderHTML />
      
      <div 
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none flex items-center gap-2 bg-slate-50 dark:bg-bg-950/70 border border-slate-200 dark:border-line/50 rounded-full px-3 py-1.5 transition-opacity duration-500 ${hasInteracted ? 'opacity-0' : 'opacity-100'}`}
      >
        <Hand className="w-4 h-4 text-cyan-600 dark:text-cyan-400 animate-pulse" />
        <span className="text-xs font-mono tracking-wide text-slate-700 dark:text-slate-300">Arraste para girar</span>
      </div>

      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[-5, 2, 0]} color="#22d3ee" intensity={1.5} />
        <directionalLight position={[0, 2, 5]} color="#ffffff" intensity={1} />
        <directionalLight position={[5, 2, 0]} color="#3b82f6" intensity={1.5} />
        
        <Suspense fallback={null}>
          <Model modelPath={modelPath} scale={scale} position={position} fitSize={fitSize} />
          <Environment preset="city" />
          <ContactShadows position={[0, fitSize ? -fitSize * 0.55 : -1, 0]} opacity={0.4} scale={5} blur={2} />
        </Suspense>

        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate={false}
          onStart={() => setHasInteracted(true)}
        />
      </Canvas>
    </div>
  );
}

