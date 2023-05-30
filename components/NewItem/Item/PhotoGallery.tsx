import { IItem } from '@/types/user.types';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import SingleImage from './SingleImage';

function PhotoGallery({
  images,
  additionalItems,
}: {
  images: string[];
  additionalItems: IItem[];
}) {
  console.log(additionalItems);

  const [main, setMain] = useState(images[0]);

  const handleThumbnailClick = (image: string) => {
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
            width={600}
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

      <div className="photo-gallery__additional-items"></div>
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

  .photo-gallery__additional-items {
    background-color: red;
    width: 100%;
    height: 400px;
  }
`;
