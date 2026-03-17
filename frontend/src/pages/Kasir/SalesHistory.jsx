import Sidebar from '../../components/Sidebar';

const SalesHistory = () => {
  // Data dummy yang digunakan untuk tampilan dan juga sumber data EXPORT CSV
  const sales = [
    { id: '#INV-2024-00124', customer: 'Joko Susilo', initial: 'JS', color: 'bg-blue-100 text-blue-600', date: 'May 24, 2024', time: '14:32 PM', amount: 'Rp 125.000', status: 'PAID' },
    { id: '#INV-2024-00123', customer: 'Guest Customer', initial: 'G', color: 'bg-gray-100 text-gray-400', date: 'May 24, 2024', time: '13:15 PM', amount: 'Rp 45.000', status: 'PAID' },
    { id: '#INV-2024-00122', customer: 'Anita Maria', initial: 'AM', color: 'bg-purple-100 text-purple-600', date: 'May 24, 2024', time: '10:45 AM', amount: 'Rp 320.500', status: 'PAID' },
    { id: '#INV-2024-00121', customer: 'Budi Kusuma', initial: 'BK', color: 'bg-orange-100 text-orange-600', date: 'May 24, 2024', time: '09:12 AM', amount: 'Rp 12.000', status: 'REFUNDED' },
    { id: '#INV-2024-00120', customer: 'Guest Customer', initial: 'G', color: 'bg-gray-100 text-gray-400', date: 'May 23, 2024', time: '20:55 PM', amount: 'Rp 98.000', status: 'PAID' },
  ];

  // --- 1. FUNGSI EXPORT CSV (Jalan Otomatis) ---
  const handleExportCSV = () => {
    // Membuat header kolom CSV
    const headers = "Invoice No,Customer,Date,Time,Amount,Status\n";
    
    // Menyusun data baris demi baris
    const csvRows = sales.map(s => 
      `${s.id},${s.customer},${s.date},${s.time},"${s.amount.replace(/\./g, '')}",${s.status}`
    ).join("\n");
    
    // Proses download file
    const blob = new Blob([headers + csvRows], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Laporan_Penjualan_Warung_Barokah.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // --- 2. FUNGSI PRINT (Cetak Halaman) ---
  const handlePrint = () => {
    window.print();
  };

  // --- 3. FUNGSI MERCHANT SETTINGS ---
  const handleSettings = () => {
    alert("Masuk ke Pengaturan Toko Warung Barokah...");
  };

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen font-sans">
      {/* Sidebar dibungkus class no-print agar tidak ikut tercetak di kertas */}
      <div className="no-print">
        <Sidebar />
      </div>
      
      <div className="flex-1 p-10 overflow-y-auto">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-10 no-print">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⏳</span>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">Sales History</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">🔍</span>
              <input 
                type="text" 
                placeholder="Global search..." 
                className="bg-white border border-gray-100 py-2 pl-10 pr-4 rounded-xl text-sm outline-none w-64 shadow-sm"
              />
            </div>
            <button className="bg-white p-2 rounded-xl border border-gray-100 shadow-sm text-gray-400 hover:text-blue-600 transition-colors">🔔</button>
            <button 
              onClick={handleSettings}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all"
            >
               ⚙️ Merchant Settings
            </button>
          </div>
        </header>

        {/* Title & Export Section */}
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-3xl font-black text-slate-800 mb-1">Merchant Sales</h2>
            <p className="text-sm text-gray-400 font-medium">Viewing records for session merchant: <span className="text-slate-700 font-bold underline decoration-blue-200">Warung Barokah</span></p>
          </div>
          <div className="flex gap-3 no-print">
            <button 
              onClick={handleExportCSV}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-100 flex items-center gap-2 hover:bg-blue-700 transition-all active:scale-95"
            >
              📥 Export CSV
            </button>
            <button 
              onClick={handlePrint}
              className="bg-white border border-gray-100 p-3 rounded-xl shadow-sm hover:bg-gray-50 transition-all text-xl active:scale-95"
            >
              🖨️
            </button>
          </div>
        </div>

        {/* Filters Card */}
        <div className="bg-white p-6 rounded-[32px] border border-gray-50 shadow-sm mb-8 no-print">
          <div className="flex items-center justify-between gap-6">
            <div className="flex-1 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
              <input 
                type="text" 
                placeholder="Search by Invoice No or Customer name..." 
                className="w-full bg-slate-50/50 border border-gray-100 p-4 pl-12 rounded-2xl outline-none focus:ring-2 focus:ring-blue-100 text-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2">Timeframe</span>
              {['Today', 'Yesterday', 'This Week', 'Custom'].map((time) => (
                <button 
                  key={time}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${time === 'Today' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:bg-gray-50'}`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-[32px] border border-gray-50 shadow-sm overflow-hidden mb-8 printable-area">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100">
                <th className="px-8 py-5">Invoice No</th>
                <th className="px-8 py-5">Customer</th>
                <th className="px-8 py-5">Date & Time</th>
                <th className="px-8 py-5">Total Amount</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 no-print">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {sales.map((s) => (
                <tr key={s.id} className="hover:bg-slate-50 transition-colors group cursor-pointer">
                  <td className="px-8 py-6 text-sm font-black text-blue-600 hover:underline">{s.id}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black ${s.color}`}>
                        {s.initial}
                      </div>
                      <span className="text-sm font-bold text-slate-700">{s.customer}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-bold text-slate-700">{s.date}</p>
                    <p className="text-[10px] text-gray-400 font-medium">{s.time}</p>
                  </td>
                  <td className="px-8 py-6 text-sm font-black text-slate-800">{s.amount}</td>
                  <td className="px-8 py-6">
                    <span className={`text-[9px] font-black uppercase px-3 py-1 rounded-full border ${s.status === 'PAID' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-red-50 text-red-500 border-red-100'}`}>
                      {s.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 no-print">
                    <button className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1">
                       📄 View Receipt
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Stats Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {[
            { label: "Today's Revenue", val: 'Rp 2.450.000', change: '↗ 12%', color: 'text-green-500' },
            { label: "Average Transaction", val: 'Rp 82.500', change: '', color: '' },
            { label: "Total Orders", val: '42', change: '', color: '' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-50 shadow-sm">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">{stat.label}</p>
              <div className="flex items-end gap-3">
                <h3 className="text-3xl font-black text-slate-800 tracking-tighter">{stat.val}</h3>
                {stat.change && <span className={`text-xs font-bold mb-1 ${stat.color}`}>{stat.change}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Branding Footer */}
        <div className="flex items-center gap-3 opacity-30 mt-10 no-print">
           <img src="https://ui-avatars.com/api/?name=Warung+Barokah&background=0D8ABC&color=fff" className="w-8 h-8 rounded-full grayscale" alt="logo" />
           <div>
              <p className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Warung Barokah</p>
              <p className="text-[8px] font-bold text-gray-400">ID: MRCH-9821</p>
           </div>
        </div>
      </div>

      {/* --- CSS KHUSUS PRINT --- */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          .flex-1 { padding: 0 !important; }
          .printable-area { 
            border: none !important; 
            box-shadow: none !important; 
            width: 100% !important;
          }
          table { width: 100% !important; }
        }
      `}</style>
    </div>
  );
};

export default SalesHistory;