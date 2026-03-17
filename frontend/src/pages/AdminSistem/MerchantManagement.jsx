import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar'; // Tambahkan import ini

const MerchantManagement = () => {
  const navigate = useNavigate();

  const merchants = [
    { id: 'M-001', name: 'Kopi Kenangan Senja', owner: 'Rafi Gumelar', status: 'Active', plan: 'Enterprise' },
    { id: 'M-002', name: 'Roti Bakar Bandung', owner: 'Siti Aminah', status: 'Pending', plan: 'Basic' },
  ];

  return (
    // 1. Tambahkan flex dan h-screen agar sidebar memenuhi layar
    <div className="flex bg-gray-50 min-h-screen">
      
      {/* 2. Panggil Sidebar di sini */}
      <Sidebar />

      {/* 3. Bungkus konten utama dengan flex-1 p-8 */}
      <div className="flex-1 p-8 overflow-y-auto">
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Merchant Management</h1>
          
          <button 
            onClick={() => navigate('/merchants/create')}
            className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-2.5 rounded-xl font-bold shadow-md shadow-blue-200"
          >
            + Register New Merchant
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-wider">Merchant ID</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-wider">Business Name</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-wider">Owner</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-wider text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {merchants.map(m => (
                <tr key={m.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-5 font-bold text-blue-600">{m.id}</td>
                  <td className="p-5 font-bold text-gray-800">{m.name}</td>
                  <td className="p-5 font-medium text-gray-600">{m.owner}</td>
                  <td className="p-5">
                    <span className={`px-3 py-1.5 rounded-md text-[10px] font-black tracking-wider ${m.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                      {m.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="p-5 text-center">
                    <button className="text-gray-400 hover:text-blue-600 mr-4 font-semibold transition-colors">Edit</button>
                    <button className="text-gray-400 hover:text-red-600 font-semibold transition-colors">Suspend</button>
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