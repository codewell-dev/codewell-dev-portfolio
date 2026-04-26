'use client';
import { useEffect, useRef } from 'react';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import * as THREE from 'three';

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const W = el.offsetWidth;
    const H = el.offsetHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100);
    camera.position.set(0, 0, 4.5);

    const torusGeo = new THREE.TorusGeometry(1.4, 0.42, 96, 160);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x6ee7b7,
      metalness: 0.85,
      roughness: 0.08,
      envMapIntensity: 1.2,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    scene.add(torus);

    const wireGeo = new THREE.TorusGeometry(1.4, 0.42, 24, 80);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x6ee7b7,
      wireframe: true,
      opacity: 0.08,
      transparent: true,
    });
    const wireframe = new THREE.Mesh(wireGeo, wireMat);
    scene.add(wireframe);

    const ringGeo = new THREE.TorusGeometry(2.1, 0.006, 8, 200);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x6ee7b7,
      opacity: 0.18,
      transparent: true,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.5;
    scene.add(ring);

    const particleCount = 500;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 1.8 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 2;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x6ee7b7,
      size: 0.012,
      opacity: 0.45,
      transparent: true,
    });
    scene.add(new THREE.Points(pGeo, pMat));

    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    const pointA = new THREE.PointLight(0x6ee7b7, 3, 12);
    const pointB = new THREE.PointLight(0xfb923c, 1.5, 12);
    const pointC = new THREE.PointLight(0x818cf8, 1.2, 10);
    pointA.position.set(3, 2, 3);
    pointB.position.set(-3, -2, 2);
    pointC.position.set(0, 3, -2);
    scene.add(ambient, pointA, pointB, pointC);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const envScene = new RoomEnvironment();
    scene.environment = pmremGenerator.fromScene(envScene).texture;
    pmremGenerator.dispose();

    const mouse = new THREE.Vector2();
    const target = new THREE.Vector2();
    const onMouse = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouse, { passive: true });

    const onResize = () => {
      const nW = el.offsetWidth;
      const nH = el.offsetHeight;
      camera.aspect = nW / nH;
      camera.updateProjectionMatrix();
      renderer.setSize(nW, nH);
    };
    window.addEventListener('resize', onResize, { passive: true });

    let frame: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frame = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      target.x += (mouse.x - target.x) * 0.04;
      target.y += (mouse.y - target.y) * 0.04;

      torus.rotation.x = elapsed * 0.18 + target.y * 0.6;
      torus.rotation.y = elapsed * 0.28 + target.x * 0.8;
      wireframe.rotation.copy(torus.rotation);

      ring.rotation.z = elapsed * 0.08;
      ring.rotation.x = Math.PI / 2.5 + target.y * 0.25;

      pointA.position.x = Math.sin(elapsed * 0.6) * 3;
      pointA.position.y = Math.cos(elapsed * 0.4) * 2;
      pointB.position.x = Math.cos(elapsed * 0.5) * -3;
      pointB.position.y = Math.sin(elapsed * 0.7) * 2;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
