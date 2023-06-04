import { IInitialFilterState } from '@/types/catalog.types';
import getActiveFiltersArray from '@/utils/activeFiltersArray';
import styled from 'styled-components';
import SelectedFilter from './SelectedFilter';

interface ISelectedFiltersProps {
  filters: IInitialFilterState;
  handleRemoveFilter: (key: string) => void;
}

const SelectedFilters: React.FC<ISelectedFiltersProps> = ({
  filters,
  handleRemoveFilter,
}) => {
  const activeFiltersArray = getActiveFiltersArray(filters);

  return (
    <SelectedFiltersWrapper
      style={activeFiltersArray.length > 0 ? { padding: '0 0 1.25rem 0' } : {}}
    >
      {activeFiltersArray.map((item) => (
        <SelectedFilter
          key={item.key}
          item={item}
          handleRemoveFilter={handleRemoveFilter}
        />
      ))}
    </SelectedFiltersWrapper>
  );
};

export default SelectedFilters;

const SelectedFiltersWrapper = styled.div`
  border-bottom: 1px #d6d6d6 solid;
  display: flex;
  margin-bottom: 2rem;
`;
