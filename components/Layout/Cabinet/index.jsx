import SideMenu from './SideMenu';
import Orders from './Orders';
import {useEffect, useState} from "react";
import Details from "../../Account/details";
import Subscriptions from "../../Account/Subscriptions";
import {useRouter} from "next/router";

const Cabinet = () => {

   const [sideNav, setSideNav] = useState("orders")
   const router = useRouter();

   useEffect(() => {
   }, [router])

   const handleSidebar = (nav) => {
      setSideNav(nav)
   }

   return (
       <section className="profile-section">
          <div className="container">
             <div className="row">
                <div className="col-12">
                   <h3 className="account-title">My account</h3>
                </div>
             </div>
             <div className="row">
                <div className="col-md-3">
                   <SideMenu sideNav={sideNav} handleSidebar={handleSidebar}/>
                </div>
                <div className="col-md-9">
                   {
                      router.query.param === 'details' ? <Details/> :
                          router.query.param === 'subscriptions' ? <Subscriptions/> : <Orders/>}
                </div>
             </div>
          </div>
       </section>
   );
};

export default Cabinet;
