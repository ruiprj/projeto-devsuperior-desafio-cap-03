import './styles.css';

import ResultCard from 'components/ResultCard';
import ImageCard from 'components/ImageCard';
import { useState } from 'react';
import axios from 'axios';
import ImageLoader from './ImageLoader';
import InfoLoader from './InfoLoader';

type FormData = {
  githubUser: string;
}

type GitHubInformation = {
  avatar_url: string,
  html_url: string,
  followers: string,
  location: string,
  name: string,
}

const GitHubSearch = () => {

  const [gitHubInformation, setGitHubInformation] = useState<GitHubInformation>();

  const [formData, setFormData] = useState<FormData>({
    githubUser: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData( { ...formData, [name]: value } );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    axios.get(`https://api.github.com/users/${formData.githubUser}`)
      .then((response) => {
        setGitHubInformation(response.data);
      })
      .catch((error) => {
        setGitHubInformation(undefined);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="github-search-container">
      <div className="container  search-container">
        <h1>Encontre um perfil GitHub</h1>

        <form onSubmit={ handleSubmit }>
          <div className="form-container">
            <input
              type="text"
              name="githubUser"
              value={formData.githubUser}
              className="search-input"
              placeholder="Usuário GitHub"
              onChange={ handleChange }
            />

            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      
      {
        gitHubInformation &&
        <div className="container  github-info-card">
          
          {
            isLoading ? <ImageLoader /> :
            <div className="github-image-container">
              <ImageCard url={gitHubInformation?.avatar_url} profileName={gitHubInformation.name} />
            </div>
          }

          <div className="container  github-all-info-container">
            <div className="info-title">
              <h3>Informações</h3>
            </div>

            {
              isLoading ? <InfoLoader /> :
              <div className="github-info-card-detail">
                <ResultCard title="Perfil" description={gitHubInformation.html_url} link={true} />
                <ResultCard title="Seguidores" description={gitHubInformation.followers} link={false} />
                <ResultCard title="Localidade" description={gitHubInformation.location} link={false} />
                <ResultCard title="Nome" description={gitHubInformation.name} link={false} />
              </div>
            }
          </div>
          
        </div>
      }
    </div>
  );
};

export default GitHubSearch;
