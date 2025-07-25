import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h2 className="text-3xl font-bold text-cyan-900 mb-4">404 - Page Not Found</h2>
      <p className="text-cyan-700 mb-4">Looks like you're lost in the waves.</p>
      <Link to="/" className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg">
        Go Back Home
      </Link>
    </div>
  );
}
