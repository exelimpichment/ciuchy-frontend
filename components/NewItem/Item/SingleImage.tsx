import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

interface SingleImageProps {
  image: string;
  handleThumbnailClick: (image: string) => void;
}

const SingleImage: React.FC<SingleImageProps> = ({
  image,
  handleThumbnailClick,
}) => {
  return (
    <SingleImageWrapper onClick={() => handleThumbnailClick(image)}>
      <Image
        src={image}
        fill={true}
        style={{ objectFit: 'cover' }}
        alt="thumbnail item image"
      ></Image>
    </SingleImageWrapper>
  );
};

export default SingleImage;

const SingleImageWrapper = styled.div`
  height: 100px;
  width: 100px;
  margin-left: 1rem;
  position: relative;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid rgb(196, 95, 85);
    transition: all 0.3s ease-in-out;
  }
`;
