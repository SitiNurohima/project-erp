import Sidebar from '../../components/Sidebar';

const AuditLogs = () => {
  const logs = [
    { initials: 'AS', user: 'Andi Saputra', role: 'Owner', action: 'UPDATE', table: 'inventory_items', details: 'Changed stock for "Kopi Arabica 1kg" from...', time: '2023-10-27 14:32:11', color: 'bg-blue-100 text-blue-600' },
    { initials: 'SL', user: 'Siti Lestari', role: 'Cashier', action: 'CREATE', table: 'sales_transactions', details: 'New transaction created ID: TR-99812', time: '2023-10-27 14:15:04', color: 'bg-purple-100 text-purple-600' },
    { initials: 'AS', user: 'Andi Saputra', role: 'Owner', action: 'LOGIN', table: 'auth_sessions', details: 'User login from IP 182.1.44.12 (Jakarta)', time: '2023-10-27 08:00:22', color: 'bg-orange-100 text-orange-600' },
    { initials: 'SY', user: 'System', role: 'Automated', action: 'BACKUP', table: 'merchant_data', details: 'Daily automated backup completed...', time: '2023-10-27 00:00:01', color: 'bg-slate-100 text-slate-600' },
  ];

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen font-sans text-slate-900">
      <Sidebar />
      <div className="flex-1 p-10">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">Audit Logs</h1>
            <p className="text-slate-400 text-sm mt-1 font-medium">
              Security event trail for Merchant ID: <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-bold">MS-2023-0842</span>
            </p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50 transition-all">
            📥 Export CSV
          </button>
        </div>

        {/* Filter Card */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 mb-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mb-2 block">Search Actions or Tables</label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-slate-400">🔍</span>
                <input type="text" placeholder="Filter by action or table..." className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 text-sm outline-none focus:ring-4 focus:ring-blue-50 transition-all" />
              </div>
            </div>
            <div className="col-span-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mb-2 block">User Role</label>
              <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 px-4 text-sm outline-none font-medium text-slate-600">
                <option>All Users</option>
              </select>
            </div>
            <div className="col-span-4">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mb-2 block">Date Range</label>
              <div className="flex items-center gap-2">
                <input type="date" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 px-4 text-xs outline-none" />
                <span className="text-slate-300">—</span>
                <input type="date" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 px-4 text-xs outline-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-50">
                <th className="pl-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">User</th>
                <th className="py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Action</th>
                <th className="py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Table</th>
                <th className="py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Details</th>
                <th className="pr-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {logs.map((log, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="pl-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-xs ${log.color.split(' ')[0]} ${log.color.split(' ')[1]}`}>
                        {log.initials}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{log.user}</p>
                        <p className="text-[10px] text-slate-400 font-medium">{log.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 text-center">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black tracking-wider ${log.color}`}>
                      {log.action}
                    </span>
                  </td>
                  <td className="py-5">
                    <code className="text-[11px] bg-slate-50 px-2 py-1 rounded text-slate-500 font-mono italic">{log.table}</code>
                  </td>
                  <td className="py-5">
                    <p className="text-xs text-slate-500 max-w-xs truncate font-medium">{log.details}</p>
                  </td>
                  <td className="pr-8 py-5 text-right">
                    <p className="text-[11px] font-bold text-slate-600">{log.time.split(' ')[0]}</p>
                    <p className="text-[10px] text-slate-400">{log.time.split(' ')[1]}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Mockup */}
          <div className="p-6 border-t border-slate-50 flex justify-between items-center bg-slate-50/30">
            <p className="text-xs text-slate-400 font-medium">Showing 1 to 5 of 1,248 entries</p>
            <div className="flex gap-1">
              {[1, 2, 3, '...', 250].map((p, i) => (
                <button key={i} className={`w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center transition-all ${p === 1 ? 'bg-blue-600 text-white shadow-md shadow-blue-100' : 'text-slate-400 hover:bg-white hover:text-blue-600'}`}>
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditLogs;