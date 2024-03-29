import styled from 'styled-components';

const handleProfileDetailsUpdateButton = () => {};

function ProfileDetailsUpdateButton() {
  return (
    <ProfileDetailsUpdateButtonWrapper>
      <button type="button" onClick={handleProfileDetailsUpdateButton}>
        Update profile
      </button>
    </ProfileDetailsUpdateButtonWrapper>
  );
}

export default ProfileDetailsUpdateButton;

const ProfileDetailsUpdateButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;

  button {
    background-color: #c45f55;
    font-size: 1.2rem;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 4px;
    color: white;
    font-weight: 500;
    height: 42px;
    min-width: 120px;

    &:hover {
      background-color: #a7655f;
      transition: all ease 0.5s;
    }

    &:disabled {
      background-color: #763933;
    }
  }
`;
