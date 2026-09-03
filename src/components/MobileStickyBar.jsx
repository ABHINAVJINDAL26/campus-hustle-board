import React from 'react';
import { User, PlusCircle, TrendingUp, ChevronUp } from 'lucide-react';
import { formatCurrency, getInitials } from '../utils/formatters';
import { playChime } from '../utils/sound';

export default function MobileStickyBar({
  currentUser,
  nextUser,
  onOpenLogModal,
  onScrollToTop
}) {
  if (!currentUser) return null;

  const targetEarnings = nextUser ? nextUser.earnings : currentUser.earnings;
  const gap = Math.max(0, targetEarnings - currentUser.earnings);

  const handleLog = () => {
    playChime('click');
    onOpenLogModal();
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-2.5 bg-dark-950/95 backdrop-blur-xl border-t border-brand-500/30 shadow-2xl">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        
        {/* Left: Avatar & Rank */}
        <div 
          onClick={onScrollToTop}
          className="flex items-center gap-2 cursor-pointer min-w-0"
        >
          <div className="relative flex-shrink-0">
            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${currentUser.avatarColor || 'from-brand-500 to-amber-600'} flex items-center justify-center font-bold text-xs text-white shadow border border-white/10`}>
              {getInitials(currentUser.name)}
            </div>
            <div className="absolute -bottom-1 -right-1 px-1 py-0.2 rounded bg-dark-950 border border-brand-500 text-[9px] font-black text-brand-orange">
              #{currentUser.currentRank}
            </div>
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1 text-[11px] font-bold text-white truncate">
              <span className="truncate">{currentUser.name.split(" ")[0]}</span>
              {currentUser.rankChange > 0 && (
                <span className="text-[10px] text-emerald-400 font-extrabold flex items-center">
                  ↑{currentUser.rankChange}
                </span>
              )}
            </div>
            <div className="text-xs font-black text-brand-orange">
              {formatCurrency(currentUser.earnings)}
            </div>
          </div>
        </div>

        {/* Center: Gap info (if available) */}
        {nextUser && gap > 0 && (
          <div className="hidden xs:flex flex-col items-center text-center px-1">
            <span className="text-[9px] text-slate-400 uppercase font-semibold">To #{nextUser.currentRank}</span>
            <span className="text-[11px] font-bold text-slate-200">+{formatCurrency(gap)}</span>
          </div>
        )}

        {/* Right: Quick Action Button */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button
            onClick={handleLog}
            className="flex items-center gap-1 px-3 py-2 rounded-xl bg-gradient-to-r from-brand-orange to-amber-500 text-white font-extrabold text-xs shadow-md shadow-brand-500/20 active:scale-95 transition-transform cursor-pointer"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Boost</span>
          </button>

          <button
            onClick={onScrollToTop}
            className="w-8 h-8 rounded-xl bg-dark-850 text-slate-400 hover:text-white flex items-center justify-center border border-white/10 transition-colors"
            title="Scroll to Top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
