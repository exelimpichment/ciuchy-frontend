import { RefObject } from 'react';
import styled from 'styled-components';
import DropdownLanguageLine from './DropdownLanguageLine';

interface Language {
  key: number;
  name: 'English(English)' | 'Украінська(Ukrainian)' | 'Polski(Polish)';
}

const languages: Language[] = [
  { key: 0, name: 'English(English)' },
  { key: 1, name: 'Украінська(Ukrainian)' },
  { key: 2, name: 'Polski(Polish)' },
];

interface IDropdownLanguageContainerProps {
  dropdownRef: RefObject<HTMLDivElement>;
  language: 'English(English)' | 'Украінська(Ukrainian)' | 'Polski(Polish)';
  handleLanguageChange: ({
    text,
    event,
  }: {
    text: 'English(English)' | 'Украінська(Ukrainian)' | 'Polski(Polish)';
    event: React.MouseEvent<HTMLButtonElement>;
  }) => void;
}

const DropdownLanguageContainer: React.FC<IDropdownLanguageContainerProps> = ({
  language,
  handleLanguageChange,
  dropdownRef,
}) => {
  return (
    <DropdownLanguageContainerWrapper ref={dropdownRef}>
      <ul>
        {languages.map(({ key, name }) => (
          <DropdownLanguageLine
            key={key}
            text={name}
            language={language}
            handleLanguageChange={handleLanguageChange}
          />
        ))}
      </ul>
    </DropdownLanguageContainerWrapper>
  );
};

export default DropdownLanguageContainer;

const DropdownLanguageContainerWrapper = styled.div`
  background-color: #fff;
  max-height: 400px;
  overflow: scroll;
  width: 100%;
  position: absolute;
  left: 0;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &::-webkit-scrollbar {
    display: none;
  }
`;
