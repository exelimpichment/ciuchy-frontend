import { CiWarning } from 'react-icons/ci';
import styled from 'styled-components';

function UnderConstruction() {
  return (
    <UnderConstructionWrapper>
      <div>
        <CiWarning />
      </div>
      <h2>Under Construction</h2>
      <p>sorry for the disturbances</p>
    </UnderConstructionWrapper>
  );
}

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
