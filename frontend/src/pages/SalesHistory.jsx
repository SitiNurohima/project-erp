import Sidebar from '../components/Sidebar';

const SalesHistory = () => {
  const sales = [
    { id: '#TRX-90212', customer: 'Andi Mahfudz', date: '25 Oct 2023', amount: 'Rp 450.000', status: 'SUCCESS' },
    { id: '#TRX-90213', customer: 'Siti Aminah', date: '25 Oct 2023', amount: 'Rp 1.250.000', status: 'SUCCESS' },
  ];

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Sales History</h1>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 text-xs font-bold text-gray-500">ORDER ID</th>
                <th className="p-4 text-xs font-bold text-gray-500">CUSTOMER</th>
                <th className="p-4 text-xs font-bold text-gray-500">DATE</th>
                <th className="p-4 text-xs font-bold text-gray-500">AMOUNT</th>
                <th className="p-4 text-xs font-bold text-gray-500">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {sales.map(s => (
                <tr key={s.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-bold text-blue-600">{s.id}</td>
                  <td className="p-4">{s.customer}</td>
                  <td className="p-4 text-gray-500">{s.date}</td>
                  <td className="p-4 font-bold">{s.amount}</td>
                  <td className="p-4"><span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-bold">{s.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesHistory;