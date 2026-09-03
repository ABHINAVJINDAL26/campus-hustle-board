import React from 'react';
import { Trophy, PlusCircle, Sparkles, UserCheck, Flame } from 'lucide-react';
import { playChime } from '../utils/sound';

export default function Navbar({
  currentUser,
  participants,
  onSelectUser,
  onOpenLogModal,
  onOpenShareCard
}) {
  const handleLogClick = () => {
    playChime('click');
    onOpenLogModal();
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-white/10 bg-dark-950/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Logo & Challenge Badge */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
          <div className="relative group flex items-center justify-center">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-brand-500 via-brand-orange to-brand-amber flex items-center justify-center shadow-lg shadow-brand-500/25 group-hover:scale-105 transition-transform">
              <span className="font-black text-lg sm:text-2xl text-white tracking-tighter">₹</span>
            </div>
            <div className="absolute -inset-1 bg-brand-500/20 rounded-xl blur-sm -z-10 group-hover:bg-brand-500/40 transition-all"></div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg sm:text-2xl font-black tracking-tight text-white flex items-center gap-1">
                EYFI <span className="text-gradient-orange text-base sm:text-xl font-bold">LEADERBOARD</span>
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-slate-400 font-medium hidden md:block">
              Earn Your First Income — 30-Day College Challenge
            </p>
          </div>
        </div>

        {/* Center Pill: Challenge Countdown (Tablet & Desktop) */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-850 border border-brand-500/20 text-xs font-semibold text-slate-300 shadow-inner flex-shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          <span className="text-brand-400 flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-brand-orange inline" /> Day 18 of 30
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">12 Days Left</span>
        </div>

        {/* Right Actions: Persona Switcher & Log Income */}
        <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
          
          {/* User Persona Switcher */}
          <div className="flex items-center gap-1 bg-dark-850/90 border border-slate-700/60 rounded-xl px-2 py-1.5 text-xs text-slate-300 max-w-[130px] xs:max-w-[160px] sm:max-w-none truncate">
            <UserCheck className="w-3.5 h-3.5 text-brand-400 hidden sm:inline flex-shrink-0" />
            <span className="text-slate-400 hidden lg:inline text-[11px] flex-shrink-0">View as:</span>
            <select
              value={currentUser.id}
              onChange={(e) => {
                playChime('click');
                const found = participants.find(p => p.id === Number(e.target.value));
                if (found) onSelectUser(found);
              }}
              className="bg-transparent text-white font-medium text-xs focus:outline-none cursor-pointer truncate"
            >
              {participants.map(p => (
                <option key={p.id} value={p.id} className="bg-dark-900 text-slate-200">
                  #{p.currentRank} {p.name.split(" ")[0]}
                </option>
              ))}
            </select>
          </div>

          {/* Log Income Button */}
          <button
            onClick={handleLogClick}
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-orange via-brand-500 to-amber-500 hover:from-brand-600 hover:to-amber-600 shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex-shrink-0"
          >
            <PlusCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Log Income</span>
            <span className="xs:hidden">+Log</span>
          </button>
        </div>

      </div>
    </header>
  );
}
