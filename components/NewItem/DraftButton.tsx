import styled from 'styled-components';

interface IDraftButton {
  isLoading: boolean;
  onClick?: () => void;
  text: string;
}

function DraftButton({ isLoading, onClick, text }: IDraftButton) {
  return (
    <DraftButtonWrapper
      // type="button"
      disabled={isLoading}
      className="btn"
      onClick={onClick ? onClick : () => {}}
    >
      {text}
    </DraftButtonWrapper>
  );
}

export default DraftButton;

const DraftButtonWrapper = styled.button`
  background-color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  border: 1px solid #c45f55;
  border-radius: 4px;
  color: #c45f55;
  font-weight: 500;
  height: 42px;
  width: 120px;
  margin: 1.3rem 0 1.3rem 0;

  &:hover {
    background-color: #e6e6e6;
    transition: all ease 0.5s;
  }

  &:disabled {
    background-color: #f0f0f0;
  }
`;
