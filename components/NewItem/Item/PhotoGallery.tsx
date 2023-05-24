import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import img1 from '../../../public/1.png';
import img2 from '../../../public/2.jpg';
import img3 from '../../../public/3.jpg';
import img4 from '../../../public/4.png';
import img5 from '../../../public/5.png';
import SingleImage from './SingleImage';

function PhotoGallery() {
  const images = [img1, img2, img3, img4, img5];
  const [main, setMain] = useState(images[0]);

  const handleThumbnailClick = (image: StaticImageData) => {
    setMain(image);
  };

  return (
    <PhotoGalleryWrapper>
      <div className="photo-gallery__big-picture">
        <div className="photo-gallery__img-container">
          <Image
            src={main}
            priority={true}
            height={600}
            alt="big item picture"
          />
        </div>
      </div>

      <div className="photo-gallery__thumbnails">
        {images.map((image, index) => (
          <SingleImage
            key={index}
            image={image}
            handleThumbnailClick={handleThumbnailClick}
          />
        ))}
      </div>
    </PhotoGalleryWrapper>
  );
}

export default PhotoGallery;

const PhotoGalleryWrapper = styled.section`
  flex-grow: 1;
  .photo-gallery__big-picture {
    padding: 0 1rem 1rem 1rem;
  }

  .photo-gallery__big-picture {
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .photo-gallery__img-container {
    /* height: 600px; */
  }
  .photo-gallery__thumbnails {
    display: flex;
    padding: 1rem 1rem 1rem 1rem;
    justify-content: center;
    cursor: pointer;
  }
`;
