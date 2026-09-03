import React from 'react';
import { User, TrendingUp, TrendingDown, Minus, Target, Sparkles, Share2, PlusCircle, Award } from 'lucide-react';
import { formatCurrency, getInitials } from '../utils/formatters';
import { playChime } from '../utils/sound';

export default function YourRankCard({
  currentUser,
  nextUser,
  onOpenLogModal,
  onOpenShareCard,
  onViewProfile
}) {
  if (!currentUser) return null;

  // Calculate gap to next rank
  const targetEarnings = nextUser ? nextUser.earnings : currentUser.earnings;
  const gap = Math.max(0, targetEarnings - currentUser.earnings);
  
  // Progress calculation
  let progressPercent = 100;
  if (nextUser && gap > 0) {
    const currentBase = currentUser.earnings;
    progressPercent = Math.min(99, Math.max(15, Math.round((currentBase / targetEarnings) * 100)));
  }

  const isTop1 = currentUser.currentRank === 1;

  const handleLogClick = () => {
    playChime('click');
    onOpenLogModal();
  };

  const handleShareClick = () => {
    playChime('click');
    onOpenShareCard();
  };

  const handleProfileClick = () => {
    playChime('click');
    onViewProfile(currentUser);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 my-6 sm:my-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border-2 border-brand-500/40 shadow-2xl shadow-brand-500/10 p-5 sm:p-7">
        
        {/* Glowing aura */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none -z-0"></div>
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
          
          {/* Left: User Profile & Rank */}
          <div className="flex items-center gap-4 sm:gap-5">
            
            {/* Avatar & Rank Number */}
            <div className="relative flex-shrink-0">
              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${currentUser.avatarColor || 'from-brand-500 to-amber-600'} flex items-center justify-center text-xl sm:text-2xl font-black text-white shadow-xl border-2 border-brand-500/50`}>
                {getInitials(currentUser.name)}
              </div>
              <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-lg bg-dark-950 border border-brand-500 text-xs font-black text-brand-orange shadow">
                #{currentUser.currentRank}
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-md bg-brand-500/20 border border-brand-500/40 text-[11px] font-bold text-brand-400 uppercase tracking-wider flex items-center gap-1">
                  <User className="w-3 h-3" />
                  <span>YOUR RANKING</span>
                </span>
                {currentUser.badges && currentUser.badges[0] && (
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-dark-800 text-[10px] font-semibold text-slate-300 border border-white/5">
                    {currentUser.badges[0]}
                  </span>
                )}
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                {currentUser.name}
                <span className="text-xs text-slate-400 font-normal">({currentUser.handle})</span>
              </h2>
              
              <p className="text-xs text-slate-400 font-medium">{currentUser.college}</p>

              {/* Weekly Jump Indicator */}
              <div className="flex items-center gap-2 mt-2">
                {currentUser.rankChange > 0 ? (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>↑ {currentUser.rankChange} positions this week</span>
                  </span>
                ) : currentUser.rankChange < 0 ? (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-md border border-rose-500/20">
                    <TrendingDown className="w-3.5 h-3.5" />
                    <span>↓ {Math.abs(currentUser.rankChange)} positions this week</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded-md">
                    <Minus className="w-3.5 h-3.5" />
                    <span>No rank change</span>
                  </span>
                )}
              </div>
            </div>

          </div>

          {/* Center: Earnings Display */}
          <div className="lg:border-l lg:border-r border-white/10 lg:px-8 py-2 flex flex-col justify-center">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              Your Total Income
            </div>
            <div className="text-3xl sm:text-4xl font-black text-brand-orange tracking-tight">
              {formatCurrency(currentUser.earnings)}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Hustle: <span className="text-white font-semibold">{currentUser.categoryEmoji} {currentUser.category}</span>
            </div>
          </div>

          {/* Right: Next Rank Goal & Progress */}
          <div className="flex-1 lg:max-w-xs flex flex-col justify-center">
            {isTop1 ? (
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-4 text-center">
                <div className="text-yellow-400 font-black text-sm flex items-center justify-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>You're in 1st Place!</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Keep maintaining your streak to retain the champion title!
                </p>
              </div>
            ) : nextUser ? (
              <div className="bg-dark-950/80 rounded-2xl p-4 border border-brand-500/20">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-slate-300 flex items-center gap-1">
                    <Target className="w-3.5 h-3.5 text-brand-orange" />
                    Target: #{nextUser.currentRank} {nextUser.name.split(" ")[0]}
                  </span>
                  <span className="font-extrabold text-brand-400">{progressPercent}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2.5 bg-dark-800 rounded-full overflow-hidden border border-white/5 mb-2">
                  <div 
                    className="h-full bg-gradient-to-r from-brand-orange to-amber-400 rounded-full transition-all duration-700 ease-out shadow-lg"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>

                <p className="text-xs text-slate-300 font-semibold">
                  <span className="text-brand-orange font-bold">{formatCurrency(gap > 0 ? gap : 100)} more</span> to reach <span className="text-white font-bold">#{nextUser.currentRank}</span>
                </p>
              </div>
            ) : null}

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-2 mt-3">
              <button
                onClick={handleLogClick}
                className="flex-1 py-2 px-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-brand-500/20 transition-all cursor-pointer"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Simulate Income</span>
              </button>
              
              <button
                onClick={handleProfileClick}
                className="py-2 px-3 rounded-xl bg-dark-800 hover:bg-dark-750 text-slate-300 hover:text-white font-semibold text-xs border border-white/10 transition-colors cursor-pointer"
                title="View Full Profile"
              >
                Profile
              </button>

              <button
                onClick={handleShareClick}
                className="py-2 px-3 rounded-xl bg-dark-800 hover:bg-dark-750 text-slate-300 hover:text-white font-semibold text-xs border border-white/10 transition-colors cursor-pointer"
                title="Share Rank Card"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
