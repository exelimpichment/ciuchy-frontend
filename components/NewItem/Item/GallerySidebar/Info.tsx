import styled from 'styled-components';

const category = 'woman';
const brand = 'Zara';
const type = 'Shoes';
const condition = 'Very good';

function Info() {
  return (
    <InfoWrapper>
      <div className="info__line-wrapper">
        <div className="info__brand-title">Brand</div>
        <div className="info__brand-value">{brand}</div>
      </div>

      <div className="info__line-wrapper">
        <div className="info__category-title">Category</div>
        <div className="info__category-value">{category}</div>
      </div>

      <div className="info__line-wrapper">
        <div className="info__type-title">Type</div>
        <div className="info__type-value">{type}</div>
      </div>

      <div className="info__line-wrapper">
        <div className="info__condition-title">Condition</div>
        <div className="info__condition-value">{condition}</div>
      </div>
    </InfoWrapper>
  );
}

export default Info;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e5e5e5;
  padding: 7px 0;
  font-size: 1.1rem;

  .info__line-wrapper {
    display: flex;
    justify-content: space-between;
    padding-right: 0.3rem;
    padding: 1px 0;

    .info__brand-value,
    .info__category-value,
    .info__type-value,
    .info__condition-value {
      color: rgb(117, 117, 117);
    }
  }
`;
