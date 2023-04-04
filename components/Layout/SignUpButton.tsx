import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setIsMember } from '../../redux/features/authenticationSlice/authenticationSlice';

function SignUpButton() {
  const dispatch = useDispatch();

  return (
    <Wrapper className="btn" onClick={() => dispatch(setIsMember(false))}>
      Sign Up
    </Wrapper>
  );
}

export default SignUpButton;

const Wrapper = styled.button`
  background-color: #c45f55;
  margin-left: 10px;
  padding: 0 8px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  height: 29px;
  width: 84px;

  &:hover {
    background-color: #a7655f;
  }
`;
