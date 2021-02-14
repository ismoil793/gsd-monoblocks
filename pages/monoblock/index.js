import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../redux/action";
import MainLayout from "../../components/Layout";
import ProductsWrap from "../../components/Products";

const Catalog = ({monoblocks}) => {

   const dispatch = useDispatch();
   const monoblockTable = useSelector((state) => state.handleHomePage);

   useEffect(() => {
      dispatch(actions.getMonoblocksSuccess(monoblocks));
   }, [monoblocks]);

   const onChange = (page) => {
      dispatch(actions.setPage(page));
      dispatch(actions.getMonoblocks({page, per_page: 6}));
   };

   return (
       <MainLayout>
          <div className="container recommended-monoblocks">
             <div className="row">

                <div className="col-12">
                   <h3 className="text-center products-title">Our Products</h3>
                </div>

                <div className="col-12">
                   <div className="row">
                      {
                         monoblockTable.monoblockList && monoblockTable.monoblockList.length ?
                             <ProductsWrap
                                 products={monoblockTable.monoblockList}
                                 current={monoblockTable.monoblockCurrentPage}
                                 total={monoblockTable.monoblockTotal}
                                 onChange={onChange}
                             />
                             : null
                      }
                   </div>
                </div>
             </div>
          </div>
       </MainLayout>
   );
};


export async function getStaticProps() {
   const response = await fetch('https://apigsd.rrpo.uz/api/monoblocks?page=1&per_page=6', {
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

export default Catalog;