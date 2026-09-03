export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num) {
  return new Intl.NumberFormat('en-IN').format(num);
}

export function getRankBadge(rank) {
  if (rank === 1) return { label: "1st", color: "from-yellow-400 to-amber-500", text: "text-yellow-400", border: "border-yellow-500/40", icon: "🥇" };
  if (rank === 2) return { label: "2nd", color: "from-slate-300 to-slate-400", text: "text-slate-300", border: "border-slate-400/40", icon: "🥈" };
  if (rank === 3) return { label: "3rd", color: "from-amber-600 to-amber-700", text: "text-amber-500", border: "border-amber-600/40", icon: "🥉" };
  return { label: `#${rank}`, color: "from-slate-700 to-slate-800", text: "text-slate-400", border: "border-slate-700/40", icon: `#${rank}` };
}

export function getInitials(name) {
  if (!name) return "EY";
  const parts = name.trim().split(" ");
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}
