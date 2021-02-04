import '../styles/main.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/css/all.css';
import { Provider } from 'react-redux';
import { useStore } from '../redux/store';
import NextNProgress from 'nextjs-progressbar';


const App = ({ Component, pageProps }) => {
  const store = useStore(pageProps);
  return (
    <Provider store={store}>
      <NextNProgress
        color="#FF8C00"
        height="5"
      />
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;

