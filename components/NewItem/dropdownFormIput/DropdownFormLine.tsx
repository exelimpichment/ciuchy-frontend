import { HandleRadio } from '@/types/authentication.types';
import { ISellItemForm } from '@/types/newItem.types';
import { ImRadioChecked2, ImRadioUnchecked } from 'react-icons/im';
import styled from 'styled-components';

function DropdownFormLine({
  handleRadio,
  item,
  sellItemFormData,
}: {
  handleRadio: HandleRadio;

  item: {
    key: number;
    value: string;
    group: string;
  };
  sellItemFormData: ISellItemForm;
}) {
  const radio =
    sellItemFormData[item.group] === item.value ? (
      <ImRadioChecked2 />
    ) : (
      <ImRadioUnchecked />
    );

  return (
    <DropdownFormLineWrapper>
      <div className="dropdownFormLineWrapper__inner">
        <p>{item.value}</p>
        <button
          type="button"
          onClick={() => {
            handleRadio({ name: item.group, value: item.value });
          }}
          style={
            sellItemFormData[item.group] !== item.value
              ? { color: '#ccc' }
              : { color: '#c45f55' }
          }
          className="dropdownFormLineWrapper_swg-container"
        >
          {radio}
        </button>
      </div>
    </DropdownFormLineWrapper>
  );
}

export default DropdownFormLine;

const DropdownFormLineWrapper = styled.div`
  background-color: #fff;

  border-bottom: 1px #f3f3f3 solid;
  font-size: 1.2rem;

  .dropdownFormLineWrapper__inner {
    min-height: 66px;
    padding: 16px;
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
