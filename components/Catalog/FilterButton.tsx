import { IInitialFilterState, IInitialState } from '@/types/catalog.types';
import { IList } from '@/utils/sellNowLists';
import { Dispatch, SetStateAction } from 'react';
import { TbChevronDown } from 'react-icons/tb';
import styled from 'styled-components';
import DropdownFilterLinesContainer from './FilterDropdown/DropdownFilterLinesContainer';

interface IFilterButtonProps {
  text: string;
  dropdownOpen: IInitialState;
  filterDropdownHandler: (name: string) => void;
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
  handleRadio: ({ name, value }: { name: string; value: string }) => void;
  setFilters: Dispatch<SetStateAction<IInitialFilterState>>;
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
}) => {
  return (
    <FilterSelectionSection>
      <FilterButtonWrapper
        type="button"
        onClick={() => filterDropdownHandler(text)}
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
  padding: 8px 15px;
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
