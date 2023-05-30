import { RootState } from '@/redux/store';
import { logout } from '@/utils/authenticator';
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

  const profileHandler = () => {
    router.push(`/user/${id}`);
    setShowAccountDropdownMenu(false);
  };
  const logOutHandler = () => {
    setShowAccountDropdownMenu(false);
    setTimeout(() => logout({ dispatch }), 400);
  };
  const messagesHandler = () => {
    setShowAccountDropdownMenu(false);
    router.push(`/user/${id}/messages`);
  };
  const settingsHandler = () => {
    setShowAccountDropdownMenu(false);
    router.push(`/user/${id}/settings`);
  };

  const menuItems = [
    { key: 0, value: 'Profile', onClick: () => profileHandler() },
    { key: 1, value: 'Messages', onClick: () => messagesHandler() },
    { key: 2, value: 'Settings', onClick: () => settingsHandler() },
    { key: 3, value: 'Log Out', onClick: () => logOutHandler() },
  ];

  return (
    <AccountDropdownMenuWrapper ref={dropdownRef}>
      <p>Account</p>
      {menuItems.map((item) => (
        <DropdownAccountMenuLine
          key={item.key}
          text={item.value}
          onClick={item.onClick}
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
