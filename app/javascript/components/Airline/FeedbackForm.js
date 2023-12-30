import React, { useState } from 'react';
import axios from 'axios';
import './FeedbackForm.css';

const FeedbackForm = (props) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = () => {
    const csrfToken = document.querySelector('[name=csrf-token]').content;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

    // Make a POST request to your backend API
    axios
      .post('/api/v1/reviews', {
        review: {
          title: null,
          description: feedback,
          score: rating,
          airline_id: props.attributes.id,
        },
      })
      .then((response) => {
        // Handle success if needed
        console.log('Review submitted successfully:', response.data);
        // Reset the form after submission
        setRating(0);
        setFeedback('');

        // Update the state with the new review
        props.onReviewSubmit(response.data.data);
      })
      .catch((error) => {
        // Handle errors if needed
        console.error('Error submitting review:', error);
      });
  };

  return (
    <div className="feedback-form-container">
      <h2>Leave your Feedback</h2>
      <div className="rating-container">
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={value <= rating ? 'star-filled' : 'star-empty'}
            onClick={() => handleRatingChange(value)}
          >
            &#9733;
          </span>
        ))}
      </div>
      <textarea
        placeholder="Your feedback..."
        value={feedback}
        onChange={handleFeedbackChange}
        rows="4"
      ></textarea>
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default FeedbackForm;
