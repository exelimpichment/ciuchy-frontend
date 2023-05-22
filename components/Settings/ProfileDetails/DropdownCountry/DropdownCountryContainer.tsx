import styled from 'styled-components';
import { CountryType } from '../LocationSection';
import DropdownCountryLine from './DropdownCountryLine';

interface ICountry {
  key: number;
  name:
    | 'not selected'
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
}

const countries: ICountry[] = [
  { key: 0, name: 'not selected' },
  { key: 1, name: 'Germany' },
  { key: 2, name: 'United Kingdom' },
  { key: 3, name: 'France' },
  { key: 4, name: 'Italy' },
  { key: 5, name: 'Spain' },
  { key: 6, name: 'Ukraine' },
  { key: 7, name: 'Poland' },
  { key: 8, name: 'Romania' },
  { key: 9, name: 'Netherlands' },
  { key: 10, name: 'Greece' },
  { key: 11, name: 'Portugal' },
  { key: 12, name: 'Austria' },
  { key: 13, name: 'Denmark' },
];

interface DropdownCountryContainerProps {
  country: CountryType;
  handleLocationChange: ({ text }: { text: CountryType }) => void;
}

const DropdownCountryContainer: React.FC<DropdownCountryContainerProps> = ({
  country,
  handleLocationChange,
}) => {
  return (
    <DropdownCountryContainerWrapper>
      {' '}
      <ul>
        {countries.map(({ key, name }) => (
          <DropdownCountryLine
            key={key}
            text={name}
            country={country}
            handleLocationChange={handleLocationChange}
          />
        ))}
      </ul>
    </DropdownCountryContainerWrapper>
  );
};

export default DropdownCountryContainer;

const DropdownCountryContainerWrapper = styled.div`
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
