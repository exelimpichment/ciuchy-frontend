import { IItem } from '@/types/user.types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

function ItemCard({ item }: { item: IItem }) {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/item/${id}`);
  };

  return (
    <ItemCardWrapper onClick={() => handleClick(item._id)}>
      <div className="item-card__image-container">
        <Image
          src={item.images[0]}
          alt="item image"
          //   width={230}
          //   height={500}
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="item-card__text-container">
        <div className="item-card__price">USD {item.price}</div>
        <div className="item-card__title">{item.title}</div>
      </div>
    </ItemCardWrapper>
  );
}

export default ItemCard;

const ItemCardWrapper = styled.div`
  min-width: 230px;
  min-height: 430px;
  padding: 0 0.5rem 1rem 0.5rem;
  font-size: 1.03rem;
  cursor: pointer;

  .item-card__image-container {
    min-width: 100%;
    min-height: 350px;
    position: relative;
  }

  .item-card__text-container {
    padding: 8px 0;
    display: flex;
    flex-direction: column;

    .item-card__title {
      color: #787878;
    }

    .item-card__price {
      padding-bottom: 0px;
    }
  }
`;
