import styled from 'styled-components';

const title = 'lovely dress';

function Description() {
  return (
    <DescriptionWrapper>
      <p className="description__title">{title}</p>
      <p className="description__text-body">
        Once upon a time in a small village nestled amidst lush green hills,
        there lived a young girl named Emily. She had an insatiable curiosity
        and an adventurous spirit that set her apart from others. Every day, she
        would embark on exciting journeys, exploring the wonders of the world
        around her. One fateful morning, Emily stumbled upon an ancient map
        hidden in her grandfathers attic. The faded parchment depicted a
        mysterious island said to hold a long-lost treasure. Intrigued by the
        prospect of discovery, she gathered her courage and set sail on a daring
        expedition.
      </p>
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
