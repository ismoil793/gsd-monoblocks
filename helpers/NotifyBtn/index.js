import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

export function notifyError(msg, duration = 2000) {

   const notyf = new Notyf({
      types: [
         {
            type: "error",
            backgroundColor: "#E24133",

            // icon: {
            //    className: 'notify-icon-img',
            //    tagName: 'div',
            //    // text: 'BRAND STORE'
            // }
         }
      ],
      duration,
      position: { x: 'center', y: window.innerWidth <= 768 ? 'bottom' : 'top' },
      dismissible: true
   });

   notyf.open({
      type: "error",
      message: msg
   });
}

export function notifySuccess(msg, duration = 2000) {
   const notyf = new Notyf({
      types: [
         {
            type: "success",
            // backgroundColor: "#5BC55F",
            // backgroundColor: "orange",

            // icon: {
            //    className: 'notify-icon-img',
            //    tagName: 'div'
            //    // text: 'BRAND STORE'
            // }
         }
      ],
      duration,
      position: { x: 'center', y: window.innerWidth <= 768 ? 'bottom' : 'top' },
      dismissible: true
   });

   notyf.open({
      type: "success",
      message: msg
   });
}


export function notifyWarn(msg, duration = 2000) {
   const notyf = new Notyf({
      types: [
         {
            type: "warning",
            backgroundColor: "orange",

            // icon: {
            //    className: 'notify-icon-img',
            //    tagName: 'div'
            //    // text: 'BRAND STORE'
            // }
         }
      ],
      duration,
      position: { x: 'right', y: window.innerWidth <= 768 ? 'bottom' : 'top' },
      dismissible: true
   });

   notyf.open({
      type: "warning",
      message: msg
   });
}
