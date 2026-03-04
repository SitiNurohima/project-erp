import Sidebar from '../components/Sidebar';

const KasirDashboard = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Selamat Datang, Kasir!</h1>
          <p className="text-gray-500">Laporan transaksi hari ini, 27 Oktober 2023</p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-gray-500 text-sm">Total Sales</p>
            <h3 className="text-2xl font-bold">Rp 2.500.000</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-gray-500 text-sm">Transaction Count</p>
            <h3 className="text-2xl font-bold">42</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-gray-500 text-sm">Average Basket</p>
            <h3 className="text-2xl font-bold">Rp 59.500</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KasirDashboard;