import Sidebar from '../components/Sidebar';

const SuperAdminDashboard = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Super Admin Overview</h1>
        
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Active Merchants', value: '1,248', change: '+12%', color: 'blue' },
            { label: 'Total Revenue', value: 'Rp 4.2B', change: '+8%', color: 'green' },
            { label: 'Subscription Expiring', value: '42', change: '-2%', color: 'orange' },
            { label: 'System Health', value: '99.9%', change: 'Stable', color: 'indigo' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <p className="text-xs font-bold text-gray-400 uppercase mb-2">{stat.label}</p>
              <h3 className="text-2xl font-black text-gray-800">{stat.value}</h3>
              <span className="text-[10px] font-bold text-green-500">{stat.change}</span>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 h-64 flex items-center justify-center italic text-gray-400">
          Global Merchant Growth Chart (Line Chart Placeholder)
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;