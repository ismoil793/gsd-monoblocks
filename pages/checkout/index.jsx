import CheckoutInfo from '../../components/Layout/Checkout';
import HeaderTopContainer from '../../components/Layout/Header/HeaderTop';
import Footer from '../../components/Layout/Footer';
import CustomNavbar from '../../components/Layout/Navbar';

const Checkout = () => {
  return (
    <>
      <HeaderTopContainer />
      <CustomNavbar />
      <br/>
      <br/>
      <div className="Container">
        <CheckoutInfo />
      </div>
      <br/>
      <Footer />
    </>
  );
};

export default Checkout;