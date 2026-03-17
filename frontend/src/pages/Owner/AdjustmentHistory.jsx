import Sidebar from "../../components/Sidebar";

const AdjustmentHistory = () => {
  const adjustments = [
    { 
      date: 'Oct 24, 2023', 
      time: '14:20', 
      product: 'iPhone 14 Pro Max', 
      sku: 'IP14-PM-128', 
      change: '+5 Units', 
      type: 'IN',
      reason: 'Manual Restock', 
      status: 'SUCCESS' 
    },
    { 
      date: 'Oct 23, 2023', 
      time: '09:15', 
      product: 'Logitech MX Master 3S', 
      sku: 'LOGI-MX3S-GR', 
      change: '-2 Units', 
      type: 'OUT',
      reason: 'Damaged Goods', 
      status: 'SUCCESS' 
    },
    { 
      date: 'Oct 22, 2023', 
      time: '11:45', 
      product: 'Samsung Galaxy S23 Ultra', 
      sku: 'SM-S918B-256GB', 
      change: '+10 Units', 
      type: 'IN',
      reason: 'Audit Correction', 
      status: 'SUCCESS' 
    },
  ];

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen font-sans text-slate-900">
      <Sidebar />
      <div className="flex-1 p-10">
        
        {/* Breadcrumbs & Header */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <nav className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
              <span>Inventory</span>
              <span>/</span>
              <span>Warehouse</span>
              <span>/</span>
              <span className="text-blue-600">History</span>
            </nav>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">Stock Adjustment History</h1>
            <p className="text-slate-400 text-sm font-medium mt-1">Audit trail for all manual stock corrections and warehouse movements.</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-black text-slate-700 shadow-sm hover:bg-slate-50 transition-all">
            📥 Export Audit Log
          </button>
        </div>

        {/* Filters & Search Card */}
        <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex-1 min-w-[300px] relative">
              <span className="absolute left-4 top-3.5 text-slate-400">🔍</span>
              <input 
                type="text" 
                placeholder="Search by product name, SKU, or reason..." 
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 text-sm outline-none focus:ring-4 focus:ring-blue-50 transition-all font-medium" 
              />
            </div>
            <div className="flex gap-4">
              <select className="bg-slate-50 border border-slate-100 rounded-2xl py-3.5 px-6 text-sm font-bold text-slate-600 outline-none">
                <option>All Reasons</option>
                <option>Restock</option>
                <option>Damage</option>
                <option>Audit</option>
              </select>
              <button className="bg-slate-900 text-white px-8 py-3.5 rounded-2xl text-sm font-bold shadow-lg shadow-slate-200 hover:bg-slate-800 transition-all">
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Main Table Card */}
        <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/20">
            <h2 className="text-xl font-black text-slate-800">Recent Adjustments</h2>
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Live Sync Enabled</span>
            </div>
          </div>

          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] bg-white">
                <th className="px-10 py-6">Timestamp</th>
                <th className="px-10 py-6">Product Information</th>
                <th className="px-10 py-6 text-center">Stock Change</th>
                <th className="px-10 py-6">Reason / Category</th>
                <th className="px-10 py-6 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {adjustments.map((adj, i) => (
                <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="px-10 py-6">
                    <p className="font-bold text-slate-800 text-sm">{adj.date}</p>
                    <p className="text-[10px] text-slate-400 font-medium">{adj.time}</p>
                  </td>
                  <td className="px-10 py-6">
                    <div className="flex flex-col">
                      <span className="font-black text-slate-800 text-sm group-hover:text-blue-600 transition-colors">{adj.product}</span>
                      <code className="text-[10px] text-slate-400 font-mono mt-0.5">{adj.sku}</code>
                    </div>
                  </td>
                  <td className="px-10 py-6 text-center">
                    <div className={`inline-flex items-center justify-center px-4 py-1.5 rounded-xl font-black text-sm ${adj.type === 'IN' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                      {adj.change}
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-lg">
                        {adj.reason}
                    </span>
                  </td>
                  <td className="px-10 py-6 text-right">
                    <span className="px-4 py-1.5 rounded-xl font-black text-[10px] tracking-widest border border-green-100 bg-green-50 text-green-600">
                      {adj.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Footer */}
          <div className="p-8 border-t border-slate-50 flex justify-between items-center bg-slate-50/30">
            <p className="text-xs text-slate-400 font-medium">Showing <span className="text-slate-900 font-bold">1-3</span> of 48 adjustments</p>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-slate-100">Previous</button>
              {[1, 2, 3].map(n => (
                <button key={n} className={`w-10 h-10 rounded-xl text-xs font-bold transition-all ${n === 1 ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'text-slate-400 hover:bg-white'}`}>
                  {n}
                </button>
              ))}
              <button className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-slate-100">Next</button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-center text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">
            Audit Compliance: Cloud Synced ✅
        </p>
      </div>
    </div>
  );
};

export default AdjustmentHistory;