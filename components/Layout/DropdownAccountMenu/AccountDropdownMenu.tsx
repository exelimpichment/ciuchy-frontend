import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import DropdownAccountMenuLine from './DropdownAccountMenuLine';

const AccountDropdownMenu = ({
  setShowAccountDropdownMenu,
  dropdownRef,
}: {
  setShowAccountDropdownMenu: Dispatch<SetStateAction<boolean>>;
  dropdownRef: React.RefObject<HTMLDivElement>;
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = useSelector((state: RootState) => state.authentication?.user);

  const dropdownCloseHandle = () => {
    setShowAccountDropdownMenu(false);
  };

  const menuItems = [
    { key: 0, value: 'Profile', href: `/user/${id}` },
    { key: 1, value: 'Messages', href: `/user/${id}/messages` },
    { key: 2, value: 'Settings', href: `/user/${id}/settings` },
    { key: 3, value: 'Log Out', href: 'placeholder' },
  ];

  return (
    <AccountDropdownMenuWrapper ref={dropdownRef}>
      <p>Account</p>
      {menuItems.map((item) => (
        <DropdownAccountMenuLine
          key={item.key}
          text={item.value}
          href={item.href}
          dropdownCloseHandle={dropdownCloseHandle}
        />
      ))}
    </AccountDropdownMenuWrapper>
  );
};

export default AccountDropdownMenu;

const AccountDropdownMenuWrapper = styled.div`
  padding: 5px;
  min-width: 205px;
  background-color: #fff;
  position: absolute;
  top: 43px;
  left: -155px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  p {
    padding: 5px 10px;
    font-size: 0.8rem;
  }
`;
