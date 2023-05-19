import { useState } from 'react';
import { TbChevronDown } from 'react-icons/tb';
import styled from 'styled-components';
import DropdownLanguageContainer from './DropdownLanguage/DropdownLanguageContainer';
type ILanguage =
  | 'English(English)'
  | 'Украінська(Ukrainian)'
  | 'Polski(Polish)';

function LanguageSection() {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<ILanguage>('English(English)');

  const handleLanguageDropdownOpen = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageChange = ({ text }: { text: ILanguage }) => {
    console.log(language);

    setLanguage(text);
    // setDropdownOpen(false);
  };

  return (
    <LanguageSectionWrapper>
      <div className="language-section__inner">
        <p className="language-section__text">Language</p>
      </div>
      <div className="language-section__selector-container">
        <div
          className="selector__chevron-container"
          onClick={handleLanguageDropdownOpen}
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
  margin-top: 1rem;
  background-color: #fff;
  font-size: 1.2rem;
  padding: 2rem;

  .language-section__selector-container {
    min-width: 50%;
    position: relative;

    .selector__chevron-container {
      position: absolute;
      font-size: 1.4rem;
      right: 2px;
      top: 0;
    }

    input {
      all: unset;
      border-bottom: #9e9e9e 1px solid;
      min-width: 100%;
    }
  }
`;
