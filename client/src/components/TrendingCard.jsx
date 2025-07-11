import { memo } from 'react';

const TrendingCard = ({ image, title }) => {
  return (
    <img
      src={image}
      alt={`${title} Poster`}
      className="w-full h-full object-cover rounded-xl"
      loading="lazy"
    />
  );
};

export default memo(TrendingCard);