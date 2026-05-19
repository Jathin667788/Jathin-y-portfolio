import { motion } from 'framer-motion';
import { CloudCog, Database, LockKeyhole, RadioTower, ServerCog, Terminal, Workflow, Zap } from 'lucide-react';
import { Badge } from '../ui/Badge';

const floatingCards = [
  { label: 'Durable Functions', icon: Workflow, className: 'left-2 top-4 sm:left-0' },
  { label: 'Azure RBAC', icon: LockKeyhole, className: 'right-2 top-12 sm:right-0' },
  { label: 'Service Bus', icon: RadioTower, className: 'bottom-8 left-6 sm:left-2' },
];

const terminalLines = [
  'az functionapp deployment source config',
  'orchestrator.start(payloadBatch)',
  'servicebus.enqueue(partnerMessage)',
  'telemetry.flush({ status: "healthy" })',
];

export function HeroCloudVisual() {
  return (
    <div className="relative min-h-[520px]">
      <motion.div
        aria-hidden="true"
        className="absolute inset-8 rounded-full bg-gradient-to-r from-cyan-300/20 via-azure-500/20 to-plasma-500/20 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.72, 0.45] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {floatingCards.map((card, index) => (
        <motion.div
          key={card.label}
          className={`absolute z-20 hidden rounded-2xl border border-white/15 bg-white/[0.08] px-4 py-3 shadow-glow backdrop-blur-xl sm:flex ${card.className}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { delay: 0.4 + index * 0.14, duration: 0.6 },
            y: { delay: index * 0.5, duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <card.icon className="mr-3 h-5 w-5 text-cyan-200" />
          <span className="text-sm font-semibold text-white">{card.label}</span>
        </motion.div>
      ))}

      <motion.div
        className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/15 bg-ink-850/70 p-4 shadow-panel backdrop-blur-2xl"
        initial={{ opacity: 0, y: 40, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 via-transparent to-plasma-500/10" />
        <div className="relative rounded-[1.5rem] border border-white/10 bg-ink-950/75 p-5">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase text-cyan-200">Production cloud control plane</p>
              <p className="mt-1 font-display text-xl font-bold text-white">Azure Integration Mesh</p>
            </div>
            <Badge tone="green">Healthy</Badge>
          </div>

          <div className="relative grid grid-cols-3 gap-3 sm:gap-4">
            <div className="absolute left-[16%] right-[16%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-cyan-300/0 via-cyan-300/70 to-cyan-300/0" />
            {[
              { label: 'Trigger', icon: Zap, tone: 'from-cyan-300/25 to-cyan-300/5' },
              { label: 'Function', icon: CloudCog, tone: 'from-azure-500/25 to-azure-500/5' },
              { label: 'Storage', icon: Database, tone: 'from-plasma-500/25 to-plasma-500/5' },
              { label: 'Queue', icon: ServerCog, tone: 'from-cyan-300/20 to-cyan-300/5' },
              { label: 'Orchestrate', icon: Workflow, tone: 'from-plasma-500/25 to-plasma-500/5' },
              { label: 'Monitor', icon: RadioTower, tone: 'from-emerald-300/20 to-emerald-300/5' },
            ].map((node, index) => (
              <motion.div
                key={node.label}
                className={`relative z-10 rounded-2xl border border-white/10 bg-gradient-to-br ${node.tone} p-4 text-center`}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <motion.div
                  className="mx-auto grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.08] text-cyan-100"
                  animate={{ boxShadow: ['0 0 0 rgba(34,211,238,0)', '0 0 28px rgba(34,211,238,.32)', '0 0 0 rgba(34,211,238,0)'] }}
                  transition={{ duration: 3, delay: index * 0.25, repeat: Infinity }}
                >
                  <node.icon className="h-5 w-5" />
                </motion.div>
                <p className="mt-3 text-xs font-bold text-slate-100">{node.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-black/35 p-4">
            <div className="mb-4 flex items-center gap-2 text-slate-400">
              <Terminal className="h-4 w-4 text-cyan-200" />
              <span className="text-xs font-semibold">deploy.pipeline</span>
            </div>
            <div className="space-y-2 font-mono text-xs text-slate-300">
              {terminalLines.map((line, index) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.18 }}
                >
                  <span className="text-emerald-300">$</span> {line}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
