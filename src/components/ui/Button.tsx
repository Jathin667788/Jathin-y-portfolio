import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

type ButtonProps = {
  href: string;
  children: ReactNode;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary' | 'ghost';
  download?: boolean;
  className?: string;
};

const variants = {
  primary:
    'border-azure-300/40 bg-gradient-to-r from-azure-500 via-cyan-400 to-plasma-500 text-white shadow-glow hover:shadow-purpleGlow',
  secondary:
    'border-white/15 bg-white/[0.07] text-slate-100 hover:border-cyan-300/40 hover:bg-white/[0.1]',
  ghost: 'border-white/10 bg-transparent text-slate-300 hover:border-white/25 hover:text-white',
};

export function Button({ href, children, icon: Icon, variant = 'primary', download, className }: ButtonProps) {
  return (
    <a
      href={href}
      download={download}
      className={cn(
        'group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-bold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300',
        variants[variant],
        className,
      )}
    >
      {Icon ? <Icon aria-hidden="true" className="h-4 w-4 transition duration-300 group-hover:scale-110" /> : null}
      <span>{children}</span>
    </a>
  );
}
