import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const CreateProduct = () => {
  const navigate = useNavigate();

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen font-sans">
      <Sidebar />
      <main className="flex-1 p-10">
        {/* Breadcrumb & Title */}
        <div className="mb-8">
          <nav className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
            <span>Products</span>
            <span className="text-slate-300">›</span>
            <span className="text-slate-600">Create New Product</span>
          </nav>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">Create New Product</h1>
          <p className="text-slate-400 text-sm mt-1">Add a new item to your shop's inventory catalog.</p>
        </div>

        <div className="grid grid-cols-12 gap-10">
          {/* Form Kiri (8 Kolom) */}
          <div className="col-span-8 space-y-8">
            
            {/* Section 1: Product Information */}
            <section className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
              <h3 className="text-slate-800 font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 text-sm">
                  ℹ️
                </div>
                Product Information
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Product Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Arabica Coffee Beans 250g" 
                    className="w-full bg-slate-50/50 border border-slate-100 p-4 rounded-2xl text-sm outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-200 transition-all font-medium" 
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Category</label>
                    <select className="w-full bg-slate-50/50 border border-slate-100 p-4 rounded-2xl text-sm outline-none focus:ring-4 focus:ring-blue-50 font-bold text-slate-600 appearance-none">
                      <option>Select Category</option>
                      <option>Footwear</option>
                      <option>Electronics</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Unit</label>
                    <select className="w-full bg-slate-50/50 border border-slate-100 p-4 rounded-2xl text-sm outline-none focus:ring-4 focus:ring-blue-50 font-bold text-slate-600 appearance-none">
                      <option>Select Unit</option>
                      <option>Pair</option>
                      <option>Pcs</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Pricing & Stock */}
            <section className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
              <h3 className="text-slate-800 font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 text-sm">
                  💰
                </div>
                Pricing & Stock
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Selling Price</label>
                  <div className="relative">
                    <span className="absolute left-4 top-4 text-slate-400 font-bold text-sm">Rp</span>
                    <input type="text" placeholder="0" className="w-full bg-slate-50/50 border border-slate-100 p-4 pl-12 rounded-2xl text-sm outline-none focus:ring-4 focus:ring-blue-50 font-bold" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Initial Stock</label>
                  <input type="number" placeholder="0" className="w-full bg-slate-50/50 border border-slate-100 p-4 rounded-2xl text-sm outline-none focus:ring-4 focus:ring-blue-50 font-bold" />
                </div>
                <div className="col-span-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Minimum Stock Alert</label>
                  <input type="number" placeholder="5" className="w-full bg-slate-50/50 border border-slate-100 p-4 rounded-2xl text-sm outline-none focus:ring-4 focus:ring-blue-50 font-bold" />
                  <p className="text-[10px] text-slate-400 mt-2 font-medium">Get notified when stock falls below this number.</p>
                </div>
              </div>
            </section>
            
            {/* Buttons */}
            <div className="flex justify-end gap-4 pt-4">
              <button 
                onClick={() => navigate('/products')}
                className="px-8 py-3.5 rounded-2xl text-sm font-black text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all"
              >
                Cancel
              </button>
              <button className="px-10 py-3.5 bg-blue-600 text-white rounded-2xl text-sm font-black shadow-xl shadow-blue-100 hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2">
                <span>📁</span> Create Product
              </button>
            </div>
          </div>

          {/* Kolom Kanan (4 Kolom) */}
          <div className="col-span-4 space-y-8">
            {/* Upload Area */}
            <div className="bg-white p-2 rounded-[32px] border border-slate-100 shadow-sm group">
              <div className="border-2 border-dashed border-slate-100 rounded-[28px] flex flex-col items-center justify-center text-center py-20 cursor-pointer group-hover:bg-slate-50 group-hover:border-blue-200 transition-all">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 text-2xl mb-4 group-hover:text-blue-400 transition-colors">
                  📷
                </div>
                <p className="text-xs text-slate-500 font-bold">Upload product image</p>
                <p className="text-[10px] text-slate-300 mt-2 font-medium">Recommended size 800x800px. JPG, PNG supported.</p>
              </div>
            </div>
            
            {/* Quick Tips */}
            <div className="bg-blue-600 p-8 rounded-[32px] shadow-xl shadow-blue-50">
              <h4 className="text-white font-black text-sm mb-4 flex items-center gap-2">
                <span className="text-blue-200">💡</span> Quick Tips
              </h4>
              <ul className="text-[11px] text-blue-100 space-y-4 font-medium leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-blue-300">•</span>
                  <span>Use clear, descriptive names for better searchability.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-300">•</span>
                  <span>Accurate stock levels help prevent overselling.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-300">•</span>
                  <span>Assign categories to organize your sales reports.</span>
                </li>
              </ul>
            </div>

            {/* Merchant ID Card */}
            <div className="bg-slate-50 p-6 rounded-[24px] border border-slate-100 flex items-center gap-4">
              <div className="text-xl">🔒</div>
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Authenticated Merchant</p>
                <p className="text-xs font-bold text-slate-600 font-mono">ID: mrc_8829_berkah</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateProduct;