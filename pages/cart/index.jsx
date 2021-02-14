import CartLayout from '../../components/Cart/index';
import HeaderTopContainer from '../../components/Layout/Header/HeaderTop';
import Footer from '../../components/Layout/Footer';
import CustomNavbar from '../../components/Layout/Navbar';
import MainLayout from "../../components/Layout";

const Cart = () => {
   return (
       <MainLayout>
          <CartLayout/>
       </MainLayout>
   );
};

export default Cart;