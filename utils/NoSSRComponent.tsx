import dynamic from 'next/dynamic';

const NonSSRWrapper = ({ children }: { children: any }) => <>{children}</>;

const NoSSRComponent = dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default NoSSRComponent;
