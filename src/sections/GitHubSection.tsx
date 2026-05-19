import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { repositories } from '../data/portfolio';
import { GitHubGraph } from '../components/visuals/GitHubGraph';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { fadeUp, staggerContainer, viewport } from '../utils/motion';

export function GitHubSection() {
  return (
    <section id="github" className="section-shell">
      <SectionHeader
        eyebrow="GitHub / Activity"
        title="Developer activity presented with architecture-minded repository signals."
        description="A modern activity surface for cloud integration references, backend performance labs, and automation tooling."
      />

      <div className="mx-auto mt-14 grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-6 shadow-panel backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase text-cyan-200">Contribution graph</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-white">Consistent engineering cadence</h3>
            </div>
            <Github className="h-8 w-8 text-slate-400" />
          </div>
          <div className="mt-8 overflow-x-auto pb-2">
            <GitHubGraph />
          </div>
          <Button href="https://github.com/" icon={Github} variant="secondary" className="mt-8">
            View GitHub
          </Button>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="grid gap-4">
          {repositories.map((repo) => (
            <motion.article key={repo.name} variants={fadeUp} className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl transition hover:border-cyan-300/25">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-sm font-bold text-cyan-200">{repo.name}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{repo.description}</p>
                </div>
                <span className="rounded-full border border-plasma-400/25 bg-plasma-500/10 px-3 py-1 text-xs font-bold text-plasma-400">
                  {repo.signal}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {repo.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-ink-950/45 px-3 py-2 text-xs font-semibold text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
