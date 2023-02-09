// import styled from 'styled-components';

export default function Showcase({ response, response2 }: any) {
  return (
    // <Wrapper>
    <>
      <h1>{response[1].userId}</h1>
      <h1>{response2[2].title}</h1>
    </>
    //  </Wrapper>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums');
  const response = await res.json();

  const res2 = await fetch('https://jsonplaceholder.typicode.com/posts');
  const response2 = await res2.json();

  return {
    props: { response, response2 }, // will be passed to the page component as props
  };
}

// const Wrapper = styled.div`
/* background-color: red; */
/* max-width: var(--websiteWidth); */
/* margin: auto; */
// `;
