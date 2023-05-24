import GallerySidebar from '@/components/NewItem/Item/GallerySidebar';
import PhotoGallery from '@/components/NewItem/Item/PhotoGallery';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function Item() {
  const router = useRouter();
  const { id } = router.query;
  console.log({ id });

  return (
    <ItemWrapper>
      <div className="container">
        <div className="gallery__flex-container">
          <PhotoGallery />
          <GallerySidebar />
        </div>
      </div>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div`
  padding-top: 2rem;
  .gallery__flex-container {
    display: flex;
  }
`;
