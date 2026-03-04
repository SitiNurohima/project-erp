import Sidebar from '../components/Sidebar';

const PurchaseOrders = () => {
  const orders = [
    { id: 'PO-2024-001', supplier: 'Global Tech Supplies Co.', date: 'Oct 24, 2023', total: 'Rp 12.450.000', status: 'Completed' },
    { id: 'PO-2024-002', supplier: 'Pacific Raw Materials Ltd.', date: 'Oct 22, 2023', total: 'Rp 8.200.500', status: 'Pending' },
    { id: 'PO-2024-003', supplier: 'Packaging Pro Solutions', date: 'Oct 18, 2023', total: 'Rp 1.450.000', status: 'Completed' },
  ];

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Purchase Orders</h1>
            <p className="text-gray-500 text-sm">Manage and track your historical procurement and vendor orders.</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            + Create Purchase
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Order ID</th>
                <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Supplier</th>
                <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Date</th>
                <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Total Amount</th>
                <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-blue-50/30 transition-colors">
                  <td className="p-4 font-bold text-blue-600">{order.id}</td>
                  <td className="p-4 text-gray-700 font-medium">{order.supplier}</td>
                  <td className="p-4 text-gray-500">{order.date}</td>
                  <td className="p-4 font-semibold text-gray-800">{order.total}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrders;