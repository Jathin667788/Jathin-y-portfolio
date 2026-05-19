import { motion } from 'framer-motion';
import { metrics } from '../data/portfolio';
import { fadeUp, staggerContainer, viewport } from '../utils/motion';
import { GlassCard } from '../components/ui/GlassCard';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';

export function MetricsSection() {
  return (
    <section id="metrics" className="px-5 py-10 sm:px-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {metrics.map((metric) => (
          <GlassCard
            key={metric.label}
            variants={fadeUp}
            whileHover={{ y: -8, scale: 1.01 }}
            className="group p-6"
          >
            <div className="relative">
              <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-cyan-300/10 blur-2xl transition group-hover:bg-plasma-500/20" />
              <p className="font-display text-4xl font-bold text-white">
                <AnimatedCounter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
              </p>
              <h3 className="mt-4 text-base font-bold text-slate-100">{metric.label}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{metric.detail}</p>
            </div>
          </GlassCard>
        ))}
      </motion.div>
    </section>
  );
}
