import Filter from '@/components/Catalog/Filter';
import SelectedFilters from '@/components/Catalog/SelectedFilters';
import { IInitialFilterState } from '@/types/catalog.types';
import { useState } from 'react';
import styled from 'styled-components';

function Catalog() {
  const initialFilterState = {
    category: '',
    brand: '',
    color: '',
    type: '',
    condition: '',
    price: {
      from: 0,
      to: 0,
    },
    sortby: '',
  };
  const [filters, setFilters] =
    useState<IInitialFilterState>(initialFilterState);

  return (
    <CatalogWrapper>
      <div className="container">
        <h1>Woman</h1>
        <Filter filters={filters} setFilters={setFilters} />
        <SelectedFilters filters={filters} />
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
