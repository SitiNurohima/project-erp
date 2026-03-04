import Sidebar from '../../components/Sidebar';

const AuditLogs = () => {
  const logs = [
    { user: 'Andi Saputra', action: 'UPDATE', table: 'inventory_stock', details: 'Changed stock for "Kopi Arabica 1kg"...', time: '2023-10-27 14:32' },
    { user: 'Siti Lestari', action: 'CREATE', table: 'sales_transaction', details: 'New transaction created: ID-99812', time: '2023-10-27 12:15' },
    { user: 'Budi Kusuma', action: 'DELETE', table: 'product_list', details: 'Removed promotion "Monday Happy Sale"', time: '2023-10-27 11:02' },
  ];

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Security Audit Logs</h1>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex gap-4 mb-6">
            <input type="text" placeholder="Search actions or users..." className="flex-1 border border-gray-200 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-100" />
            <select className="border border-gray-200 rounded-xl px-4 py-2 text-gray-600 outline-none">
              <option>All Users</option>
            </select>
          </div>

          <div className="space-y-4">
            {logs.map((log, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex gap-4 items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                    log.action === 'DELETE' ? 'bg-red-400' : log.action === 'UPDATE' ? 'bg-orange-400' : 'bg-blue-400'
                  }`}>
                    {log.user[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{log.user} <span className="font-normal text-gray-500 text-sm">performed</span> {log.action}</p>
                    <p className="text-gray-500 text-sm truncate max-w-md">{log.details}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 font-mono">{log.time}</p>
                  <span className="text-[10px] font-bold text-gray-300 uppercase">{log.table}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditLogs;