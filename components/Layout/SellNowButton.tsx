import styled from 'styled-components';

// modify it and use in multiple places with props etc.

function SellNowButton() {
  return (
    <Wrapper
      type="button"
      className="btn"
      onClick={() => {
        console.log('sell now');
      }}
    >
      Sell now
    </Wrapper>
  );
}

export default SellNowButton;

const Wrapper = styled.button`
  background-color: #c45f55;
  margin-left: 20px;
  padding: 0 8px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  height: 29px;

  &:hover {
    background-color: #a7655f;
  }
`;
