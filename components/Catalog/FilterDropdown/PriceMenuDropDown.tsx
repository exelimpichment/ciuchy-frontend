import { IInitialFilterState } from '@/types/catalog.types';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface IPriceMenuDropDownProps {
  filters: IInitialFilterState;
  setFilters: Dispatch<SetStateAction<IInitialFilterState>>;
}

const PriceMenuDropDown: React.FC<IPriceMenuDropDownProps> = ({
  filters,
  setFilters,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('lol');
  };
  return (
    <PriceMenuDropDownWrapper>
      <div className="price__from">
        <p>From</p>
        <label htmlFor="FromPrice"></label>
        <input
          onChange={handleChange}
          value={filters.price.from}
          type="number"
          autoComplete="off"
          min="1"
          max="250"
          step="any"
          name="price"
          placeholder="$"
        />
      </div>
      <div className="price__to">
        <p>To</p>
        <label htmlFor="ToPrice"></label>
        <input
          onChange={handleChange}
          value={filters.price.to}
          type="number"
          autoComplete="off"
          min="1"
          max="250"
          step="any"
          name="price"
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
