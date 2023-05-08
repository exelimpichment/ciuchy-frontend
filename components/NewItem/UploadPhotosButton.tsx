import { FiPlus } from 'react-icons/fi';
import styled from 'styled-components';

function UploadPhotosButton() {
  return (
    <UploadPhotosButtonWrapper type="button" className="btn">
      <span className="svg-container">
        <FiPlus />
      </span>
      <span> Upload photo</span>
    </UploadPhotosButtonWrapper>
  );
}

export default UploadPhotosButton;

const UploadPhotosButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  border: 1px solid #c45f55;
  border-radius: 4px;
  color: #c45f55;
  font-weight: 500;
  height: 42px;
  min-width: 160px;
  margin: 1.3rem 0 1.3rem 0;

  .svg-container {
    display: flex;
    align-items: center;
    padding-right: 4px;
  }

  &:hover {
    transition: all ease 0.5s;
    background-color: #ffffff80;
  }

  &:disabled {
    background-color: #ffffffa2;
  }
`;
