import React, {useEffect} from 'react';
import Header from "./Header/Header";
import Footer from "./Footer";

const MainLayout = (props) => {

   useEffect(() => {
   }, []);

   return (
       <>
          <Header/>
          <div style={{minHeight: '55vh'}}>
             {props.children}
          </div>
          <Footer/>
       </>
   );
};

export default MainLayout;