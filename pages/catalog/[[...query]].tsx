import { axiosInstance } from '@/axios/axiosRequestConfig';
import Filter from '@/components/Catalog/Filter';
import QueriedItems from '@/components/Catalog/QueriedItems';
import SelectedFilters from '@/components/Catalog/SelectedFilters';
import { IInitialFilterState } from '@/types/catalog.types';
import { IItem } from '@/types/user.types';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

function Catalog({ data }: { data: any }) {
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filters, setFilters] =
    useState<IInitialFilterState>(initialFilterState);
  const [listOfItems, setListOfItems] = useState<IItem[]>([]);
  const [pageNmb, setPageNmb] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const router = useRouter();

  const observerRef = useRef<IntersectionObserver | null>(null);

  const lastItemRef = useCallback(
    (node: HTMLElement | null) => {
      if (isLoading) return;
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setIsLoading(true);
          fetchAdditionalItems();
          setPageNmb(pageNmb + 1);
        }
      });
      if (node) observerRef.current.observe(node);
      console.log('fetching');
      console.log(node);
    },
    [isLoading, hasMore]
  );

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

  useEffect(() => {
    setListOfItems(data.queriedList);
  }, [data]);

  const query = router.query;
  useEffect(() => {
    setListOfItems([]);
    setPageNmb(1);
    setHasMore(true);
  }, [query]);

  useEffect(() => {
    // debugger;
    const fetchItems = async () => {
      const queryString = Object.entries(query).map(([key, value]) => ({
        key,
        value: Array.isArray(value) ? value[0] : value || '',
      }));

      const updatedQueryString = queryString
        .map((item) => `${item.key}=${encodeURIComponent(item.value)}`)
        .join('&');

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
    fetchItems();
  }, [query]);

  const fetchAdditionalItems = async () => {
    const queryString = Object.entries(query).map(([key, value]) => ({
      key,
      value: Array.isArray(value) ? value[0] : value || '',
    }));

    const updatedQueryString = queryString
      .map((item) => `${item.key}=${encodeURIComponent(item.value)}`)
      .join('&');
    try {
      const response = await axiosInstance.get<IItemsQueryResponse>(
        `item/getAllItems?${updatedQueryString}&page=${pageNmb + 1}`
      );
      setListOfItems((prev) => [...prev, ...response.data.queriedList]);
      setIsLoading(false);
      if (response.data.queriedList.length < 12) {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <CatalogWrapper>
      <div className="container">
        <h1>Woman</h1>
        <Filter filters={filters} setFilters={setFilters} />
        <SelectedFilters
          filters={filters}
          handleRemoveFilter={handleRemoveFilter}
        />
        <QueriedItems listOfItems={listOfItems} lastItemRef={lastItemRef} />
        {isLoading && (
          <div className="catalog__loading-container">
            <p className="loading-container__paragraph">Loading ...</p>
          </div>
        )}

        {!hasMore && (
          <div className="catalog__loading-container">
            <p className="loading-container__paragraph">No more items</p>
          </div>
        )}
      </div>
    </CatalogWrapper>
  );
}

export default Catalog;

export const getServerSideProps = async ({
  query,
}: {
  query: { [key: string]: string | string[] | undefined };
}) => {
  const queryString = Object.keys(query)
    .map((key) => `${key}=${encodeURIComponent(query[key] as string)}`)
    .join('&');

  interface IItemsQueryResponse {
    numHits: number;
    queriedList: IItem[];
    [key: string]: IItem[] | number;
  }

  try {
    const response = await axiosInstance.get<IItemsQueryResponse>(
      `item/getAllItems`
    );
    const data = response.data;
    console.log(data);

    return { props: { data } };
  } catch (error) {
    console.log(error);
    return { props: { data: null } };
  }
};

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
