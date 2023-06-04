import { CiWarning } from 'react-icons/ci';
import styled from 'styled-components';

interface IUnderConstructionProps {
  header2?: string;
  paragraph?: string;
}

const UnderConstruction: React.FC<IUnderConstructionProps> = ({
  header2 = 'Under Construction',
  paragraph = 'sorry for the disturbances',
}) => {
  return (
    <UnderConstructionWrapper>
      <div>
        <CiWarning />
      </div>
      <h2>{header2}</h2>
      <p>{paragraph}</p>
    </UnderConstructionWrapper>
  );
};

export default UnderConstruction;

const UnderConstructionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  svg {
    font-size: 5rem;
  }
  h2 {
    font-size: 2rem;
    text-transform: uppercase;
  }

  p {
    text-transform: uppercase;
    font-size: 1.1rem;
  }
`;
