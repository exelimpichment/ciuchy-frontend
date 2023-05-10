import ButtonPanel from '@/components/NewItem/ButtonPanel';
import CategorySetter from '@/components/NewItem/CategorySetter';
import PhotoSetter from '@/components/NewItem/PhotoSetter';
import PriceSetter from '@/components/NewItem/PriceSetter';
import TitleSetter from '@/components/NewItem/TitleSetter';
import { useState } from 'react';
import styled from 'styled-components';
import { ISellItemForm } from '../../types/newItem.types';

const initialSellItemFormState: ISellItemForm = {
  title: '',
  description: '',
  category: '',
  brand: '',
  condition: '',
  price: undefined,
};

const New = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [sellItemFormData, setSellItemFormData] = useState<ISellItemForm>(
    initialSellItemFormState
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setSellItemFormData({ ...sellItemFormData, [name]: value });
  };

  const handleRadio = ({ name, value }: { name: string; value: string }) => {
    setSellItemFormData({ ...sellItemFormData, [name]: value });
  };

  return (
    <NewItemWrapper>
      <div className="container">
        <h1>Sell an item</h1>
        <PhotoSetter
          selectedFiles={selectedFiles}
          setSelectedFiles={setSelectedFiles}
        />
        <TitleSetter
          sellItemFormData={sellItemFormData}
          handleChange={handleChange}
        />
        <CategorySetter
          handleRadio={handleRadio}
          sellItemFormData={sellItemFormData}
        />
        <PriceSetter
          sellItemFormData={sellItemFormData}
          handleChange={handleChange}
        />
        <ButtonPanel />
      </div>
      <div className="container"></div>
    </NewItemWrapper>
  );
};

export default New;

const NewItemWrapper = styled.div`
  background-color: #f2f1f2;
  min-height: calc(100vh - 110px);
  overflow: scroll;

  h1 {
    font-size: 1.8rem;
    padding: 2rem 0 1.25rem 0;
  }
`;
