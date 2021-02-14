import Home from './home/index';

export async function getStaticProps(){
   const response = await fetch('https://apigsd.rrpo.uz/api/monoblocks?page=1&per_page=6', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const monoblocks = await response.json();
  return {
    props: {
      monoblocks: monoblocks ?? [],
    }
  }
}

export default Home;

