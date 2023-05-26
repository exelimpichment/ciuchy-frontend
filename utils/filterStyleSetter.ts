import { IInitialFilterState } from '@/types/catalog.types';

const styleSetter = ({
  filters,
  text,
}: {
  filters: IInitialFilterState;
  text: string;
}) => {
  if (
    typeof filters[text.toLowerCase()] === 'object' &&
    filters[text.toLowerCase()] !== null &&
    typeof (filters[text.toLowerCase()] as { from?: string; to?: string })
      .from !== 'undefined' &&
    typeof (filters[text.toLowerCase()] as { from?: string; to?: string })
      .to !== 'undefined' &&
    ((filters[text.toLowerCase()] as { from?: string; to?: string }).from !==
      '' ||
      (filters[text.toLowerCase()] as { from?: string; to?: string }).to !== '')
  ) {
    return { backgroundColor: '#f7d5d2' };
  }
  if (
    filters[text.toLowerCase()] &&
    typeof filters[text.toLowerCase()] !== 'object'
  ) {
    return { backgroundColor: '#f7d5d2' };
  }
  return undefined;
};

export default styleSetter;
