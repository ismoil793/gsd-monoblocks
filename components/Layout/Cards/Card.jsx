import Link from 'next/link';

const Card = () => {
  return (
      <div className="Custom-Card-Container">
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
