import { axiosInstance } from '@/axios/axiosRequestConfig';
import { setUser } from '@/redux/features/authentication/authenticationSlice';
import { IInitialValues } from '@/types/authentication.types';
import { AnyAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
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
  inputEmail,
  password,
  setIsLoading,
  router,
  dispatch,
}: {
  inputEmail: string;
  password: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  router: NextRouter;
  dispatch: Dispatch<AnyAction>;
}) => {
  try {
    let response: AxiosResponse = await axiosInstance.post('auth/login', {
      inputEmail,
      password,
    });

    const {
      country,
      dateOfBirth,
      email,
      gender,
      holidayMode,
      id,
      image,
      language,
      name,
      role,
      rating,
    } = response.data.user;

    dispatch(
      setUser({
        rating,
        country,
        dateOfBirth,
        email,
        gender,
        holidayMode,
        id,
        image,
        language,
        name,
        role,
      })
    );
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
    dispatch(
      setUser({
        country: '',
        dateOfBirth: '',
        email: '',
        gender: '',
        holidayMode: false,
        id: '',
        image: '',
        language: '',
        name: '',
        role: '',
        rating: 0,
      })
    );

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

    const {
      country,
      dateOfBirth,
      email,
      gender,
      holidayMode,
      id,
      image,
      language,
      name,
      role,
      rating,
    } = response.data.user[0];

    dispatch(
      setUser({
        rating,
        country,
        dateOfBirth,
        email,
        gender,
        holidayMode,
        id,
        image,
        language,
        name,
        role,
      })
    );
  } catch (error) {
    console.log(error);
    dispatch(
      setUser({
        country: '',
        dateOfBirth: '',
        email: '',
        gender: '',
        holidayMode: false,
        id: '',
        image: '',
        language: '',
        name: '',
        role: '',
        rating: 0,
      })
    );
  }
};
