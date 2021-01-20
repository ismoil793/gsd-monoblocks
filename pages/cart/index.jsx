import CartLayout from '../../components/Cart/index';
import HeaderTopContainer from '../../components/Layout/Header/HeaderTop';
import CustomBreadCrumb from '../../components/Layout/Header/BreadCrumb';
import Footer from '../../components/Layout/Footer';

const Cart = () => {
  return (
    <>
      <HeaderTopContainer />
      <CustomBreadCrumb />
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