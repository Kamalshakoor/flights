import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 

const renderStars = (score) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const starIcon =
      i <= score ? (
        <FontAwesomeIcon key={i} icon={faStar} className="star-filled" style={{ fontSize: '14px' }} />
      ) : (
        <FontAwesomeIcon key={i} icon={faStar} className="star-empty" style={{ fontSize: '14px' }} />
      );
    stars.push(starIcon);
  }
  return stars;
};

const Review = (props) => {
  const { reviews } = props;

  if (!reviews) {
    return null;
  }

  return (
    <div className="container mb-5 mt-3">
      <h3 className='mb-3'>What Other People Say:</h3>
      {reviews.map((review) => (
        <div key={review.id} className="row shadow mb-3 pt-2">
          <div className="col">
            <p>
              <span className="stars">{renderStars(review.attributes.score)}</span>
            </p>
            <p className="description">{review.attributes.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
