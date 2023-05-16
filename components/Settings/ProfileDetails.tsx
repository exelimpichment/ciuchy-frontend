import styled from 'styled-components';
import LanguageSection from './ProfileDetails/LanguageSection';
import LocationSection from './ProfileDetails/LocationSection';
import PhotoAboutSection from './ProfileDetails/PhotoAboutSection';

function ProfileDetails() {
  return (
    <ProfileDetailsWrapper>
      <PhotoAboutSection />
      <LocationSection />
      <LanguageSection />
    </ProfileDetailsWrapper>
  );
}

export default ProfileDetails;

const ProfileDetailsWrapper = styled.div``;
