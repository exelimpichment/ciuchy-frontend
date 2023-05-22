import { HandleRadio } from '@/types/authentication.types';
import { ISellItemForm } from '@/types/newItem.types';
import { useState } from 'react';
import { TbChevronDown } from 'react-icons/tb';
import styled from 'styled-components';
import {
  brandsList,
  categoryList,
  conditionList,
  typeList,
} from '../../utils/sellNowLists';
import DropdownLinesContainer from './dropdownFormIput/DropdownLinesContainer';

function CategorySetter({
  handleRadio,
  sellItemFormData,
}: {
  handleRadio: HandleRadio;
  sellItemFormData: ISellItemForm;
}) {
  const initialState = {
    category: false,
    brand: false,
    type: false,
    condition: false,
  };

  interface IInitialState {
    category: boolean;
    brand: boolean;
    type: boolean;
    condition: boolean;
  }

  const [dropdownOpen, setDropdownOpen] = useState<IInitialState>(initialState);

  const categoryDropdownHandler = () => {
    dropdownOpen.category
      ? setDropdownOpen({
          ...dropdownOpen,
          category: false,
          brand: false,
          type: false,
          condition: false,
        })
      : setDropdownOpen({
          ...dropdownOpen,
          category: true,
          brand: false,
          condition: false,
          type: false,
        });
  };
  const brandDropdownHandler = () => {
    dropdownOpen.brand
      ? setDropdownOpen({
          ...dropdownOpen,
          category: false,
          brand: false,
          type: false,
          condition: false,
        })
      : setDropdownOpen({
          ...dropdownOpen,
          category: false,
          brand: true,
          type: false,
          condition: false,
        });
  };

  const typeDropdownHandler = () => {
    dropdownOpen.type
      ? setDropdownOpen({
          ...dropdownOpen,
          category: false,
          brand: false,
          type: false,
          condition: false,
        })
      : setDropdownOpen({
          ...dropdownOpen,
          category: false,
          brand: false,
          type: true,
          condition: false,
        });
  };

  const conditionDropdownHandler = () => {
    dropdownOpen.condition
      ? setDropdownOpen({
          ...dropdownOpen,
          category: false,
          brand: false,
          type: false,
          condition: false,
        })
      : setDropdownOpen({
          ...dropdownOpen,
          category: false,
          brand: false,
          type: false,
          condition: true,
        });
  };

  return (
    <CategorySetterWrapper>
      <div className="categorySetterWrapper__category">
        <p className="categorySetterWrapper__text">Category</p>
        <div className="categorySetterWrapper__input-container">
          <div
            className="input__chevron-container"
            onClick={categoryDropdownHandler}
          >
            <TbChevronDown
              style={
                dropdownOpen.category ? { transform: 'rotate(180deg)' } : {}
              }
            />
          </div>
          <label htmlFor="category"></label>
          <input
            onClick={categoryDropdownHandler}
            readOnly
            value={sellItemFormData.category}
            type="text"
            autoComplete="off"
            name="category"
            className="categorySetterWrapper__input"
            placeholder="select a category"
          />
          {dropdownOpen.category === true && (
            <DropdownLinesContainer
              list={categoryList}
              handleRadio={handleRadio}
              sellItemFormData={sellItemFormData}
            />
          )}
        </div>
      </div>

      <div className="categorySetterWrapper__brand">
        <p className="categorySetterWrapper__text">Brand</p>
        <div className="categorySetterWrapper__input-container">
          <div
            className="input__chevron-container"
            onClick={brandDropdownHandler}
          >
            <TbChevronDown
              style={dropdownOpen.brand ? { transform: 'rotate(180deg)' } : {}}
            />
          </div>
          <label htmlFor="brand"></label>
          <input
            readOnly
            value={sellItemFormData.brand}
            onClick={brandDropdownHandler}
            type="text"
            name="brand"
            autoComplete="off"
            className="categorySetterWrapper__input"
            placeholder="please select a brand"
          />
          {dropdownOpen.brand === true && (
            <DropdownLinesContainer
              list={brandsList}
              handleRadio={handleRadio}
              sellItemFormData={sellItemFormData}
            />
          )}
        </div>
      </div>

      <div className="categorySetterWrapper__type">
        <p className="categorySetterWrapper__text">Type</p>
        <div className="categorySetterWrapper__input-container">
          <div
            className="input__chevron-container"
            onClick={typeDropdownHandler}
          >
            <TbChevronDown
              style={dropdownOpen.type ? { transform: 'rotate(180deg)' } : {}}
            />
          </div>
          <label htmlFor="type"></label>
          <input
            readOnly
            value={sellItemFormData.type}
            onClick={typeDropdownHandler}
            type="text"
            name="type"
            autoComplete="off"
            className="categorySetterWrapper__input"
            placeholder="select type"
          />
          {dropdownOpen.type === true && (
            <DropdownLinesContainer
              list={typeList}
              handleRadio={handleRadio}
              sellItemFormData={sellItemFormData}
            />
          )}
        </div>
      </div>

      <div className="categorySetterWrapper__condition">
        <p className="categorySetterWrapper__text">Condition</p>
        <div className="categorySetterWrapper__input-container">
          <div
            className="input__chevron-container"
            onClick={conditionDropdownHandler}
          >
            <TbChevronDown
              style={
                dropdownOpen.condition ? { transform: 'rotate(180deg)' } : {}
              }
            />
          </div>
          <label htmlFor="condition"></label>
          <input
            readOnly
            value={sellItemFormData.condition}
            onClick={conditionDropdownHandler}
            type="text"
            name="condition"
            autoComplete="off"
            className="categorySetterWrapper__input"
            placeholder="select condition"
          />
          {dropdownOpen.condition === true && (
            <DropdownLinesContainer
              list={conditionList}
              handleRadio={handleRadio}
              sellItemFormData={sellItemFormData}
            />
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

  svg {
    transition: transform 0.35s ease-in-out;
  }

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

    .input__chevron-container {
      position: absolute;
      right: 2px;
      top: 0;
      font-size: 1.7rem;
      cursor: pointer;
    }
  }

  .categorySetterWrapper__category,
  .categorySetterWrapper__brand,
  .categorySetterWrapper__type,
  .categorySetterWrapper__condition {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    border-bottom: 1px #f3f3f3 solid;
  }
`;
