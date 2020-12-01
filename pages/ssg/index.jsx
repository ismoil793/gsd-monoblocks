import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {wrapper} from '../../redux/store';

export const getStaticProps = wrapper.getStaticProps(
    async ({store, preview}) => {
        const test = await axios.get('https://api.spacexdata.com/v3/dragons');
        await store.dispatch({
          type: 'getDragons',
          one: test.data
        });
    }
);


const Dragons = () => {
  const test2 = useSelector((state) => state.data);
  return <h1>Hello world</h1>
}

export default Dragons;