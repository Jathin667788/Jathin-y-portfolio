import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useSpring(0, { stiffness: 180, damping: 28, mass: 0.2 });
  const y = useSpring(0, { stiffness: 180, damping: 28, mass: 0.2 });

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    setEnabled(finePointer);

    if (!finePointer) {
      return;
    }

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX - 140);
      y.set(event.clientY - 140);
    };

    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [x, y]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-40 hidden h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl lg:block"
      style={{ x, y }}
    />
  );
}
