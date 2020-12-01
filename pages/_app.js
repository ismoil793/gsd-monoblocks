import React from 'react';
import '../styles/main.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/css/all.css';
import {wrapper} from '../redux/store';

const App = ({ Component, pageProps }) => {
  /* const store = useStore(pageProps.initialReduxState) */

  return <Component {...pageProps} />
}

export default wrapper.withRedux(App);
