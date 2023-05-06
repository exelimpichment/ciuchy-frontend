import { axiosInstance } from '@/axios/axiosRequestConfig';
import FormRow from '@/components/Common/FormRow';
import MainButton from '@/components/Common/MainButton';
import { setIsMember } from '@/redux/features/authentication/authenticationSlice';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import styled from 'styled-components';

function ResetPassword() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onClick = async () => {
    setIsLoading(true);

    try {
      let response = await axiosInstance.post('auth/forgot-password', {
        email,
      });
      setIsLoading(false);
      toast.success(response?.data.msg);
      setEmail('');
      dispatch(setIsMember(true));
      setTimeout(() => {
        router.push('/');
      }, 1000);
    } catch (error: any) {
      setIsLoading(false);
      toast.error(error.response?.data.msg);
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
          >
            <h3>Forgot Password</h3>
            <FormRow
              value={email}
              handleChange={handleChange}
              inputPlaceholder="Email"
              inputType="email"
            />
            <MainButton
              isLoading={isLoading}
              text={'Reset password'}
              onClick={onClick}
            />
            <p>
              Already registered?{' '}
              <button
                type="button"
                onClick={() => router.push('/authentication')}
              >
                Log In
              </button>
            </p>
          </motion.form>
        </AnimatePresence>
      </div>
    </AuthWrapper>
  );
}

export default ResetPassword;

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
        font-size: 1rem;

        button {
          cursor: pointer;
          color: #c45f55;
          text-decoration: underline;
          &:hover {
            color: #b0564d;
          }
        }
      }
    }
  }
`;
