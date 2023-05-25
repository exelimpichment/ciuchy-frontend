import { IInitialFilterState } from '@/types/catalog.types';
import { IList } from '@/utils/sellNowLists';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import DropdownFilterLine from './DropdownFilterLine';
import PriceMenuDropDown from './PriceMenuDropDown';

interface IDropdownFilterLinesContainerProps {
  list: IList[];
  handleRadio: ({ name, value }: { name: string; value: string }) => void;
  filters: IInitialFilterState;
  setFilters: Dispatch<SetStateAction<IInitialFilterState>>;
}

const DropdownFilterLinesContainer: React.FC<
  IDropdownFilterLinesContainerProps
> = ({ list, handleRadio, filters, setFilters }) => {
  if (list[0].group === 'price') {
    return <PriceMenuDropDown filters={filters} setFilters={setFilters} />;
  }

  return (
    <DropdownFilterLinesContainerWrapper>
      {list.map((item) => (
        <DropdownFilterLine
          key={item.key}
          item={item}
          handleRadio={handleRadio}
          filters={filters}
        />
      ))}
    </DropdownFilterLinesContainerWrapper>
  );
};

export default DropdownFilterLinesContainer;

const DropdownFilterLinesContainerWrapper = styled.div`
  width: 220px;
  max-height: 340px;
  position: absolute;
  background-color: #fff;
  overflow: scroll;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
