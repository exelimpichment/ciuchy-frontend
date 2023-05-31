import Hero from '@/components/Showcase/Hero';
import { IItem } from '@/types/user.types';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

interface ShowcaseProps {
  suggestions: {
    bestPrice: IItem[];
    forHim: IItem[];
    latestItems: IItem[];
  };
}

const Showcase: NextPage<ShowcaseProps> = ({ suggestions }) => {
  console.log(suggestions);

  return (
    <div>
      <Head>
        <title>ciuchy - dress for less</title>
      </Head>
      <Hero />
    </div>
  );
};

export const getStaticProps: GetStaticProps<ShowcaseProps> = async () => {
  // Call an external API endpoint to get suggestions.
  const res = await fetch('http://localhost:5001/api/v1/item/getSuggestions');
  const suggestions: ShowcaseProps['suggestions'] = await res.json();

  // By returning { props: { suggestions } }, the Showcase component
  // will receive `suggestions` as a prop at build time
  return {
    props: {
      suggestions,
    },
  };
};

export default Showcase;
