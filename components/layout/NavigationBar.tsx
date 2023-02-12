import { Inter } from '@next/font/google';
import Link from 'next/link';
import styled from 'styled-components';
import navigationItems from '../../utils/navigationItems';
const inter = Inter({ subsets: ['latin'], weight: '400' });

function NavigationBar() {
  return (
    <>
      <Wrapper className={inter.className}>
        <div className="navbar-container">
          {navigationItems.map((navigationItem) => (
            <Link
              className="link"
              key={navigationItem.id}
              href={navigationItem.path}
            >
              {navigationItem.name}
            </Link>
          ))}
        </div>
      </Wrapper>
    </>
  );
}

export default NavigationBar;

const Wrapper = styled.nav`
  padding: 0 20px 0 20px;
  border-bottom: 1px #d6d6d6 solid;

  .navbar-container {
    max-width: var(--websiteWidth);
    margin: auto;
    height: 55px;
    display: flex;
    align-items: center;

    .link {
      cursor: pointer;
      color: #303030;
      font-size: 1.1rem;
      line-height: 43px;
      letter-spacing: 0.05em;
      margin-left: 25px;

      &:hover {
        color: #000000;
        font-weight: 500;
      }
    }
  }
`;
