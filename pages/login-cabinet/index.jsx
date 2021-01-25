import LoginRegister from "../../components/Layout/Login";
import HeaderTopContainer from '../../components/Layout/Header/HeaderTop';
import Footer from '../../components/Layout/Footer';
import CustomNavbar from '../../components/Layout/Navbar';

const LoginCabinet = () => {
  return (
    <>
      <HeaderTopContainer />
      <CustomNavbar />
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