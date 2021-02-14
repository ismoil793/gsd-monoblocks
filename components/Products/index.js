import React from 'react';
import CustomCard from "../Layout/Cards/Card";
import {Pagination} from "antd";

const ProductsWrap = ({products, current, total, onChange}) => {

   return (
       <>
          {
             products.map((monoblock, index) =>
                 <div key={index} className="col-xl-4 col-lg-4 col-sm-6 col-12">
                    <CustomCard
                        title={monoblock.name}
                        url={monoblock.image}
                        slug={monoblock.slug}
                    />
                 </div>
             )
          }
          <div className="col-12">
             {
                products.length >= 7 ?
                    <Pagination
                        pageSize={6}
                        onChange={onChange}
                        style={{
                           textAlign: 'center',
                           marginTop: 30,
                           marginBottom: 30
                        }}
                        current={current}
                        total={total}
                    />
                    : null
             }
          </div>
       </>
   );
};

export default ProductsWrap;