import { memo } from 'react';

const TrendingCard = ({ image, title }) => {
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
      {/* Movie Poster */}
      <img
        src={image}
        alt={`${title} Poster`}
        className="w-full h-full object-cover"
        loading="lazy"
      />

      {/* Title Overlay */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent px-2 py-1 sm:px-3 sm:py-2">
        <p className="text-white text-xs sm:text-sm font-semibold truncate">
          {title}
        </p>
      </div>
    </div>
  );
};

export default memo(TrendingCard);
