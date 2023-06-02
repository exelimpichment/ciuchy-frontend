import Reviews from '@/components/User/Reviews';
import UserInfoSection from '@/components/User/UserInfoSection';
import Wardrobe from '@/components/User/Wardrobe';
import WardrobeReviewTogglePanel from '@/components/User/WardrobeReviewTogglePanel';
import { IServerSideProps, IUser } from '@/types/user.types';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useState } from 'react';
import styled from 'styled-components';

function UserProfile(data: IUser) {
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
        <UserInfoSection data={data} />
        <WardrobeReviewTogglePanel
          handleToggleClick={handleToggleClick}
          wardrobeReviewToggle={wardrobeReviewToggle}
        />
        {wardrobeReviewToggle === 'Wardrobe' ? (
          <Wardrobe data={data} />
        ) : (
          <Reviews />
        )}
      </div>
    </UserProfileWrapper>
  );
}

export default UserProfile;

export const getServerSideProps: GetServerSideProps<IServerSideProps> = async ({
  params,
}) => {
  const { uid } = params as ParsedUrlQuery;

  const response = await fetch(`http://localhost:5001/api/v1/user/${uid}`);
  const data = await response.json();

  return { props: data };
};

const UserProfileWrapper = styled.section``;
