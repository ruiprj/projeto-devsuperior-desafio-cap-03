import './styles.css';

const Login = () => {
  return (
    <div className="base-card  login-card">
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

        <div className="btn-container">
          <button
            className="btn  btn-primary  btn-custom"
          >
            <h6>FAZER LOGIN</h6>
          </button>
        </div>

        {/* <ButtonCustom width='100%' text='FAZER LOGIN' /> */}
      </form>
    </div>
  );
};

export default Login;
