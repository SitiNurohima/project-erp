import Sidebar from '../../components/Sidebar';

const KasirDashboard = () => {
  return (
    <div className="flex bg-[#F8FAFC] min-h-screen font-sans">
      <Sidebar />
      
      <div className="flex-1 p-10 overflow-y-auto">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-xl font-bold text-slate-800">Overview</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">🔍</span>
              <input 
                type="text" 
                placeholder="Search transactions..." 
                className="bg-white border border-gray-100 py-2 pl-10 pr-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-100 w-64 shadow-sm"
              />
            </div>
            <button className="bg-white p-2 rounded-xl border border-gray-100 shadow-sm text-gray-500 hover:bg-gray-50">🔔</button>
            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
              <div className="text-right">
                <p className="text-[11px] font-bold text-slate-800">Admin Kasir</p>
                <p className="text-[9px] text-gray-400 font-medium uppercase tracking-tighter">Merchant ID : 8821</p>
              </div>
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xs shadow-inner">AK</div>
            </div>
          </div>
        </header>

        {/* Welcome Card */}
        <div className="bg-white p-10 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-50 mb-10 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-slate-800 mb-2">Selamat Datang, Kasir!</h2>
            <p className="text-gray-400 font-medium">Laporan harian toko Anda untuk tanggal 24 Mei 2024.</p>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {[
            { label: 'Today Sales', val: 'Rp 2.500.000', change: '+12.5%', icon: '💵' },
            { label: 'Transaction Count', val: '42', change: '+5.2%', icon: '🧾' },
            { label: 'Average Basket', val: 'Rp 59.500', change: '+2.1%', icon: '🛍️' }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[28px] border border-gray-50 shadow-sm relative group hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-green-50 w-10 h-10 rounded-xl flex items-center justify-center text-lg">{stat.icon}</div>
                <span className="bg-green-50 text-green-600 text-[10px] font-black px-2 py-1 rounded-full">{stat.change}</span>
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-3xl font-black text-slate-800 tracking-tight">{stat.val}</h3>
            </div>
          ))}
        </div>

        {/* Recent Sales Table Section */}
        <div className="bg-white rounded-[32px] border border-gray-50 shadow-sm overflow-hidden mb-10">
          <div className="p-8 flex justify-between items-center border-b border-gray-50">
            <h3 className="text-lg font-bold text-slate-800">Recent Sales</h3>
            <button className="text-blue-600 font-bold text-xs hover:underline">View All History</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50 text-gray-400 text-[10px] font-black uppercase tracking-widest">
                  <th className="px-8 py-4">Transaction ID</th>
                  <th className="px-8 py-4">Items</th>
                  <th className="px-8 py-4">Date & Time</th>
                  <th className="px-8 py-4">Total Amount</th>
                  <th className="px-8 py-4">Payment</th>
                  <th className="px-8 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { id: '#TRX-9902', items: 'Coffee Latte (2), Croissant (1)', time: 'Today, 14:20', total: 'Rp 125.000', pay: 'QRIS', status: 'Completed' },
                  { id: '#TRX-9901', items: 'Matcha Green Tea (1)', time: 'Today, 14:05', total: 'Rp 35.000', pay: 'Cash', status: 'Completed' },
                  { id: '#TRX-9899', items: 'Sandwich Platter (1), Juice (4)', time: 'Today, 13:45', total: 'Rp 245.500', pay: 'Debit Card', status: 'Completed' }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors cursor-pointer group">
                    <td className="px-8 py-5 text-sm font-black text-slate-700">{row.id}</td>
                    <td className="px-8 py-5 text-xs text-gray-500 font-medium">{row.items}</td>
                    <td className="px-8 py-5 text-xs text-gray-400 font-medium">{row.time}</td>
                    <td className="px-8 py-5 text-sm font-black text-slate-800">{row.total}</td>
                    <td className="px-8 py-5 text-xs text-gray-500 font-bold">{row.pay}</td>
                    <td className="px-8 py-5">
                      <span className="bg-green-50 text-green-600 text-[9px] font-black uppercase px-3 py-1 rounded-full border border-green-100">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="w-full py-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] border-t border-gray-50 hover:bg-gray-50 transition-colors">
            ⌄ Show More Transactions
          </button>
        </div>

        {/* Info Session Banner */}
        <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-2xl flex items-start gap-4">
          <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs shadow-lg shadow-blue-200">ℹ</div>
          <div>
            <h4 className="text-sm font-bold text-blue-900 mb-1">Informasi Sesi</h4>
            <p className="text-[11px] text-blue-700 leading-relaxed">
              Sesi kasir ini terbatas pada Merchant ID #8821. Pastikan Anda telah melakukan sinkronisasi stok sebelum memulai shift baru.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KasirDashboard;