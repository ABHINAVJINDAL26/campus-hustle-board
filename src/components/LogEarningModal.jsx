import React, { useState } from 'react';
import { X, Plus, Sparkles, DollarSign, CheckCircle2, TrendingUp } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';
import { playChime } from '../utils/sound';

export default function LogEarningModal({
  isOpen,
  onClose,
  currentUser,
  onAddEarning
}) {
  const [amount, setAmount] = useState('1500');
  const [source, setSource] = useState('Freelance Web Design Gig');
  const [category, setCategory] = useState(currentUser ? currentUser.category : 'Build');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !currentUser) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const numAmount = Number(amount);
    if (!numAmount || numAmount <= 0) return;

    playChime('success');

    onAddEarning({
      userId: currentUser.id,
      amount: numAmount,
      source: source || 'New Client Earning',
      category: category
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  const presetAmounts = [500, 1000, 2500, 5000, 10000];

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md animate-fadeIn"
    >
      <div 
        className="relative w-full max-w-md rounded-3xl glass-panel border border-brand-500/30 bg-dark-900/95 p-6 sm:p-7 shadow-2xl shadow-brand-500/20"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-dark-800 text-slate-400 hover:text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center animate-scaleUp">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-white mb-1">Earning Verified & Added!</h3>
            <p className="text-sm text-slate-400 mb-2">
              +{formatCurrency(Number(amount))} added to {currentUser.name}
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Leaderboard Recalculated</span>
            </div>
          </div>
        ) : (
          <div>
            
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-orange border border-brand-500/40 flex items-center justify-center">
                <span className="font-black text-xl">₹</span>
              </div>
              <div>
                <h3 className="text-lg font-black text-white tracking-tight">
                  Simulate New Earning
                </h3>
                <p className="text-xs text-slate-400">
                  Boost {currentUser.name}'s rank in real time
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Preset Buttons */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Quick Amount Presets
                </label>
                <div className="flex flex-wrap gap-2">
                  {presetAmounts.map((amt) => (
                    <button
                      type="button"
                      key={amt}
                      onClick={() => {
                        playChime('click');
                        setAmount(String(amt));
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        Number(amount) === amt
                          ? 'bg-brand-500 text-white border border-brand-400 shadow-md shadow-brand-500/20'
                          : 'bg-dark-800 text-slate-300 hover:text-white border border-white/5'
                      }`}
                    >
                      +₹{amt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Earning Amount (₹)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 font-bold text-base">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    required
                    min="1"
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-dark-950 border border-slate-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-white font-bold text-base focus:outline-none"
                  />
                </div>
              </div>

              {/* Hustle Source */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Income Description / Gig
                </label>
                <input
                  type="text"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  placeholder="e.g. Sold Notion Template to 3 clients"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-white text-sm focus:outline-none"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-700 focus:border-brand-500 text-white text-sm focus:outline-none cursor-pointer"
                >
                  <option value="Build">💻 Build (Code / SaaS / Tech)</option>
                  <option value="Sell">🎨 Sell (Designs / Assets / Merch)</option>
                  <option value="Freelance">🧑‍💻 Freelance (Services / Dev / Content)</option>
                  <option value="Teach">📚 Teach (Mentorship / Cohorts)</option>
                  <option value="Perform">🎤 Perform (Audio / Music / Video)</option>
                </select>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-orange via-brand-500 to-amber-500 hover:from-brand-600 hover:to-amber-600 text-white font-extrabold text-sm shadow-lg shadow-brand-500/30 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer mt-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Verify & Boost Ranking (+{formatCurrency(Number(amount) || 0)})</span>
              </button>

            </form>

          </div>
        )}

      </div>
    </div>
  );
}
