import CustomSlider from './CustomSlider';
import Characteristics from './Characteristics';

const Carousel = ({ monoblocks }) => {
  return (
      <div className="Characteristics-Margin"><CustomSlider monoblocks={monoblocks} /></div>
  );
}

export default Carousel;