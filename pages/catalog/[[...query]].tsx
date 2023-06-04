import { axiosInstance } from '@/axios/axiosRequestConfig';
import Filter from '@/components/Catalog/Filter';
import QueriedItems from '@/components/Catalog/QueriedItems';
import SelectedFilters from '@/components/Catalog/SelectedFilters';
import { IInitialFilterState } from '@/types/catalog.types';
import { IItem } from '@/types/user.types';
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

  const [listOfItems, setListOfItems] = useState<IItem[]>([]);
  const [pageNmb, setPageNmb] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  interface IItemsQueryResponse {
    numHits: number;
    queriedList: IItem[];
    [key: string]: IItem[] | number;
  }

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
      const response = await axiosInstance.get<IItemsQueryResponse>(
        `item/getAllItems?${updatedQueryString}`
      );
      setListOfItems(response.data.queriedList);
      console.log(response.data);
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
        <QueriedItems listOfItems={listOfItems} />
        {isLoading && (
          <div className="catalog__loading-container">
            <p className="loading-container__paragraph">Loading ...</p>
          </div>
        )}
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

  .catalog__loading-container {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    color: rgb(117, 117, 117);
  }
`;
