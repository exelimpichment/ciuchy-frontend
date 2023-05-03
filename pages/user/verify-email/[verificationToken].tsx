import { axiosInstance } from '@/axios/axiosRequestConfig';
import { setIsMember } from '@/redux/features/authentication/authenticationSlice';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const VerifyEmail = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [emailVerified, setEmailVerified] = useState<boolean>(false);
  const { verificationToken, email } = router.query;

  const verifiedText = (
    <VerifyEmailWrapper>
      <h3 className="emailWrapper__inner">Email Confirmed</h3>
      <p>redirecting to Log In page...</p>
    </VerifyEmailWrapper>
  );

  const notVerifiedText = (
    <VerifyEmailWrapper>
      <h3 className="emailWrapper__inner">Verifying email...</h3>
      <p>please wait</p>
    </VerifyEmailWrapper>
  );

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axiosInstance.post('/verify-email', {
          verificationToken,
          email,
        });
        toast.success(response?.data.msg);
        setEmailVerified(true);
        dispatch(setIsMember(true));
        setTimeout(() => {
          router.push('/authentication');
        }, 2000);
      } catch (error: any) {
        toast.error(error.response?.data.msg);
      }
    };
    if (verificationToken && email) verifyToken();
  }, [verificationToken, email, dispatch, router]);

  return (
    <VerifyEmailWrapper>
      {emailVerified ? verifiedText : notVerifiedText}
    </VerifyEmailWrapper>
  );
};

export default VerifyEmail;

const VerifyEmailWrapper = styled.div`
  max-width: 90%;
  margin: 42px auto;
  text-align: center;
  h3 {
    font-size: 2rem;
    margin-bottom: 1.3rem;
  }

  p {
    font-size: 1.1rem;
  }
`;
