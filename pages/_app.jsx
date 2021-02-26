import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/css/all.css';

import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import '../styles/responsive.css';

import { Provider } from 'react-redux';
import NextNProgress from 'nextjs-progressbar';

import {wrapper} from "../redux/store"


const App = ({ Component, pageProps }) => {
  return (
    <>
      <NextNProgress
        color="#FF8C00"
        height="5"
      />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(App);

