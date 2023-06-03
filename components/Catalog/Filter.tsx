import {
  CombinedEvent,
  IInitialFilterState,
  IInitialState,
} from '@/types/catalog.types';
import { useRouter } from 'next/router';
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import lists from '../../utils/sellNowLists';
import FilterButton from './FilterButton';

interface IFilterProps {
  filters: IInitialFilterState;
  setFilters: Dispatch<SetStateAction<IInitialFilterState>>;
}

const Filter: React.FC<IFilterProps> = ({ filters, setFilters }) => {
  const router = useRouter();

  const memorizedState = useMemo(
    () => ({
      Category: false,
      Brand: false,
      Color: false,
      Type: false,
      Condition: false,
      Price: false,
      SortBy: false,
    }),
    []
  );

  const [dropdownOpen, setDropdownOpen] =
    useState<IInitialState>(memorizedState);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(memorizedState);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDropdownOpen(memorizedState);
      }
    };

    window.addEventListener('click', handleOutsideClick);
    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [memorizedState]);

  const filterDropdownHandler = (name: string, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
    }
    if (dropdownOpen[name] === true) {
      setDropdownOpen(memorizedState);
      return;
    }
    setDropdownOpen({ ...memorizedState, [name]: true });
  };

  const handleRadio = ({
    name,
    value,
    event,
  }: {
    name: string;
    value: string | number;
    event: CombinedEvent;
  }) => {
    event.stopPropagation();
    setFilters((prevState) => ({ ...prevState, [name]: value }));

    router.push({
      pathname: '/catalog',
      query: { ...router.query, [name]: value },
    });
  };

  useEffect(() => {
    // console.log(router.query);
    setFilters((prevState) => {
      const {
        category = '',
        brand = '',
        color = '',
        type = '',
        condition = '',
        to = '',
        from = '',
        sortby = '',
      } = router.query;
      const updatedFilters: IInitialFilterState = {
        category: category as string,
        brand: brand as string,
        color: color as string,
        type: type as string,
        condition: condition as string,
        from: from as string | number,
        to: to as string | number,
        sortby: sortby as string,
      };
      return { ...prevState, ...updatedFilters };
    });
  }, [router.query, setFilters]);

  return (
    <FilterWrapper>
      {Object.keys(memorizedState).map((value, index) => (
        <FilterButton
          key={index}
          dropdownOpen={dropdownOpen}
          lists={lists}
          filterDropdownHandler={filterDropdownHandler}
          text={value}
          initialState={memorizedState}
          filters={filters}
          handleRadio={handleRadio}
          setFilters={setFilters}
          dropdownRef={dropdownRef}
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
