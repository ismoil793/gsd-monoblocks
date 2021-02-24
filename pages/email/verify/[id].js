import React, {useEffect} from 'react';
import MainLayout from "../../../components/Layout";
import {useRouter} from "next/router";
import url from "../../../api/url";
import {notifyError, notifySuccess} from "../../../helpers/NotifyBtn";
import axios from "axios";
import {httpGet_NO_DEVICE_TOKEN} from "../../../api";

const VerifyEmail = () => {

   const router = useRouter();
   const {id, ...params} = router.query;

   useEffect(async () => {
      if (id) {
         httpGet_NO_DEVICE_TOKEN({
            url: `${url}/auth/user/verify/${id}`,
            params
         }).then(response => {
            notifySuccess('Your account is approved');
            router.push('/login')
         }).catch(e => {
            if (e.data)
               notifyError(e.data.message);
            else if (e.response)
               notifyError(e.response.message);
            else
               notifyError("Something went wrong...")
            // router.push('/')
         })
      }
   }, [id]);

   return (
       <MainLayout>
          <div className="container-fluid">
             <div className="row mt-5">
                <div className="col-12 mt-5 p-0">
                   <div style={{height: '40vh'}}>
                      <h1 className="heading-dark text-center">Approving your email...</h1>
                   </div>
                </div>
             </div>
          </div>
       </MainLayout>
   );
};

export default VerifyEmail;