import React from 'react';
import { Search, Filter, Calendar, Building, Sparkles, X, ArrowDownUp } from 'lucide-react';
import { CATEGORIES, TIMEFRAMES, COLLEGES } from '../data/participants';
import { playChime } from '../utils/sound';

export default function Filters({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  activeTimeframe,
  onTimeframeChange,
  activeCollege,
  onCollegeChange,
  sortBy,
  onSortChange,
  onResetFilters,
  totalResults
}) {
  const isFiltered = searchQuery !== '' || activeCategory !== 'all' || activeTimeframe !== 'overall' || activeCollege !== 'All Colleges' || sortBy !== 'earnings';

  const handleCategoryClick = (id) => {
    playChime('click');
    onCategoryChange(id);
  };

  const handleReset = () => {
    playChime('click');
    onResetFilters();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 mb-6">
      <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-white/10 shadow-xl">
        
        {/* Top Row: Search & Timeframe & College */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-4">
          
          {/* Search Bar (Span 6 on desktop) */}
          <div className="sm:col-span-6 relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by student name, college, #rank, or handle..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-dark-950/90 border border-slate-700/60 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-white placeholder-slate-500 text-sm transition-all focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Timeframe Selector (Span 3) */}
          <div className="sm:col-span-3">
            <div className="relative">
              <select
                value={activeTimeframe}
                onChange={(e) => {
                  playChime('click');
                  onTimeframeChange(e.target.value);
                }}
                className="w-full px-3 py-2.5 rounded-xl bg-dark-950/90 border border-slate-700/60 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-white text-sm transition-all focus:outline-none cursor-pointer appearance-none"
              >
                {TIMEFRAMES.map((t) => (
                  <option key={t.id} value={t.id} className="bg-dark-900 text-slate-200">
                    {t.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400 text-xs">
                ▼
              </div>
            </div>
          </div>

          {/* College Filter (Span 3) */}
          <div className="sm:col-span-3">
            <div className="relative">
              <select
                value={activeCollege}
                onChange={(e) => {
                  playChime('click');
                  onCollegeChange(e.target.value);
                }}
                className="w-full px-3 py-2.5 rounded-xl bg-dark-950/90 border border-slate-700/60 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-white text-sm transition-all focus:outline-none cursor-pointer appearance-none truncate pr-7"
              >
                {COLLEGES.map((c) => (
                  <option key={c} value={c} className="bg-dark-900 text-slate-200">
                    {c}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400 text-xs">
                ▼
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row: Category Chips & Sort Toggle */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-white/5">
          
          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-brand-500 text-white shadow-md shadow-brand-500/25 border border-brand-400'
                      : 'bg-dark-850 text-slate-300 hover:text-white hover:bg-dark-800 border border-white/5'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Sort Options & Results Count */}
          <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
            
            {/* Sort Toggle */}
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <ArrowDownUp className="w-3.5 h-3.5 text-slate-400" />
              <span>Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => {
                  playChime('click');
                  onSortChange(e.target.value);
                }}
                className="bg-dark-900 text-slate-200 border border-slate-700/60 rounded-lg px-2 py-1 text-xs focus:outline-none cursor-pointer"
              >
                <option value="earnings">💰 Income High→Low</option>
                <option value="climbers">🚀 Fastest Climbers</option>
                <option value="streak">🔥 Longest Streak</option>
              </select>
            </div>

            {/* Reset Button (shown when filtered) */}
            {isFiltered && (
              <button
                onClick={handleReset}
                className="text-xs text-brand-400 hover:text-brand-300 font-semibold flex items-center gap-1 cursor-pointer transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}

            <span className="text-xs text-slate-500 font-mono">
              ({totalResults} {totalResults === 1 ? 'student' : 'students'})
            </span>

          </div>

        </div>

      </div>
    </div>
  );
}
