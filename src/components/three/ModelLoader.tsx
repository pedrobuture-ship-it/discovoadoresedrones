import { useGLTF } from '@react-three/drei';

export function preloadModels() {
  useGLTF.preload('/models/drone2.glb');
  useGLTF.preload('/models/p5controller.glb');
  useGLTF.preload('/models/ps4controller.glb');
  useGLTF.preload('/models/xbox360controller.glb');
  useGLTF.preload('/models/xbox_one_seriescontroller.glb');
}

export function ModelLoader() {
  preloadModels();
  return null;
}
