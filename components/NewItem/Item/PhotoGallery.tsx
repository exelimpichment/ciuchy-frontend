import PersonalizedItemCard from '@/components/Common/PersonalizedItemCard';
import { IItem } from '@/types/user.types';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SingleImage from './SingleImage';

function PhotoGallery({
  images,
  additionalItems,
}: {
  images: string[];
  additionalItems: IItem[];
}) {
  const [main, setMain] = useState(images[0]);

  useEffect(() => {
    setMain(images[0]);
  }, [images]);

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

      <Link href={`/user/${additionalItems[0].owner}`}>
        <p>View all items</p>
      </Link>

      <div className="photo-gallery__additional-items">
        {additionalItems.map((item) => (
          <PersonalizedItemCard key={item._id} item={item} />
        ))}
      </div>
    </PhotoGalleryWrapper>
  );
}

export default PhotoGallery;

const PhotoGalleryWrapper = styled.section`
  flex-grow: 1;

  p {
    font-size: 1.2rem;
    color: black;
    padding: 1.3rem 7px 1.3rem 7px;

    cursor: pointer;
    text-align: end;

    &:hover {
      color: rgb(117, 117, 117);
    }
  }
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
    --auto-grid-min-size: 16rem;
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--auto-grid-min-size), 1fr)
    );
    grid-gap: 1rem;
  }
`;
