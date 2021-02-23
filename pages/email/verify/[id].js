import React from 'react';
import MainLayout from "../../../components/Layout";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";

const VerifyEmail = () => {

   const router = useRouter();
   const dispatch = useDispatch();

   return (
       <MainLayout>
          <div className="container-fluid">
             <div className="row mt-5">
                <div className="col-12 mt-5 p-0">
                   <div style={{ height: '40vh' }}>
                      <h1 className="heading-dark">Подтверждение аккаунта</h1>
                   </div>
                </div>
             </div>
          </div>
       </MainLayout>
   );
};

export default VerifyEmail;