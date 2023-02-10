import Image from 'next/image';
import styled from 'styled-components';
import user from '../../public/user.png';
import SellNowButton from './SellNowButton';

function UserSellNow() {
  return (
    <Wrapper>
      <Image className="img" src={user} alt="user image" />
      {/* <img src={user} alt="user image" /> */}

      <SellNowButton />
    </Wrapper>
  );
}

export default UserSellNow;

const Wrapper = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  .img {
    height: 33px;
    width: 33px;
  }
`;
