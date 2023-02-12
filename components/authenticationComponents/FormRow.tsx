import styled from 'styled-components';
// temp vars

const type = '';
const name = '';
const value = '';
const handleChange = () => {};
const labelText = '';
const placeholderName = 'Password';

const FormRow = () =>
  // { type, name, value, handleChange, labelText }
  {
    return (
      <FormRowWrapper className="form-row">
        <label htmlFor={name} className="form-label">
          {labelText || name}
        </label>
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          className="form-input"
          placeholder={placeholderName}
        />
      </FormRowWrapper>
    );
  };
export default FormRow;

const FormRowWrapper = styled.div`
  margin-bottom: 1.3rem;
  width: 100%;

  input {
    all: unset;
    width: 100%;
    height: 42px;
    border-bottom: 1px #d6d6d6 solid;
    font-size: 1.2rem;
  }
`;
