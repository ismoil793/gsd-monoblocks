import HeaderTopContainer from '../../components/Layout/Header/HeaderTop';
import CustomNavbar from '../../components/Layout/Navbar';
import CustomBreadCrumb from '../../components/Layout/Header/BreadCrumb';
import Footer from '../../components/Layout/Footer';
import CustomSlider from '../../components/Layout/Slider';
import { Select } from 'antd';
const { Option } = Select;

const Monoblock = () => {
  return (
    <>
      <HeaderTopContainer>
        <div>
          <ul className="Call-msg">
            <li className="call-msg-item">
              <i className="fas fa-phone-alt"></i>
              <a href="(+371) 67885251">(+371) 67885251</a>
            </li>
            <li className="call-msg-item" style={{ marginLeft: 10 }}>
              <i className="fas fa-envelope"></i>
              <a href="info@gsdas.eu"> info@gsdas.eu</a>
            </li>
          </ul>
        </div>
        <div>
          <Select defaultValue="Russian" style={{ width: 120 }}>
            <Option value="ru">Russian</Option>
            <Option value="uz">Uzbek</Option>
            <Option value="la">Latvia</Option>
          </Select>
        </div>
      </HeaderTopContainer>
      <div style={{ padding: '15px 0' }}>
        <CustomNavbar />
      </div>
      <CustomBreadCrumb />
      <div className="Container">
        <CustomSlider />
      </div>
      <Footer />
    </>
  )
}

export default Monoblock;