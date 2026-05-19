import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { navItems } from '../../data/portfolio';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition duration-300',
        scrolled ? 'border-white/10 bg-ink-900/80 shadow-panel backdrop-blur-2xl' : 'border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Primary navigation">
        <a href="#hero" className="group flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/30 bg-white/[0.06] font-display text-sm font-bold text-white shadow-glow">
            JY
          </span>
          <span>
            <span className="block font-display text-sm font-bold text-white">Jathin Y</span>
            <span className="block text-xs font-medium text-slate-400">Azure Integration Engineer</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/resume-jathin-y.md" variant="secondary" download className="min-h-10 px-4 py-2">
            Resume
          </Button>
          <Button href="#contact" className="min-h-10 px-4 py-2">
            Contact
          </Button>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-ink-900/95 px-5 pb-5 backdrop-blur-xl lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
