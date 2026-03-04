import { useState } from 'react';
import Sidebar from '../components/Sidebar';

const ProductList = () => {
  // Data produk dummy
  const initialProducts = [
    { id: 1, name: 'Kopi Kenangan Mantan', category: 'Minuman', stock: 45, price: 'Rp 18.000' },
    { id: 2, name: 'Roti Bakar Cokelat', category: 'Makanan', stock: 12, price: 'Rp 15.000' },
    { id: 3, name: 'Susu UHT Full Cream', category: 'Minuman', stock: 5, price: 'Rp 6.000' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  
  // Logika pencarian otomatis
  const filteredProducts = initialProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex bg-gray-50 min-h-screen font-sans">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Inventory Products</h1>
            <p className="text-gray-500 mt-1">Manage your stock levels and product information</p>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">
            + Add New Product
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-6 relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          <input 
            type="text"
            placeholder="Search by product name or category..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-100 outline-none transition-all shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Table Area */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50/50 border-b border-gray-100">
              <tr>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-wider">Product Name</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-wider">Category</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-wider">Stock</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-wider">Price</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-wider text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((p) => (
                  <tr key={p.id} className="hover:bg-blue-50/20 transition-colors">
                    <td className="p-5 font-bold text-gray-800">{p.name}</td>
                    <td className="p-5 text-gray-600">
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium">{p.category}</span>
                    </td>
                    <td className="p-5">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${p.stock < 10 ? 'bg-red-500' : 'bg-green-500'}`}></span>
                        <span className="font-semibold text-gray-700">{p.stock} pcs</span>
                      </div>
                    </td>
                    <td className="p-5 font-medium text-gray-900">{p.price}</td>
                    <td className="p-5 text-center">
                      <button className="text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-all font-medium">Edit</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-10 text-center text-gray-400 italic">No products found for "{searchTerm}"</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;