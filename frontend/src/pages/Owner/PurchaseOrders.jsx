import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';

const PurchaseOrders = () => {
  const allOrders = [
    { id: '#PO-2024-001', supplier: 'Global Tech Supplies Co.', date: 'Oct 24, 2023', total: 'Rp 12.450.000', status: 'Completed', icon: '🚚' },
    { id: '#PO-2024-002', supplier: 'Pacific Raw Materials Ltd.', date: 'Oct 22, 2023', total: 'Rp 8.200.500', status: 'Pending', icon: '📊' },
    { id: '#PO-2024-003', supplier: 'Packaging Pro Solutions', date: 'Oct 18, 2023', total: 'Rp 1.450.000', status: 'Completed', icon: '📦' },
    { id: '#PO-2024-004', supplier: 'Apex Logistics', date: 'Oct 15, 2023', total: 'Rp 450.000', status: 'Cancelled', icon: '🏢' },
    { id: '#PO-2024-005', supplier: 'Urban Electronics', date: 'Oct 12, 2023', total: 'Rp 22.900.000', status: 'Pending', icon: '⚡' },
  ];

  const [activeTab, setActiveTab] = useState('All Orders');
  const [searchQuery, setSearchQuery] = useState('');

  // --- FUNGSI BARU DI SINI ---
  
  // 1. Fungsi Create Purchase
  const handleCreatePurchase = () => {
    const confirmCreate = window.confirm("Ingin membuat Purchase Order baru?");
    if (confirmCreate) {
      alert("Membuka form pembuatan PO baru... (Redirecting to /create-po)");
      // Di sini kamu bisa ganti dengan navigation: navigate('/purchase/create')
    }
  };

  // 2. Fungsi Export CSV (Beneran bisa download file)
  const handleExportCSV = () => {
    const headers = ["Order ID,Supplier,Date,Total,Status\n"];
    const rows = filteredOrders.map(o => 
      `${o.id},${o.supplier},${o.date},"${o.total}",${o.status}\n`
    );
    
    const blob = new Blob([...headers, ...rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', `purchase_orders_${activeTab.toLowerCase()}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    alert(`Berhasil mengunduh laporan ${activeTab}!`);
  };

  // --- LOGIKA FILTER TETAP SAMA ---
  const filteredOrders = allOrders.filter(order => {
    const matchesTab = activeTab === 'All Orders' || order.status === activeTab;
    const matchesSearch = order.supplier.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          order.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen font-sans text-slate-900">
      <Sidebar />
      <div className="flex-1 p-10">
        
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <nav className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Home › Purchase History</nav>
            <h1 className="text-3xl font-black text-slate-800">Purchase Orders</h1>
            <p className="text-slate-400 text-sm font-medium mt-1">Manage and track your historical procurement and vendor orders.</p>
          </div>
          {/* TRIGGER CREATE DISINI */}
          <button 
            onClick={handleCreatePurchase}
            className="bg-blue-600 text-white px-8 py-4 rounded-[20px] font-bold text-sm shadow-xl shadow-blue-100 hover:bg-blue-700 active:scale-95 transition-all flex items-center gap-2"
          >
            <span className="text-lg">⊕</span> Create Purchase
          </button>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden mb-8">
          
          <div className="flex px-8 border-b border-slate-50">
            {['All Orders', 'Pending', 'Completed', 'Cancelled'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-5 text-sm font-bold transition-all relative ${activeTab === tab ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {tab}
                {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-t-full"></div>}
              </button>
            ))}
          </div>

          <div className="p-6 flex justify-between items-center bg-slate-50/20">
            <div className="flex gap-4 items-center">
              <select className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-600 outline-none">
                <option>Last 30 Days</option>
                <option>Last 6 Months</option>
              </select>
              {/* TRIGGER EXPORT DISINI */}
              <button 
                onClick={handleExportCSV}
                className="text-xs font-black text-slate-500 flex items-center gap-1 hover:text-blue-600 transition-colors"
              >
                📥 Export CSV
              </button>
            </div>
            <div className="relative">
              <input 
                type="text"
                placeholder="Search orders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs outline-none focus:ring-2 focus:ring-blue-100 w-64 font-medium"
              />
            </div>
          </div>

          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50">
                <th className="px-10 py-5">Order ID</th>
                <th className="px-10 py-5">Supplier</th>
                <th className="px-10 py-5">Date</th>
                <th className="px-10 py-5 text-center">Total Amount</th>
                <th className="px-10 py-5">Status</th>
                <th className="px-10 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="px-10 py-6 font-bold text-blue-600 text-sm">{order.id}</td>
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-sm shadow-inner">
                        {order.icon}
                      </div>
                      <span className="font-bold text-slate-700 text-sm">{order.supplier}</span>
                    </div>
                  </td>
                  <td className="px-10 py-6 text-slate-400 font-medium text-xs">{order.date}</td>
                  <td className="px-10 py-6 font-black text-slate-800 text-sm text-center">{order.total}</td>
                  <td className="px-10 py-6">
                    <span className={`px-4 py-1.5 rounded-xl font-black text-[10px] tracking-widest border ${
                      order.status === 'Completed' ? 'bg-green-50 text-green-600 border-green-100' : 
                      order.status === 'Pending' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                      'bg-slate-50 text-slate-400 border-slate-100'
                    }`}>
                      ● {order.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-10 py-6 text-right">
                    <button className="text-slate-300 hover:text-slate-600 font-bold">•••</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="p-8 border-t border-slate-50 flex justify-between items-center bg-slate-50/10">
            <button className="text-xs font-bold text-slate-400 hover:text-slate-800">← Previous</button>
            <div className="flex gap-2">
              {[1, 2, 3].map(n => (
                <button key={n} className={`w-8 h-8 rounded-lg text-xs font-bold ${n === 1 ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400'}`}>{n}</button>
              ))}
            </div>
            <button className="text-xs font-bold text-slate-800">Next →</button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {[
            { label: 'TOTAL SPEND (MTD)', value: 'Rp 45.400.500', icon: '🛍️', color: 'text-blue-600 bg-blue-50' },
            { label: 'ACTIVE ORDERS', value: '12', icon: '📋', color: 'text-orange-600 bg-orange-50' },
            { label: 'ACTIVE SUPPLIERS', value: '48', icon: '🏢', color: 'text-green-600 bg-green-50' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 flex items-center gap-6">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl ${stat.color}`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase">{stat.label}</p>
                <h3 className="text-2xl font-black text-slate-800">{stat.value}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrders;