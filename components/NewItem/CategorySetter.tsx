import styled from 'styled-components';

const listOfBrands = [
  'Nike',
  'Louis Vuitton',
  'Hermes',
  'Gucci',
  'Tiffany & Co.',
  'Zara',
  'H&M',
  'Rolex',
  'Burberry',
  'Adidas',
];

function CategorySetter() {
  return (
    <CategorySetterWrapper>
      <div className="categorySetterWrapper__category">
        <p className="categorySetterWrapper__text">Category</p>
      </div>

      <div className="categorySetterWrapper__brand">
        <p className="categorySetterWrapper__text">Brand</p>
      </div>

      <div className="categorySetterWrapper__condition">
        <p className="categorySetterWrapper__text">Condition</p>
      </div>
    </CategorySetterWrapper>
  );
}

export default CategorySetter;

const CategorySetterWrapper = styled.div`
  margin-bottom: 2rem;
  font-size: 1.2rem;
  background-color: #fff;

  .categorySetterWrapper__category {
    padding: 2rem;
    border-bottom: 1px #f3f3f3 solid;
  }
  .categorySetterWrapper__brand {
    padding: 2rem;
    border-bottom: 1px #f3f3f3 solid;
  }
  .categorySetterWrapper__condition {
    padding: 2rem;
    border-bottom: 1px #f3f3f3 solid;
  }
`;
