import {useState, useEffect, useRef} from 'react';
import CountUp from 'react-countup';
import * as actions from '../../../redux/action';
import {useDispatch, useSelector} from 'react-redux';
import {
   Form,
   Button,
   Select,
   Input,
} from 'antd';
import {httpGet, httpPost} from "../../../api";
import {calculateConfigurator} from "../../../redux/action/configurator";
import {addToCart, getCart} from "../../../redux/action/cart";

const {Option} = Select;

const Characteristics = ({monoblocks}) => {
   const dispatch = useDispatch();
   const configurator = useSelector(state => state.configurator);

   const {monoblock, configuration} = monoblocks;

   const getMonths = () => {
      let months = [];
      for (let i = 3; i <= 36; i++) {
         months = [...months, i]
      }
      return months
   };

   const [productMonth, setProductMonth] = useState(36);
   const [componentSize, setComponentSize] = useState('default');
   const [oldPrice, setOldPrice] = useState({price: 0});
   const [price, setPrice] = useState(configuration.optional_components ? (
       configuration.optional_components.reduce((acc, curValue, i) => {
          return {
             ...acc,
             [curValue.category]: curValue.components[0].price
          }
       }, {})
   ) : null);
   const [baseCompPrice, setBaseCompPrice] = useState(configuration.base_components ? (
       configuration.base_components.reduce((acc, curValue) => {
          return {
             ...acc,
             [curValue.category]: curValue.component.price
          }
       }, {})
   ) : null);

   useEffect(() => {
      getTotalMonthlyPrice()
   }, [price, productMonth]);


   const getTotalMonthlyPrice = () => {
      const total = Object.values(baseCompPrice).reduce((acc, curValue) => acc + curValue, 0)
          + Object.values(price).reduce((acc, curValue) => acc + curValue, 0);
      dispatch(calculateConfigurator({
         months: productMonth,
         total
      }))
   };

   const onFormLayoutChange = ({size}) => {
      setComponentSize(size);
   };
   const onFinish = async (values) => {
      let component_ids = [];
      for (let key in values.components) {
         if (values.components.hasOwnProperty(key)) {
            component_ids = [...component_ids, values.components[key]]
         }
      }
      console.log(component_ids)
      console.log(monoblock.id)
      await dispatch(addToCart({
         monoblock_id: monoblock.id,
         component_ids,
         months: values.month
      }));
      dispatch(getCart())
   };

   const displayInitialValues = (component, type = 'optional') => {
      if (type === 'optional') {
         return component.reduce((acc, curr, i) => {
            return {
               ...acc,
               [`component-${i}`]: curr.components[0].id
            }
         }, {});
      } else {
         return component.reduce((acc, currValue) => {
            return {
               ...acc,
               [currValue.component]: currValue.component ? currValue.component.name : null,
            }
         }, {});
      }
   };


   const handleProductMonthChange = (val) => {
      setProductMonth(val)
   };

   const handleChange = (value, info, component) => {
      setOldPrice(price);
      setPrice(prices => {
         return {
            ...prices,
            [component]: info.money
         }
      });
      return null;
   };

   return (
       <div>
          <p className="characteristic-title">
             {monoblock.name}
          </p>
          <Form
              layout="horizontal"
              // initialValues={{size: componentSize}}
              onValuesChange={onFormLayoutChange}
              size={componentSize}
              onFinish={onFinish}
              labelCol={{span: 24}}
              onKeyDown={(e)=> e.keyCode == 13 ? e.preventDefault(): ''}
              initialValues={{
                 ['components']: {...displayInitialValues(configuration.optional_components)},
                 ...displayInitialValues(configuration.base_components, 'base'),
                 month: 36
              }}
          >
             {configuration.optional_components.map((component, index) => {
                return (
                    <Form.Item
                        label={component.category}
                        name={['components', `component-${index}`]}
                        key={Math.random() * index}
                    >
                       <Select
                           onChange={(value, info) => {
                              handleChange(value, info, component.category)
                           }}
                           key={Math.random() * index}
                       >
                          {component.components.map((category, index) => {
                             return (
                                 <Option
                                     key={`${index}`}
                                     value={category.id}
                                     money={category.price}
                                 >
                                    {category.name}
                                 </Option>
                             );
                          })}
                       </Select>
                    </Form.Item>
                );
             })}
             {configuration.base_components.map((component, index) => {
                return (
                    <Form.Item
                        label={component.category}
                        name={component.component}
                        key={`M${index}`}
                    >
                       <Input
                           disabled
                           value={component.component.name}
                       />
                    </Form.Item>
                );
             })}

             <div className="d-flex justify-content-between align-items-center">
                <Form.Item
                    label={"Rental period"}
                    name={'month'}
                >
                   <Select onChange={(val) => handleProductMonthChange(val)}>
                      {getMonths().map((item, i) => {
                         return (
                             <Option
                                 key={i}
                                 value={item}
                             >
                                {item} {i === 0 ? 'month' : 'months'}
                             </Option>
                         );
                      })}
                   </Select>
                </Form.Item>
                <h5 className="mb-0 pt-3 text-right">Price:&nbsp;
                   <span className="gsd-orange">
                   from&nbsp;
                      <CountUp
                          start={0}
                          end={configurator.minimum}
                          duration={1}
                          prefix="€ "
                          className="Number-Animation"
                          style={{
                             fontSize: 24,
                          }}
                      />
                /month
                </span>
                </h5>
             </div>

             <Button
                 htmlType="submit"
                 shape="round"
                 className="btn-gsd-orange"
                 // onClick={() => dispatch(actions.addToCart())}
             >
                Add to cart
             </Button>
             {/*<p style={{fontSize: 14, marginTop: 10}}><span style={{color: 'red'}}>*</span>Required</p>*/}
          </Form>
       </div>
   )
};

export default Characteristics;