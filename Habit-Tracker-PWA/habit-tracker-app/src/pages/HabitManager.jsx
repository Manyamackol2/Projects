import React, { useState, useEffect } from 'react';
import { addHabit, getHabits, deleteHabit, markHabitDone } from '../utils/db';
import { motion, AnimatePresence } from 'framer-motion';

export default function HabitManager() {
  const [name, setName] = useState('');
  const [habits, setHabits] = useState([]);

  const loadHabits = async () => {
    const all = await getHabits();
    setHabits(all);
  };

  useEffect(() => {
    loadHabits();
  }, []);

  const handleAdd = async () => {
    if (name.trim()) {
      await addHabit({ name, created: new Date().toISOString() });
      setName('');
      loadHabits();
    }
  };

  const handleDelete = async (id) => {
    await deleteHabit(id);
    loadHabits();
  };

  const handleMarkDone = async (id) => {
    await markHabitDone(id);
    loadHabits();
  };

  return (
    <motion.div
      className="p-6 max-w-xl mx-auto bg-blue-50 min-h-screen rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.h2
        className="text-2xl font-bold mb-6 text-blue-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        💪🏻 Habit Tracker
      </motion.h2>

      <div className="flex gap-2 mb-6">
        <input
          className="flex-1 border border-teal-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white text-blue-900"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a habit..."
        />
        <button
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-200"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      <ul className="space-y-4">
        <AnimatePresence>
          {habits.map((habit) => (
            <motion.li
              key={habit.id}
              className="flex justify-between items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <div className="font-semibold text-blue-800">{habit.name}</div>
                <div className="text-sm text-teal-600 mt-1">
                  🔥 Streak: {habit.streak ?? 0} days
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  className="text-teal-600 hover:text-teal-800 font-medium"
                  onClick={() => handleMarkDone(habit.id)}
                >
                  ✅ Done
                </button>
                <button
                  className="text-red-500 hover:text-red-700 font-medium"
                  onClick={() => handleDelete(habit.id)}
                >
                  ❌
                </button>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </motion.div>
  );
}
