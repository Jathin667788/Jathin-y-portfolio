const cells = Array.from({ length: 84 }, (_, index) => {
  const level = (index * 7 + index * index) % 5;
  return level;
});

const colors = ['bg-white/[0.06]', 'bg-cyan-300/20', 'bg-cyan-300/35', 'bg-azure-500/45', 'bg-plasma-500/55'];

export function GitHubGraph() {
  return (
    <div className="grid grid-flow-col grid-rows-7 gap-1 overflow-hidden" aria-label="Contribution activity graph">
      {cells.map((level, index) => (
        <span key={index} className={`h-3 w-3 rounded-[3px] ${colors[level]}`} />
      ))}
    </div>
  );
}
