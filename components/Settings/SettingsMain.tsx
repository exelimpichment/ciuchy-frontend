import ProfileDetails from './ProfileDetails';

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
    <div>
      {activeSubmenu === 'Profile details' && <ProfileDetails />}
      {/*activeSubmenu === 'Account settings'  <AccountSettings /> */}
      {/* <SettingsSubmenuPlaceholder /> */}
    </div>
  );
};

export default SettingsMain;
