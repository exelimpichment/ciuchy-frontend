import styled from 'styled-components';
import DraftButton from './DraftButton';
import UploadButton from './UploadButton';

function ButtonPanel({
  handleUpload,
  isLoading,
}: {
  handleUpload: () => void;
  isLoading: boolean;
}) {
  return (
    <ButtonPanelWrapper>
      <DraftButton isLoading={isLoading} text={'Draft'} />
      <UploadButton
        isLoading={isLoading}
        text={'Upload'}
        handleUpload={handleUpload}
      />
    </ButtonPanelWrapper>
  );
}

export default ButtonPanel;

const ButtonPanelWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
