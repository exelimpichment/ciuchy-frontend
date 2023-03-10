import { useNavBarStore } from '@/store/store';
import styled from 'styled-components';

function LogInButton() {
  const setIsMember = useNavBarStore((state) => state.setIsMember);

  return (
    <Wrapper type="button" className="btn" onClick={() => setIsMember(true)}>
      Log In
    </Wrapper>
  );
}

export default LogInButton;

const Wrapper = styled.button`
  background-color: #fff;
  margin-left: 20px;
  padding: 0 8px;
  cursor: pointer;
  border: 1px solid #c45f55;
  border-radius: 4px;
  color: #c45f55;
  font-weight: 500;
  height: 29px;
  width: 84px;

  &:hover {
    background-color: #e6e6e6;
  }
`;
