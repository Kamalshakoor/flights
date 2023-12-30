import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const Airline = (props) => {
  const renderStars = () => {
    const stars = [];
    const avgScore = props.attributes.avg_score;

    for (let i = 1; i <= 5; i++) {
      const starIcon =
        i <= avgScore ? (
          <FontAwesomeIcon key={i} icon={faStar} className="star-filled" />
        ) : (
          <FontAwesomeIcon key={i} icon={faStar} className="star-empty" />
        );
      stars.push(starIcon);
    }
    return stars;
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card py-3">
        <img
          src={props.attributes.image_url}
          className="card-img-top rounded-circle"
          alt={props.attributes.image_url}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{props.attributes.name}</h5>
          <div className="rating-container">{renderStars()}</div>
          <p className="card-text">Average Score: {props.attributes.avg_score}</p>
          <Link to={`/airlines/${props.attributes.slug}`} className="btn btn-outline-secondary form-control">
            Show Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Airline;
