import CheckoutInfo from '../../components/Layout/Checkout';
import MainLayout from "../../components/Layout";
import Cart from "../../components/Cart";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {userInfo} from "../../redux/action/user";

const Checkout = () => {

   const dispatch = useDispatch();
   const user = useSelector(state => state.user);

   useEffect(() => {
      console.log(user)
      if (!user.info.id) {
         dispatch(userInfo())
      }
   }, []);

   return (
       <MainLayout>
          <Cart checkout/>
          <CheckoutInfo/>
       </MainLayout>
   );
};

export default Checkout;