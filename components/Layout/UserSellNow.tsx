import Image from 'next/image';
import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import styled from 'styled-components';
import user from '../../public/user.png';
import AccountDropdownMenu from './DropdownAccountMenu/AccountDropdownMenu';
import SellNowButton from './SellNowButton';

function UserSellNow() {
  // const router = useRouter();

  const [showAccountDropdownMenu, setShowAccountDropdownMenu] =
    useState<boolean>(false);

  const handleAccountDropdownMenu = () => {
    setShowAccountDropdownMenu(!showAccountDropdownMenu);
    console.log('clicked');
  };

  return (
    <UserSellNowWrapper>
      <div className="userSellNow-img__container">
        <Image
          height={33}
          width={33}
          className="img"
          src={user}
          alt="user image"
          onClick={handleAccountDropdownMenu}
        />
        {showAccountDropdownMenu && (
          <AccountDropdownMenu
            setShowAccountDropdownMenu={setShowAccountDropdownMenu}
          />
        )}
      </div>
      <HiChevronDown
        onClick={handleAccountDropdownMenu}
        style={
          showAccountDropdownMenu ? { transform: 'rotate(180deg)' } : undefined
        }
      />
      <SellNowButton />
    </UserSellNowWrapper>
  );
}

export default UserSellNow;

const UserSellNowWrapper = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;

  img {
    cursor: pointer;
  }
  svg {
    font-size: 1.3rem;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }
  .userSellNow-img__container {
    position: relative;
    height: 33px;
    width: 33px;
  }
`;
