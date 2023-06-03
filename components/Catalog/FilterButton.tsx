import {
  CombinedEvent,
  IInitialFilterState,
  IInitialState,
} from '@/types/catalog.types';
import styleSetter from '@/utils/filterStyleSetter';
import { IList } from '@/utils/sellNowLists';
import { Dispatch, RefObject, SetStateAction } from 'react';
import { TbChevronDown } from 'react-icons/tb';
import styled from 'styled-components';
import DropdownFilterLinesContainer from './FilterDropdown/DropdownFilterLinesContainer';

interface IFilterButtonProps {
  text: string;
  dropdownOpen: IInitialState;
  filterDropdownHandler: (name: string, event: React.MouseEvent) => void;
  initialState: IInitialState;
  lists: {
    [key: string]: IList[];
    brand: IList[];
    color: IList[];
    condition: IList[];
    category: IList[];
    type: IList[];
    sortby: IList[];
    price: IList[];
  };
  filters: IInitialFilterState;
  handleRadio: ({
    name,
    value,
    event,
  }: {
    name: string;
    value: string | number;
    event: CombinedEvent;
  }) => void;
  setFilters: Dispatch<SetStateAction<IInitialFilterState>>;
  dropdownRef: RefObject<HTMLDivElement>;
}

const FilterButton: React.FC<IFilterButtonProps> = ({
  text,
  dropdownOpen,
  lists,
  filterDropdownHandler,
  initialState,
  filters,
  handleRadio,
  setFilters,
  dropdownRef,
}) => {
  return (
    <FilterSelectionSection>
      <FilterButtonWrapper
        style={styleSetter({ filters, text })}
        type="button"
        onClick={(event) => filterDropdownHandler(text, event)}
      >
        {text}
        <TbChevronDown
          style={
            dropdownOpen[text] === true
              ? { transform: 'rotate(180deg)' }
              : undefined
          }
        />
      </FilterButtonWrapper>
      {dropdownOpen[text] && (
        <DropdownFilterLinesContainer
          dropdownRef={dropdownRef}
          handleRadio={handleRadio}
          filters={filters}
          list={lists[text.toLowerCase()]}
          setFilters={setFilters}
        />
      )}
    </FilterSelectionSection>
  );
};

export default FilterButton;

const FilterSelectionSection = styled.div``;

const FilterButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 1.5rem;
    margin-left: 4px;
    transform: translateY(1px);
  }

  margin-right: 0.7rem;
  padding: 6px 12px;
  border: 1px solid #c45f55;
  border-radius: 4px;
  color: #c45f55;
  font-size: 1.1rem;
  font-weight: 500;
  min-height: 31px;
  min-width: 110px;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
    transition: all ease 0.5s;
  }
`;
