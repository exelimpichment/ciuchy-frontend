import { IInitialFilterState } from '@/types/catalog.types';
import styled from 'styled-components';

interface ISelectedFiltersProps {
  filters: IInitialFilterState;
}

const SelectedFilters: React.FC<ISelectedFiltersProps> = ({ filters }) => {
  //   console.log(filters.price);

  //   const { price, ...filteredState } = filters;
  //   console.log(price, filteredState);
  //   const filteredKeys = Object.keys(filteredState).filter(
  //     (key) => filteredState[key] !== ''
  //   );
  //   console.log(filteredKeys);

  return (
    <SelectedFiltersWrapper>
      {/* {filteredKeys.map((key) => (
        <div key={key}>{String(filteredState[key])}</div>
      ))} */}
    </SelectedFiltersWrapper>
  );
};

export default SelectedFilters;

const SelectedFiltersWrapper = styled.div``;
