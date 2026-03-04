import { useState } from 'react';
import Sidebar from '../components/Sidebar';

const POS = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { id: 1, name: 'Crispy Fried Chicken', price: 25000, img: '🍗' },
    { id: 2, name: 'Iced Caramel Latte', price: 18000, img: '☕' },
    { id: 3, name: 'Chocolate Cupcake', price: 12000, img: '🧁' },
    { id: 4, name: 'French Fries', price: 15000, img: '🍟' },
  ];

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 flex p-6 gap-6">
        {/* PERBAIKAN: Mengubah flex-[2] menjadi flex-2 sesuai saran linter */}
        <div className="flex-2 bg-white rounded-3xl p-6 shadow-sm">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Point of Sale</h1>
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-100 transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {filteredProducts.map(p => (
              <div 
                key={p.id} 
                onClick={() => addToCart(p)}
                className="border border-gray-100 p-6 rounded-3xl hover:border-blue-500 hover:shadow-xl hover:shadow-blue-50/50 cursor-pointer transition-all bg-white group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform text-center">{p.img}</div>
                <p className="font-bold text-gray-800">{p.name}</p>
                <p className="text-blue-600 font-bold">Rp {p.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 bg-white rounded-3xl p-6 shadow-sm flex flex-col border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-xl">Current Order</h2>
            <button onClick={() => setCart([])} className="text-xs text-red-500 font-bold hover:underline">Clear All</button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            {cart.length === 0 ? (
              <div className="text-gray-400 text-center py-20">
                <div className="text-4xl mb-2">🛒</div>
                <p className="italic text-sm">Cart is empty</p>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl">
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{item.name}</p>
                    <p className="text-xs text-gray-500">Rp {item.price.toLocaleString()} x {item.qty}</p>
                  </div>
                  <p className="font-bold text-blue-600">Rp {(item.price * item.qty).toLocaleString()}</p>
                </div>
              ))
            )}
          </div>

          <div className="border-t border-dashed pt-6 mt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-800 font-bold text-lg">Total</span>
              <span className="text-blue-600 font-black text-2xl">Rp {totalPrice.toLocaleString()}</span>
            </div>
            <button 
              disabled={cart.length === 0}
              className={`w-full py-4 rounded-2xl font-bold shadow-lg transition-all ${
                cart.length === 0 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-100'
              }`}
            >
              Checkout & Print Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POS;