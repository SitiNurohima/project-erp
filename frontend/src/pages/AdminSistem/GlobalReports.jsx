import React from 'react';
import Sidebar from '../../components/Sidebar'; // Panggil Sidebar manual

const GlobalReports = () => {
  // Ambil role dari localStorage buat nentuin siapa yang lagi liat
  const userRole = localStorage.getItem('userRole');

  // --- DATA SIMULASI (LOGIKA FILTER) ---
  // Kalau Super Admin, tampilin total semua merchant (12.2 Miliar)
  // Kalau Owner, tampilin data toko dia aja (misal 450 Juta)
  const reportData = {
    tpv: userRole === 'superadmin' ? 'Rp 12.204.100.000' : 'Rp 450.200.000',
    title: userRole === 'superadmin' ? 'Global Ecosystem Reports' : 'My Shop Performance',
    subtitle: userRole === 'superadmin' ? 'Total Processing Value (All Merchants)' : 'Total Processing Value (Your Merchant)',
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar muncul di kiri */}
      <Sidebar />

      {/* Konten Laporan di kanan */}
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">{reportData.title}</h1>
        
        <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm mb-8 hover:shadow-md transition-shadow">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
             <div>
               <p className="text-gray-400 text-sm font-medium mb-1">{reportData.subtitle}</p>
               <h2 className="text-4xl font-black text-gray-800 tracking-tight">{reportData.tpv}</h2>
             </div>
             
             <div className="flex gap-2 bg-gray-50 p-1.5 rounded-xl border border-gray-100">
               <button className="px-5 py-2 text-xs font-bold text-gray-400 hover:text-gray-600 transition-all">Daily</button>
               <button className="px-5 py-2 bg-white shadow-sm text-blue-600 rounded-lg text-xs font-bold transition-all">Monthly</button>
             </div>
           </div>

           {/* Chart Area */}
           <div className="h-64 bg-blue-50/30 rounded-3xl flex flex-col items-center justify-center text-blue-300 border-2 border-dashed border-blue-100 gap-2">
             <div className="flex gap-1 items-end h-16 mb-2">
                <div className="w-4 bg-blue-200 h-6 rounded-t-sm"></div>
                <div className="w-4 bg-blue-300 h-12 rounded-t-sm"></div>
                <div className="w-4 bg-blue-400 h-9 rounded-t-sm"></div>
                <div className="w-4 bg-blue-600 h-14 rounded-t-sm"></div>
             </div>
             <p className="font-bold italic text-sm">
               {userRole === 'superadmin' ? 'Visualizing All Merchant Trends' : 'Visualizing Your Shop Sales Trends'}
             </p>
           </div>
        </div>

        {/* Info Tambahan Khusus Super Admin */}
        {userRole === 'superadmin' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-600 p-6 rounded-[32px] text-white shadow-lg shadow-blue-100">
              <p className="text-[10px] font-black opacity-60 uppercase tracking-widest mb-1">Top Merchant This Month</p>
              <h4 className="text-xl font-bold">Kopi Kenangan Senja</h4>
              <p className="text-xs opacity-80 mt-1">Total: Rp 1.2B Transaction</p>
            </div>
            <div className="bg-white p-6 rounded-[32px] border border-gray-100">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">System Health Score</p>
              <h4 className="text-xl font-bold text-gray-800">Excellent (99.8%)</h4>
              <div className="w-full bg-gray-100 h-2 rounded-full mt-3 overflow-hidden">
                <div className="bg-green-500 h-full w-[99%]"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlobalReports;