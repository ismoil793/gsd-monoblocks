import React from 'react';
import moment from "moment";

const DateRefactor = ({date, dots = false}) => {

   const getFormattedDate = (date) => {
      // const separator = dots ? '.' : '/';
      // const days = Math.round((new Date(date).getTime()) / ( 1000 * 1000 * 60 * 60 * 24));
      // console.log(new Date(date).getTime())
      // const months = new Date(date).getMonth() + 1;
      // const year = new Date(date).getFullYear();
      if (dots)
         return moment(date).format('DD.MM.YYYY');
      else
         return moment(date).format('DD/MM/YYYY')

      // return `${days < 10 ? '0' + days : days}${separator}${months < 10 ? '0' + months : months}${separator}${year}`;
   };

   return (
       <>
          {getFormattedDate(date)}
       </>
   );
};

export default DateRefactor;