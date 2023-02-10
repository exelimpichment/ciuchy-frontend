import styled from 'styled-components';
import HomeButton from './HomeButton';
// import LoginLogoutPanel from './LoginLogoutPanel';
import ProfileControlPanel from './ProfileControlPanel';
// import SearchField from './SearchField';

function SearchBar() {
  return (
    <Wrapper>
      <div className="search-container">
        <HomeButton />
        {/* <SearchField /> */}
        <ProfileControlPanel />
        {/* <LoginLogoutPanel /> */}
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
  }
`;
