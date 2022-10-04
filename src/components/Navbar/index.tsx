import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import history from "util/history";
import { getTokenData, isAuthenticated, removeAuthData, TokenData } from "util/requests";

import './styles.css';

type AuthData = {
  authenticated: boolean;
  tokenData?: TokenData;
}

const Navbar = () => {
  const [authData, setAuthData] = useState<AuthData>({ authenticated: false });

  useEffect(() => {
    if (isAuthenticated()) {

      setAuthData({
        authenticated: true,
        tokenData: getTokenData()
      });

    } else {

      setAuthData({
        authenticated: false,
      });

    }
  }, [])

  const handleLogoutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    removeAuthData();

    setAuthData({
      authenticated: false,
    });

    history.replace('/');
  }

  return (
    <nav className="navbar  main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>MovieFlix</h4>
        </Link>

        <div>
          { authData.authenticated ? (
            <>
              <span>{ authData.tokenData?.user_name }</span>

              <button className="btn  btn-primary  btn-logout-custom" onClick={ handleLogoutClick } >
                  <h6>SAIR</h6>
              </button>
            </>
          ) : "" }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
