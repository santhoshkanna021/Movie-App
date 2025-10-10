import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const MovieCard = ({ id, image, title, rating, genre }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-movie-dark rounded-lg p-4 flex flex-col gap-2 shadow-md cursor-pointer
                 sm:min-h-[295px] sm:p-[20px_18px]"
      onClick={() => navigate(`/movie/${id}`)}
      role="button"
      aria-label={`View details for ${title}`}
    >
      <img
        src={image}
        alt={`${title} Poster`}
        className="w-full h-48 sm:h-[180px] object-cover rounded-md"
        loading="lazy"
      />
      <div className="flex flex-col gap-2 sm:gap-3">
        <h3 className="text-sm sm:text-base font-semibold text-white truncate">{title}</h3>
        {rating && genre && (
          <div className="flex items-center text-xs sm:text-sm text-gray-300">
            <FaStar className="text-yellow-400 mr-1" aria-hidden="true" />
            {rating}
            <span className="mx-1 sm:mx-2">•</span>
            <span className="truncate">{genre}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(MovieCard);
