import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const PopularSection = () => {
  const [movies, setMovies] = useState([]);

  const trendingIds = ['t-1', 't-2', 't-3', 't-4', 't-5', 't-6'];

  useEffect(() => {
    axios.get('https://movie-app-backend-mu.vercel.app/api/movies')
      .then((res) => {
        const nonTrending = res.data.filter(movie => !trendingIds.includes(movie.id));
        setMovies(nonTrending);
      })
      .catch((err) => console.error('Error fetching movies:', err));
  }, []);

  return (
    <section className="bg-black text-white py-8 px-4 sm:py-10 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left font-dm">Popular</h2>

      {/* Mobile-first grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-[1280px] mx-auto">
        {movies.map((item) => (
          <MovieCard
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            rating={item.rating}
            genre={item.genre}
            className="rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-200"
          />
        ))}
      </div>

      {/* Optional: horizontal scroll for very small screens */}
      <div className="sm:hidden mt-4 overflow-x-auto">
        <div className="flex space-x-4">
          {movies.map((item) => (
            <MovieCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              rating={item.rating}
              genre={item.genre}
              className="min-w-[200px] rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-200"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSection;
