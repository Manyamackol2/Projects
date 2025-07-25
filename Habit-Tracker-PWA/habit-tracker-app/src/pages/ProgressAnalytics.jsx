import React, { useEffect, useState } from 'react';
import { getHabits } from '../utils/db';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

export default function ProgressAnalytics() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const fetchHabits = async () => {
      const all = await getHabits();
      setHabits(all);
    };
    fetchHabits();
  }, []);

  const barData = {
    labels: habits.map((h) => h.name),
    datasets: [
      {
        label: 'Streak (days)',
        data: habits.map((h) => h.streak ?? 0),
        backgroundColor: 'rgba(34, 211, 238, 0.6)', 
        borderColor: 'rgba(14, 165, 233, 1)', 
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: habits.map((h) => h.name),
    datasets: [
      {
        label: 'Streak Share',
        data: habits.map((h) => h.streak ?? 0),
        backgroundColor: [
          '#a5f3fc', 
          '#67e8f9', 
          '#22d3ee', 
          '#06b6d4', 
          '#0891b2', 
        ],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-cyan-50 min-h-screen rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-cyan-800 mb-6 text-center">
        📊 Progress Analytics
      </h2>

      {habits.length === 0 ? (
        <p className="text-center text-cyan-700">No data available to analyze yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition duration-200">
            <h3 className="text-lg font-semibold text-cyan-700 mb-2">Streak Bar Chart</h3>
            <Bar data={barData} />
          </div>

          <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition duration-200">
            <h3 className="text-lg font-semibold text-cyan-700 mb-2">Streak Share Pie</h3>
            <Pie data={pieData} />
          </div>
        </div>
      )}
    </div>
  );
}
