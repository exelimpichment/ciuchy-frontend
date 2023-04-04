import styled from 'styled-components';
import heroImage from '../../public/heroImage.jpg';
import Banner from './Banner';

function Hero() {
  return (
    <Wrapper style={backgroundImage}>
      <div className="container">
        <Banner />
      </div>
    </Wrapper>
  );
}

export default Hero;

const backgroundImage = { backgroundImage: `url(${heroImage.src})` };
const Wrapper = styled.section`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
