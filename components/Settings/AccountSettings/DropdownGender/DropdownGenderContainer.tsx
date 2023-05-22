import styled from 'styled-components';
import DropdownGenderLine from './DropdownGenderLine';

interface IGender {
  key: number;
  name: 'Woman' | 'Man' | 'Other' | 'Select gender';
}

const genders: IGender[] = [
  { key: 0, name: 'Select gender' },
  { key: 1, name: 'Woman' },
  { key: 2, name: 'Man' },
  { key: 3, name: 'Other' },
];

interface DropdownGenderContainerProps {
  gender: 'Woman' | 'Man' | 'Other' | 'Select gender';
  handleGenderChange: ({
    text,
  }: {
    text: 'Woman' | 'Man' | 'Other' | 'Select gender';
  }) => void;
}

const DropdownGenderContainer: React.FC<DropdownGenderContainerProps> = ({
  gender,
  handleGenderChange,
}) => {
  return (
    <DropdownGenderContainerWrapper>
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
