import { getRandomImage } from './random_image';

import './polaroid_photo.scss';

export const PolaroidPhoto = () => {
  const disneyImageInfo = getRandomImage();

  return (
    <div className="polaroid__container">
      <img
        className="polaroid__image"
        src={disneyImageInfo.src}
        alt={disneyImageInfo.alt}
      />
      <p>{disneyImageInfo.tag}</p>
    </div>
  );
};
