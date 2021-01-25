import CartLayout from '../../components/Cart/index';
import HeaderTopContainer from '../../components/Layout/Header/HeaderTop';
import Footer from '../../components/Layout/Footer';
import CustomNavbar from '../../components/Layout/Navbar';

const Cart = () => {
  return (
    <>
      <HeaderTopContainer />
      <CustomNavbar />
      <br/>
      <br/>
      <div className="Container">
        <CartLayout />
      </div>
      <Footer />
    </>
  );
};

export default Cart;