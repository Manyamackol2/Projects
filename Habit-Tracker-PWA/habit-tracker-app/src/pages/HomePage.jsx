import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <motion.div
      className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 space-y-6 text-center"
        initial={{ scale: 0.98, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h1 className="text-4xl font-bold text-blue-800">💪🏻 Habit Tracker</h1>
        <p className="text-blue-700 text-lg">
          Build healthy habits and keep track of your progress — even offline!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
         {[
  { to: '/habit-manager', label: '➕ Manage Habits' },
  { to: '/streak-tracker', label: '🔥 Track Streaks' },
  { to: '/progress-analytics', label: '📊 View Analytics' },
].map((link, i) => (
  <motion.div
    key={link.to}
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <Link
      to={link.to}
      className="block bg-cyan-200 hover:bg-cyan-300 text-blue-900 font-semibold py-3 px-4 rounded-xl shadow transition"
    >
      {link.label}
    </Link>
  </motion.div>
))}
</div>
        <footer className="text-sm text-cyan-700 mt-6">
          Your progress is safe — even when offline.
        </footer>
      </motion.div>
    </motion.div>
  );
}
