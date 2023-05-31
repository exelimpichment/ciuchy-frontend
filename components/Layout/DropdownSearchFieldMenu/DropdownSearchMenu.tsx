import { IFetchedUser } from '@/types/navbar.types';
import React from 'react';
import styled from 'styled-components';
import DropdownSearchMenuLine from './DropdownSearchMenuLine';

interface DropdownSearchMenuProps {
  userList: IFetchedUser[];
  loading: boolean;
}

const DropdownSearchMenu: React.FC<DropdownSearchMenuProps> = ({
  userList,
  loading,
}) => {
  console.log(userList);

  if (loading) {
    return (
      <DropdownSearchMenuWrapper>
        <div className="dropdown__empty-container">
          <p>Searching...</p>
        </div>
      </DropdownSearchMenuWrapper>
    );
  }

  if (userList.length === 0) {
    return (
      <DropdownSearchMenuWrapper>
        <div className="dropdown__empty-container">
          <p>No users found</p>
        </div>
      </DropdownSearchMenuWrapper>
    );
  }
  return (
    <DropdownSearchMenuWrapper>
      {userList.map((user) => (
        <DropdownSearchMenuLine
          key={user._id}
          name={user.name}
          _id={user._id}
          image={user.image}
        />
      ))}
    </DropdownSearchMenuWrapper>
  );
};

export default DropdownSearchMenu;

const DropdownSearchMenuWrapper = styled.div`
  transform: translateY(8.5px);
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  min-height: 55px;
  max-height: 165px;
  width: calc(100% + 16px);
  overflow: scroll;
  position: absolute;
  z-index: 10;

  .dropdown__empty-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    font-size: 1.2rem;
  }
`;
