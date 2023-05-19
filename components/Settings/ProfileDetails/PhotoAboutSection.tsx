import Image from 'next/image';
import styled from 'styled-components';
import profileUrl from '../../../public/user.png';
import ChoosePhotoButton from './ChoosePhotoButton';

function PhotoAboutSection() {
  return (
    <PhotoAboutSectionWrapper>
      <div
        className="photos-about__your-photo"
        style={{ borderBottom: '#f3f3f3  1px solid' }}
      >
        <p className="photos-about__text">Your photo</p>
        <div className="photos-about__interactive-panel">
          <Image
            src={profileUrl}
            width={64}
            height={64}
            alt="Picture of the author"
          />
          <ChoosePhotoButton />
        </div>
      </div>
      <div className="photos-about__your-text">
        <p className="photos-about__text">About you</p>
        <label htmlFor="aboutYou"></label>
        <textarea
          placeholder="Tell us more about yourself and your style"
          rows={4}
          name="description"
          autoComplete="off"
          minLength={10}
          maxLength={200}
        />
      </div>
    </PhotoAboutSectionWrapper>
  );
}

export default PhotoAboutSection;

const PhotoAboutSectionWrapper = styled.div`
  margin-top: 2rem;

  .photos-about__your-text,
  .photos-about__your-photo {
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;

    textarea {
      all: unset;
      border-bottom: #9e9e9e 1px solid;
      min-width: 50%;
      &::placeholder {
        font-size: 1.1rem;
        color: #acacac;
      }

      &:focus {
        border-bottom: 1px #c45f55 solid;
      }
    }
  }

  background-color: #fff;
  .photos-about__interactive-panel {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
