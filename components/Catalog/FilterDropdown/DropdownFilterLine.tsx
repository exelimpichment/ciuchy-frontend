import { IInitialFilterState } from '@/types/catalog.types';
import { IList } from '@/utils/sellNowLists';
import { ImRadioChecked2, ImRadioUnchecked } from 'react-icons/im';
import styled from 'styled-components';

interface IDropdownFilterLineProps {
  item: IList;
  filters: IInitialFilterState;
  handleRadio: ({
    name,
    value,
    event,
  }: {
    name: string;
    value: string;
    event: React.MouseEvent;
  }) => void;
}

const DropdownFilterLine: React.FC<IDropdownFilterLineProps> = ({
  item,
  handleRadio,
  filters,
}) => {
  // console.log(item.group);

  // console.log(filters[item.group]);

  const radio =
    filters[item.group] === item.value ? (
      <ImRadioChecked2 />
    ) : (
      <ImRadioUnchecked />
    );
  return (
    <DropdownFilterLineWrapper>
      <div className="dropdownFormLineWrapper__inner">
        <p>{item.value}</p>
        <button
          type="button"
          onClick={(event) => {
            handleRadio({ name: item.group, value: item.value, event });
          }}
          style={
            filters[item.group] !== item.value
              ? { color: '#ccc' }
              : { color: '#c45f55' }
          }
          className="dropdownFormLineWrapper_swg-container"
        >
          {radio}
        </button>
      </div>
    </DropdownFilterLineWrapper>
  );
};

export default DropdownFilterLine;

const DropdownFilterLineWrapper = styled.div`
  background-color: #fff;

  border-bottom: 1px #f3f3f3 solid;
  font-size: 1.1rem;

  .dropdownFormLineWrapper__inner {
    min-height: 56px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .dropdownFormLineWrapper_swg-container {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 1.3rem;
    }
  }
`;
