import React from 'react';
// Gunakan huruf kecil untuk folder 'components'
import Sidebar from "../../components/Sidebar";
import StatCard from "../../components/StatCard";

const OwnerDashboard = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Dashboard Overview</h1>
          <div className="flex items-center gap-4">
            <input type="text" placeholder="Search data..." className="px-4 py-2 border rounded-lg bg-white" />
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          </div>
        </div>

        {/* Stats Grid - Sesuai Figma */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <StatCard label="Total Sales" value="Rp 25.400.000" trend="+12.5%" color="blue" />
          <StatCard label="Total Purchases" value="Rp 12.850.000" trend="-2.4%" color="purple" />
          <StatCard label="Low Stock Warning" value="8 Items" trend="Critical" color="orange" />
          <StatCard label="Total Products" value="142" trend="+4" color="green" />
        </div>

        {/* Recent Transactions Table */}
        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold">Recent Transactions</h3>
            <button className="text-blue-600 text-sm font-medium">View All</button>
          </div>
          <table className="w-full">
            <thead className="text-left text-gray-400 text-sm border-b">
              <tr>
                <th className="pb-4">DATE</th>
                <th className="pb-4">TRANSACTION ID</th>
                <th className="pb-4">CUSTOMER</th>
                <th className="pb-4">AMOUNT</th>
                <th className="pb-4">STATUS</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b last:border-0">
                <td className="py-4">Oct 26, 2023</td>
                <td className="text-blue-600 font-medium">TRX-001</td>
                <td>John Doe</td>
                <td>Rp 850.000</td>
                <td><span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">Completed</span></td>
              </tr>
              {/* Tambahkan lebih banyak baris sesuai screenshot */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default OwnerDashboard;