import { axiosInstance } from '@/axios/axiosRequestConfig';
import FormRow from '@/components/Common/FormRow';
import MainButton from '@/components/Common/MainButton';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

function ResetPassword() {
  const router = useRouter();
  const { verificationToken, email } = router.query;

  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClick = async () => {
    setIsLoading(true);

    try {
      let response = await axiosInstance.post('auth/reset-password', {
        password,
        verificationToken,
        email,
      });
      console.log(response);
      setIsLoading(false);
      toast.success(response?.data.msg);
      setPassword('');
      setTimeout(() => {
        router.push('/');
      }, 1000);
    } catch (error: any) {
      setIsLoading(false);
      toast.error(error.response?.data.msg);
    }
  };
  // + please, dont forget to set proper type for error everywhere

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
            <h3>Reset Password</h3>
            <FormRow
              value={password}
              handleChange={handleChange}
              inputPlaceholder="Password"
              inputType="password"
            />
            <MainButton
              isLoading={isLoading}
              text={'Update password'}
              onClick={onClick}
            />
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
    }
  }
`;
