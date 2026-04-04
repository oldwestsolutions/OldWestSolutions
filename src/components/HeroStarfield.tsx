"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroStarfield() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.className = "h-full w-full";
    mount.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.set(0, 0.5, 18);

    const ambientLight = new THREE.AmbientLight(0x7ab8ff, 0.95);
    scene.add(ambientLight);

    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1800;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const nearWhite = new THREE.Color("#f4fbff");
    const coolBlue = new THREE.Color("#5aa9ff");

    for (let i = 0; i < starCount; i += 1) {
      const offset = i * 3;
      starPositions[offset] = (Math.random() - 0.5) * 44;
      starPositions[offset + 1] = Math.random() * 26 - 1.5;
      starPositions[offset + 2] = -Math.random() * 26;

      const mix = Math.random();
      const color = nearWhite.clone().lerp(coolBlue, mix * 0.75);
      starColors[offset] = color.r;
      starColors[offset + 1] = color.g;
      starColors[offset + 2] = color.b;
    }

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3),
    );
    starGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(starColors, 3),
    );

    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({
        size: 0.1,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.92,
        vertexColors: true,
        depthWrite: false,
      }),
    );
    stars.position.y = 1.5;
    scene.add(stars);

    const accentStarGeometry = new THREE.BufferGeometry();
    const accentStarCount = 120;
    const accentPositions = new Float32Array(accentStarCount * 3);

    for (let i = 0; i < accentStarCount; i += 1) {
      const offset = i * 3;
      accentPositions[offset] = (Math.random() - 0.5) * 42;
      accentPositions[offset + 1] = Math.random() * 22 + 1;
      accentPositions[offset + 2] = -Math.random() * 18;
    }

    accentStarGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(accentPositions, 3),
    );

    const accentStars = new THREE.Points(
      accentStarGeometry,
      new THREE.PointsMaterial({
        color: "#ffffff",
        size: 0.22,
        transparent: true,
        opacity: 0.95,
        depthWrite: false,
      }),
    );
    scene.add(accentStars);

    const resize = () => {
      const { clientHeight, clientWidth } = mount;
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
      stars.rotation.y = t * 0.001;
      accentStars.rotation.y = -t * 0.0008;
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
      starGeometry.dispose();
      accentStarGeometry.dispose();
      (stars.material as THREE.Material).dispose();
      (accentStars.material as THREE.Material).dispose();
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
