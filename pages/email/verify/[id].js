import React, {useEffect} from 'react';
import MainLayout from "../../../components/Layout";
import {useRouter} from "next/router";
import {httpGet} from "../../../api";
import url from "../../../api/url";
import {notifyError, notifySuccess} from "../../../helpers/NotifyBtn";

const VerifyEmail = () => {

   const router = useRouter();
   const {id, ...params} = router.query;

   useEffect(() => {
      httpGet({
         url: `${url}/auth/user/verify/${id}`,
         params
      })
          .then(response => {
             notifySuccess('Your account is approved');
             router.push('/login')
          })
          .catch(e => {
             notifyError(e.data.message);
             router.push('/')
          })
   }, []);

   return (
       <MainLayout>
          <div className="container-fluid">
             <div className="row mt-5">
                <div className="col-12 mt-5 p-0">
                   <div style={{ height: '40vh' }}>
                      <h1 className="heading-dark">Approving your email...</h1>
                   </div>
                </div>
             </div>
          </div>
       </MainLayout>
   );
};

export default VerifyEmail;