import styled from 'styled-components';
import LanguageSection from './ProfileDetails/LanguageSection';
import LocationSection from './ProfileDetails/LocationSection';
import PhotoAboutSection from './ProfileDetails/PhotoAboutSection';
import ProfileDetailsButton from './ProfileDetails/ProfileDetailsButton';
import SwitchBoard from './ProfileDetails/SwitchBorard/SwitchBoard';

function ProfileDetails() {
  return (
    <ProfileDetailsWrapper>
      <PhotoAboutSection />
      <LocationSection />
      <SwitchBoard />
      <LanguageSection />
      <ProfileDetailsButton />
    </ProfileDetailsWrapper>
  );
}

export default ProfileDetails;

const ProfileDetailsWrapper = styled.div``;
