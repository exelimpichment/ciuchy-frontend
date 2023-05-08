import { useState } from 'react';
import styled from 'styled-components';
import DraftButton from './DraftButton';
import UploadButton from './UploadButton';

function ButtonPanel() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <ButtonPanelWrapper>
      <DraftButton isLoading={isLoading} text={'Draft'} />
      <UploadButton isLoading={isLoading} text={'Upload'} />
    </ButtonPanelWrapper>
  );
}

export default ButtonPanel;

const ButtonPanelWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
