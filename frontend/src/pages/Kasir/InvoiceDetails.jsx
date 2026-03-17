import React from 'react';
import Sidebar from '../../components/Sidebar'; // Memastikan sidebar konsisten

const InvoiceDetails = () => {
  // Data dummy transaksi
  const invoiceData = {
    id: 'INV-2023-001',
    status: 'PAID',
    date: 'Oct 24, 2023',
    time: '14:30 WIB',
    cashier: 'Andi Pratama',
    customer: {
      name: 'Budi Santoso',
      type: 'Regular Member',
      phone: '+62 812-xxxx-009'
    },
    payment: {
      method: 'QRIS GPN',
      transactionId: 'TX-992010192'
    },
    items: [
      { name: 'Premium Arabica Coffee Beans', desc: 'Medium Roast - 250g', sku: 'COF-001', price: 45000, qty: 2, total: 90000 },
      { name: 'Paper Filter V60', desc: 'Pack of 40', sku: 'ACC-012', price: 12000, qty: 1, total: 12000 },
      { name: 'Oat Milk 1L', desc: 'Barista Edition', sku: 'DY-005', price: 35000, qty: 2, total: 70000 }
    ],
    summary: {
      subtotal: 172000,
      discount: 15000,
      serviceCharge: 8600,
      tax: 18920,
      grandTotal: 184520,
      pointsEarned: 185
    }
  };

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen font-sans">
      {/* Sidebar - Menghilangkan menu manual yang tidak perlu */}
      <div className="no-print">
        <Sidebar />
      </div>
      
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6 no-print">
          <span className="hover:text-blue-600 cursor-pointer">Sales History</span>
          <span>&rsaquo;</span>
          <span className="text-slate-800 underline underline-offset-4 decoration-blue-200">{invoiceData.id}</span>
        </nav>

        {/* Header Section */}
        <div className="flex justify-between items-start mb-8 no-print">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-black text-slate-800 tracking-tighter">Invoice Details</h1>
              <span className="bg-green-50 text-green-500 text-[10px] font-black px-3 py-1 rounded-full border border-green-100 uppercase">
                {invoiceData.status}
              </span>
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              📅 {invoiceData.date} • {invoiceData.time}
            </p>
          </div>
          <button 
            onClick={() => window.print()}
            className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-black text-xs shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center gap-2"
          >
            <span>🖨️</span> Print Invoice
          </button>
        </div>

        {/* Invoice Card */}
        <div id="printable-invoice" className="bg-white rounded-[40px] border border-gray-50 shadow-sm overflow-hidden mb-10">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">
                <th className="px-10 py-6">Product Item</th>
                <th className="px-8 py-6">SKU</th>
                <th className="px-8 py-6 text-right">Price</th>
                <th className="px-8 py-6 text-center">Qty</th>
                <th className="px-10 py-6 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 font-medium text-slate-700">
              {invoiceData.items.map((item, index) => (
                <tr key={index}>
                  <td className="px-10 py-6">
                    <p className="text-sm font-black text-slate-800">{item.name}</p>
                    <p className="text-[10px] text-gray-400 italic font-medium">{item.desc}</p>
                  </td>
                  <td className="px-8 py-6 text-[10px] text-gray-400 font-bold uppercase tracking-tighter">{item.sku}</td>
                  <td className="px-8 py-6 text-sm text-right text-slate-500">Rp {item.price.toLocaleString()}</td>
                  <td className="px-8 py-6 text-sm text-center font-black">{item.qty}</td>
                  <td className="px-10 py-6 text-sm font-black text-slate-800 text-right">Rp {item.total.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-50">
            <div className="space-y-6">
              <div className="bg-slate-50/50 p-6 rounded-3xl border border-slate-100">
                <p className="text-[10px] font-black text-gray-400 uppercase mb-4 tracking-widest flex items-center gap-2">
                  <span>ℹ️</span> Customer & Payment
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-gray-400">Customer:</span>
                    <span className="text-slate-800">{invoiceData.customer.name}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-gray-400">Metode Bayar:</span>
                    <span className="text-blue-600 uppercase">{invoiceData.payment.method}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-gray-400">Served By:</span>
                    <span className="text-slate-500">{invoiceData.cashier}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-sm font-bold text-gray-400">
                <span>Subtotal Items</span>
                <span className="text-slate-700">Rp {invoiceData.summary.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-red-500">
                <span>Discount Promo</span>
                <span>- Rp {invoiceData.summary.discount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-6 border-t border-slate-100 mt-4">
                <span className="text-xl font-black text-slate-800 tracking-tighter">Grand Total</span>
                <span className="text-4xl font-black text-blue-600">Rp {invoiceData.summary.grandTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50/50 py-4 text-center text-[9px] font-bold text-gray-300 uppercase tracking-[0.3em]">
            Terima kasih telah berkunjung ke Kopi Kenangan
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex justify-center gap-10 text-[10px] font-black text-gray-400 uppercase tracking-widest no-print pb-10">
          <button className="hover:text-blue-600 transition-all flex items-center gap-2 group">
            <span className="group-hover:-translate-y-1 transition-transform">📥</span> Download PDF
          </button>
          <button className="hover:text-red-500 transition-all flex items-center gap-2 group">
            <span className="group-hover:rotate-12 transition-transform">↺</span> Void Transaction
          </button>
        </div>
      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          .flex-1 { padding: 0 !important; }
          #printable-invoice { border: none !important; box-shadow: none !important; width: 100% !important; border-radius: 0 !important; }
        }
      `}</style>
    </div>
  );
};

export default InvoiceDetails;