import styled from 'styled-components';
import Facebook from './Facebook';
import Twitter from './Twitter';

function Socials() {
  return (
    <SocialsWrapper>
      <Facebook />
      <Twitter />
    </SocialsWrapper>
  );
}

export default Socials;

const SocialsWrapper = styled.div`
  background-color: #fff;
  margin-top: 2rem;
  font-size: 1.2rem;
`;
