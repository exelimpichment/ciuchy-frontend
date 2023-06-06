import { logout } from '@/utils/authenticator';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

interface IDropdownAccountMenuLine {
  text: string;
  href: string;
  dropdownCloseHandle: () => void;
}

const DropdownAccountMenuLine: React.FC<IDropdownAccountMenuLine> = ({
  text,
  href,
  dropdownCloseHandle,
}) => {
  const dispatch = useDispatch();
  const logOutHandle = () => {
    setTimeout(() => logout({ dispatch }), 400);
  };
  return (
    <DropdownAccountMenuLineWrapper onClick={dropdownCloseHandle}>
      {text === 'Log Out' ? (
        <div onClick={logOutHandle} style={{ color: 'red' }}>
          {text}
        </div>
      ) : (
        <div className="test">
          <Link href={href}>{text}</Link>
        </div>
      )}
    </DropdownAccountMenuLineWrapper>
  );
};

export default DropdownAccountMenuLine;

const DropdownAccountMenuLineWrapper = styled.div`
  background-color: #fff;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 1.1rem;

  a {
    display: block;
    width: 100%;
  }

  &:hover {
    background-color: #f5f5f5;
    border-radius: 5px;
  }
`;
