import Link from 'next/link';
import styled from 'styled-components';
import LogInButton from './LogInButton';
import SignUpButton from './SignUpButton';

function LoginLogoutPanel() {
  return (
    <LoginLogoutPanelWrapper>
      <Link href="/authentication">
        <LogInButton />
      </Link>
      <Link href="/authentication">
        <SignUpButton />
      </Link>
    </LoginLogoutPanelWrapper>
  );
}

export default LoginLogoutPanel;

const LoginLogoutPanelWrapper = styled.div`
  display: flex;
  align-items: center;
`;
