import styled from 'styled-components';

type WardrobeReviewTogglePanelProps = {
  handleToggleClick: (e: React.MouseEvent<HTMLLIElement>) => void;
  wardrobeReviewToggle: 'Wardrobe' | 'Reviews';
};

const WardrobeReviewTogglePanel: React.FC<WardrobeReviewTogglePanelProps> = ({
  handleToggleClick,
  wardrobeReviewToggle,
}) => {
  return (
    <WardrobeReviewTogglePanelWrapper>
      <ul>
        <li
          onClick={handleToggleClick}
          style={
            wardrobeReviewToggle === 'Wardrobe'
              ? { borderBottom: '1px #c45f55 solid' }
              : undefined
          }
        >
          Wardrobe
        </li>
        <li
          onClick={handleToggleClick}
          style={
            wardrobeReviewToggle === 'Reviews'
              ? { borderBottom: '1px #c45f55 solid' }
              : undefined
          }
        >
          Reviews
        </li>
      </ul>
    </WardrobeReviewTogglePanelWrapper>
  );
};

export default WardrobeReviewTogglePanel;

const WardrobeReviewTogglePanelWrapper = styled.div`
  border-bottom: 1px #d6d6d6 solid;
  min-height: 46px;
  margin-top: 2rem;

  ul {
    display: flex;
    height: 100%;
    transform: translateY(1px);

    &:hover {
    }

    li {
      min-height: 46px;
      padding: 0 16px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;
