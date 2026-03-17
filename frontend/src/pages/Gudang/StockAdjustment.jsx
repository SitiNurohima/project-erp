import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';

const StockAdjustment = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen font-sans">
      <Sidebar />
      
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Breadcrumbs Section */}
        <nav className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
          Inventory {' > '} Warehouse {' > '} <span className="text-slate-800">Stock Adjustment Form</span>
        </nav>
        
        <h1 className="text-3xl font-black text-slate-800 tracking-tighter mb-1">Stock Adjustment Form</h1>
        <p className="text-xs font-bold text-gray-400 mb-8">Perform manual stock corrections. All adjustments are logged for audit compliance.</p>

        {/* Main Card Adjustment Details */}
        <div className="bg-white p-10 rounded-[40px] border border-gray-50 shadow-sm max-w-5xl">
          <h3 className="font-black text-slate-800 mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 text-sm">📊</span> 
            Adjustment Details
          </h3>
          
          <div className="space-y-8">
            {/* Row 1: Search & Quantity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-800 mb-2 block">Search Product</label>
                  <div className="relative">
                    <input type="text" placeholder="Samsung Galaxy S23 Ultra" className="w-full border p-4 rounded-2xl bg-gray-50 text-sm font-medium outline-none border-gray-100 focus:ring-4 focus:ring-blue-50 focus:border-blue-400 transition-all" />
                    <span className="absolute right-4 top-4">🔍</span>
                  </div>
                </div>

                {/* Selected Product Info Box */}
                <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl border border-gray-100 flex items-center justify-center text-xl shadow-sm">📱</div>
                    <div>
                      <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Selected Product</p>
                      <p className="font-black text-slate-800">Samsung Galaxy S23 Ultra</p>
                      <p className="text-[10px] text-gray-400 font-bold">SKU: SM-S918B-256GB</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-gray-400 font-black uppercase">Current Stock</p>
                    <p className="text-xl font-black text-slate-800">14 Units</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-800 mb-2 block">Quantity Change</label>
                  <input 
                    type="number" 
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full border p-4 rounded-2xl bg-white text-lg font-black outline-none border-gray-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-400 transition-all" 
                  />
                </div>
                
                {/* Stock Level Preview Badge */}
                <div className="bg-green-50 p-4 rounded-2xl border border-green-100 flex items-center gap-3">
                  <span className="text-green-500">✔</span>
                  <p className="text-xs font-bold text-green-600">New stock level: <span className="font-black">{14 + parseInt(quantity || 0)} units</span> (Valid)</p>
                </div>

                <div>
                   <label className="text-xs font-bold text-slate-800 mb-2 block">Reason for Adjustment</label>
                   <select className="w-full border p-4 rounded-2xl bg-gray-50 text-sm font-bold text-gray-400 outline-none border-gray-100 focus:ring-4 focus:ring-blue-50 transition-all">
                     <option>Select a reason...</option>
                     <option>Manual Restock</option>
                     <option>Damaged Goods</option>
                     <option>Inventory Audit</option>
                   </select>
                </div>
              </div>
            </div>

            {/* Row 2: Type & Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className="text-xs font-bold text-slate-800 mb-2 block">Adjustment Type</label>
                <div className="flex gap-4">
                  <button className="flex-1 bg-white text-blue-600 p-4 rounded-2xl text-xs font-black flex items-center justify-center gap-3 border-2 border-blue-600 shadow-xl shadow-blue-50 transition-all">
                    <span className="text-lg">⊕</span> Stock In
                  </button>
                  <button className="flex-1 bg-white text-gray-300 p-4 rounded-2xl text-xs font-black flex items-center justify-center gap-3 border-2 border-gray-100 hover:border-red-200 hover:text-red-400 transition-all">
                    <span className="text-lg">⊖</span> Stock Out
                  </button>
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-800 mb-2 block">Additional Notes</label>
                <textarea placeholder="Describe why this adjustment is being made..." className="w-full border p-4 rounded-2xl bg-gray-50 text-sm h-28 outline-none border-gray-100 focus:ring-4 focus:ring-blue-50 transition-all" />
              </div>
            </div>

            <div className="flex justify-between items-center pt-8 border-t border-gray-50">
              <button className="px-10 py-4 text-xs font-black text-gray-400 uppercase tracking-widest hover:text-slate-800 transition-all">Cancel</button>
              <div className="flex items-center gap-6">
                <div className="text-right no-print">
                   <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Authenticated As</p>
                   <p className="text-[10px] font-bold text-slate-500 underline">Admin_User_7821</p>
                </div>
                <button className="px-10 py-4 bg-blue-600 text-white rounded-[20px] text-xs font-black uppercase tracking-widest shadow-2xl shadow-blue-100 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center gap-3">
                  💾 Submit Adjustment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity Mini-Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-5xl">
          <div className="bg-white p-6 rounded-[32px] border border-gray-50 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">📊</div>
            <div>
              <p className="text-[10px] text-gray-400 font-black tracking-widest uppercase">Total Today</p>
              <p className="font-black text-slate-800">12 Adjustments</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-[32px] border border-gray-50 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-500">🕒</div>
            <div>
              <p className="text-[10px] text-gray-400 font-black tracking-widest uppercase">Last Activity</p>
              <p className="font-black text-green-500">2 hours ago</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-[32px] border border-gray-50 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500">🔒</div>
            <div>
              <p className="text-[10px] text-gray-400 font-black tracking-widest uppercase">Session Privacy</p>
              <p className="font-black text-slate-800">Merchant Restricted</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StockAdjustment;