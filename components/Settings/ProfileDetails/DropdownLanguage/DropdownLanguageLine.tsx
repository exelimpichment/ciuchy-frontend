import { ImRadioChecked2, ImRadioUnchecked } from 'react-icons/im';
import styled from 'styled-components';

interface IDropdownLanguageLineProps {
  text: 'English(English)' | 'Украінська(Ukrainian)' | 'Polski(Polish)';
  language: 'English(English)' | 'Украінська(Ukrainian)' | 'Polski(Polish)';
  handleLanguageChange: ({
    text,
    event,
  }: {
    text: 'English(English)' | 'Украінська(Ukrainian)' | 'Polski(Polish)';
    event: React.MouseEvent<HTMLButtonElement>;
  }) => void;
}

const DropdownLanguageLine: React.FC<IDropdownLanguageLineProps> = ({
  text,
  language,
  handleLanguageChange,
}) => {
  const radio = language === text ? <ImRadioChecked2 /> : <ImRadioUnchecked />;

  return (
    <DropdownLanguageLineWrapper>
      <p className="dropdownLanguageLine__inner"> {text} </p>
      <button
        onClick={(event) => handleLanguageChange({ text, event })}
        type="button"
        style={language !== text ? { color: '#ccc' } : { color: '#c45f55' }}
        className="dropdownLanguageLine__swg-container"
      >
        {radio}
      </button>
    </DropdownLanguageLineWrapper>
  );
};

export default DropdownLanguageLine;

const DropdownLanguageLineWrapper = styled.li`
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
