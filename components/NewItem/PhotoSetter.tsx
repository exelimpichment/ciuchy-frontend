import styled from 'styled-components';

function PhotoSetter() {
  return (
    <PhotoSetterWrapper>
      <h2>Add up to 20 photos.</h2>
    </PhotoSetterWrapper>
  );
}

export default PhotoSetter;

const PhotoSetterWrapper = styled.div`
  background-color: #fff;
  height: 400px;
  margin-bottom: 2rem;
  padding: 0 1.5rem 0 1.5rem;

  h2 {
  }
`;
