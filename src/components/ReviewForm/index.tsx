import { AxiosRequestConfig } from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { requestBackend } from 'util/requests';

import './styles.css';

type Props = {
  movieId: string;
}

type FormData = {
  movieId: string;
  text: string;
}

const ReviewForm = ({ movieId }: Props) => {
  const [hasSuccess, setHasSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = movieId;

    const params: AxiosRequestConfig = {
      url: '/reviews',
      method: 'POST',
      withCredentials: true,
      data: {
        ...formData
      }
    };

    requestBackend(params)
      .then((response) => {
        console.log(response);

        setHasSuccess(true);
        
      })
      .catch((errors) => {
        console.log(errors);
      });
    
  }

  return (
    <div className="base-card  movie-review-card">
      { hasSuccess && (
        <div className="alert  alert-success">
          Review salvo com sucesso!
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-review-custom-container">
          <input
            {...register("text", {
              required: 'Campo obrigatório'
            })}
            type="text"
            className={`form-control  base-input  ${errors.text ? 'is-invalid' : ''}`}
            placeholder="Deixe sua avaliação aqui"
            name="text"
          />
        </div>
        <div className="invalid-feedback  d-block  invalid-feedback-custom">
          { errors.text?.message }
        </div>

        <div className="btn-review-container">
          <button className="btn  btn-primary  btn-custom">
            <h6>SALVAR AVALIAÇÃO</h6>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
