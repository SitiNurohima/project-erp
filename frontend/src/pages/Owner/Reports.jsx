import Sidebar from "../../components/Sidebar";

const Reports = () => {
  const stats = [
    { label: 'TOTAL SALES', value: 'Rp 45.200.000', change: '+12.5%', sub: 'vs Rp 39.800.000 last period', color: 'text-green-500 bg-green-50' },
    { label: 'ORDERS', value: '1,240', change: '+5.2%', sub: 'Total transactions completed', color: 'text-green-500 bg-green-50' },
    { label: 'PURCHASES', value: 'Rp 12.450.000', change: '-2.1%', sub: 'Procurement costs this month', color: 'text-red-500 bg-red-50' },
    { label: 'NET PROFIT', value: 'Rp 32.750.000', change: '+18.4%', sub: 'Net after expenses', color: 'text-green-500 bg-green-50' },
  ];

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen font-sans">
      <Sidebar />
      <div className="flex-1 p-10">
        
        {/* Header & Tabs */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-800">Merchant Performance Reports</h1>
            <p className="text-slate-400 text-sm font-medium">Real-time data for session.merchant_id: <span className="text-slate-600 font-bold">88291</span></p>
          </div>
          <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100">
            {['Daily', 'Weekly', 'Monthly'].map((tab) => (
              <button key={tab} className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${tab === 'Daily' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-slate-400 hover:text-slate-600'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Tab */}
        <div className="flex gap-8 border-b border-slate-200 mb-8">
          {['Sales', 'Purchases', 'Stock', 'Products'].map((cat, i) => (
            <button key={cat} className={`pb-4 text-sm font-bold flex items-center gap-2 ${i === 0 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400'}`}>
              {i === 0 ? '📈' : i === 1 ? '📦' : i === 2 ? '📊' : '🛍️'} {cat}
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-7 rounded-[32px] shadow-sm border border-slate-100 relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase">{stat.label}</p>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${stat.color}`}>{stat.change}</span>
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-1">{stat.value}</h3>
              <p className="text-[10px] text-slate-400 font-medium">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Main Content: Chart & Filter */}
        <div className="grid grid-cols-12 gap-8 mb-8">
          {/* Chart Section */}
          <div className="col-span-8 bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 relative">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-xl font-black text-slate-800">Sales Revenue Trends</h2>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400 border border-slate-100 text-xs">📥</button>
                <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400 border border-slate-100 text-xs">⋮</button>
              </div>
            </div>
            
            {/* Mock Chart Bars */}
            <div className="flex items-end justify-between h-52 px-4 relative">
                {/* Tooltip Mockup */}
                <div className="absolute top-[-20px] left-[52%] -translate-x-1/2 bg-slate-800 text-white text-[10px] p-2 rounded-lg shadow-xl z-10 text-center">
                    <p className="font-bold">Rp 8.9M</p>
                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
                </div>
                {[40, 60, 45, 80, 100, 75, 70].map((h, i) => (
                    <div key={i} className="flex flex-col items-center gap-4 w-full">
                        <div 
                            style={{ height: `${h}%` }} 
                            className={`w-16 rounded-t-lg transition-all ${i === 4 ? 'bg-blue-600 shadow-xl shadow-blue-100' : 'bg-slate-50 border border-slate-100 border-b-0'}`}
                        ></div>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">
                            {i === 4 ? 'Today' : `Oct ${24 + i}`}
                        </span>
                    </div>
                ))}
            </div>
          </div>

          {/* Filter Section */}
          <div className="col-span-4 bg-white p-8 rounded-[40px] shadow-sm border border-slate-100">
            <h2 className="text-xl font-black text-slate-800 mb-6">Report Filter</h2>
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Select Range</label>
            <div className="relative mb-6">
                <span className="absolute left-4 top-3 text-slate-400 text-xs">📅</span>
                <input readOnly value="Oct 1, 2023 - Oct 31, 2023" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 pl-10 pr-4 text-xs font-bold text-slate-600" />
            </div>

            {/* Calendar Mockup */}
            <div className="border border-slate-100 rounded-3xl p-4 mb-6">
                <div className="flex justify-between items-center mb-4 px-2">
                    <span className="text-slate-300 cursor-pointer">❮</span>
                    <span className="text-xs font-black text-slate-700">October 2023</span>
                    <span className="text-slate-300 cursor-pointer">❯</span>
                </div>
                <div className="grid grid-cols-7 text-center gap-y-2">
                    {['S','M','T','W','T','F','S'].map(d => <span key={d} className="text-[10px] font-bold text-slate-300">{d}</span>)}
                    {Array.from({length: 31}).map((_, i) => {
                        const day = i + 1;
                        const isSelected = day === 5 || day === 30;
                        const isInRange = day > 5 && day < 30;
                        return (
                            <div key={i} className={`text-[10px] py-1.5 font-bold cursor-pointer rounded-lg transition-all
                                ${isSelected ? 'bg-blue-600 text-white shadow-md shadow-blue-100' : isInRange ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}>
                                {day}
                            </div>
                        )
                    })}
                </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-4 rounded-[20px] font-bold text-sm shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all">
                Generate Report
            </button>
          </div>
        </div>

        {/* Recent Transactions Section */}
        <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-8 flex justify-between items-center border-b border-slate-50">
                <h2 className="text-xl font-black text-slate-800">Recent Transactions</h2>
                <button className="text-blue-600 text-xs font-bold hover:underline">View All Records</button>
            </div>
            <table className="w-full text-left">
                <thead>
                    <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <th className="px-8 py-4">Order ID</th>
                        <th className="px-8 py-4">Customer</th>
                        <th className="px-8 py-4">Date</th>
                        <th className="px-8 py-4">Amount</th>
                        <th className="px-8 py-4">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                    {[
                        { id: '#TRX-98212', name: 'Aris Munandar', date: '28 Oct 2023, 14:30', amt: 'Rp 450.000', status: 'SUCCESS' },
                        { id: '#TRX-98213', name: 'Siti Aminah', date: '28 Oct 2023, 15:15', amt: 'Rp 1.250.000', status: 'SUCCESS' },
                        { id: '#TRX-98214', name: 'Budi Santoso', date: '28 Oct 2023, 16:40', amt: 'Rp 89.000', status: 'PENDING' },
                    ].map((trx, i) => (
                        <tr key={i} className="text-xs font-medium text-slate-600 hover:bg-slate-50/50">
                            <td className="px-8 py-5 font-bold text-slate-800">{trx.id}</td>
                            <td className="px-8 py-5 text-slate-500">{trx.name}</td>
                            <td className="px-8 py-5 text-slate-400">{trx.date}</td>
                            <td className="px-8 py-5 font-bold text-slate-800">{trx.amt}</td>
                            <td className="px-8 py-5">
                                <span className={`px-3 py-1 rounded-lg font-black text-[10px] ${trx.status === 'SUCCESS' ? 'bg-green-50 text-green-500' : 'bg-orange-50 text-orange-500'}`}>
                                    {trx.status}
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

export default Reports;