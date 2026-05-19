import { motion } from 'framer-motion';
import { certifications } from '../data/portfolio';
import { fadeUp, staggerContainer, viewport } from '../utils/motion';
import { SectionHeader } from '../components/ui/SectionHeader';

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-shell">
      <SectionHeader
        eyebrow="Certifications"
        title="Microsoft-aligned validation for Azure development and data analytics."
        description="Credentials that reinforce cloud engineering depth and analytical fluency for enterprise technology environments."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2"
      >
        {certifications.map((cert) => (
          <motion.article key={cert.code} variants={fadeUp} whileHover={{ y: -8 }} className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-7 shadow-panel backdrop-blur-xl">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-azure-500/20 blur-3xl" />
            <div className="relative flex items-start gap-5">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/20 to-azure-500/10 text-cyan-100">
                <cert.icon className="h-8 w-8" />
              </span>
              <div>
                <p className="text-sm font-bold uppercase text-cyan-200">{cert.issuer}</p>
                <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-white">{cert.title}</h3>
                <p className="mt-4 inline-flex rounded-full border border-white/10 bg-ink-950/45 px-3 py-2 text-sm font-bold text-slate-200">{cert.code}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
