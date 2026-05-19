import { motion } from 'framer-motion';
import { timeline } from '../data/portfolio';
import { fadeUp, staggerContainer, viewport } from '../utils/motion';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeader
        eyebrow="Experience"
        title="Engineering experience centered on cloud integration platforms and production reliability."
        description="A concise timeline focused on delivery outcomes, operational improvements, and enterprise backend responsibilities."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mx-auto mt-14 max-w-5xl"
      >
        <div className="relative border-l border-cyan-300/20 pl-6 sm:pl-10">
          {timeline.map((item) => (
            <motion.article key={item.role} variants={fadeUp} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[31px] top-2 h-4 w-4 rounded-full border border-cyan-200 bg-ink-900 shadow-[0_0_22px_rgba(103,232,249,.8)] sm:-left-[47px]" />
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-6 shadow-panel backdrop-blur-xl sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <Badge tone="azure">{item.period}</Badge>
                    <h3 className="mt-4 font-display text-2xl font-bold text-white">{item.role}</h3>
                    <p className="mt-2 text-base font-semibold text-cyan-200">{item.company}</p>
                  </div>
                </div>

                <div className="mt-7 grid gap-6 lg:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400">Focus</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.focus.map((focus) => (
                        <span key={focus} className="rounded-full border border-white/10 bg-ink-950/45 px-3 py-2 text-xs font-semibold text-slate-300">
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400">Achievements</p>
                    <ul className="mt-4 space-y-3">
                      {item.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-3 text-sm leading-6 text-slate-300">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(52,211,153,.75)]" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
