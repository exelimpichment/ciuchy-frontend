import { useRouter } from 'next/router';

export default function Profile() {
  const router = useRouter();
  console.log(router);
  const { id } = router.query;
  return <p>Profile: {id}</p>;
}
