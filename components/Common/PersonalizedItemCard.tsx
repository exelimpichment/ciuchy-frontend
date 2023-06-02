import { IItem } from '@/types/user.types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

function PersonalizedItemCard({ item }: { item: IItem }) {
  const router = useRouter();

  const handleImageClick = (id: string) => {
    router.push(`/item/${id}`);
  };
  const handleUserClick = (id: string) => {
    router.push(`/user/${id}`);
  };

  return (
    <PersonalizedItemCardWrapper>
      <div
        className="card__user-info"
        onClick={() => handleUserClick(item.owner)}
      >
        <div className="userinfo__img-container">
          <Image src={item.ownerImage} width={38} height={38} alt="user" />
        </div>
        <div className="userinfo__information">
          <p className="userinfo__username">{item.ownerName}</p>
        </div>
      </div>

      <div
        className="item-card__image-container"
        onClick={() => handleImageClick(item._id)}
      >
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
    </PersonalizedItemCardWrapper>
  );
}

export default PersonalizedItemCard;

const PersonalizedItemCardWrapper = styled.div`
  p {
    font-size: 1rem;
    color: black;
  }

  background-color: #fff;
  .card__user-info {
    display: flex;
    align-items: center;
    cursor: pointer;

    .userinfo__img-container {
      display: flex;
      align-items: center;
    }
  }

  min-width: 230px;
  min-height: 430px;
  padding: 0 0.5rem 0.5rem 0.5rem;
  font-size: 1.03rem;

  .item-card__image-container {
    min-width: 100%;
    min-height: 350px;
    position: relative;
    cursor: pointer;
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
