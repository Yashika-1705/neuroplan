import React, { useState } from 'react';
import EnergySelector from '../components/energyselector';
import DashboardLayout from '../layout/DashboardLayout';
import Pomo from '../components/pomodorotimer';


const Dashboard = () => {
  const [energy, setEnergy] = useState('moderate');

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h1>

      <div className="flex gap-6">
        <div className="flex-1">
          <EnergySelector energy={energy} setEnergy={setEnergy} />
        </div>

        <div className="flex-1">
          <Pomo />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
