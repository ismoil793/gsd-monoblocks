import CabinetLayout from '../../components/Layout/Cabinet';
import MainLayout from "../../components/Layout";
import {useEffect} from "react";
import {userInfo} from "../../redux/action/user";
import {useDispatch, useSelector} from "react-redux";
import Cookies from "universal-cookie";

const Cabinet = () => {
   const dispatch = useDispatch();
   const user = useSelector(state => state.user);
   const cookies = new Cookies();

   useEffect(() => {
      if (!user.info.id && cookies.get('access_token')) {
         dispatch(userInfo())
      }
   }, []);

   return (
       <MainLayout>
          <CabinetLayout/>
       </MainLayout>
   );
};

export default Cabinet;
