/* import Image from 'next/image'

const Card2 = () => {
  return (
    <div className="Card2">
      <div className="Card2-Img-Wrapper">
        {/* <Image
          src="/static/img/1.jpg"
          width="90"
          height="auto"
        /> 
        <img alt="example" className="Card2-Img" src="/static/img/1.jpg" />
      </div>
      <div className="Card2-Content">Content</div>
    </div>
  );
}

export default Card2;
 */
/* import { Card } from 'antd'; */

const Card2 = () => {
  return (
      <div className="Custom-Card2">
        <img src="/static/img/1.jpg" alt="test"/>
        <div className="info">
          <h2 style={{ color: 'white' }}>AVTECH K40 PRO IPS 23.8</h2>
          
          <button>Select</button>
        </div>
      </div>
  );
}
export default Card2;
