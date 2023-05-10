// import styled from 'styled-components';
import Hero from '@/components/Showcase/Hero';
import { logout } from '@/utils/authenticator';
import Head from 'next/head';
import { useDispatch } from 'react-redux';

export default function Showcase() {
  const dispatch = useDispatch();
  return (
    <div>
      <Head>{<title>ciuchy - dress for less</title>}</Head>
      <Hero />
      <button type="button" onClick={() => logout({ dispatch })}>
        LOG OUT
      </button>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
