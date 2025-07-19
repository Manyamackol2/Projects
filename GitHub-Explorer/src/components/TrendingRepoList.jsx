import React from "react";

const TrendingRepoList = ({ repos }) => {
  if (!repos || repos.length === 0) return <p>No trending repos found.</p>;

  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-2xl font-semibold text-indigo-700">🚀 Trending Repositories</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <div key={repo.id} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-lg font-bold text-purple-700">{repo.full_name}</h3>
            <p className="text-sm text-gray-600">{repo.description || "No description available"}</p>
            <div className="text-xs text-gray-500 mt-2">
              ⭐ {repo.stargazers_count} • 🧑‍💻 {repo.language || "N/A"}
            </div>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-sm mt-2 inline-block"
            >
              View Repo ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingRepoList;
