import { useRouter } from 'next/router';
import HeaderTopContainer from '../../components/Layout/Header/HeaderTop';
import Footer from '../../components/Layout/Footer';
import CustomNavbar from '../../components/Layout/Navbar';
import removeButton from '../../static/img/remove.png';
import CartLayout from '../../components/Cart/index';
import {
  InputNumber,
  Button,
} from 'antd';


const onChange = (value) => {
  console.log('value: ', value);
}

const Item = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
     <>
      <HeaderTopContainer />
      <CustomNavbar />
      <br/>
      {/* <h1>item number {id}</h1> */}
      <br/>
      <br/>
      <div className="Container" style={{ minHeight: '30vh' }}>
        <table className="custon-table" style={{ width: '100%' }}>
          <thead>
            <th>Current Status</th>
            <th>Order Date</th>
            <th>Destination Address</th>
          </thead>
          <tbody>
            <td>Active</td>
            <td>10.10.2019</td>
            <td>Latvia, something something</td>
          </tbody>
        </table>
        <br/>
        <br/>
        <table className="custon-table">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th className="product-name">Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={removeButton} width="25" alt="removeButton"/>
            </td>
            <td>icon</td>
            <td>
              Barebone AVTECH PRO K40
              <br/>
              <br/>
              <span className="table-selected-values">
                Selected values: 
              </span>
              <div>
                <table style={{ width: '100%' }}>
                <thead>
                  <th>Description</th>
                  <th>Value</th>
                  <th>Amount</th>
                </thead>
                <tbody>
                  <tr>
                    <td>CPU</td>
                    <td>Intel</td>
                    <td>1000000</td>
                  </tr>
                  <tr>
                    <td>CPU</td>
                    <td>Intel</td>
                    <td>1000000</td>
                  </tr>
                  <tr>
                    <td>CPU</td>
                    <td>Intel</td>
                    <td>1000000</td>
                  </tr>
                  <tr>
                    <td>CPU</td>
                    <td>Intel</td>
                    <td>1000000</td>
                  </tr>
                  <tr>
                    <td>CPU</td>
                    <td>Intel</td>
                    <td>1000000</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </td>
            <td>{476}&euro;</td>
            <td><InputNumber min={1} max={10} defaultValue={3} onChange={onChange} /></td>
            <td>476</td>
          </tr>
            <tr>
              <td colSpan="6">
                <Button
                  className="updateCartButton"
                >
                  Update cart
                </Button>
              </td>
            </tr>
        </tbody>
      </table>
      
      </div>
      <br/>
      <Footer />
    </>
  );
};

export default Item;