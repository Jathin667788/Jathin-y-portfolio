import { motion } from 'framer-motion';
import { aboutFeatures } from '../data/portfolio';
import { fadeUp, staggerContainer, viewport } from '../utils/motion';
import { GlassCard } from '../components/ui/GlassCard';
import { SectionHeader } from '../components/ui/SectionHeader';

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeader
          eyebrow="About"
          title="Building resilient cloud-native integration systems at enterprise scale."
          description="I'm a backend and cloud integration engineer focused on designing scalable enterprise systems using Azure, .NET, and distributed cloud architectures."
          align="left"
        />

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-panel backdrop-blur-xl sm:p-8">
          <p className="text-lg leading-8 text-slate-300">
            My work includes serverless orchestration systems, logistics automation platforms, EDI/XML integrations, high-throughput APIs, and cloud-native workflows processing millions of records in production environments.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {aboutFeatures.map((feature) => (
              <div key={feature.title} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-950/45 p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                  <feature.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-bold text-slate-100">{feature.title}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mx-auto mt-10 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {['Fault isolation', 'Observability', 'Idempotency', 'Secure RBAC', 'Retry strategy', 'Release reliability'].map((item) => (
          <GlassCard key={item} variants={fadeUp} className="p-5">
            <p className="text-sm font-semibold uppercase text-cyan-200">{item}</p>
          </GlassCard>
        ))}
      </motion.div>
    </section>
  );
}
