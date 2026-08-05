import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x4A5EFF, 1.5);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x7F3DFF, 1.5);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    const group = new THREE.Group();

    const pyramidGeom = new THREE.ConeGeometry(2, 3, 4);
    const glassMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0.1,
        roughness: 0.05,
        transmission: 0.9,
        thickness: 1.0,
        ior: 1.5,
        reflectivity: 0.5,
        clearcoat: 1.0
    });
    const pyramid = new THREE.Mesh(pyramidGeom, glassMaterial);
    pyramid.rotation.x = Math.PI / 4;
    group.add(pyramid);

    const ringGeom = new THREE.TorusGeometry(2.5, 0.05, 16, 100);
    const chromeMaterial = new THREE.MeshStandardMaterial({
        color: 0x4A5EFF,
        metalness: 1,
        roughness: 0.1
    });
    const ring = new THREE.Mesh(ringGeom, chromeMaterial);
    group.add(ring);

    const particlesGeom = new THREE.BufferGeometry();
    const particlesCount = 120;
    const posArray = new Float32Array(particlesCount * 3);
    for(let i=0; i<particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
    }
    particlesGeom.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: 0x7F3DFF,
        transparent: true,
        opacity: 0.8
    });
    const particlesMesh = new THREE.Points(particlesGeom, particlesMaterial);
    scene.add(particlesMesh);

    scene.add(group);
    camera.position.z = 6;

    let animationFrameId: number;

    function animate() {
        animationFrameId = requestAnimationFrame(animate);
        
        group.rotation.y += 0.005;
        group.rotation.x += 0.0015;
        
        particlesMesh.rotation.y += 0.001;
        
        group.position.y = Math.sin(Date.now() * 0.001) * 0.2;
        
        renderer.render(scene, camera);
    }

    const handleResize = () => {
        if (!container) return;
        const w = container.clientWidth || window.innerWidth;
        const h = container.clientHeight || window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      container.removeChild(renderer.domElement);
      
      scene.clear();
      pyramidGeom.dispose();
      glassMaterial.dispose();
      ringGeom.dispose();
      chromeMaterial.dispose();
      particlesGeom.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="h-full w-full" />;
}
