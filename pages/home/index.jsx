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
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/action';


export async function getStaticProps(){
  const response = await fetch('https://apigsd.rrpo.uz/api/monoblocks?page=1&per_page=9', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const monoblocks = await response.json();
  return {
    props: {
      monoblocks: monoblocks ? monoblocks : [],
    }
  }
}

const Home = ({ monoblocks }) => {
  const dispatch = useDispatch();
  const monoblockTable = useSelector((state) => state.handleHomePage);

  useEffect(() => {
    dispatch(actions.getMonoblocksSuccess(monoblocks));
  }, [monoblocks]);

  
  const onChange = (page) => {
    console.log('page: ', page);
    dispatch(actions.setPage(page));
    dispatch(actions.getMonoblocks({ page, per_page: 9 }));
  }

  return (
    <>
      <HeaderTopContainer/>
      <CustomNavbar />
      <div className="Container" style={{ minHeight: '30vh' }}>
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
           {/*  {images.map(({ url, title }) => <CustomCard key={title} title={title} url={url} />)} */}
           {monoblockTable.monoblockList.map((monoblock, index) => <CustomCard
              key={index}
              title={monoblock.name}
              url={monoblock.image}
              slug={monoblock.slug}
            />)}
        </div>
        <Pagination
          pageSize={9}
          onChange={onChange}
          style={{
            textAlign: 'center',
            marginTop: 30,
            marginBottom: 30
          }}
          current={monoblockTable.monoblockCurrentPage}
          total={monoblockTable.monoblockTotal}
        />
      </div>
      <Footer />
    </>
  );
};


export default Home;
