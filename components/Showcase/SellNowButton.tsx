import { useRouter } from 'next/router';
import styled from 'styled-components';

function SellNowButton() {
  const router = useRouter();
  return (
    <Wrapper
      type="button"
      className="btn"
      onClick={() => {
        router.push('/item/new');
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
