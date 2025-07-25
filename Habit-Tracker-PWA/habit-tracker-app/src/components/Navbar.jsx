import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-cyan-200 shadow-md p-4 rounded-b-3xl">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-900">HabitFlow</h1>
        <div className="space-x-4">
          <Link to="/home" className="text-cyan-800 hover:text-cyan-600 font-medium">Home</Link>
          <Link to="/habit-manager" className="text-cyan-800 hover:text-cyan-600 font-medium">Habits</Link>
          <Link to="/streak-tracker" className="text-cyan-800 hover:text-cyan-600 font-medium">Streaks</Link>
          <Link to="/progress-analytics" className="text-cyan-800 hover:text-cyan-600 font-medium">Analytics</Link>
        </div>
      </div>
    </nav>
  );
}
