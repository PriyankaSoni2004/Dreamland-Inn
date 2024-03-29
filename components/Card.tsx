import React from 'react';

interface CardProps {
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card Image" />
    </div>
  );
};

export default Card;

