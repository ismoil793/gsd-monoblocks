import {useDispatch} from "react-redux";
import {authLogout, userInfoClean} from "../../../redux/action/user";
import {useRouter} from "next/router";
import {clearCart} from "../../../redux/action/cart";

const SideMenu = () => {

   const dispatch = useDispatch();
   const router = useRouter();

   const logoutHandler = async () => {
      router.push('/');
      await dispatch(clearCart())
      await dispatch(authLogout());
      await dispatch(userInfoClean())
   };

   return (
       <div className="SideMenuWrapper">
          <ul className="SideMenu">
             <li
                 onClick={() => router.push('/cabinet?param=orders')}
                 className={router.query.param === 'orders' ? 'active' : ''}
             >
                Orders
             </li>
             <li
                 onClick={() => router.push('/cabinet?param=details')}
                 className={router.query.param === 'details' ? 'active' : ''}
             >
                Account details
             </li>
             <li
                 onClick={() => router.push('/cabinet?param=subscriptions')}
                 className={router.query.param === 'subscriptions' ? 'active' : ''}
             >
                Subscriptions
             </li>
             <li onClick={logoutHandler}>Logout</li>
          </ul>
       </div>
   );
};

export default SideMenu;
