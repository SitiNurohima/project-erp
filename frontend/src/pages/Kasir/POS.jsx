import { useState } from 'react';
import Sidebar from '../../components/Sidebar';

const POS = () => {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('All Items');
  const [searchTerm, setSearchTerm] = useState('');
  const [showReceipt, setShowReceipt] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cashAmount, setCashAmount] = useState('');
  const [customerName, setCustomerName] = useState(''); // State untuk Nama Customer

  const products = [
    { id: 1, name: 'Crispy Fried Chicken', price: 25000, stock: 12, img: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=300', status: 'In Stock', cat: 'Food' },
    { id: 2, name: 'Iced Caramel Latte', price: 18000, stock: 45, img: 'https://images.unsplash.com/photo-1572286258217-40142c1c6a70?auto=format&fit=crop&q=80&w=300', status: 'In Stock', cat: 'Beverage' },
    { id: 3, name: 'Chocolate Cupcake', price: 12000, stock: 3, img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=300', status: 'Low Stock', cat: 'Snacks' },
    { id: 4, name: 'Artisan Sourdough', price: 45000, stock: 8, img: 'https://images.unsplash.com/photo-1585478259715-876a6a81bce8?auto=format&fit=crop&q=80&w=300', status: 'In Stock', cat: 'Food' },
    { id: 5, name: 'Classic Beef Burger', price: 35000, stock: 0, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=300', status: 'Out of Stock', cat: 'Food' },
  ];

  const addToCart = (product) => {
    if (product.stock === 0) return;
    setCart((prev) => {
      const isExist = prev.find((item) => item.id === product.id);
      if (isExist) return prev.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.map((item) => item.id === id ? { ...item, qty: item.qty - 1 } : item).filter((item) => item.qty > 0));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const grandTotal = subtotal; // PAJAK DIHAPUS

  const handleCheckout = (method) => {
    if (cart.length === 0) return;
    setPaymentMethod(method);
    setShowReceipt(true);
  };

  const printReceipt = () => {
    window.print();
  };

  const filteredProducts = products.filter(p => {
    const matchCategory = category === 'All Items' || p.cat === category;
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen font-sans">
      <Sidebar />
      
      <div className="flex-1 flex overflow-hidden no-print">
        {/* SISI KIRI: PRODUK */}
        <div className="flex-[1.5] p-8 overflow-y-auto">
          <div className="flex flex-col gap-6 mb-8">
            <input 
              type="text" placeholder="Cari menu favorit..." 
              className="w-full bg-white border border-gray-100 p-4 rounded-2xl outline-none shadow-sm focus:ring-2 focus:ring-blue-100"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            <div className="flex gap-3 overflow-x-auto pb-2">
              {['All Items', 'Food', 'Beverage', 'Snacks'].map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-6 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${category === cat ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'bg-white text-gray-400 border border-gray-100'}`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((p) => (
              <div key={p.id} onClick={() => addToCart(p)} className={`bg-white rounded-[32px] overflow-hidden border border-gray-50 shadow-sm cursor-pointer hover:shadow-xl transition-all ${p.stock === 0 ? 'opacity-50 grayscale' : ''}`}>
                <div className="relative">
                  <img src={p.img} className="h-40 w-full object-cover" alt={p.name} />
                  <span className={`absolute top-3 right-3 px-2 py-1 rounded-lg text-[8px] font-black text-white ${p.status === 'In Stock' ? 'bg-green-500' : 'bg-red-500'}`}>
                    {p.status}
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-slate-800 mb-1 text-sm">{p.name}</h4>
                  <p className="text-blue-600 font-black">Rp {p.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SISI KANAN: CHECKOUT */}
        <div className="flex-1 bg-white border-l p-8 flex flex-col h-screen shadow-[-10px_0_30px_rgba(0,0,0,0.02)]">
          
          {/* INPUT NAMA CUSTOMER */}
          <div className="bg-blue-50/50 p-5 rounded-3xl flex items-center gap-4 mb-6 border border-blue-100/50">
            <div className="bg-blue-600 w-10 h-10 rounded-2xl flex items-center justify-center text-white text-sm shadow-lg shadow-blue-100 font-bold">👤</div>
            <div className="flex-1">
              <p className="text-[10px] font-black text-blue-600/50 uppercase tracking-widest">Nama Pelanggan (Opsional)</p>
              <input 
                type="text"
                placeholder="Walk-in Customer"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="bg-transparent border-none p-0 w-full font-black text-slate-800 text-sm focus:ring-0 outline-none placeholder:text-slate-300"
              />
            </div>
          </div>

          <h2 className="font-black text-xl mb-4 flex items-center gap-2">🛒 Order List</h2>
          
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            {cart.length === 0 && <p className="text-center text-gray-300 mt-20 italic">Keranjang kosong...</p>}
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl font-bold text-sm">
                <div className="flex-1">
                  <p className="text-slate-800">{item.name}</p>
                  <p className="text-xs text-blue-600">Rp {item.price.toLocaleString()}</p>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={() => removeFromCart(item.id)} className="bg-white w-8 h-8 rounded-xl shadow-sm hover:bg-red-50 hover:text-red-500 transition-colors">-</button>
                    <span className="w-4 text-center">{item.qty}</span>
                    <button onClick={() => addToCart(item)} className="bg-white w-8 h-8 rounded-xl shadow-sm hover:bg-blue-50 hover:text-blue-600 transition-colors">+</button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-6 space-y-4">
            {paymentMethod === 'CASH' && (
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Uang Tunai (Cash)</label>
                <input 
                  type="number" 
                  placeholder="Masukkan jumlah uang..." 
                  className="w-full bg-slate-50 border-none p-4 rounded-xl text-sm font-bold focus:ring-2 focus:ring-blue-100"
                  value={cashAmount}
                  onChange={(e) => setCashAmount(e.target.value)}
                />
              </div>
            )}

            <div className="flex justify-between items-end mb-2">
               <span className="text-xs font-black text-gray-300 uppercase tracking-widest">Total Bayar</span>
               <span className="text-3xl font-black text-blue-600">Rp {grandTotal.toLocaleString()}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <button 
                onClick={() => { setPaymentMethod('CASH'); }} 
                className={`py-4 rounded-2xl font-black text-[10px] transition-all ${paymentMethod === 'CASH' ? 'bg-blue-600 text-white shadow-lg' : 'border-2 border-blue-600 text-blue-600'}`}
               >💵 CASH</button>
               <button 
                onClick={() => { setPaymentMethod('QRIS'); }} 
                className={`py-4 rounded-2xl font-black text-[10px] transition-all ${paymentMethod === 'QRIS' ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-100 text-slate-400'}`}
               >📲 QRIS</button>
            </div>

            <button 
              onClick={() => handleCheckout(paymentMethod || 'CASH')} 
              disabled={cart.length === 0}
              className="w-full bg-blue-600 text-white py-5 rounded-[24px] font-black shadow-xl shadow-blue-100 hover:scale-[1.02] active:scale-95 transition-all disabled:bg-gray-200"
            >
              KONFIRMASI & PRINT 🧾
            </button>
          </div>
        </div>
      </div>

      {/* --- MODAL STRUK (TANPA PAJAK) --- */}
      {showReceipt && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 no-print">
          <div className="bg-white w-full max-w-sm rounded-[32px] overflow-hidden shadow-2xl animate-in zoom-in duration-300">
            <div className="p-8" id="printable-receipt">
              <div className="text-center mb-6">
                <h3 className="font-black text-xl uppercase tracking-tighter text-slate-800">ERP UMKM STORE</h3>
                <p className="text-[10px] text-gray-400">Bandung, Jawa Barat</p>
                <div className="border-b border-dashed my-4"></div>
              </div>

              {/* INFO CUSTOMER DI STRUK */}
              <div className="text-[10px] font-bold mb-4 uppercase">
                <div className="flex justify-between">
                  <span>Customer:</span>
                  <span>{customerName || 'Walk-in Customer'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Kasir:</span>
                  <span>Admin Kasir</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between text-xs font-bold">
                    <span className="text-gray-600">{item.name} x{item.qty}</span>
                    <span>Rp {(item.price * item.qty).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-dashed py-4 space-y-2 text-xs font-bold">
                <div className="flex justify-between text-lg font-black pt-2">
                  <span>TOTAL</span>
                  <span>Rp {grandTotal.toLocaleString()}</span>
                </div>
                
                {paymentMethod === 'CASH' && cashAmount && (
                  <>
                    <div className="flex justify-between text-blue-600 text-[10px]"><span>Bayar Tunai</span><span>Rp {Number(cashAmount).toLocaleString()}</span></div>
                    <div className="flex justify-between text-red-500 text-[10px]"><span>Kembalian</span><span>Rp {(Number(cashAmount) - grandTotal).toLocaleString()}</span></div>
                  </>
                )}
                <div className="flex justify-between text-[10px] pt-2 italic text-gray-400"><span>Metode:</span><span>{paymentMethod}</span></div>
              </div>

              <div className="text-center pt-6">
                <p className="text-[10px] font-bold text-slate-800 uppercase">TERIMA KASIH</p>
                <p className="text-[8px] text-gray-400 tracking-tighter">Powered by ERP UMKM</p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 grid grid-cols-2 gap-4">
              <button onClick={() => { setShowReceipt(false); setCart([]); setCashAmount(''); setPaymentMethod(''); setCustomerName(''); }} className="py-4 rounded-2xl text-xs font-bold text-gray-400 bg-white border">CLOSE</button>
              <button onClick={printReceipt} className="py-4 rounded-2xl text-xs font-black text-white bg-blue-600 shadow-lg shadow-blue-100">
                 PRINT RECEIPT
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STYLE PRINT */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #printable-receipt, #printable-receipt * { visibility: visible; }
          #printable-receipt { 
            position: absolute; 
            left: 0; 
            top: 0; 
            width: 80mm; 
            padding: 10px;
          }
          .no-print { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default POS;