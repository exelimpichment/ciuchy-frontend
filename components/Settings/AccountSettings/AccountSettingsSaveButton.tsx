import styled from 'styled-components';

interface IAccountSettingsSaveButtonProps {
  isConsentOn: boolean;
  deleteSectionOpen: boolean;
}
const AccountSettingsSaveButton: React.FC<IAccountSettingsSaveButtonProps> = ({
  deleteSectionOpen,
  isConsentOn,
}) => {
  const handleProfileDetailsUpdateButton = () => {};

  const buttonText = deleteSectionOpen ? 'Delete' : 'Save';

  return (
    <AccountSettingsSaveButtonWrapper>
      <button
        type="button"
        onClick={handleProfileDetailsUpdateButton}
        disabled={deleteSectionOpen && isConsentOn}
      >
        {buttonText}
      </button>
    </AccountSettingsSaveButtonWrapper>
  );
};

export default AccountSettingsSaveButton;

const AccountSettingsSaveButtonWrapper = styled.div`
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
