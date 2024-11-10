import { BiSolidUserRectangle } from "react-icons/bi";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { FaChartBar, FaChartPie } from "react-icons/fa";
import { FaMoneyBillTransfer, FaMoneyCheckDollar } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineLogout } from "react-icons/md";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import classes from "./DashboardSideMenu.module.css";

const DashboardSideMenu = () => {
  return (
    <aside className={classes.sidebar}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? classes.active : undefined)} end>
              <TbLayoutDashboardFilled />
              <span>داشبورد</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/expenses" className={({ isActive }) => (isActive ? classes.active : undefined)}>
              <FaMoneyCheckDollar />
              <span>هزینه‌ها</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/budgeting" className={({ isActive }) => (isActive ? classes.active : undefined)}>
              <FaChartPie />
              <span>بودجه‌بندی</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/debts" className={({ isActive }) => (isActive ? classes.active : undefined)}>
              <FaMoneyBillTransfer />
              <span>بدهی‌ها</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/receivables" className={({ isActive }) => (isActive ? classes.active : undefined)}>
              <GiTakeMyMoney />
              <span>مطالبات</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/accounts" className={({ isActive }) => (isActive ? classes.active : undefined)}>
              <BsCreditCard2FrontFill />
              <span>حساب‌ها</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/charts" className={({ isActive }) => (isActive ? classes.active : undefined)}>
              <FaChartBar />
              <span>نمودار‌ها و گزارشات</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/profile" className={({ isActive }) => (isActive ? classes.active : undefined)}>
              <BiSolidUserRectangle />
              <span>پروفایل</span>
            </NavLink>
          </li>
          <li>
            <button type="button" className={classes.logout}>
              <MdOutlineLogout />
              <span>خروج</span> 
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
 
export default DashboardSideMenu;