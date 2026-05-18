'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

// Teal-palette version of the concentric-ring ripple shader.
// Intensity is mapped to dark-teal → mid-teal → bright-cyan so the
// animation reads as a glowing teal field rather than full RGB.
const fragmentShader = `
  precision highp float;
  uniform vec2  resolution;
  uniform float time;

  void main(void) {
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
    float t = time * 0.05;
    float lineWidth = 0.002;

    vec3 raw = vec3(0.0);
    for (int j = 0; j < 3; j++) {
      for (int i = 0; i < 5; i++) {
        raw[j] += lineWidth * float(i * i)
          / abs(fract(t - 0.01 * float(j) + float(i) * 0.01) * 5.0
                - length(uv)
                + mod(uv.x + uv.y, 0.2));
      }
    }

    float intensity = clamp((raw[0] + raw[1] + raw[2]) / 0.6, 0.0, 1.0);

    // #0D3838 → #1C7272 (brand teal) → #8CF2F2 (bright cyan highlight)
    vec3 darkTeal   = vec3(0.05, 0.22, 0.22);
    vec3 midTeal    = vec3(0.11, 0.45, 0.45);
    vec3 brightTeal = vec3(0.55, 0.95, 0.95);

    vec3 color = intensity < 0.5
      ? mix(darkTeal,  midTeal,    intensity * 2.0)
      : mix(midTeal,   brightTeal, (intensity - 0.5) * 2.0);

    gl_FragColor = vec4(color, 1.0);
  }
`;

export function ShaderBg({ className = '' }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const camera   = new THREE.Camera();
    camera.position.z = 1;

    const scene    = new THREE.Scene();
    const geometry = new THREE.PlaneGeometry(2, 2);
    const uniforms = {
      time:       { value: 1.0 },
      resolution: { value: new THREE.Vector2() },
    };

    const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader });
    scene.add(new THREE.Mesh(geometry, material));

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.resolution.value.set(renderer.domElement.width, renderer.domElement.height);
    };

    resize();
    window.addEventListener('resize', resize);

    const tick = () => {
      rafRef.current = requestAnimationFrame(tick);
      uniforms.time.value += 0.05;
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ background: '#0D3838' }}
    />
  );
}
