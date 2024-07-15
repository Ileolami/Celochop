import React, { useState } from 'react';

const Rating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);


const starStyle = (isFilled) => ({
    cursor: 'pointer',
    width: '20px',
    height: '20px',
    display: 'inline-block',
    borderRadius: '50%',
    outline: 'none',
    transition: 'background-color 0.3s ease',
    fill: isFilled ? '#FF7622' : 'none', 
    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', // Star shape
    backgroundColor: isFilled ? '#FF7622' : '#D9D9D9',
  });
  
  const starContainerStyle = {
    padding: '10px',
    marginLeft: '15px',
    border: '1px solid #EDEDED',
    borderRadius: '50%',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  
  return (
    <div style={{ display: 'flex' }}>
      {[...Array(totalStars)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <div key={index} style={starContainerStyle}>
            <div
              style={starStyle(ratingValue <= rating)}
              onClick={() => setRating(ratingValue)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
