import LoginRegister from "../../components/Layout/LoginRegister";
import HeaderTopContainer from '../../components/Layout/Header/HeaderTop';
import CustomBreadCrumb from '../../components/Layout/Header/BreadCrumb';
import Footer from '../../components/Layout/Footer';

const LoginCabinet = () => {
  return (
    <>
      <HeaderTopContainer />
      <CustomBreadCrumb />
      <br/>
      <br/>
      <div className="Container">
        <LoginRegister />
      </div>
      <br/>
      <br/>
      <Footer />
    </>
  );
};

export default LoginCabinet;