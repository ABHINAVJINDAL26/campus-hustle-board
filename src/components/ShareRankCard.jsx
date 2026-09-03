import React, { useState } from 'react';
import { X, Share2, Copy, Check, Sparkles, Flame, Trophy, ExternalLink } from 'lucide-react';
import { formatCurrency, getInitials } from '../utils/formatters';
import { playChime } from '../utils/sound';

export default function ShareRankCard({
  participant,
  onClose
}) {
  const [copied, setCopied] = useState(false);

  if (!participant) return null;

  const shareText = `🚀 I'm ranked #${participant.currentRank} on the EYFI 30-Day College Challenge leaderboard with ${formatCurrency(participant.earnings)} in verified earnings! Check out the leaderboard: https://eyfi.club/leaderboard`;

  const handleCopy = () => {
    playChime('success');
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/85 backdrop-blur-md animate-fadeIn"
    >
      <div 
        className="relative w-full max-w-sm rounded-3xl glass-panel border border-brand-500/40 bg-dark-900/95 p-6 shadow-2xl shadow-brand-500/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-dark-800 text-slate-400 hover:text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-orange flex items-center justify-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Shareable Milestone</span>
          </span>
          <h3 className="text-lg font-black text-white">Your EYFI Rank Card</h3>
        </div>

        {/* Social Card Graphic Preview */}
        <div className="relative rounded-2xl bg-gradient-to-br from-dark-950 via-dark-900 to-dark-850 p-6 border-2 border-brand-500/50 shadow-2xl overflow-hidden mb-5 text-center">
          
          {/* Ambient Glows */}
          <div className="absolute -top-10 -right-10 w-36 h-36 bg-brand-500/20 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-amber-500/15 rounded-full blur-2xl pointer-events-none"></div>

          {/* Top Logo */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-orange to-amber-500 flex items-center justify-center font-black text-white text-sm">
              ₹
            </div>
            <span className="text-xs font-black tracking-wider text-white">
              EYFI CHALLENGE
            </span>
          </div>

          {/* Avatar & Rank */}
          <div className="relative inline-block mb-3">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${participant.avatarColor || 'from-brand-500 to-amber-600'} flex items-center justify-center font-black text-xl text-white shadow-lg mx-auto border-2 border-white/20`}>
              {getInitials(participant.name)}
            </div>
            <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-dark-950 border border-brand-500 text-xs font-black text-brand-orange shadow">
              #{participant.currentRank}
            </div>
          </div>

          <h4 className="text-lg font-black text-white tracking-tight">
            {participant.name}
          </h4>
          <p className="text-[11px] text-slate-400 font-medium mb-3">{participant.college}</p>

          {/* Earnings Badge */}
          <div className="bg-dark-900/90 rounded-xl p-3 border border-brand-500/30 mb-3">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
              Verified 30-Day Income
            </div>
            <div className="text-2xl font-black text-brand-orange">
              {formatCurrency(participant.earnings)}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-[10px] font-semibold text-slate-400">
            <span className="px-2 py-0.5 rounded-full bg-dark-800 border border-white/5">
              {participant.categoryEmoji} {participant.category}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-dark-800 border border-white/5 text-amber-400">
              🔥 {participant.streakDays || 1}d streak
            </span>
          </div>

        </div>

        {/* Action Button: Copy */}
        <button
          onClick={handleCopy}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-orange via-brand-500 to-amber-500 hover:from-brand-600 hover:to-amber-600 text-white font-bold text-xs shadow-lg shadow-brand-500/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-white" />
              <span>Copied text to clipboard!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy Rank & Share to LinkedIn</span>
            </>
          )}
        </button>

      </div>
    </div>
  );
}
