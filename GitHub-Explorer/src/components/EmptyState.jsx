import React from "react";
import undraw_people_search from "../assets/undraw_people-search_xpq4.svg";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full max-w-2xl mx-auto mt-12 mb-10 px-4 animate-fadeUp">
      <img
        src={undraw_people_search}
        alt="People Illustration"
        className="animate-bounceSlow w-72 h-auto mb-6"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">👋 Welcome Explorer!</h2>
      <p className="text-gray-600 text-lg">
        Type a GitHub username above and let's discover their coding world 🚀
      </p>
        <p className="text-gray-600 text-lg mt-2">
    Or click the <span className="font-medium text-indigo-600">Trending Repos</span> button to discover what’s trending around the world 🌍. The <span className="font-medium text-indigo-600">Trending Repos</span> will appear Below 👇 
  </p>
    </div>
  );
};

export default EmptyState;