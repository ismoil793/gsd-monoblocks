import Home from './home/index';
import axios from 'axios';

export default Home;

export async function getStaticProps(){
  try {
    const monoblocks = await axios.get('http://10.2.1.192:8000/api/monoblocks');
    const monoblocks = await axios.get('https://api.spacexdata.com/v3/dragons');

    return {
      props: {
        params: monoblocks.data 
      }
    }
  } catch (error) {
    console.log('erro: ', error);
  }
  return {
    props: {
      params: null
    }
  }
}