import { toast } from 'react-toastify';
import styled from 'styled-components';

const handleClick = () => {
  toast.warning('This is under construction');
};

function TwitterButton() {
  return (
    <TwitterButtonWrapper type="button" onClick={handleClick}>
      Link
    </TwitterButtonWrapper>
  );
}

export default TwitterButton;

const TwitterButtonWrapper = styled.button`
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
