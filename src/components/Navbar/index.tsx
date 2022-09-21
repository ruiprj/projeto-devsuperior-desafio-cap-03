import { Link } from "react-router-dom";

import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar  main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>MovieFlix</h4>
        </Link>

        <button className="btn  btn-primary  btn-logout-custom" >
            <h6>SAIR</h6>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
