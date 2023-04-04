import styled from 'styled-components';

// modify it and use in multiple places with props etc.

function SellNowButton() {
  return (
    <Wrapper
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
  font-size: 1.2rem;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  height: 42px;
  width: 100%;

  &:hover {
    background-color: #a7655f;
    transition: all ease 0.5s;
  }
`;
