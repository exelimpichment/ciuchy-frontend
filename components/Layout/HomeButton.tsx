import Image from 'next/image';
import styled from 'styled-components';
import ciuchy from '../../public/ciuchy.jpg';

function HomeButton() {
  return (
    <Wrapper
      type="button"
      onClick={() => {
        console.log('go home, mate');
      }}
    >
      <Image priority src={ciuchy} height={50} alt="ciuchy website logo" />
    </Wrapper>
  );
}

export default HomeButton;

const Wrapper = styled.button`
  cursor: pointer;
  height: 50px;
`;
