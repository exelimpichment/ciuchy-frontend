import Hero from '@/components/Showcase/Hero';
import { ShowcaseProps } from '@/types/newItem.types';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

const Showcase: NextPage<ShowcaseProps> = ({ suggestions }) => {
  return (
    <div style={{ backgroundColor: '#f2f1f2', paddingBottom: '4rem' }}>
      <Head>
        <title>ciuchy - dress for less</title>
      </Head>
      <Hero suggestions={suggestions} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<ShowcaseProps> = async () => {
  try {
    const res = await fetch('http://localhost:5001/api/v1/item/getSuggestions');
    if (!res.ok) {
      throw new Error('Failed to fetch suggestions');
    }
    const suggestions: ShowcaseProps['suggestions'] = await res.json();

    return {
      props: {
        suggestions,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    return {
      props: {
        suggestions: {
          bestPrice: [],
          forHim: [],
          latestItems: [],
        },
      },
      revalidate: 60,
    };
  }
};

export default Showcase;
