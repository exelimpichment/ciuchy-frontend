import styled from 'styled-components';

interface IMainButton {
  isLoading: boolean;
  onClick?: () => void;
  text: string;
}

function MainButton({ isLoading, onClick, text }: IMainButton) {
  return (
    <ConfirmButtonWrapper
      type="button"
      disabled={isLoading}
      className="btn"
      onClick={onClick ? onClick : () => {}}
    >
      {isLoading ? 'Loading...' : `${text}`}
    </ConfirmButtonWrapper>
  );
}

export default MainButton;

const ConfirmButtonWrapper = styled.button`
  background-color: #c45f55;
  font-size: 1.2rem;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  height: 42px;
  width: 100%;
  margin: 1.3rem 0 1.3rem 0;

  &:hover {
    background-color: #a7655f;
    transition: all ease 0.5s;
  }

  &:disabled {
    background-color: #763933;
  }
`;
