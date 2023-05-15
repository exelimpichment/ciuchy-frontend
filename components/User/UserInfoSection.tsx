import { RootState } from '@/redux/store';
import { Rating } from '@mui/material';
import Image from 'next/image';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsGeoAlt } from 'react-icons/bs';
import { SiFacebook } from 'react-icons/si';
import { TfiTwitterAlt } from 'react-icons/tfi';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import profileUrl from '../../public/user.png';
import EditProfileButton from './EditProfileButton';

function UserInfoSection() {
  const { name } = useSelector((state: RootState) => state.authentication.user);

  const rating = 4;

  return (
    <UserInfoWrapper>
      <div className="user-info__image-container">
        <Image
          src={profileUrl}
          width={192}
          height={192}
          alt="Profile picture"
        />
      </div>
      <div className="user-info__text-container">
        <div className="user-info__inner">
          <div className="user-info__name">
            <h1>{name}</h1>
            <div className="user-info__rating">
              {rating ? (
                <Rating
                  name="half-rating-read"
                  defaultValue={rating}
                  precision={0.5}
                  readOnly
                />
              ) : (
                <p
                  style={{ fontSize: '1rem', color: 'rgba(77, 77, 77, 0.602)' }}
                  className="user-info__rating-paragraph"
                >
                  No reviews yet
                </p>
              )}
            </div>
          </div>
          <div className="user-info__button-container">
            <EditProfileButton />
          </div>
        </div>

        <div className="user-info__about-container">
          {/* ===== */}
          <div className="user-info__geo-container">
            <h2>About:</h2>
            <div className="user-info__geo">
              <span>
                <BsGeoAlt />
                unknown
              </span>
              <span>
                <AiOutlineClockCircle /> unknown
              </span>
            </div>
          </div>
          {/* ===== */}
          <div>
            <h2>Socials:</h2>
            <div className="user-info__socials">
              <span>
                <SiFacebook />
                unknown
              </span>
              <span>
                <TfiTwitterAlt /> unknown
              </span>
            </div>
          </div>
          {/* ===== */}
        </div>
      </div>
    </UserInfoWrapper>
  );
}

export default UserInfoSection;

const UserInfoWrapper = styled.div`
  margin-top: 2rem;
  min-height: 240px;
  display: flex;

  .user-info__image-container {
    min-width: 192px;
  }

  .user-info__text-container {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    flex-grow: 1;
    margin-left: 2rem;

    .user-info__inner {
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.5rem;
      min-height: 80px;

      .user-info__name {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100%;

        .user-info__rating {
          min-height: 30px;
        }
      }
    }

    .user-info__about-container {
      padding: 1rem;

      flex-grow: 1;
      display: flex;

      .user-info__geo-container {
        margin-right: 3rem;
      }
      span {
        display: flex;
        font-size: 1rem;
        margin-top: 0.2rem; /* align-items: end;      */
        /* margin-right: 1rem; */
        svg {
          font-size: 1.2rem;
          margin-right: 0.3rem;
        }
      }
      .user-info__geo,
      .user-info__socials {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
