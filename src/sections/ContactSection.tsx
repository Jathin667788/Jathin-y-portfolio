import { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { contactLinks } from '../data/portfolio';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';
import { fadeUp, staggerContainer, viewport } from '../utils/motion';

export function ContactSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section id="contact" className="section-shell">
      <SectionHeader
        eyebrow="Contact"
        title="Open to backend, Azure, and enterprise integration engineering opportunities."
        description="Connect for roles involving cloud-native platforms, distributed systems, enterprise integrations, and reliability-focused backend engineering."
      />

      <div className="mx-auto mt-14 grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              variants={fadeUp}
              href={link.href}
              className="group rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5 shadow-glow backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/30"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                <link.icon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-sm font-bold uppercase text-slate-400">{link.label}</p>
              <p className="mt-2 break-words font-semibold text-white transition group-hover:text-cyan-100">{link.value}</p>
            </motion.a>
          ))}
        </motion.div>

        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-panel backdrop-blur-xl sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-bold text-slate-300">Name</span>
              <input className="mt-2 w-full rounded-2xl border border-white/10 bg-ink-950/55 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/45" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="text-sm font-bold text-slate-300">Email</span>
              <input type="email" className="mt-2 w-full rounded-2xl border border-white/10 bg-ink-950/55 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/45" placeholder="you@company.com" />
            </label>
          </div>
          <label className="mt-5 block">
            <span className="text-sm font-bold text-slate-300">Opportunity</span>
            <input className="mt-2 w-full rounded-2xl border border-white/10 bg-ink-950/55 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/45" placeholder="Azure integration engineer role" />
          </label>
          <label className="mt-5 block">
            <span className="text-sm font-bold text-slate-300">Message</span>
            <textarea rows={6} className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-ink-950/55 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/45" placeholder="Share the role, team, and engineering challenges." />
          </label>
          <div className="mt-7">
            <Button href="mailto:jathin.y@example.com" icon={Send}>
              Send Message
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
