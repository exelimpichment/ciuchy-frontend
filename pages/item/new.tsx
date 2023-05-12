import ButtonPanel from '@/components/NewItem/ButtonPanel';
import CategorySetter from '@/components/NewItem/CategorySetter';
import PhotoSetter from '@/components/NewItem/PhotoSetter';
import PriceSetter from '@/components/NewItem/PriceSetter';
import TitleSetter from '@/components/NewItem/TitleSetter';
import { useState } from 'react';
import styled from 'styled-components';
import { ISellItemForm } from '../../types/newItem.types';

const initialSellItemFormState: ISellItemForm = {
  title: 'sdsdsd',
  description: 'sdsd',
  category: 'men',
  brand: 'Nike',
  condition: 'New',
  price: 0,
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

  const isSellItemFormValid = (sellItemForm: ISellItemForm): boolean => {
    for (const key in sellItemForm) {
      const value = sellItemForm[key];
      if (value === undefined || value === '') {
        return false;
      }
    }
    return true;
  };

  // const handleDraft = async () => {
  //   let formData = new FormData();
  // };

  const handleUpload = async () => {
    let formData = new FormData();
    formData.append('firstName', 'John');

    if (selectedFiles.length < 1 || !isSellItemFormValid(sellItemFormData))
      return;
    console.log('passed');

    for (const [key, value] of Object.entries(initialSellItemFormState)) {
      formData.append(key, String(value));
    }

    const blobs = [];
    for (const file of selectedFiles) {
      const blob = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.readAsArrayBuffer(file);
      });
      blobs.push(blob);
      console.log('for of');
    }

    blobs.forEach((blob) => {
      formData.append(`file`, new Blob([blob as ArrayBuffer]));
      console.log('done inside for each all');
    });
    formData.append('firstName', 'John');

    console.log(formData.has('firstName'));

    fetch('http://localhost:5001/api/v1/item/addItem', {
      // fetch(''http://localhost:5001/multer'', {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      // headers: {
      //   'Content-Type': 'multipart/form-data',
      // },

      body: formData,
    })
      .then(async (response) => {
        // Handle the response
        console.log(await response.json());
      })
      .catch((error) => {
        // Handle any errors
        console.log(error);
      });
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
        <ButtonPanel handleUpload={handleUpload} />
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
