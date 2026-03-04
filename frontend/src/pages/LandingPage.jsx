import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-6 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
          <span className="font-bold text-xl text-gray-800">ERP UMKM</span>
        </div>
        <div className="flex gap-4">
          <Link to="/login" className="px-6 py-2 text-gray-600 font-semibold">Login</Link>
          <Link to="/register" className="px-6 py-2 bg-blue-600 text-white rounded-xl font-bold">Try for Free</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-12 py-20 flex items-center justify-between gap-10">
        <div className="max-w-xl">
          <h1 className="text-5xl font-black text-gray-900 leading-tight mb-6">
            Simple Management for <span className="text-blue-600">Small Businesses</span>
          </h1>
          <p className="text-gray-500 text-lg mb-8">
            Sistem ERP all-in-one yang dirancang khusus untuk membantu bisnis kopi, retail, dan UMKM Anda tumbuh lebih cepat dengan manajemen inventaris dan kasir yang cerdas.
          </p>
          <Link to="/register" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-blue-100">
            Mulai Sekarang →
          </Link>
        </div> 
        <div className="bg-gray-100 w-125 h-87.5 rounded-3xl flex items-center justify-center text-gray-300 text-6xl">
        💻 Dashboard Preview
        </div>
      </header>

      {/* Features Grid */}
      <section className="px-12 py-20 bg-gray-50">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="font-bold text-xl mb-2">Smart POS</h3>
            <p className="text-gray-500 text-sm">Transaksi kasir cepat dan terintegrasi langsung ke laporan stok.</p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="font-bold text-xl mb-2">Inventory Control</h3>
            <p className="text-gray-500 text-sm">Pantau ketersediaan stok di berbagai gudang secara real-time.</p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="font-bold text-xl mb-2">Rich Analytics</h3>
            <p className="text-gray-500 text-sm">Laporan performa merchant yang detail untuk pengambilan keputusan.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;