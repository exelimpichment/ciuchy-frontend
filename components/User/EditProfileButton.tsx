import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';
import { FiEdit2 } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function EditProfileButton() {
  const router = useRouter();
  const { id } = useSelector((state: RootState) => state.authentication?.user);
  const handleEditProfileButton = () => {
    router.push(`/user/${id}/settings`);
  };

  return (
    <EditProfileButtonWrapper
      type="button"
      className="edit-profile__button"
      onClick={handleEditProfileButton}
    >
      <span className="svg-container">
        <FiEdit2 />
      </span>
      <span>Edit profile</span>
    </EditProfileButtonWrapper>
  );
}

export default EditProfileButton;

const EditProfileButtonWrapper = styled.button`
  background-color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  border: 1px solid #c45f55;
  border-radius: 4px;
  color: #c45f55;
  font-weight: 500;
  min-height: 42px;
  min-width: 130px;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .svg-container {
    font-size: 1.5rem;
  }

  span {
    margin-right: 4px;
    display: flex;
    align-items: center;
  }

  &:hover {
    background-color: #e6e6e6;
    transition: all ease 0.5s;
  }

  &:disabled {
    background-color: #f0f0f0;
  }
`;
