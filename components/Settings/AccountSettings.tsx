import styled from 'styled-components';
import BirthSection from './AccountSettings/BirthSection';
import ChangePassword from './AccountSettings/ChangePassword';
import DeleteAccount from './AccountSettings/DeleteAccount';
import EmailPhoneSection from './AccountSettings/EmailPhoneSection';
import HolidayMode from './AccountSettings/HolidayMode';
import NameSection from './AccountSettings/NameSection';
import Socials from './AccountSettings/Socials';

function AccountSettings() {
  return (
    <AccountSettingsWrapper>
      <EmailPhoneSection />
      <NameSection />
      <BirthSection />
      <HolidayMode />
      <Socials />
      <ChangePassword />
      <DeleteAccount />
    </AccountSettingsWrapper>
  );
}

export default AccountSettings;

const AccountSettingsWrapper = styled.div``;
