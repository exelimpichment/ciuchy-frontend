import { Input, InputAdornment } from '@mui/material';
import styled from 'styled-components';

function PriceSetter() {
  return (
    <PriceSetterWrapper>
      <div className="priceSetterWrapper__amount">
        <p className="priceSetterWrapper__amount-text">Price</p>
        <Input
          className="priceSetterWrapper__amount-input"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </div>
    </PriceSetterWrapper>
  );
}

export default PriceSetter;

const PriceSetterWrapper = styled.div`
  background-color: #fff;
  font-size: 1.2rem;
  margin-bottom: 2rem;

  .priceSetterWrapper__amount {
    padding: 2rem;
    display: flex;
    align-items: space-between;
    justify-content: space-between;

    .priceSetterWrapper__amount-input {
      width: 50%;
    }
  }
`;
