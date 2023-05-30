import { ISellItemForm } from '@/types/newItem.types';

import styled from 'styled-components';

function PriceSetter({
  sellItemFormData,
  handleChange,
}: {
  sellItemFormData: ISellItemForm;
  handleChange: (
    _e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) {
  return (
    <PriceSetterWrapper>
      <div className="priceSetterWrapper__amount">
        <p className="priceSetterWrapper__amount-text">Price</p>
        <label htmlFor="price"></label>
        <input
          onChange={handleChange}
          value={sellItemFormData.price}
          type="text"
          autoComplete="off"
          step="any"
          name="price"
          placeholder="$"
          maxLength={4}
          max="9999"
          // ===

          // type="text"
          // autoComplete="off"
          // onChange={handleChange}
          // value={filters.price.from}
          // maxLength={4}
          // name="from"
          // placeholder="$"
          // max="9999"
        />
      </div>
    </PriceSetterWrapper>
  );
}

export default PriceSetter;

const PriceSetterWrapper = styled.div`
  margin-bottom: 2rem;
  font-size: 1.2rem;
  background-color: #fff;

  input {
    all: unset;
    border-bottom: #9e9e9e 1px solid;
    min-width: 50%;
    &::placeholder {
      font-size: 1.2rem;
      color: #acacac;
    }

    &:focus {
      border-bottom: 1px #c45f55 solid;
    }
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .priceSetterWrapper__amount {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    border-bottom: 1px #f3f3f3 solid;
  }
`;
