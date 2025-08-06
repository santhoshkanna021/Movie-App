import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TrendingCard from './TrendingCard';
import { FiSearch } from 'react-icons/fi';
import axios from 'axios';

const TrendingSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://movie-app-backend-9wvy.onrender.com/')
      .then((res) => {
        setAllMovies(res.data);
        const trending = res.data.slice(0, 6); // or use a `isTrending` flag
        setTrendingMovies(trending);
      })
      .catch((err) => {
        console.error('Error fetching movies:', err);
      });
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      const filtered = allMovies.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const movie = allMovies.find((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (movie) {
        navigate(`/movie/${movie.id}`);
        setSuggestions([]);
        setSearchQuery('');
      } else {
        alert('Movie not found!');
      }
    }
  };

  return (
    <div
      className="w-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url("/BG.png")` }}
    >
      <div className="flex justify-center pt-8">
        <img src="/logo.svg" alt="Logo" className="w-[90px] h-[66px]" loading="lazy" />
      </div>
      <div className="flex justify-center mt-6 mb-6">
        <img
          src="/hero-img.png"
          alt="Hero Image"
          className="w-[470px] h-[282px] object-cover rounded-lg shadow-lg"
          loading="lazy"
        />
      </div>
      <div className="flex justify-center mb-8">
        <div className="flex flex-col items-center w-full max-w-[745px]">
          <span className="text-white text-2xl sm:text-3xl font-semibold text-center mb-4 font-dm drop-shadow-[0_0_6px_rgba(255,255,255,0.35)]">
            Find Movies You’ll Love Without the Hassle
          </span>
          <form
            onSubmit={handleSearchSubmit}
            className="w-full max-w-[640px] h-[68px] rounded-xl px-5 flex items-center gap-3 bg-gradient-to-r from-[#131325] to-[#0B0B1E] shadow-inner"
            role="search"
          >
            <FiSearch className="text-purple-400 text-xl" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search movies"
              className="bg-transparent w-full border-none outline-none text-text-purple placeholder-text-purple text-lg font-medium font-dm"
              value={searchQuery}
              onChange={handleSearchChange}
              aria-label="Search movies"
            />
          </form>
          {suggestions.length > 0 && (
            <ul className="w-full max-w-[640px] mt-2 bg-movie-dark rounded-lg shadow-lg">
              {suggestions.map((movie) => (
                <li
                  key={movie.id}
                  className="px-4 py-2 text-white hover:bg-purple-600 cursor-pointer text-sm sm:text-base"
                  onClick={() => {
                    navigate(`/movie/${movie.id}`);
                    setSuggestions([]);
                    setSearchQuery('');
                  }}
                  role="option"
                  aria-selected="false"
                >
                  {movie.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mb-6 px-4 sm:px-6 lg:px-10">
        <h2 className="text-white text-2xl sm:text-3xl font-bold font-dm">Trending</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-18 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-12">
        {trendingMovies.map((item) => (
          <div
            key={item.id}
            className="w-[130px] h-[150px] rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-card-bg cursor-pointer"
            onClick={() => navigate(`/movie/${item.id}`)}
          >
            <TrendingCard image={item.image} title={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;
