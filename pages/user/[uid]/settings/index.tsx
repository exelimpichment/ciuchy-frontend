import SettingsMain from '@/components/Settings/SettingsMain';
import SettingsSidebar from '@/components/Settings/SettingsSidebar';
import { useState } from 'react';
import styled from 'styled-components';

export type ActiveSubmenu =
  | 'Profile details'
  | 'Account settings'
  | 'Postage'
  | 'Payments'
  | 'Notifications'
  | 'Privacy settings'
  | 'Security';

function Settings() {
  const [activeSubmenu, setActiveSubmenu] =
    useState<ActiveSubmenu>('Profile details');

  const handleSettingsSidebarClick = (
    event: React.MouseEvent<HTMLLIElement>
  ) => {
    event.preventDefault();
    const target = event.target as HTMLLIElement;
    if (target.textContent) {
      setActiveSubmenu(target.textContent as ActiveSubmenu);
    }
  };

  return (
    <SettingsWrapper>
      <div className="container">
        <div className="settingsWrapper__inner">
          <SettingsSidebar
            handleSettingsSidebarClick={handleSettingsSidebarClick}
            activeSubmenu={activeSubmenu}
          />
          <SettingsMain activeSubmenu={activeSubmenu} />
        </div>
      </div>
    </SettingsWrapper>
  );
}

export default Settings;

const SettingsWrapper = styled.section`
  background-color: #f2f1f2;
  min-height: calc(100vh - 110px);
  overflow: scroll;

  .settingsWrapper__inner {
    display: flex;
    padding-left: 2rem;
  }
`;
