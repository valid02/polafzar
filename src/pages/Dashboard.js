import classes from './Dashboard.module.css';
import DashboardHeader from '../components/layout/Header/DashboardHeader';
import DashboardSideMenu from '../components/layout/DashboardSideMenu';

const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
      <DashboardHeader />
      <DashboardSideMenu />
    </div>
  );
};

export default Dashboard;
