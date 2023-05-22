import styled from 'styled-components';

function ChangePasswordButton() {
  return (
    <ChangePasswordButtonWrapper type="button">
      Change
    </ChangePasswordButtonWrapper>
  );
}

export default ChangePasswordButton;

const ChangePasswordButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 20px;
  border: 1px solid #c45f55;
  border-radius: 4px;
  color: #c45f55;
  font-weight: 500;
  min-height: 35px;
  min-width: 110px;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
    transition: all ease 0.5s;
  }
`;
