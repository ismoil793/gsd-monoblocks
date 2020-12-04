import { useEffect, useState } from 'react';
import HeaderTopContainer from '../../components/Layout/Header/HeaderTop';
import CustomBreadCrumb from '../../components/Layout/Header/BreadCrumb';
import Footer from '../../components/Layout/Footer/index';
import CustomNavbar from '../../components/Layout/Navbar/index';
import { Select, Pagination } from 'antd';
import {
  Col,
  Row
} from 'react-bootstrap';
import CustomCard from '../../components/Layout/Cards/Card';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/action/index';

const { Option } = Select;

const onChange = (value) => {
  console.log('values: ', value);
}

export async function getStaticProps(){
  const test = await axios.get('http://10.2.1.192:8000/api/monoblocks');
  return {
    props: {
      params: monoblocks.data
    }
  }
}

const Home = ({ params: {data} }) => {
  const [monoblocks, getMonoblocks] = useState(null);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(data) {
      dispatch(actions.isInitialDataLoaded(true))
      dispatch(actions.initialData(data));
      getMonoblocks(monoblocks);
    }
  }, [data])

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
        <div className="Cards-Wrapper">
          {[1,2,3,4,5,6,7,8,9].map((card) => <CustomCard key={card} />)}
        </div>
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

