import ContinueButton from '@/components/authenticationComponents/ContinueButton';
import FormRow from '@/components/authenticationComponents/FormRow';
import { useNavBarStore } from '@/store/store';
import NoSSRComponent from '@/utils/NoSSRComponent';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

// submit logic
const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
};
// vars for rendering logic
const logIn = <h3>Log in</h3>;
const signUp = <h3>Sign up</h3>;

function Auth() {
  const isMember = useNavBarStore((state) => state.isMember);

  // from states (lifting states up)
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <AuthWrapper>
      <div className="form-container">
        <AnimatePresence>
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="form"
            onSubmit={onSubmit}
          >
            <NoSSRComponent>{isMember ? logIn : signUp}</NoSSRComponent>
            <NoSSRComponent>
              {' '}
              {!isMember && (
                <FormRow
                  inputFor={username}
                  setFormInformation={setUsername}
                  inputPlaceholder="Username"
                  inputType="text"
                />
              )}
            </NoSSRComponent>
            <FormRow
              inputFor={email}
              setFormInformation={setEmail}
              inputPlaceholder="Email"
              inputType="email"
            />
            <FormRow
              inputFor={password}
              setFormInformation={setPassword}
              inputPlaceholder="Password"
              inputType="password"
            />
            <ContinueButton />
            <p className="link">Forgotten your password?</p>
          </motion.form>
        </AnimatePresence>
      </div>
    </AuthWrapper>
  );
}

export default Auth;

const AuthWrapper = styled(motion.div)`
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
        margin-bottom: 1.3rem;
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
