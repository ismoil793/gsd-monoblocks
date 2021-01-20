import { InputNumber, Button } from 'antd';
import removeButton from '../../static/img/remove.png';

const onChange = (value) => {
  console.log('value: ', value);
}

const Cart = () => {
  return (
    <>
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
                <table>
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
      <br/>
      <br/>
      <br/>
      <div className="cartTotalWrapper">
        <div>
          <h3>Cart totals</h3>
          <br/>
          <table>
            <tbody className="cartTotals">
              <tr>
                <td><b>Subtotal</b></td>
                <td>1.454,00&euro;</td>
              </tr>
              <tr>
                <td><b>Total</b></td>
                <td><b>1.454,00&euro;</b></td>
              </tr>
            </tbody>
          </table>
          <br/>
          <Button className="proceedButton">
             Proceed to checkout
          </Button>
          <br/>
        </div>
      </div>
    </>
  );
};

export default Cart;
