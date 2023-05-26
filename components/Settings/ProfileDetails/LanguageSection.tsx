import { useEffect, useRef, useState } from 'react';
import { TbChevronDown } from 'react-icons/tb';
import styled from 'styled-components';
import DropdownLanguageContainer from './DropdownLanguage/DropdownLanguageContainer';
type LanguageType =
  | 'English(English)'
  | 'Украінська(Ukrainian)'
  | 'Polski(Polish)';

function LanguageSection() {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<LanguageType>('English(English)');

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageDropdownOpen = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageChange = ({
    text,
    event,
  }: {
    text: LanguageType;
    event: React.MouseEvent<HTMLButtonElement>;
  }) => {
    event.stopPropagation();
    setLanguage(text);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);
    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return (
    <LanguageSectionWrapper>
      <div className="language-section__text-inner">
        <p className="language-section__text">Language</p>
      </div>
      <div className="language-section__selector-container">
        <div
          className="selector__chevron-container"
          onClick={(event) => handleLanguageDropdownOpen(event)}
        >
          <TbChevronDown
            style={dropdownOpen ? { transform: 'rotate(180deg)' } : undefined}
          />
        </div>
        <label htmlFor="selector"></label>
        <input
          type="text"
          name="selector"
          value={language}
          readOnly
          onClick={handleLanguageDropdownOpen}
        />
        {dropdownOpen && (
          <DropdownLanguageContainer
            language={language}
            handleLanguageChange={handleLanguageChange}
            dropdownRef={dropdownRef}
          />
        )}
      </div>
    </LanguageSectionWrapper>
  );
}

export default LanguageSection;

const LanguageSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  background-color: #fff;
  font-size: 1.2rem;
  padding: 2rem;

  svg {
    transition: transform 0.3s ease-in-out;
  }

  .language-section__selector-container {
    min-width: 50%;
    position: relative;
    cursor: pointer;

    .selector__chevron-container {
      position: absolute;
      font-size: 1.4rem;
      right: 2px;
      top: 0;
      transition: transform 0.3s ease-in-out;
    }

    input {
      all: unset;
      border-bottom: #9e9e9e 1px solid;
      min-width: 100%;
    }
  }
`;
