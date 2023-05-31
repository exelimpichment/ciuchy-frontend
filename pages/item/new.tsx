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
  color: '',
  brand: '',
  type: '',
  condition: '',
  price: 0,
};

const New = () => {
  const router = useRouter();
  const { id, image, name, rating } = useSelector(
    (state: RootState) => state.authentication?.user
  );

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [sellItemFormData, setSellItemFormData] = useState<ISellItemForm>(
    initialSellItemFormState
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'price') {
      setSellItemFormData({
        ...sellItemFormData,
        [name]: Number(value.replace(/[^1-9]/g, '')),
      });
      return;
    }
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
    // debugger;
    setIsLoading(true);
    let formData = new FormData();

    if (selectedFiles.length < 1 || !isSellItemFormValid(sellItemFormData)) {
      setIsLoading(false);
      toast.warning('Please add all fields and images');
    }

    // append all fields
    for (const [key, value] of Object.entries(sellItemFormData)) {
      formData.append(key, String(value));
    }
    // append user ID, user image, username
    formData.append('owner', String(id));
    formData.append('ownerImage', String(image));
    formData.append('ownerName', String(name));
    formData.append('ownerRating', String(rating));

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
      const url = 'http://localhost:5001/api/v1/item/addItem';
      const response = await axios({
        method: 'post',
        url,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(response);
      setIsLoading(false);
      toast.success('Item added successfully');

      setTimeout(() => {
        router.push(`/user/${id}`);
      }, 700);
      setSellItemFormData({ ...sellItemFormData, ...initialSellItemFormState });
    } catch (error) {
      setIsLoading(false);
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
        <ButtonPanel handleUpload={handleUpload} isLoading={isLoading} />
      </div>
    </NewItemWrapper>
  );
};

export default New;

const NewItemWrapper = styled.section`
  background-color: #f2f1f2;
  min-height: calc(100vh - (110px + 65px));
  overflow: scroll;

  h1 {
    font-size: 1.8rem;
    padding: 2rem 0 1.25rem 0;
  }
`;
