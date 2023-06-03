import { IInitialFilterState } from '@/types/catalog.types';
import {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  RefObject,
  SetStateAction,
} from 'react';
import styled from 'styled-components';

type CombinedEvent<T = HTMLElement> = ChangeEvent<T> | MouseEvent<T>;

interface IPriceMenuDropDownProps {
  filters: IInitialFilterState;
  setFilters: Dispatch<SetStateAction<IInitialFilterState>>;
  dropdownRef: RefObject<HTMLDivElement>;
  handleRadio: ({
    name,
    value,
    event,
  }: {
    name: string;
    value: string | number;
    event: CombinedEvent;
  }) => void;
}

const PriceMenuDropDown: React.FC<IPriceMenuDropDownProps> = ({
  filters,
  setFilters,
  dropdownRef,
  handleRadio,
}) => {
  return (
    <PriceMenuDropDownWrapper ref={dropdownRef}>
      <div className="price__from">
        <p>From</p>
        <label htmlFor="FromPrice"></label>
        <input
          type="text"
          autoComplete="off"
          onChange={(event) =>
            handleRadio({ name: 'from', value: event.target.value, event })
          }
          value={filters.from}
          maxLength={4}
          name="from"
          placeholder="$"
          max="9999"
        />
      </div>
      <div className="price__to">
        <p>To</p>
        <label htmlFor="ToPrice"></label>
        <input
          onChange={(event) =>
            handleRadio({ name: 'to', value: event.target.value, event })
          }
          value={filters.to}
          type="text"
          autoComplete="off"
          maxLength={4}
          name="to"
          placeholder="$"
        />
      </div>
    </PriceMenuDropDownWrapper>
  );
};

export default PriceMenuDropDown;

const PriceMenuDropDownWrapper = styled.div`
  width: 220px;
  position: absolute;
  background-color: #fff;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  overflow: hidden;

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  p {
    padding-bottom: 6px;
    font-size: 0.9rem;
  }

  .price__from,
  .price__to {
    padding: 10px;
  }
  input {
    all: unset;
    font-size: 1.1rem;
    width: 100%;
    &::placeholder {
      font-size: 1.1rem;
      color: #acacac;
    }

    &:focus {
      border-bottom: 1px #c45f55 solid;
    }
  }
`;
