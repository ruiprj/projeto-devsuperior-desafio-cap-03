import ButtonCustom from 'components/ButtonCustom';
import './styles.css';

const Login = () => {
  return (
    <div className="login-card">
      <h1>LOGIN</h1>

      <form action="">
        <div className="mb-4">
          <input
            type="text"
            className="form-control  base-input"
            placeholder="Email"
            name="username"
          />
        </div>

        <div className="mb-2">
          <input
            type="password"
            className="form-control  base-input input-password-custom"
            placeholder="Password"
            name="password"
          />
        </div>

        <ButtonCustom width='100%' text='FAZER LOGIN' />

      </form>
    </div>
  );
};

export default Login;
