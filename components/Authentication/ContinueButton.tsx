import styled from 'styled-components';

// modify it and use in multiple places with props etc.
// tem vars

function ContinueButton({ isLoading }: { isLoading: boolean }) {
  return (
    <ConfirmButtonWrapper
      type="submit"
      disabled={isLoading}
      className="btn"
      onClick={() => {
        console.log('confirm');
      }}
    >
      {isLoading ? 'Loading...' : 'Continue'}
    </ConfirmButtonWrapper>
  );
}

export default ContinueButton;

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
