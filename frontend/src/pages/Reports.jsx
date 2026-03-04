import Sidebar from '../components/Sidebar';

const Reports = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Merchant Performance Reports</h1>
        <p className="text-gray-500 mb-8">Real-time data for Merchant ID: MS-2023-8842</p>

        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Sales', value: 'Rp 45.200.000', change: '+12.5%', color: 'blue' },
            { label: 'Orders', value: '1,240', change: '+4.2%', color: 'green' },
            { label: 'Purchases', value: 'Rp 12.450.000', change: '-2.1%', color: 'red' },
            { label: 'Net Profit', value: 'Rp 32.750.000', change: '+8.4%', color: 'indigo' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
              <h3 className="text-xl font-bold text-gray-800">{stat.value}</h3>
              <span className={`text-xs font-bold ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-80 flex items-center justify-center">
          <div className="text-center">
            <div className="text-blue-600 text-4xl mb-2">📊</div>
            <p className="text-gray-500 font-medium">Sales Revenue Trends Chart</p>
            <p className="text-gray-400 text-sm italic">(Integrate with Chart.js later)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;