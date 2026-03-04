import React from 'react';
import Sidebar from '../../components/Sidebar';

const WarehouseDashboard = () => {
  const stockMovements = [
    { name: 'Smart Wireless Keyboard X2', movement: 'Inward', quantity: '+15 Units', time: '2 mins ago', status: 'COMPLETED', color: 'text-green-600', bg: 'bg-green-100' },
    { name: 'UltraHD 4K Monitor 27"', movement: 'Outward', quantity: '-3 Units', time: '45 mins ago', status: 'SHIPPED', color: 'text-red-500', bg: 'bg-red-100' },
    { name: 'Ergonomic Office Chair V3', movement: 'Inward', quantity: '+10 Units', time: '1 hour ago', status: 'COMPLETED', color: 'text-green-600', bg: 'bg-green-100' },
    { name: 'Mechanical Gaming Mouse', movement: 'Adj.', quantity: '-1 Unit', time: '3 hours ago', status: 'MANUAL', color: 'text-blue-600', bg: 'bg-blue-100' },
  ];

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen font-sans">
      <Sidebar />
      
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Top Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-black text-slate-800 tracking-tight">Warehouse Overview</h1>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Stock monitoring for Merchant Session: <span className="text-blue-600">session.merchant_id</span></p>
          </div>
          <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">👤</div>
            <div className="pr-4">
              <p className="text-sm font-black text-slate-800">Admin User</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase">Warehouse Manager</p>
            </div>
          </div>
        </div>

        {/* Top 3 Cards Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-[32px] border border-gray-50 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">📦</div>
              <span className="text-[10px] font-black text-green-500 bg-green-50 px-2 py-1 rounded-lg">+2.4%</span>
            </div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Products</p>
            <h3 className="text-3xl font-black text-slate-800 tracking-tighter">1,248</h3>
            <div className="w-full bg-gray-100 h-1.5 rounded-full mt-4 overflow-hidden">
              <div className="bg-blue-600 h-full w-[65%]"></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-[32px] border border-gray-50 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600">📈</div>
              <span className="text-[10px] font-black text-green-500 bg-green-50 px-2 py-1 rounded-lg">+12% Today</span>
            </div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Stock In (Today)</p>
            <h3 className="text-3xl font-black text-slate-800 tracking-tighter">42 <span className="text-xs text-gray-300">UNITS</span></h3>
            <p className="text-[10px] font-bold text-gray-400 mt-2 italic">Latest: Cargo Arrival #992</p>
          </div>

          <div className="bg-white p-6 rounded-[32px] border border-gray-50 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-600">📉</div>
              <span className="text-[10px] font-black text-red-500 bg-red-50 px-2 py-1 rounded-lg">-5% Today</span>
            </div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Stock Out (Today)</p>
            <h3 className="text-3xl font-black text-slate-800 tracking-tighter">18 <span className="text-xs text-gray-300">UNITS</span></h3>
            <p className="text-[10px] font-bold text-gray-400 mt-2 italic">Pending dispatch: 4 orders</p>
          </div>
        </div>

        {/* Monthly Trend Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50/50 p-8 rounded-[40px] border border-blue-100 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-600 rounded-[24px] flex items-center justify-center text-white text-2xl shadow-xl shadow-blue-200">📊</div>
              <div>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1">Stock In (This Month)</p>
                <h4 className="text-4xl font-black text-slate-800 tracking-tighter">1,520</h4>
                <p className="text-xs font-bold text-green-500 mt-1">↑ 8.1% vs last month</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 p-8 rounded-[40px] shadow-xl flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-slate-800 rounded-[24px] flex items-center justify-center text-white text-2xl border border-slate-700">📉</div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1 text-opacity-50">Stock Out (This Month)</p>
                <h4 className="text-4xl font-black text-white tracking-tighter">1,180</h4>
                <p className="text-xs font-bold text-green-400 mt-1">↑ 4.3% vs last month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Movements Table */}
        <div className="bg-white rounded-[40px] border border-gray-50 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-gray-50 flex justify-between items-center">
            <h2 className="text-lg font-black text-slate-800 tracking-tight">Recent Stock Movement</h2>
            <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline">View All</button>
          </div>
          <table className="w-full text-left">
            <thead className="bg-gray-50/50">
              <tr className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <th className="px-8 py-4">Product Name</th>
                <th className="px-8 py-4">Movement</th>
                <th className="px-8 py-4">Quantity</th>
                <th className="px-8 py-4">Time</th>
                <th className="px-8 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 font-bold">
              {stockMovements.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-5 text-sm text-slate-700">{item.name}</td>
                  <td className="px-8 py-5">
                    <span className={`text-[10px] font-black italic ${item.color === 'text-green-600' ? 'text-green-500' : 'text-red-400'}`}>
                      {item.movement === 'Inward' ? '↙ Inward' : item.movement === 'Outward' ? '↗ Outward' : '⇄ Adj.'}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm text-slate-800">{item.quantity}</td>
                  <td className="px-8 py-5 text-xs text-gray-400 font-medium">{item.time}</td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1 rounded-lg text-[9px] font-black tracking-tighter ${item.bg} ${item.color}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WarehouseDashboard;