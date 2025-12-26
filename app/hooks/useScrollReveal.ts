"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}
interface StaggeredRevealResult {
  containerRef: React.RefObject<HTMLDivElement | null>;
  visibleItems: boolean[];
}
interface ScrollRevealResult<T extends HTMLElement> {
  ref: React.RefObject<T | null>;
  isVisible: boolean;
}

const DEFAULT_SCROLL_REVEAL_OPTIONS: Required<ScrollRevealOptions> = {
  threshold: 0.1,
  rootMargin: "0px",
  triggerOnce: true,
};
const DEFAULT_STAGGER_DELAY = 100;
const DEFAULT_STAGGER_THRESHOLD = 0.1;

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
): ScrollRevealResult<T> {
  const config = { ...DEFAULT_SCROLL_REVEAL_OPTIONS, ...options };
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        setIsVisible(true);

        if (config.triggerOnce) {
          observer.unobserve(element);
        }
      } else if (!config.triggerOnce) {
        setIsVisible(false);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: config.threshold,
      rootMargin: config.rootMargin,
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [config.threshold, config.rootMargin, config.triggerOnce]);

  return { ref, isVisible };
}

export function useStaggeredReveal(
  itemCount: number,
  baseDelay: number = DEFAULT_STAGGER_DELAY
): StaggeredRevealResult {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(() =>
    new Array(itemCount).fill(false)
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const revealItemsSequentially = () => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];

      for (let index = 0; index < itemCount; index++) {
        const timeout = setTimeout(() => {
          setVisibleItems((previousState) => {
            const updatedState = [...previousState];
            updatedState[index] = true;
            return updatedState;
          });
        }, index * baseDelay);

        timeoutsRef.current.push(timeout);
      }
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        revealItemsSequentially();
        observer.unobserve(container);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: DEFAULT_STAGGER_THRESHOLD,
    });

    observer.observe(container);

    return () => {
      observer.disconnect();
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };
  }, [itemCount, baseDelay]);

  return { containerRef, visibleItems };
}
