import styled from 'styled-components';
import FacebookButton from './FacebookButton';

function Facebook() {
  return (
    <FacebookWrapper>
      <div className="facebook__title-container">
        <p className="facebook__title">Facebook</p>
      </div>
      <div className="facebook__button-container">
        <FacebookButton />
      </div>
    </FacebookWrapper>
  );
}

export default Facebook;

const FacebookWrapper = styled.div`
  padding: 2rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;

  .facebook__title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
