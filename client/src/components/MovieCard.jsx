import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const MovieCard = ({ id, image, title, rating, genre }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-movie-dark rounded-[16px] min-h-[295px] p-[20px_18px] flex flex-col gap-3 shadow-md cursor-pointer"
      onClick={() => navigate(`/movie/${id}`)}
      role="button"
      aria-label={`View details for ${title}`}
    >
      <img
        src={image}
        alt={`${title} Poster`}
        className="w-full h-[180px] object-cover rounded-md"
        loading="lazy"
      />
      <div className="flex flex-col gap-3">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        {rating && genre && (
          <div className="flex items-center text-sm text-gray-300">
            <FaStar className="text-yellow-400 mr-1" aria-hidden="true" />
            {rating}
            <span className="mx-2">•</span>
            {genre}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(MovieCard);