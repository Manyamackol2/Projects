import React from "react";

const RepoList = ({
  repos,
  showRepos,
  setShowRepos,
  bookmarkedRepos,
  toggleBookmark,
  repoNotes,
  updateNote,
  showBookmarked,
}) => {
  const displayedRepos = showBookmarked ? bookmarkedRepos : repos;

  if (!repos || repos.length === 0) return null;

  return (
    <div className="mt-6 bg-white rounded-xl shadow-md p-5 transition-all">
      <button
        onClick={() => setShowRepos(!showRepos)}
        className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow hover:bg-purple-700 transition"
      >
        {showRepos ? "Hide Repositories" : "📂 View Repositories"}
      </button>

      {showRepos && (
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">📦 Repositories</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {displayedRepos.map((repo) => {
              const isBookmarked = bookmarkedRepos.some((r) => r.id === repo.id);

              return (
                <div
                  key={repo.id}
                  className={`relative p-5 rounded-xl shadow hover:shadow-lg transition bg-white border ${
                    isBookmarked ? "border-indigo-300" : "border-gray-100"
                  }`}
                >
                  {/* 📌 Bookmark Toggle */}
                  <button
                    onClick={() => toggleBookmark(repo)}
                    className={`absolute top-3 right-3 text-xl ${
                      isBookmarked ? "text-indigo-500" : "text-gray-400"
                    }`}
                    title={isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
                  >
                    {isBookmarked ? "📌" : "📍"}
                  </button>

                  <h4 className="text-lg font-bold text-indigo-700">{repo.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{repo.description || "No description"}</p>

                  <div className="text-xs text-gray-500 mt-2">
                    ⭐ {repo.stargazers_count} • 🍴 {repo.forks_count} • 🧑‍💻 {repo.language || "N/A"}
                  </div>

                  {/* 📝 Note Button */}
                  <button
                    onClick={() => {
                      const newNote = prompt("Enter note for this repo:", repoNotes[repo.id] || "");
                      if (newNote !== null) updateNote(repo.id, newNote);
                    }}
                    className="text-blue-600 text-sm mt-3 hover:underline"
                  >
                    {repoNotes[repo.id] ? "📝 Edit Note" : "➕ Add Note"}
                  </button>

                  {/* 🗒️ Show Note */}
                  {repoNotes[repo.id] && (
                    <p className="text-sm text-gray-700 mt-2 bg-gray-100 p-2 rounded">
                      🗒️ {repoNotes[repo.id]}
                    </p>
                  )}

                  {/* 🔗 View Repo */}
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-3 text-sm text-blue-500 hover:underline"
                  >
                    View Repo ↗
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default RepoList;
