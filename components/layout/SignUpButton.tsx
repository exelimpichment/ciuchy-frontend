import { useNavBarStore } from '@/store/store';
import { useRouter } from 'next/router';
import styled from 'styled-components';

function SignUpButton() {
  const setIsMember = useNavBarStore((state) => state.setIsMember);
  const isMember = useNavBarStore((state) => state.isMember);
  const router = useRouter();

  const getButtonDisabledStatus = (pathname: string, member: boolean) => {
    if (pathname === '/authentication' && !member) return true;
  };

  return (
    <Wrapper
      type="button"
      className="btn"
      onClick={() => setIsMember(false)}
      disabled={getButtonDisabledStatus(router.pathname, isMember)}
    >
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
