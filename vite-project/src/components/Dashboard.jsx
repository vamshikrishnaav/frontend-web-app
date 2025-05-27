import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';
import './Dashboard.css';
import Chef from '../assets/chef.svg';
import Client from '../assets/client.svg';
import Orders from '../assets/orders.svg';
import OrderSummaryCard from './OrderSummaryCard';
import RevenueChart from './RevenueChart';
import TableGrid from './TableGrid';
import ChefTable from './ChefTable';

const StatCard = ({ icon, value, label }) => (
  <div className="stat-card">
    <div className="icon-wrapper">{icon}</div>
    <div className="text-wrapper">
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <h2 className="dashboard-title">Analytics</h2>

        <div className="stat-section">
          <StatCard icon={<img src={Chef} alt="Chef" />} value="04" label="TOTAL CHEF" />
          <StatCard icon={<FaRupeeSign />} value="12K" label="TOTAL REVENUE" />
          <StatCard icon={<img src={Orders} alt="Orders" />} value="20" label="TOTAL ORDERS" />
          <StatCard icon={<img src={Client} alt="Clients" />} value="65" label="TOTAL CLIENTS" />
        </div>

        <div className="analytics-row">
          <OrderSummaryCard />
          <RevenueChart />
          <TableGrid />
        </div>

        <div className="chef-table-wrapper">
          <ChefTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
