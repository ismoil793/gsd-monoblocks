import Home from './home/index';
import axios from 'axios';

export default Home;

export async function getStaticProps(){
  const monoblocks = await axios.get('http://10.2.1.192:8000/api/monoblocks');
  return {
    props: {
      params: monoblocks.data
    }
  }
}