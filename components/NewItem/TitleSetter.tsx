import { ISellItemForm } from '@/types/newItem.types';

import styled from 'styled-components';

function TitleSetter({
  sellItemFormData,
  handleChange,
}: {
  sellItemFormData: ISellItemForm;
  handleChange: (
    _e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) {
  return (
    <TitleSetterWrapper>
      <div className="titleSetterWrapper__title">
        <p className="titleSetterWrapper__text">Title</p>
        <label htmlFor="category"></label>
        <input
          onChange={handleChange}
          value={sellItemFormData.title}
          autoComplete="off"
          minLength={6}
          maxLength={40}
          type="text"
          name="title"
          className="categorySetterWrapper__input"
          placeholder="e.g. White COS Jumper"
        />
      </div>

      <div className="titleSetterWrapper__description">
        <p className="titleSetterWrapper__text">Describe your item</p>
        <label htmlFor="category"></label>
        <textarea
          value={sellItemFormData.description}
          onChange={handleChange}
          autoComplete="off"
          minLength={10}
          maxLength={400}
          rows={4}
          name="description"
          className="categorySetterWrapper__input"
          placeholder="e.g. only worn a few times, true to sizer"
        />
      </div>
    </TitleSetterWrapper>
  );
}

export default TitleSetter;

const TitleSetterWrapper = styled.div`
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

  textarea {
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

  .titleSetterWrapper__title,
  .titleSetterWrapper__description {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    border-bottom: 1px #f3f3f3 solid;

    p {
      align-self: start;
    }
  }
`;
