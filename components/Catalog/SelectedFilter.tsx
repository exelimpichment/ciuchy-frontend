import { RxCross2 } from 'react-icons/rx';
import styled from 'styled-components';

interface SelectedFilterProps {
  item: { key: string; value: string | number };
  handleRemoveFilter: (key: string) => void;
}

const SelectedFilter: React.FC<SelectedFilterProps> = ({
  item,
  handleRemoveFilter,
}) => {
  const { key, value } = item;

  return (
    <SelectedFilterWrapper
      type="button"
      onClick={() => handleRemoveFilter(key)}
    >
      {(key === 'price.from' || key === 'price.to') && (
        <p className="selected-filter__title">{key.split('.')[1]}:</p>
      )}
      <p className="selected-filter__value">
        {value}
        {(key === 'price.from' || key === 'price.to') && '$'}
      </p>
      <span className="selected-filter__svg">
        <RxCross2 />
      </span>
    </SelectedFilterWrapper>
  );
};

export default SelectedFilter;

const SelectedFilterWrapper = styled.button`
  display: flex;
  align-items: center;
  background-color: #e6e6e6;
  padding: 0.5rem 1rem;
  min-height: 33px;
  border-radius: 3996px;
  margin-right: 0.35rem;

  p {
    font-size: 1.05rem;
    margin-right: 3px;
  }

  .selected-filter__svg {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.15rem;
    transform: translateY(1px);
    cursor: pointer;
    svg {
      &:hover {
        color: rgb(196, 95, 85);
      }
    }
  }
`;
