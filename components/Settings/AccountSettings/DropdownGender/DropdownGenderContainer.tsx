import styled from 'styled-components';
import DropdownGenderLine from './DropdownGenderLine';

interface IGender {
  key: number;
  name: 'Woman' | 'Man' | 'Other' | '';
}

const genders: IGender[] = [
  { key: 0, name: 'Woman' },
  { key: 1, name: 'Man' },
  { key: 2, name: 'Other' },
];

interface DropdownGenderContainerProps {
  gender: 'Woman' | 'Man' | 'Other' | '';
  handleGenderChange: ({
    text,
    event,
  }: {
    text: 'Woman' | 'Man' | 'Other' | '';
    event: React.MouseEvent<HTMLButtonElement>;
  }) => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
}

const DropdownGenderContainer: React.FC<DropdownGenderContainerProps> = ({
  gender,
  handleGenderChange,
  dropdownRef,
}) => {
  return (
    <DropdownGenderContainerWrapper ref={dropdownRef}>
      <ul>
        {genders.map(({ key, name }) => (
          <DropdownGenderLine
            key={key}
            text={name}
            gender={gender}
            handleGenderChange={handleGenderChange}
          />
        ))}
      </ul>
    </DropdownGenderContainerWrapper>
  );
};

export default DropdownGenderContainer;

const DropdownGenderContainerWrapper = styled.div`
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
