import { HiPlus } from 'react-icons/hi';
import styled from 'styled-components';

function UploadPhotosButton() {
  return (
    <UploadPhotosButtonWrapper>
      <input type="file" />
      <span className="svg-container">
        <HiPlus />
      </span>
      <span>Custom Upload</span>
    </UploadPhotosButtonWrapper>
  );
}

export default UploadPhotosButton;

const UploadPhotosButtonWrapper = styled.label`
  input[type='file'] {
    display: none;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  font-size: 1.15rem;
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
    font-size: 1.35rem;
  }

  &:hover {
    transition: all ease 0.5s;
    background-color: #ffffff80;
  }

  &:disabled {
    background-color: #ffffffa2;
  }
`;
