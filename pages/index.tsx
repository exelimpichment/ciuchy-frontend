// import styled from 'styled-components';
import Hero from '@/components/Showcase/Hero';
import Head from 'next/head';

export default function Showcase() {
  return (
    <main>
      <Head>{<title>ciuchy - dress for less</title>}</Head>
      <Hero />
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
