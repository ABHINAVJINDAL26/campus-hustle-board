import React from 'react';
import { TrendingUp, TrendingDown, Minus, Flame, Award, ChevronRight, User } from 'lucide-react';
import { formatCurrency, getRankBadge, getInitials } from '../utils/formatters';
import { playChime } from '../utils/sound';

export default function LeaderboardRow({
  participant,
  rank,
  isCurrentUser,
  activeTimeframe,
  onSelectParticipant
}) {
  const badgeInfo = getRankBadge(rank);

  const displayEarnings = 
    activeTimeframe === 'weekly' ? (participant.weeklyEarnings || 0) :
    activeTimeframe === 'daily' ? (participant.dailyEarnings || 0) :
    participant.earnings;

  const handleClick = () => {
    playChime('click');
    onSelectParticipant(participant);
  };

  return (
    <div
      onClick={handleClick}
      className={`group relative transition-all duration-200 cursor-pointer ${
        isCurrentUser
          ? 'bg-brand-500/15 border-2 border-brand-500/60 shadow-lg shadow-brand-500/10 rounded-2xl my-2'
          : 'hover:bg-dark-800/70 border-b border-white/5 last:border-0'
      }`}
    >
      {/* Active User Indicator Tag on Desktop */}
      {isCurrentUser && (
        <div className="absolute -top-2.5 right-4 px-2 py-0.5 rounded-full bg-brand-500 text-[10px] font-black uppercase text-white shadow">
          You
        </div>
      )}

      {/* ================= DESKTOP ROW ================= */}
      <div className="hidden sm:grid grid-cols-12 gap-4 items-center px-5 py-3.5">
        
        {/* Col 1-2: Rank */}
        <div className="col-span-2 flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm ${
            rank === 1 ? 'bg-yellow-400 text-dark-950 shadow-md shadow-yellow-500/30' :
            rank === 2 ? 'bg-slate-300 text-dark-950' :
            rank === 3 ? 'bg-amber-600 text-white' :
            isCurrentUser ? 'bg-brand-500 text-white font-bold' :
            'bg-dark-800 text-slate-400 border border-white/5'
          }`}>
            {rank <= 3 ? badgeInfo.icon : `#${rank}`}
          </div>

          {/* Movement */}
          <div className="flex items-center">
            {participant.rankChange > 0 ? (
              <span className="flex items-center text-xs font-bold text-emerald-400">
                <TrendingUp className="w-3.5 h-3.5 mr-0.5" />
                {participant.rankChange}
              </span>
            ) : participant.rankChange < 0 ? (
              <span className="flex items-center text-xs font-bold text-rose-400">
                <TrendingDown className="w-3.5 h-3.5 mr-0.5" />
                {Math.abs(participant.rankChange)}
              </span>
            ) : (
              <span className="flex items-center text-xs font-bold text-slate-500">
                <Minus className="w-3 h-3" />
              </span>
            )}
          </div>
        </div>

        {/* Col 3-6: Participant Name + College */}
        <div className="col-span-4 flex items-center gap-3 min-w-0">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${participant.avatarColor || 'from-brand-500 to-amber-600'} flex-shrink-0 flex items-center justify-center font-bold text-sm text-white shadow border border-white/10 group-hover:scale-105 transition-transform`}>
            {getInitials(participant.name)}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className={`font-bold text-sm truncate ${isCurrentUser ? 'text-brand-300 font-extrabold' : 'text-white group-hover:text-brand-400'} transition-colors`}>
                {participant.name}
              </span>
              {participant.streakDays >= 7 && (
                <span title={`${participant.streakDays} day earning streak`} className="flex-shrink-0 text-brand-orange text-xs">
                  🔥
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400 truncate">{participant.college}</p>
          </div>
        </div>

        {/* Col 7-8: Category & Badges */}
        <div className="col-span-3 flex items-center gap-1.5 flex-wrap">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-dark-850 text-xs font-medium text-slate-300 border border-white/5">
            <span>{participant.categoryEmoji}</span>
            <span>{participant.category}</span>
          </span>
          {participant.badges && participant.badges[0] && (
            <span className="hidden lg:inline-flex px-2 py-0.5 rounded-lg bg-dark-900 text-[10px] font-semibold text-slate-400 border border-white/5 truncate max-w-[110px]">
              {participant.badges[0]}
            </span>
          )}
        </div>

        {/* Col 9-12: Total Earnings + Action */}
        <div className="col-span-3 flex items-center justify-end gap-3">
          <div className="text-right">
            <div className="text-base font-black text-white tracking-tight group-hover:text-brand-orange transition-colors">
              {formatCurrency(displayEarnings)}
            </div>
            <div className="text-[10px] text-slate-400 font-medium">
              {activeTimeframe === 'overall' ? `+${formatCurrency(participant.weeklyEarnings || 0)} this wk` : `Total: ${formatCurrency(participant.earnings)}`}
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
        </div>

      </div>

      {/* ================= MOBILE CARD VIEW ================= */}
      <div className="sm:hidden p-4">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2.5">
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs ${
              rank === 1 ? 'bg-yellow-400 text-dark-950 font-bold' :
              rank === 2 ? 'bg-slate-300 text-dark-950 font-bold' :
              rank === 3 ? 'bg-amber-600 text-white font-bold' :
              isCurrentUser ? 'bg-brand-500 text-white font-bold' :
              'bg-dark-800 text-slate-400 border border-white/5'
            }`}>
              {rank <= 3 ? badgeInfo.icon : `#${rank}`}
            </div>

            <div className="flex items-center">
              {participant.rankChange > 0 ? (
                <span className="text-[11px] font-bold text-emerald-400 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-0.5" />
                  {participant.rankChange}
                </span>
              ) : participant.rankChange < 0 ? (
                <span className="text-[11px] font-bold text-rose-400 flex items-center">
                  <TrendingDown className="w-3 h-3 mr-0.5" />
                  {Math.abs(participant.rankChange)}
                </span>
              ) : (
                <span className="text-[11px] text-slate-500">—</span>
              )}
            </div>
          </div>

          {/* Earnings */}
          <div className="text-right">
            <div className="text-base font-black text-brand-orange">
              {formatCurrency(displayEarnings)}
            </div>
          </div>
        </div>

        {/* User Info Row */}
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${participant.avatarColor || 'from-brand-500 to-amber-600'} flex-shrink-0 flex items-center justify-center font-bold text-xs text-white`}>
            {getInitials(participant.name)}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-white truncate">
                {participant.name}
              </span>
              <span className="text-[11px] text-slate-400 bg-dark-900 px-2 py-0.5 rounded-md border border-white/5">
                {participant.categoryEmoji} {participant.category}
              </span>
            </div>
            <p className="text-xs text-slate-400 truncate">{participant.college}</p>
          </div>
        </div>

      </div>

    </div>
  );
}
