import ContinueButton from '@/components/authenticationComponents/ContinueButton';
import FormRow from '@/components/authenticationComponents/FormRow';
import { useNavBarStore } from '@/store/store';
import NoSSRComponent from '@/utils/NoSSRComponent';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
};

const logIn = <h3>Log in</h3>;
const signUp = <h3>Sign up</h3>;

export interface IInitialValues {
  username: string;
  email: string;
  password: string;
}

function Auth() {
  const isMember = useNavBarStore((state) => state.isMember);

  const initialValues: IInitialValues = {
    username: '',
    email: '',
    password: '',
  };

  const [values, setValues] = useState<IInitialValues>(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name, event.target.value);

    const name = event.target.name;
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };

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
                  value={values.username}
                  handleChange={handleChange}
                  inputPlaceholder="Username"
                  inputType="text"
                />
              )}
            </NoSSRComponent>
            <FormRow
              value={values.email}
              handleChange={handleChange}
              inputPlaceholder="Email"
              inputType="email"
            />
            <FormRow
              value={values.password}
              handleChange={handleChange}
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
