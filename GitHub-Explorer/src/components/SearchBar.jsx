const SearchBar = ({ username, setUsername, onSearch, onReset, activeTab, setActiveTab }) => {
  return (
    <div className="w-full flex flex-col sm:items-end items-stretch gap-2 bg-white p-0 rounded-lg">
      
      {/* Row 1: Search Input and Buttons */}
      <div className="w-full flex flex-col sm:flex-row sm:justify-end sm:items-center gap-4">
         <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onSearch();
          }}
          className="animate-glow w-full px-4 py-5 font-medium text-lg rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          onClick={onSearch}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full font-semibold text-lg transition-all duration-200 shadow-md"
        >
          🔍 Search
        </button>

        <button
          onClick={onReset}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full font-semibold text-lg transition-all duration-200 shadow-md"
        >
          ♻️ Reset
        </button>
      </div>

      {/* Row 2: Trending Repos Button */}
      <div className="flex justify-end w-full">
        <button
          className={`animate-glow px-4 py-3.5 rounded-full font-semibold text-xl transition-all duration-200 shadow-md ${
            activeTab === 'trending'
              ? 'bg-purple-500 text-white'
              : 'bg-white border border-black text-indigo-600 hover:bg-purple-500 hover:text-white hover:border-white hover:shadow-lg hover:scale-105'
          }`}
          onClick={() => setActiveTab('trending')}
        >
          🔥 Trending Repos
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
