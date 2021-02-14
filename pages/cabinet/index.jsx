import CabinetLayout from '../../components/Layout/Cabinet';
import HeaderTopContainer from '../../components/Layout/Header/HeaderTop';
import Footer from '../../components/Layout/Footer';
import CustomNavbar from '../../components/Layout/Navbar';
import MainLayout from "../../components/Layout";
import {useEffect} from "react";
import {userInfo} from "../../redux/action/user";
import {useDispatch, useSelector} from "react-redux";

const Cabinet = () => {
   const dispatch = useDispatch();
   const user = useSelector(state => state.user);

   useEffect(() => {
      if (!user.info.id) {
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
