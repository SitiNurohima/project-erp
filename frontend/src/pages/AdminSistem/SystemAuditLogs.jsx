import React from 'react';
import Sidebar from '../../components/Sidebar'; // Jangan lupa path ../../ karena ada di folder AdminSistem

const SystemAuditLogs = () => {
  return (
    // 1. Tambahkan container flex agar Sidebar di kiri, Konten di kanan
    <div className="flex bg-gray-50 min-h-screen">
      
      {/* 2. Panggil Sidebar di sini */}
      <Sidebar />

      {/* 3. Beri class flex-1 agar konten mengambil sisa ruang layar */}
      <div className="flex-1 p-8 overflow-y-auto">
        
        <h1 className="text-2xl font-bold text-gray-800 mb-6">System Security Logs</h1>
        
        <div className="space-y-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition-shadow">
              <div className="flex gap-4 items-center">
                {/* Icon log status */}
                <div className="min-w-[40px] h-10 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 font-bold">⚠️</div>
                <div>
                  <p className="font-bold text-gray-800">New Merchant Suspended</p>
                  <p className="text-xs text-gray-500">Merchant ID: MS-9912 was suspended due to payment failure</p>
                </div>
              </div>
              <div className="text-left md:text-right">
                <p className="text-[10px] font-black text-gray-300 uppercase">Oct 27, 2023 • 09:15</p>
                <p className="text-xs font-bold text-gray-400">System Automator</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default SystemAuditLogs;