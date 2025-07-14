import React from "react";

const StatsCards = ({ repos }) => {
  if (!repos || repos.length === 0) return null;

  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);

  const languageCount = {};
  repos.forEach((repo) => {
    if (repo.language) {
      languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
    }
  });
  const topLanguage =
    Object.entries(languageCount).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";

  const cardData = [
    { title: "📦 Total Repositories", value: repos.length, color: "text-indigo-600" },
    { title: "⭐ Total Stars", value: totalStars, color: "text-yellow-600" },
    { title: "🧑‍💻 Top Language", value: topLanguage, color: "text-blue-600" },
  ];

  return (
    <div className="grid sm:grid-cols-3 gap-6 mt-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 text-center"
        >
          <h4 className="text-sm text-gray-500 mb-2">{card.title}</h4>
          <p className={`text-2xl font-bold ${card.color}`}>{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
