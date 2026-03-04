import React from 'react';
import Sidebar from '../components/Sidebar';

const StockAdjustment = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        {/* PERBAIKAN DI SINI: Karakter '>' dibungkus dengan {' > '} */}
        <nav className="...">Inventory {' > '} Stock Adjustment Tool</nav>
        
        <h1 className="text-2xl font-bold mb-1">New Stock Adjustment</h1>
        <p className="text-xs text-gray-500 mb-8">Update inventory levels manually for accurate stock tracking.</p>

        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm max-w-4xl">
          <h3 className="font-bold mb-6 flex items-center gap-2">
            <span className="text-blue-600">📝</span> Adjustment Details
          </h3>
          
          <div className="space-y-6">
            <div>
              <label className="text-[10px] font-black text-gray-400 uppercase block mb-1">Select Product</label>
              <select className="w-full border p-3 rounded-xl bg-gray-50 text-sm font-medium outline-none border-gray-200">
                <option>🔍 Select a product from inventory...</option>
              </select>
              <p className="text-[10px] text-gray-400 mt-1 italic">Only products linked to your Merchant ID are displayed</p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase block mb-2">Adjustment Type</label>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white p-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border-2 border-blue-600">
                    <span>➕</span> Add Stock
                  </button>
                  <button className="flex-1 bg-white text-gray-400 p-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border-2 border-gray-100">
                    <span>➖</span> Subtract
                  </button>
                </div>
              </div>
              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase block mb-2">Quantity</label>
                <div className="relative">
                  <input type="number" placeholder="0" className="w-full border p-3 rounded-xl bg-gray-50 text-sm outline-none border-gray-200" />
                  <span className="absolute right-4 top-3.5 text-[10px] font-black text-gray-300 uppercase">UNITS</span>
                </div>
              </div>
            </div>

            <div>
              <label className="text-[10px] font-black text-gray-400 uppercase block mb-1">Reason for Adjustment</label>
              <textarea placeholder="Enter reason (e.g., Damaged goods, Stock take correction, Returns...)" className="w-full border p-3 rounded-xl bg-gray-50 text-sm h-32 outline-none border-gray-200" />
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button className="px-8 py-3 rounded-xl text-xs font-bold text-gray-400">Cancel</button>
              <button className="px-8 py-3 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition">Update Inventory</button>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="flex gap-4 mt-8 max-w-4xl">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 flex-1">
            <div className="bg-gray-50 p-2 rounded-lg">📊</div>
            <div>
              <p className="text-[9px] text-gray-400 font-black">TOTAL TODAY</p>
              <p className="font-bold text-sm">12 Adjustments</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 flex-1">
            <div className="bg-green-50 p-2 rounded-lg text-green-600">🕒</div>
            <div>
              <p className="text-[9px] text-gray-400 font-black uppercase">Last Activity</p>
              <p className="font-bold text-sm text-green-600 underline">2 hours ago</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 flex-1">
            <div className="bg-orange-50 p-2 rounded-lg">🔒</div>
            <div>
              <p className="text-[9px] text-gray-400 font-black uppercase">Session Privacy</p>
              <p className="font-bold text-sm">Merchant Restricted</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StockAdjustment;