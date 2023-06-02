import { ShowcaseProps } from '@/types/newItem.types';
import styled from 'styled-components';
import heroImage from '../../public/heroImage.jpg';
import Banner from './Banner';
import Suggestion from './Suggestion';

const Hero: React.FC<ShowcaseProps> = ({ suggestions }) => {
  const { bestPrice, forHim, latestItems } = suggestions;
  return (
    <>
      <BannerWrapper style={backgroundImage}>
        <div className="container">
          <Banner />
        </div>
      </BannerWrapper>
      <Suggestion itemList={bestPrice} text={'Best price'} />
      <Suggestion itemList={forHim} text={'For Him'} />
      <Suggestion itemList={latestItems} text={'New Items'} />
    </>
  );
};

export default Hero;

const backgroundImage = { backgroundImage: `url(${heroImage.src})` };

const BannerWrapper = styled.section`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
