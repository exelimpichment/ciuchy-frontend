import { IInitialFilterState } from '@/types/catalog.types';

const styleSetter = ({
  filters,
  text,
}: {
  filters: IInitialFilterState;
  text: string;
}) => {
  if (text.toLowerCase() === 'price') {
    if (filters.to !== '' || filters.from !== '') {
      return { backgroundColor: '#f7d5d2' };
    }
    return;
  }

  if (filters[text.toLowerCase()] !== '') {
    return { backgroundColor: '#f7d5d2' };
  }
};

export default styleSetter;
