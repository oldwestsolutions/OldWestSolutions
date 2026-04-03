"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

export type ScrollRevealPanel = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export type ScrollRevealImageSectionProps = {
  imageSrc: string;
  imageAlt: string;
  panels: ScrollRevealPanel[];
  /** Scroll track length (taller = slower reveal) */
  heightVh?: number;
  mobileHeightVh?: number;
  decoration?: ReactNode;
};

function ScrollRevealReduced({
  imageSrc,
  imageAlt,
  panels,
  decoration,
}: ScrollRevealImageSectionProps) {
  return (
    <section className="relative bg-[#1F1F1F] py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div className="relative aspect-[21/10] max-h-[320px] sm:max-h-[400px] rounded-2xl overflow-hidden border border-white/[0.06] bg-[#2B2B2B]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-[#1F1F1F]/40" />
        </div>
        {panels.map((p, i) => (
          <div key={`${p.title}-${i}`} className="text-center max-w-2xl mx-auto">
            {p.eyebrow && (
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-accent">
                {p.eyebrow}
              </span>
            )}
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              {p.title}
            </h2>
            {p.subtitle && (
              <p className="mt-3 text-text-muted leading-relaxed">{p.subtitle}</p>
            )}
          </div>
        ))}
        {decoration ? (
          <div className="flex justify-center opacity-60 pt-4">{decoration}</div>
        ) : null}
      </div>
    </section>
  );
}

function ScrollRevealAnimated({
  imageSrc,
  imageAlt,
  panels,
  heightVh = 280,
  mobileHeightVh = 220,
  decoration,
}: ScrollRevealImageSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1]);

  const railScaleX = useTransform(scrollYProgress, [0, 1], [0.04, 1]);

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#0a0a0a] [height:var(--srv-h)] md:[height:var(--srv-h-lg)]"
      style={
        {
          "--srv-h": `${mobileHeightVh}vh`,
          "--srv-h-lg": `${heightVh}vh`,
        } as CSSProperties
      }
    >
      <div className="sticky top-0 h-[100dvh] min-h-[100svh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-[-6%] will-change-transform"
            style={{ scale: imageScale }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-[50%_42%]"
              sizes="100vw"
              priority={false}
            />
          </motion.div>
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 pointer-events-none"
            aria-hidden
          />
        </div>

        <motion.div
          className="absolute left-0 right-0 top-0 z-10 flex flex-col will-change-transform"
          style={{ y: translateY }}
        >
          {panels.map((panel, i) => (
            <div
              key={`${panel.title}-${i}`}
              className="relative flex h-[100dvh] min-h-[100svh] w-full shrink-0 flex-col items-center justify-center border-b border-white/[0.05] bg-[#1F1F1F] px-5 sm:px-10"
            >
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#2B2B2B] via-[#242424] to-[#1F1F1F]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/25 to-transparent"
                aria-hidden
              />
              <div className="relative z-[1] max-w-[34rem] text-center sm:max-w-2xl">
                {panel.eyebrow && (
                  <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-accent mb-5 sm:mb-6">
                    {panel.eyebrow}
                  </span>
                )}
                <h2 className="text-balance text-[1.6rem] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-4xl md:text-[2.75rem]">
                  {panel.title}
                </h2>
                {panel.subtitle && (
                  <p className="mx-auto mt-5 max-w-md text-sm leading-[1.65] text-text-secondary sm:mt-7 sm:max-w-lg sm:text-base">
                    {panel.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-px bg-white/[0.08]">
          <motion.div
            className="h-full w-full origin-left bg-accent/45 will-change-transform"
            style={{ scaleX: railScaleX }}
          />
        </div>

        {decoration ? (
          <div className="pointer-events-none absolute bottom-5 left-1/2 z-20 w-[min(88vw,420px)] -translate-x-1/2 opacity-[0.45] sm:bottom-8">
            {decoration}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default function ScrollRevealImageSection(
  props: ScrollRevealImageSectionProps
) {
  const reduced = useReducedMotion();
  if (reduced) {
    return <ScrollRevealReduced {...props} />;
  }
  return <ScrollRevealAnimated {...props} />;
}
