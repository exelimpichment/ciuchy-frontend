import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import user from '../../public/user.png';
import SellNowButton from './SellNowButton';

function UserSellNow() {
  const router = useRouter();
  return (
    <Wrapper>
      <Image
        className="img"
        src={user}
        alt="user image"
        onClick={() => router.push('/user/dmsd')}
      />

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
