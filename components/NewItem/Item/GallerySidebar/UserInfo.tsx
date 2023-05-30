import { Rating } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

interface IUserInfo {
  ownerImage: string;
  owner: string;
  ownerName: string;
  ownerRating: string;
}

const UserInfo: React.FC<IUserInfo> = ({
  ownerImage,
  owner,
  ownerName,
  ownerRating,
}) => {
  const router = useRouter();

  const handleClick = (owner: string) => {
    router.push(`/user/${owner}`);
  };

  return (
    <UserInfoWrapper>
      <div
        className="userinfo__img-container"
        onClick={() => handleClick(owner)}
      >
        <Image src={ownerImage} width={48} height={48} alt="user" />
      </div>
      <div className="userinfo__information">
        <p className="userinfo__username" onClick={() => handleClick(owner)}>
          {ownerName}
        </p>

        <Rating
          name="half-rating-read"
          value={Number(ownerRating)}
          precision={0.5}
          readOnly
        />
      </div>
    </UserInfoWrapper>
  );
};

export default UserInfo;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 13px 0;
  border-bottom: 1px solid #e5e5e5;

  .userinfo__img-container {
    cursor: pointer;
  }

  .userinfo__information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 15px;

    .userinfo__username {
      cursor: pointer;
    }
  }
`;
