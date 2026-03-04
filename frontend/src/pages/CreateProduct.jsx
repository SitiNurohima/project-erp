import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigasi
import Sidebar from '../components/Sidebar';

const CreateProduct = () => {
  const navigate = useNavigate(); // Inisialisasi fungsi navigasi

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        {/* Tombol Back untuk kemudahan navigasi */}
        <button 
          onClick={() => navigate('/products')}
          className="text-blue-600 text-sm font-bold mb-4 flex items-center gap-1 hover:underline transition"
        >
          ← Back to Product List
        </button>

        <nav className="text-xs text-gray-400 mb-2">Products / Create New Product</nav>
        <h1 className="text-2xl font-bold mb-6">Create New Product</h1>

        <div className="grid grid-cols-3 gap-8">
          {/* Form Kiri */}
          <div className="col-span-2 space-y-6">
            <section className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <span className="text-blue-600">ℹ️</span> Product Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 block mb-1">Product Name</label>
                  <input type="text" placeholder="e.g. Arabica Coffee Beans 250g" className="w-full border p-2 rounded-lg text-sm bg-gray-50 outline-none focus:ring-2 focus:ring-blue-100" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 block mb-1">Category</label>
                    <select className="w-full border p-2 rounded-lg text-sm bg-gray-50 uppercase font-bold text-gray-600 outline-none">
                      <option>Select Category</option>
                      <option>Footwear</option>
                      <option>Electronics</option>
                      <option>Accessories</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 block mb-1">Unit</label>
                    <select className="w-full border p-2 rounded-lg text-sm bg-gray-50 outline-none">
                      <option>Select Unit</option>
                      <option>Pair</option>
                      <option>Unit</option>
                      <option>Pcs</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <span className="text-blue-600">💰</span> Pricing & Stock
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 block mb-1">Selling Price</label>
                  <input type="text" placeholder="Rp 0" className="w-full border p-2 rounded-lg text-sm bg-gray-50 outline-none" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 block mb-1">Initial Stock</label>
                  <input type="number" placeholder="0" className="w-full border p-2 rounded-lg text-sm bg-gray-50 outline-none" />
                </div>
                <div className="col-span-2">
                  <label className="text-xs font-semibold text-gray-500 block mb-1">Minimum Stock Alert</label>
                  <input type="number" placeholder="5" className="w-full border p-2 rounded-lg text-sm bg-gray-50 outline-none" />
                </div>
              </div>
            </section>
            
            <div className="flex justify-end gap-3">
              {/* Tombol Cancel mengarah kembali ke daftar produk */}
              <button 
                onClick={() => navigate('/products')}
                className="px-6 py-2 rounded-lg text-sm font-bold text-gray-400 hover:text-gray-600 transition"
              >
                Cancel
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-md hover:bg-blue-700 transition">
                Create Product
              </button>
            </div>
          </div>

          {/* Kanan: Upload & Tips */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-dashed border-gray-300 flex flex-col items-center justify-center text-center py-12 shadow-sm cursor-pointer hover:bg-gray-50 transition">
              <div className="text-4xl mb-2 text-gray-300">📷</div>
              <p className="text-xs text-gray-400 font-medium">Upload product image</p>
              <p className="text-[10px] text-gray-300 mt-2 uppercase">Max 2MB. JPG, PNG supported.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 shadow-sm">
              <h4 className="text-blue-600 font-bold text-sm mb-3">💡 Quick Tips</h4>
              <ul className="text-[11px] text-blue-500 space-y-2 list-disc pl-4 leading-relaxed">
                <li>Use clear, descriptive names for better searchability.</li>
                <li>Accurate stock levels help prevent overselling.</li>
                <li>Assign categories to organize your sales reports.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateProduct;