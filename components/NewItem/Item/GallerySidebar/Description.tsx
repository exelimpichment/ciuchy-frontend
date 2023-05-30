import styled from 'styled-components';

function Description({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <DescriptionWrapper>
      <p className="description__title">{title}</p>
      <p className="description__text-body">{description}</p>
    </DescriptionWrapper>
  );
}

export default Description;

const DescriptionWrapper = styled.div`
  border-bottom: 1px solid #e5e5e5;
  .description__title {
    font-size: 1.2rem;
    padding: 7px 0 9px;
  }
  .description__text-body {
    word-break: break-word;
    padding: 0 0 13px;
    color: rgb(117, 117, 117);
  }
`;
