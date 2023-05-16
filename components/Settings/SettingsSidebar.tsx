import styled from 'styled-components';
import SidebarLink from './SidebarLink';

const sidebarLinks = [
  { key: 0, text: 'Profile details', onClick: () => {} },
  { key: 1, text: 'Account settings', onClick: () => {} },
  { key: 2, text: 'Postage', onClick: () => {} },
  { key: 3, text: 'Payments', onClick: () => {} },
  { key: 4, text: 'Notification', onClick: () => {} },
  { key: 5, text: 'Privacy settings', onClick: () => {} },
  { key: 6, text: 'Security', onClick: () => {} },
];

interface ISettingsSidebarProps {
  handleSettingsSidebarClick: (e: React.MouseEvent<HTMLLIElement>) => void;
}

const SettingsSidebar: React.FC<ISettingsSidebarProps> = ({
  handleSettingsSidebarClick,
}) => {
  return (
    <SettingsSidebarWrapper>
      <h2>Settings</h2>
      <ul className="settings-sidebar__link-container">
        {sidebarLinks.map(({ key, text }) => (
          <SidebarLink
            key={key}
            text={text}
            onClick={handleSettingsSidebarClick}
          />
        ))}
      </ul>
    </SettingsSidebarWrapper>
  );
};

export default SettingsSidebar;

const SettingsSidebarWrapper = styled.div`
  min-width: 250px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.8rem;
    padding: 2rem 0 1.25rem 16px;
  }
`;
