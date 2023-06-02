import { IItem } from '@/types/user.types';
import styled from 'styled-components';
import PersonalizedItemCard from '../Common/PersonalizedItemCard';

interface SuggestionProps {
  itemList: IItem[];
  text: string;
}

const Suggestion: React.FC<SuggestionProps> = ({ itemList, text }) => {
  return (
    <SuggestionInner>
      <div className="container">
        <div className="suggestion__text-container">
          <p style={{ fontSize: '1.5rem' }}>{text}</p>
        </div>
        <div className="suggestion__grid-container">
          {itemList.map((item) => (
            <PersonalizedItemCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </SuggestionInner>
  );
};

export default Suggestion;

const SuggestionInner = styled.div`
  margin-top: 2rem;

  p {
    padding: 1.3rem 2rem 1.3rem 7px;
    color: rgb(117, 117, 117);
  }

  .suggestion__grid-container {
    --auto-grid-min-size: 20rem;
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--auto-grid-min-size), 1fr)
    );
    grid-gap: 1rem;
  }
`;
