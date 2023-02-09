import { ReactElement } from 'react';
import NavigationBar from '../layout/NavigationBar';
import SearchBar from '../layout/SearchBar';

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <SearchBar />
      <NavigationBar />
      <>{children}</>
    </>
  );
}
