import { RxCross2 } from 'react-icons/rx';
import styled from 'styled-components';

const isLogIn = true;

const windowHeader = isLogIn ? (
  <div className="h2">Log In</div>
) : (
  <div className="h2">Sign Up test test</div>
);

function LogInSignUpWindow() {
  return (
    <LogInSignUpWindowWrapper>
      <div className="svg-container">
        <button className="btn">
          <RxCross2 />
        </button>
      </div>
      {windowHeader}
    </LogInSignUpWindowWrapper>
  );
}

export default LogInSignUpWindow;

const LogInSignUpWindowWrapper = styled.div`
  //temp style
  position: absolute;
  top: 0;
  left: 0;
  //temp style
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  width: 340px;
  height: 340px;
  background-color: red;
  z-index: 3;
  border-radius: 4px;
  /* padding-right: 10px;
  padding-top: 10px; */

  .svg-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;

    padding: 10px 10px 0 0;

    .btn {
      height: 2rem;
      width: 2rem;
      cursor: pointer;
    }
    svg {
      /* margin: ; */
      font-size: 2rem;
    }
  }
`;
