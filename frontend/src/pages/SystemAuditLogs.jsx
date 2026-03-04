import Sidebar from '../components/Sidebar';

const SystemAuditLogs = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">System Security Logs</h1>
        <div className="space-y-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 font-bold">⚠️</div>
                <div>
                  <p className="font-bold text-gray-800">New Merchant Suspended</p>
                  <p className="text-xs text-gray-500">Merchant ID: MS-9912 was suspended due to payment failure</p>
                </div>
              </div>
              <div className="text-right">
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