import Link from 'next/link';
import styled from 'styled-components';
import SellNowButton from './SellNowButton';

function Banner() {
  return (
    <Wrapper>
      <h2>Ready to style your wardrobe?</h2>
      <SellNowButton />
      <Link href="/t&c" className="link">
        Read about T&C
      </Link>
    </Wrapper>
  );
}

export default Banner;

const Wrapper = styled.div`
  min-height: 220px;
  width: 300px;
  background-color: #fff;
  padding: 2rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;

  h2 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.2;
  }

  .link {
    color: #c45f55;
    text-decoration: underline;
    &:hover {
      color: #b0564d;
      transition: all ease 0.5s;
    }
  }
`;
