import CabinetLayout from '../../components/Layout/Cabinet';
import HeaderTopContainer from '../../components/Layout/Header/HeaderTop';
import Footer from '../../components/Layout/Footer';
import CustomNavbar from '../../components/Layout/Navbar';

const Cabinet = () => {
  return (
    <>
      <HeaderTopContainer />
      <CustomNavbar />
      <br/>
      <br/>
      <div className="Container">
        <CabinetLayout />
      </div>
      <br/>
      <Footer />
    </>  
  );
};

export default Cabinet;
