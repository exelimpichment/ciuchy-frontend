import { useState } from 'react';
import { ImRadioChecked2, ImRadioUnchecked } from 'react-icons/im';
import styled from 'styled-components';

function DropdownFormLine({ text }: { text: string }) {
  const [checked, setChecked] = useState<boolean>(false);

  const radio = checked ? <ImRadioChecked2 /> : <ImRadioUnchecked />;

  // const radioClickHandler = () => {}

  return (
    <DropdownFormLineWrapper>
      <div className="dropdownFormLineWrapper__inner">
        <p>{text}</p>
        <button
          type="button"
          // onClick={radioClickHandler}
          style={!checked ? { color: '#ccc' } : { color: '#c45f55' }}
          className="dropdownFormLineWrapper_swg-container"
          onClick={() => setChecked(!checked)}
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
