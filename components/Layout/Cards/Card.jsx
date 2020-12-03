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
import Link from 'next/link';

const Card = () => {
  return (
      <div style={{ marginTop: 30 }}>
        <div className="Custom-Card">
        <img alt="example" className="Card-Img" src="/static/img/1.jpg" />
      </div>
      <div className="Card-Context">
          <p>AVTECH K40 PRO IPS 23.8"</p>
          <Link href="#">
            <a className="Custom-Card-Button">Select</a>
          </Link>
      </div>
      </div>
  );
}
export default Card;
