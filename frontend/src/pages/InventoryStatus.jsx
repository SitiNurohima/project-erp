import Sidebar from '../components/Sidebar';

const InventoryStatus = () => {
  const stock = [
    { id: 1, name: 'Gaming Mouse RGB Pro', category: 'Electronics', current: 1240, reserved: 15, available: 1225 },
    { id: 2, name: 'Ergonomic Office Chair', category: 'Furniture', current: 48, reserved: 2, available: 46 },
  ];

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Warehouse Inventory Status</h1>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold shadow-lg shadow-blue-100">+ Add New Item</button>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-5 text-[10px] font-black text-gray-400 uppercase">Product Name</th>
                <th className="p-5 text-[10px] font-black text-gray-400 uppercase text-center">Current</th>
                <th className="p-5 text-[10px] font-black text-gray-400 uppercase text-center">Reserved</th>
                <th className="p-5 text-[10px] font-black text-gray-400 uppercase text-center">Available</th>
                <th className="p-5 text-[10px] font-black text-gray-400 uppercase text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {stock.map(item => (
                <tr key={item.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-5 font-bold text-gray-800">{item.name}</td>
                  <td className="p-5 text-center font-bold">{item.current}</td>
                  <td className="p-5 text-center text-orange-500 font-bold">{item.reserved}</td>
                  <td className="p-5 text-center text-green-600 font-bold">{item.available}</td>
                  <td className="p-5 text-center">
                    <span className="bg-green-100 text-green-600 text-[10px] font-black px-3 py-1 rounded-full uppercase">Optimal</span>
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

export default InventoryStatus;