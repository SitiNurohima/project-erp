import React from 'react';
import Sidebar from '../../components/Sidebar';

const InventoryStatus = () => {
  const stockItems = [
    { name: 'Gaming Mouse RGB Pro', sku: 'ACC-MSO-001', category: 'Electronics', stock: 8, unit: 'Pcs', min: 20, status: 'Low Stock' },
    { name: 'Ergonomic Office Chair', sku: 'FUR-CHR-042', category: 'Furniture', stock: 145, unit: 'Units', min: 50, status: 'Optimal' },
    { name: 'USB-C Hub 10-in-1', sku: 'ACC-HUB-099', category: 'Electronics', stock: 0, unit: 'Pcs', min: 10, status: 'Out of Stock' },
    { name: 'Waterproof Jacket Blue', sku: 'APP-JKT-112', category: 'Apparel', stock: 52, unit: 'Pcs', min: 15, status: 'Optimal' },
  ];

  // --- FUNGSI EXPORT CSV ---
  const handleExportCSV = () => {
    // Membuat header CSV
    const headers = ["Product Name,SKU,Category,Current Stock,Unit,Min Stock,Status\n"];
    
    // Mengonversi data stockItems ke baris CSV
    const csvContent = stockItems.map(item => 
      `${item.name},${item.sku},${item.category},${item.stock},${item.unit},${item.min},${item.status}`
    ).join("\n");

    const blob = new Blob([headers + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    
    link.setAttribute("href", url);
    link.setAttribute("download", "Warehouse_Inventory_Status.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    alert("Data Inventory berhasil diekspor ke CSV!");
  };

  // --- FUNGSI ADD NEW ITEM ---
  const handleAddNewItem = () => {
    // Sementara kita pakai prompt untuk simulasi input data
    const name = prompt("Masukkan Nama Produk Baru:");
    if (name) {
      alert(`Produk "${name}" berhasil didaftarkan ke sistem gudang!`);
      // Nanti di sini tempat kamu naruh fungsi POST ke database/backend
    }
  };

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen font-sans">
      <Sidebar />
      
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Header Section */}
        <nav className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Inventory › Warehouse Status</nav>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tighter">Warehouse Inventory Status</h1>
            <p className="text-xs font-bold text-gray-400 mt-1">Real-time stock monitoring for Session ID: <span className="text-blue-600">Merchant_08221</span></p>
          </div>
          <div className="flex gap-3">
            {/* Button Export CSV Aktif */}
            <button 
              onClick={handleExportCSV}
              className="bg-white border border-gray-200 text-slate-700 px-6 py-3 rounded-xl font-bold text-sm shadow-sm hover:bg-gray-50 transition-all flex items-center gap-2"
            >
              📥 Export CSV
            </button>
            {/* Button Add New Item Aktif */}
            <button 
              onClick={handleAddNewItem}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-black text-sm shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all"
            >
              + Add New Item
            </button>
          </div>
        </div>

        {/* Stats Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-[32px] border border-gray-50 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total SKUs</p>
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 text-xs">📋</div>
            </div>
            <h3 className="text-3xl font-black text-slate-800 tracking-tighter">1,240</h3>
            <p className="text-[10px] font-bold text-green-500 mt-1">📈 +2.4% vs last month</p>
          </div>

          <div className="bg-white p-6 rounded-[32px] border border-gray-50 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Low Stock Alerts</p>
              <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 text-xs">⚠️</div>
            </div>
            <h3 className="text-3xl font-black text-slate-800 tracking-tighter">15</h3>
            <p className="text-[10px] font-bold text-orange-400 mt-1 italic">Needs immediate attention</p>
          </div>

          <div className="bg-white p-6 rounded-[32px] border-red-50 border-2 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Out of Stock</p>
              <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center text-red-600 text-xs">🚫</div>
            </div>
            <h3 className="text-3xl font-black text-slate-800 tracking-tighter">3</h3>
            <p className="text-[10px] font-bold text-red-500 mt-1">! Critical loss of revenue</p>
          </div>

          <div className="bg-white p-6 rounded-[32px] border border-gray-50 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Value</p>
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 text-xs">💵</div>
            </div>
            <h3 className="text-3xl font-black text-slate-800 tracking-tighter text-ellipsis overflow-hidden">Rp 2.4B</h3>
            <p className="text-[10px] font-bold text-gray-400 mt-1 italic">Based on purchase price</p>
          </div>
        </div>

        {/* Filter & Table Area */}
        <div className="bg-white rounded-[40px] border border-gray-50 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-gray-50 flex gap-4">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
              <input type="text" placeholder="Search by product name, SKU, or category..." className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-blue-50 text-sm" />
            </div>
            <select className="px-6 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-xs font-bold text-gray-500 outline-none">
              <option>All Categories</option>
            </select>
          </div>

          <table className="w-full text-left">
            <thead className="bg-gray-50/50">
              <tr className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <th className="px-8 py-5">Product Name</th>
                <th className="px-8 py-5">SKU/Code</th>
                <th className="px-8 py-5">Category</th>
                <th className="px-8 py-5 text-center">Current Stock</th>
                <th className="px-8 py-5">Unit</th>
                <th className="px-8 py-5 text-center">Min. Stock</th>
                <th className="px-8 py-5 text-center">Status</th>
                <th className="px-8 py-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {stockItems.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center text-xs">🖼️</div>
                      <span className="text-sm font-black text-slate-800">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase">{item.sku}</td>
                  <td className="px-8 py-6 text-xs text-gray-500 font-bold">{item.category}</td>
                  <td className={`px-8 py-6 text-sm text-center font-black ${item.stock <= item.min ? 'text-orange-500' : 'text-slate-700'}`}>
                    {item.stock}
                  </td>
                  <td className="px-8 py-6 text-xs text-gray-400 font-bold">{item.unit}</td>
                  <td className="px-8 py-6 text-xs text-center text-gray-400 font-bold">{item.min}</td>
                  <td className="px-8 py-6 text-center">
                    <span className={`px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-tighter ${
                      item.status === 'Optimal' ? 'bg-green-50 text-green-600' : 
                      item.status === 'Low Stock' ? 'bg-orange-50 text-orange-600' : 'bg-red-50 text-red-600'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    {item.status === 'Low Stock' && <button className="text-blue-600 text-xs font-black hover:underline transition-all">Restock</button>}
                    {item.status === 'Out of Stock' && <button className="text-blue-600 text-[10px] font-black uppercase leading-tight text-right w-20">Purchase Order</button>}
                    {item.status === 'Optimal' && <button className="text-gray-300 text-sm">•••</button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-6 bg-gray-50/50 flex justify-between items-center border-t border-gray-50">
            <p className="text-[10px] font-bold text-gray-400 uppercase">Showing 1 to 4 of 1,240 items</p>
            <div className="flex gap-1">
              <button className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-[10px] font-bold text-gray-400">Previous</button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-[10px] font-bold">1</button>
              <button className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-[10px] font-bold text-gray-400">2</button>
              <button className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-[10px] font-bold text-gray-400">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryStatus;