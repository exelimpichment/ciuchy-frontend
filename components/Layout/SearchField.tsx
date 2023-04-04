import styled from 'styled-components';

function SearchField() {
  return (
    <InputWrapper
      type="search"
      id="site-search"
      name="q"
      placeholder="Search for items"
      autoComplete="off"
    ></InputWrapper>
  );
}

export default SearchField;

const InputWrapper = styled.input`
  all: unset;
  margin: 0 40px;
  flex-grow: 1;
  background-color: #f2f2f2;
  padding: 8px;
  border-radius: 4px;
`;
