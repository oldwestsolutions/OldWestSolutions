"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function createStarTexture(): THREE.CanvasTexture {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2,
  );
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.15, "rgba(255, 255, 255, 0.8)");
  gradient.addColorStop(0.4, "rgba(200, 220, 255, 0.15)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  return new THREE.CanvasTexture(canvas);
}

export default function HeroStarfield() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.className = "h-full w-full";
    mount.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 200);
    camera.position.set(0, 0, 40);

    const starTexture = createStarTexture();

    const starCount = 2200;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);

    const nearWhite = new THREE.Color("#e8f0ff");
    const coolBlue = new THREE.Color("#7eb8e8");
    const warmWhite = new THREE.Color("#fff8ee");

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 100;
      positions[i3 + 1] = (Math.random() - 0.5) * 60;
      positions[i3 + 2] = -Math.random() * 60;

      const palette = Math.random();
      const color =
        palette < 0.6
          ? nearWhite.clone()
          : palette < 0.85
            ? nearWhite.clone().lerp(coolBlue, Math.random() * 0.4)
            : warmWhite.clone();

      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = 0.08 + Math.random() * 0.18;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      map: starTexture,
      size: 0.14,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.7,
      vertexColors: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    const resize = () => {
      const { clientWidth, clientHeight } = mount;
      if (!clientWidth || !clientHeight) return;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };

    resize();
    window.addEventListener("resize", resize);

    let frameId = 0;
    const clock = new THREE.Clock();

    const render = () => {
      const t = clock.getElapsedTime();
      stars.rotation.y = t * 0.003;
      stars.rotation.x = Math.sin(t * 0.08) * 0.002;
      renderer.render(scene, camera);
    };

    if (prefersReducedMotion) {
      render();
    } else {
      const animate = () => {
        render();
        frameId = requestAnimationFrame(animate);
      };
      animate();
    }

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      mount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      starTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden
      className="pointer-events-none absolute inset-0"
    />
  );
}
