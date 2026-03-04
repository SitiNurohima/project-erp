import Sidebar from '../components/Sidebar';

const MerchantManagement = () => {
  const merchants = [
    { id: 'M-001', name: 'Kopi Kenangan Senja', owner: 'Rafi Gumelar', status: 'Active', plan: 'Enterprise' },
    { id: 'M-002', name: 'Roti Bakar Bandung', owner: 'Siti Aminah', status: 'Pending', plan: 'Basic' },
  ];

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Merchant Management</h1>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold">+ Register New Merchant</button>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase">Merchant ID</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase">Business Name</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase">Owner</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase">Status</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {merchants.map(m => (
                <tr key={m.id} className="border-b hover:bg-gray-50">
                  <td className="p-5 font-bold text-blue-600">{m.id}</td>
                  <td className="p-5 font-medium">{m.name}</td>
                  <td className="p-5 text-gray-600">{m.owner}</td>
                  <td className="p-5">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${m.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                      {m.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="p-5 text-center">
                    <button className="text-gray-400 hover:text-blue-600 mr-4">Edit</button>
                    <button className="text-gray-400 hover:text-red-600">Suspend</button>
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

export default MerchantManagement;