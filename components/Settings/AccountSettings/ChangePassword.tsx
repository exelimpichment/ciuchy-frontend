import styled from 'styled-components';
import ChangePasswordButton from './ChangePasswordButton';

function ChangePassword() {
  return (
    <ChangePasswordWrapper>
      <div className="change-password__title-container">
        <p className="change-password__title">Change password</p>
      </div>
      <div className="deleteAccount__button-container">
        <ChangePasswordButton />
      </div>
    </ChangePasswordWrapper>
  );
}

export default ChangePassword;

const ChangePasswordWrapper = styled.div`
  margin-top: 2rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  font-size: 1.2rem;

  .change-password__title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
