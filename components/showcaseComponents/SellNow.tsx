import Link from 'next/link';
import styled from 'styled-components';
import SellNowButtonHero from './SellNowButtonHero';

function SellNow() {
  return (
    <Wrapper>
      <h1>Ready to style your wardrobe?</h1>
      <SellNowButtonHero />
      <Link href="/t&c" className="link">
        Read about T&C
      </Link>
    </Wrapper>
  );
}

export default SellNow;

const Wrapper = styled.div`
  height: 220px;
  width: 300px;
  background-color: #fff;
  padding: 2rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;

  h1 {
    font-weight: 400;
    font-size: 2rem;
    line-height: normal;
  }

  .link {
    color: #c45f55;
    text-decoration: underline;
    &:hover {
      color: #b0564d;
    }
  }
`;
