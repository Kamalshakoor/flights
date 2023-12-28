import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import './header.css';

const Header = (props) => {
  const { name, image_url, avg_score } = props.attributes;
  const total = props.reviews.length;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starIcon =
        i <= avg_score ? (
          <FontAwesomeIcon key={i} icon={faStar} className="star-filled" />
        ) : (
          <FontAwesomeIcon key={i} icon={faStar} className="star-empty" />
        );
      stars.push(starIcon);
    }
    return stars;
  };

  return (
    <div className="card header-container">
      <img
        src={image_url}
        className="airline-image"
        alt={name}
      />

      <div className="card-body header-content">
        <h3 className="card-title">{name}</h3>
        <div className="rating-container">{renderStars()}</div>
        <p className="reviews-info">
          <FontAwesomeIcon icon={faUser} className="user-icon" /> {total} User Reviews
        </p>
      </div>
    </div>
  );
};

export default Header;
