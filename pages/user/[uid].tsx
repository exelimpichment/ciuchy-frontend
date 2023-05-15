import Reviews from '@/components/User/Reviews';
import UserInfoSection from '@/components/User/UserInfoSection';
import Wardrobe from '@/components/User/Wardrobe';
import WardrobeReviewTogglePanel from '@/components/User/WardrobeReviewTogglePanel';
import { useState } from 'react';
import styled from 'styled-components';

function UserProfile() {
  const [wardrobeReviewToggle, setWardrobeReviewToggle] = useState<
    'Wardrobe' | 'Reviews'
  >('Wardrobe');

  const handleToggleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    const target = event.target as HTMLLIElement;
    if (target.textContent) {
      setWardrobeReviewToggle(target.textContent as 'Wardrobe' | 'Reviews');
    }
  };

  return (
    <UserProfileWrapper>
      <div className="container">
        <UserInfoSection />
        <WardrobeReviewTogglePanel
          handleToggleClick={handleToggleClick}
          wardrobeReviewToggle={wardrobeReviewToggle}
        />
        {wardrobeReviewToggle === 'Wardrobe' ? <Wardrobe /> : <Reviews />}
      </div>
    </UserProfileWrapper>
  );
}

export default UserProfile;

const UserProfileWrapper = styled.div``;
