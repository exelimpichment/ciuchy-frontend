import { Inter } from '@next/font/google';
import { ReactElement } from 'react';
import NavigationBar from '../layout/NavigationBar';
import SearchBar from '../layout/SearchBar';
const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <nav className={inter.className}>
        <SearchBar />
        <NavigationBar />
      </nav>
      <>{children}</>
    </>
  );
}
