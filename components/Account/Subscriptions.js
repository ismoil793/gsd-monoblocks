import React, {useEffect} from 'react';
import DateRefactor from "../../helpers/Refactors/DateRefactor";
import PriceRefactor from "../../helpers/Refactors/PriceRefactor";
import {Button, Table} from "antd";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {getSubscriptions} from "../../redux/action/subscription";


const Subscriptions = () => {

   const dispatch = useDispatch();
   const router = useRouter();
   const subscription = useSelector(state => state.subscription);

   useEffect(() => {
      dispatch(getSubscriptions())
   }, [])

   const columns = [
      {
         title: 'ID',
         dataIndex: 'id',
         key: 'order',
      },
      {
         title: 'Product',
         dataIndex: 'monoblock',
         key: 'monoblock.name',
         render: data => (
             <>{data.name}</>
         )
      },
      {
         title: 'Subscription Length',
         dataIndex: 'months',
         key: 'months',
         render: data => (
             <>{data} month(s)</>
         )
      },
      {
         title: 'Quantity',
         dataIndex: 'quantity',
         key: 'order_state',
      },
      {
         title: 'Subscription Total',
         dataIndex: 'total',
         render: (total) => (
             <><PriceRefactor price={total}/></>
         ),
         key: 'total',
      },
      {
         title: 'View Details',
         render: (data) => (
             <Button
                 onClick={() => router.push(`/subscription/${data.id}`)}
                 className="btn btn-trans"
                 style={{
                    backgroundColor: 'transparent',
                    color: '#000',
                    fontWeight: 'bold'
                 }}
             >
                More
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
                 dataSource={subscription.subscriptions}
                 style={{
                    textAlign: 'center',
                 }}
             />
          </div>
       </div>
   );
};

export default Subscriptions;