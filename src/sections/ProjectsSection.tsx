import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio';
import { fadeUp, staggerContainer, viewport } from '../utils/motion';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeader
        eyebrow="Featured Projects"
        title="Enterprise systems shaped around throughput, reliability, and operational clarity."
        description="Large-scale backend and integration work presented through the lens recruiters and engineering leaders care about: problem, architecture, scale, technology, and business impact."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mx-auto mt-14 grid max-w-7xl gap-7"
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-panel backdrop-blur-xl sm:p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 via-transparent to-plasma-500/10 opacity-80" />
            <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
              <div>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                      <project.icon className="h-7 w-7" />
                    </span>
                    <div>
                      <Badge tone={index % 2 === 0 ? 'cyan' : 'violet'}>Production System</Badge>
                      <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">{project.title}</h3>
                    </div>
                  </div>
                  <ArrowUpRight className="h-6 w-6 text-slate-500 transition group-hover:text-cyan-200" />
                </div>

                <p className="mt-6 text-base leading-8 text-slate-300">{project.description}</p>

                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-ink-950/40 p-5">
                    <p className="text-xs font-bold uppercase text-cyan-200">Problem solved</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{project.problem}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-ink-950/40 p-5">
                    <p className="text-xs font-bold uppercase text-emerald-200">Business impact</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{project.impact}</p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-ink-950/60 p-5">
                <div className="absolute inset-0 bg-grid-pattern bg-[length:36px_36px] opacity-25" />
                <div className="relative">
                  <div className="mb-6 flex items-center justify-between">
                    <p className="font-display text-lg font-bold text-white">Architecture Signals</p>
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(52,211,153,.8)]" />
                  </div>

                  <div className="space-y-3">
                    {project.metrics.map((metric, metricIndex) => (
                      <motion.div
                        key={metric}
                        className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: metricIndex * 0.08 }}
                      >
                        <p className="text-sm font-bold text-cyan-100">{metric}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-7 space-y-4">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div key={highlight} className="flex items-center gap-3">
                        <motion.span
                          className="h-2.5 w-2.5 rounded-full bg-plasma-400 shadow-[0_0_16px_rgba(167,139,250,.75)]"
                          animate={{ scale: [0.85, 1.3, 0.85], opacity: [0.55, 1, 0.55] }}
                          transition={{ duration: 2.2, delay: highlightIndex * 0.2, repeat: Infinity }}
                        />
                        <span className="text-sm font-semibold text-slate-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
