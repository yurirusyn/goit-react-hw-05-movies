import { getReviewsMovies } from '../services/movies-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewsMovies(movieId).then(setReviews);
  }, [movieId]);

  console.log();

  return (
    <>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <li key={review.author}>
            <h3>AUTHOR: {review.author}</h3>
            <p>{review.content}</p>
            <a href={review.url} rel="noreferrer noopener" target="_self">
              Movie review
            </a>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
