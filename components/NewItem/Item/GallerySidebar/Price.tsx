import styled from 'styled-components';

const price = 7.0;

function Price() {
  return (
    <PriceWrapper>
      <p>PLN {price}</p>
    </PriceWrapper>
  );
}

export default Price;

const PriceWrapper = styled.div`
  border-bottom: 1px solid #e5e5e5;
  p {
    font-size: 1.6rem;
    padding: 7px 0;
  }
`;
