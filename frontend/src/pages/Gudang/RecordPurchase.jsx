import { useState } from 'react';
import Sidebar from "../../components/Sidebar";

const RecordPurchase = () => {
  // 1. STATE DENGAN ID YANG UNIK (Menggunakan randomUUID atau random string)
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), name: 'Premium Coffee Bean', qty: 10, cost: 150000 }
  ]);

  // 2. FUNGSI ADD ROW (Diperbaiki agar ID tidak bentrok)
  const addRow = () => {
    const newItem = { 
      id: crypto.randomUUID(), // Menghasilkan ID unik seperti "550e8400-e29b-..."
      name: '', 
      qty: 1, 
      cost: 0 
    };
    setItems([...items, newItem]);
  };

  // 3. FUNGSI DISCARD
  const handleDiscard = () => {
    if (window.confirm("Apakah Anda yakin ingin membatalkan semua input?")) {
      setItems([{ id: crypto.randomUUID(), name: '', qty: 1, cost: 0 }]);
    }
  };

  // 4. FUNGSI FINALIZE
  const handleFinalize = () => {
    alert("Purchase Berhasil Disimpan!");
    console.log("Data dikirim:", items);
  };

  // 5. KALKULASI
  const subtotal = items.reduce((acc, item) => acc + (item.qty * item.cost), 0);
  const tax = subtotal * 0.11;
  const total = subtotal + tax;

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen font-sans text-slate-900">
      <Sidebar />
      <div className="flex-1 p-10">
        <div className="flex justify-between items-start mb-8">
          <div>
            <nav className="text-xs text-slate-400 mb-2 font-medium">
              Inventory <span className="mx-1">›</span> <span className="text-slate-600">Record New Stock Purchase</span>
            </nav>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">Record New Stock Purchase</h1>
            <p className="text-slate-400 text-sm mt-1 font-medium">Gudang Warehouse • Merchant ID: #12345</p>
          </div>
          <div className="flex gap-3">
            <button onClick={handleDiscard} className="px-6 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-500 font-bold text-sm hover:bg-slate-50 transition-all">Discard</button>
            <button onClick={handleFinalize} className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">Finalize Purchase</button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8 space-y-8">
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-8 pb-4 flex justify-between items-center">
                <h3 className="flex items-center gap-2 font-bold text-slate-800">
                   <span className="text-blue-600">🛍️</span> Purchase Items
                </h3>
                <button onClick={addRow} className="text-blue-600 text-xs font-black uppercase tracking-widest hover:underline">+ Add Row</button>
              </div>
              
              <div className="px-8 pb-8">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="text-slate-400 uppercase tracking-widest font-black border-b border-slate-50">
                      <th className="py-4 font-black">Product Name</th>
                      <th className="py-4 font-black">Qty</th>
                      <th className="py-4 font-black">Unit Cost (IDR)</th>
                      <th className="py-4 font-black">Subtotal</th>
                      <th className="py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {items.map((item) => (
                      <tr key={item.id} className="group">
                        <td className="py-4">
                          <select 
                            className="bg-slate-50 border-0 rounded-xl p-3 w-4/5 text-slate-600 outline-none"
                            value={item.name}
                            onChange={(e) => {
                              const newItems = items.map(i => i.id === item.id ? {...i, name: e.target.value} : i);
                              setItems(newItems);
                            }}
                          >
                            <option value="">Select Product...</option>
                            <option value="Premium Coffee Bean">Premium Coffee Bean</option>
                            <option value="Brown Sugar 5kg">Brown Sugar 5kg</option>
                          </select>
                        </td>
                        <td className="py-4">
                          <input 
                            type="number" 
                            value={item.qty} 
                            onChange={(e) => {
                              const newItems = items.map(i => i.id === item.id ? {...i, qty: Number(e.target.value)} : i);
                              setItems(newItems);
                            }}
                            className="bg-slate-50 border-0 rounded-xl p-3 w-16 text-center outline-none" 
                          />
                        </td>
                        <td className="py-4">
                          <input 
                            type="number" 
                            value={item.cost} 
                            onChange={(e) => {
                              const newItems = items.map(i => i.id === item.id ? {...i, cost: Number(e.target.value)} : i);
                              setItems(newItems);
                            }}
                            className="bg-slate-50 border-0 rounded-xl p-3 w-24 outline-none" 
                          />
                        </td>
                        <td className="py-4 text-slate-800 font-bold">
                          {(item.qty * item.cost).toLocaleString('id-ID')}
                        </td>
                        <td className="py-4 text-right">
                          <button 
                            onClick={() => setItems(items.filter(i => i.id !== item.id))}
                            className="text-slate-300 hover:text-red-400 transition-colors"
                          >
                            🗑️
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <button onClick={addRow} className="w-full mt-6 py-4 border-2 border-dashed border-slate-100 rounded-2xl text-slate-400 text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                  + Add another product line
                </button>
              </div>
            </div>

            <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8">
              <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-6 text-sm">
                <span className="text-blue-600">📋</span> Additional Notes
              </h3>
              <textarea placeholder="Add remarks..." className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 text-sm outline-none focus:ring-4 focus:ring-blue-50 transition-all" rows="3"></textarea>
            </div>
          </div>

          <div className="col-span-4 space-y-8">
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8">
              <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-6 text-sm">
                <span className="text-blue-600">🏢</span> Supplier Details
              </h3>
              <select className="w-full bg-slate-50 p-4 rounded-2xl mb-6 text-sm outline-none border border-slate-100 font-medium">
                <option>PT. Sumber Makmur Sejahtera</option>
              </select>
            </div>

            <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8">
              <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-8 text-sm">
                <span className="text-blue-600">💳</span> Order Summary
              </h3>
              <div className="space-y-4 text-sm font-medium">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal</span>
                  <span className="text-slate-600">{subtotal.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Tax (11%)</span>
                  <span className="text-slate-600">{tax.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-50">
                  <span className="text-slate-800 font-black text-lg">Total</span>
                  <span className="text-blue-600 font-black text-lg">IDR {total.toLocaleString('id-ID')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordPurchase;