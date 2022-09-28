import MainImage from 'assets/images/star-image.png';
import { AxiosRequestConfig } from 'axios';
import { useState, useEffect } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { Review } from 'types/review';
import { requestBackend } from 'util/requests';

import './styles.css';

const MovieDetails = () => {
  const [page, setPage] = useState<SpringPage<Review>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: '/movies/1/reviews',
      withCredentials: true,
      params: {
        page: 0,
        size: 10
      }
    };

    requestBackend(params)
      .then((response) => {
        setPage(response.data);
      })
  }, []);

  return (
    <div className="base-private-container  movie-details-container">
      <h2>Tela detalhes do filme id: 1</h2>

      <div className="base-card  movie-review-card">
        <form action="">
          <div className="mb-4">
            <input
              type="text"
              className="form-control  base-input"
              placeholder="Deixe sua avaliação aqui"
              name="review"
            />
          </div>
        </form>

        <div className="btn-review-container">
          <button className="btn  btn-primary  btn-custom">
            <h6>SALVAR AVALIAÇÃO</h6>
          </button>
        </div>
      </div>

      <div className="base-card  movie-review-list-card">
        <div className="movie-review-list-container">
            {/* <div className="reviewer-info-container">
              {page?.content.map((item) => (
                <>
                  <img src={MainImage} alt="Imagem principal" />

                  <p key={item.user.id}>{item.user.name}</p>
                </>
              ))}
            </div>

            <div className="review-detail-card">
              <p>
                  Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
              </p>
            </div> */}
        </div>
        
        {/* <div className="movie-review-list-container">
            <div className="reviewer-info-container">
            <img src={MainImage} alt="Imagem principal" />

            <p>Maria Silva</p>
            </div>

            <div className="review-detail-card">
            <p>
                Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
            </p>
            </div>
        </div> */}

        <div className="movie-review-list-container">
            <div className="reviewer-info-container">
            <img src={MainImage} alt="Imagem principal" />

            <p>Maria Silva</p>
            </div>

            <div className="review-detail-card">
            <p>
                Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
            </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
