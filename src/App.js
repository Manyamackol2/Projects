import { useState, useEffect } from "react";
import '@fontsource/inter';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import Sidebar from './Sidebar';
import SearchBar from './components/SearchBar';
import ProfileCard from './components/ProfileCard';
import StatsCards from './components/StatsCards';
import RepoList from './components/RepoList';
import EmptyState from './components/EmptyState';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [selectedRepo1, setSelectedRepo1] = useState(null);
  const [selectedRepo2, setSelectedRepo2] = useState(null);
  const [showRepos, setShowRepos] = useState(false);
  const [contribData, setContribData] = useState([]);
  const [showBookmarked, setShowBookmarked] = useState(false);
  const [activeTab, setActiveTab] = useState('overview'); 
  const [bookmarkedRepos, setBookmarkedRepos] = useState(() => {
    const saved = localStorage.getItem("bookmarkedRepos");
    return saved ? JSON.parse(saved) : [];
  });

  const [repoNotes, setRepoNotes] = useState(() => {
    const saved = localStorage.getItem("repoNotes");
    return saved ? JSON.parse(saved) : {};
  });

  const fetchData = async () => {
    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      const user = await userRes.json();
      const reposRes = await fetch(`https://api.github.com/users/${username}/repos`);
      const reposData = await reposRes.json();

      setUserData(user);
      setRepos(reposData);
    } catch (err) {
      console.error('Error fetching data', err);
    }
  };
  const resetSearch = () => {
  setUsername('');
  setUserData(null);
  setRepos([]);
};
const handleReset = () => {
  setUsername("");
  setUserData(null);
  setRepos([]);
  setShowRepos(false);
  setShowBookmarked(false); // important!
};

  useEffect(() => {
    const fetchContributors = async () => {
      if (selectedRepo1) {
        try {
          const res = await fetch(
            `https://api.github.com/repos/${username}/${selectedRepo1.name}/contributors`
          );
          const data = await res.json();
          setContribData(data);
        } catch (error) {
          console.error("Failed to fetch contributors", error);
        }
      }
    };
    fetchContributors();
  }, [selectedRepo1, username]);

  const toggleBookmark = (repo) => {
    setBookmarkedRepos((prev) => {
      if (prev.some((r) => r.id === repo.id)) {
        return prev.filter((r) => r.id !== repo.id);
      } else {
        return [...prev, repo];
      }
    });
  };

  const updateNote = (repoId, newNote) => {
    setRepoNotes((prev) => ({
      ...prev,
      [repoId]: newNote,
    }));
  };

  useEffect(() => {
    localStorage.setItem("bookmarkedRepos", JSON.stringify(bookmarkedRepos));
  }, [bookmarkedRepos]);

  useEffect(() => {
    localStorage.setItem("repoNotes", JSON.stringify(repoNotes));
  }, [repoNotes]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7faff] to-[#e6edff] flex">
      {userData && (
        <Sidebar userData={userData} activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
      <main className="flex-1 p-6">
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-center bg-white shadow-md p-5 rounded-lg">
          <SearchBar
            username={username}
            setUsername={setUsername}
            onSearch={fetchData}
            onReset={handleReset}
          />
          {!userData && (
  <div className="flex justify-center items-center w-full">
    <EmptyState />
  </div>
)}
        </div>
        <div className="mt-6 space-y-6">
          <ProfileCard userData={userData} />
          <StatsCards repos={repos} />

          {bookmarkedRepos.length > 0 && (
            <div className="text-center">
              <button
                onClick={() => setShowBookmarked(!showBookmarked)}
                className="bg-yellow-400 text-white px-4 py-2 rounded shadow hover:bg-yellow-500"
              >
                {showBookmarked ? "⬅️ Back to All Repos" : "📌 View Bookmarked Repos"}
              </button>
            </div>
          )}

          {showBookmarked && (
            <div>
              <h2 className="text-2xl font-bold text-indigo-700 mb-4">📌 Bookmarked Repositories</h2>
              {bookmarkedRepos.length === 0 ? (
                <p className="text-gray-600 text-center mt-4">No bookmarks yet.</p>
              ) : (
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  {bookmarkedRepos.map((repo) => (
                    <div
                      key={repo.id}
                      className="bg-white p-4 rounded-lg shadow hover:shadow-md transition relative"
                    >
                      <h4 className="text-lg font-semibold text-indigo-700">{repo.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{repo.description || "No description"}</p>
                      <div className="text-xs text-gray-500 mb-2">
                        ⭐ {repo.stargazers_count} • 🍴 {repo.forks_count} • 🧑‍💻 {repo.language || "N/A"}
                      </div>
                      {repoNotes[repo.id] && (
                        <p className="text-sm text-gray-700 mb-2 bg-gray-100 p-2 rounded">
                          🗒️ {repoNotes[repo.id]}
                        </p>
                      )}
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
              )}
            </div>
          )}
{activeTab === 'overview' && (
          <RepoList
            repos={repos}
            showRepos={showRepos}
            setShowRepos={setShowRepos}
            bookmarkedRepos={bookmarkedRepos}
            toggleBookmark={toggleBookmark}
            repoNotes={repoNotes}
            updateNote={updateNote}
            showBookmarked={showBookmarked}
          />
          )}
          {repos.length >= 2 && (
            <div className="mt-10">
              <h2 className="text-xl font-bold mb-4 text-gray-800">🆚 Compare Repositories</h2>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <select
                  className="p-2 border rounded w-full"
                  onChange={(e) =>
                    setSelectedRepo1(repos.find((r) => r.name === e.target.value))
                  }
                  defaultValue=""
                >
                  <option value="" disabled>Select First Repo</option>
                  {repos.map((repo) => (
                    <option key={repo.id} value={repo.name}>
                      {repo.name}
                    </option>
                  ))}
                </select>

                <select
                  className="p-2 border rounded w-full"
                  onChange={(e) =>
                    setSelectedRepo2(repos.find((r) => r.name === e.target.value))
                  }
                  defaultValue=""
                >
                  <option value="" disabled>Select Second Repo</option>
                  {repos.map((repo) => (
                    <option key={repo.id} value={repo.name}>
                      {repo.name}
                    </option>
                  ))}
                </select>
              </div>

              {selectedRepo1 && selectedRepo2 && (
                <div className="grid md:grid-cols-2 gap-6 bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
                  {[selectedRepo1, selectedRepo2].map((repo, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                      <h4 className="text-lg font-bold text-indigo-600">{repo.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {repo.description || "No description"}
                      </p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>⭐ Stars: {repo.stargazers_count}</li>
                        <li>🍴 Forks: {repo.forks_count}</li>
                        <li>🧑‍💻 Language: {repo.language || "N/A"}</li>
                        <li>🚨 Open Issues: {repo.open_issues_count}</li>
                        <li>
                          ⏳ Last Updated: {new Date(repo.updated_at).toLocaleDateString()}
                        </li>
                      </ul>
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
              )}
            </div>
          )}

          {selectedRepo1 && contribData.length > 0 && (
            <div className="mt-10">
              <h2 className="text-xl font-bold text-gray-800 mb-4">📊 Contributor Heatmap</h2>
              <div className="bg-white p-6 rounded-lg shadow">
                <Bar
                  data={{
                    labels: contribData.map((dev) => dev.login || "Unknown"),
                    datasets: [
                      {
                        label: "Commits",
                        data: contribData.map((dev) => dev.contributions),
                        backgroundColor: "rgba(99, 102, 241, 0.8)",
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { display: false },
                      title: {
                        display: true,
                        text: `Total Contributions to ${selectedRepo1.name}`,
                      },
                    },
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
