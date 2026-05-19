import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

type GlassCardProps = HTMLMotionProps<'div'> & {
  children: ReactNode;
  intensity?: 'soft' | 'strong';
};

export function GlassCard({ children, className, intensity = 'soft', ...props }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'relative overflow-hidden rounded-2xl border backdrop-blur-xl',
        intensity === 'strong'
          ? 'border-white/15 bg-white/[0.08] shadow-panel'
          : 'border-white/10 bg-white/[0.045] shadow-glow',
        'before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/[0.13] before:via-transparent before:to-transparent before:opacity-80',
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
