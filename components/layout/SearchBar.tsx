import styled from 'styled-components';
import HomeButtonAndSearchField from './HomeButtonAndSearchField';
import LoginLogoutPanel from './LoginLogoutPanel';
// import ProfileControlPanel from './ProfileControlPanel';

function SearchBar() {
  return (
    <Wrapper>
      <div className="search-container">
        <HomeButtonAndSearchField />
        {/* <ProfileControlPanel /> */}
        <LoginLogoutPanel />
      </div>
    </Wrapper>
  );
}

export default SearchBar;

const Wrapper = styled.div`
  padding: 0 20px 0 20px;
  border-bottom: 1px #d6d6d6 solid;

  .search-container {
    max-width: var(--websiteWidth);
    margin: auto;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
