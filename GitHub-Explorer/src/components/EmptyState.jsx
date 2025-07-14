import React from "react";
import WelcomeCats from "../assets/undraw_welcome-cats_tw36.svg";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full max-w-2xl mx-auto mt-12 mb-10 px-4 animate-fadeUp">
      <img
        src={WelcomeCats}
        alt="Welcome Illustration"
        className="w-72 h-auto mb-6"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">👋 Welcome Explorer!</h2>
      <p className="text-gray-600 text-sm">
        Type a GitHub username above and let's discover their coding world 🚀
      </p>
    </div>
  );
};

export default EmptyState;
