import styled from 'styled-components';
import AskSeller from './AskSeller';
import BuyNow from './BuyNow';

function ButtonSection() {
  return (
    <ButtonSectionWrapper>
      <BuyNow />
      <AskSeller />
    </ButtonSectionWrapper>
  );
}

export default ButtonSection;

const ButtonSectionWrapper = styled.div``;
