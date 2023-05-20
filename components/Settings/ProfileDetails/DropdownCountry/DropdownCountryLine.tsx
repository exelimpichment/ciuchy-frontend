import { ImRadioChecked2, ImRadioUnchecked } from 'react-icons/im';
import styled from 'styled-components';
import { countryType } from '../LocationSection';

interface IDropdownCountryLineProps {
  text: any;
  handleLocationChange: ({ text }: { text: countryType }) => void;
  country: countryType;
}

const DropdownCountryLine: React.FC<IDropdownCountryLineProps> = ({
  text,
  handleLocationChange,
  country,
}) => {
  const radio = country === text ? <ImRadioChecked2 /> : <ImRadioUnchecked />;

  return (
    <DropdownCountryLineWrapper>
      <p className="dropdownLanguageLine__inner"> {text} </p>
      <button
        onClick={() => handleLocationChange({ text })}
        type="button"
        style={country !== text ? { color: '#ccc' } : { color: '#c45f55' }}
        className="dropdownCountryLine__swg-container"
      >
        {radio}
      </button>
    </DropdownCountryLineWrapper>
  );
};

export default DropdownCountryLine;

const DropdownCountryLineWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .dropdownCountryLine__swg-container {
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
