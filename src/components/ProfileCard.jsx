const ProfileCard = ({ userData }) => {
  if (!userData) return null;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={userData.avatar_url}
          alt="Avatar"
          className="w-16 h-16 rounded-full border-2 border-indigo-300"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {userData.name || userData.login}
          </h2>
          <p className="text-sm text-gray-500">@{userData.login}</p>
        </div>
      </div>

      <p className="text-gray-700 text-sm mb-2">{userData.bio || "No bio provided."}</p>

      <div className="text-xs text-gray-500 mb-4">
        🗓️ Joined {new Date(userData.created_at).toLocaleDateString()}
      </div>

      <div className="flex justify-between text-sm text-gray-600">
        <span>👥 {userData.followers} Followers</span>
        <span>➡️ {userData.following} Following</span>
        <span>📦 {userData.public_repos} Repos</span>
      </div>
    </div>
  );
};

export default ProfileCard;
