import styled from 'styled-components';
import AccountSettings from './AccountSettings';
import ProfileDetails from './ProfileDetails';
import UnderConstruction from './UnderConstruction/UnderConstruction';

interface SettingsMainProps {
  activeSubmenu:
    | 'Profile details'
    | 'Account settings'
    | 'Postage'
    | 'Payments'
    | 'Notifications'
    | 'Privacy settings'
    | 'Security';
}

const SettingsMain: React.FC<SettingsMainProps> = ({ activeSubmenu }) => {
  return (
    <SettingsMainWrapper>
      {activeSubmenu === 'Profile details' && <ProfileDetails />}
      {activeSubmenu === 'Account settings' && <AccountSettings />}
      {activeSubmenu !== 'Profile details' &&
        activeSubmenu !== 'Account settings' && <UnderConstruction />}
    </SettingsMainWrapper>
  );
};

export default SettingsMain;

const SettingsMainWrapper = styled.div`
  flex-grow: 1;
`;
