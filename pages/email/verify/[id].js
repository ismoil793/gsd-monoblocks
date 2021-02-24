import React, {useEffect} from 'react';
import MainLayout from "../../../components/Layout";
import {useRouter} from "next/router";
import url from "../../../api/url";
import {notifyError, notifySuccess} from "../../../helpers/NotifyBtn";
import axios from "axios";
import {httpGet} from "../../../api";

const VerifyEmail = () => {

   const router = useRouter();
   const {id, ...params} = router.query;

   useEffect(async () => {

      httpGet({
         url: `${url}/user/info`
      })

      if (id) {
         console.log(`${url}/auth/user/verify/${id}?expires=${params.expires}&signature=${params.signature}`)
         await axios.get(`${url}/auth/user/verify/${id}?expires=${params.expires}&signature=${params.signature}`)
             .then(response => {
                notifySuccess('Your account is approved');
                router.push('/login')
             }).catch(e => {
                notifyError(e.response.data.message);
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
                      <h1 className="heading-dark text-center">Approving your emaillll...</h1>
                   </div>
                </div>
             </div>
          </div>
       </MainLayout>
   );
};

export default VerifyEmail;