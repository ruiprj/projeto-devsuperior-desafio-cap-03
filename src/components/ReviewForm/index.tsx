import { useForm } from 'react-hook-form';

import './styles.css';

type Props = {
  movieId: string;
}

type FormData = {
  movieId: string;
  review: string;
}

const ReviewForm = ({ movieId }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = movieId;

    console.log(formData);
    
  }

  return (
    <div className="base-card  movie-review-card">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register("review", {
              required: 'Campo obrigatório'
            })}
            type="text"
            className="form-control  base-input"
            placeholder="Deixe sua avaliação aqui"
            name="review"
          />
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
