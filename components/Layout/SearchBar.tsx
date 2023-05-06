import { useSelector } from 'react-redux';
import styled from 'styled-components';
import type { RootState } from '../../redux/store';
import HomeButtonAndSearchField from './HomeButtonAndSearchField';
import LoginLogoutPanel from './LoginLogoutPanel';
import ProfileControlPanel from './ProfileControlPanel';

function SearchBar() {
  const user = useSelector((state: RootState) => state.authentication?.user);

  return (
    <Wrapper>
      <div className="container">
        <div className="search__inner">
          <HomeButtonAndSearchField />
          {user.name && <ProfileControlPanel />}
          {!user.name && <LoginLogoutPanel />}
        </div>
      </div>
    </Wrapper>
  );
}

export default SearchBar;

const Wrapper = styled.div`
  border-bottom: 1px #d6d6d6 solid;
  height: 55px;

  .search__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 55px;
  }
`;
