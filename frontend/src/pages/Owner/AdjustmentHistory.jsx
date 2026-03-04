import React from 'react';
import Sidebar from '../../components/Sidebar';

const AdjustmentHistory = () => {
  // Data dummy yang disesuaikan dengan screenshot referensi
  const historyData = [
    { 
      date: 'Oct 24, 14:20', 
      product: 'iPhone 14 Pro Max', 
      sku: 'IP14-PM-128', 
      change: '+5 Units', 
      reason: 'Manual Restock', 
      status: 'SUCCESS',
      type: 'in' 
    },
    { 
      date: 'Oct 23, 09:15', 
      product: 'Logitech MX Master 3S', 
      sku: 'LOGI-MX3S-GR', 
      change: '-2 Units', 
      reason: 'Damaged Goods', 
      status: 'SUCCESS',
      type: 'out' 
    },
    { 
      date: 'Oct 22, 11:45', 
      product: 'Samsung Galaxy S23 Ultra', 
      sku: 'SM-S918B-256GB', 
      change: '+10 Units', 
      reason: 'Audit Correction', 
      status: 'SUCCESS',
      type: 'in' 
    }
  ];

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen font-sans">
      <Sidebar />
      
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Breadcrumbs & Header Section */}
        <nav className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Inventory › Warehouse › History</nav>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tighter">Stock Adjustment History</h1>
            <p className="text-xs font-bold text-gray-400 mt-1">Audit trail for all manual stock corrections.</p>
          </div>
          <button className="bg-white border border-gray-200 text-slate-700 px-6 py-3 rounded-xl font-bold text-sm shadow-sm hover:bg-gray-50 transition-all">
            📥 Export Audit Log
          </button>
        </div>

        {/* Adjustment History Table Area */}
        <div className="bg-white rounded-[40px] border border-gray-50 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-gray-50 flex justify-between items-center">
            <h2 className="text-lg font-black text-slate-800 tracking-tight">Recent Adjustments</h2>
            <div className="flex gap-2">
              <select className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-[10px] font-black text-gray-400 uppercase outline-none">
                <option>All Reasons</option>
              </select>
            </div>
          </div>

          <table className="w-full text-left">
            <thead className="bg-gray-50/50">
              <tr className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <th className="px-8 py-5">Date</th>
                <th className="px-8 py-5">Product</th>
                <th className="px-8 py-5 text-center">Change</th>
                <th className="px-8 py-5">Reason</th>
                <th className="px-8 py-5 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {historyData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-6 text-xs font-bold text-slate-500">
                    {item.date}
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-black text-slate-800">{item.product}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">{item.sku}</p>
                  </td>
                  <td className={`px-8 py-6 text-sm text-center font-black ${item.type === 'in' ? 'text-green-500' : 'text-red-400'}`}>
                    {item.change}
                  </td>
                  <td className="px-8 py-6 text-xs text-slate-500 font-bold">
                    {item.reason}
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className="px-3 py-1 bg-green-50 text-green-500 text-[9px] font-black rounded-lg border border-green-100">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Footer Pagination */}
          <div className="p-6 bg-gray-50/50 flex justify-between items-center border-t border-gray-50">
            <p className="text-[10px] font-bold text-gray-400 uppercase">Audit Compliance: Cloud Synced ✅</p>
            <div className="flex gap-1">
              <button className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-[10px] font-bold text-gray-400">Previous</button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-[10px] font-bold shadow-md shadow-blue-100">1</button>
              <button className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-[10px] font-bold text-gray-400">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdjustmentHistory;