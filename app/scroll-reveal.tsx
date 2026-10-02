"use client";

import { Box } from "@mui/material";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
};

export default function ScrollReveal({ children, delay = 0 }: Readonly<ScrollRevealProps>) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.18
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={elementRef}
      className={isVisible ? "scroll-reveal scroll-reveal-visible" : "scroll-reveal"}
      sx={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Box>
  );
}
