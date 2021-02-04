import HeaderTopContainer from '../../components/Layout/Header/HeaderTop';
import Footer from '../../components/Layout/Footer';
import CustomSlider from '../../components/Layout/Slider';
import BodyNavs from '../../components/Layout/Navs';
import CustomNavbar from '../../components/Layout/Navbar';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export async function getServerSideProps({ params }) {
  const monoblocksResponse = await fetch(`https://apigsd.rrpo.uz/api/monoblocks/${params.slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });  
  const monoblocksData1 = await monoblocksResponse.json();
  return {
    props: {
      monoblocks: monoblocksData1,
    }
  }
}

const Monoblock = ({ monoblocks }) => {
  console.log('monoblocks props; ', monoblocks);
  return (
    <>
      <HeaderTopContainer />
      <CustomNavbar />
      <div className="Container">
        <CustomSlider monoblocks={monoblocks} />
        <BodyNavs />
      </div>
      <Footer />
    </>
  )
}

export default Monoblock;