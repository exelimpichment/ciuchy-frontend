import styled from 'styled-components';
import LogInButton from './LogInButton';
import SignUpButton from './SignUpButton';

function LoginLogoutPanel() {
  return (
    <LoginLogoutPanelWrapper>
      <LogInButton />
      <SignUpButton />
    </LoginLogoutPanelWrapper>
  );
}

export default LoginLogoutPanel;

const LoginLogoutPanelWrapper = styled.div`
  display: flex;
  align-items: center;
`;
