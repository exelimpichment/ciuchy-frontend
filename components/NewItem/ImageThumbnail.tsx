import Image from 'next/image';
import { RiCloseFill } from 'react-icons/ri';
import styled from 'styled-components';

function ImageThumbnail({
  url,
  fileName,
  deleteThumbnail,
}: {
  url: string;
  fileName: string;
  deleteThumbnail: (_thumbnail: string) => void;
}) {
  return (
    <ImageThumbnailContainer>
      <button type="button" onClick={() => deleteThumbnail(fileName)}>
        <RiCloseFill />
      </button>
      <div className="imageThumbnailContainer__image">
        <Image src={url} width={70} height={70} alt="thumbnail" />
      </div>
    </ImageThumbnailContainer>
  );
}

export default ImageThumbnail;

const ImageThumbnailContainer = styled.div`
  margin-right: 15px;
  padding-bottom: 2rem;
  position: relative;

  .imageThumbnailContainer__image {
    display: flex;
    align-items: center;
    overflow: hidden;
    height: 70px;
    width: 70px;
  }

  button {
    top: -15px;
    left: 0;
    position: absolute;
    font-size: 2.2rem;
    color: #c45f55;
    cursor: pointer;
    transform: translateX(-10px);

    &:hover {
      font-size: 2.3rem;
      color: #a7655f;
      transition: all 1s ease-in-out;
    }
  }
`;
