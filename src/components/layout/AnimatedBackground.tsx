import { motion } from 'framer-motion';

const particles = Array.from({ length: 26 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 19) % 100}%`,
  delay: (index % 8) * 0.4,
  duration: 7 + (index % 5),
}));

export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-900">
      <div className="absolute inset-0 bg-premium-radial" />
      <div className="absolute inset-0 bg-grid-pattern bg-[length:72px_72px] opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-azure-500/10 to-transparent" />
      <motion.div
        className="absolute left-[12%] top-[8%] h-72 w-72 rounded-full bg-azure-500/20 blur-3xl"
        animate={{ scale: [1, 1.16, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[10%] h-80 w-80 rounded-full bg-plasma-500/20 blur-3xl"
        animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-1 w-1 rounded-full bg-cyan-200/70 shadow-[0_0_18px_rgba(103,232,249,0.75)]"
          style={{ left: particle.left, top: particle.top }}
          animate={{ y: [-10, 18, -10], opacity: [0.25, 0.85, 0.25] }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
