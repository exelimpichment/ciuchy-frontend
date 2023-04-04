import Layout from '@/components/Layout/Layout';
import '@/styles/globals.css';
import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </Provider>
  );
}
