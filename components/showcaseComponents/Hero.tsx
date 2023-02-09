import styled from 'styled-components';
import heroImage from '../../public/heroImage.jpg';
import SellNow from './SellNow';

function Hero() {
  return (
    <Wrapper style={backgroundImage}>
      <div className="sellNow-container">
        <SellNow />
      </div>
    </Wrapper>
  );
}

export default Hero;

const backgroundImage = { backgroundImage: `url(${heroImage.src})` };
const Wrapper = styled.div`
  height: 400px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding: 0 20px 0 20px;

  .sellNow-container {
    max-width: var(--websiteWidth);
    width: 100%;
    height: 100%;
    /* background-color: red; */
    z-index: 2;
    display: flex;
    justify-content: start;
    align-items: center;
  }
`;
