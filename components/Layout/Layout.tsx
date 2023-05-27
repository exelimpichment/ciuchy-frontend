import { Inter } from '@next/font/google';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showUser } from '../../utils/authenticator';
import Footer from './Footer';
import NavigationBar from './NavigationBar';
import SearchBar from './SearchBar';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: ReactElement }) {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    showUser({ dispatch });
  }, [dispatch]);

  return (
    <>
      <section className="hight-wrapper">
        {router.pathname !== '/_error' && (
          <nav
            className={inter.className}
            style={{ position: 'sticky', top: 0, zIndex: 10 }}
          >
            <SearchBar />
            <NavigationBar />
            <ToastContainer position="bottom-right" />
          </nav>
        )}
        <>{children}</>
        <Footer />
      </section>
    </>
  );
}
