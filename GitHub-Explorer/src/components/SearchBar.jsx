
const SearchBar = ({ username, setUsername, onSearch, onReset }) => {
  
  return (
    <div className="w-full flex gap-4 items-center bg-white p-4 rounded-lg shadow">
       <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onSearch();
        }}
        className="w-full p-3 rounded-lg border border-gray-300 shadow"
      />
      <button
        onClick={onSearch}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg shadow"
      >
        🔍 Search
      </button>
      <button
        onClick={onReset}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg shadow"
      >
        ♻️ Reset
      </button>
    </div>
  );
};

export default SearchBar;
