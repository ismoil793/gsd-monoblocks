import PasswordResetLayout from '../../components/Layout/PasswordReset';
import HeaderTopContainer from '../../components/Layout/Header/HeaderTop';
import Footer from '../../components/Layout/Footer';
import CustomNavbar from '../../components/Layout/Navbar';

const PasswordReset = () => {
   return (
    <>
      <HeaderTopContainer />
      <CustomNavbar />
      <br/>
      <br/>
      <div className="Container">
        <div
          style={{
            minHeight: '40vh'
          }}
        >
          <PasswordResetLayout />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PasswordReset;