import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import ciuchy from '../../public/ciuchy.jpg';

function HomeButton() {
  return (
    <Wrapper>
      <Link href="/">
        <Image priority src={ciuchy} height={50} alt="ciuchy website logo" />
      </Link>
    </Wrapper>
  );
}

export default HomeButton;

const Wrapper = styled.div`
  cursor: pointer;
  height: 50px;
`;
