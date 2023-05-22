import { useState } from 'react';
import styled from 'styled-components';
import AccountSettingsSaveButton from './AccountSettings/AccountSettingsSaveButton';
import BirthSection from './AccountSettings/BirthSection';
import ChangePassword from './AccountSettings/ChangePassword';
import DeleteAccount from './AccountSettings/DeleteAccount';
import DeleteAccountFallDownMenu from './AccountSettings/DeleteAccountFalldownMenu';
import EmailPhoneSection from './AccountSettings/EmailPhoneSection';
import GenderSection from './AccountSettings/GenderSection';
import HolidayMode from './AccountSettings/HolidayMode';
import NameSection from './AccountSettings/NameSection';
import Socials from './AccountSettings/Socials';

function AccountSettings() {
  const [deleteSectionOpen, setDeleteSectionOpen] = useState<boolean>(false);
  const [isConsentOn, setIsConsentOn] = useState<boolean>(false);

  const handleDeleteChevronClick = () => {
    setDeleteSectionOpen(!deleteSectionOpen);
  };

  return (
    <AccountSettingsWrapper>
      <EmailPhoneSection />
      <NameSection />
      <GenderSection />
      <BirthSection />
      <HolidayMode />
      <Socials />
      <ChangePassword />
      <DeleteAccount
        handleDeleteChevronClick={handleDeleteChevronClick}
        deleteSectionOpen={deleteSectionOpen}
      />
      {deleteSectionOpen && (
        <DeleteAccountFallDownMenu
          isConsentOn={isConsentOn}
          setIsConsentOn={setIsConsentOn}
        />
      )}
      <AccountSettingsSaveButton
        deleteSectionOpen={deleteSectionOpen}
        isConsentOn={isConsentOn}
      />
    </AccountSettingsWrapper>
  );
}

export default AccountSettings;

const AccountSettingsWrapper = styled.div``;
