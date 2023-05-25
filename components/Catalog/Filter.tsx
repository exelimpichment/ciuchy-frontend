import { IInitialFilterState, IInitialState } from '@/types/catalog.types';
import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import lists from '../../utils/sellNowLists';
import FilterButton from './FilterButton';

interface IFilterProps {
  filters: IInitialFilterState;
  setFilters: Dispatch<SetStateAction<IInitialFilterState>>;
}

const Filter: React.FC<IFilterProps> = ({ filters, setFilters }) => {
  const initialState = {
    Category: false,
    Brand: false,
    Color: false,
    Type: false,
    Condition: false,
    Price: false,
    SortBy: false,
  };

  const [dropdownOpen, setDropdownOpen] = useState<IInitialState>(initialState);

  const filterDropdownHandler = (name: string) => {
    if (dropdownOpen[name] === true) {
      setDropdownOpen(initialState);
      return;
    }
    setDropdownOpen({ ...initialState, [name]: true });
  };

  const handleRadio = ({ name, value }: { name: string; value: string }) => {
    setFilters({ ...filters, [name]: value });
  };

  return (
    <FilterWrapper>
      {Object.keys(initialState).map((value, index) => (
        <FilterButton
          key={index}
          dropdownOpen={dropdownOpen}
          lists={lists}
          filterDropdownHandler={filterDropdownHandler}
          text={value}
          initialState={initialState}
          filters={filters}
          handleRadio={handleRadio}
          setFilters={setFilters}
        />
      ))}
    </FilterWrapper>
  );
};

export default Filter;

const FilterWrapper = styled.div`
  display: flex;
  padding: 1.25rem 0;
`;
