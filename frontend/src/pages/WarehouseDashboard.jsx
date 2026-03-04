import Sidebar from '../components/Sidebar';

const WarehouseDashboard = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Warehouse Overview</h1>
          <div className="text-sm text-gray-500">Merchant ID: MS-WAREHOUSE-01</div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Total Product In</p>
            <h3 className="text-3xl font-black text-blue-600">1,248</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Stock Out Today</p>
            <h3 className="text-3xl font-black text-red-500">42</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Low Stock Items</p>
            <h3 className="text-3xl font-black text-orange-500">18</h3>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
          <h2 className="font-bold text-gray-800 mb-6">Recent Stock Movement</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">IN</div>
                  <div>
                    <p className="font-bold text-sm text-gray-800">Smartphone Android X1</p>
                    <p className="text-xs text-gray-500 font-medium">Added to Warehouse A</p>
                  </div>
                </div>
                <p className="font-bold text-green-600">+150 Units</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehouseDashboard;