import { useEffect, useState } from 'react';
import HeaderTopContainer from '../../components/Layout/Header/HeaderTop';
import Footer from '../../components/Layout/Footer/index';
import CustomNavbar from '../../components/Layout/Navbar';
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
/* 
export async function getStaticProps(){
  const monoblocks = await axios.get('https://api.spacexdata.com/v3/dragons');
  return {
    props: {
      params: monoblocks ? monoblocks.data : null
    }
  }
} */

const Home = ({ params }) => {
  let pic1 = 'static/img/AvtechProG70All-in-OnePC.jpg'
  const [monoblocks, getMonoblocks] = useState(null);
  const dispatch = useDispatch();
  const [images, getImages] = useState([
    {title: 'AVTECH PRO B20 All-in-One PC', url: '/static/img/AvtechProB20All-in-OnePC.jpg'},
    {title: 'AVTECH PRO G70 All-in-One PC', url: '/static/img/AvtechProG70All-in-OnePC.jpg'},
    {title: 'AVTECH PRO G700 2K All-in-One PC', url: '/static/img/AvtechProG7002KAll-in-OnePC.jpg'},
    {title: 'AVTECH PRO G700 (144 HZ) FHD All-in-One PC', url: '/static/img/AvtechProG700(144 HZ)FhdAll-in-OnePC.jpg'},
    {title: 'AVTECH PRO V400 All-in-One PC', url: '/static/img/AvtechProV400All-in-OnePC.jpg'},
    {title: 'AVTECH X5 All-in-One PC', url: '/static/img/AvtechX5All-in-OnePC.jpg'},
  ]);
  
  useEffect(() => {
    if(params) {
      /* dispatch(actions.isInitialDataLoaded(true))
      dispatch(actions.initialData(params.data)); */
      getMonoblocks(monoblocks);
    }
  }, [params])

  return (
    <>
      <HeaderTopContainer/>
      <CustomNavbar />
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

         {/*  {[
            {title: 'AVTECH PRO B20 All-in-One PC', url: pic1},
            {title: 'AVTECH PRO G70 All-in-One PC', url: pic2},
            {title: 'AVTECH PRO G700 2K All-in-One PC', url: pic3},
            {title: 'AVTECH PRO G700 (144 HZ) FHD All-in-One PC', url: pic4},
            {title: 'AVTECH PRO V400 All-in-One PC', url: pic5},
            {title: 'AVTECH X5 All-in-One PC', url: pic6},
            ].map((card) => <CustomCard key={card.title} test={pic1} {...card} />)} */}
           {/*  <CustomCard key={pic2} url={pic2} title={'AVTECH PRO G70 All-in-One PC'} />
            <CustomCard key={pic3} url={pic3} title={'AVTECH PRO G700 2K All-in-One PC'} />
            <CustomCard key={pic4} url={pic4} title={'AVTECH PRO G700 (144 HZ) FHD All-in-One PC'} />
            <CustomCard key={pic5} url={pic5} title={'AVTECH PRO V400 All-in-One PC'} />
            <CustomCard key={pic6} url={pic6} title={'AVTECH X5 All-in-One PC'} /> */},
            {images.map(({ url, title }) => <CustomCard key={title} title={title} url={url} />)}
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
