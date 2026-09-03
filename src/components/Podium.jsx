import React from 'react';
import { Crown, Sparkles, TrendingUp, ArrowUpRight, Award, Flame } from 'lucide-react';
import { formatCurrency, getInitials } from '../utils/formatters';
import { playChime } from '../utils/sound';

export default function Podium({ topThree, activeTimeframe, onSelectParticipant }) {
  if (!topThree || topThree.length === 0) return null;

  const first = topThree[0];
  const second = topThree[1];
  const third = topThree[2];

  const getEarningValue = (p) => {
    if (!p) return 0;
    if (activeTimeframe === 'weekly') return p.weeklyEarnings || 0;
    if (activeTimeframe === 'daily') return p.dailyEarnings || 0;
    return p.earnings;
  };

  const timeframeLabel = 
    activeTimeframe === 'weekly' ? 'Weekly Earnings' :
    activeTimeframe === 'daily' ? 'Today\'s Earnings' :
    'Total Earnings';

  const handleClick = (p) => {
    playChime('click');
    onSelectParticipant(p);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:py-10">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6 sm:mb-8">
        <div>
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-yellow-400" />
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Top Champions Podium
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Leading the leaderboard with verified client income ({timeframeLabel})
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Top Podium Spotlights</span>
        </div>
      </div>

      {/* Podium Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-end">
        
        {/* ================= 2ND PLACE (SILVER - LEFT ON DESKTOP) ================= */}
        {second && (
          <div 
            onClick={() => handleClick(second)}
            className="order-2 md:order-1 glass-panel rounded-3xl p-5 sm:p-6 border border-slate-400/30 hover:border-slate-300 relative group cursor-pointer transition-all hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-slate-400/10"
          >
            <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-slate-400 to-slate-200 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-1 shadow-md">
              <span>🥈 2nd Place</span>
            </div>

            <div className="flex flex-col items-center text-center mt-2">
              {/* Avatar */}
              <div className="relative mb-3">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${second.avatarColor || 'from-slate-400 to-slate-600'} flex items-center justify-center text-2xl font-black text-white shadow-lg border-2 border-slate-300/40 group-hover:scale-105 transition-transform`}>
                  {getInitials(second.name)}
                </div>
                <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-dark-900 border border-slate-400 flex items-center justify-center text-xs font-bold text-slate-200 shadow">
                  #{second.currentRank || 2}
                </div>
              </div>

              <h3 className="text-lg font-black text-white group-hover:text-slate-200 transition-colors">
                {second.name}
              </h3>
              <p className="text-xs text-slate-400 font-medium mb-2">{second.college}</p>

              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-dark-800 text-[11px] font-semibold text-slate-300 border border-white/5 mb-4">
                <span>{second.categoryEmoji}</span>
                <span>{second.category}</span>
              </span>

              {/* Earnings Pillar */}
              <div className="w-full bg-gradient-to-b from-slate-800/80 to-dark-900/90 rounded-2xl p-4 border border-slate-700/50">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                  {timeframeLabel}
                </div>
                <div className="text-2xl font-black text-white tracking-tight">
                  {formatCurrency(getEarningValue(second))}
                </div>
                
                <div className="flex items-center justify-center gap-1 mt-2 text-xs font-semibold text-emerald-400">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>↑ {second.rankChange} positions</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= 1ST PLACE (GOLD - CENTER / HIGHEST) ================= */}
        {first && (
          <div 
            onClick={() => handleClick(first)}
            className="order-1 md:order-2 glass-panel rounded-3xl p-6 sm:p-7 border-2 border-yellow-500/50 hover:border-yellow-400 relative group cursor-pointer transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/20 bg-gradient-to-b from-yellow-500/10 via-dark-850 to-dark-950"
          >
            {/* Top Gold Glow Crown */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-dark-950 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-xl shadow-yellow-500/30 animate-pulse-slow">
              <Crown className="w-4 h-4 fill-dark-950 text-dark-950" />
              <span>🥇 Grand Champion</span>
            </div>

            <div className="flex flex-col items-center text-center mt-3">
              {/* Avatar */}
              <div className="relative mb-3">
                <div className="absolute -inset-2 bg-yellow-400/25 rounded-3xl blur-md group-hover:bg-yellow-400/40 transition-all"></div>
                <div className={`relative w-24 h-24 rounded-3xl bg-gradient-to-br ${first.avatarColor || 'from-amber-400 to-yellow-600'} flex items-center justify-center text-3xl font-black text-white shadow-2xl border-4 border-yellow-400 group-hover:scale-105 transition-transform`}>
                  {getInitials(first.name)}
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 border-2 border-dark-950 flex items-center justify-center text-xs font-black text-dark-950 shadow-lg">
                  #{first.currentRank || 1}
                </div>
              </div>

              <h3 className="text-xl font-black text-white group-hover:text-yellow-300 transition-colors flex items-center gap-1">
                {first.name}
              </h3>
              <p className="text-xs text-slate-300 font-medium mb-2">{first.college}</p>

              <div className="flex flex-wrap items-center justify-center gap-1.5 mb-4">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-dark-800 text-xs font-semibold text-yellow-300 border border-yellow-500/30">
                  <span>{first.categoryEmoji}</span>
                  <span>{first.category}</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-500/20 text-[10px] font-bold text-yellow-400 border border-yellow-500/40">
                  <Flame className="w-3 h-3 text-brand-orange" />
                  <span>{first.streakDays || 1}d streak</span>
                </span>
              </div>

              {/* Earnings Pillar */}
              <div className="w-full bg-gradient-to-b from-yellow-500/20 via-dark-800 to-dark-900 rounded-2xl p-5 border border-yellow-500/40 shadow-inner">
                <div className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-1">
                  {timeframeLabel}
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight text-gradient-gold">
                  {formatCurrency(getEarningValue(first))}
                </div>
                
                <div className="flex items-center justify-center gap-1 mt-2 text-xs font-bold text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>↑ {first.rankChange} positions this week</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= 3RD PLACE (BRONZE - RIGHT ON DESKTOP) ================= */}
        {third && (
          <div 
            onClick={() => handleClick(third)}
            className="order-3 md:order-3 glass-panel rounded-3xl p-5 sm:p-6 border border-amber-700/40 hover:border-amber-600 relative group cursor-pointer transition-all hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-600/10"
          >
            <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 text-white font-black text-xs uppercase tracking-wider flex items-center gap-1 shadow-md">
              <span>🥉 3rd Place</span>
            </div>

            <div className="flex flex-col items-center text-center mt-2">
              {/* Avatar */}
              <div className="relative mb-3">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${third.avatarColor || 'from-amber-600 to-amber-800'} flex items-center justify-center text-2xl font-black text-white shadow-lg border-2 border-amber-600/40 group-hover:scale-105 transition-transform`}>
                  {getInitials(third.name)}
                </div>
                <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-dark-900 border border-amber-600 flex items-center justify-center text-xs font-bold text-amber-400 shadow">
                  #{third.currentRank || 3}
                </div>
              </div>

              <h3 className="text-lg font-black text-white group-hover:text-amber-300 transition-colors">
                {third.name}
              </h3>
              <p className="text-xs text-slate-400 font-medium mb-2">{third.college}</p>

              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-dark-800 text-[11px] font-semibold text-slate-300 border border-white/5 mb-4">
                <span>{third.categoryEmoji}</span>
                <span>{third.category}</span>
              </span>

              {/* Earnings Pillar */}
              <div className="w-full bg-gradient-to-b from-amber-950/40 to-dark-900/90 rounded-2xl p-4 border border-amber-800/40">
                <div className="text-[11px] font-bold text-amber-500 uppercase tracking-wider mb-0.5">
                  {timeframeLabel}
                </div>
                <div className="text-2xl font-black text-white tracking-tight">
                  {formatCurrency(getEarningValue(third))}
                </div>
                
                <div className="flex items-center justify-center gap-1 mt-2 text-xs font-semibold text-emerald-400">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>↑ {third.rankChange} positions</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
