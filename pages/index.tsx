// import styled from 'styled-components';
import Hero from '@/components/Showcase/Hero';
import Head from 'next/head';

export default function Showcase() {
  return (
    <div>
      <Head>{<title>ciuchy - dress for less</title>}</Head>
      <Hero />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
