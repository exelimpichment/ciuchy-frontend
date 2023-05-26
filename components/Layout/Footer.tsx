import { toast } from 'react-toastify';
import styled from 'styled-components';

const links = [
  { key: 0, value: 'Privacy Policy' },
  { key: 1, value: 'Cookie Policy' },
  { key: 2, value: 'Terms & Conditions' },
  { key: 3, value: 'Our Platform' },
];

const handleClick = () => {
  toast.warning('This section is under construction');
};

function Footer() {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="footer__inner">
          <ul>
            {links.map(({ key, value }) => (
              <li key={key} onClick={handleClick}>
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  height: 65px;
  background-color: #f2f1f2;
  color: rgb(117, 117, 117);

  .footer__inner {
    height: 100%;
  }

  ul {
    display: flex;
    align-items: center;
    height: 65px;

    li {
      padding-left: 1rem;
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
