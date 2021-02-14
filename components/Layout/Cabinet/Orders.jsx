import {
   Table,
   Button,
} from 'antd';

const Orders = () => {
   const columns = [
      {
         title: 'Order',
         dataIndex: 'order',
         key: 'order',
      },
      {
         title: 'Date',
         dataIndex: 'date',
         key: 'date',
      },
      {
         title: 'Status',
         dataIndex: 'status',
         key: 'status',
      },
      {
         title: 'Total',
         dataIndex: 'total',
         key: 'total',
      },
      {
         title: 'Actions',
         render: () => (
             <Button
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

   const dataSource = [
      {
         key: '1',
         order: '#582',
         date: '08.10.2020',
         status: 'Processing',
         total: '468,000$ for 1 item'
      },
      {
         key: '3',
         order: '#581',
         date: '08.10.2020',
         status: 'Processing',
         total: '1.254,00$ for 3 item'
      },
      {
         key: '4',
         order: '#583',
         date: '08.10.2020',
         status: 'Processing',
         total: '555,00$ for 1 item'
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
          <h5 className="font-weight-bold">Orders</h5>
          <div className="custom-table">
             <Table
                 columns={columns}
                 dataSource={dataSource}
                 style={{
                    textAlign: 'center',
                 }}
             />
          </div>
       </div>
   );
};

export default Orders;
