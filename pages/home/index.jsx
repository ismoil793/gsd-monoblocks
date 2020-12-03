import HeaderTopContainer from '../../components/Layout/Header/HeaderTop';
import CustomBreadCrumb from '../../components/Layout/Header/BreadCrumb';
import Footer from '../../components/Layout/Footer/index';
import CustomNavbar from '../../components/Layout/Navbar/index';
import { Select, Pagination } from 'antd';
import {
  /* Container, */
  Col,
  Row
} from 'react-bootstrap';
import CustomCard from '../../components/Layout/Cards/Card';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const onChange = (value) => {
  console.log('values: ', value);
}

const Home = () => {
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
              <a href=" info@gsdas.eu"> info@gsdas.eu</a>
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
        <div style={{ padding:'15px 0' }}>
          <CustomNavbar />
        </div>
      <CustomBreadCrumb />
      <div className="Container">
        <Row>
          <Col>
            <h2 style={{ fontWeight: 900, marginTop: 20 }}>All-in-one constructor</h2>
            <p style={{
              margin: '0 0 15px 0',
              color: '#7a7a7a',
              fontWeight: 500,
              marginTop: 20,
            }}>Configure the candy bar for any task that your business requires.</p>
            <h4 style={{ color: '#383838', fontWeight: 600 }}>Select model for configuration:</h4>
          </Col>
        </Row>
      </div>
      <div className="Container">
        <Row>
          <Col span={8}>
            <CustomCard />
          </Col>
          <Col span={8}>
            <CustomCard />
          </Col>
          <Col span={8}>
            <CustomCard />
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <CustomCard />
          </Col>
          <Col span={8}>
            <CustomCard />
          </Col>
          <Col span={8}>
            <CustomCard />
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <CustomCard />
          </Col>
          <Col span={8}>
            <CustomCard />
          </Col>
          <Col span={8}>
            <CustomCard />
          </Col>
        </Row>
        <Pagination
          pageSize={9}
          onChange={onChange}
          total={50}
          style={{
            textAlign: 'center',
            marginTop: 30,
            marginBottom: 30
          }}
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;

