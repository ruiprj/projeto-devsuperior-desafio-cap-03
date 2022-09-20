import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import Login from './Login';

import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="info-container">
                <h1>Avalie Filmes</h1>

                <p>Diga o que você achou do seu filme favorito</p>

                <div className="home-image-container">
                    <MainImage />
                </div>
            </div>

            <div className="auth-form-container">
                <Login />
            </div>

            {/* <Link to="/githubsearch">
                <button className="btn btn-primary btn-lg start-button">Começar</button>
            </Link> */}
        </div>
    );
}

export default Home;
