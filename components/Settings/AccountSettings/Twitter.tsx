import styled from 'styled-components';
import TwitterButton from './TwitterButton';

function Twitter() {
  return (
    <TwitterWrapper>
      <div className="twitter__title-container">
        <p className="twitter__title">Twitter</p>
      </div>
      <div className="twitter__button-container">
        <TwitterButton />
      </div>
    </TwitterWrapper>
  );
}

export default Twitter;

const TwitterWrapper = styled.div`
  border-top: 1px solid #e6ecf0;
  padding: 2rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;

  .twitter__title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
