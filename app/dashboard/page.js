
import React from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import Table from '@/components/Table';



const data = [
  { id: 1, name: '10 cm', location: '22 Juli 2024, 00.04', status: 'Danger' },
  { id: 2, name: '5 cm', location: '22 Juli 2024, 00.04', status: 'Warning' },
  { id: 3, name: '2 cm', location: '22 Juli 2024, 00.04', status: 'Normal' },
  // ...
];

const Dashboard = () => {
  return (
    <div>
      <div className=" p-4">
        {/* Dashboard content */}
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to the flood early warning system dashboard!</p>
        <Table data={data} />
        
      </div>
    </div>
  );
};

export default Dashboard;
