import { AnimatePresence, motion } from 'framer-motion';

type LoadingScreenProps = {
  isLoading: boolean;
};

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-ink-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeOut' } }}
        >
          <div className="relative flex flex-col items-center gap-7">
            <div className="relative h-24 w-24">
              <motion.div
                className="absolute inset-0 rounded-3xl border border-cyan-300/30 bg-cyan-300/5"
                animate={{ rotate: 360 }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-4 rounded-2xl border border-plasma-400/40 bg-plasma-400/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
              />
              <div className="absolute inset-0 grid place-items-center font-display text-xl font-bold text-white">JY</div>
            </div>
            <div className="h-1 w-56 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-cyan-300 via-azure-500 to-plasma-500"
                animate={{ x: ['-100%', '220%'] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
