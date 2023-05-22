import { useState } from 'react';
import { TbChevronDown } from 'react-icons/tb';
import styled from 'styled-components';
import DropdownCountryContainer from './DropdownCountry/DropdownCountryContainer';

export type CountryType =
  | ''
  | 'Germany'
  | 'United Kingdom'
  | 'France'
  | 'Italy'
  | 'Spain'
  | 'Ukraine'
  | 'Poland'
  | 'Romania'
  | 'Netherlands'
  | 'Greece'
  | 'Portugal'
  | 'Austria'
  | 'Denmark';

function LocationSection() {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [country, setCountry] = useState<CountryType>('');

  const handleCountryDropdownOpen = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLocationChange = ({ text }: { text: CountryType }) => {
    setCountry(text);
  };

  return (
    <LocationSectionWrapper>
      <p style={{ color: 'rgb(117, 117, 117)', margin: '1rem 0 0 1rem' }}>
        My location
      </p>
      <div className="locationSection__country-container">
        <p className="locationSection__country-text">Country</p>
        <div className="locationSection__selector-container">
          <div
            className="selector__chevron-container"
            onClick={handleCountryDropdownOpen}
          >
            <TbChevronDown
              style={dropdownOpen ? { transform: 'rotate(180deg)' } : undefined}
            />
          </div>
          <label htmlFor="selector"></label>
          <input
            type="text"
            name="selector"
            readOnly
            onClick={handleCountryDropdownOpen}
            placeholder="not selected"
            value={country}
          />
          {dropdownOpen && (
            <DropdownCountryContainer
              country={country}
              handleLocationChange={handleLocationChange}
            />
          )}
        </div>
      </div>
    </LocationSectionWrapper>
  );
}

export default LocationSection;

const LocationSectionWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  svg {
    transition: transform 0.3s ease-in-out;
  }

  .locationSection__selector-container {
    min-width: 50%;
    position: relative;
    cursor: pointer;
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

  .locationSection__city-container .locationSection__toggle-container {
    /* padding: 2rem; */
  }

  .locationSection__country-container {
    font-size: 1.2rem;
    padding: 1rem 2rem 2rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .selector__chevron-container {
    position: absolute;
    font-size: 1.4rem;
    right: 2px;
    top: 0;
    transition: transform 0.3s ease-in-out;
  }
`;
