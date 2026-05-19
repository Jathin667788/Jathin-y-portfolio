import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

type AnimatedCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
};

export function AnimatedCounter({ value, prefix = '', suffix = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [current, setCurrent] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView || reduceMotion) {
      return;
    }

    let frame = 0;
    const totalFrames = 72;

    const tick = () => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(value * eased));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref}>
      {value === 0 && prefix ? prefix.trim() : `${prefix}${current}${suffix}`}
    </span>
  );
}
