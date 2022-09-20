import ContentLoader from 'react-content-loader';

import './styles.css';

const InfoLoader = () => (
  <div className="info-loader-container">
    <ContentLoader
      speed={2}
      width={400}
      height={150}
      viewBox="0 0 400 150"
      backgroundColor="#d6dbe4"
      foregroundColor="#94bce4"
    >
      <rect x="0" y="0" rx="5" ry="5" width="500" height="30" />
      <rect x="0" y="35" rx="5" ry="5" width="500" height="30" />
      <rect x="0" y="70" rx="5" ry="5" width="500" height="30" />
      <rect x="0" y="105" rx="5" ry="5" width="500" height="30" />
    </ContentLoader>
  </div>
);

export default InfoLoader;
