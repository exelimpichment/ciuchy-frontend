import { Checkbox } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface DeleteAccountFallDownMenuProps {
  isConsentOn: boolean;
  setIsConsentOn: Dispatch<SetStateAction<boolean>>;
}

const DeleteAccountFallDownMenu: React.FC<DeleteAccountFallDownMenuProps> = ({
  isConsentOn,
  setIsConsentOn,
}) => {
  const handleChange = () => {
    setIsConsentOn(!isConsentOn);
  };
  return (
    <DeleteAccountFallDownMenuWrapper>
      <div className="delete-fallDown__textarea">
        <p className="delete-fallDown__textarea-title">Help us improve</p>
        <div className="textarea__container">
          <label htmlFor="helpUs"></label>
          <textarea
            placeholder="Tell us why you are closing your account"
            rows={3}
            name="description"
            autoComplete="off"
            minLength={10}
            maxLength={200}
          />
        </div>
      </div>

      <div className="delete-fallDown__consent">
        <p className="delete-fallDown__consent-title">
          I confirm that all my transactions are completed
        </p>
        <div className="consent__tickBox">
          <CustomCheckbox
            checked={isConsentOn}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </div>
      </div>
    </DeleteAccountFallDownMenuWrapper>
  );
};

export default DeleteAccountFallDownMenu;

const DeleteAccountFallDownMenuWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;

  .delete-fallDown__textarea {
    .delete-fallDown__textarea-title {
      align-self: self-start;
    }
    .textarea__container {
      min-width: 50%;
    }
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    textarea {
      all: unset;
      border-bottom: #9e9e9e 1px solid;
      min-width: 100%;
      &::placeholder {
        font-size: 1.1rem;
        color: #acacac;
      }

      &:focus {
        border-bottom: 1px #c45f55 solid;
      }
    }
  }

  .delete-fallDown__consent {
    font-size: 1.2rem;
    display: flex;
    padding: 1rem 2rem 1rem 2rem;
    justify-content: space-between;
    align-items: center;
    border-top: 1px rgb(243, 243, 243) solid;

    .delete-fallDown__consent-title {
      display: flex;
      align-items: center;
    }

    .consent__tickBox {
      display: flex;
      align-items: center;
    }
  }
`;

const CustomCheckbox = styled(Checkbox)`
  .MuiSvgIcon-root {
    font-size: 24px; /* Adjust the size as desired */
    color: #c45f55;
  }
`;
