import { Inter } from '@next/font/google';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import NavigationBar from './NavigationBar';
import SearchBar from './SearchBar';
const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: ReactElement }) {
  const router = useRouter();

  return (
    <>
      {router.pathname !== '/_error' && (
        <nav className={inter.className}>
          <SearchBar />
          <NavigationBar />
        </nav>
      )}

      <>{children}</>
    </>
  );
}
