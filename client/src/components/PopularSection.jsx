import MovieCard from './MovieCard';
import { popularData } from '../data';

const PopularSection = () => {
  return (
    <div className="bg-black text-white py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 font-dm">Popular</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1280px] mx-auto">
        {popularData.map((item) => (
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