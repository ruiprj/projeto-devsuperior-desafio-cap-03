import { useForm } from 'react-hook-form';

import './styles.css';

type FormData = {
  username: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    console.log(formData);
  }


  return (
    <div className="base-card  login-card">
      <h1>LOGIN</h1>

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
