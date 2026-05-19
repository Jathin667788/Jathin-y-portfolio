import { motion } from 'framer-motion';
import { expertiseCategories } from '../data/portfolio';
import { fadeUp, staggerContainer, viewport } from '../utils/motion';
import { SectionHeader } from '../components/ui/SectionHeader';
import { GlassCard } from '../components/ui/GlassCard';
import { Badge } from '../components/ui/Badge';

export function ExpertiseSection() {
  return (
    <section id="expertise" className="section-shell">
      <SectionHeader
        eyebrow="Technical Expertise"
        title="Production-focused stack coverage across backend, Azure, integration, and delivery."
        description="A segmented view of the platforms, languages, and tools used to build reliable cloud-native services and enterprise automation systems."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {expertiseCategories.map((category) => (
          <GlassCard key={category.title} variants={fadeUp} whileHover={{ y: -8 }} className="group p-6">
            <div className="relative">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-azure-500/10 blur-2xl transition group-hover:bg-plasma-500/20" />
              <div className="flex items-start justify-between gap-5">
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                  <category.icon className="h-6 w-6" />
                </span>
                <Badge tone="violet">{category.grade}</Badge>
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-white">{category.title}</h3>
              <p className="mt-2 text-sm font-semibold uppercase text-cyan-200">{category.signal}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {category.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-white/10 bg-ink-950/55 px-3 py-2 text-xs font-semibold text-slate-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        ))}
      </motion.div>
    </section>
  );
}
