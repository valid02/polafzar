import classes from './Dashboard.module.css';
import DashboardHeader from '../components/layout/Header/DashboardHeader';

const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
      <DashboardHeader />
    </div>
  );
};

export default Dashboard;
