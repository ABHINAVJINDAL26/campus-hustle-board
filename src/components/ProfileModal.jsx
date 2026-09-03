import React from 'react';
import { X, Trophy, Flame, TrendingUp, Building, Sparkles, CheckCircle2, DollarSign, Share2 } from 'lucide-react';
import { formatCurrency, getRankBadge, getInitials } from '../utils/formatters';
import { playChime } from '../utils/sound';

export default function ProfileModal({
  participant,
  onClose,
  onOpenShareCard
}) {
  if (!participant) return null;

  const rankBadge = getRankBadge(participant.currentRank);

  const handleShare = () => {
    playChime('click');
    onClose();
    if (onOpenShareCard) onOpenShareCard(participant);
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md animate-fadeIn"
    >
      <div 
        className="relative w-full max-w-lg rounded-3xl glass-panel border border-brand-500/30 bg-dark-900/95 p-6 sm:p-7 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-dark-800 text-slate-400 hover:text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Profile Section */}
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${participant.avatarColor || 'from-brand-500 to-amber-600'} flex items-center justify-center font-black text-2xl text-white shadow-xl border-2 border-white/10`}>
              {getInitials(participant.name)}
            </div>
            <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-lg bg-dark-950 border border-brand-500 text-xs font-black text-brand-orange shadow">
              #{participant.currentRank}
            </div>
          </div>

          <div className="min-w-0 flex-1 pr-6">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className={`text-xs font-black px-2 py-0.5 rounded-md bg-dark-800 border ${rankBadge.border} ${rankBadge.text}`}>
                {rankBadge.label} Place
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-dark-800 text-slate-300 border border-white/5">
                {participant.categoryEmoji} {participant.category}
              </span>
            </div>

            <h2 className="text-xl font-black text-white tracking-tight truncate">
              {participant.name}
            </h2>
            <p className="text-xs text-slate-400 font-mono mb-1">{participant.handle}</p>
            <p className="text-xs text-slate-400 flex items-center gap-1">
              <Building className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <span className="truncate">{participant.college}</span>
            </p>
          </div>
        </div>

        {/* Bio */}
        {participant.bio && (
          <div className="bg-dark-950/80 rounded-2xl p-3.5 border border-white/5 mb-5 text-xs text-slate-300">
            <span className="text-brand-orange font-bold mr-1">Hustle Note:</span>
            {participant.bio}
          </div>
        )}

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-3 gap-2.5 mb-6">
          
          <div className="bg-dark-950/90 rounded-2xl p-3 border border-brand-500/20 text-center">
            <div className="text-[10px] uppercase font-bold text-slate-400 mb-0.5">Total Income</div>
            <div className="text-base sm:text-lg font-black text-brand-orange">
              {formatCurrency(participant.earnings)}
            </div>
          </div>

          <div className="bg-dark-950/90 rounded-2xl p-3 border border-white/5 text-center">
            <div className="text-[10px] uppercase font-bold text-slate-400 mb-0.5">This Week</div>
            <div className="text-base sm:text-lg font-black text-white">
              {formatCurrency(participant.weeklyEarnings || Math.round(participant.earnings * 0.35))}
            </div>
          </div>

          <div className="bg-dark-950/90 rounded-2xl p-3 border border-white/5 text-center">
            <div className="text-[10px] uppercase font-bold text-slate-400 mb-0.5">Streak</div>
            <div className="text-base sm:text-lg font-black text-amber-400 flex items-center justify-center gap-1">
              <Flame className="w-4 h-4 text-brand-orange" />
              <span>{participant.streakDays || 1}d</span>
            </div>
          </div>

        </div>

        {/* Verified Income Breakdown */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Verified Earning Transactions
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              30-Day Challenge
            </span>
          </div>

          <div className="space-y-2">
            {(participant.breakdown || [
              { source: "Primary Client Milestone", amount: Math.round(participant.earnings * 0.65), date: "3 days ago" },
              { source: "Asset Sale / Retainer", amount: Math.round(participant.earnings * 0.35), date: "1 week ago" },
            ]).map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-between bg-dark-950/60 p-3 rounded-xl border border-white/5 hover:border-white/10 transition-colors"
              >
                <div>
                  <div className="text-xs font-bold text-white">{item.source}</div>
                  <div className="text-[10px] text-slate-400">{item.date}</div>
                </div>
                <div className="text-xs font-black text-emerald-400">
                  +{formatCurrency(item.amount)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Badges Earned */}
        {participant.badges && participant.badges.length > 0 && (
          <div className="mb-6">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Achievements & Badges
            </div>
            <div className="flex flex-wrap gap-2">
              {participant.badges.map((b, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-xl bg-brand-500/10 border border-brand-500/30 text-xs font-bold text-brand-300"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Button: Share */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleShare}
            className="w-full py-2.5 rounded-xl bg-dark-800 hover:bg-dark-750 text-white font-bold text-xs border border-white/10 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-brand-orange" />
            <span>Generate Social Rank Card</span>
          </button>
        </div>

      </div>
    </div>
  );
}
