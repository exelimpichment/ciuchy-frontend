import { Rating } from '@mui/material';
import Image from 'next/image';
import styled from 'styled-components';
import img from '../../../../public/user.png';
const rating = 4;

function UserInfo() {
  return (
    <UserInfoWrapper>
      <div className="userinfo__img-container">
        <Image src={img} width={48} height={48} alt="user" />
      </div>
      <div className="userinfo__information">
        <p className="userinfo__username">test test test test</p>

        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />
      </div>
    </UserInfoWrapper>
  );
}

export default UserInfo;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 13px 0;
  border-bottom: 1px solid #e5e5e5;

  .userinfo__information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding-left: 15px;
  }
`;
