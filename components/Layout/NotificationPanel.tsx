import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { RxEnvelopeClosed, RxEnvelopeOpen } from 'react-icons/rx';
import { VscBell, VscBellDot } from 'react-icons/vsc';

import styled from 'styled-components';

let newMessageReceived = true;
let newNotificationReceived = true;
let newLikeReceived = true;

function NotificationPanel() {
  return (
    <Wrapper>
      <div
        //  type='button'
        className="notification-btn"
        onClick={() => {
          console.log('envelope');
        }}
      >
        {newMessageReceived ? <RxEnvelopeClosed /> : <RxEnvelopeOpen />}
      </div>
      <div
        // type="button"
        className="notification-btn"
        onClick={() => {
          console.log('bell');
        }}
      >
        {newNotificationReceived ? <VscBellDot /> : <VscBell />}
      </div>
      <div
        // type="button"
        className="notification-btn"
        onClick={() => {
          console.log('like');
        }}
      >
        {newLikeReceived ? <FcLike /> : <FcLikePlaceholder />}
      </div>
    </Wrapper>
  );
}

export default NotificationPanel;

const Wrapper = styled.div`
  display: flex;
  font-size: 1.6rem;
  margin-left: 15px;

  .notification-btn {
    cursor: pointer;
    margin-left: 20px;
    height: 1.6rem;
  }
`;
