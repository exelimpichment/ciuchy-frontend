import ButtonPanel from '@/components/NewItem/ButtonPanel';
import CategorySetter from '@/components/NewItem/CategorySetter';
import PhotoSetter from '@/components/NewItem/PhotoSetter';
import PriceSetter from '@/components/NewItem/PriceSetter';
import TitleSetter from '@/components/NewItem/TitleSetter';
import styled from 'styled-components';

const New = () => {
  return (
    <NewItemWrapper>
      <div className="container">
        <h1>Sell an item</h1>
        <PhotoSetter />
        <TitleSetter />
        <CategorySetter />
        <PriceSetter />
        <ButtonPanel />
      </div>
    </NewItemWrapper>
  );
};

export default New;

const NewItemWrapper = styled.main`
  background-color: #f2f1f2;
  min-height: calc(100vh - 110px);

  h1 {
    font-size: 1.8rem;
    padding: 2rem 0 1.25rem 0;
  }
`;
