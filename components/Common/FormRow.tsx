import { useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import styled from 'styled-components';
import getType from '../../utils/getType';

const name = '';
const labelText = '';

interface IFormRow {
  value: string;
  handleChange: (_event: React.ChangeEvent<HTMLInputElement>) => void;
  inputPlaceholder: string;
  inputType: string;
}

const FormRow: React.FC<IFormRow> = ({
  value,
  handleChange,
  inputPlaceholder,
  inputType,
}) => {
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  return (
    <FormRowWrapper className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        id={inputType}
        type={getType(inputType, passwordShown)}
        name={inputPlaceholder.toLocaleLowerCase()}
        value={value}
        onChange={handleChange}
        className="form-input"
        placeholder={inputPlaceholder}
        maxLength={26}
        autoComplete="off"
      />
      {inputPlaceholder === 'Password' && (
        <button
          className="btn"
          type="button"
          onClick={() => setPasswordShown(!passwordShown)}
        >
          {passwordShown ? <BiHide /> : <BiShow />}
        </button>
      )}
    </FormRowWrapper>
  );
};
export default FormRow;

const FormRowWrapper = styled.div`
  margin-bottom: 1.3rem;
  width: 100%;
  position: relative;

  input {
    all: unset;
    width: 100%;
    height: 42px;
    border-bottom: 1px #d6d6d6 solid;
    font-size: 1.2rem;
  }

  .btn {
    z-index: 4;
    position: absolute;
    height: 1.7rem;
    width: 1.7rem;
    bottom: 21.5;
    right: 7px;
    cursor: pointer;
    transform: translateY(50%);

    :hover {
      color: #4b4a4a;
    }

    svg {
      font-size: 1.8rem;
    }
  }
`;
