import { motion } from 'framer-motion';
import { fadeUp, viewport } from '../../utils/motion';
import { Badge } from './Badge';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
};

export function SectionHeader({ eyebrow, title, description, align = 'center' }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <Badge tone="cyan">{eyebrow}</Badge>
      <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
    </motion.div>
  );
}
