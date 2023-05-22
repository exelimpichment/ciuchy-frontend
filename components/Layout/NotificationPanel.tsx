import { RootState } from '@/redux/store';
import { Badge } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function NotificationPanel() {
  const [messageCount, setMessageCount] = useState<number>(100);
  const [likeCount, setLikeCount] = useState<number>(1);

  const { userId } = useSelector(
    (state: RootState) => state.authentication?.user
  );
  const router = useRouter();

  const handleMessageClick = () => {
    router.push(`/user/${userId}/messages`);
  };

  return (
    <NotificationPanelWrapper>
      <div className="notification-panel__message">
        <CustomBadge badgeContent={messageCount}>
          <HiOutlineMail onClick={handleMessageClick} />
        </CustomBadge>
      </div>

      <div className="notification-panel__like">
        <CustomBadge badgeContent={likeCount}>
          <AiOutlineHeart color="action" />
        </CustomBadge>
      </div>
    </NotificationPanelWrapper>
  );
}

export default NotificationPanel;

const NotificationPanelWrapper = styled.div`
  display: flex;
  font-size: 1.6rem;
  align-items: center;

  .notification-panel__like {
    margin-left: 15px;
  }

  svg {
    font-size: 2rem;
    cursor: pointer;
    &:hover {
      color: #787878;
      transition: all ease 0.2s;
    }
  }
`;

const CustomBadge = styled(Badge)`
  .MuiBadge-badge {
    background-color: #c45f55;
    color: white;
  }
`;
