import { useState } from 'react';
import styled from 'styled-components';
import BirthSection from './AccountSettings/BirthSection';
import ChangePassword from './AccountSettings/ChangePassword';
import DeleteAccount from './AccountSettings/DeleteAccount';
import EmailPhoneSection from './AccountSettings/EmailPhoneSection';
import HolidayMode from './AccountSettings/HolidayMode';
import NameSection from './AccountSettings/NameSection';
import ProfileDetailsSaveButton from './AccountSettings/ProfileDetailsSaveButton';
import Socials from './AccountSettings/Socials';

function AccountSettings() {
  const [deleteSectionOpen, setDeleteSectionOpen] = useState<boolean>(false);

  const handleDeleteChevronClick = () => {
    setDeleteSectionOpen(!deleteSectionOpen);
  };
  return (
    <AccountSettingsWrapper>
      <EmailPhoneSection />
      <NameSection />
      <BirthSection />
      <HolidayMode />
      <Socials />
      <ChangePassword />
      <DeleteAccount
        handleDeleteChevronClick={handleDeleteChevronClick}
        deleteSectionOpen={deleteSectionOpen}
      />
      <ProfileDetailsSaveButton />
    </AccountSettingsWrapper>
  );
}

export default AccountSettings;

const AccountSettingsWrapper = styled.div``;
