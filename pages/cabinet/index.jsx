import CabinetLayout from '../../components/Layout/Cabinet';
import HeaderTopContainer from '../../components/Layout/Header/HeaderTop';
import CustomBreadCrumb from '../../components/Layout/Header/BreadCrumb';
import Footer from '../../components/Layout/Footer';

const Cabinet = () => {
  return (
    <>
      <HeaderTopContainer />
      <CustomBreadCrumb />
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
