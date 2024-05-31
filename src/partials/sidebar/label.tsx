import { NavLink } from "react-router-dom";
const ListItem = () => {
    return(
        <NavLink
        end
        to="/ecommerce/pay"
        className={({ isActive }) =>
          'block transition duration-150 truncate ' + (isActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200')
        }
      >
        <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
          Pay
        </span>
      </NavLink>)
}
export default ListItem;