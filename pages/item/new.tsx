import ButtonPanel from '@/components/NewItem/ButtonPanel';
import CategorySetter from '@/components/NewItem/CategorySetter';
import PhotoSetter from '@/components/NewItem/PhotoSetter';
import PriceSetter from '@/components/NewItem/PriceSetter';
import TitleSetter from '@/components/NewItem/TitleSetter';
import { RootState } from '@/redux/store';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { ISellItemForm } from '../../types/newItem.types';

const initialSellItemFormState: ISellItemForm = {
  title: '',
  description: '',
  category: '',
  brand: '',
  type: '',
  condition: '',
  price: 0,
};

const New = () => {
  const router = useRouter();
  const { userId } = useSelector(
    (state: RootState) => state.authentication?.user
  );

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

  const handleUpload = async () => {
    let formData = new FormData();

    if (selectedFiles.length < 1 || !isSellItemFormValid(sellItemFormData))
      return;

    for (const [key, value] of Object.entries(sellItemFormData)) {
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
    }

    selectedFiles.forEach((file) => {
      console.log(file);
      formData.append(`file`, file);
    });

    try {
      debugger;
      const url = 'http://localhost:5001/api/v1/item/addItem';
      const response = await axios({
        method: 'post',
        url,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(response);
      toast.success('Item added successfully');

      setTimeout(() => {
        router.push(`/user/${userId}`);
      }, 700);
      setSellItemFormData({ ...sellItemFormData, ...initialSellItemFormState });
    } catch (error) {
      console.log(error);
    }
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
