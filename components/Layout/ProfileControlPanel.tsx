import styled from 'styled-components';
import NotificationButtons from './NotificationPanel';
import UserSellNow from './UserSellNow';

function ProfileControlPanel() {
  return (
    <Wrapper>
      <NotificationButtons />
      <UserSellNow />
    </Wrapper>
  );
}

export default ProfileControlPanel;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
