"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80";

type StripProps = {
  index: number;
  total: number;
  progress: MotionValue<number>;
};

function HorizontalRevealStrip({ index, total, progress }: StripProps) {
  const safeTotal = Math.max(total, 1);
  const pad = 0.04;
  const span = 0.85;
  const start = (index / safeTotal) * span;
  const end = Math.min(start + 0.12 + pad, 0.98);
  const opacity = useTransform(progress, [start, end], [1, 0]);

  return (
    <motion.div
      className="absolute left-0 right-0 bg-[#1F1F1F] shadow-[inset_0_-1px_0_rgba(255,255,255,0.04)]"
      style={{
        top: `${(index / safeTotal) * 100}%`,
        height: `${100 / safeTotal + 0.35}%`,
        opacity,
      }}
    />
  );
}

export type ScrollRevealImageSectionProps = {
  imageSrc?: string;
  imageAlt?: string;
  slices?: number;
  /** Scroll length — desktop */
  heightVh?: number;
  /** Shorter on small screens for ergonomics */
  mobileHeightVh?: number;
  eyebrow?: string;
  title?: string;
  caption?: string;
  illustration?: ReactNode;
};

export default function ScrollRevealImageSection({
  imageSrc = DEFAULT_IMAGE,
  imageAlt = "Architecture and workspace",
  slices = 7,
  heightVh = 280,
  mobileHeightVh = 220,
  eyebrow,
  title,
  caption,
  illustration,
}: ScrollRevealImageSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const reduce = reduceMotion === true;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const captionOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.85, 1], [0, 1, 1, 0.4]);
  const captionY = useTransform(scrollYProgress, [0.15, 0.4], [24, 0]);

  const stripCount = Math.max(slices, 1);

  if (reduce) {
    return (
      <section className="relative bg-[#1F1F1F] py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.06]">
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/80 to-transparent" />
          </div>
          <div>
            {eyebrow && (
              <span className="text-accent text-xs font-semibold tracking-widest uppercase">{eyebrow}</span>
            )}
            {title && (
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">{title}</h2>
            )}
            {caption && <p className="mt-4 text-text-muted leading-relaxed">{caption}</p>}
            {illustration && <div className="mt-8 max-w-xs opacity-90">{illustration}</div>}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#141414] md:[height:var(--sr-height)] [height:var(--sr-height-mobile)]"
      style={
        {
          "--sr-height": `${heightVh}vh`,
          "--sr-height-mobile": `${mobileHeightVh}vh`,
        } as CSSProperties
      }
    >
      <div className="sticky top-0 h-[100dvh] min-h-[100svh] w-full overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center scale-[1.02]"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1F1F1F]/55 via-[#1F1F1F]/25 to-[#1F1F1F]/70" />
        </div>

        {/* Reveal strips */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {Array.from({ length: stripCount }).map((_, i) => (
            <HorizontalRevealStrip key={i} index={i} total={stripCount} progress={scrollYProgress} />
          ))}
        </div>

        {/* Foreground content */}
        <div className="relative z-20 h-full flex flex-col justify-end pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 pointer-events-none">
          <div className="max-w-3xl mx-auto w-full text-center pointer-events-auto">
            {(eyebrow || title || caption) && (
              <motion.div style={{ opacity: captionOpacity, y: captionY }}>
                {eyebrow && (
                  <span className="inline-block text-accent text-xs font-semibold tracking-widest uppercase mb-4">
                    {eyebrow}
                  </span>
                )}
                {title && (
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight text-balance">
                    {title}
                  </h2>
                )}
                {caption && (
                  <p className="mt-4 text-text-secondary text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                    {caption}
                  </p>
                )}
              </motion.div>
            )}
            {illustration && (
              <div className="mt-10 md:mt-14 flex justify-center opacity-[0.85] max-h-[140px] md:max-h-[180px]">
                {illustration}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
