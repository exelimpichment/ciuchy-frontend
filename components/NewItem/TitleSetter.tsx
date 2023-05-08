import { TextField } from '@mui/material';
import styled from 'styled-components';

function TitleSetter() {
  return (
    <TitleSetterWrapper>
      <div className="titleSetterWrapper__title">
        <p className="titleSetterWrapper__text">Title</p>
        <TextField
          className="titleSetterWrapper__input"
          id="standard-basic"
          variant="standard"
          placeholder="e.g. White COS Jumper"
        />
      </div>
      <div className="titleSetterWrapper__description">
        <p className="titleSetterWrapper__text">Describe your item</p>
        <TextField
          className="titleSetterWrapper__input"
          id="standard-basic"
          variant="standard"
          placeholder="e.g. only worn a few times, true to size"
          multiline
          rows={4}
        />
      </div>
    </TitleSetterWrapper>
  );
}

export default TitleSetter;

const TitleSetterWrapper = styled.div`
  background-color: #fff;
  font-size: 1.2rem;

  margin-bottom: 2rem;

  .titleSetterWrapper__title {
    padding: 2rem;
    display: flex;
    align-items: space-between;
    justify-content: space-between;
    border-bottom: 1px #f3f3f3 solid;

    .titleSetterWrapper__input {
      width: 50%;
    }
  }

  .titleSetterWrapper__description {
    padding: 2rem;
    display: flex;
    align-items: space-between;
    justify-content: space-between;

    .titleSetterWrapper__input {
      width: 50%;
    }
  }
`;
