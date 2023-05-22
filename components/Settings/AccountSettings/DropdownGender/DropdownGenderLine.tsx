import { ImRadioChecked2, ImRadioUnchecked } from 'react-icons/im';
import styled from 'styled-components';

interface IDropdownGenderLineProps {
  text: 'Woman' | 'Man' | 'Other' | '';
  gender: 'Woman' | 'Man' | 'Other' | '';
  handleGenderChange: ({
    text,
  }: {
    text: 'Woman' | 'Man' | 'Other' | '';
  }) => void;
}

const DropdownGenderLine: React.FC<IDropdownGenderLineProps> = ({
  text,
  gender,
  handleGenderChange,
}) => {
  const radio = gender === text ? <ImRadioChecked2 /> : <ImRadioUnchecked />;
  return (
    <DropdownGenderLineWrapper>
      <p className="dropdownLanguageLine__inner"> {text} </p>
      <button
        onClick={() => handleGenderChange({ text })}
        type="button"
        style={gender !== text ? { color: '#ccc' } : { color: '#c45f55' }}
        className="dropdownLanguageLine__swg-container"
      >
        {radio}
      </button>
    </DropdownGenderLineWrapper>
  );
};

export default DropdownGenderLine;

const DropdownGenderLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .dropdownLanguageLine__swg-container {
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
