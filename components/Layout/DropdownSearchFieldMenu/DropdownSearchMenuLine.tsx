import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

interface IDropdownSearchMenuLineProps {
  name: string;
  _id: string;
  image: string;
}

const DropdownSearchMenuLine: React.FC<IDropdownSearchMenuLineProps> = ({
  name,
  _id,
  image,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/user/${_id}`);
  };

  return (
    <DropdownSearchMenuLineWrapper onMouseDown={handleClick}>
      <div className="dropdown-line__image-container">
        <Image src={image} height={40} width={40} alt="profile picture" />
      </div>
      <div className="dropdown-line__text-container">
        <p>{name}</p>
      </div>
    </DropdownSearchMenuLineWrapper>
  );
};

export default DropdownSearchMenuLine;

const DropdownSearchMenuLineWrapper = styled.div`
  height: 55px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.1rem;

  .dropdown-line__image-container {
    margin-right: 1rem;
  }
`;
