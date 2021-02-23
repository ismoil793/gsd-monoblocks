import CustomSlider from '../../components/Layout/Slider';
import BodyNavs from '../../components/Layout/Navs';
import url from "../../api/url";
import axios from "axios";
import MainLayout from "../../components/Layout";

const Monoblock = ({monoblock}) => {

   return (
       <MainLayout>
          <div className="container">
             {
                monoblock.monoblock && monoblock.monoblock.name ?
                    <CustomSlider monoblock={monoblock}/>
                    : null
             }
             <BodyNavs monoblock={monoblock} />
          </div>
       </MainLayout>
   )
};

export async function getServerSideProps(context) {
   let data = {};
   await axios.get(`${url}/monoblocks/${context.query.slug}`)
       .then(res => {
          data = res.data;
       });

   return {props: {monoblock: data}}
}

export default Monoblock;