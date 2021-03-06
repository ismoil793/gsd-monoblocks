import Link from 'next/link';
import Image from 'next/image';

const Card = ({ url, title, slug }) => {
  return (
      <div className="Custom-Card-Container">
          <div className="Custom-Card">
            <img alt="example" className="Card-Img" src={url} />
          </div>

          <div className="Card-Context">
            <p>{title}</p>
              <Link
                  href={{ pathname: "/monoblock/[slug]" }}
                  as={`/monoblock/${slug}`}
              >
                <a className="Custom-Card-Button">More details</a>
              </Link>
          </div>


      </div>
  );
}
export default Card;
