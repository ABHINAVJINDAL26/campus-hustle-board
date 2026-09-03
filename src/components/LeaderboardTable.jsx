import React from 'react';
import LeaderboardRow from './LeaderboardRow';
import { Trophy, AlertCircle, ArrowDown } from 'lucide-react';

export default function LeaderboardTable({
  participants,
  currentUser,
  activeTimeframe,
  onSelectParticipant
}) {
  if (!participants || participants.length === 0) {
    return (
      <div className="max-w-5xl mx-auto px-4 my-8">
        <div className="glass-panel rounded-2xl p-12 text-center border border-white/10">
          <AlertCircle className="w-10 h-10 text-slate-500 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">No participants found</h3>
          <p className="text-sm text-slate-400">
            Try adjusting your search query, categories, or college filter.
          </p>
        </div>
      </div>
    );
  }

  const timeframeHeading = 
    activeTimeframe === 'weekly' ? 'Weekly Verified Income' :
    activeTimeframe === 'daily' ? 'Today\'s Verified Income' :
    'Total Verified Income';

  return (
    <div className="max-w-5xl mx-auto px-4 my-6">
      <div className="glass-panel rounded-3xl border border-white/10 shadow-2xl overflow-hidden bg-dark-900/90">
        
        {/* Table Header / Title */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-brand-orange" />
            <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight">
              Ranked Standings
            </h3>
            <span className="text-xs font-semibold text-slate-400 bg-dark-800 px-2.5 py-0.5 rounded-full border border-white/5">
              {participants.length} Active Hustlers
            </span>
          </div>

          <div className="text-xs text-slate-400 font-medium hidden sm:block">
            Sorted by {timeframeHeading} (₹)
          </div>
        </div>

        {/* Desktop Table Column Labels */}
        <div className="hidden sm:grid grid-cols-12 gap-4 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-400 bg-dark-950/60 border-b border-white/5">
          <div className="col-span-2">Rank & Move</div>
          <div className="col-span-4">Student & Campus</div>
          <div className="col-span-3">Hustle Category</div>
          <div className="col-span-3 text-right">{timeframeHeading}</div>
        </div>

        {/* Row List */}
        <div className="divide-y divide-white/5">
          {participants.map((participant) => (
            <LeaderboardRow
              key={participant.id}
              participant={participant}
              rank={participant.currentRank}
              isCurrentUser={currentUser && currentUser.id === participant.id}
              activeTimeframe={activeTimeframe}
              onSelectParticipant={onSelectParticipant}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
