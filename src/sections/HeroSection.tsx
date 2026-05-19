import { Blocks, FileDown, Mail, RadioTower } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroCloudVisual } from '../components/visuals/HeroCloudVisual';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { fadeUp, staggerContainer } from '../utils/motion';

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pb-28 lg:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <Badge tone="cyan" className="gap-2">
              <RadioTower className="h-3.5 w-3.5" />
              Cloud-native backend systems
            </Badge>
          </motion.div>

          <motion.h1 variants={fadeUp} className="mt-7 font-display text-5xl font-bold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
            Jathin Y
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 max-w-3xl font-display text-2xl font-semibold leading-tight text-gradient sm:text-3xl">
            Azure Backend & Integration Engineer
          </motion.p>

          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Designing scalable cloud-native systems, enterprise integrations, and high-throughput automation platforms on Microsoft Azure.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#projects" icon={Blocks}>
              View Projects
            </Button>
            <Button href="/resume-jathin-y.md" icon={FileDown} variant="secondary" download>
              Download Resume
            </Button>
            <Button href="#contact" icon={Mail} variant="ghost">
              Contact Me
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {['Azure Functions', 'Durable Workflows', 'EDI/XML', 'SQL Optimization'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200 backdrop-blur-xl">
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <HeroCloudVisual />
      </div>
    </section>
  );
}
