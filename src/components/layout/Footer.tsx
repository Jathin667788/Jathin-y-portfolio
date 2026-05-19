import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950/80 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-white">Jathin Y</p>
          <p className="mt-1 text-sm text-slate-400">Azure Backend & Integration Engineer</p>
        </div>
        <p className="text-sm text-slate-500">Copyright 2026 Jathin Y. All rights reserved.</p>
        <div className="flex items-center gap-3">
          {[
            { icon: Linkedin, href: 'https://www.linkedin.com/', label: 'LinkedIn' },
            { icon: Github, href: 'https://github.com/', label: 'GitHub' },
            { icon: Mail, href: 'mailto:jathin.y@example.com', label: 'Email' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
            >
              <item.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
