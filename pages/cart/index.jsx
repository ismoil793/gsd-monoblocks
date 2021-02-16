import CartLayout from '../../components/Cart/index';
import HeaderTopContainer from '../../components/Layout/Header/HeaderTop';
import Footer from '../../components/Layout/Footer';
import CustomNavbar from '../../components/Layout/Navbar';
import MainLayout from "../../components/Layout";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCart} from "../../redux/action/cart";

const Cart = () => {

   const dispatch = useDispatch();
   const cart = useSelector(state => state.cart);

   useEffect(() => {
      dispatch(getCart())
   }, []);

   return (
       <MainLayout>
          <CartLayout/>
       </MainLayout>
   );
};

export default Cart;