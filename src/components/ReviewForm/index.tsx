import './styles.css';

const ReviewForm = () => {
  return (
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
  );
};

export default ReviewForm;
