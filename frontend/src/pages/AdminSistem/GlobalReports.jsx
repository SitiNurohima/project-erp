import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';

const GlobalReports = () => {
  // FIX: Inisialisasi langsung dengan nilai string agar tidak pernah 'null'
  const [userRole, setUserRole] = useState('superadmin'); 

  useEffect(() => {
    // Fungsi pengambil data yang aman
    const loadAuth = () => {
      try {
        const savedRole = localStorage.getItem('userRole');
        if (savedRole) {
          setUserRole(savedRole);
        } else {
          // Jika kosong, kita tanam 'superadmin' biar sistem jalan terus
          localStorage.setItem('userRole', 'superadmin');
        }
      } catch (err) {
        console.error("Gagal sinkronisasi role:", err);
      }
    };
    loadAuth();
  }, []);

  // Data Simulasi Merchant (Layar Monitoring)
  const [merchants] = useState([
    { id: 1, name: 'Kopi Kenangan Senja', owner: 'Andi Saputra', sales: 'Rp 1.2M', status: 'Online', lastActive: '2 mins ago', color: 'bg-blue-500', trx: 142 },
    { id: 2, name: 'Roti Bakar Barokah', owner: 'Siti Lestari', sales: 'Rp 450jt', status: 'Online', lastActive: 'Just now', color: 'bg-orange-500', trx: 89 },
    { id: 3, name: 'Susu Murni Jaya', owner: 'Budi Kusuma', sales: 'Rp 89jt', status: 'Offline', lastActive: '5 hours ago', color: 'bg-slate-400', trx: 12 },
    { id: 4, name: 'Indo Gadget Store', owner: 'Rian Perdana', sales: 'Rp 2.1B', status: 'Online', lastActive: '1 min ago', color: 'bg-indigo-500', trx: 210 },
  ]);

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen font-sans">
      <Sidebar />

      <div className="flex-1 p-10 overflow-y-auto">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <nav className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">System Monitoring</nav>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight italic">
                Control Center <span className="text-blue-600">.sys</span>
            </h1>
            {/* USER ROLE: Warna Biru Premium & Bold (Bukan Merah!) */}
            <p className="text-[10px] text-slate-400 font-bold mt-2 uppercase tracking-wider">
              System Access: <span className="text-blue-600 font-black px-3 py-1 bg-blue-50 rounded-lg border border-blue-100 ml-1 shadow-sm">
                {userRole}
              </span>
            </p>
          </div>
          
          <div className="flex gap-4">
             <div className="bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Merchants</p>
                <p className="text-xl font-black text-blue-600">128</p>
             </div>
             <button onClick={() => window.print()} className="bg-blue-600 text-white px-8 py-4 rounded-[20px] font-bold text-sm shadow-xl shadow-blue-100 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                <span>📥</span> Download Report
             </button>
          </div>
        </div>

        {/* Sales Overview Card */}
        <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm mb-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5 text-8xl group-hover:rotate-12 transition-transform select-none">📈</div>
            <p className="text-slate-400 text-sm font-bold mb-1">Network Total Revenue</p>
            <h2 className="text-5xl font-black text-slate-800 tracking-tighter mb-8">Rp 12.204.100.000</h2>
            
            <div className="flex gap-2 items-end h-20">
                {[40, 70, 45, 90, 65, 80, 100, 55, 95, 70].map((h, i) => (
                    <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-blue-600/10 rounded-t-lg hover:bg-blue-600 transition-all cursor-pointer"></div>
                ))}
            </div>
        </div>

        {/* Monitoring Grid */}
        <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            Live Merchant Feed
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {merchants.map((m) => (
                <div key={m.id} className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group cursor-pointer border-b-4 border-transparent hover:border-blue-500">
                    <div className="flex justify-between items-start mb-6">
                        <div className={`w-12 h-12 ${m.color} rounded-2xl flex items-center justify-center text-white text-xl font-black shadow-lg`}>
                            {m.name.charAt(0)}
                        </div>
                        <span className={`text-[9px] font-black px-3 py-1 rounded-full ${m.status === 'Online' ? 'bg-green-50 text-green-500 border border-green-100' : 'bg-slate-50 text-slate-400'}`}>
                            {m.status}
                        </span>
                    </div>
                    
                    <h4 className="font-black text-slate-800 text-lg leading-tight mb-1 group-hover:text-blue-600 transition-colors">{m.name}</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase mb-4 tracking-tighter italic">Owner: {m.owner}</p>
                    
                    <div className="pt-4 border-t border-slate-50 flex justify-between items-end">
                        <div>
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Revenue</p>
                            <p className="text-md font-black text-slate-800">{m.sales}</p>
                        </div>
                        <p className="text-[10px] text-slate-300 font-medium italic">{m.lastActive}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Ranking Table */}
        <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden mb-10">
            <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
                <h4 className="font-black text-slate-800 tracking-tight text-lg">Top Performance Ranking</h4>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Metric: <span className="text-blue-600 font-black">Daily Sales</span></div>
            </div>
            <table className="w-full text-left">
                <thead>
                    <tr className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] bg-white border-b border-slate-50">
                        <th className="px-10 py-5 text-center">#</th>
                        <th className="px-10 py-5">Merchant Info</th>
                        <th className="px-10 py-5 text-center">Transactions</th>
                        <th className="px-10 py-5 text-right">Revenue</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                    {merchants.sort((a,b) => b.id - a.id).map((m, index) => (
                        <tr key={m.id} className="hover:bg-slate-50/50 transition-colors group">
                            <td className="px-10 py-6 font-black text-slate-200 text-2xl italic group-hover:text-blue-100 transition-colors">{index + 1}</td>
                            <td className="px-10 py-6">
                                <p className="font-black text-slate-800 text-sm">{m.name}</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{m.owner}</p>
                            </td>
                            <td className="px-10 py-6 text-center">
                                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-[10px] font-black tracking-widest">{m.trx} TRX</span>
                            </td>
                            <td className="px-10 py-6 text-right font-black text-slate-800 text-sm tracking-tight">{m.sales}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default GlobalReports;