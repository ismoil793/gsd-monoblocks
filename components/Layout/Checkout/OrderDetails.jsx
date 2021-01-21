const OrderDetails = () => {
  return (
    <table
      className="order-details-table"
    >
        <tbody>
          <tr>
            <td>Product</td>
            <td>Subtotal</td>
          </tr>
          <tr>
            <td>Asus DUAL-GTX1650-O4G x1</td>
            <td>165,000&euro;</td>
          </tr>
          <tr>
            <td>
              Barebone AVTECH PRO K40
              <br/>
              <span className="table-selected-values">
                Selected values: 
              </span>
              <div>
                <table style={{ width: '100%' }} className="colored-table">
                {/* <thead>
                  <th>Description</th>
                  <th>Value</th>
                  <th>Amount</th>
                </thead> */}
                <tbody>
                  <tr>
                    <td style={{ textAlign: 'left' }}><b>Description</b></td>
                    <td style={{ textAlign: 'left' }}><b>Value</b></td>
                    <td style={{ textAlign: 'right' }}><b>Amount</b></td>
                  </tr>
                  <tr>
                    <td>CPU</td>
                    <td>Intel Pentium DualCore G5420 – 3.8 GHz, 4M</td>
                    <td style={{ textAlign: 'right' }}>&euro; 50.00</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>16GB DDR4 SODIMM 2666Mhz</td>
                    <td style={{ textAlign: 'right' }}>&euro; 50.00</td>
                  </tr>
                  <tr>
                    <td>HDD/SSD</td>
                    <td>SSD S100-120GB</td>
                    <td style={{ textAlign: 'right' }}>&euro; 20.00</td>
                  </tr>
                  <tr>
                    <td>Graphic card</td>
                    <td>PH-GT1030-O2G</td>
                    <td style={{ textAlign: 'right' }}>&euro; 90.00</td>
                  </tr>
                  <tr>
                    <td><b>Total</b></td>
                    <td></td>
                    <td style={{ textAlign: 'right' }}><b>&euro; 390.00</b></td>
                  </tr>
                </tbody>
              </table>
              </div>
            </td>
            <td>390 &euro;</td>
          </tr>
            <tr>
              <td><b>Subtotal</b></td>
              <td><b>815,00 &euro;</b></td>
            </tr>
            <tr>
              <td><b>Total</b></td>
              <td><b>815,00 &euro;</b></td>
            </tr>
        </tbody>
      </table>
  );
}

export default OrderDetails;
