import ContinueButton from '@/components/authenticationComponents/ContinueButton';
import FormRow from '@/components/authenticationComponents/FormRow';
import { useNavBarStore } from '@/store/store';
import NoSSRComponent from '@/utils/NoSSRComponent';
import styled from 'styled-components';

// import { RxCross2 } from 'react-icons/rx';

// const isMember = true;

const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
};

const logIn = <h3>Log in</h3>;
const signUp = <h3>Sign up</h3>;

function Auth() {
  const isMember = useNavBarStore((state) => state.isMember);

  return (
    <AuthWrapper>
      <div className="form-container">
        <form className="form" onSubmit={onSubmit}>
          <NoSSRComponent>{isMember ? logIn : signUp}</NoSSRComponent>
          <FormRow />
          <FormRow />
          <FormRow />
          <ContinueButton />
          <p className="link">Forgotten your password?</p>
        </form>
      </div>
    </AuthWrapper>
  );
}

export default Auth;

const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  .form-container {
    padding: 2rem 1rem 2rem 1rem;
    margin-top: 3rem;
    width: 375px;
    display: flex;
    justify-content: center;
    border: 1px #d6d6d6 solid;
    border-radius: 4px;
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      h3 {
        font-size: 2rem;
        margin-bottom: 2rem;
      }
      p {
        cursor: pointer;
        font-size: 1rem;
        color: #c45f55;
        text-decoration: underline;
        &:hover {
          color: #b0564d;
        }
      }
    }
  }
`;
