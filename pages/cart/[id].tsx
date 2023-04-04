import { useRouter } from 'next/router';

export default function Cart() {
  const router = useRouter();
  const { id } = router.query;
  return <p>Profile: {id}</p>;
}
