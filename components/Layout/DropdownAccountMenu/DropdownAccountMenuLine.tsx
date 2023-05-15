import React from 'react';
import styled from 'styled-components';

interface IDropdownAccountMenuLine {
  text: string;
  onClick?: () => void;
}

const DropdownAccountMenuLine: React.FC<IDropdownAccountMenuLine> = ({
  text,
  onClick,
}) => {
  console.log(onClick);

  return (
    <DropdownAccountMenuLineWrapper
      style={text === 'Log Out' ? { color: 'red' } : undefined}
      onClick={onClick}
    >
      {text}
    </DropdownAccountMenuLineWrapper>
  );
};

export default DropdownAccountMenuLine;

const DropdownAccountMenuLineWrapper = styled.div`
  background-color: #fff;
  padding: 5px 10px;
  cursor: pointer;

  /* border-bottom: 1px #f3f3f3 solid; */
  font-size: 1.1rem;
`;
