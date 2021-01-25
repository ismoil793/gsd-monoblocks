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
          style={{
            backgroundColor: '#ff7d06',
            color: 'white',
          }}
        >
          View
        </Button>
      ),
    },
  ];

  const dataSource = [
    {
      order: '#582',
      date: '08.10.2020',
      status: 'Processing',
      total: '468,000$ for 1 item'
    },
    {
      order: '#581',
      date: '08.10.2020',
      status: 'Processing',
      total: '1.254,00$ for 3 item'
    },
    {
      order: '#583',
      date: '08.10.2020',
      status: 'Processing',
      total: '555,00$ for 1 item'
    },
  ];
  return (
    <div
      style={{
        width: '65%',
        backgroundColor: '#f9f9f9',
        paddingTop: 10,
      }}
    >
      <Button className="Browse-Products-Button">
        Browse products
      </Button>
      <h5 style={{ textAlign: 'center' }}>Orders</h5>
      <Table
        columns={columns}
        dataSource={dataSource}
        style={{
          textAlign: 'center',
          padding: 30,
        }}
      />
    </div>
  );
};

export default Orders;
