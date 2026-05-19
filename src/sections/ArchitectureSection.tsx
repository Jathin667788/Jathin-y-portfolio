import { motion } from 'framer-motion';
import { Activity, Network, Workflow } from 'lucide-react';
import { ArchitectureFlow } from '../components/visuals/ArchitectureFlow';
import { SectionHeader } from '../components/ui/SectionHeader';
import { fadeUp, staggerContainer, viewport } from '../utils/motion';

export function ArchitectureSection() {
  return (
    <section id="architecture" className="section-shell">
      <SectionHeader
        eyebrow="Architecture Showcase"
        title="Event-driven enterprise integration architecture with observable workflow boundaries."
        description="The flow models HTTP ingress, Azure Functions, queue-backed decoupling, Durable orchestration, transformation, partner exchange, and monitoring."
      />

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mx-auto mt-14 max-w-7xl">
        <ArchitectureFlow />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mx-auto mt-7 grid max-w-7xl gap-4 md:grid-cols-3"
      >
        {[
          { title: 'Distributed systems thinking', icon: Network, text: 'Decoupled processing lanes with resilient message boundaries and partner-facing reliability.' },
          { title: 'Event-driven workflows', icon: Workflow, text: 'Stateful orchestration for long-running execution, retries, correlation, and recovery.' },
          { title: 'Operational telemetry', icon: Activity, text: 'Monitoring and logging integrated into the architecture rather than treated as an afterthought.' },
        ].map((item) => (
          <motion.div key={item.title} variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
            <item.icon className="h-6 w-6 text-cyan-200" />
            <h3 className="mt-5 font-display text-xl font-bold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
