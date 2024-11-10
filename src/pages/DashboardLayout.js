import { Outlet } from 'react-router-dom';
import classes from './DashboardLayout.module.css';
import DashboardHeader from '../components/layout/Header/DashboardHeader';
import DashboardSideMenu from '../components/layout/DashboardSideMenu';

const DashboardLayout = () => {
  return (
    <div className={classes['dashboard-layout']}>
      <DashboardHeader />
      <DashboardSideMenu />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
