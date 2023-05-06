import { axiosInstance } from '@/axios/axiosRequestConfig';
import { setUser } from '@/redux/features/authentication/authenticationSlice';
import { IInitialValues } from '@/types/authentication.types';
import { AnyAction } from '@reduxjs/toolkit';
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
    let response = await axiosInstance.post('auth/register', values);
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
  dispatch,
}: {
  email: string;
  password: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  router: NextRouter;
  dispatch: Dispatch<AnyAction>;
}) => {
  try {
    let response = await axiosInstance.post('auth/login', {
      email,
      password,
    });
    console.log(response);

    const { name, userId, role } = response.data.user;
    console.log(name, userId, role);

    dispatch(setUser({ name, userId, role }));
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

export const logout = async ({
  dispatch,
}: {
  dispatch: Dispatch<AnyAction>;
}) => {
  try {
    const response = await axiosInstance.delete('auth/logout');

    console.log(response);
    dispatch(setUser({ name: '', role: '', userId: '' }));

    toast.success(response.data.msg);
  } catch (error: any) {
    toast.error(error.message);
  }
};

export const showUser = async ({
  dispatch,
}: {
  dispatch: Dispatch<AnyAction>;
}) => {
  try {
    const response = await axiosInstance.get('user/showMe');
    console.log(response);
    const { name, userId, role } = response.data.user;
    dispatch(setUser({ name, role, userId }));
  } catch (error) {
    console.log(error);
    dispatch(setUser({ name: '', role: '', userId: '' }));
  }
};
