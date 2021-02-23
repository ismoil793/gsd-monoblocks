import {useDispatch} from "react-redux";
import {authLogout, userInfoClean} from "../../../redux/action/user";
import {useRouter} from "next/router";

const SideMenu = () => {

   const dispatch = useDispatch();
   const router = useRouter();

   const logoutHandler = () => {
      router.push('/');
     dispatch(authLogout());
     dispatch(userInfoClean())
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
                 className={router.query.param  === 'details' ? 'active' : ''}
             >
                Account details
             </li>
             <li onClick={logoutHandler}>Logout</li>
          </ul>
       </div>
   );
};

export default SideMenu;
