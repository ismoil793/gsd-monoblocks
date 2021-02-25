import React from 'react';
import DateRefactor from "../../helpers/Refactors/DateRefactor";
import PriceRefactor from "../../helpers/Refactors/PriceRefactor";
import {Button, Table} from "antd";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";

const Subscriptions = () => {

   const dispatch = useDispatch();
   const router = useRouter();
   const order = useSelector(state => state.order);

   const columns = [
      {
         title: 'Order',
         dataIndex: 'id',
         key: 'order',
      },
      {
         title: 'Date (dd/mm/yyy)',
         // title: 'Date',
         dataIndex: 'created_at',
         render: (date) => (
             <><DateRefactor date={date} /></>
         ),
         key: 'date',
      },
      {
         title: 'Status',
         dataIndex: 'order_state',
         key: 'status',
      },
      {
         title: 'Total',
         dataIndex: 'total',
         render: (total) => (
             <><PriceRefactor price={total} /></>
         ),
         key: 'total',
      },
      {
         title: 'Actions',
         render: (data) => (
             <Button
                 onClick={() => router.push(`/order/${data.id}`)}
                 className="btn btn-trans"
                 style={{
                    backgroundColor: 'transparent',
                    color: '#000',
                    fontWeight: 'bold'
                 }}
             >
                View Detail
             </Button>
         ),
      },
   ];


   return (
       <div
           style={{
              backgroundColor: '#f9f9f9',
              padding: 30,
              borderRadius: 10
           }}
       >
          <h5 className="font-weight-bold">Subscriptions</h5>
          <div className="custom-table">
             <Table
                 pagination={{
                    pageSize: 5,
                    // total: order.orders.length
                 }}
                 columns={columns}
                 dataSource={order.orders}
                 style={{
                    textAlign: 'center',
                 }}
             />
          </div>
       </div>
   );
};

export default Subscriptions;