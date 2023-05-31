import GallerySidebar from '@/components/NewItem/Item/GallerySidebar';
import PhotoGallery from '@/components/NewItem/Item/PhotoGallery';
import { IItem } from '@/types/user.types';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import styled from 'styled-components';

export default function Item(data: {
  singleItem: IItem;
  additionalItems: IItem[];
}) {
  const singleItem = data.singleItem;
  const additionalItems = data.additionalItems;

  const {
    price,
    title,
    type,
    brand,
    category,
    images,
    owner,
    ownerImage,
    ownerName,
    condition,
    description,
    ownerRating,
  } = singleItem;

  console.log('render');

  return (
    <ItemWrapper>
      <div className="container">
        <div className="gallery__flex-container">
          <PhotoGallery images={images} additionalItems={additionalItems} />
          <GallerySidebar
            price={price}
            description={description}
            condition={condition}
            title={title}
            type={type}
            brand={brand}
            category={category}
            owner={owner}
            ownerImage={ownerImage}
            ownerName={ownerName}
            ownerRating={ownerRating}
          />
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

export const getServerSideProps: GetServerSideProps<{
  singleItem: IItem;
}> = async ({ params }) => {
  const { id } = params as ParsedUrlQuery;
  console.log(id, '<===');

  const response = await fetch(`http://localhost:5001/api/v1/item/${id}`);
  const data = await response.json();
  console.log(data);

  return { props: data };
};
