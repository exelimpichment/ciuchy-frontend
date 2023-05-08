import styled from 'styled-components';
import DragAndDrop from './DragAndDrop';

function PhotoSetter() {
  return (
    <PhotoSetterWrapper>
      <h2>Add up to 5 photos.</h2>
      <DragAndDrop />
    </PhotoSetterWrapper>
  );
}

export default PhotoSetter;

const PhotoSetterWrapper = styled.div`
  background-color: #fff;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.2rem;
    padding: 1.3rem 2rem 0 2rem;
    color: rgb(117, 117, 117);
  }
`;