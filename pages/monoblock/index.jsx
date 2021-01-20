import HeaderTopContainer from '../../components/Layout/Header/HeaderTop';
import CustomNavbar from '../../components/Layout/Navbar';
import CustomBreadCrumb from '../../components/Layout/Header/BreadCrumb';
import Footer from '../../components/Layout/Footer';
import CustomSlider from '../../components/Layout/Slider';
import BodyNavs from '../../components/Layout/Navs';

const Monoblock = () => {
  return (
    <>
      <HeaderTopContainer />
      {/* <div style={{ padding: '15px 0' }}>
        <CustomNavbar />
      </div> */}
      <CustomBreadCrumb />
      <div className="Container">
        <CustomSlider />
        <BodyNavs />
      </div>
      <Footer />
    </>
  )
}

export default Monoblock;