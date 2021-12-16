import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export const createArray = (length) => [...Array(length)];

const Star = ({ selected, onSelect }) => (
  <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />
);

const StarRatingInteractive = ({ setAnswer, totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div>
      {createArray(totalStars).map((n, i) => (
        <Star
          selected={selectedStars > i}
          onSelect={() => {
            setSelectedStars(i + 1);
            setAnswer(i + 1);
          }}
          key={i}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
};

export default StarRatingInteractive;
