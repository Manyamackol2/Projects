import React, { useState, useEffect } from 'react';
import { getHabits } from '../utils/db';

export default function StreakTracker() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const fetchHabits = async () => {
      const all = await getHabits();
      setHabits(all);
    };
    fetchHabits();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto bg-[#e0f7fa] min-h-screen rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-[#01579b] mb-6 text-center">
        🔁 Streak Tracker
      </h2>

      {habits.length === 0 ? (
        <p className="text-center text-[#00796b]">No habits found. Start tracking now!</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {habits.map((habit) => (
            <li
              key={habit.id}
              className="bg-[#f0fdfa] p-4 rounded-xl shadow hover:shadow-md transition duration-200"
            >
              <h3 className="text-lg font-semibold text-[#004d40]">{habit.name}</h3>
              <p className="text-[#00796b] mt-2">
                🔥 Current Streak: <span className="font-bold">{habit.streak ?? 0}</span> days
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
