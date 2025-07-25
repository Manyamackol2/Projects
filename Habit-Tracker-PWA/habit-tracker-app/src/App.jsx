import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HabitManager from './pages/HabitManager';
import StreakTracker from './pages/StreakTracker';
import ProgressAnalytics from './pages/ProgressAnalytics';
import NotFound from './pages/NotFound';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation(); 
  return (
    <>
      <Navbar />
      <div className="p-4">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={<PageWrapper><LandingPage /></PageWrapper>}
            />
            <Route
              path="/home"
              element={<PageWrapper><HomePage /></PageWrapper>}
            />
            <Route
              path="/habit-manager"
              element={<PageWrapper><HabitManager /></PageWrapper>}
            />
            <Route
              path="/streak-tracker"
              element={<PageWrapper><StreakTracker /></PageWrapper>}
            />
            <Route
              path="/progress-analytics"
              element={<PageWrapper><ProgressAnalytics /></PageWrapper>}
            />
            <Route
              path="*"
              element={<PageWrapper><NotFound /></PageWrapper>}
            />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}
