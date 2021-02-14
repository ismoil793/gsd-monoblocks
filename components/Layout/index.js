import React, {useEffect} from 'react';
import Header from "./Header/Header";
import Footer from "./Footer";

const MainLayout = (props) => {

   useEffect(() => {
   }, []);

   return (
       <>
          <Header/>
          {props.children}
          <Footer/>
       </>
   );
};

export default MainLayout;