import styled from 'styled-components';

function BuyNow() {
  return <BuyNowWrapper>BuyNow</BuyNowWrapper>;
}

export default BuyNow;

const BuyNowWrapper = styled.button`
  background-color: #c45f55;
  font-size: 1.1rem;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  min-height: 37px;
  min-width: 100%;
  padding: 10px 20px;

  margin: 1rem 0;

  &:hover {
    background-color: #a7655f;
    transition: all ease 0.5s;
  }

  &:disabled {
    background-color: #763933;
  }
`;
