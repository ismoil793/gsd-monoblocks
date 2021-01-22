import PasswordResetLayout from '../../components/Layout/PasswordReset';
import HeaderTopContainer from '../../components/Layout/Header/HeaderTop';
import CustomBreadCrumb from '../../components/Layout/Header/BreadCrumb';
import Footer from '../../components/Layout/Footer';

const PasswordReset = () => {
   return (
    <>
      <HeaderTopContainer />
      <CustomBreadCrumb />
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