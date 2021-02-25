import React from 'react';

const PriceRefactor = ({price}) => {

   const formatPrice = (priceF = 0) => {
      priceF = (Math.round(priceF * 100) / 100);
      priceF = priceF.toString();
      let priceTail = '';
      let arrPrice = [];

      if (priceF.includes('.')) {
         arrPrice = priceF.split('.');
         priceF = arrPrice[0];
         priceTail = `.${arrPrice[1]}`;
      }

      if (priceF.length === 5) {
         priceF = priceF.slice(0, 2) + ' ' + priceF.slice(2, 5)
      } else if (priceF.length === 4) {
         priceF = priceF.slice(0, 1) + ' ' + priceF.slice(1, 4)
      } else if (priceF.length === 6) {
         priceF = priceF.slice(0, 3) + ' ' + priceF.slice(3, 6)
      } else if (priceF.length === 7) {
         priceF = priceF.slice(0, 1) + ' ' + priceF.slice(1, 4) + ' ' + priceF.slice(4, 7)
      } else if (priceF.length === 8) {
         priceF = priceF.slice(0, 2) + ' ' + priceF.slice(2, 5) + ' ' + priceF.slice(5, 8)
      } else if (priceF.length === 9) {
         priceF = priceF.slice(0, 3) + ' ' + priceF.slice(3, 6) + ' ' + priceF.slice(6, 9)
      }

      return (<span>&euro;{priceF}{priceTail}</span>)
   };

   return (
       <React.Fragment>
          {formatPrice(price)}
       </React.Fragment>
   );
};

export default PriceRefactor;