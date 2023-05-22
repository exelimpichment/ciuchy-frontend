import { TbChevronRight } from 'react-icons/tb';
import styled from 'styled-components';

interface IDeleteAccountProps {
  handleDeleteChevronClick: () => void;
  deleteSectionOpen: boolean;
}

const DeleteAccount: React.FC<IDeleteAccountProps> = ({
  handleDeleteChevronClick,
  deleteSectionOpen,
}) => {
  return (
    <DeleteAccountWrapper>
      <div className="locationSection__toggle-container">
        <p className="locationSection__country-text">Delete account</p>
      </div>
      <div className="deleteAccount__button-container">
        <button
          className="deleteAccount__button"
          type="button"
          onClick={handleDeleteChevronClick}
        >
          <TbChevronRight
            style={
              deleteSectionOpen ? { transform: 'rotate(90deg)' } : undefined
            }
          />
        </button>
      </div>
    </DeleteAccountWrapper>
  );
};

export default DeleteAccount;

const DeleteAccountWrapper = styled.div`
  margin-top: 2rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  font-size: 1.2rem;

  .deleteAccount__button {
    display: flex;
    justify-content: center;

    svg {
      font-size: 1.6rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: transform 0.3s ease-in-out;
    }
  }

  .locationSection__toggle-container {
    display: flex;
    align-items: center;
  }

  .toggle__container {
    display: flex;
    align-items: center;
  }
`;
