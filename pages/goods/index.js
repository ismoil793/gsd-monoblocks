import React, {useEffect} from 'react';
import {Table} from "antd";
import {useDispatch, useSelector} from "react-redux";
import MainLayout from "../../components/Layout";
import {fetchGoods} from "../../redux/action/goods";

const Goods = () => {

   const dispatch = useDispatch();
   const goods = useSelector(state => state.goods);

   useEffect(() => {
      dispatch(fetchGoods())
   }, []);

   const columns = [
      {
         title: '#',
         dataIndex: 'number',
         key: 'number'
      },
      {
         title: 'Name',
         dataIndex: 'name',
         key: 'name',
      },
      {
         title: 'Quantity',
         dataIndex: 'quantity',
         key: 'quantity'

      }
   ];

   const convertedGoods = goods.goods.map((item, i) => {
      return {number: ++i, ...item}
   })

   return (
       <MainLayout>
          <div className="container">
             <div className="row">
                <div className="offset-2 col-8">

                   <div className="custom-table mt-5 mb-5">
                      <Table
                          pagination={{
                             pageSize: 10,
                             total: convertedGoods.length
                          }}
                          columns={columns}
                          dataSource={convertedGoods}
                          style={{
                             textAlign: 'left',
                          }}
                      />
                   </div>
                </div>
             </div>
          </div>
       </MainLayout>
   );
};

export default Goods;