import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/action/index';

const Verification = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  

  useEffect(() => {
    const { id, ...kamrKotGey } = router.query;
    if(id){
      dispatch(actions.verify(id, kamrKotGey, router.push))
    }
   
  }, [router])

  return <h1>Reloading...</h1>;
}

export default Verification;