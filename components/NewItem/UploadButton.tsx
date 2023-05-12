import styled from 'styled-components';

interface IUploadButton {
  isLoading: boolean;
  text: string;
  handleUpload: () => void;
}

function UploadButton({ isLoading, text, handleUpload }: IUploadButton) {
  return (
    <UploadButtonWrapper
      type="button"
      disabled={isLoading}
      className="btn"
      onClick={handleUpload}
    >
      {text}
    </UploadButtonWrapper>
  );
}

export default UploadButton;

const UploadButtonWrapper = styled.button`
  background-color: #c45f55;
  font-size: 1.2rem;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  height: 42px;
  width: 120px;
  margin: 1.3rem 0 1.3rem 1rem;

  &:hover {
    background-color: #a7655f;
    transition: all ease 0.5s;
  }

  &:disabled {
    background-color: #763933;
  }
`;
