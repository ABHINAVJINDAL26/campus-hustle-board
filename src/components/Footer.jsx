import React from 'react';
import { Heart, Trophy, Sparkles, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-dark-950/90 text-slate-400 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Brand & Purpose */}
        <div className="max-w-md">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-orange to-amber-500 flex items-center justify-center font-black text-white text-sm">
              ₹
            </div>
            <span className="text-base font-black text-white tracking-tight">
              EYFI <span className="text-brand-orange">CHALLENGE</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            "Don't just show the rank — motivate the participant to reach the next one."
            Designed for ambitious college students across India to earn their first income.
          </p>
        </div>

        {/* Challenge Stats Summary */}
        <div className="flex items-center gap-6 text-xs text-slate-400">
          <div>
            <div className="font-bold text-white">30-Day Sprint</div>
            <div className="text-[11px] text-slate-500">Live Campus Challenge</div>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div>
            <div className="font-bold text-brand-orange">₹5,00,000+</div>
            <div className="text-[11px] text-slate-500">Total Student Income</div>
          </div>
        </div>

        {/* Author Credits */}
        <div className="text-xs text-slate-400">
          <div className="flex items-center justify-center md:justify-end gap-1.5 text-slate-300 font-semibold mb-1">
            <span>Built by</span>
            <span className="text-white font-bold underline decoration-brand-500 underline-offset-4">
              Abhinav Jindal
            </span>
          </div>
          <p className="text-[11px] text-slate-500">
            B.Tech CSE — Lovely Professional University
          </p>
        </div>

      </div>
    </footer>
  );
}
