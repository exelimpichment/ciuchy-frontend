import { HandleRadio } from '@/types/authentication.types';
import { ISellItemForm } from '@/types/newItem.types';
import styled from 'styled-components';
import DropdownFormLine from './DropdownFormLine';

function DropdownLinesContainer({
  list,
  handleRadio,
  sellItemFormData,
}: {
  list: { key: number; value: string; group: string }[];
  handleRadio: HandleRadio;
  sellItemFormData: ISellItemForm;
}) {
  return (
    <DropdownLinesContainerWrapper>
      {list.map((item) => {
        return (
          <DropdownFormLine
            key={item.key}
            handleRadio={handleRadio}
            item={item}
            sellItemFormData={sellItemFormData}
          />
        );
      })}
    </DropdownLinesContainerWrapper>
  );
}

export default DropdownLinesContainer;

const DropdownLinesContainerWrapper = styled.div`
  max-height: 400px;
  overflow: scroll;
  width: 100%;
  position: absolute;
  left: 0;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &::-webkit-scrollbar {
    display: none;
  }
`;
