import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiPlay, FiHeart } from 'react-icons/fi';
import axios from 'axios';

const MoviePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  // Scroll to top and fetch movie on ID change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    axios.get('https://movie-app-backend-9wvy.onrender.com/')
      .then((res) => {
        const foundMovie = res.data.find((item) => item.id === id);
        setMovie(foundMovie);
      })
      .catch((err) => {
        console.error('Error fetching movie:', err);
      });
  }, [id]);

  if (!movie) {
    return <div className="text-white text-center mt-10">Loading movie details...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 lg:p-8">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold font-dm">{movie.title}</h1>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <span className="text-yellow-400">★ {movie.rating}/10 (200k)</span>
          <button
            className={`flex items-center px-4 py-2 rounded-full ${
              isLiked ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-700 hover:bg-gray-600'
            } text-white transition-colors duration-300`}
            onClick={() => setIsLiked(!isLiked)}
            aria-label={isLiked ? 'Unlike movie' : 'Like movie'}
          >
            <FiHeart className="mr-2" />
            {isLiked ? 'Liked' : 'Like'}
          </button>
        </div>
      </header>
      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <div className="space-y-6">
          <div className="relative">
            <img
              src={movie.image}
              alt={`${movie.title} Poster`}
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg"></div>
          </div>
          <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              src={movie.image}
              alt={`${movie.title} Trailer`}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <button
              className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/70 transition-all duration-300"
              aria-label="Play trailer"
            >
              <FiPlay className="text-white text-4xl" />
            </button>
            <p className="text-center text-gray-400 mt-2">Trailer - 00:31</p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-gray-400 text-sm sm:text-base">
            {movie.releaseDate} • {movie.ratingPG} • {movie.runtime}
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold font-dm">Overview</h2>
          <p className="text-gray-300 text-sm sm:text-base">
            {movie.overview}
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold font-dm">Genres</h2>
          <p className="text-gray-300 text-sm sm:text-base">{movie.genre}</p>
          <h2 className="text-xl sm:text-2xl font-semibold font-dm">Release Date</h2>
          <p className="text-gray-300 text-sm sm:text-base">December 26, 2024 (Worldwide)</p>
          <h2 className="text-xl sm:text-2xl font-semibold font-dm">Countries</h2>
          <p className="text-gray-300 text-sm sm:text-base">United States • Canada • UAE • Hungary • Italy • New Zealand</p>
          <h2 className="text-xl sm:text-2xl font-semibold font-dm">Status</h2>
          <p className="text-gray-300 text-sm sm:text-base">Released</p>
          <h2 className="text-xl sm:text-2xl font-semibold font-dm">Language</h2>
          <p className="text-gray-300 text-sm sm:text-base">English • Korean • Hindi • Arabic • German • Spanish</p>
          <h2 className="text-xl sm:text-2xl font-semibold font-dm">Budget</h2>
          <p className="text-gray-300 text-sm sm:text-base">$214 million</p>
          <h2 className="text-xl sm:text-2xl font-semibold font-dm">Revenue</h2>
          <p className="text-gray-300 text-sm sm:text-base">$900 million</p>
          <h2 className="text-xl sm:text-2xl font-semibold font-dm">Tagline</h2>
          <p className="text-gray-300 text-sm sm:text-base">45.6 Billion Won is Child's Play</p>
          <h2 className="text-xl sm:text-2xl font-semibold font-dm">Production Companies</h2>
          <p className="text-gray-300 text-sm sm:text-base">Legendary Entertainment • Warner Bros. Entertainment • Villeneuve Films</p>
          <button
            onClick={() => navigate('/')}
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full mt-4 transition-colors duration-300"
            aria-label="Return to homepage"
          >
            Visit Homepage →
          </button>
        </div>
      </main>
    </div>
  );
};

export default MoviePage;
