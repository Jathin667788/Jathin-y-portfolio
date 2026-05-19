import { motion } from 'framer-motion';
import { architectureNodes } from '../../data/portfolio';
import { cn } from '../../utils/cn';

const accentClasses = {
  cyan: 'border-cyan-300/35 bg-cyan-300/10 text-cyan-100 shadow-[0_0_34px_rgba(103,232,249,.16)]',
  azure: 'border-azure-500/35 bg-azure-500/10 text-azure-100 shadow-[0_0_34px_rgba(14,165,233,.18)]',
  violet: 'border-plasma-500/35 bg-plasma-500/10 text-plasma-400 shadow-[0_0_34px_rgba(139,92,246,.16)]',
  emerald: 'border-emerald-300/35 bg-emerald-300/10 text-emerald-100 shadow-[0_0_34px_rgba(52,211,153,.13)]',
  amber: 'border-amber-300/35 bg-amber-300/10 text-amber-100 shadow-[0_0_34px_rgba(245,158,11,.13)]',
};

export function ArchitectureFlow() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-panel backdrop-blur-xl sm:p-8">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:44px_44px] opacity-30" />
      <div className="absolute left-1/2 top-0 h-40 w-2/3 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative grid gap-5 md:grid-cols-7 md:items-stretch">
        {architectureNodes.map((node, index) => (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="relative"
          >
            {index < architectureNodes.length - 1 ? (
              <>
                <motion.div
                  aria-hidden="true"
                  className="absolute left-1/2 top-full h-5 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-300/70 to-transparent md:left-full md:top-1/2 md:h-px md:w-5 md:-translate-x-0 md:-translate-y-1/2 md:bg-gradient-to-r"
                  animate={{ opacity: [0.25, 1, 0.25] }}
                  transition={{ duration: 1.8, delay: index * 0.18, repeat: Infinity }}
                />
                <motion.span
                  aria-hidden="true"
                  className="absolute left-1/2 top-[calc(100%+10px)] h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,.8)] md:left-[calc(100%+10px)] md:top-1/2 md:-translate-y-1/2"
                  animate={{ scale: [0.8, 1.35, 0.8], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.8, delay: index * 0.18, repeat: Infinity }}
                />
              </>
            ) : null}

            <motion.div
              className={cn(
                'group flex min-h-36 flex-col items-center justify-center rounded-2xl border p-4 text-center transition duration-300 hover:-translate-y-1',
                accentClasses[node.accent as keyof typeof accentClasses],
              )}
              whileHover={{ scale: 1.03 }}
            >
              <motion.div
                className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.08]"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3.4, delay: index * 0.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <node.icon className="h-6 w-6" />
              </motion.div>
              <p className="mt-4 text-sm font-bold leading-5 text-white">{node.label}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
