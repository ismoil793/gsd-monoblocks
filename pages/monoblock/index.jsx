import HeaderTopContainer from '../../components/Layout/Header/HeaderTop';
import Footer from '../../components/Layout/Footer';
import CustomSlider from '../../components/Layout/Slider';
import BodyNavs from '../../components/Layout/Navs';
import CustomNavbar from '../../components/Layout/Navbar';

const Monoblock = () => {
  return (
    <>
      <HeaderTopContainer />
      <CustomNavbar />
      <div className="Container">
        <CustomSlider />
        <BodyNavs />
      </div>
      <Footer />
    </>
  )
}

export default Monoblock;