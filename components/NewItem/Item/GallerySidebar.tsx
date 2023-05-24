import styled from 'styled-components';
import ButtonSection from './GallerySidebar/ButtonSection';
import Description from './GallerySidebar/Description';
import Info from './GallerySidebar/Info';
import Price from './GallerySidebar/Price';
import UserInfo from './GallerySidebar/UserInfo';

function GallerySidebar() {
  return (
    <GallerySidebarWrapper>
      <Price />
      <Info />
      <Description />
      <UserInfo />
      <ButtonSection />
    </GallerySidebarWrapper>
  );
}

export default GallerySidebar;

const GallerySidebarWrapper = styled.aside`
  width: 295px;
  height: 100%;
  border: 1px solid #e5e5e5;
  padding: 20px;
  flex-shrink: 0;
`;
