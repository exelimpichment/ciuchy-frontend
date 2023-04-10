import ContinueButton from '@/components/Authentication/ContinueButton';
import FormRow from '@/components/Authentication/FormRow';
// import { useNavBarStore } from '@/store/store';
import NoSSRComponent from '@/utils/NoSSRComponent';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import type { RootState } from '../../redux/store';

const logIn = <h3>Log in</h3>;
const signUp = <h3>Sign up</h3>;

export interface IInitialValues {
  username: string;
  email: string;
  password: string;
}

function Auth() {
  const isMember = useSelector(
    (state: RootState) => state.authentication.isMember
  );

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

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { username, email, password } = values;
    const userRegistrationObject = { name: username, email, password };

    try {
      // const { data } = await axios.post(
      //   `http://localhost:5001/api/v1/auth/register`,
      //   userRegistrationObject
      // );
      console.log(userRegistrationObject);

      const res = await fetch(
        `https://first-node-js-express-project.onrender.com/api/v1/auth/register`,
        {
          body: JSON.stringify(userRegistrationObject),
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        }
      );
      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthWrapper>
      <div className="authentication__inner">
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

const AuthWrapper = styled(motion.section)`
  display: flex;
  justify-content: center;
  .authentication__inner {
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
