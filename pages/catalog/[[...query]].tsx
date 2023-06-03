import { axiosInstance } from '@/axios/axiosRequestConfig';
import Filter from '@/components/Catalog/Filter';
import SelectedFilters from '@/components/Catalog/SelectedFilters';
import { IInitialFilterState } from '@/types/catalog.types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function Catalog() {
  const initialFilterState = {
    category: '',
    brand: '',
    color: '',
    type: '',
    condition: '',
    from: '',
    to: '',
    sortby: '',
  };
  const [filters, setFilters] =
    useState<IInitialFilterState>(initialFilterState);
  const router = useRouter();

  const getQueryFilters = (
    array: { key: string; value: string | number }[],
    keyToDelete: string
  ) => {
    return array.filter((item) => item.key !== keyToDelete);
  };

  const handleRemoveFilter = (key: string) => {
    setFilters((prevState) => ({
      ...prevState,
      [key]: '',
    }));

    const queryArray = Object.entries(router.query).map(([key, value]) => ({
      key,
      value: Array.isArray(value) ? value[0] : value || '',
    }));

    const updatedQuery = getQueryFilters(queryArray, key);

    const updatedQueryString = updatedQuery
      .map((item) => `${item.key}=${encodeURIComponent(item.value)}`)
      .join('&');

    router.push({
      pathname: '/catalog',
      search: updatedQueryString,
    });
  };

  const fetchItems = async () => {
    const queryString = Object.entries(router.query).map(([key, value]) => ({
      key,
      value: Array.isArray(value) ? value[0] : value || '',
    }));

    const updatedQueryString = queryString
      .map((item) => `${item.key}=${encodeURIComponent(item.value)}`)
      .join('&');

    console.log(updatedQueryString);

    try {
      const response = await axiosInstance.get(
        `item/getAllItems?${updatedQueryString}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [router.query]);

  return (
    <CatalogWrapper>
      <div className="container">
        <h1>Woman</h1>
        <Filter filters={filters} setFilters={setFilters} />
        <SelectedFilters
          filters={filters}
          handleRemoveFilter={handleRemoveFilter}
        />
      </div>
    </CatalogWrapper>
  );
}

export default Catalog;

const CatalogWrapper = styled.div`
  h1 {
    font-size: 1.8rem;
    padding: 2rem 0 1.25rem 0;
    border-bottom: 1px #d6d6d6 solid;
  }
`;
