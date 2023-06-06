import { IItem } from '@/types/user.types';
import styled from 'styled-components';
import PersonalizedItemCard from '../Common/PersonalizedItemCard';

interface IQueriedItems {
  listOfItems: IItem[];
  lastItemRef: (node: HTMLElement | null) => void;
}

const QueriedItems: React.FC<IQueriedItems> = ({
  listOfItems,
  lastItemRef,
}) => {
  return (
    <QueriedItemsWrapper>
      {listOfItems.map((item: IItem, index) =>
        index === listOfItems.length - 1 ? (
          <PersonalizedItemCard
            key={item._id}
            item={item}
            lastItemRef={lastItemRef}
          />
        ) : (
          <PersonalizedItemCard key={item._id} item={item} />
        )
      )}
    </QueriedItemsWrapper>
  );
};

export default QueriedItems;

const QueriedItemsWrapper = styled.div`
  --auto-grid-min-size: 20rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  grid-gap: 1rem;
`;
