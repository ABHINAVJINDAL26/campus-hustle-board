import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Building2, Zap, ArrowUpRight, Activity } from 'lucide-react';
import { formatCurrency, formatNumber } from '../utils/formatters';

export default function HeroStats({
  totalEarnings,
  totalParticipants,
  topCollege,
  recentActivity
}) {
  const [activeActivityIndex, setActiveActivityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveActivityIndex(prev => (prev + 1) % recentActivity.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [recentActivity.length]);

  const currentActivity = recentActivity[activeActivityIndex] || recentActivity[0];

  return (
    <div className="relative pt-4 pb-2 sm:py-8 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[200px] sm:h-[250px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-10 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-amber-500/5 rounded-full blur-2xl pointer-events-none -z-10"></div>

      {/* Main Title Banner */}
      <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-8 px-3 sm:px-4">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-[11px] sm:text-xs font-semibold mb-2 sm:mb-3">
          <Zap className="w-3.5 h-3.5 text-brand-orange animate-pulse flex-shrink-0" />
          <span>Real-Time 30-Day Earnings Leaderboard</span>
        </div>
        
        <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-2 sm:mb-3">
          Compete. Earn. <span className="text-gradient-orange">Climb.</span>
        </h1>
        
        <p className="text-xs sm:text-base text-slate-400 max-w-xl mx-auto px-2">
          Track verified student earnings, discover top campus hustlers, and see what it takes to reach the next rank.
        </p>
      </div>

      {/* Live Activity Ticker */}
      <div className="max-w-2xl mx-auto px-3 sm:px-4 mb-5 sm:mb-8">
        <div className="glass-panel rounded-2xl p-2 sm:p-3 flex items-center justify-between gap-2 sm:gap-3 border border-brand-500/20 bg-dark-900/80 shadow-lg">
          <div className="flex items-center gap-2 min-w-0">
            <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-brand-500/20 text-brand-orange flex items-center justify-center">
              <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" />
            </div>
            <div className="min-w-0 text-[11px] sm:text-sm truncate">
              <span className="text-slate-400 mr-1 font-medium hidden xs:inline">PULSE:</span>
              <span className="text-white font-bold">{currentActivity.name}</span>
              <span className="text-slate-400 mx-1">earned</span>
              <span className="text-brand-400 font-extrabold">{formatCurrency(currentActivity.amount)}</span>
              <span className="text-slate-500 text-[11px] hidden md:inline ml-1">({currentActivity.hustle})</span>
            </div>
          </div>
          <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 bg-dark-800 px-1.5 sm:px-2 py-0.5 rounded-md flex-shrink-0 border border-white/5">
            {currentActivity.time}
          </span>
        </div>
      </div>

      {/* 4 Hero Stats Cards (2 cols on mobile, 4 cols on desktop) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 max-w-6xl mx-auto px-3 sm:px-4">
        
        {/* Stat 1: Total Student Earnings */}
        <div className="glass-panel rounded-2xl p-3 sm:p-5 border border-white/5 hover:border-brand-500/30 transition-all group">
          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">Total Earned</span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-brand-500/10 text-brand-orange flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="font-black text-xs sm:text-sm">₹</span>
            </div>
          </div>
          <div className="text-lg sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
            {formatCurrency(totalEarnings)}
          </div>
          <div className="flex items-center gap-1 mt-1 text-[10px] sm:text-[11px] text-emerald-400 font-semibold">
            <TrendingUp className="w-3 h-3 flex-shrink-0" />
            <span>+18.4% this week</span>
          </div>
        </div>

        {/* Stat 2: Active Student Hustlers */}
        <div className="glass-panel rounded-2xl p-3 sm:p-5 border border-white/5 hover:border-blue-500/30 transition-all group">
          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">Students</span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </div>
          <div className="text-lg sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
            {formatNumber(totalParticipants)} Hustlers
          </div>
          <div className="flex items-center gap-1 mt-1 text-[10px] sm:text-[11px] text-slate-400 font-medium truncate">
            <span>16+ Universities</span>
          </div>
        </div>

        {/* Stat 3: Top Performing Campus */}
        <div className="glass-panel rounded-2xl p-3 sm:p-5 border border-white/5 hover:border-purple-500/30 transition-all group">
          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">Top Campus</span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </div>
          <div className="text-xs sm:text-base lg:text-lg font-bold text-white tracking-tight truncate" title={topCollege}>
            {topCollege}
          </div>
          <div className="flex items-center gap-1 mt-1 text-[10px] sm:text-[11px] text-purple-400 font-semibold">
            <span>#1 in Total Income</span>
          </div>
        </div>

        {/* Stat 4: Average First Income */}
        <div className="glass-panel rounded-2xl p-3 sm:p-5 border border-white/5 hover:border-emerald-500/30 transition-all group">
          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">Avg Earnings</span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </div>
          <div className="text-lg sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
            {formatCurrency(Math.round(totalEarnings / (totalParticipants || 1)))}
          </div>
          <div className="flex items-center gap-1 mt-1 text-[10px] sm:text-[11px] text-emerald-400 font-semibold">
            <span>Per Participant</span>
          </div>
        </div>

      </div>

    </div>
  );
}
