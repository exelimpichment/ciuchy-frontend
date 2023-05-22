import { TiTick } from 'react-icons/ti';
import styled from 'styled-components';

const tempEmail = 'oldestspy@gmail.com';

function EmailPhoneSection() {
  return (
    <EmailPhoneSectionWrapper>
      <div className="facebook__title-container">
        <p className="facebook__title">{tempEmail}</p>
        <p
          className="facebook__title"
          style={{ color: 'rgb(117, 117, 117)', fontSize: '0.9rem' }}
        >
          Verified
          <span>
            <TiTick />
          </span>
        </p>
      </div>
    </EmailPhoneSectionWrapper>
  );
}

export default EmailPhoneSection;

const EmailPhoneSectionWrapper = styled.div`
  background-color: #fff;
  padding: 2rem;
  font-size: 1.2rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;

  .facebook__title {
    display: flex;
    align-items: center;
  }

  span {
    color: green;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
  }
`;
