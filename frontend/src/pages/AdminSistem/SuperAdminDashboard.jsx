import React from 'react';
import Sidebar from '../../components/Sidebar'; // Pastikan path import ini benar (naik 2 tingkat)

const SuperAdminDashboard = () => {
  return (
    <div className="flex bg-[#F8FAFC] min-h-screen font-sans">
      {/* 1. TAMBAHKAN SIDEBAR DI SINI */}
      <Sidebar />

      {/* 2. BUNGKUS KONTEN UTAMA AGAR TIDAK TERTUTUP SIDEBAR */}
      <div className="flex-1 p-10 overflow-y-auto">
        
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">Super Admin Overview</h1>
            <p className="text-sm text-gray-400 mt-1 font-medium">Monitoring global business activities and system health.</p>
          </div>
          <div className="flex gap-4">
              <button className="bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold text-gray-600 shadow-sm hover:bg-gray-50 transition-colors">Download Report</button>
              <div className="w-12 h-12 bg-blue-600 rounded-2xl shadow-lg shadow-blue-100 flex items-center justify-center text-white font-bold cursor-pointer hover:bg-blue-700 transition-colors">R</div>
          </div>
        </header>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Active Merchants', value: '1,248', change: '+12%', icon: '🏪', color: 'bg-blue-50 text-blue-600' },
            { label: 'Total Revenue', value: 'Rp 4.2B', change: '+8%', icon: '💰', color: 'bg-green-50 text-green-600' },
            { label: 'Subs. Expiring', value: '42', change: '-2%', icon: '⏳', color: 'bg-orange-50 text-orange-600' },
            { label: 'System Health', value: '99.9%', change: 'Stable', icon: '⚡', color: 'bg-indigo-50 text-indigo-600' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-7 rounded-[32px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-md transition-all">
              <div className={`${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-6`}>
                {stat.icon}
              </div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] mb-1">{stat.label}</p>
              <h3 className="text-3xl font-black text-slate-800 mb-2">{stat.value}</h3>
              <div className="flex items-center gap-1">
                  <span className={`text-xs font-bold ${stat.change.includes('-') ? 'text-red-500' : 'text-green-500'}`}>
                    {stat.change}
                  </span>
                  <span className="text-[10px] text-gray-300 font-medium italic">vs last month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Chart & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
          <div className="lg:col-span-2 bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 min-h-[400px]">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-bold text-lg text-slate-800">Merchant Growth Chart</h2>
              <select className="bg-gray-50 border border-gray-100 text-xs font-bold p-2.5 rounded-lg outline-none cursor-pointer">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="w-full h-64 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-100 flex flex-col items-center justify-center gap-2">
                <div className="flex gap-1 items-end h-32">
                  <div className="w-6 bg-blue-200 h-10 rounded-t-md hover:opacity-80 transition-opacity"></div>
                  <div className="w-6 bg-blue-300 h-20 rounded-t-md hover:opacity-80 transition-opacity"></div>
                  <div className="w-6 bg-blue-400 h-16 rounded-t-md hover:opacity-80 transition-opacity"></div>
                  <div className="w-6 bg-blue-600 h-28 rounded-t-md hover:opacity-80 transition-opacity"></div>
                  <div className="w-6 bg-blue-400 h-24 rounded-t-md hover:opacity-80 transition-opacity"></div>
                </div>
                <span className="text-xs font-bold text-slate-300 italic">Chart data visual will be rendered here</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
            <h2 className="font-bold text-lg text-slate-800 mb-6">Recent Alerts</h2>
            <div className="space-y-6">
              {[
                { m: 'Kopi Senja', t: 'Subs Expired', d: '2 mins ago', c: 'bg-red-50 text-red-600' },
                { m: 'Bakery Utama', t: 'New Register', d: '1 hour ago', c: 'bg-blue-50 text-blue-600' },
                { m: 'Retail Indo', t: 'System Issue', d: '3 hours ago', c: 'bg-orange-50 text-orange-600' }
              ].map((alert, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className={`${alert.c} w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold`}>{alert.m[0]}</div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">{alert.t}</p>
                    <p className="text-[10px] text-gray-400">{alert.m} • {alert.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-3 text-xs font-bold text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">View All Alerts</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;