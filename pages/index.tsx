// import styled from 'styled-components';
import { Hero } from '@/components/showcaseComponents';
import Head from 'next/head';

export default function Showcase() {
  return (
    <main>
      <Head>{<title>ciuchy - dress for less</title>}</Head>
      <Hero />
      {/* <LogInSignUpWindow /> */}
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

// const Wrapper = styled.div`
/* background-color: red; */
/* max-width: var(--websiteWidth); */
/* margin: auto; */
// `;
