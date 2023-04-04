import { Inter } from '@next/font/google';
import Link from 'next/link';
import styled from 'styled-components';
import navigationItems from '../../utils/navigationItems';
const inter = Inter({ subsets: ['latin'], weight: '400' });

function NavigationBar() {
  return (
    <>
      <Wrapper className={inter.className}>
        <div className="container">
          <ul className="navbar__inner">
            {navigationItems.map((navigationItem) => (
              <li key={navigationItem.id}>
                <Link href={navigationItem.path} legacyBehavior>
                  <a className="link">{navigationItem.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </>
  );
}

export default NavigationBar;

const Wrapper = styled.div`
  border-bottom: 1px #d6d6d6 solid;

  .navbar__inner {
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
