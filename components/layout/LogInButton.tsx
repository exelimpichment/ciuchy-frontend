import { useNavBarStore } from '@/store/store';
import { useRouter } from 'next/router';
import styled from 'styled-components';

function LogInButton() {
  const setIsMember = useNavBarStore((state) => state.setIsMember);
  const isMember = useNavBarStore((state) => state.isMember);

  const router = useRouter();
  console.log(router);

  const getButtonDisabledStatus = (pathname: string, member: boolean) => {
    if (pathname === '/authentication' && member) return true;
  };

  return (
    <Wrapper
      type="button"
      className="btn"
      onClick={() => setIsMember(true)}
      disabled={getButtonDisabledStatus(router.pathname, isMember)}
    >
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
