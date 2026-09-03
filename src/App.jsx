import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { INITIAL_PARTICIPANTS, RECENT_ACTIVITY_FEED } from './data/participants';
import Navbar from './components/Navbar';
import HeroStats from './components/HeroStats';
import Podium from './components/Podium';
import YourRankCard from './components/YourRankCard';
import Filters from './components/Filters';
import LeaderboardTable from './components/LeaderboardTable';
import LogEarningModal from './components/LogEarningModal';
import ProfileModal from './components/ProfileModal';
import ShareRankCard from './components/ShareRankCard';
import MobileStickyBar from './components/MobileStickyBar';
import Footer from './components/Footer';
import { playChime } from './utils/sound';

export default function App() {
  // State: List of participants
  const [participants, setParticipants] = useState(INITIAL_PARTICIPANTS);
  
  // State: Current active user persona (Default: Shreya Iyer #18 or customizable)
  const [currentUserId, setCurrentUserId] = useState(18);

  // State: Search & Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTimeframe, setActiveTimeframe] = useState('overall');
  const [activeCollege, setActiveCollege] = useState('All Colleges');
  const [sortBy, setSortBy] = useState('earnings');

  // State: Modals
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [shareCardParticipant, setShareCardParticipant] = useState(null);

  // State: Live activity feed
  const [recentActivity, setRecentActivity] = useState(RECENT_ACTIVITY_FEED);

  // Calculate sorted & ranked list
  const rankedParticipants = useMemo(() => {
    // 1. Sort by timeframe earnings or selected sort mode
    const sorted = [...participants].sort((a, b) => {
      if (sortBy === 'climbers') {
        return (b.rankChange || 0) - (a.rankChange || 0);
      }
      if (sortBy === 'streak') {
        return (b.streakDays || 0) - (a.streakDays || 0);
      }

      // Default: Earnings based on timeframe
      if (activeTimeframe === 'weekly') {
        return (b.weeklyEarnings || 0) - (a.weeklyEarnings || 0);
      }
      if (activeTimeframe === 'daily') {
        return (b.dailyEarnings || 0) - (a.dailyEarnings || 0);
      }
      return b.earnings - a.earnings;
    });

    // 2. Assign dynamic currentRank
    return sorted.map((p, index) => ({
      ...p,
      currentRank: index + 1,
    }));
  }, [participants, activeTimeframe, sortBy]);

  // Current User Object
  const currentUser = useMemo(() => {
    return rankedParticipants.find(p => p.id === currentUserId) || rankedParticipants[0];
  }, [rankedParticipants, currentUserId]);

  // Next User directly above Current User (for Next Rank Target)
  const nextUser = useMemo(() => {
    if (!currentUser || currentUser.currentRank <= 1) return null;
    return rankedParticipants.find(p => p.currentRank === currentUser.currentRank - 1);
  }, [rankedParticipants, currentUser]);

  // Filtered List (for Table & Search)
  const filteredParticipants = useMemo(() => {
    return rankedParticipants.filter((p) => {
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const cleanRankQuery = q.replace('#', '');
        const isRankMatch = !isNaN(cleanRankQuery) && cleanRankQuery !== '' && p.currentRank === Number(cleanRankQuery);
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesCollege = p.college.toLowerCase().includes(q);
        const matchesHandle = p.handle.toLowerCase().includes(q);
        const matchesCategory = p.category.toLowerCase().includes(q);
        
        if (!isRankMatch && !matchesName && !matchesCollege && !matchesHandle && !matchesCategory) {
          return false;
        }
      }

      // Category filter
      if (activeCategory !== 'all' && p.category !== activeCategory) {
        return false;
      }

      // College filter
      if (activeCollege !== 'All Colleges' && p.college !== activeCollege) {
        return false;
      }

      return true;
    });
  }, [rankedParticipants, searchQuery, activeCategory, activeCollege]);

  // Top 3 for Podium
  const topThree = useMemo(() => {
    const source = (filteredParticipants.length > 0) ? filteredParticipants : rankedParticipants;
    return [source[0], source[1], source[2]].filter(Boolean);
  }, [filteredParticipants, rankedParticipants]);

  // Aggregated Stats
  const totalEarnings = useMemo(() => {
    return participants.reduce((sum, p) => sum + p.earnings, 0);
  }, [participants]);

  // Trigger celebration confetti
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF5E14', '#FFA133', '#FACC15', '#10B981', '#6366F1']
      });
    } catch (e) {
      console.log('Confetti effect triggered');
    }
  };

  // Handler: Add Earning to user
  const handleAddEarning = ({ userId, amount, source, category }) => {
    setParticipants(prev => {
      return prev.map(p => {
        if (p.id === userId) {
          const newEarnings = p.earnings + amount;
          const newWeekly = (p.weeklyEarnings || 0) + amount;
          const newDaily = (p.dailyEarnings || 0) + amount;
          const newBreakdown = [
            { source, amount, date: 'Just now' },
            ...(p.breakdown || [])
          ];
          return {
            ...p,
            earnings: newEarnings,
            weeklyEarnings: newWeekly,
            dailyEarnings: newDaily,
            category: category || p.category,
            breakdown: newBreakdown,
            streakDays: (p.streakDays || 1) + 1,
            rankChange: (p.rankChange || 0) + 1
          };
        }
        return p;
      });
    });

    // Add to live activity feed
    const targetUser = participants.find(p => p.id === userId);
    if (targetUser) {
      setRecentActivity(prev => [
        { name: targetUser.name, amount, hustle: source, time: 'Just now' },
        ...prev.slice(0, 5)
      ]);
    }

    // Celebrate with confetti
    triggerConfetti();
  };

  // Reset filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
    setActiveTimeframe('overall');
    setActiveCollege('All Colleges');
    setSortBy('earnings');
  };

  const handleScrollToTop = () => {
    playChime('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col selection:bg-brand-orange selection:text-white">
      
      {/* 1. Navbar */}
      <Navbar
        currentUser={currentUser}
        participants={rankedParticipants}
        onSelectUser={(u) => {
          playChime('click');
          setCurrentUserId(u.id);
        }}
        onOpenLogModal={() => {
          playChime('click');
          setIsLogModalOpen(true);
        }}
        onOpenShareCard={() => {
          playChime('click');
          setShareCardParticipant(currentUser);
        }}
      />

      {/* Main Content Container with bottom padding for mobile sticky bar */}
      <main className="flex-1 pb-16 md:pb-0">
        
        {/* 2. Hero Section with Live Pulse & Stats */}
        <HeroStats
          totalEarnings={totalEarnings}
          totalParticipants={participants.length}
          topCollege="Lovely Professional University"
          recentActivity={recentActivity}
        />

        {/* 3. Top 3 Podium Champions */}
        <Podium
          topThree={topThree}
          activeTimeframe={activeTimeframe}
          onSelectParticipant={(p) => setSelectedProfile(p)}
        />

        {/* 4. "Your Rank" Focus & Next Rank Progress Goal */}
        <YourRankCard
          currentUser={currentUser}
          nextUser={nextUser}
          onOpenLogModal={() => setIsLogModalOpen(true)}
          onOpenShareCard={() => setShareCardParticipant(currentUser)}
          onViewProfile={(p) => setSelectedProfile(p)}
        />

        {/* 5. Filters, Search Bar, and Categories */}
        <Filters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          activeTimeframe={activeTimeframe}
          onTimeframeChange={setActiveTimeframe}
          activeCollege={activeCollege}
          onCollegeChange={setActiveCollege}
          sortBy={sortBy}
          onSortChange={setSortBy}
          onResetFilters={handleResetFilters}
          totalResults={filteredParticipants.length}
        />

        {/* 6. Ranked Leaderboard Table & Rows */}
        <LeaderboardTable
          participants={filteredParticipants}
          currentUser={currentUser}
          activeTimeframe={activeTimeframe}
          onSelectParticipant={(p) => setSelectedProfile(p)}
        />

      </main>

      {/* 7. Footer */}
      <Footer />

      {/* 8. Mobile Sticky Bottom Bar (Active on Mobile Screens) */}
      <MobileStickyBar
        currentUser={currentUser}
        nextUser={nextUser}
        onOpenLogModal={() => setIsLogModalOpen(true)}
        onScrollToTop={handleScrollToTop}
      />

      {/* Interactive Modal 1: Log Earning Simulation */}
      <LogEarningModal
        isOpen={isLogModalOpen}
        onClose={() => setIsLogModalOpen(false)}
        currentUser={currentUser}
        onAddEarning={handleAddEarning}
      />

      {/* Interactive Modal 2: Participant Profile & Transactions */}
      <ProfileModal
        participant={selectedProfile}
        onClose={() => setSelectedProfile(null)}
        onOpenShareCard={(p) => setShareCardParticipant(p)}
      />

      {/* Interactive Modal 3: Shareable Rank Card Preview */}
      <ShareRankCard
        participant={shareCardParticipant}
        onClose={() => setShareCardParticipant(null)}
      />

    </div>
  );
}
