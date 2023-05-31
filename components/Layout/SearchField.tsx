import { IFetchedUser, ResponseData } from '@/types/navbar.types';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { axiosInstance } from '../../axios/axiosRequestConfig';
import useDebounce from '../../hooks/useDebounce';
import DropdownSearchMenu from './DropdownSearchFieldMenu/DropdownSearchMenu';

function SearchField() {
  const [inputValue, setInputValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [userList, setUserList] = useState<IFetchedUser[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const debouncedValue = useDebounce<string>(inputValue, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setInputValue(event.target.value);
  };

  const fetchUserList = useCallback(async (): Promise<void> => {
    try {
      if (debouncedValue === '') {
        setLoading(false);
        return;
      }
      const response = await axiosInstance.get<ResponseData>(
        `user/getUserList?user=${debouncedValue}`
      );
      const userArray: IFetchedUser[] = response.data.listOfUsers;
      setLoading(false);
      setUserList(userArray);
      console.log({ userArray });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }, [debouncedValue]);

  useEffect(() => {
    fetchUserList();
  }, [debouncedValue, fetchUserList]);

  const handleFocus = () => {
    setUserList([]);
    setIsFocused(true);
  };

  const handleBlur = () => {
    setUserList([]);
    setInputValue('');
    setIsFocused(false);
  };

  return (
    <SearchFieldWrapper>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="text"
        onChange={handleChange}
        id="userSearch"
        name="userSearch"
        placeholder="Search for user"
        autoComplete="off"
        value={inputValue}
      />
      {isFocused && inputValue && (
        <DropdownSearchMenu userList={userList} loading={loading} />
      )}
    </SearchFieldWrapper>
  );
}

export default SearchField;

const SearchFieldWrapper = styled.div`
  flex-grow: 1;
  margin: 0 40px;
  position: relative;

  input {
    all: unset;
    width: 100%;
    background-color: #f2f2f2;
    padding: 8px;

    border-radius: 4px;
  }
`;
