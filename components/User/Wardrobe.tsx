import { IUser } from '@/types/user.types';
import styled from 'styled-components';
import ItemCard from '../Common/ItemCard';
ItemCard;
function Wardrobe({ data }: { data: IUser }) {
  const itemList = data.user.items;

  return (
    <WardrobeWrapper>
      {itemList.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
    </WardrobeWrapper>
  );
}

export default Wardrobe;

const WardrobeWrapper = styled.div`
  --auto-grid-min-size: 20rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  grid-gap: 1rem;
`;
