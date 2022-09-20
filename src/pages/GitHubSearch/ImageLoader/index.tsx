import ContentLoader from "react-content-loader"

import './styles.css';

const ImageLoader = () => (
  <div className="image-loader-container">
    <ContentLoader
      speed={2}
      width={247}
      height={247}
      viewBox="0 0 247 247"
      backgroundColor="#d6dbe4"
      foregroundColor="#94bce4"
    >
      <rect x="0" y="0" rx="2" ry="2" width="300" height="300" />
    </ContentLoader>
  </div>
);

export default ImageLoader;
