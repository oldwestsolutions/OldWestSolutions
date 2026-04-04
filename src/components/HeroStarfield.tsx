"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function createGlowTexture() {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext("2d");
  if (!context) {
    return null;
  }

  const gradient = context.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2,
  );

  gradient.addColorStop(0, "rgba(142, 211, 255, 0.95)");
  gradient.addColorStop(0.3, "rgba(86, 168, 255, 0.38)");
  gradient.addColorStop(0.65, "rgba(34, 94, 178, 0.14)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);

  return new THREE.CanvasTexture(canvas);
}

export default function HeroStarfield() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) {
      return;
    }

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

    const moonLight = new THREE.DirectionalLight(0xbfe2ff, 1.6);
    moonLight.position.set(3, 5, 7);
    scene.add(moonLight);

    const moonBackLight = new THREE.PointLight(0x3477ff, 0.55, 28);
    moonBackLight.position.set(-2, 4, -4);
    scene.add(moonBackLight);

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

    const moonGroup = new THREE.Group();

    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(1.4, 48, 48),
      new THREE.MeshStandardMaterial({
        color: "#5da8ea",
        emissive: "#173964",
        emissiveIntensity: 0.9,
        roughness: 0.95,
        metalness: 0.05,
      }),
    );

    const glowTexture = createGlowTexture();
    const moonGlow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTexture ?? undefined,
        color: "#6dbaff",
        transparent: true,
        opacity: 0.46,
        depthWrite: false,
      }),
    );
    moonGlow.scale.set(7.5, 7.5, 1);

    moonGroup.add(moonGlow);
    moonGroup.add(moon);
    moonGroup.position.set(0.4, 6.3, -7);
    scene.add(moonGroup);

    const resize = () => {
      const { clientHeight, clientWidth } = mount;
      if (!clientWidth || !clientHeight) {
        return;
      }

      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };

    resize();
    window.addEventListener("resize", resize);

    let animationFrame = 0;
    const clock = new THREE.Clock();

    const render = () => {
      const elapsed = clock.getElapsedTime();
      stars.rotation.y = elapsed * 0.015;
      accentStars.rotation.y = -elapsed * 0.01;
      moonGroup.position.y = 6.3 + Math.sin(elapsed * 0.55) * 0.18;
      moon.rotation.y = elapsed * 0.22;
      moonGlow.material.rotation = elapsed * 0.04;
      renderer.render(scene, camera);
    };

    if (prefersReducedMotion) {
      render();
    } else {
      const animate = () => {
        render();
        animationFrame = window.requestAnimationFrame(animate);
      };

      animate();
    }

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener("resize", resize);
      mount.removeChild(renderer.domElement);

      starGeometry.dispose();
      accentStarGeometry.dispose();
      moon.geometry.dispose();
      glowTexture?.dispose();

      (stars.material as THREE.Material).dispose();
      (accentStars.material as THREE.Material).dispose();
      (moon.material as THREE.Material).dispose();
      (moonGlow.material as THREE.Material).dispose();

      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} aria-hidden className="pointer-events-none absolute inset-0" />;
}
