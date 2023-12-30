import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Review from './Review';
import FeedbackForm from './FeedbackForm';

const Airline = () => {
  const [airline, setAirline] = useState({});
  const [loaded, setLoaded] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    const url = `/api/v1/airlines/${slug}`;
    axios
      .get(url)
      .then((resp) => {
        console.log(resp);
        setAirline(resp.data);
        setLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [slug]);

  const handleReviewSubmit = (newReview) => {
    // Update the state with the new review
    setAirline((prevAirline) => ({
      ...prevAirline,
      included: [...prevAirline.included, newReview],
    }));
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-8">
            <div class="row">
              {loaded && (
                <>
                  <Header attributes={airline.data.attributes} reviews={airline.included} />
                  <Review reviews={airline.included} />
                </>
              )}
            </div>
          </div>
          <div className="col-sm-4">
            <FeedbackForm attributes={airline.data} onReviewSubmit={handleReviewSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Airline;
