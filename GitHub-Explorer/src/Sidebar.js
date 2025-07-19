import React from "react";

const Sidebar = ({ userData, activeTab, setActiveTab }) => {
  if (!userData) return null;

  return (
    <div className="md:w-64 bg-white shadow-md w-64 min-h-screen p-6">
      <div className="flex flex-col items-center">
        <img
          src={userData.avatar_url}
          alt="Avatar"
          className="w-24 h-24 rounded-full border-4 border-indigo-300 mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          {userData.name || userData.login}
        </h2>
        <p className="text-gray-600 text-center text-sm mb-4">
          {userData.bio || "No bio provided."}
        </p>

        <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition w-full text-sm text-gray-700 space-y-2">
          <p>👥 Followers: {userData.followers}</p>
          <p>➡️ Following: {userData.following}</p>
          <p>📦 Public Repos: {userData.public_repos}</p>
        </div>

        <div className="flex gap-4 text-sm text-indigo-600 underline mt-3">
          {userData.twitter_username && (
            <a
              href={`https://twitter.com/${userData.twitter_username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          )}
          {userData.blog && (
            <a href={userData.blog} target="_blank" rel="noopener noreferrer">
              Blog
            </a>
          )}
        </div>

        <div className="text-xs text-gray-500 mt-6 bg-indigo-100 py-1 px-3 rounded-full">
          Member since {new Date(userData.created_at).getFullYear()}
        </div>

        <ul className="mt-6 w-full">
          <li
            className={`cursor-pointer text-center py-2 px-3 rounded font-semibold ${
              activeTab === "overview"
                ? "bg-indigo-600 text-white"
                : "bg-indigo-100 text-indigo-700"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            🏠 Overview
          </li>
          <li
            className={`cursor-pointer text-center mt-2 py-2 px-3 rounded font-semibold ${
              activeTab === "bookmarks"
                ? "bg-indigo-600 text-white"
                : "bg-indigo-100 text-indigo-700"
            }`}
            onClick={() => setActiveTab("bookmarks")}
          >
            📌 Bookmarks
          </li>
      <li
  className={`cursor-pointer text-center mt-2 py-2 px-3 rounded font-semibold ${
    activeTab === "trending"
      ? "bg-indigo-600 text-white"
      : "bg-indigo-100 text-indigo-700"
  }`}
  onClick={() => {
    console.log("Trending tab clicked");
    setActiveTab("trending");
  }}
>
  🔥 Trending
</li>
  </ul>
      </div>
    </div>
  );
};

export default Sidebar;
