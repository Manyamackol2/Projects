import React from 'react';
import WelcomeCats from "./assets/undraw_welcome-cats_tw36.svg";

const CoverPage = ({ onStart }) => {
  return (
   <section className="w-full h-screen bg-[#f3f5fc] flex items-center justify-center px-16">
  <div className="flex w-full max-w-7xl items-center justify-between gap-12">
    
    {/* Left side: Text */}
    <div className="flex-1 animate-fadeSlideUp">
      <h1 className="text-6xl font-bold text-purple-600 mb-4">
        <em className="not-italic font-semibold text-purple-700">
          RepoScape — Your GitHub Explorer 🚀
        </em>
      </h1>
      <p className="text-gray-600 text-lg mb-6">
        Dive into trending repositories, explore user profiles, and bookmark your favorites — all in one place.
      </p>
      <button 
        onClick={onStart}
        className="animate-glow bg-purple-500 text-white text-xl px-6 py-5 rounded-full shadow hover:bg-purple-600 transition-all"
      >
        🔍 Let’s Get Searching
      </button>
    </div>

    {/* Right side: Image */}
    <div className="flex-1 flex justify-center animate-bounceSlow fadeSlideLoop" style={{ animationDelay: '0.3s' }}>
      <img
        src={WelcomeCats}
        alt="Welcome Illustration"
        className="max-w-full h-auto object-contain"
      />
    </div>

  </div>
</section>

  );
};

export default CoverPage;
