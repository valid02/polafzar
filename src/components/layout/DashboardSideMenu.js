import { BiSolidUserRectangle } from "react-icons/bi";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { FaChartBar, FaChartPie } from "react-icons/fa";
import { FaMoneyBillTransfer, FaMoneyCheckDollar } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineLogout } from "react-icons/md";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const DashboardSideMenu = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">
              <TbLayoutDashboardFilled />
              <span>داشبورد</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <FaMoneyCheckDollar />
              <span>هزینه‌ها</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <FaChartPie />
              <span>بودجه‌بندی</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <FaMoneyBillTransfer />
              <span>بدهی‌ها</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <GiTakeMyMoney />
              <span>مطالبات</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <BsCreditCard2FrontFill />
              <span>حساب‌ها</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <FaChartBar />
              <span>نمودار‌ها و گزارشات</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <BiSolidUserRectangle />
              <span>پروفایل</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <MdOutlineLogout />
              <span>خروج</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
 
export default DashboardSideMenu;