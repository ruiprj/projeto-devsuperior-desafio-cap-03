import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { requestBackendLogin } from 'util/requests';

import './styles.css';

type FormData = {
  username: string;
  password: string;
}

const Login = () => {
  const [hasError, setHasError] = useState(false);

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then(response => {
        setHasError(false);

        console.log('SUCESSO', response);
      })
      .catch(error => {
        setHasError(true);

        console.log('ERRO', error);
      });
  }


  return (
    <div className="base-card  login-card">
      <h1>LOGIN</h1>

      { hasError && (
        <div className="alert  alert-danger">
          Login inválido
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register("username")}
            type="text"
            className="form-control  base-input"
            placeholder="Email"
            name="username"
          />
        </div>

        <div className="mb-2">
          <input
            {...register("password")}
            type="password"
            className="form-control  base-input input-password-custom"
            placeholder="Password"
            name="password"
          />
        </div>

        <div className="btn-container">
          <button
            className="btn  btn-primary  btn-custom"
          >
            <h6>FAZER LOGIN</h6>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
