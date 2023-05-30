import styled from 'styled-components';
import ButtonSection from './GallerySidebar/ButtonSection';
import Description from './GallerySidebar/Description';
import Info from './GallerySidebar/Info';
import Price from './GallerySidebar/Price';
import UserInfo from './GallerySidebar/UserInfo';

interface IGallerySidebarProps {
  price: number;
  title: string;
  type: string;
  brand: string;
  category: string;
  owner: string;
  ownerImage: string;
  ownerName: string;
  condition: string;
  description: string;
  ownerRating: string;
}

const GallerySidebar: React.FC<IGallerySidebarProps> = ({
  price,
  title,
  type,
  brand,
  category,
  owner,
  ownerImage,
  ownerName,
  condition,
  description,
  ownerRating,
}) => {
  return (
    <GallerySidebarWrapper>
      <Price price={price} />
      <Info
        condition={condition}
        type={type}
        brand={brand}
        category={category}
      />
      <Description title={title} description={description} />
      <UserInfo
        ownerImage={ownerImage}
        owner={owner}
        ownerName={ownerName}
        ownerRating={ownerRating}
      />
      <ButtonSection />
    </GallerySidebarWrapper>
  );
};

export default GallerySidebar;

const GallerySidebarWrapper = styled.aside`
  width: 295px;
  height: 100%;
  border: 1px solid #e5e5e5;
  padding: 20px;
  flex-shrink: 0;
`;
