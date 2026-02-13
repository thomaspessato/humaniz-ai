"use client";

import { useEffect, useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  variant?: "up" | "scale" | "stagger";
  delay?: number;
}

export function Reveal({ children, className = "", variant = "up", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("visible");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const baseClass =
    variant === "scale"
      ? "reveal-scale"
      : variant === "stagger"
      ? "stagger-children"
      : "reveal";

  return (
    <div ref={ref} className={`${baseClass} ${className}`}>
      {children}
    </div>
  );
}
