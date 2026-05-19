import { motion } from 'framer-motion';
import { CalendarCheck, FileDown, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';
import { fadeUp, viewport } from '../utils/motion';

export function ResumeSection() {
  return (
    <section id="resume" className="section-shell">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeader
          eyebrow="Resume"
          title="Recruiter-ready profile for Azure backend and integration roles."
          description="A concise resume artifact aligned to production systems, Azure specialization, integration throughput, and measurable delivery outcomes."
          align="left"
        />

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-panel backdrop-blur-xl sm:p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 via-transparent to-plasma-500/10" />
          <div className="relative">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <p className="font-display text-3xl font-bold text-white">Jathin Y</p>
                <p className="mt-2 text-base font-semibold text-cyan-200">Azure Backend & Integration Engineer</p>
              </div>
              <span className="grid h-16 w-16 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                <FileDown className="h-7 w-7" />
              </span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, label: 'Reliability mindset', value: 'MTTR reduction and resilient release practices' },
                { icon: CalendarCheck, label: 'Enterprise maturity', value: 'Backend ownership across production workflows' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-ink-950/45 p-5">
                  <item.icon className="h-5 w-5 text-cyan-200" />
                  <p className="mt-4 font-bold text-white">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/resume-jathin-y.md" icon={FileDown} download>
                Download Resume
              </Button>
              <Button href="#contact" variant="secondary">
                Start Conversation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
