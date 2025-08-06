import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const PopularSection = () => {
  const [movies, setMovies] = useState([]);

  // List of trending movie IDs (these will be excluded)
  const trendingIds = ['t-1', 't-2', 't-3', 't-4', 't-5', 't-6'];

  useEffect(() => {
    axios.get('https://movie-app-backend-9wvy.onrender.com')
      .then((res) => {
        // ❌ Filter out the trending movies
        const nonTrending = res.data.filter(movie => !trendingIds.includes(movie.id));
        setMovies(nonTrending);
      })
      .catch((err) => {
        console.error('Error fetching movies:', err);
      });
  }, []);

  return (
    <div className="bg-black text-white py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 font-dm">Popular</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1280px] mx-auto">
        {movies.map((item) => (
          <MovieCard
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            rating={item.rating}
            genre={item.genre}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
