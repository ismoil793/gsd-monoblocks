import CustomSlider from './CustomSlider';
import Characteristics from './Characteristics';

const Carousel = ({ monoblock }) => {
  return (
      <div className="Characteristics-Margin"><CustomSlider monoblocks={monoblock} /></div>
  );
}

export default Carousel;