import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
     
      <motion.section
        className="flex-1 flex flex-col items-center justify-center text-center px-6 py-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold text-blue-900 mb-4">💪🏻 Habit Tracker</h1>
        <p className="text-blue-700 text-xl max-w-xl mb-6">
          Build better habits. Track your streaks. Stay motivated — even offline.
        </p>
        <Link
          to="/home"
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
        >
          🚀 Lets Get Tracking
        </Link>
      </motion.section>

      
      <motion.section
        className="bg-white py-12 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Features</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: '🔥', label: 'Streak Tracking' },
            { icon: '📈', label: 'Progress Analytics' },
            { icon: '📱', label: 'Installable PWA' },
            { icon: '✅', label: 'Mark Daily Completion' },
            { icon: '🧠', label: 'Motivational Stats' },
            { icon: '📶', label: 'Offline Support' }
          ].map(({ icon, label }, i) => (
            <motion.div
              key={i}
              className="bg-blue-100 text-blue-900 p-6 rounded-xl shadow hover:shadow-lg transition text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl mb-2">{icon}</div>
              <h3 className="font-semibold text-lg">{label}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      
      <footer className="text-center text-blue-600 text-sm py-6">
        Built with ❤️ by Manya | Offline-ready Habit Tracker PWA
      </footer>
    </div>
  );
}
