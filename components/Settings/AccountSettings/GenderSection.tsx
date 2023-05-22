import { useState } from 'react';
import { TbChevronDown } from 'react-icons/tb';
import styled from 'styled-components';
import DropdownGenderContainer from './DropdownGender/DropdownGenderContainer';

type GenderType = 'Woman' | 'Man' | 'Other' | '';

function GenderSection() {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [gender, setGender] = useState<GenderType>('');

  const handleGenderDropdownOpen = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleGenderChange = ({ text }: { text: GenderType }) => {
    setGender(text);
  };

  return (
    <GenderSectionWrapper>
      <div className="language-section__text-inner">
        <p className="language-section__text">Gender</p>
      </div>
      <div className="language-section__selector-container">
        <div
          className="selector__chevron-container"
          onClick={handleGenderDropdownOpen}
        >
          <TbChevronDown
            style={dropdownOpen ? { transform: 'rotate(180deg)' } : undefined}
          />
        </div>
        <label htmlFor="selector"></label>
        <input
          type="text"
          name="selector"
          value={gender}
          readOnly
          onClick={handleGenderDropdownOpen}
          placeholder="Select gender"
        />
        {dropdownOpen && (
          <DropdownGenderContainer
            gender={gender}
            handleGenderChange={handleGenderChange}
          />
        )}
      </div>
    </GenderSectionWrapper>
  );
}

export default GenderSection;

const GenderSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  font-size: 1.2rem;
  padding: 2rem;
  border-top: 1px solid #e6ecf0;

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
      &::placeholder {
        font-size: 1.2rem;
        color: #acacac;
      }
    }
  }
`;
