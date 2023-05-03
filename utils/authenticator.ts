import { axiosInstance } from '@/axios/axiosRequestConfig';
import { IInitialValues } from '@/types/authentication';
import { NextRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';

interface IRegister {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setValues: Dispatch<SetStateAction<IInitialValues>>;
  initialValues: IInitialValues;
  values: IInitialValues;
}

export const register = async ({
  setIsLoading,
  setValues,
  initialValues,
  values,
}: IRegister) => {
  try {
    let response = await axiosInstance.post('/register', values);
    setIsLoading(false);
    toast.success(response?.data.msg);
    setValues(initialValues);
  } catch (error: any) {
    console.log(error);
    setIsLoading(false);
    toast.error(error.response?.data.msg);
  }
};

export const login = async ({
  email,
  password,
  setIsLoading,
  router,
}: {
  email: string;
  password: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  router: NextRouter;
}) => {
  try {
    let response = await axiosInstance.post('/login', { email, password });
    console.log(response);
    setIsLoading(false);
    setTimeout(() => {
      router.push('/');
    }, 700);
    toast.success(response?.data.msg);
  } catch (error: any) {
    setIsLoading(false);
    toast.error(error.response?.data.msg);
  }
};
