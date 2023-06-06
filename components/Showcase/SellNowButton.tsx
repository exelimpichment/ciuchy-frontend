import Link from 'next/link';
import styled from 'styled-components';

function SellNowButton() {
  return (
    <Wrapper href="/item/new">
      <p>Sell now</p>
    </Wrapper>
  );
}

export default SellNowButton;

const Wrapper = styled(Link)`
  background-color: #c45f55;
  font-size: 1.2rem;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  height: 42px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #a7655f;
    transition: all ease 0.5s;
  }
`;
