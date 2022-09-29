import { AxiosRequestConfig } from 'axios';
import ReviewForm from 'components/ReviewForm';
import ReviewList from 'components/ReviewList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from 'types/review';
import { requestBackend } from 'util/requests';

import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [ reviews, setReviews ] = useState<Review[]>([]);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: `/movies/${movieId}/reviews`,
      method: 'GET',
      withCredentials: true,
      params: {
        page: 0,
        size: 10
      }
    };

    requestBackend(params)
      .then((response) => {
        // console.log("AQUI!");
        // console.log(response.data);

        setReviews(response.data);
      })
  }, [movieId]);

  return (
    <div className="base-private-container  movie-details-container">
      <h2>Tela detalhes do filme id: {movieId}</h2>

      <ReviewForm />

      <ReviewList reviews={reviews} />

    </div>
  );
};

export default MovieDetails;
