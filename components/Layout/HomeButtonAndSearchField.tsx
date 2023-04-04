import styled from 'styled-components';
import HomeButton from './HomeButton';
import SearchField from './SearchField';

function HomeButtonAndSearchField() {
  return (
    <HomeButtonAndSearchFieldWrapper>
      <HomeButton />
      <SearchField />
    </HomeButtonAndSearchFieldWrapper>
  );
}

export default HomeButtonAndSearchField;

const HomeButtonAndSearchFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
`;
