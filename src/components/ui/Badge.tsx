import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

type BadgeProps = {
  children: ReactNode;
  tone?: 'azure' | 'violet' | 'cyan' | 'green' | 'amber';
  className?: string;
};

const tones = {
  azure: 'border-azure-500/30 bg-azure-500/10 text-azure-300',
  violet: 'border-plasma-500/30 bg-plasma-500/10 text-plasma-400',
  cyan: 'border-cyan-300/30 bg-cyan-300/10 text-cyan-200',
  green: 'border-emerald-300/30 bg-emerald-300/10 text-emerald-200',
  amber: 'border-amber-300/30 bg-amber-300/10 text-amber-200',
};

export function Badge({ children, tone = 'azure', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold leading-none',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
