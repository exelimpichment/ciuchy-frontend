import { IInitialFilterState } from '@/types/catalog.types';

const getActiveFiltersArray = (filters: IInitialFilterState) => {
  return Object.entries(filters)
    .flatMap(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        return Object.entries(value).map(([nestedKey, nestedValue]) => ({
          key: `${key}.${nestedKey}`,
          value: nestedValue,
        }));
      } else {
        return { key, value };
      }
    })
    .filter((item) => item.value !== '');
};

export default getActiveFiltersArray;
