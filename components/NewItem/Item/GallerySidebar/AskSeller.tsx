import styled from 'styled-components';

function AskSeller() {
  return <AskSellerWrapper>AskSeller</AskSellerWrapper>;
}

export default AskSeller;

const AskSellerWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;

  padding: 10px 20px;
  border: 1px solid #c45f55;
  border-radius: 4px;
  color: #c45f55;
  font-weight: 500;
  min-height: 37px;
  min-width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
    transition: all ease 0.5s;
  }
`;
