import CheckoutInfo from '../../components/Layout/Checkout';
import HeaderTopContainer from '../../components/Layout/Header/HeaderTop';
import CustomBreadCrumb from '../../components/Layout/Header/BreadCrumb';
import Footer from '../../components/Layout/Footer';

const Checkout = () => {
  return (
    <>
      <HeaderTopContainer />
      <CustomBreadCrumb />
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