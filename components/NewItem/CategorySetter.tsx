import { ISellItemForm } from '@/types/newItem.types';
import { useState } from 'react';
import styled from 'styled-components';
import {
  brandsList,
  categoryList,
  conditionList,
} from '../../utils/sellNowLists';
import DropdownLinesContainer from './dropdownFormIput/DropdownLinesContainer';

function CategorySetter({
  sellItemFormData,
  handleChange,
}: {
  sellItemFormData: ISellItemForm;
  handleChange: (
    _e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) {
  const initialState = { category: false, brand: false, condition: false };

  interface IInitialState {
    category: boolean;
    brand: boolean;
    condition: boolean;
  }

  const [dropdownOpen, setDropdownOpen] = useState<IInitialState>(initialState);

  const categoryDropdownHandler = () => {
    dropdownOpen.category
      ? setDropdownOpen({
          ...dropdownOpen,
          category: false,
          brand: false,
          condition: false,
        })
      : setDropdownOpen({
          ...dropdownOpen,
          category: true,
          brand: false,
          condition: false,
        });
  };
  const brandDropdownHandler = () => {
    dropdownOpen.brand
      ? setDropdownOpen({
          ...dropdownOpen,
          category: false,
          brand: false,
          condition: false,
        })
      : setDropdownOpen({
          ...dropdownOpen,
          category: false,
          brand: true,
          condition: false,
        });
  };
  const conditionDropdownHandler = () => {
    dropdownOpen.condition
      ? setDropdownOpen({
          ...dropdownOpen,
          category: false,
          brand: false,
          condition: false,
        })
      : setDropdownOpen({
          ...dropdownOpen,
          category: false,
          brand: false,
          condition: true,
        });
  };

  return (
    <CategorySetterWrapper>
      <div className="categorySetterWrapper__category">
        <p className="categorySetterWrapper__text">Category</p>
        <div className="categorySetterWrapper__input-container">
          <label htmlFor="category"></label>
          <input
            // onChange={handleChange}
            onClick={categoryDropdownHandler}
            // value={sellItemFormData.category}
            type="text"
            autoComplete="off"
            name="category"
            className="categorySetterWrapper__input"
            placeholder="select a category"
          />
          {dropdownOpen.category === true && (
            <DropdownLinesContainer list={categoryList} />
          )}
        </div>
      </div>

      <div className="categorySetterWrapper__brand">
        <p className="categorySetterWrapper__text">Brand</p>
        <div className="categorySetterWrapper__input-container">
          <label htmlFor="brand"></label>
          <input
            // onChange={handleChange}
            // value={sellItemFormData.brand}
            onClick={brandDropdownHandler}
            type="text"
            name="brand"
            autoComplete="off"
            className="categorySetterWrapper__input"
            placeholder="please select a brand"
          />
          {dropdownOpen.brand === true && (
            <DropdownLinesContainer list={brandsList} />
          )}
        </div>
      </div>

      <div className="categorySetterWrapper__condition">
        <p className="categorySetterWrapper__text">Condition</p>
        <div className="categorySetterWrapper__input-container">
          <label htmlFor="condition"></label>
          <input
            // onChange={handleChange}
            // value={sellItemFormData.condition}
            onClick={conditionDropdownHandler}
            type="text"
            name="condition"
            autoComplete="off"
            className="categorySetterWrapper__input"
            placeholder="select condition"
          />
          {dropdownOpen.condition === true && (
            <DropdownLinesContainer list={conditionList} />
          )}
        </div>
      </div>
    </CategorySetterWrapper>
  );
}

export default CategorySetter;

const CategorySetterWrapper = styled.div`
  margin-bottom: 2rem;
  font-size: 1.2rem;
  background-color: #fff;

  input {
    all: unset;
    caret-color: transparent;
    width: 100%;
    cursor: pointer;
    border-bottom: #9e9e9e 1px solid;
    &::placeholder {
      font-size: 1.2rem;
      color: #acacac;
    }
  }

  .categorySetterWrapper__input-container {
    min-width: 50%;
    position: relative;
  }

  .categorySetterWrapper__category,
  .categorySetterWrapper__brand,
  .categorySetterWrapper__condition {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    border-bottom: 1px #f3f3f3 solid;
  }
`;
