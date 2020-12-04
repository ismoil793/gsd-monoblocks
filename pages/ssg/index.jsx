import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
/* 
export async function getStaticProps(context){
  const test = await axios.get('https://api.rrpo.uz/api/products');
  console.log('test: ', test);
  return {
    props: {
      params: test.data
    }
  }
}

 */
const Dragons = () => {
  const test2 = useSelector((state) => state);
  return <h1>Hello world</h1>
}

export default Dragons;